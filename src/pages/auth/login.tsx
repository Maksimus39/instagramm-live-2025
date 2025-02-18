import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button/button'

export default function Login() {
  return (
    <>
      <div className={'gap-4 p-8'}>
        <Link
          href={'./auth/sign-up'}
          className={buttonVariants({ variant: 'primary' })}
        >
          Sign-Up
        </Link>

        <Button asChild>
          <Link href={'./auth/sign-in'}>Sign-Up</Link>
        </Button>
      </div>
    </>
  )
}
