import React from 'react';
import Link from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/core';

const NextChakraLink = ({ href, children, ...chakraProps }) => {
  return (
    <Link href={href}>
      <ChakraLink {...chakraProps}>
        {children}
      </ChakraLink>
    </Link>
  );
}

export default NextChakraLink;