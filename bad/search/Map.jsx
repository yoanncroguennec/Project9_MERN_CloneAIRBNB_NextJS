import React, { useState } from "react";
import ReactMapGL, { Marker, Popup, ViewState } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css"

const TOKEN =
  "pk.eyJ1Ijoic2lkbzY5IiwiYSI6ImNsOThwZXc3bzJzZDYzdXFtbG96NzVpaW8ifQ.WnVIKGvDc4mq4F7sYXVF5Q";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 28.6448,
    longitude: 77.216721,
    zoom: 10,
  });

  return (
    <div id='app' style={{ height: "100vh", width: "100vw", zIndex: 999 }}>
      lorem10
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        width='100%'
        height='100%'
        transitionDuration='200'
        mapStyle='mapbox://styles/sido69/cl98pnr7f005m14qq89g0wyby'
      ></ReactMapGL>
    </div>
  );
}
