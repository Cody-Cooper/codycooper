const siteMetadata = {
  title: 'Cody Cooper CTF writeups and more',
  author: 'Cody Cooper',
  headerTitle: 'Cody Cooper',
  description:
    'A central location for me to host all my CTF write ups and other random things I decide to write.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://codycooper.io',
  siteRepo: 'https://github.com/Cody-Cooper/codycooper',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.svg',
  socialBanner: '/static/images/twitter-card.png',
  github: 'https://github.com/Cody-Cooper',
  twitter: 'https://twitter.com/cascodius',
  linkedin: 'https://www.linkedin.com/in/cascodia/',
  locale: 'en-US',
  analytics: {
    umamiWebsiteId: '3fc89c7b-57a8-4a9e-a3ae-c163bfa76037',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'preferred_color_scheme',
      inputPosition: 'top',
      lang: 'en',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
