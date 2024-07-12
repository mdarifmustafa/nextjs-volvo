"use client";

import { createTheme, Palette, PaletteOptions } from "@mui/material"

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px

// tailwind
// mobile < 640
// 

declare module "@mui/material/styles" {
  interface Theme {
    status: {};
  }

  interface ThemeOptions {}

  interface Palette {}

  interface PaletteOptions {}
}

const palette: PaletteOptions = {
  primary: {
    main: "#1976d2",
    light: "#42a5f5",
    dark: "#1565c0",
    contrastText: "#222831",
  },
  secondary: {
    main: "#9c27b0",
    light: "#ba68c8",
    dark: "#7b1fa2",
    contrastText: "#EEEEEE"
  },
  error: {
    main: "#d32f2f",
    light: "#ef5350",
    dark: "#c62828",
    contrastText: "#fff"
  },
  warning: {
    main: "#ed6c02",
    light: "#ff9800",
    dark: "#e65100",
    contrastText: "#fff"
  },
  info: {
    main: "#0288d1",
    light: "#03a9f4",
    dark: "#01579b",
    contrastText: "#fff"
  },
  success: {
    main: "#2e7d32",
    light: "#4caf50",
    dark: "#1b5e20",
    contrastText: "#fff"
  },
  text: {
    primary: "#222831",
    secondary: "#393E46",
    disabled: "#EEEEEE"
  },
  grey: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121"
  },
  action: {
    disabled: ""
  },
  divider: "rgba(0, 0, 0, 0.12)",
  tonalOffset: 0.2
};

export const theme = createTheme({
  palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 320, // override sm breakpoint to 320px
      md: 640, // override md breakpoint to 640px
      lg: 1024, // override lg breakpoint to 1024px
      xl: 1280, // override xl breakpoint to 1280px
    },
  },
  typography: (palette: Palette) => ({
    fontFamily: ["Manrope", "Helvetica Neue", "Arial", "sans-serif"].join(","),
    h1: {
      fontSize: 40,
      lineHeight: "56px",
      fontWeight: 800,
      color: palette.text.primary,
    },
    h2: {
      fontSize: 35,
      lineHeight: "48px",
      fontWeight: 800,
      color: palette.text.primary,
    },
    h3: {
      fontSize: 30,
      lineHeight: "40px",
      fontWeight: 800,
      color: palette.text.primary,
    },
    h4: {
      fontSize: 24,
      lineHeight: "32px",
      fontWeight: 800,
      color: palette.text.primary,
    },
    h5: {
      fontSize: 20,
      lineHeight: "28px",
      fontWeight: 700,
      color: palette.text.primary,
    },
    h6: {
      fontSize: 16,
      lineHeight: "24px",
      fontWeight: 700,
      color: palette.text.primary,
    },
    subtitle1: {
      fontSize: 20,
      lineHeight: "28px",
      fontWeight: 500,
      color: palette.text.primary,
    },
    subtitle2: {
      fontSize: 16,
      lineHeight: "24px",
      fontWeight: 500,
      color: palette.text.primary,
    },
    body1: {
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 700,
      color: palette.text.primary,
    },
    body2: {
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 500,
      color: palette.text.primary,
    },
    caption: {
      fontSize: 12,
      lineHeight: "16px",
      fontWeight: 700,
      color: palette.text.primary,
    },
    button: {
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 700,
      textTransform: "none",
      color: palette.text.primary,
    },
    overline: {
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 500,
      textTransform: "none",
    },
    
  }),
  components: {
    MuiBreadcrumbs: {
      styleOverrides: {
        li: {
          fontWeight: "400",
          "& > a": { textDecoration: "none", color: palette.text?.secondary },
          "& > a:hover": { textDecoration: "underline" },
          "& > a:active": { color: palette.text?.primary },
        },
      },
    },

    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      variants: [
        {
          props: { size: "large" },
          style: { padding: "16px 20px", fontSize: "14px" },
        },
        {
          props: { size: "medium" },
          style: { padding: "12px 16px", fontSize: "14px" },
        },
        {
          props: { size: "small" },
          style: { padding: "8px 12px", fontSize: "14px" },
        },
      ],
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 0px 0px #0000",
        },
        // text: { color: `${palette.text!.primary}`, border: "0px" },
        outlined: {
          color: `${palette.primary}`,
          borderColor: `${palette.primary}`,
        },
        contained: { backgroundColor: `${palette.primary}` },
      },
    },

    MuiSvgIcon: {
      variants: [
        { props: { fontSize: "large" }, style: { fontSize: "24px" } },
        { props: { fontSize: "medium" }, style: { fontSize: "20px" } },
        { props: { fontSize: "small" }, style: { fontSize: "16px" } },
      ],
    },

    MuiToggleButtonGroup: {
      defaultProps: {
        color: "primary",
        exclusive: true,
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          boxShadow: "0px 10px 25px 0px #00000021",
          backgroundColor: "#ffffff",
          border: "1px solid",
        },
        arrow: {
          // color: palette.grey![200],
        },
      },
    },

    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle1: "span", // traditionally set as <p>
          subtitle2: "span", // traditionally set as <p>
        },
      },
    },
  },
});

