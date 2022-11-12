/** @jsxImportSource theme-ui */
import { Helmet } from "react-helmet"
import Link from "next/link"

const Hamburger = () => (
  /* mobile menu */
  <section>
    <Helmet>
      <script src="/script.js" type="text/javascript" async />
    </Helmet>
    <nav
      id="hamburger"
      sx={{
        zIndex: "100",
        position: "fixed",
        top: "3px",
        right: "0",
        mixBlendMode: "difference",
        filter: "var(--theme-ui-colors-filter)",
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
            background: "var(--theme-ui-colors-primary)",
            display: "block",
            height: "3px",
            transition: "transform 0.3s",
            "&:before, &:after": {
              width: "100%",
              height: "3px",
              background: "var(--theme-ui-colors-primary)",
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
              filter: "var(--theme-ui-colors-counterfilter)",
              textDecoration: "none",
              "&:visited": {
                color: "var(--theme-ui-colors-primary)",
              },
            },
          },
        }}
      >
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="#blog">blog</Link>
        </li>
        <li>
          <Link href="#contact">contact</Link>
        </li>
      </ul>
    </nav>
  </section>
)

export default Hamburger
