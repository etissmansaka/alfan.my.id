import { Box, Flex } from "@chakra-ui/core";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Main = ({ children }) => {
  return (
    <Flex
      direction="column"
      minH="100vh"
      mx="auto"
      maxW={["100%", "100%", "900px"]}
    >
      <Header />
      <Box as="main" flex="1 1 auto" px={[4, null]} my={[6, 10]}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Main;
