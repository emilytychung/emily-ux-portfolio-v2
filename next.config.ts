import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // For local SVGs and images
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    localPatterns: [
      {
        pathname: '/images/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
