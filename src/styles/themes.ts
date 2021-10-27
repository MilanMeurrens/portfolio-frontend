import "styled-components";

// interface IPalette {
//   main: string;
//   contrastText: string;
// }

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      title: string;
      main: string;
    };
    colors: {
      primary1: string;
      primary2: string;
      backgroundDark: string;
      backgroundMiddle: string;
      text: string;
      textTransparent: string;
    };
    gradients: {
      primaryGradient: string;
      primaryGradientVertical: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}

export const darkTheme = {
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif",
  },
  colors: {
    primary1: "hsl(267, 79%, 68%)",
    primary2: "hsl(194, 60%, 46%)",
    backgroundDark: "hsl(220, 41%, 10%)",
    backgroundMiddle: "hsl(220, 29%, 31%)",
    text: "hsl(0, 0%, 100%)",
    textTransparent: "hsl(0, 0%, 100%, 75%)",
  },
  gradients: {
    primaryGradient: "linear-gradient(90deg, #A56BEE 0%, #2F99BA 100%)",
    primaryGradientVertical: "linear-gradient(#A56BEE 0%, #2F99BA 100%)",
  },
  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
  },
};
