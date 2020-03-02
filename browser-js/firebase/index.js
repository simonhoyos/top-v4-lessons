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

// Auth
const provider = new firebase.auth.GoogleAuthProvider();

const button = document.querySelector('.signin');

button.addEventListener('click', () => {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});

const logout = document.querySelector('.logout');

logout.addEventListener('click', () => {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
});

const database = firebase.firestore();
const usersCollection = database.collection('users');
const postsCollection = database.collection('posts');

// 1:1, 1:N, N:N
const posts = document.querySelector('.posts');

// CRUD
// Create Read Update Delete

const getUsers = document.querySelector('.get-users');

getUsers.addEventListener('click', () => {
  usersCollection.get()
  .then(docs => {
    docs.forEach(doc => {
      // console.log(doc.id, doc.data());
      const data = doc.data();
      // render data

      console.log(data)
    });
  })
  .catch(error => console.log(error));
});

// usersCollection.doc('NluTxJhUFxBlXclinVcC').get()
  // .then(doc => console.log(doc.data()));

// usersCollection.where('name', '==', 'Simon').get()
//   .then(docs => {
//     docs.forEach(doc => console.log('name', doc.data()));
//   })

// usersCollection.where('age', '>=', 28).get()
//   .then(docs => {
//     docs.forEach(doc => console.log('age', doc.data()));
//   })

// usersCollection.where('working', '==', true).get()
//   .then(docs => {
//     docs.forEach(doc => console.log('working', doc.data()));
//   })

// form submit event
const data = {
  name: 'Simonnnnn',
  age: 27,
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
usersCollection.doc('ykR0MStE0oue7VQ6rGlN').get()
  .then(doc => {
    const userData = doc.data();

    console.log(userData);
  })
