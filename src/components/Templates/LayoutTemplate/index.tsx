import * as React from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Outlet, useSearchParams } from "react-router-dom";

import { mainListItems, secondaryListItems } from "../../Atoms/ListItems";

import * as S from "./styles";
import { muiTheme } from "../../../themes/muiTheme";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

interface ILayoutProps {
  children?: React.ReactNode;
}

export function LayoutTemplate({ children }: ILayoutProps) {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    if (!visible) return;
    setOpen(!open);
  };
  const [visible, setVisible] = React.useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ display: "flex" }}>
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
              height: "90px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <S.IconMenu
                src="/assets/svgs/menuHamburguer.svg"
                alt="icone menu"
              />
            </IconButton>

            <S.FlexWrapperIcons>
              <S.IconLogo
                src="/assets/svgs/logo-starcheck.svg"
                alt="logo empresa"
              />
              <S.IconHome
                src="/assets/svgs/icone-home.svg"
                alt="icone home"
                onClick={() => window.open("/", "_self")}
              />
            </S.FlexWrapperIcons>
          </Toolbar>
        </AppBar>

        {visible && (
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
                height: "90px",
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              {mainListItems}
              <Divider sx={{ my: 1 }} />
              {secondaryListItems}
            </List>
          </Drawer>
        )}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            padding: "16px",
          }}
        >
          <Toolbar />
          <Container style={{ padding: 0, margin: "10px 0 0" }} maxWidth={"xl"}>
            {children}
            <Outlet />
          </Container>
          <S.LogoMapa src="/assets/svgs/logo-mapa.svg" alt="logo mapa" />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
