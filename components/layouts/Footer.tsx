import { Box, useColorMode } from '@chakra-ui/core';
import React from 'react';
import config from '~/utils/config';

const background = {
  light: 'white',
  dark: 'gray.900'
};

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Box as="footer" textAlign="center" py={8} bg={background[colorMode]}>
      &copy; {config.TITLE} - {new Date().getFullYear()}
    </Box>
  );
};

export default Footer;
