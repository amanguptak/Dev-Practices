

import { useState } from 'react';
import './App.css'
import DragNotes from './components/DragNotes/DragNotes';
import { notesData } from './components/note-db';
import {SingleNote} from "./components/note-db"

function App() {

  const [notes , setNotes] = useState<SingleNote[]>(notesData)

  return (
    <>

  <DragNotes notes={notes} noteSetter={setNotes}/>
    </>
  )
}

export default App
