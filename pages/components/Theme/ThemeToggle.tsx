import { IconButton, Typography, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export type ThemeToggleButtonProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
};

export default function ThemeToggleButton(props: ThemeToggleButtonProps) {
  const mobileCheck = useMediaQuery("(min-width: 400px)");
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const {
    ColorModeContext = React.createContext({ toggleColorMode: () => {} }),
  } = props;
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <>
      {mobileCheck && <Typography>{theme.palette.mode}</Typography>}{" "}
      <IconButton
        sx={{ mr: 2 }}
        title={theme.palette.mode + " mode"}
        aria-label={theme.palette.mode + " mode button"}
        onClick={colorMode.toggleColorMode}
      >
        {theme.palette.mode === "dark" ? (
          <Brightness4Icon />
        ) : (
          <Brightness7Icon />
        )}
      </IconButton>
    </>
  );
}
