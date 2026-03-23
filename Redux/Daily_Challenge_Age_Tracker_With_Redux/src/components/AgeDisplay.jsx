import { useSelector } from 'react-redux';

function AgeDisplay() {
  const { value, loading } = useSelector((state) => state.age);

  return (
    <div className="card">
      <h1>Age Tracker</h1>
      <h2>Your Age: {value}</h2>

      {loading && (
        <div className="spinner-box">
          <div className="spinner"></div>
          <p>Updating age...</p>
        </div>
      )}
    </div>
  );
}

export default AgeDisplay;