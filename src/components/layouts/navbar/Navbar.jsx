import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { parseCookies } from "nookies";
import cookie from "js-cookie";
// import Ticker from "react-ticker";
import DateRangePicker from "./DateRangePicker";
// NEXT
import Image from "next/image";
import Link from "next/link";
// COMPONENTS
import Auth from "@/components/common/auth/Auth";
// FUNCTIONS
import Geolocation_API from "../../../utils/functions/Geolocation_API";
// ICONS
import {
  AiOutlineSearch,
  AiOutlineZoomIn,
  AiOutlineZoomOut,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { useRouter } from "next/router";

////////////////////// STYLES //////////////////////
const RootNavbar = styled(Box)(({ theme }) => ({
  alignItems: "center",
  background: "#FFF",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  height: "75px",
  justifyContent: "center",
  position: "sticky",
  top: 0,
  width: "100vw",
  zIndex: "99",
  [theme.breakpoints.down("sm")]: {},
}));

// LEFT
const BoxLeftNavbar = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexWap: "nowrap",
  height: "40px",
  [theme.breakpoints.down("sm")]: {},
}));

const BoxImgLogo = styled(Box)(({ theme }) => ({
  height: "40px",
  width: "150px",
  [theme.breakpoints.down("sm")]: {
    height: "40px",
    width: "100px",
  },
}));

const BoxTicker = styled(Box)(({ theme }) => ({
  width: "250px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const TypoTitleTicker = styled(Typography)(({ theme }) => ({
  color: "rgb(248 113 113)",
  fontWeight: "bold",
  marginLeft: "15px",
}));

const BoxToggleZoomPage_And_Geolocation_API = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

// MIDDLE
const ContainerMiddleHeader = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  paddingBottom: "8px",
  borderRadius: "9999px",
  paddingTop: "8px",
  [theme.breakpoints.down("sm")]: {
    border: "2px solid black",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  },
}));

const BoxIconSearch = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const stylesIconSearch = {
  background: "rgb(248 113 113)",
  borderRadius: "50%",
  color: "#FFF",
};

// RIGHT
const BoxRightNavbar = styled(Box)(({ theme }) => ({
  alignItems: "center",
  color: "rgb(107 114 128)",
  display: "flex",
  justifyContent: "flex-end",
}));

const TypoBecomeHost = styled(Typography)(({ theme }) => ({
  display: "inline",
  cursor: "pointer",
  marginRight: "15px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const BoxIcons_GlobeAndUser = styled(Box)(({ theme }) => ({
  alignItems: "center",
  border: "2px solid #cbd5e0",
  borderRadius: "9999px",
  display: "flex",
  margin: " 0 25px",
  padding: "8px",
}));

////////////////////// FUNCTION REACT //////////////////////
export default function Navbar({ placeholder }) {
  ////////////////////// RESPONSIVE //////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  ////////////////////// FUNCTION ZOOM PAGE //////////////////////
  const [zoomPage, setZoomPage] = useState(false);
  function toggleZoomScreen() {
    setZoomPage(!zoomPage);

    if (zoomPage) {
      document.body.style.zoom = "150%";
    } else {
      document.body.style.zoom = "100%";
    }
  }

  ////////////////////// USER SESSION //////////////////////
  const [userState, setUserState] = useState("");

  const cookies = parseCookies();
  const user = cookies?.user
    ? JSON.parse(cookies.user)
    : //  : session?.user
      //  ? session?.user
      "";

  useEffect(() => {
    setUserState(user);
  }, [setUserState]);

  async function logoutHandler() {
    cookie.remove("token");
    cookie.remove("user");

    window.location.reload();

    // setisLoggedIn(false);
    // setUserState("");
  }

  ////////////////////// INPUT SEARCH CITY //////////////////////
  const [searchInput, setSearchInput] = useState("");

  ////////////////////// REDIRECTION BTN //////////////////////
  const router = useRouter();
  function RedirectionBtnGlobeSearchAllHosts() {
    router.push({pathname: "./resultsSearch/resultsSearchAllHosts/resultsSearchAllHosts"});
  }

  ////////////////////// RETURN //////////////////////
  return (
    <RootNavbar>
      {/* LEFT */}
      <BoxLeftNavbar onClick={() => router.push("/")}>
        <BoxImgLogo>
          <Image alt='logo airbnb' height={50} src='/airbnb.png' width={180} />
        </BoxImgLogo>

        {/* <BoxTicker>
          <Ticker>
            {({ index }) => (
              <TypoTitleTicker variant='h6'>
                - Clone - CROGUENNEC Yoann
              </TypoTitleTicker>
            )}
          </Ticker>
        </BoxTicker> */}
        <BoxToggleZoomPage_And_Geolocation_API>
          <Button onClick={toggleZoomScreen}>
            {zoomPage ? (
              <AiOutlineZoomIn size={30} />
            ) : (
              <AiOutlineZoomOut size={30} />
            )}
          </Button>
          {/* <Geolocation_API /> */}
        </BoxToggleZoomPage_And_Geolocation_API>
      </BoxLeftNavbar>

      {/* MIDDLE */}
      <ContainerMiddleHeader>
        <input
          type='text'
          placeholder={placeholder || "Recherchez"}
          // "e" ("événement") = ça avance à chaque fois que l'user tape dans le champ de saisie
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />

        <BoxIconSearch>
          <AiOutlineSearch size={30} style={stylesIconSearch} />
        </BoxIconSearch>
      </ContainerMiddleHeader>
      {/* RIGHT */}
      <BoxRightNavbar>
        {/* Mettre condition si connecté renvoit la page "BecomeHost" sinon affiche le modal pour se connecter */}
        {/* <Link href='hosts/posts/postHost'>
          <TypoBecomeHost>Devenir un hôte</TypoBecomeHost>
        </Link> */}
        {userState && userState.email}
        {userState && userState.name}
        <BsGlobe
          onClick={RedirectionBtnGlobeSearchAllHosts}
          size={30}
          style={{ cursor: "pointer" }}
        />
        <BoxIcons_GlobeAndUser>
          {/* <AiOutlineMenu size={30} /> */}
          {userState ? (
            <AiOutlineLogout onClick={logoutHandler} size={30} />
          ) : (
            <Auth />
          )}
        </BoxIcons_GlobeAndUser>
      </BoxRightNavbar>

      {/*************************************************************/}
      {/********************* DATE RANGE PICKER *********************/}
      {/*************************************************************/}
      <DateRangePicker
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
    </RootNavbar>
  );
}
