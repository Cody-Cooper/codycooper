"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { GiscusSetup, GiscusProps, LoadCommentsType } from "./comments.types";

const Giscus: React.FC<GiscusProps> = () => {
  const [enableLoadComments, setEnabledLoadComments] = useState(true);
  const { theme, resolvedTheme } = useTheme();

  const giscusSetup: GiscusSetup = {
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO ?? "",
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID ?? "",
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? "",
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? "",
      mapping: "pathname",
      reactions: "1",
      metadata: "0",
      theme: "preferred_color_scheme",
      inputPosition: "top",
      lang: "en",
      darkTheme: "transparent_dark",
      themeURL: "",
    },
  };

  const COMMENTS_ID = "comments-container";

  const LoadComments: LoadCommentsType = useCallback(() => {
    setEnabledLoadComments(false);

    const {
      repo,
      repositoryId,
      category,
      categoryId,
      mapping,
      reactions,
      metadata,
      inputPosition,
      lang,
    } = giscusSetup.giscusConfig as GiscusSetup["giscusConfig"];

    const commentsTheme =
      giscusSetup.giscusConfig.themeURL === ""
        ? theme === "dark" || resolvedTheme === "dark"
          ? giscusSetup.giscusConfig.darkTheme
          : giscusSetup.giscusConfig.theme
        : giscusSetup.giscusConfig.themeURL;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", repo);
    script.setAttribute("data-repo-id", repositoryId);
    script.setAttribute("data-category", category);
    script.setAttribute("data-category-id", categoryId);
    script.setAttribute("data-mapping", mapping);
    script.setAttribute("data-reactions-enabled", reactions);
    script.setAttribute("data-emit-metadata", metadata);
    script.setAttribute("data-input-position", inputPosition);
    script.setAttribute("data-lang", lang);
    script.setAttribute("data-theme", commentsTheme);
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    const comments = document.getElementById(COMMENTS_ID);
    if (comments) comments.appendChild(script);

    return () => {
      const comments = document.getElementById(COMMENTS_ID);
      if (comments) comments.innerHTML = "";
    };
  }, [giscusSetup.giscusConfig, resolvedTheme, theme]);

  useEffect(() => {
    const iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe) return;
    LoadComments();
  }, [LoadComments]);

  return (
    <div className="pb-6 pt-6 text-center text-gray-800">
      {enableLoadComments && (
        <button onClick={LoadComments}>Load Comments</button>
      )}
      <div className="giscus" id={COMMENTS_ID} />
    </div>
  );
};

export default Giscus;
