/** @format */

export default async function fetchStats() {
  const backendUrl = process.env.INTERNAL_BACKEND_URL || "http://backend:8080";

  try {
    const response = await fetch(`${backendUrl}/api/view-stats`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    if (!response.ok)
      throw new Error(`Failed to fetch stats: ${response.statusText}`);

    const data = await response.json();
    console.log("Fetched fresh stats:", data);
    return data;
  } catch (error) {
    console.error("Error fetching stats:", error);
    return [
      { title: "Error Total Messages", value: 1111 },
      { title: "Error Active Messages", value: 11 },
    ];
  }
}
