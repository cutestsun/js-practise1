const STORAGE_KEY = 'notesData';

function addNote(obj) {
  const notes = getNotes();
  notes.push(obj);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}
function getNotes() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}
export default { addNote, getNotes };
