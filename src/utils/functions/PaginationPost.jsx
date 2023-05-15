import { Typography } from "@mui/material";
import React from "react";

export default function PaginationPost({ postsPerPage, totalPosts, paginate }) {
  const pages = [];

  // "countries.length" / 9
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  // console.log(pages);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        fontWeight: "500",
        fontSize: "15px",
      }}
    >
      {pages.map((page, id) => (
        <div key={id}>
          <Typography color="primary" onClick={() => paginate(page)} variant="h4">
            {page}
          </Typography>
        </div>
      ))}
    </div>
  );
}
