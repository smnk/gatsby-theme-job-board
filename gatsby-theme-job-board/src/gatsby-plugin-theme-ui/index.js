/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  colors: {
    text: "#232129",
    background: "#fff",
    primary: "#00A400",
  },
  fonts: {
    heading: "Work Sans, sans-serif",
    default: "Work Sans, sans-serif",
  },
  fontSizes: [14, 18, 20, 22, 27, 36, 48],
  lineHeights: {
    text: "1.6",
    heading: "1.2",
  },
  sizes: {
    container: 800,
  },
  styles: {
    a: {
      textDecoration: "none",
    },
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "default",
      fontSize: 1,
      lineHeight: "text",
    },
    Header: {
      display: "flex",
    },
    Main: {
      margin: "0 auto",
      maxWidth: "container",
      width: "90vw",
    },
    Container: {
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
    },
    Footer: {
      maxWidth: "container",
    },
    h1: {
      color: "text",
      fontSize: 1,
      lineHeight: "heading",
      fontFamily: "heading",
      fontWeight: 400,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      fontWeight: 400,
    },
  },
}
