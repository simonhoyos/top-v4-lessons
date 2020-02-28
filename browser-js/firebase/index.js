// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
const usersCollection = database.collection('users');

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

const commentsCollection = database.collection('comments');

commentsCollection.add({
  title: 'comment',
  body: 'Un comentario muy largoooooooooooo!'
})
