import type { StaticImageData } from 'next/image'

type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'ultrawide'

interface Position {
  top: string
  left: string
}

export interface PolaroidData {
  imgFile: StaticImageData
  title: string
  rotations: Record<Breakpoint, number>
  position: Record<Breakpoint, Position>
  zIndex: number
}
