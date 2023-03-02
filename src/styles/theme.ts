import WebFont from "webfontloader";
import "@fontsource/roboto";
import "@fontsource/saira-stencil-one";
import { DefaultTheme } from "styled-components";

WebFont.load({
  google: {
    families: ["Faster One"],
  },
});

const theme: DefaultTheme = {
  colors: {
    primary: "#1e1e1e",
    secondary: "#fff",
    accent: "#cccf18",
  },
  fonts: {
    primary: "Roboto",
    secondary: "Saira Stencil One",
    titles: "Faster One",
  },
};

export default theme;
