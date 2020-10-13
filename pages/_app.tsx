import React, { useEffect } from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "~/utils/theme";
import {
  ColorModeProvider,
  CSSReset,
  Heading,
  useColorMode,
} from "@chakra-ui/core";
import { Global, css } from "@emotion/core";
import { DefaultSeo } from "next-seo";
import config from "~/utils/config";
import Head from "next/head";
import GlobalStyle from "~/components/layouts/GlobalStyle";
import { MDXProvider } from "@mdx-js/react";
import MDXComponent from "~/components/layouts/MDXComponent";

const CustomApp = ({ Component, router, ...pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponent}>
        <ColorModeProvider value="light">
          <Head>
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Fira+Mono&display=swap"
              rel="stylesheet"
            />
          </Head>

          <DefaultSeo
            titleTemplate={`%s - ${config.TITLE}`}
            description={config.DESCRIPTION}
            canonical={config.BASE_URL + router.asPath || ""}
          />
          <GlobalStyle>
            <Component {...pageProps} />
          </GlobalStyle>
        </ColorModeProvider>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default CustomApp;
