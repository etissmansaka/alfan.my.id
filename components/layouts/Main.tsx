import { Box, Flex } from "@chakra-ui/core";
import React from "react";
import Header from "./Header";

const Main = ({ children }) => {
  return (
    <Flex
      direction="column"
      minH="100vh"
      maxW={["100%", "700px", "900px", "1000px"]}
      mx="auto"
    >
      <Header />
      <Box as="main" flex="1 1 auto" px={[4, null]} my={[6, 10]}>
        {children}
      </Box>
    </Flex>
  );
};

export default Main;
