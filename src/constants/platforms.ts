import { PlatformKey, PlatformValue } from '@/types/platforms'

export const PLATFORMS = {
  desktop: 'DESKTOP',
  ios: 'IOS',
  android: 'ANDROID',
} as const

export function getPlatformDisplay(platform: PlatformKey): PlatformValue {
  return PLATFORMS[platform]
}
