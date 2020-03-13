const signup = document.querySelector('.form-signup');
const login = document.querySelector('.form-login');
const button = document.querySelector('.btn');

signup.addEventListener('submit', async e => {
  e.preventDefault();

  const { email, password } = e.target.elements;

  const data = await fetch('http://localhost:3000/users/signup', {
    method: 'POST',
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const { token } = await data.json();

  localStorage.setItem('token', token);
});

login.addEventListener('submit', async e => {
  e.preventDefault();

  const { email, password } = e.target.elements;

  const data = await fetch('http://localhost:3000/users/login', {
    method: 'POST',
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const { token } = await data.json();

  localStorage.setItem('token', token);
});

button.addEventListener('click', async () => {
  const token = localStorage.getItem('token');
  const res = await fetch('http://localhost:3000/private', {
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();

  console.log(data);
})
