import React from "react";
import { Box, Divider, Heading, Text, useColorMode } from "@chakra-ui/core";
import NextChakraLink from "../helpers/NextChakraLink";
import styled from "@emotion/styled";

const background = {
  light: "blue.100",
  dark: "gray.700",
};

const ReadMoreLink = styled(NextChakraLink)`
  :hover {
    text-decoration: none !important;
  }
`;

const BlogPost = ({ title, description, publishedAt, category, slug }) => {
  const { colorMode } = useColorMode();
  console.log(slug);

  return (
    <Box p={5} borderRadius={5} mb={4}>
      <Heading as="h1" size="xl" mb={4}>
        {title}
      </Heading>
      <Text as="p" mb={6}>
        {description}
      </Text>
      <ReadMoreLink
        href={slug}
        px={6}
        py={2}
        bg={background[colorMode]}
        borderRadius={4}
        _hover={{
          backgroundColor: colorMode === "dark" ? "#4A5568" : "#EBF8FF",
        }}
      >
        Read More
      </ReadMoreLink>
    </Box>
  );
};

export default BlogPost;
