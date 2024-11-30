/** @format */

import ViewNote from "@/components/Actions/ViewNote";
import fetchNote from "@/components/ServerFetch/fetchNote";

export default async function Page({ params }) {
  const { code } = await params;
  let note = null;
  let error = "";

  try {
    note = await fetchNote(code);
  } catch (err) {
    error = err.message || "This note doesn't exist!";
  }

  return <ViewNote note={note} error={error} />;
}
