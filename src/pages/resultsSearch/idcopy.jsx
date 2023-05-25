import React from 'react'
// import Host from '../api/server/models/Host';
// import db from '../api/server/config/db';

export default function ProductScreen({ host, id }) {
  console.log(id);
 console.log(host);
  return <div>{host.city}</div>;
}

export async function getServerSideProps(context) {
  //   const { params } = context;
  const { id } = context.query;
console.log(id);

//   const request = await fetch(
//     `https://project9-mern-clone-airbnb-next-js.vercel.app/api/hosts/${id}`
//   ).then((response) => response.json());
  const request = await fetch(
    `http://localhost:3000/api/hosts/${id}`
  ).then((response) => response.json());

  return {
    props: {
      id: id,
      host: request,
    },
  };
}