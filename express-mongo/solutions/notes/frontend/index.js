const container = document.querySelector('.container');

fetch('http://localhost:3000/notes')
  .then(data => data.json())
  .then(notes => {
    const notesHtml = notes.map(note => `
      <div class="note">
        <h2>${note.title}</h2>
        <p>${note.body}</p>
      </div>
    `).join('');

    container.innerHTML = notesHtml;
  });

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const { title, body, public } = e.target.elements;
  console.dir(public);

  fetch('http://localhost:3000/notes', {
    method: 'POST',
    body: JSON.stringify({
      title: title.value,
      body: body.value,
      isPublic: public.checked
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(data => data.json())
    .then(note => {
      const noteHtml = `
        <div class="note">
          <h2>${note.title}</h2>
          <p>${note.body}</p>
        </div>
      `;

      container.innerHTML += noteHtml;
      form.reset();
    })
});
