/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect } from "react";

import { useColorMode } from "theme-ui";
import { FaMoon } from "react-icons/fa";

var initialColorCheckExecuted = false;

const ColorToggle = (props) => {
  function toggleDarkMode() {
    setColorMode(colorMode === "light" ? "dark" : "light");
  }

  const [colorMode, setColorMode] = useColorMode();

  function CheckColorMode() {
    useEffect(() => {
      const elm = document.getElementById("switch");
      if (colorMode === "dark") {
        console.log(`Dark mode detected on page load: toggle set`);
        elm.checked = true;
        initialColorCheckExecuted = true;
      }
    });
  }

  if (!initialColorCheckExecuted) {
    CheckColorMode();
  }

  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        paddingLeft: "8px",
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
            background: "var(--theme-ui-colors-secondary)",
          },
          "&:checked + label:after": {
            left: "calc(100% - 5px)",
            transform: "translateX(-100%)",
            background: "var(--theme-ui-colors-primary)",
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
          background: "var(--theme-ui-colors-secondary)",
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
            background: "var(--theme-ui-colors-primary)",
            borderRadius: "90px",
            transition: "0.3s",
          },
          "&:active:after": {
            width: "30px",
          },
        }}
      >
        Toggle
      </label>
      <FaMoon
        sx={{
          color: "var(--theme-ui-colors-secondary)",
          marginLeft: "8px",
        }}
      />
    </div>
  );
};

export default ColorToggle;
