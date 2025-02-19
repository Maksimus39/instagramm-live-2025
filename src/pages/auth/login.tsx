import { useState, KeyboardEvent } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    console.log({ email: email, password: password })
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') {
      return
    }
    handleSubmit()
  }
  return (
    <div className={'h-screen grid place-items-center'}>
      <div className={'space-y-10'}>
        <div className={'flex flex-col gap-2'}>
          <label htmlFor={'email-input'}>Email: </label>
          <input
            id={'email-input'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email'
            onKeyDown={handleKeyDown}
          />

          <div className={'flex flex-col gap-1'}>
            <label htmlFor={'password-input'}>Password: </label>
            <input
              id={'password-input'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password'
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>

        <button onClick={handleSubmit}>Sign-in</button>
      </div>
    </div>
  )
}
