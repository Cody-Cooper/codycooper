/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { FaAlignRight } from "react-icons/fa";
import Colortoggle from "./colortoggle";

const NavBar = () => {
  console.log("NavBar success");
  return (
    <header
      sx={{
        backgroundColor: "var(--theme-ui-colors-primary)",
      }}
    >
      <nav
        sx={{
          display: "flex",
          alignItems: "center",
          variant: "styles.header",
        }}
      >
        <Colortoggle />
        <div sx={{ mx: "auto" }} />
        <Link
          to="#blog"
          sx={{
            variant: "styles.navlink",
            p: 2,
          }}
        >
          Blog
        </Link>
        <Link
          to="#about"
          sx={{
            variant: "styles.navlink",
            p: 2,
          }}
        >
          About
        </Link>
        <FaAlignRight sx={{ display: "none" }} />
        <section
          sx={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <Link to="/" sx={{ textDecoration: "none" }}>
            <h1
              sx={{
                fontSize: ["20px", "40px", "80px"],
                display: "inline-block",
                background: "var(--theme-ui-colors-twotone)",
                backgroundClip: "text",
                color: "transparent",
                margin: ["37px 0 0 0", "34px 0 0 0", "28px 0 0 0"],
                pointerEvents: "auto",
              }}
            >
              codycooper
            </h1>
          </Link>
        </section>
      </nav>
    </header>
  );
};

export default NavBar;
