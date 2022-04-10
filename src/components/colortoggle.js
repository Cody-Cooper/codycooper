/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect } from "react";

import { useColorMode } from "theme-ui";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorToggle = (props) => {
  function toggleDarkMode() {
    setColorMode(colorMode === "light" ? "dark" : "light");
  }

  const [colorMode, setColorMode] = useColorMode();

  function CheckColorMode() {
    useEffect(() => {
      var localColorMode = localStorage.getItem("theme-ui-color-mode");
      const elm = document.getElementById("switch");
      if (localColorMode === "dark") {
        elm.checked = true;
        console.log(`Dark mode detected on page load: toggle set`);
      } else {
        console.log("Light mode detected on page load.");
      }
    }, []);
  }

  CheckColorMode();

  return (
    <section>
      {/* Large screen toggle */}
      <div
        sx={{
          display: ["none", "none", "flex"],
          position: "fixed",
          alignItems: "center",
          left: "8px",
          top: "8px",
          mixBlendMode: "difference",
          filter: "var(--theme-ui-colors-filter)",
        }}
      >
        <input
          type="checkbox"
          id="switch"
          onClick={toggleDarkMode}
          sx={{
            height: "0",
            width: "0",
            visibility: "hidden",
            "&:checked + label": {
              background: "var(--theme-ui-colors-primary)",
            },
            "&:checked + label:after": {
              left: "calc(100% - 5px)",
              transform: "translateX(-100%)",
              background: "var(--theme-ui-colors-secondary)",
            },
          }}
        />
        <label
          htmlFor="switch"
          sx={{
            cursor: "pointer",
            textIndent: "-9999px",
            width: "50px",
            height: "25px",
            background: "var(--theme-ui-colors-primary)",
            display: "block",
            borderRadius: "100px",
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              top: "5px",
              left: "5px",
              width: "15px",
              height: "15px",
              background: "var(--theme-ui-colors-secondary)",
              borderRadius: "90px",
              transition: "0.1s",
            },
            "&:active:after": {
              width: "20px",
            },
          }}
        >
          Toggle
        </label>
        <FaMoon
          sx={{
            color: "var(--theme-ui-colors-primary)",
            marginLeft: "8px",
          }}
        />
      </div>

      {/* Mobile toggle */}

      <div
        sx={{
          display: ["flex", "flex", "none"],
          position: "fixed",
          alignItems: "center",
          left: "6px",
          top: "7px",
          mixBlendMode: "difference",
          filter: "var(--theme-ui-colors-filter)",
          background: "none",
        }}
      >
        <button
          id="switch"
          onClick={toggleDarkMode}
          sx={{
            display: "inline-block",
            backgroundColor: "var(--theme-ui-colors-primary)",
            border: "none",
            textAlign: "center",
            padding: 0,
            height: "27px",
            width: "27px",
            borderRadius: "12px",
          }}
        >
          {colorMode === "light" ? (
            <FaMoon
              sx={{
                color: "var(--theme-ui-colors-secondary)",
                m: "3px",
              }}
            />
          ) : (
            <FaSun
              sx={{
                color: "var(--theme-ui-colors-secondary)",
                m: "0px",
              }}
            />
          )}
        </button>
      </div>
    </section>
  );
};

export default ColorToggle;
