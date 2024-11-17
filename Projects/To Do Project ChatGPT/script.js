const taskList = document.querySelector('.tasks');
Sortable.create(taskList);
const addButton = document.querySelector('.add-task button');
addButton.addEventListener('click', () => {
    const taskInput = document.querySelector('.add-task input');
    if (taskInput.value !== '') {
        const newTask = document.createElement('li');
        newTask.innerText = taskInput.value;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});