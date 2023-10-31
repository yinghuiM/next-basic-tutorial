import Link from "next/link";
import { cloneDeep } from "lodash";

const UserPage = async ({ searchParams }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/usersgehgeh", {
    cache: "no-store",
  });

  const users = await res.json();

  const handleSort = (arr) => {
    return cloneDeep(arr).sort((a, b) => b.id - a.id);
  };

  const sortBy = searchParams?.sortBy;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-2xl font-bold">This is the User page</h2>
      <h3>{new Date().toLocaleString()}</h3>
      <ul className="mt-4 list-disc">
        {(sortBy === "desc" ? handleSort(users) : users).map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default UserPage;
