import { Box, Typography, useTheme, useMediaQuery, styled } from "@mui/material";
// NEXT
import Image from "next/image";
import Link from "next/link";
// DATA
import { dataExploreCity } from "@/pages/api/server/utils/data";


////////////////////// FUNCTION REACT //////////////////////
export default function ProposedListOfCities() {
  ////////////////////// RESPONSIVE //////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  ////////////////////// STYLES //////////////////////
  const RootSmallCard = styled(Box)(({ theme }) => ({
    alignItems: "center",
    borderRadius: "12px",
    display: "flex",
    margin: "2px",
    marginTop: "20px",
    marginLeft: "16px",
    cursor: "pointer",
    "&:hover": {
      background: "rgb(243 244 246)",
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("sm")]: {},
  }));

  const BoxListExploreData = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    },
  }));

  const styleLink = {
    color: "#000",
    textDecoration: "none",
  };

  const BoxIMG = styled(Box)(({ theme }) => ({
    height: "120px",
    position: "relative",
    margin: "0 25px 0 0",
    width: "120px",
  }));

  const styleIMG = {
    borderRadius: "8px",
  };

  ////////////////////// RETURN //////////////////////
  return (
    <>
      <Typography
        style={{ fontWeight: "bold" }}
        variant={matches ? "h5" : "h3"}
      >
        Explorer les environs
      </Typography>
      <BoxListExploreData>
        {dataExploreCity?.map(({ img, location, distance }) => (
          <Link
            href={`/resultsSearch/resultsSearchByCity/resultsSearchByCity?nameCity=${location}`}
            key={img}
            style={styleLink}
          >
            <RootSmallCard>
              <BoxIMG>
                <Image alt="cityImg" layout='fill' src={img} style={styleIMG} />
              </BoxIMG>
              <div>
                <Typography variant='h6'>{location}</Typography>
                <Typography>{distance}</Typography>
              </div>
            </RootSmallCard>
          </Link>
        ))}
      </BoxListExploreData>
    </>
  );
}
