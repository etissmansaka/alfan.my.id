import React from 'react';
import { Box, Heading, IconButton, List, ListItem, Tooltip, useColorMode } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import config from '~/utils/config';
import NextChakraLink from '../helpers/NextChakraLink';

const background = {
  light: 'rgba(255, 255, 255, 0.8)',
  dark: 'rgba(23, 25, 35, 0.8)'
};

const color = {
  light: 'gray.900',
  dark: 'white'
};

const Nav = styled(Box)`
  backdrop-filter: blur(10px);
`;

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { asPath } = useRouter();

  return (
    <Nav
      as="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={6}
      px={4}
      position="sticky"
      zIndex={10}
      top={0}
      bg={background[colorMode]}
      w="100%"
      mx="auto"
    >
      <NextChakraLink href="/" display={['none', 'block']}>
        <Heading as="h1" size="lg" color={color[colorMode]}>
          {config.TITLE}
        </Heading>
      </NextChakraLink>
      <List display="flex" justifyContent="center" alignItems="center" mx={-2}>
        {config.MENU.map(menu => (
          <ListItem px={2} key={menu.path}>
            <NextChakraLink
              href={menu.path}
              color={color[colorMode]}
              _hover={{
                color: colorMode === 'dark' ? 'gray.300' : 'gray.500'
              }}
              textDecoration={menu.path === asPath ? 'underline' : 'none'}
            >
              {menu.name}
            </NextChakraLink>
          </ListItem>
        ))}
      </List>
      <Tooltip aria-label="Change Color Mode" label={colorMode === 'dark' ? 'Toggle Light Mode' : 'Toggle Dark Mode'} zIndex={12}>
        <IconButton
          aria-label="Toggle Color Mode"
          icon={colorMode === 'dark' ? 'sun' : 'moon'}
          variant="ghost"
          variantColor={colorMode === 'dark' ? 'yellow' : 'gray'}
          onClick={toggleColorMode}
        />
      </Tooltip>
    </Nav>
  );
};

export default Header;
