import { createNote } from './createNote';
import localStorageApi from './localStorageApi';

export function submitForm(e) {
  e.preventDefault();

  localStorageApi.addNote(createNote(e));
}
