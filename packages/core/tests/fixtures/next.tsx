import Image from 'next/image';
import React from 'react';

const NextPage = () => {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <Image src="/me.png" alt="me" width="64" height="64" />
    </div>
  );
};

export default NextPage;
