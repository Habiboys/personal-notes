// components/AddNoteForm.jsx
import React, { useState } from 'react';
import { getInitialData, showFormattedDate } from '../utils';

const AddNoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: +new Date(), // Menggunakan timestamp sebagai id unik
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(), // Menggunakan timestamp saat ini sebagai createdAt
    };
    addNote(newNote);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Judul:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Catatan:
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      </label>
      <button type="submit">Tambah Catatan</button>
    </form>
  );
};

export default AddNoteForm;
