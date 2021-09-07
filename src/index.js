import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyDt8p8BLUEHv1SV9uZjiapd25t9UuX4RtM",
    authDomain: "real-time-chat-c8c46.firebaseapp.com",
    projectId: "real-time-chat-c8c46",
    storageBucket: "real-time-chat-c8c46.appspot.com",
    messagingSenderId: "16762187849",
    appId: "1:16762187849:web:29486687bf0424a4af8f98"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

