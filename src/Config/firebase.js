import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAXdG-E_ArzKg9sBoQdAI094gxfP9cpESE",
    authDomain: "food-app-react-13eeb.firebaseapp.com",
    databaseURL: "https://food-app-react-13eeb.firebaseio.com",
    projectId: "food-app-react-13eeb",
    storageBucket: "",
    messagingSenderId: "790545047941",
    appId: "1:790545047941:web:2206fa5b2af1dd4c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore;
  export default firebase;
  