import App from "next/app"
import { Asap } from 'next/font/google'
import Head from 'next/head'
import { createContext } from "react";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Nav from '@/components/Nav'
import '@/styles/globals.css'

const headerFont = Asap({ subsets: ['latin'] });

// Store Strapi Global object in context
export const GlobalContext = createContext({});

export default function MainApp({ Component, pageProps }) {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <Nav className={headerFont.className} />
      <main className={headerFont.className}>
        <GlobalContext.Provider value={global.attributes}>
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </main>
      <footer className={headerFont.className}>
        <p>© Sebastian Lesch</p>
      </footer>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MainApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};


// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <title>SebastianLesch.com</title>
//         <meta name="description" content="Sebastian Lesch - Full Stack Developer" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Nav className={headerFont.className} />
//       <main className={headerFont.className}>
//         <Component {...pageProps} />
//       </main>
//       <footer className={headerFont.className}>
//         <p>© Sebastian Lesch</p>
//       </footer>
//     </>
//   )
// }
