// https://api.themoviedb.org/3/movie/550api_key=187fc89f5558266052fbb8b76a0274f0
const baseUrl = "https://api.themoviedb.org/3/movie";
const apiKey = ""

const topRated = document.querySelector(".aside__toprated");
const popular = document.querySelector(".aside__popular");
const nowplaying = document.querySelector(".aside__nowplaying");
const info = document.querySelector(".movies");
const pagination = document.querySelector(".pagination");

const getMovieHtml = movie => `<p>${movie.title}</p>`;
const renderMovies = data => {
  console.log(data);
  let titles = data.results.map(getMovieHtml).join("");
  info.innerHTML = titles;
}
const fetchMovies = (category, page = 1) => {
  fetch(
    `${baseUrl}/${category}?api_key=${apiKey}&language=en-US&page=${page}`
  )
    .then(response => response.json())
    .then(renderMovies);
}

let currentMovies = "popular";

topRated.addEventListener("click", e => {
  currentMovies = "top_rated";
  fetchMovies(currentMovies);
});

popular.addEventListener("click", e => {
  currentMovies = "popular";
  fetchMovies(currentMovies);
});

nowplaying.addEventListener("click", e => {
  currentMovies = "now_playing";
  fetchMovies(currentMovies);
});

pagination.addEventListener("click", e => {
  console.dir(event.target.dataset);
  const { page } = event.target.dataset;
  fetchMovies(currentMovies, page);
});
