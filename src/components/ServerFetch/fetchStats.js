/** @format */

let cache = {
  data: null,
  expiry: null,
};

export default async function fetchStats() {
  const cacheTTL = 5 * 60 * 1000;

  try {
    if (cache.data && cache.expiry > Date.now()) {
      console.log("Serving from cache");
      return cache.data;
    }

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

    const data = await res.json();

    cache = {
      data,
      expiry: Date.now() + cacheTTL,
    };

    console.log("Fetched fresh data");
    return data;
  } catch (error) {
    console.error("Error fetching stats:", error);
    throw error;
  }
}
