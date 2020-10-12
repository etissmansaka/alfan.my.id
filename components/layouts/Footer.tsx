import { Box } from '@chakra-ui/core';
import React from 'react';
import config from '~/utils/config';

const Footer = () => {
  return (
    <Box
      as="footer"
      textAlign="center"
      p={8}
      bg="white"
    >
      &copy; {config.TITLE} - {new Date().getFullYear()}
    </Box>
  );
}

export default Footer;