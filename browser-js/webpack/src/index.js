import './index.scss';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  console.dir(e.target.elements);

  fetch('https://api.themoviedb.org/3/movie/popular?api_key=', {
    method: 'POST',
    body:JSON.stringify({
      title: 'title',
    }),
    header: JSON.stringify({
      'Content-Type': 'application/json'
    })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log())
});
