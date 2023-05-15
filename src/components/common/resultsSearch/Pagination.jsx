import { Button, Typography, styled } from "@mui/material";
import React from "react";

export default function Pagination({ counterPage, setCounterPage }) {

const BtnContained = styled(Button)(({ theme }) => ({
    background: "#00747f",
    color: "#FFF",
    [theme.breakpoints.down("sm")]: {},
  }));

const BtnOutlined = styled(Button)(({ theme }) => ({
    background: "#FFF",
    border: "2px solid #00747f",
    color: "#00747f",
  }));


  const handleClick = (action) => {
    if (action === "minus") setCounterPage(counterPage - 1);
    else if (action === "plus") setCounterPage(counterPage + 1);
    else if (action === "reset") setCounterPage(1);
  };

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "nowrap",
        justifyContent: "center",
        margin: 35,
      }}
    >
      {counterPage > 1 && (
        <>
          <BtnContained
            onClick={() => {
              // setCounterPage(0);
              handleClick("reset");
            }}
          >
            Première Page
          </BtnContained>
          <BtnContained
            // className={counterPage <= 0 ? "display-none" : null}
            onClick={() => {
              handleClick("minus");
              // setCounterPage(counterPage - 1);
            }}
          >
            -
          </BtnContained>
        </>
      )}

      <Typography variant="h5">{counterPage}</Typography>
      {counterPage < 10 && (
        <BtnContained
          // style={counterPage >= 10 ? { visibility: "hidden" } : null}
          onClick={() => {
            handleClick("plus");
          }}
        >
          +
        </BtnContained>
      )}
    </div>
  );
}
