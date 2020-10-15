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

const variantAsSize = {
  home: 'h2',
  blog: 'h1'
};

const variantSize = {
  home: 'lg',
  blog: 'xl'
};

const variantColor = {
  home: {
    light: 'gray.900',
    dark: 'white'
  },
  blog: ''
};

const BlogPost = ({ title, description, publishedAt, category, slug, variant, ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <Box mb={4} {...props}>
      <Heading as={variantAsSize[variant]} size={variantSize[variant]} mb={4} color={variantColor[variant][colorMode]}>
        <NextChakraLink href={slug}>{title}</NextChakraLink>
      </Heading>
      <Text as="p" mb={variant === 'home' ? 0 : 6}>
        {description}
      </Text>
      {variant === 'blog' ? (
        <Flex justifyContent="space-between" alignItems="center">
          <Text as="p" color={color[colorMode]}>
            Published at : {publishedAt}
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
      ) : (
        ''
      )}
    </Box>
  );
};

export default BlogPost;
