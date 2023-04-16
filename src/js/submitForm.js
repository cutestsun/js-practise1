import { createNote } from './createNote';
import localStorageApi from './localStorageApi';
import { renderNewNote } from './renderNewNote';

export function submitForm(e) {
  e.preventDefault();
  const newNote = createNote(e);
  localStorageApi.addNote(newNote);
  renderNewNote(newNote);

  e.currentTarget.reset();
}
