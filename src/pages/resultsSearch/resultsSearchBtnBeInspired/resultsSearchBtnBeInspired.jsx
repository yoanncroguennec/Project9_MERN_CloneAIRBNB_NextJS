import React, { useState, useEffect } from "react";
import axios from "axios";
import ComponentListResultSearch from "@/components/common/resultsSearch/ComponentListResultSearch";
import LayoutResultsSearch from "@/components/layouts/LayoutResultsSearch";
import { BaseURL_API_Local, BaseURL_API_Website } from "@/utils/api/baseURL_API";

////////////////////// EXPORT FUNCTION //////////////////////
export default function ResultsSearchBtnBeInspired() {
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
  const titlePage = "S'INSPIRER DE LA NATURE";

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
      titlePage={titlePage}
    >
      {data?.map((destructuringOfHosts) => {
        const { typeCategory } = destructuringOfHosts;

        if (typeCategory === "in_yurt" || typeCategory === "in_artic")
          return (
            <ComponentListResultSearch
              destructuringOfHosts={destructuringOfHosts}
            />
          );
      })}
    </LayoutResultsSearch>
  );
}
