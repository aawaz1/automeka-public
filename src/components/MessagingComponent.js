import { useEffect } from "react";
import firebase from "../firebase";
import { updateFcmToken } from "../store/api";

const MessagingComponent = () => {
  useEffect(() => {
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
          updateFcmToken(token)
        })
        .catch((err) => {
          console.log("Unable to get permission to notify.", err);
        });
    }
  }, []);

  return null;
};

export default MessagingComponent;
