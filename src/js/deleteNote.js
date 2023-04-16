import localStorageApi from './localStorageApi';

export function deleteNote(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  localStorageApi.removeNote(e.target.dataset.id);
}
