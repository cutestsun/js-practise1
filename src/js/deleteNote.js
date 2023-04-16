import localStorageApi from './localStorageApi';

export function deleteNote(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  e.target.closest('.task-list-item').remove();
  localStorageApi.removeNote(e.target.dataset.id);
}
