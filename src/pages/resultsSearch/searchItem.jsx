import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// NEXT
import Image from "next/image";
import { useRouter } from "next/router";
// COMPONENTS COMMON
import ModalMoreAllPhotos from "./ModalMoreAllPhotos";
// ICONS
import { AiFillStar } from "react-icons/ai";
import { BaseURL_API_Local } from "@/utils/api/baseURL_API";

////////////////////// EXPORT FUNCTION //////////////////////
export default function SearchItem() {
  ////////////////////// RESPONSIVE //////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  ////////////////////// STYLES //////////////////////
  const RootSearchItem = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    margin: "50px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px",
    },
  }));

  const BoxTitlePageAndStarAndLocalization = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
    // justifyContent: "center",
    [theme.breakpoints.down("sm")]: {},
  }));

  const stylePhotoAccommodation = {
    borderRadius: "5px",
    // gridColumn: "span 2",
    // gridRow: "span 2",
    height: `350px`,
    width: `350px`,
  };

  const BoxTitle_SubTitle_NameUserHost_ImgUserHost = styled(Box)(
    ({ theme }) => ({
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {},
    })
  );

  const stylePhotoUserHost = {
    borderRadius: "50%",
    height: `${matches ? "100px" : "130px"}`,
    width: `${matches ? "150px" : "130px"}`,
  };

  const BoxCalculationPricesAndReservationDates = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
    [theme.breakpoints.down("sm")]: {},
  }));

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { _id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BaseURL_API_Local}/hosts/${_id}`);
        console.log(res.data);
        setData(res.data);
        // I set isLoading to false
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [_id]);

  let {
    city,
    country,
    description,
    imgUserHost,
    nameUserHost,
    photos,
    price,
    region,
    star,
    subTitle,
    title,
    titlePagePrincipale,
  } = data;

  return (
    <RootSearchItem>
      <Typography variant='h5'>{titlePagePrincipale}</Typography>
      <BoxTitlePageAndStarAndLocalization>
        <Typography variant='h6'>{star}</Typography>
        <AiFillStar size={matches ? 25 : 45} />
        <a
          target='_blank'
          href={`https://maps.google.com/?q= + ${city} + ${region} +  ${country}`}
        >
          <Typography variant='h5'>
            {city}, {region}, {country}
          </Typography>
        </a>
      </BoxTitlePageAndStarAndLocalization>

      {/* PHOTOS */}
      <div class='image-grid'>
        {photos?.slice(0, 4).map((photoAccommodation, index) => (
          <Image
            alt=''
            height={450}
            key={index}
            src={photoAccommodation}
            style={stylePhotoAccommodation}
            width={450}
          />
        ))}
        {(photos = 4 && <ModalMoreAllPhotos photos={photos} />)}
      </div>
      {/* PHOTOS */}
      <BoxTitle_SubTitle_NameUserHost_ImgUserHost>
        <div style={{ flex: "80%" }}>
          <Typography variant={matches ? "h6" : "h5"}>
            {title} - Chez {nameUserHost}
          </Typography>
          <Typography variant={matches ? "" : "h5"}>{subTitle}</Typography>
          <hr />
          <Typography variant={matches ? "h6" : "h5"}>Description</Typography>
          <Typography variant={matches ? "" : "h5"}>{description}</Typography>
        </div>
        <div style={{ flex: "20%" }}>
          <Image
            alt=''
            height={150}
            src={imgUserHost}
            style={stylePhotoUserHost}
            width={150}
          />
        </div>
      </BoxTitle_SubTitle_NameUserHost_ImgUserHost>
      {/* PHOTOS */}
      <BoxCalculationPricesAndReservationDates>
        {price} € par nuit
        <Typography variant='h6'>{star}</Typography>
        <AiFillStar size={matches ? 25 : 45} />
      </BoxCalculationPricesAndReservationDates>
    </RootSearchItem>
  );
}
