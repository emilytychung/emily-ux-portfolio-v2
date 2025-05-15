import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string
}

export function CompassIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.3337 16C28.3337 22.8115 22.8118 28.3333 16.0003 28.3333C9.18881 28.3333 3.66699 22.8115 3.66699 16C3.66699 9.18845 9.18881 3.66663 16.0003 3.66663C22.8118 3.66663 28.3337 9.18845 28.3337 16Z"
        stroke="#0A84FF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M20.667 11.3333L13.3337 13.3333L11.3337 20.6666L18.667 18.6666L20.667 11.3333Z"
        stroke="#0A84FF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33268 7.66667V17.3333C5.33268 23.4085 10.2576 28.3333 16.3327 28.3333C20.1097 28.3333 23.4421 26.4297 25.4228 23.5295M9.66602 5.82828L16.3327 3L27.3327 7.66667V17.3333C27.3327 18.1398 27.2459 18.9261 27.0811 19.6832M2.66602 5L29.9993 27"
        stroke="#0A84FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function NotebookIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.334 4.33337H6.33398V27.6667H12.334M12.334 4.33337H27.0007V27.6667H12.334M12.334 4.33337V27.6667M17.6673 10.3334H21.6673M17.6673 15.6667H21.6673"
        stroke="#0A84FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LockIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9997 18.6666V22.6666M21.6663 13V9.33329C21.6663 6.20368 19.1293 3.66663 15.9997 3.66663C12.8701 3.66663 10.333 6.20368 10.333 9.33329V13M6.33301 13H25.6663V28.3333H6.33301V13Z"
        stroke="#0A84FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BalanceIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3327 3.66663V27M16.3327 27H9.33268M16.3327 27H23.3327M3.99935 7.66663H10.9993L13.666 6.33329H18.9993L21.666 7.66663H28.666M7.66602 7.66663L3.66602 20.3333C6.43525 21.9022 8.89678 21.9022 11.666 20.3333L7.66602 7.66663ZM24.9993 7.66663L20.9993 20.3333C23.7686 21.9022 26.2301 21.9022 28.9993 20.3333L24.9993 7.66663Z"
        stroke="#0A84FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12C9.71296 12 12.6667 9.04634 12.6667 2.33337C12.6667 9.04634 15.6204 12 22.3333 12C15.6204 12 12.6667 14.9537 12.6667 21.6667C12.6667 14.9537 9.71296 12 3 12Z"
        stroke="#0A84FF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6667 23.3334C22.0648 23.3334 24 21.3982 24 17C24 21.3982 25.9352 23.3334 30.3333 23.3334C25.9352 23.3334 24 25.2686 24 29.6667C24 25.2686 22.0648 23.3334 17.6667 23.3334Z"
        stroke="#0A84FF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IncreasingIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="27"
      height="23"
      viewBox="0 0 27 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <path
        d="M1.33398 1.70361V21.0369H26.0007M6.66732 15.7036L12.334 10.0369L15.0007 12.7036L23.334 4.37028M23.334 4.37028H17.334M23.334 4.37028V10.3703"
        stroke="#0A84FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function RocketIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <path
        d="M6.48148 15.0366H1.66667L5.66667 7.70329H12.3056M6.48148 15.0366L11.6667 20.2218M6.48148 15.0366L12.3056 7.70329M11.6667 20.2218V25.0366L19 21.0366V14.3977M11.6667 20.2218L19 14.3977M19 14.3977C23.1111 10.6292 25.6667 6.5181 25.6667 1.03662C20.1852 1.03662 16.0741 3.59218 12.3056 7.70329M3.74074 25.7033H1V22.9625C1 21.4489 2.22707 20.2218 3.74074 20.2218C5.25441 20.2218 6.48148 21.4489 6.48148 22.9625C6.48148 24.4762 5.25441 25.7033 3.74074 25.7033Z"
        stroke="#0A84FF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CrossFunctionalIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="25"
      height="27"
      viewBox="0 0 25 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <path
        d="M7.00033 25.0369L1.66699 19.7036L7.00033 14.3703M18.3337 12.3703L23.667 7.03695L18.3337 1.70361M3.33366 19.7036H23.667M1.66699 7.03695H22.3337"
        stroke="#0A84FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ThinkingIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="28"
      height="27"
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <path
        d="M14.0003 24.6649C14.9802 25.3208 16.1586 25.7033 17.4263 25.7033C20.2428 25.7033 22.6183 23.815 23.356 21.2354C25.1031 20.5189 26.3337 18.8011 26.3337 16.7959C26.3337 15.4538 25.7825 14.2405 24.8941 13.37C25.7825 12.4994 26.3337 11.2861 26.3337 9.94403C26.3337 7.47066 24.4615 5.43456 22.0569 5.17555C21.4582 2.79725 19.3052 1.03662 16.7411 1.03662C15.7426 1.03662 14.8066 1.30355 14.0003 1.76995M14.0003 24.6649C13.0204 25.3208 11.8421 25.7033 10.5744 25.7033C7.75785 25.7033 5.38233 23.815 4.64468 21.2354C2.89754 20.5189 1.66699 18.8011 1.66699 16.7959C1.66699 15.4538 2.2182 14.2405 3.10658 13.37C2.2182 12.4994 1.66699 11.2861 1.66699 9.94403C1.66699 7.47066 3.53917 5.43457 5.94371 5.17555C6.54249 2.79725 8.69543 1.03662 11.2596 1.03662C12.258 1.03662 13.1941 1.30355 14.0003 1.76995M14.0003 24.6649L14.0003 1.76995M9.66699 15.7033C12.0602 15.7033 14.0003 17.6434 14.0003 20.0366M18.3337 11.0366C15.9404 11.0366 14.0003 9.09652 14.0003 6.70329"
        stroke="#0A84FF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function RecognitionIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="22"
      height="31"
      viewBox="0 0 22 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <path
        d="M5.66602 19.3703V29.0369L11.3327 26.3703L16.9993 29.0369V19.3703M20.9993 11.3703C20.9993 16.709 16.6714 21.0369 11.3327 21.0369C5.99393 21.0369 1.66602 16.709 1.66602 11.3703C1.66602 6.03153 5.99393 1.70361 11.3327 1.70361C16.6714 1.70361 20.9993 6.03153 20.9993 11.3703Z"
        stroke="#0A84FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
;('')
