const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');

// Add task function
function addTask() {
    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function () {
            li.remove();
        };
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}

// Event listener for Add button
addTaskBtn.addEventListener('click', addTask);

// Event listener for Enter key
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
