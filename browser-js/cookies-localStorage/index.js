const input = document.querySelector('.form__input');
const form = document.querySelector('.form');
const button = document.querySelector('.form__submit');

const container = document.querySelector('.names');

let currentNames;
if(localStorage.getItem('names')) {
  currentNames = localStorage.getItem('names').split(',');
} else {
  currentNames = [];
}

const names = currentNames.map(name => `<p>${name}</p>`).join('');
container.innerHTML = names;

// localStorage.setItem('name', 'simon');
// console.log(localStorage.getItem('name'));
// localStorage.setItem('names', '');
// localStorage.setItem('names', 'simon');
// localStorage.setItem('names', 'simon,pedro');
// localStorage.removeItem('name');
// localStorage.clear();
// sessionStorage.setItem();
// sessionStorage.getItem();
// sessionStorage.removeItem();
// sessionStorage.clear();
console.log(document.cookie);

const cookie = `name=simon;max-age=${60*60*24*365*15}`;

document.cookie = cookie;

input.addEventListener('change', event => {
  currentNames.push(event.target.value);
  localStorage.setItem('names', currentNames);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
  const names = currentNames.map(name => `<p>${name}</p>`).join('');
  container.innerHTML = names;
});

// button.addEventListener('click', () => {
//   container.innerHTML += currentName;
// });
