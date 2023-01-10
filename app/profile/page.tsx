'use client';
import React from 'react';
import { signOut } from 'next-auth/react';

export default function Profile() {
  return (
    <div>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
