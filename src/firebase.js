import app from "firebase/app"
import "firebase/firestore"
import "firebase/auth"



var firebaseConfig = {
    apiKey: "AIzaSyA_-FrlVKZp0wgl_WfoXZ0j7NqcoUje-XE",
    authDomain: "crud-udemy-react-225cb.firebaseapp.com",
    databaseURL: "https://crud-udemy-react-225cb.firebaseio.com",
    projectId: "crud-udemy-react-225cb",
    storageBucket: "crud-udemy-react-225cb.appspot.com",
    messagingSenderId: "636000045944",
    appId: "1:636000045944:web:9e50f3faad9364c047568d"
  };

  app.initializeApp(firebaseConfig);


const db = app.firestore();

const auth = app.auth();

export {db,auth};