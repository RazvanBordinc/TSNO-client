/** @format */

import Content from "@/components/Home/Content";
import fetchStats from "@/components/ServerFetch/fetchStats"; // Corrected the import path

export default async function Page() {
  const data = await fetchStats(); // Fetch stats
  return <Content data={data} />; // Pass data to Content component
}
