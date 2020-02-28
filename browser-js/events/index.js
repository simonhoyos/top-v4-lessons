const button = document.querySelector('.button');
const paragraph = document.querySelector('.paragraph');
const list = document.querySelector('ul');
console.log(button);

button.addEventListener('click', event => {
  console.log('clicked!!');

  // paragraph.classList.toggle('hide');
  paragraph.style.color = '#333';
  // console.log(paragraph.classList);
});

list.addEventListener('click', event => {
  console.log(event.target);
  if(event.target.name === 'done') {
    const listItem = event.target.parentElement;
    const text = listItem.querySelector('span');

    text.classList.add('checked');
  } else if(event.target.name === 'delete') {

  }
});
