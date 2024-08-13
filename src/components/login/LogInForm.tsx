import { Button } from "../ui/button"
import { Input } from "../ui/input"

function LogInForm({ handleLogin }: { handleLogin: (formData: FormData) => void }) {

  return (
    <form action={handleLogin}>
      <Input type="email" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />
      <Button type="submit">Sign Up</Button>
    </form>
  )
}

export default LogInForm
