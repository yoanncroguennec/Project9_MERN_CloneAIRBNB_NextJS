import React from 'react'
// import Host from '../api/server/models/Host';
// import db from '../api/server/config/db';

export default function ProductScreen({ host, id }) {
  console.log(id);
  console.log(host);
//   return <div>{host.city}</div>;
}

export async function getServerSideProps({ query: { id } }) {
//   const res = await fetch(`https://testcrud-xi.vercel.app/api/tasks/${id}`);
  const res = await fetch(`http://localhost:3000/api/hosts/${id}`);

  if (res.status === 200) {
    const host = await res.json();

    return {
      props: {
        host,
      },
    };
  }

  return {
    props: {
      error: {
        statusCode: res.status,
        statusText: "Invalid Id",
      },
    },
  };
}