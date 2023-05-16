import { Button, Typography, Box, styled, useTheme, useMediaQuery } from '@mui/material';
// NEXT
import Image from 'next/image';
import { useRouter } from 'next/router';


////////////////////// FUNCTION REACT //////////////////////
export default function LargeCard() {
  ////////////////////// RESPONSIVE //////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  ////////////////////// STYLES //////////////////////
  const RootLargeCard = styled(Box)(({ theme }) => ({
    position: "relative",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {},
  }));

  const BoxImg = styled(Box)(({ theme }) => ({
    position: "relative",
    height: "384px",
    minWidth: "300px",
  }));

  const BoxContentImg = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "128px",
    left: "3rem",
    [theme.breakpoints.down("sm")]: {
      left: "0rem",
    },
  }));

  const TypoTitle = styled(Typography)(({ theme }) => ({
    color: "#FFF",
    fontWeight: "bold",
    textShadow: "5px 5px #000",
    width: "300px",
    textAlign: "center",
  }));

  const TypoSubTitle = styled(Typography)(({ theme }) => ({
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "5px 5px #000",
  }));

  const BtnLargCard = styled(Button)(({ theme }) => ({
    background: "rgb(17 24 39)",
    borderRadius: "8px",
    color: "#FFF",
    fontWeight: "bold",
    marginTop: "20px",
    padding: "8px 16px",
    "&:hover": {
      background: "rgb(17 24 39)",
      transform: "scale(0.9)",
    },
    [theme.breakpoints.down("sm")]: {
      left: "3rem",
    },
  }));

  ////////////////////// REDIRECTION BTN //////////////////////
  const router = useRouter();
  function RedirectionBtnBeInspired() {
    router.push({
      pathname:
        "./resultsSearch/resultsSearchBtnBeInspired/resultsSearchBtnBeInspired",
      // query: {
      //   _id: _id,
      // },
    });
  }

  ////////////////////// RETURN //////////////////////
  return (
    <RootLargeCard>
      <BoxImg>
        <Image
          alt='largeCard'
          layout='fill'
          objectFit='cover'
          src='/assets/imgs/components/common/largeCard/imgLargeCard.jpg'
          style={{
            borderRadius: "15px",
          }}
        />
      </BoxImg>

      <BoxContentImg>
        <TypoTitle variant={matches ? "h5" : "h3"}>
          L'extérieur le plus vert
        </TypoTitle>
        <TypoSubTitle variant={matches ? "h6" : "h4"}>
          Liste de souhaits établie par airbnb
        </TypoSubTitle>
        <BtnLargCard onClick={RedirectionBtnBeInspired}>
          <Typography variant='h6'>S'inspirer</Typography>
        </BtnLargCard>
      </BoxContentImg>
    </RootLargeCard>
  );
}
