import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // For local SVGs and images
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },
}

export default nextConfig
