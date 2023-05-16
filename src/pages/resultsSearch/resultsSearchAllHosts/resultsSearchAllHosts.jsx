import ComponentListResultSearch from "@/components/common/resultsSearch/ComponentListResultSearch";
import LayoutResultsSearch from "@/components/layouts/LayoutResultsSearch";
import { useEffect, useState } from "react";
import axios from "axios";
import { BaseURL_API_Local, BaseURL_API_Website } from "@/utils/api/baseURL_API";

export default function ResultsSearchAllHosts() {
  // States Utilies
  const [sortPrice, setSortPrice] = useState(false);

  // States Search Data
  const [searchResultsGetAllHosts, setSearchResultsGetAllHosts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${BaseURL_API_Website}/hosts?sort=${
            sortPrice ? "price-desc" : "price-asc"
          }`
        );
        setSearchResultsGetAllHosts(res.data);
        // I set isLoading to false
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [sortPrice]);

  const noOfGuests = undefined;
  const titlePage = "TOUS LES HÔTES DE AIRBNB";

  ////////////////////// RETURN //////////////////////
  return (
    <LayoutResultsSearch
      noOfGuests={noOfGuests}
      setSortPrice={setSortPrice}
      sortPrice={sortPrice}
      titlePage={titlePage}
    >
      {searchResultsGetAllHosts?.map((destructuringOfHosts, index) => (
        <ComponentListResultSearch
          destructuringOfHosts={destructuringOfHosts}
          key={index}
        />
      ))}
    </LayoutResultsSearch>
  );
}
