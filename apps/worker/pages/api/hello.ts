// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextRequest, NextResponse } from 'next/server';


export const config = {
  runtime: 'edge', // this is a pre-requisite
};

type Data = {
  name: string
}

export default async (req: NextRequest) => {
  // const r = await fetch("https://naver.com")
  // console.log(clickup_api)
  return NextResponse.json({
    name: `Hello, from ${req.body} I'm now an Edge Function!`,
  });
}
