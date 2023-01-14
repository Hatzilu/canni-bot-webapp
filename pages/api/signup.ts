// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
  | User
  | {
      error: string,
    };

import { PrismaClient, User } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(405).send({ error: 'Only POST requests allowed.' });
    return;
  }

  const data = req.body;
  if (!data?.email || !data?.password) {
    return res.status(400).json({ error: 'Invalid request data.' });
  }

  const { email, password } = data;

  console.log(`user ${email} trying to sign up`);

  try {
    const userFromDb = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });
    if (userFromDb) {
      return res.status(400).json({ error: 'User already exists.' });
    }
    const newUser = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    console.log(`successfully created new user ${email}`);

    res.status(200).json(newUser);
  } catch (e) {
    console.error(e);
    res
      .status(400)
      .json({ error: 'something went wrong while creating new user' });
  }
}
