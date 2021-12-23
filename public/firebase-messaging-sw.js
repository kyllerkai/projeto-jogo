// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');

const app = firebase.initializeApp({
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
});

const messaging = firebase.messaging();

console.log(messaging)
