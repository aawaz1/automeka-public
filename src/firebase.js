import firebase from 'firebase';
import { firebaseConfig } from './utils/constants';

// Initialize Firebase
firebase.initializeApp({ ...firebaseConfig });

export default firebase;