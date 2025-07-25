import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { User } from '@models/user'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    // 로그인 성공 후 동작
    session({ session, token }) {
      console.log('session', session)
      console.log('token', token)

      if (session.user) {
        ;(session.user as User).id = token.sub as string
      }

      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    // 로그인 페이지 경로
    signIn: '/auth/signin',
  },
})
