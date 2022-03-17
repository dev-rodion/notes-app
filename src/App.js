import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import { getLocalNotes, setLocalNotes } from "./LocalStorage";
import Main from "./Main";
import Sidebar from "./Sidebar";

function App() {
  const [notes, setNotes] = useState(getLocalNotes());
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "",
      body: "",
      lastModified: Date.now(),
    };
    setActiveNote(newNote.id);
    setNotes([newNote, ...notes]) && setLocalNotes(notes);
  };

  const onUpdateNote = (updateNote) => {
    const updatedNotesArray = [];

    notes.map((note) => {
      if (note.id !== activeNote) {
        updatedNotesArray.push(note);
      }
      return true;
    });

    setNotes([updateNote, ...updatedNotesArray]);
  };

  const onDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const onSaveNote = (id) => {
    setActiveNote(false);
    setLocalNotes(notes);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  window.addEventListener("beforeunload", () => {
    setLocalNotes(notes);
  });

  const [pageHieght, setPageHieght] = useState("");

  useEffect(() => {
    setPageHieght(window.innerHeight + "px");
  }, []);

  return (
    <div className="App" style={{ height: pageHieght }}>
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      {(!getActiveNote() && (
        <div className="no-active-note">No note selected</div>
      )) || (
        <Main
          activeNote={getActiveNote()}
          onUpdateNote={onUpdateNote}
          onSaveNote={onSaveNote}
          onDeleteNote={onDeleteNote}
        />
      )}
    </div>
  );
}

export default App;
