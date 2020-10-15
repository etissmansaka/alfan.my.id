import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { ColorModeProvider } from '@chakra-ui/core';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import config from '~/utils/config';
import GlobalStyle from '~/components/layouts/GlobalStyle';
import MDXComponent from '~/components/layouts/MDXComponent';
import theme from '~/utils/theme';

const CustomApp = ({ Component, router, ...pageProps }) => {
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
              <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Fira+Mono&display=swap"
                rel="stylesheet"
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
