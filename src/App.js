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
      title: "Unitited Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onUpdateNote = (updateNote) => {
    const updatedNotesArray = [];
    notes.map((note) => {
      if (note.id !== activeNote) {
        return updatedNotesArray.push(note);
      }
    });

    setNotes([updateNote, ...updatedNotesArray]);
  };

  const onDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const getActiveNote = () => {
    console.log(notes);
    return notes.find((note) => note.id === activeNote);
  };

  window.onbeforeunload = function () {
    setLocalNotes(notes);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
