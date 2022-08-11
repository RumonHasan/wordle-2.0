import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB-3Lr88Vqguxr-xCDs9GeqILUq6mzYCwg",
    authDomain: "wordleclone-a572c.firebaseapp.com",
    projectId: "wordleclone-a572c",
    storageBucket: "wordleclone-a572c.appspot.com",
    messagingSenderId: "729352444439",
    appId: "1:729352444439:web:4d1ec6c60259d9d4d81a52"
  };

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export {database};

