function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes App</h1>
        <button onClick={onAddNote}>+ New Note</button>
      </div>

      <div className="app-sidebar-notes">
        {notes &&
          notes.map((note, key) => {
            return (
              <div
                className={`app-sidebar-note ${
                  note.id === activeNote && "active"
                }`}
                key={key}
              >
                <button onClick={() => onDeleteNote(note.id)}>Delete</button>

                <div
                  className="app-sidebar-note-content"
                  onClick={() => setActiveNote(note.id)}
                >
                  <div className="sidebar-note-title">
                    <strong>
                      {note.title}
                      {!note.title && "(Unitited Note)"}
                    </strong>
                  </div>

                  {note.lastModified && (
                    <small className="note-meta">
                      Last modified{" "}
                      {new Date(note.lastModified).toLocaleDateString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </small>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Sidebar;
