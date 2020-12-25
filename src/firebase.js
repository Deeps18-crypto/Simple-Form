import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD9SpD9uFripwMMOlT0eO2N5OQ6yZF68uQ",
    authDomain: "simple-form-17f62.firebaseapp.com",
    projectId: "simple-form-17f62",
    storageBucket: "simple-form-17f62.appspot.com",
    messagingSenderId: "163500995542",
    appId: "1:163500995542:web:2fe2aee54d044974aa6a77",
    measurementId: "G-3ZR8TYLNCN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  export { db };