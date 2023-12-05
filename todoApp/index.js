const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

addTask.addEventListener('click', function() {

    // Creating a div
    let task = document.createElement('div');
    task.classList.add('task');

    // creating li element.
    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    // creating checkbutton
    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa fa-solid fa-check"></i>'
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton)

    // creating delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-solid fa-trash-can"></i>'
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton)

    // condition for appending task.
    if(inputTask.value === ""){
        alert("Enter your Task")
    } else {
        taskContainer.appendChild(task);
    }

})