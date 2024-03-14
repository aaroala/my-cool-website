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
            main: "#444"
          },
          secondary: {
            main: "#fff"
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#555"
          },
          secondary: {
            main: "#000"
          },
          divider: grey[700],

          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

export default theme;