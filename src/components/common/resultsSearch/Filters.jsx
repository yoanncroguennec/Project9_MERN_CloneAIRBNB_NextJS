import React from "react";
// import PriceRange from "../../../pages/resultsSearch/PriceRange";
import { Box, Typography, styled } from "@mui/material";
// ICONS
import {
  TbSortDescendingNumbers,
  TbSortAscendingNumbers,
} from "react-icons/tb";

////////////////////// EXPORT FUNCTION //////////////////////
export default function Filters({
  noOfGuests,
  range,
  setFetchRangeValues,
  sortPrice,
  setSortPrice,
}) {
  ////////////////////// STYLES //////////////////////
  const RootFilters = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    margin: "10px 0",
    width: "100vw",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));

  const BoxItemFilter = styled(Box)(({ theme }) => ({
    margin: "0 15px",
    [theme.breakpoints.down("sm")]: {
      margin: "15px 0px",
    },
  }));

  ////////////////////// RETURN //////////////////////
  return (
    <RootFilters>
      <BoxItemFilter>
        <Typography
          variant='h5'
          sx={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          Filtres :
        </Typography>
      </BoxItemFilter>
      <BoxItemFilter>
        {noOfGuests !== undefined && (
          <div>
            <Typography variant='h6'> {noOfGuests} PERSONNE(S)</Typography>
            {range}
          </div>
        )}
        {noOfGuests === undefined && (
          <div>
            <Typography variant='h6'>
              Nombre de personnes pas précisés
            </Typography>
          </div>
        )}
      </BoxItemFilter>
      <BoxItemFilter>
        {/* <PriceRange setFetchRangeValues={setFetchRangeValues} /> */}
      </BoxItemFilter>
      <BoxItemFilter
        onClick={() => {
          setSortPrice(!sortPrice);
        }}
      >
        {sortPrice ? (
          <TbSortDescendingNumbers size={45} />
        ) : (
          <TbSortAscendingNumbers size={45} />
        )}
      </BoxItemFilter>
    </RootFilters>
  );
}
