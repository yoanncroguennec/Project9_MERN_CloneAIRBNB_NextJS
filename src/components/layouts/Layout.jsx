import { useState, useEffect } from "react";
// NEXT
import Head from "next/head";
// LAYOUTS
import { Navbar, Footer } from "./index";
// @BADRAP/BAR-OF-PROGRESS
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";
const progress = new ProgressBar({
  color: "#FE595E",
  delay: 100,
  size: 6,
  style: "zIndex: 50",
});
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);
// REACT-TOASTIFY
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// STYLES
import styles from "./Layout.module.css";


//////////////////// EXPORT FUNCTION ////////////////////
export default function Layout({ children }) {
  //////////////////// EFFECT TRANSITIONS PAGES ////////////////////
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");
  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);

  //////////////////// RETURN ////////////////////
  return (
    <div>
      <Head>
        <title>Clone Airbnb</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            console.log("fading out");
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
        className={`${styles.content} ${styles[transitionStage]}`}
      >
        <ToastContainer />
        {displayChildren}
      </div>
      <Footer />
    </div>
  );
}
