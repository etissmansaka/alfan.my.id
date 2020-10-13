import {
  Box,
  Code,
  Divider,
  Heading,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/core";
import NextChakraLink from "../helpers/NextChakraLink";

const borderColor = {
  light: "gray.400",
  dark: "gray.200",
};

const CustomLink = (props) => {
  const isInternalLink =
    props.href && (props.href.startsWith("/") || props.href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextChakraLink href={props.href} color="blue.500" {...props}>
        {props.children}
      </NextChakraLink>
    );
  }

  return <Link color="blue.500" isExternal {...props} />;
};

const Hr = (props) => {
  const { colorMode } = useColorMode();

  return <Divider borderColor={borderColor[colorMode]} w="100%" />;
};

const MDXComponent = {
  h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props) => <Heading as="h2" size="lg" my={4} {...props} />,
  h3: (props) => <Heading as="h3" size="md" my={4} {...props} />,
  p: (props) => <Text as="p" lineHeight="tall" mt={4} {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />,
  a: CustomLink,
  inlineCode: (props) => (
    <Code variantColor="blue" fontSize=".85rem" {...props} />
  ),
  hr: <Hr />,
};

export default MDXComponent;
