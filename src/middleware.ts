import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import AxiosApiInstance from './ApiInstance';

const checkInstallion = async () => {
  try {
    const response = await AxiosApiInstance.get('/install');
    console.log('Check Installation: ', response.status);
    if (response.status === 200) {
      return response.data;
    }
    return false;
  } catch (err) {
    console.log('Check Installation Error: ', err);
    return false;
  }
};

export async function middleware(request: NextRequest) {
  console.log('[Middleware] Path: ', request.nextUrl.pathname);

  if (request.nextUrl.pathname == '/install') {
    const isCompleted = await checkInstallion();
    console.log('[Middleware] - isCompleted: ', isCompleted);

    if (isCompleted && isCompleted.responseObject) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
}

export const config = {
  matcher: ['/install'],
};
