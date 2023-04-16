import refs from './refs';

export function renderNotes(arr) {
  const markup = arr
    .map(item => {
      return `<li class="task-list-item">
                <button class="task-list-item-btn">Удалить</button>
                <h3>${item.taskName}</h3>
                <p>${item.taskText}</p>
                </li>`;
    })
    .join('');
  refs.taskList.insertAdjacentHTML('afterbegin', markup);
}
