import React from "react";
import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
  ////////////////////// RESPONSIVE //////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  ////////////////////// STYLES //////////////////////
  const RootFilters = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      background: "rgba(210, 210, 210, 0.9)",
      bottom: "0px",
      border: "4px solid #000",
      borderRadius: "25px",
      flexDirection: "column",
      height: "100px",
      margin: "15px",
      position: "fixed",
      width: "90%",
      zIndex: 99,
    },
  }));

  const BoxItemFilter = styled(Box)(({ theme }) => ({
    margin: "0 15px",
    [theme.breakpoints.down("sm")]: {
      margin: "3px 0px",
    },
  }));

  ////////////////////// RETURN //////////////////////

  return (
    <RootFilters>
      <BoxItemFilter>
        <Typography
          variant={`${matches ? "h6" : "h5"}`}
          sx={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          Filtres :
        </Typography>
      </BoxItemFilter>
      <BoxItemFilter>
        {noOfGuests !== undefined && (
          <div>
            <Typography variant={`${matches ? "" : "h6"}`}>
              {noOfGuests} PERSONNE(S)
            </Typography>
            {range}
          </div>
        )}
        {noOfGuests === undefined && (
          <div>
            <Typography variant={`${matches ? "" : "h6"}`}>
              Nombre de personne(s) pas précisés
            </Typography>
          </div>
        )}
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
