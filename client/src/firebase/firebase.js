import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API}`,
  authDomain: `${process.env.REACT_APP_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE}`,
  messagingSenderId: `${process.env.REACT_APP_MSG_ID}`,
  appId: `${process.env.REACT_APP_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;