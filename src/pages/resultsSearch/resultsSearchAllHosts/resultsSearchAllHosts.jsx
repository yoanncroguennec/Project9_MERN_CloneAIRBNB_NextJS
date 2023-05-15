import ComponentListResultSearch from "@/components/common/resultsSearch/ComponentListResultSearch";
import LayoutResultsSearch from "@/components/layouts/LayoutResultsSearch";
import { useEffect, useState } from "react";
import axios from "axios";

export default function resultsSearchAllHosts() {
  // States Utilies
  const [sortPrice, setSortPrice] = useState(false);

  // States Search Data
  const [searchResultsGetAllHosts, setSearchResultsGetAllHosts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/hosts?sort=${
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
      {searchResultsGetAllHosts?.map((destructuringOfHosts) => (
        <ComponentListResultSearch
          destructuringOfHosts={destructuringOfHosts}
        />
      ))}
    </LayoutResultsSearch>
  );
}
