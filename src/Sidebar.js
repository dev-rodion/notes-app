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
      </div>

      <div className="app-sidebar-notes">
        {notes &&
          notes.map((note, key) => {
            return (
              <div
                className={`app-sidebar-note ${
                  note.id === activeNote && "active"
                }`}
                onClick={() => setActiveNote(note.id)}
                key={key}
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
            );
          })}
      </div>

      <button className="app-sidebar-new" onClick={onAddNote}>
        + New Note
      </button>
    </div>
  );
}

export default Sidebar;
