import { NextResponse } from 'next/server'
import provinces from '@/public/data/provinces.json'

export async function GET() {
  return NextResponse.json(provinces)
}
