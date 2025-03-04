import { PlatformKey, PlatformValue } from '@/types/platforms'

export const PLATFORMS = {
  desktop: 'Desktop',
  ios: 'iOS',
  android: 'Android',
} as const

export function getPlatformDisplay(platform: PlatformKey): PlatformValue {
  return PLATFORMS[platform]
}
