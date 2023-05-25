import { Box, Typography, styled } from "@mui/material";

import Filters from "../common/resultsSearch/Filters";


export default function LayoutResultsSearch({
  children,
  noOfGuests,
  range,
  sortPrice,
  setSortPrice,
  titlePage,
}) {
  ////////// STYLES //////////////////////
  const RootLayoutResultsSearch = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {},
  }));

  const TypoTitlePageBeInspired = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    margin: "5px 0",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {},
    margin: "1px 0",
  }));

  const BoxLayoutResultsSearch = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    [theme.breakpoints.down("sm")]: {
      margin: "0 10px",
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    },
  }));

  return (
    <RootLayoutResultsSearch>
      <Filters
        noOfGuests={noOfGuests}
        range={range}
        setSortPrice={setSortPrice}
        sortPrice={sortPrice}
        // setFetchRangeValues={setFetchRangeValues}
      />
      <TypoTitlePageBeInspired variant='h3'>
        {titlePage}
      </TypoTitlePageBeInspired>
      <BoxLayoutResultsSearch>{children}</BoxLayoutResultsSearch>
    </RootLayoutResultsSearch>
  );
}
