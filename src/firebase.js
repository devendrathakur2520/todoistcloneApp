

// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: "AIzaSyByzZ4SuOkPWgk8GcMy4mUGpAZCXG3Mp6o",
//   authDomain: "todoist-clone-task.firebaseapp.com",
//   projectId: "todoist-clone-task",
//   storageBucket: "todoist-clone-task.appspot.com",
//   messagingSenderId: "1006787214430",
//   appId: "1:1006787214430:web:3cad700dd99ab7af8b88cf"
// };
// export {firebaseConfig as firebase}

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCI5hnChx3bNfZY9CfJCAlWIA0cAAPn2OI",
  authDomain: "todoist-app-122fc.firebaseapp.com",
  databaseURL: "https://todoist-app-122fc-default-rtdb.firebaseio.com",
  projectId: "todoist-app-122fc",
  storageBucket: "todoist-app-122fc.appspot.com",
  messagingSenderId: "708014072264",
  appId: "1:708014072264:web:bedb30c6cc39a423d620fd"
});

export {firebaseConfig as firebase}


