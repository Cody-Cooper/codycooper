/** @jsx jsx */
import { jsx } from "theme-ui";
import { useLocation } from "@reach/router";

import Colortoggle from "./colortoggle";
import Hamburger from "./hamburger";

const NavBar = () => {
  var rootPage = useLocation().pathname === "/" ? true : false;
  var navBarSizes = getNavBarSizes();

  function getNavBarSizes() {
    if (rootPage) {
      return ["large-navbar", "root-header"];
    } else {
      return ["small-navbar", "not-root-header"];
    }
  }

  console.log("Is user currently on root page? " + rootPage);
  console.log("NavBar success");

  return (
    <header
      sx={{
        backgroundColor: "var(--theme-ui-colors-primary)",
        marginBottom: "50px",

        ".large-navbar": {
          height: "50vh",
        },
        ".small-navbar": {
          height: "40px",
        },
        ".root-header": {
          top: ["calc(50% - 70px)", "calc(50% - 70px)", "calc(50% - 46px)"],
        },
        ".not-root-header": {
          top: "-6px",
        },
      }}
    >
      <nav
        className={navBarSizes[0]}
        sx={{
          display: "flex",
          alignItems: "center",
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
          className={navBarSizes[1]}
          sx={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <h1
            sx={{
              display: ["none", "none", "inline-block"],
              fontSize: "80px",
              lineHeight: "1",
              m: 0,
              color: "#E4E6EB",
              mixBlendMode: "difference",
              pointerEvents: "auto",
            }}
          >
            codycooper
          </h1>
          {/* Center 'logo' mobile */}
          {rootPage ? (
            <div sx={{ m: "0 15%" }}>
              <h1
                sx={{
                  display: ["inline-block", "inline-block", "none"],
                  fontSize: "80px",
                  lineHeight: "1.1",
                  m: 0,
                  color: "#E4E6EB",
                  mixBlendMode: "difference",
                  marginBottom: "8px",
                  pointerEvents: "auto",
                }}
              >
                cody
                <br />
                cooper
              </h1>
            </div>
          ) : (
            <h1
              sx={{
                display: ["inline-block", "inline-block", "none"],
                fontSize: "80px",
                lineHeight: "1.1",
                m: 0,
                color: "#E4E6EB",
                mixBlendMode: "difference",
                pointerEvents: "auto",
              }}
            >
              cc
            </h1>
          )}

          {rootPage ? (
            <h2 sx={{ m: "0px" }}>infosec & design & development</h2>
          ) : null}
        </section>
      </nav>
    </header>
  );
};

export default NavBar;
