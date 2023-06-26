import {
  Button,
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// NEXT
import Image from "next/image";


////////////////////// FUNCTION REACT //////////////////////
export default function Banner() {
  ////////////////////// RESPONSIVE //////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  ////////////////////// STYLES //////////////////////
  const RootBanner = styled(Box)(({ theme }) => ({
    height: "300px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {},
  }));

  const BoxBanner = styled(Box)(({ theme }) => ({
    position: "absolute",
    textAlign: "center",
    top: "40%",
    width: "100%",
  }));

  const TypoTitle = styled(Typography)(({ theme }) => ({
    color: "#FFF",
    textShadow: "5px 5px #000",
  }));

  const Btn_I_M_Flexible = styled(Button)(({ theme }) => ({
    background: "#FFF",
    borderRadius: "9999px",
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    color: "rgb(168 85 247)",
    fontWeight: "bold",
    marginBottom: "12px",
    marginTop: "12px",
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingBottom: "16px",
    paddingTop: "16px",
    "&:hover": {
      background: "#FFF",
      transform: "scale(0.9)",
    },
  }));

  ////////////////////// RETURN //////////////////////
  return (
    <RootBanner>
      <Image
        alt='banner'
        src='https://res.cloudinary.com/dky2vpnyr/image/upload/v1687778907/project8_clone_airbnb_nextjs_mongodb/Others%20photos%20Airbnb/bgBanner1_hdmwga.jpg'
        layout='fill'
        objectFit='cover'
      />
      <BoxBanner>
        <TypoTitle variant={matches ? "h5" : "h3"}>
          Vous ne savez pas où aller ? Parfait.
        </TypoTitle>
        <Btn_I_M_Flexible>Je suis flexible</Btn_I_M_Flexible>
      </BoxBanner>
    </RootBanner>
  );
}
