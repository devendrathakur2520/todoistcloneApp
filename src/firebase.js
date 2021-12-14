

// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: "AIzaSyByzZ4SuOkPWgk8GcMy4mUGpAZCXG3Mp6o",
//   authDomain: "todoist-clone-task.firebaseapp.com",
//   projectId: "todoist-clone-task",
//   storageBucket: "todoist-clone-task.appspot.com",
//   messagingSenderId: "1006787214430",
//   appId: "1:1006787214430:web:3cad700dd99ab7af8b88cf"
// };

// var firebase = initializeApp(firebaseConfig);
// export { firebase}

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCHU27y5rsMZjBUBDCoPJ7ZxAmbT2JYd4w",
  authDomain: "todoist-app-416bd.firebaseapp.com",
  databaseURL: "https://todoist-app-416bd-default-rtdb.firebaseio.com",
  projectId: "todoist-app-416bd",
  storageBucket: "todoist-app-416bd.appspot.com",
  messagingSenderId: "796056810582",
  appId: "1:796056810582:web:dd095b2c693fb1f7e337f7",
  measurementId: "G-0GMRZLLYW6"
});

export {firebaseConfig as firebase}