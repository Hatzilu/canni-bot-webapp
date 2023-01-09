'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import NavbarIcon from '../NavbarIcon';
import { FaKey } from 'react-icons/fa';

export default function SignInButton() {
  return (
    <button className="pb-2" onClick={() => signIn()}>
      <NavbarIcon icon={<FaKey />} text="Sign in" />
    </button>
  );
}
