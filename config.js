import firebase from 'firebase';

// add SDK Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAwThYgdBqCEmkUN1zJwewC4NnsHo6Ph0c",
    authDomain: "class-test-cebca.firebaseapp.com",
    databaseURL: "https://class-test-cebca-default-rtdb.firebaseio.com",
    projectId: "class-test-cebca",
    storageBucket: "class-test-cebca.appspot.com",
    messagingSenderId: "934950283017",
    appId: "1:934950283017:web:9084f289c14bf44d9555d8"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();