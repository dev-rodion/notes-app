import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./Main";
import Sidebar from "./Sidebar";

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Unitited Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
      />
      <Main />
    </div>
  );
}

export default App;
