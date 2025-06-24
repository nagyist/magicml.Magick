import { SignUp } from '@clerk/nextjs'

const SignupPage = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <SignUp path="/sign-up" />
    </div>
  )
}

export default SignupPage
