import './SourcesDrawer.css';
import { useState } from 'react';

function SourcesDrawer({ sources, activeSource, setActiveSource }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`sources-drawer ${open ? 'open' : ''}`}>
      <button onClick={() => setOpen(!open)}>
        {open ? 'Close Sources' : 'Show Sources'}
      </button>

      {open && (
        <ul>
          {sources.map((source, i) => (
            <li
              key={i}
              onClick={() => setActiveSource(source)}
              style={{
                cursor: 'pointer',
                fontWeight: activeSource === source ? 'bold' : 'normal'
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

export default SourcesDrawer;