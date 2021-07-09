import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyA7_EcAoQAS5k3hOuw2SihrGaW_Du-I8IU",
  authDomain: "blue-ocean---salty-startup.firebaseapp.com",
  projectId: "blue-ocean---salty-startup",
  storageBucket: "blue-ocean---salty-startup.appspot.com",
  messagingSenderId: "1087158255441",
  appId: "1:1087158255441:web:ce4a8f8bdd1d6148b49d70",
  measurementId: "G-5KZ0174Z6V"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

const fire = firebase;
export default fire;