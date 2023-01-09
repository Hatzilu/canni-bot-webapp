'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import NavbarIcon from '../NavbarIcon';
import { FaKey } from 'react-icons/fa';
import { useSession } from 'next-auth/react';

export default function SignInButton() {
  const { data: session } = useSession();
  console.log({ session });
  return (
    <button className="pb-2" onClick={() => signIn()}>
      <NavbarIcon icon={<FaKey />} text="Sign in" />
    </button>
  );
}
