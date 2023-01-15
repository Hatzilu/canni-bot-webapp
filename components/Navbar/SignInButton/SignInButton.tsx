'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import NavbarIcon from '../NavbarIcon';
import { FaKey, FaUser } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function SignInButton() {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <Link className="pb-2" href={'/profile'}>
        <NavbarIcon icon={<FaUser />} text="Your profile" />
      </Link>
    );
  }
  return (
    <button className="pb-2" onClick={() => signIn()}>
      <NavbarIcon icon={<FaKey />} text="Sign in" />
    </button>
  );
}
