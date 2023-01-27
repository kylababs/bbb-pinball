import { setLoading, searchCoords } from './searchSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './search.css';

function SearchBar() {
  const dispatch = useDispatch();
  const [latVal, setLatVal] = useState(0);
  const [lonVal, setLonVal] = useState(0);

  // Search based on manual inputs
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchCoords({
      lat: latVal,
      lon: lonVal
    }));
  }

  // Find user's lat/lon then search based on that
  const handleFindMe = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      dispatch(setLoading(true));
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(searchCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }));
      });
    } else {
      alert("Could not find your location! Please try manually entering coordinates");
    }
  }

  return (
    <div className="search-bar">
      Manually enter a latitude and logitude
      <form className="manual-search" onSubmit={handleSearch}>
        <input
          type="number"
          placeholder="Latitude"
          value={latVal}
          onChange={(e)=>setLatVal(e.target.value)}
        />
        <input
          type="number"
          placeholder="Longitude"
          value={lonVal}
          onChange={(e)=>setLonVal(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      OR automatically find locations near you
      <form className="auto-search" onSubmit={handleFindMe}>
        <input type="submit" value="Find Locations Near Me" />
      </form>
    </div>
  );
}

export default SearchBar;
