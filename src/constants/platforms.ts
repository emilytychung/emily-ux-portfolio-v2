export const PLATFORMS = {
  desktop: 'Desktop',
  ios: 'iOS',
  android: 'Android',
} as const

// Type utilities for the platforms
export type PlatformKey = keyof typeof PLATFORMS
export type PlatformValue = (typeof PLATFORMS)[PlatformKey]

// Optional: Create a type-safe function to get platform display text
export function getPlatformDisplay(platform: PlatformKey): PlatformValue {
  return PLATFORMS[platform]
}
