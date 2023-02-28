import "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      primary: string;
      accent: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
  }
}
export default DefaultTheme;
