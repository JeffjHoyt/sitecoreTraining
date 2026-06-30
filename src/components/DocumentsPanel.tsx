import { useState } from 'react';
import type { StudyDocument } from '../documents';

interface Props {
  documents: StudyDocument[];
}

export default function DocumentsPanel({ documents }: Props) {
  const [selected, setSelected] = useState<StudyDocument | null>(null);

  if (selected) {
    return (
      <div className="documents-panel">
        <button className="doc-back" onClick={() => setSelected(null)}>← Back to Documents</button>
        <h2 className="doc-title">{selected.title}</h2>
        <span className="doc-category-badge">{selected.category}</span>
        <div className="doc-content">
          {selected.content.split('\n').map((line, i) =>
            line.trim() === '' ? <br key={i} /> : <p key={i}>{line}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="documents-panel">
      <h2>Study Documents</h2>
      {documents.length === 0 ? (
        <p className="weakness-empty">No documents yet — check back soon.</p>
      ) : (
        <div className="doc-list">
          {documents.map(doc => (
            <button key={doc.id} className="doc-card" onClick={() => setSelected(doc)}>
              <span className="doc-card-title">{doc.title}</span>
              <span className="doc-card-category">{doc.category}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
