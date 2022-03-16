import { useState } from "react";
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

    setNotes([newNote, ...notes]) && setLocalNotes(notes);
  };

  const onUpdateNote = (updateNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id !== activeNote) {
        return note;
      }
      return updateNote;
    });

    setNotes(updatedNotesArray);
  };

  const onDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const onSaveNote = (id) => {
    setActiveNote(false);
    setLocalNotes(notes);
    console.log("first");
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  window.addEventListener("beforeunload", () => {
    setLocalNotes(notes);
  });

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
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
        />
      )}
    </div>
  );
}

export default App;
