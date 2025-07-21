import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ukraine from '../data/ukraine.json';
import iran from '../data/iran.json';
import SourcesDrawer from '../components/SourcesDrawer';

const datasets = {
  Ukraine: ukraine,
  Iran: iran,
};

function RegionPage({ region }) {
  const [activeSource, setActiveSource] = useState(null);
  const articles = datasets[region] || [];

  const filteredArticles = activeSource
    ? articles.filter((a) => a.source === activeSource)
    : articles;

    const getRegionBbox = (region) => {
        switch(region.toLowerCase()) {
          case 'iran':
            return '42.983%2C24.467%2C63.433%2C40.9';
        case 'ukraine':
            return '22.1371%2C44.3614%2C40.2275%2C52.3797';
        default:
          return '22.1371%2C44.3614%2C40.2275%2C52.3797'; // default to Ukraine
  }
};

  return (
    <div>
  


<h2>{region}</h2>
    <iframe
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${getRegionBbox(region)}&layer=mapnik`}
      style={{ width: '100%', height: '400px', border: '1px solid black', borderRadius: '8px' }}
      title={`${region} Map`}
    />

      <SourcesDrawer
        sources={[...new Set(articles.map(a => a.source))]}
        setActiveSource={setActiveSource}
        activeSource={activeSource}
      />

      <div style={{ marginTop: '20px' }}>
        {filteredArticles.map((item, idx) => (
          <div key={idx} style={{ marginBottom: '12px' }}>
            <strong>{item.source}</strong> - {item.title} ({item.date})<br />
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>

      <p style={{ fontSize: '12px', fontStyle: 'italic', marginTop: '40px', color: '#777' }}>
        Disclaimer: This is a student prototype for educational purposes only. All article titles and references to real organizations (e.g., BBC, Al Jazeera, Reuters) are fictitious and used solely as placeholder data.
      </p>
    </div>
  );
}

export default RegionPage;