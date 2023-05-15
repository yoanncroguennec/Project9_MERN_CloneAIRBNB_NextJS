import Geolocation_API from "@/utils/functions/Geolocation_API";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// ICONS
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";


// STYLES
const RootInfoCard = styled(Box)(({ theme }) => ({
  border: "1px solid #000",
  display: "flex",
  paddingTop: "28px",
  paddingBottom: "28px",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    opacity: "0.8",
  },
  [theme.breakpoints.down("sm")]: {},
}));




export default function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  lat,
  long
}) {


  
  return (
    <Link
      href={`/search/itemHost?img=${img}&location=${location}&title=${title}&description=${description}&star=${star}&price=${price}&total=${total}&lat=${lat}&long=${long}`}
    >
      <RootInfoCard>
        <div
          style={{
            height: "208px",
            position: "relative",
            flexShrink: 0,
            width: "320px",
          }}
        >
          <Image
            alt=''
            src={img}
            layout='fill'
            objectFit='cover'
            style={{ borderRadius: "20px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            paddingLeft: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Nom de la ville : {location}</Typography>
            <AiOutlineHeart style={{ cursor: "pointer" }} />
          </div>

          <Typography>{title}</Typography>
          <div style={{ borderBottom: "1px solid #000", paddingTop: "8px" }} />
          <p style={{ paddingTop: "8px", color: "gray", flexGrow: 1 }}>
            {description}
          </p>
          {/* <Geolocation_API lat={lat} long={long}/> */}

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <Typography style={{ display: "flex", alignItems: "center" }}>
              <AiFillStar color='gold' />
              {star}
            </Typography>
            <div>
              <Typography style={{ fontWeight: "bold", paddingBottom: "8px" }}>
                {price}
              </Typography>
              <Typography>{total}</Typography>
            </div>
          </div>
        </div>
      </RootInfoCard>
    </Link>
  );
}
