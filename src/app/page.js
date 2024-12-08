/** @format */

import Content from "@/components/Content/Content";
import fetchStats from "@/components/ServerFetch/fetchStats";
export const revalidate = 0;
export default async function Page() {
  const data = await fetchStats();

  return <Content data={data} />;
}
