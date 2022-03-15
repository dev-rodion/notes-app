import { useEffect, useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Main({ activeNote, onUpdateNote }) {
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
        <br />
      </div>
    </div>
  );
}

export default Main;
