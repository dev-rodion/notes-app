import { useEffect, useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Main({ activeNote, onUpdateNote,onSaveNote }) {
  const [value, setValue] = useState(!activeNote ? "" : activeNote.body);

  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  useEffect(() => {
    if (!!value) onEditField("body", value);
  }, [value]);

  useEffect(() => {
    return () => setValue(activeNote.body);
  }, [activeNote.id]);

  return (
    <div className="app-main">
      <div className="app-main-header">
        <button onClick={() => onSaveNote(activeNote.id)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12.0001L8.94975 16.9499L19.5563 6.34326" stroke="#08c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Save</span>
        </button>
      </div>
      <div className="app-main-note-edit">
        <input
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          placeholder="Unitited Note"
          autoFocus
        />
        <ReactQuill theme="snow" value={value} onChange={(e) => setValue(e)} />
      </div>
    </div>
  );
}

export default Main;
