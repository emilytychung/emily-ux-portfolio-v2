const getEnvironment = () => {
  return {
    isProduction: process.env.NODE_ENV === 'production',
    isDevelopment: process.env.NODE_ENV === 'development',
    sitePassword: process.env.NEXT_PUBLIC_SITE_PASSWORD,
  }
}

const env = getEnvironment()

export default env
