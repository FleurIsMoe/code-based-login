import { NextResponse } from 'next/server'
import { isValidCode } from '@/app/lib/edge-config'

export async function POST(request: Request) {
  try {
    const { code } = await request.json()
    const result = await isValidCode(code)
    
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({ valid: false }, { status: 500 })
  }
}