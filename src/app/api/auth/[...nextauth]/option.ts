import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        loginId: {
          label: "loginId",
          type: "text",
          placeholder: "로그인아이디를 입력해주세요.",
        },
        password: { label: "Password", type: "text" },
      },

      async authorize(credentials, req): Promise<any> {
        console.log(credentials);
        const user = {
          id: 1,
          name: "Jason",
          email: "test@gmail.com",
        };

        return user;

        // const res = await fetch("/your/endpoint", {
        //   method: "POST",
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" },
        // });
        // const user = await res.json();

        // if (res.ok && user) {
        //   return user;
        // }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
};
