import React from 'react';
import { NextSeo } from 'next-seo';
import { Flex, Heading } from '@chakra-ui/core';
import Main from '~/components/layouts/Main';
import config from '~/utils/config';

const AboutLayout = ({ children, frontMatter }) => {
  return (
    <>
      <NextSeo title={frontMatter.title} canonical={`${config.BASE_URL}/about`} description={frontMatter.description} />
      <Main>
        <Flex direction="column" justifyContent="center" alignItems="center" mb={10}>
          <Heading as="h1" size="2xl" fontWeight={700} textAlign="center">
            {frontMatter.title}
          </Heading>
        </Flex>
        {children}
      </Main>
    </>
  );
};

export default AboutLayout;
