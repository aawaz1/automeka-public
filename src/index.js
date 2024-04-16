import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import firebase from './firebase';
const FirebaseContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={firebase}>
      <Provider store={store}>
        <App />
      </Provider>
    </FirebaseContext.Provider>
  </React.StrictMode >
);

if ('Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/firebase-messaging-sw.js').then((registration) => {

    }).catch((error) => {
      console.error('ServiceWorker registration failed:', error);
    });
  });
}

reportWebVitals();
