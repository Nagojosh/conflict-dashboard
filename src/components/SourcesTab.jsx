import { useState } from 'react';



const SOURCES = ['BBC', 'Al Jazeera', 'Reuters'];

export default function SourcesTab({ activeSource, setActiveSource }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="sources-tab">
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Hide Sources' : 'Show Sources'}
      </button>
      {expanded && (
        <ul>
          {SOURCES.map((source) => (
            <li
              key={source}
              onClick={() => setActiveSource(source)}
              style={{
                fontWeight: activeSource === source ? 'bold' : 'normal',
                cursor: 'pointer',
              }}
            >
              {source}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}