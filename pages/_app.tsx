import '../styles/globals.css';
import type { AppContext, AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { CategoryCollection } from '@/router/category/CategoryResponse';
import axios from '@/router/util/axios';
import MenuLayout from '@/components/menu/MenuLayout';

function MyApp({ Component, pageProps }: AppProps) {
  const { categoryEntities, ...pagePropz } = pageProps;

  return (
    <>
      <ThemeProvider attribute="class">
        <CssBaseline />
        <Head>
          <title>oct-sky-out 블로그</title>
          <meta name="description" content="oct-sky-out의 블로그입니다." />
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <MenuLayout categoryEntities={categoryEntities}>
          <Component {...pagePropz} />
        </MenuLayout>
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const result = await axios.get<CategoryCollection>('/api/categories');
  const categoryEntities = result.data;

  pageProps = { ...pageProps, categoryEntities };

  return { pageProps };
};

export default MyApp;
