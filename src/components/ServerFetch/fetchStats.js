/** @format */

export default async function fetchStats() {
  try {
    const res = await fetch("https://localhost:7279/api/view-stats", {
      method: "GET",
      headers: {
        Accept: "*/*",
      },
      mode: "cors", // Allow cross-origin requests
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch stats: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching stats:", error);
    throw error;
  }
}
