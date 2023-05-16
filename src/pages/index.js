// INDEX
// APP

// LAYOUT
// BANNER
// NAVBAR
// FOOTER
// Geolocation_API

// ProposedListOfCities
// ListCategories


import { Box, Container, styled } from "@mui/material";
// COMMONS
import { LargeCard, ListCategories, ProposedListOfCities } from "../components/common";
// LAYOUTS
import { Banner } from "../components/layouts";
// UTILS BASE URL API
import { BaseURL_API_Local, BaseURL_API_Website } from "@/utils/api/baseURL_API";

////////////////////// STYLES //////////////////////
const RootExploreNearly = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "1280px",
  padding: "20px 32px",
  [theme.breakpoints.down("sm")]: {
    padding: "0 0",
  },
}));

////////////////////// EXPORT FUNCTION REACT //////////////////////
export default function Index({ searchResultsCategories }) {
  // console.log("searchResultsCategories : ", searchResultsCategories);

  return (
    <>
      <Banner />

      <RootExploreNearly>
        <Container maxWidth='xl' sx={{ margin: "60px 0" }}>
          <ProposedListOfCities />
        </Container>

        <Container maxWidth='xl' sx={{ margin: "60px 0" }}>
          <ListCategories dataCategories={searchResultsCategories} />
        </Container>

        <Container maxWidth='xl' sx={{ margin: "60px 0" }}>
          <LargeCard />
        </Container>
      </RootExploreNearly>
    </>
  );
}

export async function getServerSideProps() {
  const searchResultsCategories = await fetch(
    `${BaseURL_API_Website}/categories`
  ).then((res) => res.json());

  return {
    props: {
      searchResultsCategories,
    },
  };
}
