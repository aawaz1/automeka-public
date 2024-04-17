importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


firebase.initializeApp({
    apiKey: 'AIzaSyDL6NHDQwKCggyxJ22gthNZbObtqSZZ2W4',
    appId: '1:767406422300:web:34a23d0fb0bfae529c22d9',
    messagingSenderId: '767406422300',
    projectId: 'automeka-mumbai',
    authDomain: 'automeka-mumbai.firebaseapp.com',
    storageBucket: 'automeka-mumbai.appspot.com',
    measurementId: 'G-QPRTGCZYDX',
});
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/auto-meka-logo@2x.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
