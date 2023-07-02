import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";
import { format } from "date-fns";
// COMMONS
import ComponentListResultSearch from "@/components/common/resultsSearch/ComponentListResultSearch";
// LAYOUTS
import LayoutResultsSearch from "@/components/layouts/LayoutResultsSearch";
// NEXT
import Link from "next/link";
import { useRouter } from "next/router";
// UTILS API
import {
  BaseURL_API_Local,
  BaseURL_API_Website,
} from "@/utils/api/baseURL_API";

////////////////////// EXPORT FUNCTION //////////////////////
export default function ResultsSearchByCity() {
  ////////////////////// RESPONSIVE //////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  ////////////////////// STYLES //////////////////////
  const RootNoAccommodation = styled(Box)(({ theme }) => ({
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

  // const RootListSearch = styled(Box)(({ theme }) => ({
  //   display: "flex",
  //   flexDirection: "column",
  //   [theme.breakpoints.down("sm")]: {},
  // }));

  // const BoxListSearch = styled(Box)(({ theme }) => ({
  //   display: "grid",
  //   gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  //   margin: "0 250px",
  //   [theme.breakpoints.down("sm")]: {
  //     margin: "0 10px",
  //     gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  //   },
  // }));

  // States Utilies
  const [fetchRangeValues, setFetchRangeValues] = useState([0, 200]);
  const [counterPage, setCounterPage] = useState(1);
  const [sortPrice, setSortPrice] = useState(false);

  // States Search Data
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { nameCity, startDate, endDate, typeOfAccommodation, noOfGuests } =
    router.query;
  // console.log(nameCity);
  ////////////////////// SEARCH DATA API //////////////////////
  const [value, setValue] = useState([0, 225]);

  console.log(startDate);
  console.log(endDate);
  const start = new Date("2023-05-30");
  const end = new Date(Date.now());

  function jj(start, end) {
    const rr = Math.ceil((Math.abs(end - start) / 1000) * 60 * 60 * 24);
    console.log(rr);
  }

  function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  }
  // Month/Day/Year
  console.log(getNumberOfDays("12/11/2023", "12/30/2023"));

  ////////////////////// FORMAT DATE //////////////////////
  const formattedStartDate =
    startDate && format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = endDate && format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${BaseURL_API_Website}/hosts?nameCity=${nameCity}&page=${counterPage}&priceMin=${
            value[0]
          }&priceMax=${value[1]}&sort=${sortPrice ? "price-desc" : "price-asc"}`
          // `http://localhost:3000/api/hosts?nameCity=${nameCity}&page=${counterPage}&priceMin=${
          //   fetchRangeValues[0]
          // }&priceMax=${fetchRangeValues[1]}&sort=${
          //   sortPrice ? "price-desc" : "price-asc"
          // }`
          // `http://localhost:3000/api/hosts?nameCity=${nameCity}&typeOfAccommodation=${typeOfAccommodation}`
        );
        // console.log(res.data);
        setData(res.data);
        // I set isLoading to false
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [nameCity, counterPage, value, sortPrice]);

  ////////////////////// DATA NO RESULTS //////////////////////
  if (data?.length === 0) {
    return (
      <LayoutResultsSearch>
        <RootNoAccommodation>
          <Typography variant='h3'>Pas d&apos;hébergements</Typography>
          <Link href='/' style={stylesLink}>
            <Typography variant='h6'>Retour à l&apos;accueil</Typography>
          </Link>
        </RootNoAccommodation>
      </LayoutResultsSearch>
    );
  }

  return (
    <LayoutResultsSearch
      noOfGuests={noOfGuests}
      setSortPrice={setSortPrice}
      sortPrice={sortPrice}
      titlePage={nameCity}
      range={range}
    >
      {data?.map((destructuringOfHosts, index) => (
        <ComponentListResultSearch
          destructuringOfHosts={destructuringOfHosts}
          key={index}
        />
      ))}
    </LayoutResultsSearch>
  );
}
