/** @jsx jsx */
import { jsx } from "theme-ui";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

const Hamburger = () => {
  return (
    /* mobile menu */
    <section>
      <Helmet>
        <script src={withPrefix("script.js")} type="text/javascript" />
      </Helmet>
      <nav
        id="hamburger"
        sx={{
          zIndex: "100",
          "&.active ul": {
            visibility: "visible",
            pointerEvents: "initial",
            transitionDelay: "0.2s",
          },
          "&.active button span": {
            transform: "rotate(90deg)",
          },
        }}
      >
        <button
          id="nav-icon"
          sx={{
            appearance: "none",
            background: "transparent",
            cursor: "pointer",
            display: "inline-block",
            height: "35px",
            top: "0px",
            right: "0px",
            transition: "background 0.3s",
            width: "35px",
            borderStyle: "none",
          }}
        >
          <span
            sx={{
              background: "var(--theme-ui-colors-secondary)",
              display: "block",
              height: "3px",
              transition: "transform 0.3s",
              "&:before, &:after": {
                width: "100%",
                height: "3px",
                background: "var(--theme-ui-colors-secondary)",
                content: "''",
                display: "block",
                left: "0",
                position: "relative",
              },
              "&:before": {
                top: "-8px",
              },
              "&:after": {
                top: "5px",
              },
            }}
          ></span>
        </button>
        <ul
          sx={{
            position: "absolute",
            right: "0",
            height: "100%",
            marginTop: "0",
            visibility: "hidden",
            pointerEvents: "none",
            listStyle: "none",
            li: {
              fontSize: "1.5rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "2px",
              padding: "0.75em 0",
              writingMode: "vertical-lr",
              a: {
                color: "var(--theme-ui-colors-primary)",
                textDecoration: "none",
                "&:visited": {
                  color: "var(--theme-ui-colors-primary)",
                },
              },
            },
          }}
        >
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="#blog">blog</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Hamburger;
