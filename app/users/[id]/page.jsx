import { notFound } from "next/navigation";

const User = ({ params }) => {
  // console.log(params);

  if (isNaN(params.id) || params.id > 10) {
    notFound();
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-2xl font-bold">
        This the <span className="text-sky-500">User: {params.id}</span> page
      </h2>
    </main>
  );
};

export default User;
