/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import Colortoggle from "./colortoggle";
import Hamburger from "./hamburger";

const NavBar = () => {
  console.log("NavBar success");
  return (
    <header
      sx={{
        backgroundColor: "var(--theme-ui-colors-primary)",
        marginBottom: "50px",
      }}
    >
      <nav
        sx={{
          display: "flex",
          alignItems: "center",
          variant: "styles.header",
          minHeight: "40px",
          "a, button, label": {
            WebkitTapHighlightColor: "transparent",
          },
          "a:hover": {
            filter: "contrast(50%)",
          },
        }}
      >
        <Colortoggle />
        <div sx={{ mx: "auto" }} />
        <Hamburger />

        {/* Center 'logo' */}
        <section
          sx={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <Link
            to="/"
            sx={{
              textDecoration: "none",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <h1
              sx={{
                fontSize: "80px",
                display: ["none", "none", "inline-block"],
                background: "var(--theme-ui-colors-twotone)",
                backgroundClip: "text",
                color: "transparent",
                margin: "28px 0 0 0",
                pointerEvents: "auto",
              }}
            >
              codycooper
            </h1>
          </Link>
          {/* Center 'logo' mobile */}
          <Link to="/" sx={{ textDecoration: "none" }}>
            <h1
              sx={{
                fontSize: "80px",
                display: ["inline-block", "inline-block", "none"],
                background: "var(--theme-ui-colors-twotone)",
                backgroundClip: "text",
                color: "transparent",
                margin: "28px 0 0 0",
                pointerEvents: "auto",
              }}
            >
              cc
            </h1>
          </Link>
        </section>
      </nav>
    </header>
  );
};

export default NavBar;
