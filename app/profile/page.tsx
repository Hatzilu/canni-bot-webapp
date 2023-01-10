import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Profile() {
  const users = await prisma.user.findMany();

  console.log(users);

  return (
    <div>
      {/* Hello, {session?.user?.email}! you&apos;ve successfully authenticated! */}
      {users.map((user) => (
        <p key={user.id}>{user.email}</p>
      ))}
    </div>
  );
}
