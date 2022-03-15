import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./Main";
import Sidebar from "./Sidebar";

function App() {
  const [notes, setNotes] = useState([
    {
      id: "2fadb-23de-772b-bf68-06d11ed8368",
      title: "Example Note",
      body: "\n# Heading 1\n## Heading 2\n### Heading 3\n#### Heading 4\n##### Heading 5\n###### Heading 6\n\n*italic text* || **strong text** || ***strong italic text*** || ****black text**** || *****black italic text*****\n\n### List\n* list item 1\n* list item 2\n* list item 3",
      lastModified: "",
    },
  ]);
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
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updateNote;
      }

      return note;
    });

    setNotes(updatedNotesArray);

    console.log(notes);
  };

  const onDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
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
