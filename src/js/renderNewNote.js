import refs from './refs';
export function renderNewNote(obj) {
  if (obj.taskName === '' || obj.taskText === '') {
    return alert('Please, fill in the all fields');
  }
  const markup = `<li class="task-list-item">
      <button class="task-list-item-btn" data-id="${obj.id}">Удалить</button>
     <h3>${obj.taskName}</h3>
      <p>${obj.taskText}</p>
  </li>
 `;
  refs.taskList.insertAdjacentHTML('beforeend', markup);
}
