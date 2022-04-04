/** @jsx jsx */
import { jsx } from "theme-ui";

const Footer = () => {
  console.log("Footer success");
  return (
    <footer
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        variant: "styles.header",
        // temporarily hide the footer
        display: "none",
      }}
    >
      Footer
    </footer>
  );
};

export default Footer;
