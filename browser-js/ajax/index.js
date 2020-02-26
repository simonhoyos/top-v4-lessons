// Asynchronous JavaScript and XML
const container = document.querySelector('.photos');

fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const images = data.map(image => `<img src="${image.thumbnailUrl}" />`).join('');

    container.innerHTML = images;
  })
  .catch(error => console.error(error));

// fetch(url, {
//   method: 'POST',
//   body: {
//     "username": "Simon",
//     "password": "12345"
//   },
//   headers: {}
// })
//   .then(response => response.json())
//   .then(data => console.log(data));
