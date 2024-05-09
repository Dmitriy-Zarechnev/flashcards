import { ComponentPropsWithoutRef } from 'react'

export type ButtonProps = {
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>

const Button = (props: ButtonProps) => {
  return <div></div>
}

export default Button
