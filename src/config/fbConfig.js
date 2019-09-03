import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyACq9iKSvTvs84Bjm33Mp3f4TwhJbZiFUk",
  authDomain: "my-community-97be6.firebaseapp.com",
  databaseURL: "https://my-community-97be6.firebaseio.com",
  projectId: "my-community-97be6",
  storageBucket: "",
  messagingSenderId: "572266976319",
  appId: "1:572266976319:web:875d76bfbe998bd5"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  //  timestampsInSnapshots: true
  });

export default firebase
