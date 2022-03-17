import React from "react";
import JoditEditor from "jodit-react";
import { ReactComponent as SaveIcon } from "./assets/images/check-mark.svg";
import { ReactComponent as DeleteIcon } from "./assets/images/trash.svg";

function Main({ activeNote, onUpdateNote, onSaveNote, onDeleteNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  return (
    <div className="app-main">
      <div className="app-main-header">
        <button
          className="app-main-save"
          onClick={() => onSaveNote(activeNote.id)}
        >
          <SaveIcon />
          <span>Save</span>
        </button>

        <button
          className="app-main-delete"
          onClick={() => onDeleteNote(activeNote.id)}
        >
          <DeleteIcon />
          <span>Delete</span>
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
        <JoditEditor
          value={activeNote.body}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => onEditField("body", newContent)}
        />
      </div>
    </div>
  );
}

export default Main;
