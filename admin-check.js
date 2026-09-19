import { getAuth, onAuthStateChanged }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getDatabase, ref, get }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

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

onAuthStateChanged(auth, async (user) => {
  
  if (!user) {
    window.location.href = "login.html";
    return;
  }
  
  try {
    
    const adminRef = ref(
      db,
      `admins/${user.uid}`
    );
    
    const snapshot = await get(adminRef);
    
    if (!snapshot.exists()) {
      
      alert("ليس لديك صلاحية دخول المدير");
      
      await auth.signOut();
      
      window.location.href = "login.html";
      
      return;
    }
    
    const adminData = snapshot.val();
    
    if (adminData.role !== "admin") {
      
      alert("ليس لديك صلاحية المدير");
      
      await auth.signOut();
      
      window.location.href = "login.html";
      
      return;
    }
    
    console.log("تم التحقق: المستخدم مدير");
    
  } catch (error) {
    
    console.error(error);
    
    alert("حدث خطأ أثناء التحقق من الصلاحيات");
    
  }
  
});