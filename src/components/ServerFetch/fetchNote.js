/** @format */

export default async function fetchNote(code) {
  if (!/^\d{1,4}$/.test(code)) {
    throw new Error("Invalid code. Must be numeric and up to 4 digits.");
  }

  const backendUrl = process.env.INTERNAL_BACKEND_URL || "http://backend:8080";

  try {
    const response = await fetch(`${backendUrl}/api/view-note?Code=${code}`, {
      method: "GET",
      headers: { Accept: "*/*" },
    });

    if (!response.ok) {
      throw new Error("Note not found");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching note:", error);
    throw error;
  }
}
