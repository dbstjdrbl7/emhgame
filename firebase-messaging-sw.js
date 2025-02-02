// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBBqElCYFsYZ4wqZz-O269B53MtnCoC-jw",
    authDomain: "emhgame-bbd5c.firebaseapp.com",
    databaseURL: "https://emhgame-bbd5c-default-rtdb.firebaseio.com",
    projectId: "emhgame-bbd5c",
    storageBucket: "emhgame-bbd5c.appspot.com",
    messagingSenderId: "640920535415",
    appId: "1:640920535415:web:dfac8b967f803d0e4fe172"

};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
