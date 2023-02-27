// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.json({ name: req.method })
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}
