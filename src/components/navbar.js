/** @jsx jsx */
import { jsx } from "theme-ui";
import Colortoggle from "./colortoggle";
import Hamburger from "./hamburger";

const NavBar = () => {
  console.log("NavBar success");

  function isRootPage() {
    if (typeof window === "undefined") {
      return /^\/(?:|index\.aspx?)$/i.test(window.location.pathname);
    }
  }

  var rootPage = isRootPage();

  console.log(rootPage);

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
          height: rootPage ? "50vh" : "40px",
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
            top: rootPage
              ? ["calc(50% - 78px)", "calc(50% - 78px)", "calc(50% - 46px)"]
              : "-6px",
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
                  lineHeight: "0.8",
                  m: 0,
                  color: "#E4E6EB",
                  mixBlendMode: "difference",
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
                lineHeight: "1",
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
