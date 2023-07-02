import InfoCard from "./search/InfoCard";
// import Map from "@/components/common/search/Map";
import Footer from "@/components/layouts/footer/Footer";
import Header from "@/components/layouts/header/Header";
import PaginationPost from "@/utils/functions/PaginationPost";
import { Box, Button, Typography, styled } from "@mui/material";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React, { useState } from "react";

// STYLES
const BoxBtns = styled(Box)(({ theme }) => ({
  // display: "none",
  color: "rgb(31 41 55)",
  marginLeft: "12px",
  marginBottom: "20px",
  whiteSpace: "nowrap",
  [theme.breakpoints.down("sm")]: {
    display: "inline-flex",
  },
}));

export default function Search({ searchResults }) {
  // console.log("ddd : ", { searchResults });
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;


  // const ate =
  //   startDate && format(new Date(startDate), "dd/MMMM/yy");
  // const ndDate = endDate && format(new Date(endDate), "dd/MMMM/yy");
  // console.log(ate);
  
  const formattedStartDate = startDate && format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = endDate && format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;


  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  // Get current posts
  // 9 = 1*9
  const LastPostIndex = currentPage * postsPerPage;
  // 0 = 9-9
  const FirstPostIndex = LastPostIndex - postsPerPage;
  // "slice()" : renvoie un objet tableau, en coupant la poire (countries) en deux, avec les deux paramètres "indexOfFirstPost" & "indexOfLastPost"
  const currentPosts = searchResults.slice(FirstPostIndex, LastPostIndex);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} `} />
      {/* <DayJS element='span' format='DD MM YYYY'>
        {startDate}
      </DayJS> */}
      <main style={{ display: "flex" }}>
        <section
          style={{
            flexGrow: 1,
            paddingTop: "56px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          <Typography variant=''>
            300+ Séjours - {range} pour {noOfGuests} personne(s)
          </Typography>
          <Typography
            style={{ marginTop: "8px", marginBottom: "24px" }}
            variant='h4'
          >
            séjours en {location}
          </Typography>
          <BoxBtns>
            <Button>flexibilité d'annulation</Button>
            <Button>type de lieu</Button>
            <Button>Prix</Button>
            <Button>Chambres et lit</Button>
            <Button>Plus dez filtres</Button>
          </BoxBtns>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {currentPosts.map(
              ({
                img,
                // location,
                title,
                description,
                star,
                price,
                total,
                lat,
                long,
              }) => (
                <InfoCard
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  lat={lat}
                  long={long}
                />
              )
            )}
          </div>
        </section>

        {/* <section style={{ minWidth: "600px"}}>
          <Map />
        </section> */}
      </main>
      <div>
        <PaginationPost
          postsPerPage={postsPerPage} // 9
          totalPosts={searchResults.length}
          paginate={paginate}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
