import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCR1TQvsl3KznnnzfQtVmrNy2_K0WBbSoY",
  authDomain: "laundry-management-ef4f9.firebaseapp.com",
  databaseURL: "https://laundry-management-ef4f9-default-rtdb.firebaseio.com",
  projectId: "laundry-management-ef4f9",
  storageBucket: "laundry-management-ef4f9.firebasestorage.app",
  messagingSenderId: "719802435733",
  appId: "1:719802435733:web:805c07439239484321f39c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase(app);

let currentUser = null;
let currentLaundry = null;
export { app, auth, db };