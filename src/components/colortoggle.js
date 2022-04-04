/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";
import { Switch } from "theme-ui";
import { FaMoon } from "react-icons/fa";

const ColorToggle = (props) => {
  const [colorMode, setColorMode] = useColorMode();

  function toggleDarkMode() {
    setColorMode(colorMode === "light" ? "dark" : "light");
    console.log("colorMode changed");
  }

  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        paddingLeft: "8px",
        "& > label": {
          width: "auto",
        },
      }}
    >
      <Switch
        sx={{
          backgroundColor: "var(--theme-ui-colors-secondary)",
          "input:checked ~ &": {
            backgroundColor: "var(--theme-ui-colors-secondary)",
          },
          "& > div": {
            bg: "var(--theme-ui-colors-primary)",
            alignItems: "center",
          },
        }}
        onClick={toggleDarkMode}
      />
      <FaMoon
        sx={{
          color: "var(--theme-ui-colors-secondary)",
          marginRight: "8px",
        }}
      />
    </div>
  );
};

export default ColorToggle;
