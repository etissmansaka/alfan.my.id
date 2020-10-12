import React from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "~/utils/theme";
import { ColorModeProvider, CSSReset } from "@chakra-ui/core";
import { DefaultSeo } from "next-seo";
import config from "~/utils/config";
import Head from "next/head";
import GlobalStyle from "~/components/layouts/GlobalStyle";
import { MDXProvider } from "@mdx-js/react";
import MDXComponent from "~/components/layouts/MDXComponent";

const CustomApp = ({ Component, router, ...pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ColorModeProvider>
        <DefaultSeo
          titleTemplate={`%s - ${config.TITLE}`}
          description={config.DESCRIPTION}
          canonical={config.BASE_URL + router.asPath || ""}
        />
        <GlobalStyle>
          <MDXProvider component={MDXComponent}>
            <Component {...pageProps} />
          </MDXProvider>
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default CustomApp;
