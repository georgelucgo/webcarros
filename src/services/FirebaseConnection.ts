import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAvRcMEVW49wZp2mTLP-lz007s7HofoIdI",
  authDomain: "webcarros-ffedd.firebaseapp.com",
  projectId: "webcarros-ffedd",
  storageBucket: "webcarros-ffedd.appspot.com",
  messagingSenderId: "123662082475",
  appId: "1:123662082475:web:00438d0e7e9eb53795f2ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export {db, auth, storage};


