export function createNote(e) {
  const data = { id: Date.now() };
  new FormData(e.currentTarget).forEach((value, name) => (data[name] = value));
  return data;
}
