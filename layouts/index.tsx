import React from 'react';
import { NextSeo } from 'next-seo';
import { Avatar, Button, Flex, Heading, Text, useColorMode } from '@chakra-ui/core';
import Main from '~/components/layouts/Main';
import config from '~/utils/config';

const color = {
  light: 'blue.600',
  dark: 'teal.300'
};

const MDXLayout = ({ children, frontMatter }) => {
  const { colorMode } = useColorMode();

  // eslint-disable-next-line
  const slug = frontMatter.__resourcePath.replace('blog/', '').replace('.mdx', '');

  return (
    <>
      <NextSeo title={frontMatter.title} canonical={`${config.BASE_URL}/${slug}`} description={frontMatter.description} />
      <Main>
        <Flex direction="column" justifyContent="center" alignItems="center" mb={10}>
          <Button variant="ghost" borderRadius={4} color={color[colorMode]}>
            {frontMatter.category}
          </Button>
          <Heading as="h1" size="2xl" fontWeight={700} textAlign="center" my={4}>
            {frontMatter.title}
          </Heading>
          <Flex justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
              <Avatar name={config.AUTHOR} src="https://res.cloudinary.com/kopiijo/image/upload/v1595946176/PP_ep5wyo.jpg" size="sm" />
              <Text as="p" ml={2} fontSize="sm">
                {config.AUTHOR} at {frontMatter.publishedAt}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {children}
      </Main>
    </>
  );
};

export default MDXLayout;
