import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCI-oJocmaIpcvEPQnykqkGnErpWUu_9mE",
    authDomain: "patitas-9da3d.firebaseapp.com",
    databaseURL: "https://patitas-9da3d.firebaseio.com",
    projectId: "patitas-9da3d",
    storageBucket: "patitas-9da3d.appspot.com",
    messagingSenderId: "680959822544",
    appId: "1:680959822544:web:2994e4840bd767a022ecd5",
    measurementId: "G-0HZV36LXXJ"
};

firebase.initializeApp(config);
export const { auth } = firebase;
export const provider = new firebase.auth.FacebookAuthProvider();