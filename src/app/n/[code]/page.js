/** @format */

import ViewNote from "@/components/Actions/ViewNote";

export default async function Page({ params }) {
  const code = await params.code;
  console.log("code:::: ", code);
  return <ViewNote code={code} />;
}
