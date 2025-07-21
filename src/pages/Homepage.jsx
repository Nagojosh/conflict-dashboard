import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <h1>Conflict Tracker</h1>
      <div className="cards">
        <Link to="/ukraine" className="card">Ukraine</Link>
        <Link to="/iran" className="card">Iran</Link>
      </div>
    </div>
  );
}

export default Homepage;