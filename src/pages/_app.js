import { Asap } from 'next/font/google'
import Head from 'next/head'
import Nav from '@/components/Nav'
import '@/styles/globals.css'

const headerFont = Asap({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SebastianLesch.com</title>
        <meta name="description" content="Sebastian Lesch - Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav className={headerFont.className} />
      <main className={headerFont.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
