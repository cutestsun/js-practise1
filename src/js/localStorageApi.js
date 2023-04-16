const STORAGE_KEY = 'notesData';

function addNote(obj) {
  const notes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  notes.push(obj);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export default { addNote };
