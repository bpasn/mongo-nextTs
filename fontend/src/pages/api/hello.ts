// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectionDB from '@/mongo/config/mongo.config'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectionDB();
    res.send(process.env.ACCESS_TOKEN_PUBLIC_KEY)
  } catch (error) {
    res.json({
      status:false,
      message:error instanceof Error && error.message
    })
  }
}
