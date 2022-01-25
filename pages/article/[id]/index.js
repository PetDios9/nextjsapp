import React from 'react';
import Link from 'next/link';

export default function article({ response }) {
  return (
    <div>
      <h1>{response.title}</h1>
      <p>{response.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const response = await res.json();
  return {
    props: {
      response,
    },
  };
};
