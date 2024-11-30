/** @format */

import Content from "@/components/Content/Content";
import fetchStats from "@/components/ServerFetch/fetchStats";

export default async function Page() {
  const data = await fetchStats();
  return <Content data={data} />;
}
