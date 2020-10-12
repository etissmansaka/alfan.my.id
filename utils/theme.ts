import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  breakpoints: ["640px", "768px", "1024px", "1280px"],
  fonts: {
    heading: '"Source Sans Pro", sans-serif',
    body: '"Source Sans Pro", sans-serif',
  },
};

export default customTheme;
