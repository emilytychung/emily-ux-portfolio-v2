// components/Button/Button.types.ts
export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: 'sm' | 'md'
  fullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  isLoading?: boolean
  className?: string
  children: React.ReactNode
}
