import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales } from '@/locale'
import Link from 'next/link'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <hr />
          <ul>
            <li>
              <Link href="/en">English</Link>
            </li>
            <li>
              <Link href="/fi">Finnish</Link>
            </li>
            <li>
              <Link href="/sv">Swedish</Link>
            </li>
          </ul>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
