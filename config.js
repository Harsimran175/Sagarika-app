import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBX-bujuxYGiYfWq_eQO2SfN-5yHwUEYqg",
  authDomain: "yoga-app-1e968.firebaseapp.com",
  projectId: "yoga-app-1e968",
  storageBucket: "yoga-app-1e968.appspot.com",
  messagingSenderId: "733639427077",
  appId: "1:733639427077:web:27af5d4a6d9c620360c86c"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();