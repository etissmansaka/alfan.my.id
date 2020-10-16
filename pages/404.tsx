import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/core';
import { NextSeo } from 'next-seo';
import NextChakraLink from '~/components/helpers/NextChakraLink';

const NotFoundPage = () => {
  return (
    <>
      <NextSeo title="404" />
      <Flex direction="column" justifyContent="center" alignItems="center" minH="100vh">
        <Heading as="h1">Not Found!</Heading>
        <Text as="p" mt={4} maxW={400} textAlign="center">
          Halaman yang kamu cari mungkin tidak ada atau sudah dipindahkan!
        </Text>
        <NextChakraLink href="/" as="button" bg="gray.900" px={6} py={2} borderRadius={4} mt={4} color="white">
          Go Home
        </NextChakraLink>
      </Flex>
    </>
  );
};

export default NotFoundPage;
