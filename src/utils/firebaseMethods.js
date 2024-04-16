import { updateFcmToken } from "../store/api";
import firebase from "../firebase";

export const setupNotificationToken = () => {
    if ('Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window) {
        const fcmToken = localStorage.getItem("fcmToken");
        if (!fcmToken) {

            const messaging = firebase.messaging();
            messaging
                .requestPermission()
                .then(() => {
                    console.log("Notification permission granted.");
                    return messaging.getToken();
                })
                .then(async (token) => {
                    localStorage.setItem("fcmToken", token)
                    updateFcmToken(token)
                })
                .catch((err) => {
                    console.log("Unable to get permission to notify.", err);
                });

        }
    }
}