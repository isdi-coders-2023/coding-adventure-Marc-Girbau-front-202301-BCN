import "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
    };
    fonts: {
      primary: string;
      secondary: string;
      titles: string;
    };
  }
}
export default DefaultTheme;
