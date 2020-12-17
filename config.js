import  firebase from 'firebase';
require('@firebase/firestore')
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAX9sS17DTVFbOEVSc6Cx1fgNFUB55NjlM",
  authDomain: "booksanta-63c84.firebaseapp.com",
  databaseURL: "https://booksanta-63c84.firebaseio.com",
  projectId: "booksanta-63c84",
  storageBucket: "booksanta-63c84.appspot.com",
  messagingSenderId: "671576134095",
  appId: "1:671576134095:web:bbc1c16a4c982158aec2ba",
  measurementId: "G-NCV4NJ0611"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
