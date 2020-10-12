import React from "react";
import { CSSReset, useColorMode } from "@chakra-ui/core";
import { Global, css } from "@emotion/core";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          #__next {
            background-color: ${colorMode === "dark" ? "#171923" : "white"};
          }
        `}
      />
      {children}
    </>
  );
};

export default GlobalStyle;
