import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { convertDistance, getDistance } from "geolib";


export default function Geolocation_API({ lat, long }) {
  const [status, setStatus] = useState("");
  const [userLatitude, setUserLatitude] = useState("");
  const [userLongitude, setUserLongitude] = useState("");
  const [distanceBetweenTwoLocations, setDistanceBetweenTwoLocations] = useState("");

  // useEffect(() => {
  //   geoLocation();

  //   getDistanceBetweenTwoLocations();
  // }, [getDistanceBetweenTwoLocations]);

  // const geoLocation = () => {
  //   if (!navigator.geolocation) {
  //     setStatus("Geolocation is not supported by your browser");
  //   } else {
  //     setStatus("Locating...");
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setStatus(null);
  //         setUserLatitude(position.coords.latitude);
  //         setUserLongitude(position.coords.longitude);
  //       },
  //       () => {
  //         setStatus("Unable to retrieve your location");
  //       }
  //     );
  //   }
  // };

  // function getDistanceBetweenTwoLocations() {
  // //     console.log(long);
  // // console.log(lat);

  //   const COORDINATES_USER = {
  //     latitude: userLatitude,
  //     longitude: userLongitude,
  //   };
  //   const COORDINATES_HOST = { latitude: 48.8588376, longitude: 2.2768486 };
  //   // const COORDINATES_HOST = { latitude: {lat}, longitude: {long} };
  //   let distance = getDistance(COORDINATES_USER, COORDINATES_HOST, 1000);
  //   setDistanceBetweenTwoLocations(convertDistance(distance, "km"));
  // }

  return (
    <div>
      {/* Geolocation_API
      <button onClick={getDistanceBetweenTwoLocations}>
        getDistanceBetweenTwoLocations
      </button>
      {status}
      <Typography>Latitude : {userLatitude}</Typography>
      <Typography>Longitude : {userLongitude}</Typography> */}
      <Typography>
        Distance entre l&apos;hôte et vous : {distanceBetweenTwoLocations} km
      </Typography>
    </div>
  );
}
