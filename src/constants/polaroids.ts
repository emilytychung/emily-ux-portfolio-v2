import type { StaticImageData } from 'next/image'
import bubbles from '@images/polaroids/bubbles.png'
import travelling from '@images/polaroids/travelling.png'
import cooking from '@images/polaroids/cooking.png'
import cafeHopping from '@images/polaroids/cafe.png'
import hikingInPeru from '@images/polaroids/hiking.png'

type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'ultrawide'

interface Position {
  top: string
  left: string
}

interface PolaroidData {
  imgFile: StaticImageData
  title: string
  rotations: Record<Breakpoint, number>
  position: Record<Breakpoint, Position>
  zIndex: number
}

export const POLAROID_DATA: PolaroidData[] = [
  {
    imgFile: bubbles,
    title: 'Bubbles (RIP)',
    rotations: {
      mobile: -5.2,
      tablet: -4.95,
      desktop: -4.95,
      ultrawide: -4.95,
    },
    position: {
      mobile: { top: '40px', left: '6px' },
      tablet: { top: '92px', left: '8px' },
      desktop: { top: '100px', left: '-140px' },
      ultrawide: { top: '100px', left: '-140px' },
    },
    zIndex: 10,
  },
  {
    imgFile: travelling,
    title: 'Travelling',
    rotations: {
      mobile: 3,
      tablet: 3.5,
      desktop: 3.5,
      ultrawide: 3.5,
    },
    position: {
      mobile: { top: '294px', left: '23px' },
      tablet: { top: '529px', left: '25px' },
      desktop: { top: '39px', left: '482px' },
      ultrawide: { top: '39px', left: '482px' },
    },
    zIndex: 20,
  },
  {
    imgFile: cooking,
    title: 'Cooking w/ friends',
    rotations: {
      mobile: 2.04,
      tablet: -1,
      desktop: -1,
      ultrawide: -1,
    },
    position: {
      mobile: { top: '863px', left: '22px' },
      tablet: { top: '788px', left: '284px' },
      desktop: { top: '279px', left: '759px' },
      ultrawide: { top: '279px', left: '759px' },
    },
    zIndex: 30,
  },
  {
    imgFile: cafeHopping,
    title: 'Cafe hopping',
    rotations: {
      mobile: 3,
      tablet: 3,
      desktop: 3,
      ultrawide: 3,
    },
    position: {
      mobile: { top: '864px', left: '22px' },
      tablet: { top: '261px', left: '293px' },
      desktop: { top: '261px', left: '199px' },
      ultrawide: { top: '261px', left: '199px' },
    },
    zIndex: 40,
  },
  {
    imgFile: hikingInPeru,
    title: 'Hiking in Peru',
    rotations: {
      mobile: -5.2,
      tablet: -5.2,
      desktop: -5.2,
      ultrawide: -5.2,
    },
    position: {
      mobile: { top: '1164px', left: '5px' },
      tablet: { top: '1034px', left: '7px' },
      desktop: { top: '100px', left: '1073px' },
      ultrawide: { top: '100px', left: '1073px' },
    },
    zIndex: 50,
  },
]
