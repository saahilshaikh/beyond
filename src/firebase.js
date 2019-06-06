import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCB5R24Q-UTIkqaitc5KxGzZo57muiKTo8",
  authDomain: "beyond-edd3a.firebaseapp.com",
  databaseURL: "https://beyond-edd3a.firebaseio.com",
  projectId: "beyond-edd3a",
  storageBucket: "beyond-edd3a.appspot.com",
  messagingSenderId: "1006874709129"
};
firebase.initializeApp(config);

export default firebase;
