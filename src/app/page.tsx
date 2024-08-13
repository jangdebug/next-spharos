
import LogInForm from "@/components/login/LogInForm";

export default function Page() {

  async function handleLogin(formData: FormData){
    'use server';

    const payload = {
      email: formData.get('email'),
      password: formData.get('password')
    }
    console.log(payload)

    // regex to validate email
    // fetch to server

  }
  return (
    <main>
      <LogInForm handleLogin = {handleLogin}/>
    </main>
  );
}