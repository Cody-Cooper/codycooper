interface ProcessEnv {
  NEXT_PUBLIC_GISCUS_REPO: string;
  NEXT_PUBLIC_GISCUS_REPOSITORY_ID: string;
  NEXT_PUBLIC_GISCUS_CATEGORY: string;
  NEXT_PUBLIC_GISCUS_CATEGORY_ID: string;
}

declare const process: {
  env: ProcessEnv;
};

export interface GiscusSetup {
  giscusConfig: {
    repo: string;
    repositoryId: string;
    category: string;
    categoryId: string;
    mapping: string;
    reactions: string;
    metadata: string;
    theme: string;
    inputPosition: string;
    lang: string;
    darkTheme: string;
    themeURL: string;
  };
}

export interface GiscusProps {}

export type LoadCommentsType = () => (() => void) | undefined;