import { nanoid } from 'nanoid';
export function createNote(e) {
  const data = { id: nanoid() };
  new FormData(e.currentTarget).forEach((value, name) => (data[name] = value));
  return data;
}
