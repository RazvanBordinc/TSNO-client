/** @format */

export default async function fetchStats() {
  try {
    const res = await fetch("http://localhost:5283/api/view-stats", {
      method: "GET",
      headers: {
        Accept: "*/*",
      },
      mode: "cors",
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
