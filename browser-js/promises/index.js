const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'simon',
      lastname: 'hoyos'
    });
    // reject('la petición fue rechazada');
  }, 1000);
});

promise
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => console.log('siempre'));
