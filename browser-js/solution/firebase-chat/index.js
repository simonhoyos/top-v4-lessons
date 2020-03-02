// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNYaLnCGjTnUupZH8nT9iVzzN8iGEq3c8",
  authDomain: "messages-72701.firebaseapp.com",
  databaseURL: "https://messages-72701.firebaseio.com",
  projectId: "messages-72701",
  storageBucket: "messages-72701.appspot.com",
  messagingSenderId: "729105252644",
  appId: "1:729105252644:web:7948bc00a9b65411adb3b1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
const roomsCollection = database.collection('rooms');
const messagesCollection = database.collection('messages');

const rooms = document.querySelector('.rooms');
const messages = document.querySelector('.messages');

rooms.addEventListener('click', e => {
  e.preventDefault();

  const id = e.target.dataset.id;

  messages.innerHTML = '';
  // Id stored in messages. Working for room 1 and 2

  // messagesCollection.where('roomId', '==', id).get()
  //   .then(docs => {
  //     docs.forEach(doc => {
  //       const data = doc.data();
  //       console.log(data);
  //       const messageHtml = `
  //         <div class="message">
  //           <h2>${data.sender}</h2>
  //           <p>${data.message}</p>
  //         </div>
  //       `;

  //       messages.innerHTML += messageHtml;
  //     })
  //   })

  // Messages is stored in the room. Only working for room 3
  roomsCollection.doc(id).get()
    .then(doc => {
      const data = doc.data();

      const messagesHtml = data.messages.map(message => `
        <div class="message">
          <h2>${message.sender}</h2>
          <p>${message.message}</p>
        </div>
      `).join('');

      messages.innerHTML = messagesHtml;
    })

});

roomsCollection.get()
  .then(docs => {
    docs.forEach(doc => {
      const data = doc.data();
      const roomsHtml = `
        <div class="room">
          <a href="#" data-id="${doc.id}">${data.name}</a>
        </div>
      `;

      rooms.innerHTML += roomsHtml;
    })
  });


