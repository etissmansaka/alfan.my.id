import { Box, Button, Heading, Text, useColorMode } from '@chakra-ui/core';
import React from 'react';
import { NextSeo } from 'next-seo';
import Main from '~/components/layouts/Main';
import config from '~/utils/config';
// eslint-disable-next-line
// @ts-ignore
import { frontMatter as posts } from './blog/**/*.mdx';
import BlogPost from '~/components/layouts/BlogPost';
import NextChakraLink from '~/components/helpers/NextChakraLink';

const borderColor = {
  light: 'gray.900',
  dark: 'white'
};

const bgColor = {
  light: 'gray.900',
  dark: 'white'
};

const color = {
  light: 'white',
  dark: 'gray.900'
};

const Home = () => {
  const { colorMode } = useColorMode();

  const latestPosts = posts.slice(0, 6).sort((a, b) => parseInt(b.publishedAt, 10) - parseInt(a.publishedAt, 10));

  return (
    <Main>
      <NextSeo title="Home" description={config.DESCRIPTION} />
      <Box as="section" id="about">
        <Heading as="h1" size="2xl">
          Hi, I&apos;am {config.AUTHOR}
        </Heading>
        <Text as="p" mt={4} mb={6} lineHeight="tall" maxW={700}>
          {config.ABOUT}
        </Text>
        <NextChakraLink
          href="/about"
          px={6}
          py={2}
          borderRadius={4}
          bg={bgColor[colorMode]}
          _hover={{
            opacity: 0.9
          }}
          color={color[colorMode]}
          fontWeight={600}
        >
          Selengkapnya
        </NextChakraLink>
      </Box>
      <Box as="section" id="latest-posts">
        <Heading as="h1" size="xl" mt={10}>
          Latest Posts
        </Heading>
        {latestPosts.map(post => {
          // eslint-disable-next-line
          const slug = post.__resourcePath.replace('blog\\\\', '').replace('.mdx', '');

          return (
            <BlogPost
              title={post.title}
              description={post.description}
              publishedAt={post.publishedAt}
              slug={slug}
              category={post.category}
              key={slug}
              variant="home"
              mt={4}
              p={5}
              borderRadius={4}
              border="2px"
              borderColor={borderColor[colorMode]}
            />
          );
        })}
      </Box>
    </Main>
  );
};

export default Home;
