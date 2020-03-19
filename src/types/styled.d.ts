import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    padding: string;
    colors: {
      main: string;
      secondary: string;
    };
  }
}
