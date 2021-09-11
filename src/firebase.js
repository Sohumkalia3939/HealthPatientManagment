import * as firebase from "firebase";

var firebaseConfig = {
apiKey: "AIzaSyAfmsVKLwlFUR1q_1kIFqyWzZNRs_u1QxU",
  authDomain: "hospitialmanagmentsystem.firebaseapp.com",
  databaseURL: "https://hospitialmanagmentsystem-default-rtdb.firebaseio.com",
  projectId: "hospitialmanagmentsystem",
  storageBucket: "hospitialmanagmentsystem.appspot.com",
  messagingSenderId: "272829870163",
  appId: "1:272829870163:web:b30facc8f01a7c2c4856a6"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();