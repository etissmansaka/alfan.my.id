import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  breakpoints: ["640px", "768px", "1024px", "1280px"],
  fonts: {
    heading: '"Poppins", sans-serif',
    body: '"Poppins", sans-serif',
    mono: '"Fira Mono", monospace',
  },
};

export default customTheme;
