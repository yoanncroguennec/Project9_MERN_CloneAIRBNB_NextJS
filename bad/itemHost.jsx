import Header from "@/components/layouts/header/Header";
import Geolocation_API from "@/utils/functions/Geolocation_API";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
// ICONS
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

export default function ItemHost() {
  const router = useRouter();

  const { img, location, title, description, star, price, total, long, lat } =
    router.query;

  return (
    <div>
      <Header />
      <Link
        href='/search/search'
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        <Typography variant='h5'>Retour aux recherches</Typography>
      </Link>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant='h3'>Détails :</Typography>
        <div style={{ display: "flex", flexWrap: "nowrap" }}>
          <Image
            alt=''
            src={img}
            height={650}
            width={650}
            style={{ border: "5px solid black", borderRadius: "35px" }}
          />
          <div>
            <Typography>{location}</Typography>
            <Typography variant='h4'>{title}</Typography>
            <div
              style={{ borderBottom: "1px solid #000", paddingTop: "8px" }}
            />
            <Typography>{description}</Typography>
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
                <Typography
                  style={{ fontWeight: "bold", paddingBottom: "8px" }}
                >
                  {price}
                </Typography>
                <Typography>{total}</Typography>
              </div>
            </div>
            <Geolocation_API lat={lat} long={long} />
          </div>
        </div>
      </div>
    </div>
  );
}
