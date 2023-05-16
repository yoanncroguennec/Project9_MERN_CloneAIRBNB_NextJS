import React, { useRef } from "react";
import { Typography, styled, Box, useTheme, useMediaQuery } from "@mui/material";
// NEXT
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

////////////////////// STYLES //////////////////////
const RootListCategories = styled(Box)(({ theme }) => ({
  marginTop: "10px",
  position: "relative",
  width: "100%",
  [theme.breakpoints.down("sm")]: {},
}));

const BoxListCategories = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  marginLeft: "2px",
  overflow: "hidden",
  overflowX: "hidden",
  height: "100%",
}));

const StylesListCategories = styled(Box)(({ theme }) => ({
  position: "relative",
  cursor: "pointer",
  height: "250px",
  minWidth: "380px",
  overflowX: "hidden",
  [theme.breakpoints.down("sm")]: {
    height: "250px",
    minWidth: "280px",
  },
}));

const TypoTitleCategory = styled(Typography)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.6)",
  color: "#FFF",
  textAlign: "center",
}));

const styleIconChevronLeft = {
  width: "50px",
  height: "100%",
  backgroundColor: "rgb(22, 22, 22, 0.5)",
  color: "white",
  position: "absolute",
  zIndex: 11,
  top: 0,
  bottom: 0,
  margin: "auto",
  left: 0,
  cursor: "pointer",
};

const styleIconChevronRight = {
  width: "50px",
  height: "100%",
  backgroundColor: "rgb(22, 22, 22, 0.5)",
  color: "white",
  position: "absolute",
  zIndex: 11,
  top: 0,
  bottom: 0,
  margin: "auto",
  right: 0,
  cursor: "pointer",
};

////////////////////// FUNCTION REACT //////////////////////
export default function ListCategories({ dataCategories }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  
  // Slides Categories
  const rowRef = useRef(null);

  const handleClick = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <>
      <Typography
        style={{ fontWeight: "bold" }}
        variant={matches ? "h5" : "h3"}
      >
        Vivre n&apos;importe où !
      </Typography>

      <RootListCategories>
        <BiChevronLeft
          size={22}
          style={styleIconChevronLeft}
          onClick={() => handleClick("left")}
        />
        <BoxListCategories ref={rowRef}>
          {dataCategories.map(
            ({ _id, urlTypeCategory, typeCategory, imgCategory }) => (
              <Link
                href={`/resultsSearch/resultsSearchByCategory/resultsSearchByCategory?typeOfAccommodation=${urlTypeCategory}&typeCategory=${typeCategory}`}
                // href={`/search/itemHost/${typeCategory}?img=${imgCategory}&typeCategory=${typeCategory}`}
                key={_id}
              >
                <StylesListCategories>
                  <Image
                    src={imgCategory}
                    className='rounded-sm object-cover md:rounded'
                    fill
                    alt='movie poster'
                    style={{ zIndex: "-10" }}
                  />
                  <TypoTitleCategory variant={matches ? "h6" : "h5"}>
                    {typeCategory}
                  </TypoTitleCategory>
                </StylesListCategories>
              </Link>
            )
          )}
        </BoxListCategories>
        <BiChevronRight
          style={styleIconChevronRight}
          onClick={() => handleClick("right")}
        />
      </RootListCategories>
    </>
  );
}
