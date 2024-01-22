import React, { useState, useEffect } from "react";
import axios from "axios";
// NEXT
import { useRouter } from "next/router";
import ComponentListResultSearch from "@/components/common/resultsSearch/ComponentListResultSearch";
import LayoutResultsSearch from "@/components/layouts/LayoutResultsSearch";
import { BaseURL_API_Local, BaseURL_API_Website } from "@/utils/api/baseURL_API";

export default function ResultsSearchByCategory() {
  const router = useRouter();
  const { typeOfAccommodation, typeCategory } = router.query;

  // States Utilies
  const [sortPrice, setSortPrice] = useState(false);

  // States Search Data
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${BaseURL_API_Website}/hosts?sort=${
            sortPrice ? "price-desc" : "price-asc"
          }`
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
  }, [sortPrice]);

  const noOfGuests = undefined;

  return loading ? (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h1>Chargement ...</h1>
    </div>
  ) : (
    <LayoutResultsSearch
      noOfGuests={noOfGuests}
      setSortPrice={setSortPrice}
      sortPrice={sortPrice}
      titlePage={typeCategory}
    >
      {data?.map((destructuringOfHosts) => {
        const { typeCategory } = destructuringOfHosts;

        if (typeCategory === `${typeOfAccommodation}`)
          return (
            <ComponentListResultSearch
              destructuringOfHosts={destructuringOfHosts}
            />
          );
      })}
    </LayoutResultsSearch>
  );
}

