import siteMetadata from '@/data/siteMetadata'
import Script from 'next/script'

const Analytics = () => {
  const isProduction = process.env.NODE_ENV === 'production'

  if (isProduction) {
    return (
      <>
        <Script
          async
          defer
          data-website-id={siteMetadata.analytics.umamiWebsiteId}
          src="https://umami.coopers.wtf/umami.js" // Replace with your umami instance
        />
      </>
    )
  }
}

export default Analytics
