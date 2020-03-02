// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXQXvwcJr2S1ZqNcd-VxQ17g-eW61p0kM",
  authDomain: "dummy-fcd18.firebaseapp.com",
  databaseURL: "https://dummy-fcd18.firebaseio.com",
  projectId: "dummy-fcd18",
  storageBucket: "dummy-fcd18.appspot.com",
  messagingSenderId: "938319458028",
  appId: "1:938319458028:web:0fcb507d3aaf16c9e7bfc9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
const usersCollection = database.collection('users');
const postsCollection = database.collection('posts');

// 1:1, 1:N, N:N
const posts = document.querySelector('.posts');

// CRUD
// Create Read Update Delete

usersCollection.get()
  .then(docs => {
    docs.forEach(doc => {
      // console.log(doc.id, doc.data());
      const data = doc.data();
      // render data
    });
  });

usersCollection.doc('NluTxJhUFxBlXclinVcC').get()
  // .then(doc => console.log(doc.data()));

usersCollection.where('name', '==', 'Simon').get()
  .then(docs => {
    docs.forEach(doc => console.log('name', doc.data()));
  })

usersCollection.where('age', '>=', 28).get()
  .then(docs => {
    docs.forEach(doc => console.log('age', doc.data()));
  })

usersCollection.where('working', '==', true).get()
  .then(docs => {
    docs.forEach(doc => console.log('working', doc.data()));
  })

// form submit event
const data = {
  name: 'Pedro',
  age: 45,
  working: false
};

// usersCollection.add(data)
//   .then(() => console.log('Todo OK!'))
//   .catch(() => console.log('Algo salió mal'));

// usersCollection.doc('K5t6ooxrhzKYrHQsapTc').delete()
//   .then(() => console.log('Todo OK!'))
//   .catch(() => console.log('Algo salió mal'));

// usersCollection.doc('NluTxJhUFxBlXclinVcC').update({
//   age: 46
// })
//   .then(() => console.log('Todo OK!'))
//   .catch(() => console.log('Algo salió mal'));

// const commentsCollection = database.collection('comments');

// commentsCollection.add({
//   title: 'comment',
//   body: 'Un comentario muy largoooooooooooo!'
// })

// 1:1
// postsCollection.get()
//   .then(docs => {
//     docs.forEach(doc => {
//       const postData = doc.data();

//       console.log(postData);
//       usersCollection.doc(postData.author).get()
//         .then(doc => {
//           const userData = doc.data();
//           const postHtml = `
//             <div class="post">
//               <h2>${postData.title}</h2>
//               <p>${postData.body}</p>
//               <span>By: ${userData.name}</span>
//             </div>
//           `;

//           posts.innerHTML += postHtml;
//         });
//     });
//   })

// 1:N
usersCollection.doc('YfqUHkRwrQvK3h8vNXuF').get()
  .then(doc => {
    const userData = doc.data();

    console.log(userData);
  })
