"use client";

import { signIn, signOut, useSession} from 'next-auth/react'

export default function Home() {
  const session = useSession();
  return (
    <div>
      <h1>Homepage</h1>
     {session.data?.user ? (
      <div>
        <h1>Hello, {session.data.user.name}</h1>
        <button onClick = {() => signOut()}>logout</button>
      </div>
     ):(
      <button onClick = {() => signIn()}>Sign In</button>
     )}
    </div>
  )
}
