import { PaletteMode } from "@mui/material";
import { amber, deepOrange, green, grey } from "@mui/material/colors";

const theme = {
  palette: {
    primary: amber,
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#444444"
          },
          secondary: {
            main: "#ffffff"
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#555555"
          },
          secondary: {
            main: "#000000"
          },
          divider: grey[700],

          text: {
            primary: "#ffffff",
            secondary: grey[500],
          },
        }),
  },
});

export default theme;