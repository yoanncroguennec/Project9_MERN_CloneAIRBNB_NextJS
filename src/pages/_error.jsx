import {
  Box,
  Typography,
  styled,
} from "@mui/material";// NEXT
import Link from "next/link";

////////////////////// EXPORT FUNCTION //////////////////////
export default function Notfound() {
  ////////////////////// STYLES //////////////////////
  const RootNotfound = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "150px",
    [theme.breakpoints.down("sm")]: {},
  }));

  const stylesLink = {
    color: "#000",
    textDecoration: "none",
  };

  return (
    <RootNotfound>
      <Typography variant='h5' sx={{ fontWeight: "bold" }}>Page Introuvable</Typography>

      <Link href='/' style={stylesLink}>
        <Typography variant='h6'>Retour à l&apos;accueil</Typography>
      </Link>
    </RootNotfound>
  );
}
