import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAqvzP01b0WENN8OoEBZy52HcChvJ2kWvg",
  authDomain: "dahyeon-portfolio.firebaseapp.com",
  databaseURL: "https://dahyeon-portfolio-default-rtdb.firebaseio.com",
  projectId: "dahyeon-portfolio",
  storageBucket: "dahyeon-portfolio.firebasestorage.app",
  messagingSenderId: "935239734546",
  appId: "1:935239734546:web:c85d807b3ff405dcab8fcb",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
