const theme = {
  config: {
    useCustomProperties: true,
    useLocalStorage: true,
    initialColorMode: "light",
  },
  breakpoints: [20, 40, 52, 64].map((n) => n + "em"),
  colors: {
    text: "#000",
    background: "#E4E6EB",
    primary: "#121212",
    secondary: "#E4E6EB",
    muted: "#e0e0e0",
    highlight: "#9f9f9f",
    gray: "#6c6c6c",
    accent: "#3f3f3f",
    twotone:
      "linear-gradient(180deg, rgba(228,230,235,1) 0%, rgba(228,230,235,1) 55%, rgba(18,18,18,1) 55%, rgba(18,18,18,1) 100%)",
    modes: {
      dark: {
        text: "#E4E6EB",
        background: "#121212",
        primary: "#E4E6EB",
        secondary: "#121212",
        muted: "#191919",
        highlight: "#3c3c3c",
        gray: "#999",
        accent: "#e0e0e0",
        twotone:
          "linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 55%, rgba(228,230,235,1) 55%, rgba(228,230,235,1) 100%)",
      },
    },
  },
  fonts: {
    body: "Silom, monospace",
    heading: "Silom, monospace",
    monospace: "Silom, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    display: {
      variant: "text.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      mt: 3,
    },
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.display",
    },
    h2: {
      variant: "text.heading",
      fontSize: 5,
    },
    h3: {
      variant: "text.heading",
      fontSize: 4,
    },
    h4: {
      variant: "text.heading",
      fontSize: 3,
    },
    h5: {
      variant: "text.heading",
      fontSize: 2,
    },
    h6: {
      variant: "text.heading",
      fontSize: 1,
    },
    p: {
      fontSize: 2,
    },
    a: {
      color: "primary",
      "&:hover": {
        color: "secondary",
      },
    },
    pre: {
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "muted",
      borderColor: "text",
      borderStyle: "solid",
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 8,
      borderBottomWidth: 8,
      overflow: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: "muted",
      px: 2,
    },
    ul: {
      listStyleType: "square",
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      "th,td": {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "text",
        borderBottomStyle: "solid",
      },
    },
    th: {
      backgroundColor: "muted",
      verticalAlign: "bottom",
      borderBottomWidth: 8,
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: 4,
    },
    hr: {
      border: 0,
      borderBottom: "8px solid",
      borderColor: "text",
    },
  },
};

export default theme;
