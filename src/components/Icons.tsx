import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
}

const DEFAULT_ICON_SIZE = 32

export function CompassIcon({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.3337 16C28.3337 22.8115 22.8118 28.3333 16.0003 28.3333C9.18881 28.3333 3.66699 22.8115 3.66699 16C3.66699 9.18845 9.18881 3.66663 16.0003 3.66663C22.8118 3.66663 28.3337 9.18845 28.3337 16Z"
        stroke="#0A84FF"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M20.667 11.3333L13.3337 13.3333L11.3337 20.6666L18.667 18.6666L20.667 11.3333Z"
        stroke="#0A84FF"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export function ShieldIcon({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33268 7.66667V17.3333C5.33268 23.4085 10.2576 28.3333 16.3327 28.3333C20.1097 28.3333 23.4421 26.4297 25.4228 23.5295M9.66602 5.82828L16.3327 3L27.3327 7.66667V17.3333C27.3327 18.1398 27.2459 18.9261 27.0811 19.6832M2.66602 5L29.9993 27"
        stroke="#0A84FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export function NotebookIcon({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.334 4.33337H6.33398V27.6667H12.334M12.334 4.33337H27.0007V27.6667H12.334M12.334 4.33337V27.6667M17.6673 10.3334H21.6673M17.6673 15.6667H21.6673"
        stroke="#0A84FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export function LockIcon({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9997 18.6666V22.6666M21.6663 13V9.33329C21.6663 6.20368 19.1293 3.66663 15.9997 3.66663C12.8701 3.66663 10.333 6.20368 10.333 9.33329V13M6.33301 13H25.6663V28.3333H6.33301V13Z"
        stroke="#0A84FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export function BalanceIcon({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3327 3.66663V27M16.3327 27H9.33268M16.3327 27H23.3327M3.99935 7.66663H10.9993L13.666 6.33329H18.9993L21.666 7.66663H28.666M7.66602 7.66663L3.66602 20.3333C6.43525 21.9022 8.89678 21.9022 11.666 20.3333L7.66602 7.66663ZM24.9993 7.66663L20.9993 20.3333C23.7686 21.9022 26.2301 21.9022 28.9993 20.3333L24.9993 7.66663Z"
        stroke="#0A84FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export function SparkleIcon({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 12C9.71296 12 12.6667 9.04634 12.6667 2.33337C12.6667 9.04634 15.6204 12 22.3333 12C15.6204 12 12.6667 14.9537 12.6667 21.6667C12.6667 14.9537 9.71296 12 3 12Z"
        stroke="#0A84FF"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.6667 23.3334C22.0648 23.3334 24 21.3982 24 17C24 21.3982 25.9352 23.3334 30.3333 23.3334C25.9352 23.3334 24 25.2686 24 29.6667C24 25.2686 22.0648 23.3334 17.6667 23.3334Z"
        stroke="#0A84FF"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
  )
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

export function ChartLineUpIcon({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}

export function LightbulbIcon({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2v4" />
      <path d="m4.93 10.93 2.83-2.83" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="m19.07 10.93-2.83-2.83" />
      <path d="M12 6a6 6 0 0 0-6 6c0 4 6 6 6 6s6-2 6-6a6 6 0 0 0-6-6Z" />
    </svg>
  )
}

export function ArrowPathIcon({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 2a3 3 0 0 1 1.8 5.5L17 12" />
      <path d="m17 22-5-5" />
      <path d="M14.5 22h-9a3 3 0 0 1-2.4-4.8l6.2-8.3" />
      <path d="m7 17 4-5" />
      <path d="M17 2h-7" />
    </svg>
  )
}

export function RocketLaunchIcon({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

export function BrainIcon({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  )
}
