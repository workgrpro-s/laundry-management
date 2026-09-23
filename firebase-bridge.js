import {
    get,
    set,
    remove,
    ref
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";
import { db } from "./firebase.js";


let firebaseMode = false;
let currentUID = null;
let currentBranchUID = "main";
let systemStarted = false;



// مفاتيح بيانات النظام
const DATA_KEYS = [

    "laundry_customers",
    "customers",
    "walletTransactions",
    "archiveSubscriptions",
    "revenues",
    "subscriptions",
    "invoices",
    "laundry_invoices",
    "products",
    "laundry_products",
    "settings",
    "laundry_settings",
    "archive",
    "laundry_archive",
    "laundry_archive_customers",
    "lastInvoiceNo"

];


function getCurrentBranch() {

    return (
        sessionStorage.getItem(
            "currentBranchUID"
        ) ||
        window.currentBranchUID ||
        "main"
    );

}




function getDataPath(key) {

    const branchUID =
        getCurrentBranch();

    return (
        `laundries/${currentUID}` +
        `/branches/${branchUID}/data/${key}`
    );

}




function getBranchDataPath() {

    const branchUID =
        getCurrentBranch();

    return (
        `laundries/${currentUID}` +
        `/branches/${branchUID}/data`
    );

}




function clearOldLocalData() {

    DATA_KEYS.forEach(key => {

        localStorage.removeItem(key);

    });

    console.log(
        "🧹 تم تنظيف بيانات الحساب السابق"
    );

}




async function loadLaundryData() {

    if (!currentUID) {

        throw new Error(
            "UID غير موجود"
        );

    }


    currentBranchUID =
        getCurrentBranch();


    const dataRef =
        ref(
            db,
            getBranchDataPath()
        );


    const snapshot =
        await get(dataRef);




    if (!snapshot.exists()) {

        console.log(
            "🆕 لا توجد بيانات Firebase لهذا الفرع"
        );

        return;

    }


    const data =
        snapshot.val();

    Object.keys(data).forEach(key => {

        try {

            localStorage.setItem(
                key,
                JSON.stringify(
                    data[key]
                )
            );

        } catch (error) {

            console.error(
                "❌ خطأ تحميل:",
                key,
                error
            );

        }

    });


    console.log(
        "📥 تم تحميل بيانات الفرع:",
        currentBranchUID
    );

}




async function saveKeyToFirebase(
    key,
    value
) {

    if (
        !firebaseMode ||
        !currentUID
    ) {

        return;

    }


    try {

        let finalValue;


        try {

            finalValue =
                JSON.parse(value);

        } catch {

            finalValue =
                value;

        }


        await set(
            ref(
                db,
                getDataPath(key)
            ),
            finalValue
        );


        console.log(
            "☁️ تم حفظ:",
            key
        );


    } catch (error) {

        console.error(
            "❌ Firebase save error:",
            key,
            error
        );

    }

}




window.saveAllToFirebase =
    async function () {

        if (
            !firebaseMode ||
            !currentUID
        ) {

            console.warn(
                "⚠️ Firebase غير جاهز للحفظ"
            );

            return;

        }


        try {

            const data = {};


            DATA_KEYS.forEach(key => {

                const value =
                    localStorage.getItem(
                        key
                    );


                if (
                    value !== null
                ) {

                    try {

                        data[key] =
                            JSON.parse(
                                value
                            );

                    } catch {

                        data[key] =
                            value;

                    }

                }

            });


            await set(
                ref(
                    db,
                    getBranchDataPath()
                ),
                data
            );


            console.log(
                "☁️ تم حفظ جميع بيانات النظام",
                {
                    uid: currentUID,
                    branch:
                        currentBranchUID
                }
            );


        } catch (error) {

            console.error(
                "❌ فشل حفظ بيانات Firebase:",
                error
            );

        }

    };


const originalSetItem =
    Storage.prototype.setItem;


Storage.prototype.setItem =
    function (
        key,
        value
    ) {


        originalSetItem.call(
            this,
            key,
            value
        );


        if (
            this !== localStorage
        ) {

            return;

        }

        if (
            !firebaseMode ||
            !currentUID
        ) {

            return;

        }

        if (
            !DATA_KEYS.includes(key)
        ) {

            return;

        }

        saveKeyToFirebase(
            key,
            value
        );

    };

const originalRemoveItem =
    Storage.prototype.removeItem;


Storage.prototype.removeItem =
    function (key) {

        originalRemoveItem.call(
            this,
            key
        );


        if (
            this !== localStorage
        ) {

            return;

        }

        if (
            !firebaseMode ||
            !currentUID
        ) {

            return;

        }

        if (
            !DATA_KEYS.includes(key)
        ) {

            return;

        }


        remove(
            ref(
                db,
                getDataPath(key)
            )
        ).catch(error => {

            console.error(
                "❌ Firebase remove:",
                key,
                error
            );

        });

    };




//// خاص في تشغيل السكربت
function startSystem() {

    if (systemStarted) {

        return;

    }


    systemStarted = true;


    const script =
        document.createElement(
            "script"
        );


    script.src =
        "script.js";


    script.onload = () => {

        console.log(
            "🚀 script.js بدأ"
        );



        if (
            typeof window.loadData ===
            "function"
        ) {

            try {

                window.loadData();

            } catch (error) {

                console.error(
                    "❌ loadData error:",
                    error
                );

            }

        }

    };


    script.onerror = () => {

        console.error(
            "❌ فشل تحميل script.js"
        );

    };


    document.body.appendChild(
        script
    );

}

window.addEventListener(
    "ownerVerified",
    async function (event) {

        try {

            const {
                uid,
                laundry
            } = event.detail;


            console.log(
                "🔐 Owner verified:",
                uid
            );

            currentUID =
                uid;

            currentBranchUID =
                getCurrentBranch();


            console.log(
                "🏢 الفرع الحالي:",
                currentBranchUID
            );
            

            clearOldLocalData();
            await loadLaundryData();




            firebaseMode =
                true;

            window.currentLaundryUID =
                uid;


            window.currentLaundry =
                laundry;


            window.currentBranchUID =
                currentBranchUID;


            startSystem();


        } catch (error) {

            console.error(
                "❌ Firebase Bridge Error:",
                error
            );

        }

    }
);



window.reloadBranchData =
    async function (
        branchUID
    ) {

        if (!currentUID) {

            console.error(
                "❌ UID غير موجود"
            );

            return;

        }


        currentBranchUID =
            branchUID;


        sessionStorage.setItem(
            "currentBranchUID",
            branchUID
        );

        clearOldLocalData();


        firebaseMode =
            false;


        await loadLaundryData();


        firebaseMode =
            true;


        if (
            typeof window.loadData ===
            "function"
        ) {

            window.loadData();

        }


        console.log(
            "🔄 تم تبديل الفرع:",
            branchUID
        );

    };