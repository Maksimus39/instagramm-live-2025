import Link from 'next/link'

export default function Home() {
  return (
    <div className={'flex flex-col gap-4 p-10'}>
      <Link href={'./auth'}>Auth</Link>
      <Link href={'./auth/login'}>Login</Link>
      <Link href={'./auth/sign-up'}>SignUp</Link>
    </div>
  )
}
