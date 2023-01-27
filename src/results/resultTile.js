function ResultTile({ location }) {
  return (
    <div className="result-tile">
      <span className="tile-label">{location.name}</span>
      <br/>
      {location.street} <br/>
      {location.city}, {location.state} {location.zip} <br/>
      <span className="tile-label"># of machines:</span> {location.num_machines} <br/>
      <span className="tile-label">Last Updated:</span> {location.date_last_updated}
    </div>
  );
}

export default ResultTile;
