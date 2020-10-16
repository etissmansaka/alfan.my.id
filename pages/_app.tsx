import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { ColorModeProvider } from '@chakra-ui/core';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import App from 'next/app';
import config from '~/utils/config';
import GlobalStyle from '~/components/layouts/GlobalStyle';
import MDXComponent from '~/components/layouts/MDXComponent';
import theme from '~/utils/theme';

const CustomApp = ({ Component, router, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponent}>
        <ColorModeProvider value="light">
          <DefaultSeo
            titleTemplate={`%s — ${config.TITLE}`}
            description={config.DESCRIPTION}
            canonical={config.BASE_URL + router.asPath || ''}
          />
          <GlobalStyle>
            <Head>
              <meta content="width=device-width, initial-scale=1" name="viewport" />
              <meta content="IE=edge" httpEquiv="X-UA-Compatible" />

              <meta name="theme-color" content="#ffffff" />
              <meta name="mobile-web-app-capable" content="yes" />
              <meta name="apple-mobile-web-app-title" content="Alfan Jauhari" />
              <meta name="apple-mobile-web-app-capable" content="yes" />
              <meta name="apple-mobile-web-app-status-bar-style" content="default" />
              <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
              <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
              <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
              <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
              <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
              <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
              <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
              <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
              <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
              <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
              <link rel="manifest" href="/manifest.json" />
              <meta name="msapplication-TileColor" content="#ffffff" />
              <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
              <meta name="theme-color" content="#ffffff" />
              <meta name="google-site-verification" content="lB-DKq7ynPGa46OOclliAzFWRzFuKkYNzU427G8aD68" />
              <link href="/manifest.json" rel="manifest" />
              <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Fira+Mono&display=swap"
                rel="stylesheet"
              />
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-173518184-1" />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-173518184-1');
                `
                }}
              />
            </Head>
            <Component {...pageProps} />
          </GlobalStyle>
        </ColorModeProvider>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default CustomApp;
