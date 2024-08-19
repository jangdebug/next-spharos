import { Button } from "../ui/button"
import { Input } from "../ui/input"

function LogInForm({ handleLogin }: { handleLogin: (formData: FormData) => void }) {

  return (
    <form action={handleLogin} className="flex flex-col items-center justify-center w-[80%] gap-2 mx-auto">
      <Input type="email" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />
      <Button type="submit" className="w-full">Sign Up</Button>
    </form>
  )
}

export default LogInForm
