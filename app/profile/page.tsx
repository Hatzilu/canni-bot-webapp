'use client';
import React from 'react';
import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div>
      Hello, {session?.user?.email}! you&apos;ve successfully authenticated!
    </div>
  );
}
