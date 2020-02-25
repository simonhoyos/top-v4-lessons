const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__input');
const button = document.querySelector('.form__submit');
const content = document.querySelector('.tasks');
// const toDo = document.querySelectorAll('.prueba');
let currentTask = { done: false };
let currentTasks = [];

function print(currentTasks){
  console.log(currentTasks);
  let tasks = currentTasks.map(element => {
    const task = JSON.parse(element);
    console.log(task)
    return `<div class="task ${task.done ? 'strike' : ''}">
      <p class="task__name">${task.task}</p>
      <p class="task__description">${task.description}</p>
    </div>
    `
  }).join('');

  content.innerHTML = tasks;
}

if(localStorage.getItem('tasks')) {
  currentTasks = JSON.parse(localStorage.getItem('tasks'));
  print(currentTasks);
} else {
  currentTasks = [];
}

// Event Delagation
content.addEventListener('click', event => {
  const parentElement = event.target.parentElement;
  if(parentElement.classList.contains('task')) {
    parentElement.classList.toggle('strike');
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  currentTasks.push(JSON.stringify(currentTask));

  delete currentTask.task;
  delete currentTask.description;

  localStorage.setItem('tasks', JSON.stringify(currentTasks));

  print(currentTasks);

  event.target.reset();
});

inputs.forEach(input => {
  input.addEventListener('change', event => {
    currentTask[event.target.name] = event.target.value;
    console.log(currentTask);
    // currentTasks.push(event.target.value);
    // localStorage.setItem('tasks', currentTasks);
  });
});

// const containerElem = document.querySelector('.container')
// const contentElem = document.querySelector('.content')
// const buttonElem = document.querySelector('.button')

// Event Bubbling
// containerElem.addEventListener('click', event => {
//   console.log('containerElem');
//   console.log(event.target);
// });
// contentElem.addEventListener('click', event => {
//   console.log('contentElem');
//   console.log(event.target);
// });
// buttonElem.addEventListener('click', event => {
//   // event.stopPropagation();
//   console.log('buttonElem');
//   console.log(event.target);
// });


