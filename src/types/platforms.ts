import { PLATFORMS } from '@/constants/platforms'

export type PlatformKey = keyof typeof PLATFORMS
export type PlatformValue = (typeof PLATFORMS)[PlatformKey]
