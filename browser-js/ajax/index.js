// Asynchronous JavaScript and XML
const container = document.querySelector('.photos');

// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     const images = data.map(image => `<img src="${image.thumbnailUrl}" />`).join('');

//     container.innerHTML = images;
//   })
//   .catch(error => console.error(error));

// fetch(url, {
//   method: 'POST',
//   body: JSON.strindify({
//     username: "Simon",
//     password: "12345"
//   }),
//   headers: {}
// })
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch(url, {
//   method: 'PATCH',
//   body: JSON.strindify({
//     done: true
//   }),
//   headers: {}
// })
//   .then(response => response.json())
//   .then(data => console.log(data));

// CORS
// Cross Origin Resources Sharing
fetch('https://makeitreal.s3.amazonaws.com/chats/users.json')
  .then(res => res.json())
  .then(data => console.log(data));
