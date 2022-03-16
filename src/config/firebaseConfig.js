import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB83rScDOC19T_BLxizjQYFm24TzE1Dl6s',
  authDomain: 'celdagram.firebaseapp.com',
  projectId: 'celdagram',
  storageBucket: 'celdagram.appspot.com',
  messagingSenderId: '509039589581',
  appId: '1:509039589581:web:88be0cd0f79608fa359184',
  measurementId: 'G-K7GX0M6BW6',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
