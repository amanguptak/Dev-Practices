import { useEffect } from "react";
import Note from "./Note";

import {SingleNote} from "../note-db"

interface DragNotesProps {
  notes: SingleNote[];
  noteSetter: (notesData: SingleNote[]) => void; // Assuming it updates the notes array
}

const DragNotes = ({ notes, noteSetter }: DragNotesProps) => {
    useEffect(() => {
   
        const savedNotesString = localStorage.getItem("notes");
        const savedNotes: SingleNote[] = savedNotesString ? JSON.parse(savedNotesString) : [];
    
        const updatedNotes = notes.map((note) => {
          const savedNote = savedNotes.find((n) => n.id === note.id);
          if (savedNote) {
            return {...note, position: savedNote.position};
          } else {
            const position = getNewPositions();
            return {...note, position};
          }
        });
    
        noteSetter(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
      }, [notes.length]);

  const getNewPositions = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  };
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">Note Dragable</h1>

      <div>
        {notes.map((data) => (
          <Note note={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default DragNotes;
