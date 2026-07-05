import { NextResponse, type NextRequest } from 'next/server'

const LANGUAGE_COOKIE = 'syoka-studio-language'
const DEFAULT_LANGUAGE_HEADER = 'x-syoka-default-language'

const countryHeaders = [
  'x-country-code',
  'x-vercel-ip-country',
  'cf-ipcountry',
  'cloudfront-viewer-country',
  'x-appengine-country',
]

const getRequestCountry = (request: NextRequest) => {
  for (const header of countryHeaders) {
    const value = request.headers.get(header)
    if (value) return value.toUpperCase()
  }

  return null
}

const getDefaultLanguage = (request: NextRequest) => {
  const storedLanguage = request.cookies.get(LANGUAGE_COOKIE)?.value
  if (storedLanguage === 'zh' || storedLanguage === 'en') return storedLanguage

  const country = getRequestCountry(request)
  if (country) return country === 'CN' ? 'zh' : 'en'

  const acceptLanguage = request.headers.get('accept-language') || ''
  return acceptLanguage.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set(DEFAULT_LANGUAGE_HEADER, getDefaultLanguage(request))

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|static|favicon.ico|robots.txt|sitemap.xml).*)'],
}
