"use client";

import { useCallback, useState } from "react";
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

export default function Giscus() {
  const [canLoadComments, setCanLoadComments] = useState(true);
  const { resolvedTheme } = useTheme();

  const loadComments = useCallback(() => {
    const comments = document.getElementById(COMMENTS_ID);

    if (!comments || comments.querySelector("script, iframe")) {
      return;
    }

    setCanLoadComments(false);

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
    script.setAttribute(
      "data-theme",
      resolvedTheme === "dark" ? "transparent_dark" : "preferred_color_scheme"
    );
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    comments.appendChild(script);
  }, [resolvedTheme]);

  return (
    <div className="py-6 text-center text-gray-800 dark:text-gray-200">
      {canLoadComments && (
        <button type="button" onClick={loadComments}>
          Load Comments
        </button>
      )}
      <div className="giscus" id={COMMENTS_ID} />
    </div>
  );
}
