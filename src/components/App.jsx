// components/App.jsx
import React, { useState, useEffect } from 'react';
import AddNoteForm from './AddNoteForm';
import NotesList from './NoteList';

import { getInitialData, showFormattedDate } from '../utils';

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    setArchivedNotes((prevArchivedNotes) => prevArchivedNotes.filter((note) => note.id !== noteId));
  };

  const archiveNote = (noteId) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === noteId ? { ...note, archived: true } : note))
    );
    setArchivedNotes((prevArchivedNotes) => [...prevArchivedNotes, notes.find((note) => note.id === noteId)]);
  };

  const unarchiveNote = (noteId) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === noteId ? { ...note, archived: false } : note))
    );
    setArchivedNotes((prevArchivedNotes) => prevArchivedNotes.filter((note) => note.id !== noteId));
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredArchivedNotes = archivedNotes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // Handle search term changes or other side effects
    // You can add additional logic here if needed
  }, [searchTerm]);

  return (
    <div className='container'>
      <h1>Aplikasi Catatan Pribadi</h1>
      <input
        type="text"
        placeholder="Cari catatan..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AddNoteForm addNote={addNote} />
      <NotesList notes={filteredNotes} deleteNote={deleteNote} archiveNote={archiveNote} isArchivedList={false} />
      <NotesList
        notes={filteredArchivedNotes}
        deleteNote={deleteNote}
        unarchiveNote={unarchiveNote}
        isArchivedList={true}
      />
    </div>
  );
};

export default App;
