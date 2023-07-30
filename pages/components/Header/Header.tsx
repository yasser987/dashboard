import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { CssBaseline, Stack, useTheme } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";
import ThemeToggleButton from "../Theme/ThemeToggle";
import NextLink from "next/link";

const pages = ["Products", "Pricing", "Blog"];

export type HeaderProps = {
  ColorModeContext: React.Context<{
    toggleColorMode: () => void;
  }>;
};

function ResponsiveAppBar(props: HeaderProps) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = useTheme();
  const { data: session } = useSession();
  const { ColorModeContext } = props;

  return (
    <AppBar position="static" sx={{ marginBottom: "40px" }}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row">
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Datasoft
            </Typography>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <ThemeToggleButton ColorModeContext={ColorModeContext} />
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="user name"
                    src={session?.user?.image as string}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem>
                  <NextLink
                    href="/dashboard/profile"
                    style={{
                      color: theme.palette.text.primary,
                      textDecoration: "none",
                    }}
                  >
                    <Typography textAlign="center">Profile</Typography>
                  </NextLink>
                </MenuItem>
                <MenuItem onClick={() => (session ? signOut() : signIn())}>
                  <Typography textAlign="center">
                    {session ? "Sign Out" : "Sign In"}
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
