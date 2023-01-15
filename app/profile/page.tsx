'use client';
import React from 'react';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import PageCard from '../../components/PageCard/PageCard';

export default function Profile() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <PageCard>
        <h1>Loading...</h1>
      </PageCard>
    );
  }
  if (!session?.user)
    return (
      <PageCard>
        <h1>Loading...</h1>
      </PageCard>
    );
  return (
    <PageCard>
      <div className="flex justify-between">
        <h1>Hi, {session.user.email}</h1>
        <button
          onClick={() => signOut({ callbackUrl: window.location.origin })}
        >
          Log-out
        </button>
      </div>
    </PageCard>
  );
}
