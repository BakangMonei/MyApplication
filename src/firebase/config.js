import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDpgcQ3g2A3CMN3cVnXYSkjQ-r7q1S1y04",
  authDomain: "myapplication-ed623.firebaseapp.com",
  databaseURL: "https://myapplication-ed623-default-rtdb.firebaseio.com",
  projectId: "myapplication-ed623",
  storageBucket: "myapplication-ed623.appspot.com",
  messagingSenderId: "768981447411",
  appId: "1:768981447411:web:031e4a2510f3338495bd86",
  measurementId: "G-FK2RC4HJL6"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };