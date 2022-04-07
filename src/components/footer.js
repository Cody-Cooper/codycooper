/** @jsx jsx */
import { jsx } from "theme-ui";

const Footer = () => {
  console.log("Footer success");
  return (
    <footer
      sx={{
        display:
          /* "flex", */ "none" /*temporarily hiding footer until i have good enough copy/links to want to put it on*/,
        alignItems: "center",
        justifyContent: "center",
        variant: "styles.header",
      }}
    >
      Footer
    </footer>
  );
};

export default Footer;
