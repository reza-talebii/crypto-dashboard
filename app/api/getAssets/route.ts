import { NextResponse } from 'next/server'
import assets from '@/public/data/assets.json'

export async function GET() {
  return NextResponse.json(assets)
}
