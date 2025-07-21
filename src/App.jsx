import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import RegionPage from './pages/RegionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ukraine" element={<RegionPage region="Ukraine" />} />
        <Route path="/iran" element={<RegionPage region="Iran" />} />
      </Routes>
    </Router>
  );
}


export default App;
