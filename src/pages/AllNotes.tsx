import DragNotes from '../components/DragNotes/DragNotes.tsx'

import { useState } from 'react'
import { notesData } from '../components/note-db';
import {SingleNote} from "../components/note-db"
const AllNotes = () => {
    const [notes , setNotes] = useState<SingleNote[]>(notesData)
  return (
    <DragNotes notes={notes} noteSetter={setNotes}/>
  )
}

export default AllNotes