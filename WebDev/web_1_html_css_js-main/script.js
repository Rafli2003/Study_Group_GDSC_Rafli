function addTask() {
  const input = document.getElementById('tf-input').value;
  if (!input) return;
  const task = document.createElement('li');
  const taskId = new Date().valueOf().toString() + Math.random().toString(36).substring(2, 7);
  
  task.textContent = input;
  task.id = taskId;
  task.classList.add('list-item');
  
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit-button');
  editButton.addEventListener('click', () => {
    editTask(taskId);
  });
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    deleteTask(taskId);
  });
  
  task.appendChild(editButton);
  task.appendChild(deleteButton);
  document.getElementById('task-container').appendChild(task);
  document.getElementById('tf-input').value = '';
}

function deleteTask(id) {
  const task = document.getElementById(id);
  task.remove();
}

function editTask(id){
  const task = document.getElementById(id);
  const newText = prompt('Edit task:', task.firstChild.textContent);
  if (newText !== null && newText.trim() !== '') {
    task.firstChild.textContent = newText;
  }
}
