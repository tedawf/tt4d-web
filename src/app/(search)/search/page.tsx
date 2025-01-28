import { redirect } from "next/navigation";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const query = params.query;

  if (Array.isArray(query) || !query) {
    redirect("/");
  }

  return (
    <div>
      <h1>Searching for: {query}</h1>
    </div>
  );
}
