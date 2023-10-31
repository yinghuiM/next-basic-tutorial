import React from "react";

const page = ({ params: { slug } }) => {
  console.log(slug);
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <h2 className="text-2xl font-bold">Product : {slug}</h2>
    </main>
  );
};

export default page;
