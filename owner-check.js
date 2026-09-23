import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
  getDatabase,
  ref,
  get
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

import { app } from "./firebase.js";

const auth = getAuth(app);
const db = getDatabase(app);


onAuthStateChanged(auth, async (user) => {

  
  if (!user) {
    
    window.location.href = "login.html";
    
    return;
  }
  
  
  try {
    
    console.log(
      "👤 المستخدم:",
      user.uid
    );
  
    
    const laundryRef =
      ref(
        db,
        `laundries/${user.uid}`
      );
    
    
    const snapshot =
      await get(laundryRef);
    
    

    
    if (!snapshot.exists()) {
      
      alert(
        "❌ لا توجد مغسلة مرتبطة بهذا الحساب"
      );
      
      await signOut(auth);
      
      window.location.href =
        "login.html";
      
      return;
    }
    
    
    const laundry =
      snapshot.val();
    
    
    console.log(
      "🏪 بيانات المغسلة:",
      laundry
    );
    
    if (laundry.role !== "owner") {
      
      alert(
        "❌ هذا الحساب ليس حساب صاحب مغسلة"
      );
      
      await signOut(auth);
      
      window.location.href =
        "login.html";
      
      return;
    }
    
    if (laundry.active !== true) {
      
      alert(
        "⛔ حساب المغسلة موقوف من الإدارة"
      );
      
      await signOut(auth);
      
      window.location.href =
        "login.html";
      
      return;
    }
    
    
    window.currentLaundryUID =
      user.uid;
    
    window.currentLaundry =
      laundry;
    
    
    console.log(
      "✅ الحساب صحيح"
    );
    
    window.dispatchEvent(
      new CustomEvent(
        "ownerVerified",
        {
          detail: {
            uid: user.uid,
            laundry: laundry
          }
        }
      )
    );
    
    
  } catch (error) {
    
    console.error(
      "❌ Owner check error:",
      error
    );
    
    
    alert(
      "❌ حدث خطأ أثناء التحقق من حساب المغسلة"
    );
    
    
    await signOut(auth);
    
    window.location.href =
      "login.html";
  }
  
});

document.addEventListener("click", async function(event) {
  
  const logoutBtn =
    event.target.closest("#logoutSystemBtn");
  
  if (!logoutBtn) return;
  
  try {
    
    sessionStorage.clear();
    
    await signOut(auth);
    
    window.location.href = "login.html";
    
  } catch (error) {
    
    console.error("Logout error:", error);
    
    alert("حدث خطأ أثناء تسجيل الخروج");
  }
  
});