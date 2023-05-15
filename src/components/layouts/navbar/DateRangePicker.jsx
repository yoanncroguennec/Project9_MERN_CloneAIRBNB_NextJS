import { Typography, styled, Box, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
// REACT-DATE-RANGE
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
// ICONS
import { FiUsers } from "react-icons/fi";

////////////////////// EXPORT FUNCTION //////////////////////
export default function DateRangePicker({ searchInput, setSearchInput }) {
  ////////////////////// RESPONSIVE //////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //////////////////// STYLES //////////////////////
    const RootListSearch = styled(Box)(({ theme }) => ({
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {},
    }));

  // "(new Date()" : Valeur d'aujourd'hui
  const [startDate, setStartDate] = useState(new Date());
  // console.log(startDate);
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const selectionRanges = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function HandleSelect(ranges) {
    // console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  function ResetInput() {
    setSearchInput("");
  }

  const router = useRouter();
  function Search() {
    router.push({
      pathname: "/resultsSearch/resultsSearchByCity/resultsSearchByCity",
      query: {
        nameCity: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
    setSearchInput("");
  }

  //   {/* "&&" Si la condition ("searchInput") est vrai */}
  return (
    searchInput && (
      // !!! ATTENTION !!! NE PAS METTRE CE STYLE DANS UNE BALISE MUI CAR APRES LE "SÉLÉCTION RANGE" MARCHE PLUS DONC LE DÉFINIR DIRECTEMENT DANS UNE BALISE DIV.
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gridColumn: "span 3 / span 3",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <DateRange
          ranges={[selectionRanges]}
          retainEndDateOnFirstSelection={false}
          minDate={new Date()}
          rangeColors={["#FD5B61"]}
          onChange={HandleSelect}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #000",
            marginBottom: "16px",
          }}
        >
          <Typography variant={matches ? "" : "h5"}>
            Nombre de personnes
          </Typography>
          <div>
            <FiUsers size={matches ? 25 : 35} />
            <input
              type='number'
              min={1}
              onChange={(e) => setNoOfGuests(e.target.value)}
              value={noOfGuests}
              style={{
                outline: "none",
                color: "rgb(248 113 113)",
                paddingLeft: "48px",
                width: "48px",
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <button onClick={ResetInput} style={{ flexGrow: "1" }}>
            Annulez
          </button>
          <button onClick={Search} style={{ flexGrow: "1" }}>
            Cherchez
          </button>
        </div>
      </div>
    )
  );
}
