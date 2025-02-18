import { ComponentProps } from 'react'
import { cn } from '@/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  ['rounded-md inline-flex px-3 py-2 text-slate-100'],
  {
    variants: {
      variant: {
        primary: [
          'bg-accent-500',
          'hover:bg-accent-300',
          'active:bg-accent-700',
        ],
        secondary: ['bg-dark-300', 'hover:bg-dark-100', 'active:bg-500'],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)
export type ButtonProps = VariantProps<typeof buttonVariants> &
  ComponentProps<'button'>

function Button({ variant, className, ...restProps }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant: variant }), className)}
      {...restProps}
    />
  )
}

export { Button }
