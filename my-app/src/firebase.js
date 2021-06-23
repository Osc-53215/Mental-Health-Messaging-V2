import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDzhwKC_WRm23KL9gY4wmU1otKuk6vc8C8",
    authDomain: "mentalhealthmessaging-app.firebaseapp.com",
    projectId: "mentalhealthmessaging-app",
    storageBucket: "mentalhealthmessaging-app.appspot.com",
    messagingSenderId: "853829078114",
    appId: "1:853829078114:web:b3f203ba7db0b0ca03d53b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db};