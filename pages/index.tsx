import { Box, Heading, Text } from "@chakra-ui/core";
import React from "react";
import Main from "~/components/layouts/Main";
import config from "~/utils/config";

const Home = () => {
  return (
    <Main>
      <Box as="section">
        <Heading as="h1" size="2xl">
          {config.AUTHOR}
        </Heading>
        <Text as="p" mt={4} lineHeight="tall">
          {config.ABOUT}
        </Text>
      </Box>
    </Main>
  );
};

export default Home;
