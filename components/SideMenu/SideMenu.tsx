import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Drawer, useMediaQuery } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import BarChartIcon from "@mui/icons-material/BarChart";
import NextLink from "next/link";
import { signOut } from "next-auth/react";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
}));

const menuRouteList = ["", "analytics", "profile", "settings", ""];
const menuListTransition = [
  "Home",
  "Analytics",
  "Profile",
  "Settings",
  "Sign Out",
];
const menuListIcons = [
  <HomeIcon />,
  <BarChartIcon />,
  <Person2Icon />,
  <SettingsIcon />,
  <ExitToAppIcon />,
];

export default function SideMenu() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const isMobile = useMediaQuery("(max-width: 400px)");
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      sx={{
        width: drawerWidth,
        ["& .MuiDrawer-paper"]: {
          top: isMobile ? 60 : 0,

          left: 0,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
          }),
        },
      }}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerToggle}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {menuListTransition.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <NextLink
              href={
                text === "Sign Out" ? "/" : `/dashboard/${menuRouteList[index]}`
              }
            >
              <ListItemButton
                onClick={() => {
                  text === "Sign Out" ? signOut() : null;
                  setOpen(false);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {menuListIcons[index]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color: theme.palette.text.primary,
                    opacity: open ? 1 : 0,
                  }}
                />
              </ListItemButton>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
