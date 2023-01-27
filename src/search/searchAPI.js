// Fetch things from pinball API
const endpoint = 'https://pinballmap.com/api/v1/locations/closest_by_lat_lon.json';
export async function fetchResults(coords) {
  let fetchUrl = `${endpoint}?lat=${coords.lat}&lon=${coords.lon}&send_all_within_distance=20&no_details=1`;

  try {
    const response = await window.fetch(fetchUrl);
    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        throw new Error(data.errors);
      }
      return data.locations;
    } else {
      throw new Error(response.statusText);
    }
  } catch (e) {
    return Promise.reject(e.message ? e.message : 'Unknown error');
  }
}
