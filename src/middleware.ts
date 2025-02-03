import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const checkInstallion = async () => {
  try {
    const response = await fetch(`${API_URL}/install`, {
      cache: 'no-store',
    });
    return response.json();
  } catch (err) {
    console.log('Check Installation Error: ', err);
    return false;
  }
};

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname == '/install') {
    console.log('[Middleware] Path: ', request.nextUrl.pathname);

    const isCompleted = await checkInstallion();
    console.log('[Middleware] - isCompleted: ', isCompleted);

    if (isCompleted) {
      return NextResponse.redirect(new URL('/logout', request.url));
    }
  }
}

export const config = {
  matcher: '/install',
};
