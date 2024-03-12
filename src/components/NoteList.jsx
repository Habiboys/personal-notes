// components/NotesList.jsx
import React from 'react';
import { showFormattedDate } from '../utils';

const NotesList = ({ notes, deleteNote, archiveNote, unarchiveNote, isArchivedList }) => {
  return (
    <div>
      <h2>{isArchivedList ? 'Daftar Arsip Catatan' : 'Daftar Catatan'}</h2>
      {notes.length === 0 ? (
        <p>{isArchivedList ? 'Tidak ada catatan di arsip' : 'Tidak ada catatan'}</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
              <p>Tanggal Pembuatan: {showFormattedDate(note.createdAt)}</p>
              {isArchivedList ? (
                <>
                  <button onClick={() => deleteNote(note.id)}>Hapus</button>
                  <button onClick={() => unarchiveNote(note.id)}>Keluarkan dari Arsip</button>
                </>
              ) : (
                <>
                  <button onClick={() => deleteNote(note.id)}>Hapus</button>
                  <button onClick={() => archiveNote(note.id)}>Arsipkan</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotesList;
