import React from "react";
import Main from "~/components/layouts/Main";
import { NextSeo } from "next-seo";
import config from "~/utils/config";
import { Box, Button, Flex, Heading, useColorMode } from "@chakra-ui/core";

const background = {
  light: ["blue.400", "teal.300"],
  dark: ["blue.800", "teal.700"],
};

const MDXLayout = ({ children, frontMatter }) => {
  const { colorMode } = useColorMode();

  const slug = frontMatter.__resourcePath
    .replace("blog/", "")
    .replace(".mdx", "");

  return (
    <>
      <NextSeo title={frontMatter.title} canonical={config.BASE_URL + slug} />
      <Main>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Heading as="h1" size="xl" fontWeight={700}>
            {frontMatter.title}
          </Heading>
          <Heading as="h2" color="teal.500" size="md" mt={10} fontWeight={600}>
            {frontMatter.description}
          </Heading>
          <Flex alignItems="center" my={10}>
            <Button
              variant="ghost"
              borderRadius={4}
              bg={background[colorMode][0]}
              px={4}
              py={2}
            >
              {frontMatter.category}
            </Button>
            <Box mx={4}>&bull;</Box>
            <Box px={4} py={2} bg={background[colorMode][1]} borderRadius={4}>
              {frontMatter.publishedAt}
            </Box>
          </Flex>
        </Flex>
        {children}
      </Main>
    </>
  );
};

export default MDXLayout;
