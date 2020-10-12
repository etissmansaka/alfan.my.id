import React from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  List,
  ListItem,
  Tooltip,
  useColorMode,
} from "@chakra-ui/core";
import styled from "@emotion/styled";
import config from "~/utils/config";
import NextChakraLink from "../helpers/NextChakraLink";

const navbarBg = {
  light: "white",
  dark: "gray.900",
};

const background = {
  ligth: "white",
  dark: "gray.900",
};

const color = {
  light: "gray.900",
  dark: "white",
};

const Nav = styled(Box)`
  backdrop-filter: opacity(0.6) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
      bg={navbarBg[colorMode]}
      w="100%"
      mx="auto"
    >
      <NextChakraLink
        href="/"
        _hover={{
          underline: "none",
        }}
      >
        <Heading as="h2" display={["none", "flex"]} color={color[colorMode]}>
          {config.TITLE}
        </Heading>
      </NextChakraLink>
      <List display="flex" justifyContent="center" alignItems="center" mx={-2}>
        {config.MENU.map((menu) => (
          <ListItem px={2}>
            <NextChakraLink
              href={menu.path}
              color={color[colorMode]}
              _hover={{
                color: colorMode === "dark" ? "gray.300" : "gray.500",
                textDecoration: "underline",
              }}
            >
              {menu.name}
            </NextChakraLink>
          </ListItem>
        ))}
      </List>
      <Tooltip
        aria-label="Change Color Mode"
        label={colorMode === "dark" ? "Toggle Ligth Mode" : "Toggle Dark Mode"}
        zIndex={12}
      >
        <IconButton
          aria-label="Toggle Color Mode"
          icon={colorMode === "dark" ? "sun" : "moon"}
          variant="ghost"
          variantColor={colorMode === "dark" ? "yellow" : "gray"}
          onClick={toggleColorMode}
        />
      </Tooltip>
    </Nav>
  );
};

export default Header;
