import DragNotes from '../components/DragNotes/DragNotes.tsx'
import { useState, useEffect } from 'react'
import {SingleNote} from "../components/note-db"
import { notesData } from '../components/note-db'
const AllNotes = () => {
  const [notes, setNotes] = useState<SingleNote[]>(() => {
    const storedNotes = localStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : notesData;
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <DragNotes notes={notes} noteSetter={setNotes} />
  );
}

export default AllNotes;
