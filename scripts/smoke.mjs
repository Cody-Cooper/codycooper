import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { createRequire } from "node:module";
import { setTimeout as delay } from "node:timers/promises";

const require = createRequire(import.meta.url);
const server = spawn(
  process.execPath,
  [require.resolve("next/dist/bin/next"), "start", "--hostname", "127.0.0.1", "--port", "0"],
  {
    stdio: ["ignore", "pipe", "pipe"],
    // Never send a subscription when running checks against production output.
    env: { ...process.env, MAILERLITE_API_TOKEN: "", MAILERLITE_GROUP_ID: "" },
  }
);
let output = "";
server.stdout.on("data", (chunk) => { output += chunk; });
server.stderr.on("data", (chunk) => { output += chunk; });

try {
  let origin;
  for (let attempt = 0; attempt < 150; attempt++) {
    const match = output.match(/http:\/\/127\.0\.0\.1:\d+/);
    if (match && output.includes("Ready")) {
      origin = match[0];
      break;
    }
    assert.equal(server.exitCode, null, output);
    await delay(200);
  }
  assert.ok(origin, `Production server did not start.\n${output}`);

  const checked = new Set();
  async function get(path, status = 200) {
    const response = await fetch(new URL(path, origin), {
      redirect: "manual",
      signal: AbortSignal.timeout(15_000),
    });
    assert.equal(response.status, status, `${path}: expected ${status}, got ${response.status}`);
    checked.add(path);
    return response;
  }

  const sitemap = await (await get("/sitemap.xml")).text();
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]));
  assert.ok(urls.length > 0, "Sitemap must contain pages");
  const canonicalOrigin = urls[0].origin;
  const paths = urls.map((url) => url.pathname);
  const articlePaths = paths.filter((path) => path.startsWith("/posts/"));
  assert.ok(articlePaths.length > 0, "Sitemap must contain articles");
  const localLinks = new Set();

  for (const path of paths) {
    const html = await (await get(path)).text();
    assert.match(html, /<h1\b/, `${path}: missing heading`);
    assert.match(html, /<link rel="canonical"/, `${path}: missing canonical URL`);
    assert.match(html, /<meta property="og:image"/, `${path}: missing social image`);
    if (path.startsWith("/posts/")) {
      assert.match(html, /property="og:image" content="[^" ]*\/api\/og\?title=/,
        `${path}: article social image was replaced by the fallback`);
    }
    for (const match of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
      const href = match[1].replaceAll("&amp;", "&");
      const url = new URL(href, origin);
      if (![origin, canonicalOrigin].includes(url.origin)) continue;
      if (url.pathname.startsWith("/_next/")) continue;
      localLinks.add(url.pathname + url.search);
    }
  }
  for (const path of localLinks) {
    if (!checked.has(path)) await get(path);
  }
  await get("/robots.txt");
  await get("/opengraph-image");
  const image = await get("/api/og?title=Smoke%20test");
  assert.match(image.headers.get("content-type"), /^image\/png/);
  await get("/not-a-real-page", 404);
  await get("/posts/not-a-real-article", 404);
  const signup = await fetch(`${origin}/api/newsletter`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "smoke@example.com" }),
    signal: AbortSignal.timeout(15_000),
  });
  assert.equal(signup.status, 503, "Signup must fail safely without credentials");
  assert.match((await signup.json()).message, /temporarily unavailable/);
  console.log(`Smoke checks passed: ${paths.length} pages, ${articlePaths.length} articles, ${checked.size} URLs, and newsletter fallback.`);
} catch (error) {
  console.error(output);
  throw error;
} finally {
  if (server.exitCode === null) {
    const exited = once(server, "exit");
    server.kill("SIGTERM");
    const forceStop = setTimeout(() => server.kill("SIGKILL"), 5_000);
    await exited;
    clearTimeout(forceStop);
  }
}
