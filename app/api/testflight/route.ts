import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export function GET() {
  const code = process.env.TESTFLIGHT_CODE ?? process.env.NEXT_PUBLIC_TESTFLIGHT_CODE;
  const url = code ? `https://testflight.apple.com/join/${encodeURIComponent(code)}` : null;
  return NextResponse.json({ url }, { headers: { 'Cache-Control': 'no-store' } });
}
