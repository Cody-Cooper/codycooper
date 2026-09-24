"use client";

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";

const COMMENTS_ID = "comments-container";

const GISCUS_CONFIG = {
  repo: process.env.NEXT_PUBLIC_GISCUS_REPO ?? "",
  repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID ?? "",
  category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? "",
  categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? "",
  mapping: "pathname",
  reactions: "1",
  metadata: "0",
  inputPosition: "top",
  lang: "en",
};

function getGiscusTheme(theme: string | undefined) {
  return theme === "dark" ? "transparent_dark" : "preferred_color_scheme";
}

export default function Giscus() {
  const [commentsLoaded, setCommentsLoaded] = useState(false);
  const { resolvedTheme } = useTheme();

  const loadComments = useCallback(() => {
    const comments = document.getElementById(COMMENTS_ID);

    if (!comments || comments.querySelector("script, iframe")) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", GISCUS_CONFIG.repo);
    script.setAttribute("data-repo-id", GISCUS_CONFIG.repositoryId);
    script.setAttribute("data-category", GISCUS_CONFIG.category);
    script.setAttribute("data-category-id", GISCUS_CONFIG.categoryId);
    script.setAttribute("data-mapping", GISCUS_CONFIG.mapping);
    script.setAttribute("data-reactions-enabled", GISCUS_CONFIG.reactions);
    script.setAttribute("data-emit-metadata", GISCUS_CONFIG.metadata);
    script.setAttribute("data-input-position", GISCUS_CONFIG.inputPosition);
    script.setAttribute("data-lang", GISCUS_CONFIG.lang);
    script.setAttribute("data-theme", getGiscusTheme(resolvedTheme));
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    comments.appendChild(script);
    setCommentsLoaded(true);
  }, [resolvedTheme]);

  useEffect(() => {
    if (!commentsLoaded) {
      return;
    }

    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.giscus-frame"
    );

    iframe?.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme: getGiscusTheme(resolvedTheme),
          },
        },
      },
      "https://giscus.app"
    );
  }, [commentsLoaded, resolvedTheme]);

  return (
    <div className="py-6 text-center text-gray-800 dark:text-gray-200">
      {!commentsLoaded && (
        <button type="button" onClick={loadComments}>
          Load Comments
        </button>
      )}
      <div className="giscus" id={COMMENTS_ID} />
    </div>
  );
}
