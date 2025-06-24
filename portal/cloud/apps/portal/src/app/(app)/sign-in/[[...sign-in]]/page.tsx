import { SignIn } from '@clerk/nextjs'

const SigninPage = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <SignIn path="/sign-in" />
    </div>
  )
}

export default SigninPage
