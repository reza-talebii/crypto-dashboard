import { NextResponse } from 'next/server'
import cities from '@/public/data/cities.json'

export async function POST(req: Request) {
  const { provinceId } = await req.json()

  if (!provinceId) {
    return NextResponse.json(cities)
  }

  const filteredCities = cities.filter(city => city.province_id === provinceId)

  return NextResponse.json(filteredCities)
}
