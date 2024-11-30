/** @format */
export default async function fetchNote(code) {
  if (!/^\d{1,4}$/.test(code)) {
    throw new Error("Invalid code. Must be numeric and up to 4 digits.");
  }

  const response = await fetch(
    `http://localhost:5283/api/view-note?Code=${code}`,
    {
      method: "GET",
      headers: {
        Accept: "*/*",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Note not found");
  }

  return await response.json();
}
