import React from 'react';
import { Box, Flex, Heading, Text, useColorMode } from '@chakra-ui/core';
import NextChakraLink from '../helpers/NextChakraLink';

const background = {
  light: 'blue.100',
  dark: 'gray.700'
};

const color = {
  light: 'gray.900',
  dark: 'teal.200'
};

const borderColor = {
  light: 'gray.300',
  dark: 'white'
};

const BlogPost = ({ title, description, publishedAt, category, slug, ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <Box mb={4} p={5} borderRadius={4} border="2px" borderColor={borderColor[colorMode]} {...props}>
      <Heading as="h1" size="lg" mb={4}>
        <NextChakraLink href={slug}>{title}</NextChakraLink>
      </Heading>
      <Text as="p" mb={6}>
        {description}
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        <Text as="p" color={color[colorMode]} fontSize="sm">
          {publishedAt}
        </Text>
        <NextChakraLink
          href={`/category/${category.toLowerCase()}`}
          color={color[colorMode]}
          fontWeight={600}
          px={4}
          py={2}
          borderRadius={4}
          bg={background[colorMode]}
          _hover={{
            textDecoration: 'none'
          }}
        >
          {category}
        </NextChakraLink>
      </Flex>
    </Box>
  );
};

export default BlogPost;
