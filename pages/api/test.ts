import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  res.status(200).send(process.env.NEXT_PUBLIC_VERCEL_URL ?? '');
}
