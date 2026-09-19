// ==================== DATA MANAGEMENT ====================
let products = [


    {
        id: 1,
        name: 'ثوب',
        category: 'غسيل',
        price: 5,
        qty: 100,
        total: 600,
        image: '/images/thobe.png'
    },

    {
        id: 2,
        name: 'شماغ',
        category: 'غسيل',
        price: 3,
        qty: 100,
        total: 300,
        image: '/images/shemagh.png'
    },

    {
        id: 3,
        name: 'غترة',
        category: 'غسيل',
        price: 2,
        qty: 100,
        total: 200,
        image: '/images/ghutra.png'
    },

    {
        id: 4,
        name: 'بنطلون',
        category: 'غسيل',
        price: 4,
        qty: 100,
        total: 400,
        image: '/images/pants.png'
    },

    {
        id: 5,
        name: 'قميص',
        category: 'غسيل',
        price: 4,
        qty: 100,
        total: 400,
        image: '/images/shirt.png'
    },

    {
        id: 6,
        name: 'جاكيت',
        category: 'غسيل',
        price: 10,
        qty: 100,
        total: 1000,
        image: '/images/jacket.png'
    },

    {
        id: 7,
        name: 'فستان',
        category: 'غسيل',
        price: 15,
        qty: 100,
        total: 1500,
        image: '/images/dress.png'
    },

    {
        id: 8,
        name: 'بطانية',
        category: 'غسيل',
        price: 20,
        qty: 100,
        total: 2000,
        image: '/images/blanket.png'
    },

    {
        id: 9,
        name: 'لحاف',
        category: 'غسيل',
        price: 25,
        qty: 100,
        total: 2500,
        image: '/images/comforter.png'
    },

    {
        id: 10,
        name: 'مخدة',
        category: 'غسيل',
        price: 8,
        qty: 100,
        total: 800,
        image: '/images/pillow.png'
    },

    {
        id: 11,
        name: 'سجادة',
        category: 'غسيل',
        price: 35,
        qty: 100,
        total: 3500,
        image: '/images/carpet.png'
    },

    {
        id: 12,
        name: 'عباية',
        category: 'غسيل',
        price: 12,
        qty: 100,
        total: 1200,
        image: '/images/abaya.png'
    },

    {
        id: 13,
        name: 'ملابس أطفال',
        category: 'غسيل',
        price: 3,
        qty: 100,
        total: 300,
        image: '/images/kids-clothes.png'
    },

    {
        id: 14,
        name: 'مفارش سرير',
        category: 'غسيل',
        price: 18,
        qty: 100,
        total: 1800,
        image: '/images/bedsheet.png'
    },

    {
        id: 15,
        name: 'ستارة',
        category: 'غسيل',
        price: 30,
        qty: 100,
        total: 3000,
        image: '/images/curtain.png'
    },

    {
        id: 16,
        name: 'فروة شتوية',
        category: 'غسيل',
        price: 20,
        qty: 100,
        total: 2000,
        image: '/images/farwa.png'
    },

    {
        id: 17,
        name: 'بشت',
        category: 'غسيل',
        price: 25,
        qty: 100,
        total: 2500,
        image: '/images/bisht.png'
    },

    {
        id: 18,
        name: 'بدلة رجالية',
        category: 'غسيل',
        price: 18,
        qty: 100,
        total: 1800,
        image: '/images/suit.png'
    },

    {
        id: 19,
        name: 'ملابس رياضية',
        category: 'غسيل',
        price: 5,
        qty: 100,
        total: 500,
        image: '/images/sportswear.png'
    },

    {
        id: 20,
        name: 'ملابس داخلية',
        category: 'غسيل',
        price: 2,
        qty: 100,
        total: 200,
        image: '/images/underwear.png'
    },

    {
        id: 21,
        name: 'جوارب',
        category: 'غسيل',
        price: 1,
        qty: 100,
        total: 100,
        image: '/images/socks.png'
    },

    {
        id: 22,
        name: 'قبعة',
        category: 'غسيل',
        price: 4,
        qty: 100,
        total: 400,
        image: '/images/cap.png'
    },

    {
        id: 23,
        name: 'حقيبة قماشية',
        category: 'غسيل',
        price: 10,
        qty: 100,
        total: 1000,
        image: '/images/bag.png'
    },

    {
        id: 24,
        name: 'مفرش طاولة',
        category: 'غسيل',
        price: 12,
        qty: 100,
        total: 1200,
        image: '/images/tablecloth.png'
    },

    {
        id: 25,
        name: 'مناشف',
        category: 'غسيل',
        price: 5,
        qty: 100,
        total: 500,
        image: '/images/towel.png'
    },

    {
        id: 26,
        name: 'روب حمام',
        category: 'غسيل',
        price: 10,
        qty: 100,
        total: 1000,
        image: '/images/robe.png'
    },

    {
        id: 27,
        name: 'شرشف',
        category: 'غسيل',
        price: 8,
        qty: 100,
        total: 800,
        image: '/images/sheet.png'
    },

    {
        id: 28,
        name: 'كفر كنبة',
        category: 'غسيل',
        price: 25,
        qty: 100,
        total: 2500,
        image: '/images/sofa-cover.png'
    },

    {
        id: 29,
        name: 'كفر سيارة',
        category: 'غسيل',
        price: 20,
        qty: 100,
        total: 2000,
        image: '/images/car-cover.png'
    },

    {
        id: 30,
        name: 'مرتبة صغيرة',
        category: 'غسيل',
        price: 40,
        qty: 100,
        total: 4000,
        image: '/images/mattress.png'
    },

    {
        id: 31,
        name: 'فنيلة داخلية',
        category: 'غسيل',
        price: 2,
        qty: 100,
        total: 200,
        image: '/images/undershirt.png'
    },

    {
        id: 32,
        name: 'شورت',
        category: 'غسيل',
        price: 3,
        qty: 100,
        total: 300,
        image: '/images/shorts.png'
    },

    {
        id: 33,
        name: 'تنورة',
        category: 'غسيل',
        price: 8,
        qty: 100,
        total: 800,
        image: '/images/skirt.png'
    },

    {
        id: 34,
        name: 'بلوزة',
        category: 'غسيل',
        price: 6,
        qty: 100,
        total: 600,
        image: '/images/blouse.png'
    },

    {
        id: 35,
        name: 'طرحة',
        category: 'غسيل',
        price: 3,
        qty: 100,
        total: 300,
        image: '/images/scarf.png'
    },

    {
        id: 36,
        name: 'نقاب',
        category: 'غسيل',
        price: 4,
        qty: 100,
        total: 400,
        image: '/images/niqab.png'
    },

    {
        id: 37,
        name: 'شال',
        category: 'غسيل',
        price: 5,
        qty: 100,
        total: 500,
        image: '/images/shawl.png'
    },

    {
        id: 38,
        name: 'فستان سهرة',
        category: 'غسيل',
        price: 25,
        qty: 100,
        total: 2500,
        image: '/images/evening-dress.png'
    },

    {
        id: 39,
        name: 'فستان زفاف',
        category: 'غسيل',
        price: 80,
        qty: 100,
        total: 8000,
        image: '/images/wedding-dress.png'
    },

    {
        id: 40,
        name: 'بدلة أطفال',
        category: 'غسيل',
        price: 10,
        qty: 100,
        total: 1000,
        image: '/images/kids-suit.png'
    },

    {
        id: 41,
        name: 'كيس مخدة',
        category: 'غسيل',
        price: 3,
        qty: 100,
        total: 300,
        image: '/images/pillowcase.png'
    },

    {
        id: 42,
        name: 'كفر مرتبة',
        category: 'غسيل',
        price: 15,
        qty: 100,
        total: 1500,
        image: '/images/mattress-cover.png'
    },

    {
        id: 43,
        name: 'بطانية فرو',
        category: 'غسيل',
        price: 30,
        qty: 100,
        total: 3000,
        image: '/images/fur-blanket.png'
    },

    {
        id: 47,
        name: 'ربطة عنق',
        category: 'غسيل',
        price: 5,
        qty: 100,
        total: 500,
        image: '/images/tie.png'
    },

    {
        id: 48,
        name: 'قفازات',
        category: 'غسيل',
        price: 4,
        qty: 100,
        total: 400,
        image: '/images/gloves.png'
    },

    {
        id: 49,
        name: 'سترة',
        category: 'غسيل',
        price: 8,
        qty: 100,
        total: 800,
        image: '/images/vest.png'
    },

    {
        id: 50,
        name: 'حذاء رياضي',
        category: 'غسيل',
        price: 20,
        qty: 100,
        total: 2000,
        image: '/images/sneakers.png'
    },


    {
        id: 51,
        name: 'غسيل جاف',
        category: 'خدمات',
        price: 15,
        qty: 100,
        total: 1500,
        image: ''
    },

    {
        id: 52,
        name: 'كي فقط',
        category: 'خدمات',
        price: 2,
        qty: 100,
        total: 200,
        image: ''
    },

    {
        id: 53,
        name: 'تنظيف بقع خاصة',
        category: 'خدمات',
        price: 10,
        qty: 100,
        total: 1000,
        image: ''
    },

    {
        id: 54,
        name: 'تنظيف كنب',
        category: 'مفروشات',
        price: 120,
        qty: 100,
        total: 12000,
        image: ''
    },

    {
        id: 55,
        name: 'تنظيف مرتبة',
        category: 'مفروشات',
        price: 80,
        qty: 100,
        total: 8000,
        image: ''
    },

    {
        id: 56,
        name: 'تنظيف ستائر',
        category: 'مفروشات',
        price: 40,
        qty: 100,
        total: 4000,
        image: ''
    },

    {
        id: 57,
        name: 'تنظيف حذاء',
        category: 'خدمات',
        price: 15,
        qty: 100,
        total: 1500,
        image: ''
    },

    {
        id: 58,
        name: 'تنظيف شنطة',
        category: 'خدمات',
        price: 20,
        qty: 100,
        total: 2000,
        image: ''
    },

    {
        id: 59,
        name: 'تنظيف فرو',
        category: 'خدمات',
        price: 30,
        qty: 100,
        total: 3000,
        image: ''
    },

    {
        id: 60,
        name: 'تنظيف بشت',
        category: 'خدمات',
        price: 25,
        qty: 100,
        total: 2500,
        image: ''
    },

    {
        id: 61,
        name: 'تلميع أحذية',
        category: 'خدمات',
        price: 5,
        qty: 100,
        total: 500,
        image: ''
    },

    {
        id: 62,
        name: 'تعطير ملابس',
        category: 'خدمات',
        price: 3,
        qty: 100,
        total: 300,
        image: ''
    },

    {
        id: 63,
        name: 'تغليف ملابس',
        category: 'خدمات',
        price: 5,
        qty: 100,
        total: 500,
        image: ''
    },

    {
        id: 64,
        name: 'إزالة وبر الملابس',
        category: 'خدمات',
        price: 5,
        qty: 100,
        total: 500,
        image: ''
    },

    {
        id: 65,
        name: 'تنظيف بطانية كهربائية',
        category: 'مفروشات',
        price: 35,
        qty: 100,
        total: 3500,
        image: ''
    },

    {
        id: 66,
        name: 'جاكيت جلد',
        category: 'خدمات',
        price: 35,
        qty: 100,
        total: 3500,
        image: ''
    },

    {
        id: 67,
        name: 'معطف شتوي',
        category: 'خدمات',
        price: 25,
        qty: 100,
        total: 2500,
        image: ''
    },

    {
        id: 68,
        name: 'قبعة',
        category: 'خدمات',
        price: 5,
        qty: 100,
        total: 500,
        image: ''
    },

    {
        id: 71,
        name: 'زي رسمي',
        category: 'خدمات',
        price: 20,
        qty: 100,
        total: 2000,
        image: ''
    },

    {
        id: 72,
        name: 'بدلة عسكرية',
        category: 'خدمات',
        price: 25,
        qty: 100,
        total: 2500,
        image: ''
    },

    {
        id: 73,
        name: 'ملابس أطفال خاصة',
        category: 'خدمات',
        price: 8,
        qty: 100,
        total: 800,
        image: ''
    },

    {
        id: 74,
        name: 'ملابس رياضية خاصة',
        category: 'خدمات',
        price: 10,
        qty: 100,
        total: 1000,
        image: ''
    },

    {
        id: 75,
        name: 'فستان سهرة فاخر',
        category: 'خدمات',
        price: 50,
        qty: 100,
        total: 5000,
        image: ''
    },

    {
        id: 76,
        name: 'فستان زفاف',
        category: 'خدمات',
        price: 100,
        qty: 100,
        total: 10000,
        image: ''
    },

    {
        id: 77,
        name: 'ستارة رول',
        category: 'مفروشات',
        price: 30,
        qty: 100,
        total: 3000,
        image: ''
    },

    {
        id: 78,
        name: 'مفرش طاولة فاخر',
        category: 'مفروشات',
        price: 15,
        qty: 100,
        total: 1500,
        image: ''
    },

    {
        id: 79,
        name: 'كرسي قماش',
        category: 'مفروشات',
        price: 25,
        qty: 100,
        total: 2500,
        image: ''
    },

    {
        id: 80,
        name: 'كنب زاوية',
        category: 'مفروشات',
        price: 180,
        qty: 100,
        total: 18000,
        image: ''
    },

    {
        id: 81,
        name: 'موكيت صغير',
        category: 'مفروشات',
        price: 40,
        qty: 100,
        total: 4000,
        image: ''
    },

    {
        id: 82,
        name: 'موكيت كبير',
        category: 'مفروشات',
        price: 80,
        qty: 100,
        total: 8000,
        image: ''
    },

    {
        id: 83,
        name: 'ستارة مخمل',
        category: 'مفروشات',
        price: 60,
        qty: 100,
        total: 6000,
        image: ''
    },


    {
        id: 84,
        name: 'دمى أطفال',
        category: 'خدمات',
        price: 10,
        qty: 100,
        total: 1000,
        image: ''
    },

    {
        id: 85,
        name: 'ألعاب قماش',
        category: 'خدمات',
        price: 15,
        qty: 100,
        total: 1500,
        image: ''
    },

    {
        id: 86,
        name: 'وسادة ديكور',
        category: 'مفروشات',
        price: 10,
        qty: 100,
        total: 1000,
        image: ''
    },

    {
        id: 87,
        name: 'غطاء كنبة',
        category: 'مفروشات',
        price: 30,
        qty: 100,
        total: 3000,
        image: ''
    },

    {
        id: 88,
        name: 'غطاء سيارة',
        category: 'مفروشات',
        price: 40,
        qty: 100,
        total: 4000,
        image: ''
    }

];
products = products.map(product => ({
    ...product,
    image: product.image || ''
}));





//// متغيرات 
let customers = [];
let cart = [];
let selectedProduct = null;
let deliveryFee = 0;
let deliveryType = 'استلام';
let archive = [];
let walletTransactions = [];
let archiveSubscriptions = [];
let invoiceScanner = null;



function openInvoiceScanner() {


    window.currentPaymentInvoice = null;
    window.currentPaymentRemaining = null;

    if (typeof Html5Qrcode === "undefined") {
        alert("ماسح QR غير محمل، أعد تحديث الصفحة");
        return;
    }

    const modal =
        document.getElementById("invoiceScannerModal");

    if (!modal) {
        alert("نافذة الماسح غير موجودة");
        return;
    }

    modal.style.display = "flex";

    invoiceScanner =
        new Html5Qrcode("reader");

    invoiceScanner.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: 220
        },

        async decodedText => {

            console.log(
                "📷 تم مسح الباركود:",
                decodedText
            );


            await closeInvoiceScanner();
            handleInvoiceScan(
                String(decodedText).trim()
            );
        }

    ).catch(error => {

        console.error(
            "❌ خطأ تشغيل الماسح:",
            error
        );

        closeInvoiceScanner();

        alert("تعذر تشغيل الكاميرا");

    });
}



async function closeInvoiceScanner() {

    const modal =
        document.getElementById(
            "invoiceScannerModal"
        );

    if (!invoiceScanner) {

        if (modal) {
            modal.style.display = "none";
        }

        return;
    }

    try {

        const state =
            invoiceScanner.getState();

        if (
            state ===
                Html5QrcodeScannerState.SCANNING ||

            state ===
                Html5QrcodeScannerState.PAUSED
        ) {

            await invoiceScanner.stop();

        }

        await invoiceScanner.clear();

    } catch (err) {

        console.error(
            "❌ خطأ إغلاق الماسح:",
            err
        );

    }

    invoiceScanner = null;

    const reader =
        document.getElementById("reader");

    if (reader) {
        reader.innerHTML = "";
    }

    if (modal) {
        modal.style.display = "none";
    }
}



let invoices = [];
let settings = {
    storeName: '',   
    storePhone: '',
    storeAddress: '',
    vatNumber: '',
    taxRate: 15,
    currency: 'ر.س',
    pointsEnabled: true,
    pointsEarnRate: 20,
    pointsRedeemRate: 10,
    pointsDiscountValue: 10,
    subscriptionPlans: [
    {
        id: 1,
        name: "شهري",
        price: 100,
        balance: 170,
        days: 30
    }
],

    
    

    ironingFee: 2,
    fullServiceFee: 4,
    urgentMultiplier: 1.3
    
    
};



let editingProductId = null;
let editingCustomerId = null;
let currentLanguage = 'ar';
let lastInvoice = null;
let activeCustomer = null;
let customerMode = 'existing';
let renewingSubscription = null;
let revenues = [];
let subscriptions = [];


// Load data from المنتجات 
function loadData() {

    try {

        const savedProducts =
            localStorage.getItem(
                'laundry_products'
            );

        const savedCustomers =
            localStorage.getItem(
                'laundry_customers'
            );

        const savedInvoices =
            localStorage.getItem(
                'laundry_invoices'
            );

        const savedSettings =
            localStorage.getItem(
                'laundry_settings'
            );

        const savedArchive =
            localStorage.getItem(
                'laundry_archive'
            );

        const savedSubscriptions =
            localStorage.getItem(
                'subscriptions'
            );

        const savedWallet =
            localStorage.getItem(
                'walletTransactions'
            );

        const savedRevenues =
            localStorage.getItem(
                'revenues'
            );

        const savedArchiveSubscriptions =
            localStorage.getItem(
                'archiveSubscriptions'
            );

        customers =
            savedCustomers
                ? JSON.parse(savedCustomers)
                : [];
                

        invoices =
            savedInvoices
                ? JSON.parse(savedInvoices)
                : [];


        subscriptions =
            savedSubscriptions
                ? JSON.parse(savedSubscriptions)
                : [];


        walletTransactions =
            savedWallet
                ? JSON.parse(savedWallet)
                : [];



        revenues =
            savedRevenues
                ? JSON.parse(savedRevenues)
                : [];



        archiveSubscriptions =
            savedArchiveSubscriptions
                ? JSON.parse(
                    savedArchiveSubscriptions
                  )
                : [];



        archive =
            savedArchive
                ? JSON.parse(savedArchive)
                : [];

        if (savedSettings) {

            settings =
                JSON.parse(savedSettings);

        }

        if (savedProducts) {

            const saved =
                JSON.parse(savedProducts);


            if (Array.isArray(saved)) {

                products =
                    saved;

            }

        }

        if (
            !settings.subscriptionPlans ||
            !Array.isArray(
                settings.subscriptionPlans
            )
        ) {

            settings.subscriptionPlans = [];

        }
        
        syncGlobalData();
        renderSubscriptionPlans();


        console.log(
            "📥 تم تحميل البيانات بنجاح",
            {
                customers:
                    customers.length,

                invoices:
                    invoices.length,

                subscriptions:
                    subscriptions.length,

                products:
                    products.length
            }
        );


    } catch (error) {

        console.error(
            "❌ خطأ loadData:",
            error
        );

        alert(
            "❌ يوجد خطأ في قراءة بيانات النظام"
        );

    }
}



// Save data 
function saveData() {
    
    try {
        
        syncGlobalData();
        
        localStorage.setItem(
            'laundry_products',
            JSON.stringify(products || [])
        );
        
        localStorage.setItem(
            'laundry_customers',
            JSON.stringify(customers || [])
        );
        
        localStorage.setItem(
            'laundry_invoices',
            JSON.stringify(invoices || [])
        );
        
        localStorage.setItem(
            'subscriptions',
            JSON.stringify(subscriptions || [])
        );
        
        localStorage.setItem(
            'laundry_archive',
            JSON.stringify(archive || [])
        );
        
        localStorage.setItem(
            'laundry_settings',
            JSON.stringify(settings || {})
        );
        
        localStorage.setItem(
            'walletTransactions',
            JSON.stringify(
                walletTransactions || []
            )
        );
        
        localStorage.setItem(
            'revenues',
            JSON.stringify(
                revenues || []
            )
        );
        
        localStorage.setItem(
            'archiveSubscriptions',
            JSON.stringify(
                archiveSubscriptions || []
            )
        );
        
        
        if (
            typeof window.saveAllToFirebase ===
            "function"
        ) {
            
            window.saveAllToFirebase();
            
        } else {
            
            console.warn(
                "⚠️ saveAllToFirebase غير موجود"
            );
            
        }
        
        
        if (
            typeof updateReports ===
            "function"
        ) {
            
            updateReports();
            
        }
        
        
        console.log(
            "💾 saveData تم تنفيذه"
        );
        
        
    } catch (error) {
        
        console.error(
            "❌ saveData error:",
            error
        );
        
    }
}

// ======== Language System ==========
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    document.getElementById('htmlElement').lang = lang;
    document.getElementById('htmlElement').dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    updateAllTexts();
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}


function updateAllTexts() {

    const texts = {
        ar: {
            'logo-subtitle': 'نظام إدارة المغاسل',
            'page-title': 'الرئيسية'
        },

        en: {
            'logo-subtitle': 'Laundry Management System',
            'page-title': 'Dashboard'
        }
    };

    document.querySelectorAll('[data-ar][data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLanguage}`);
    });


    document.querySelectorAll(
        '[data-placeholder-ar][data-placeholder-en]'
    ).forEach(el => {

        el.placeholder =
            el.getAttribute(`data-placeholder-${currentLanguage}`);

    });


    document.querySelectorAll(
        '[data-title-ar][data-title-en]'
    ).forEach(el => {

        el.title =
            el.getAttribute(`data-title-${currentLanguage}`);

    });

    if (texts[currentLanguage]) {

        Object.keys(texts[currentLanguage]).forEach(id => {

            const element = document.getElementById(id);

            if (element) {
                element.textContent =
                    texts[currentLanguage][id];
            }

        });

    }
}



function updateAllTexts() {

    const texts = {
        ar: {
            'logo-subtitle': 'نظام إدارة المغاسل',
            'page-title': 'الرئيسية'
        },

        en: {
            'logo-subtitle': 'Laundry Management System',
            'page-title': 'Dashboard'
        }
    };

    // ترجمة النصوص التي لديها data-ar و data-en
    document.querySelectorAll('[data-ar][data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLanguage}`);
    });

    // ترجمة placeholder
    document.querySelectorAll('[data-placeholder-ar][data-placeholder-en]').forEach(el => {
        el.placeholder = el.getAttribute(
            `data-placeholder-${currentLanguage}`
        );
    });

    // ترجمة title
    document.querySelectorAll('[data-title-ar][data-title-en]').forEach(el => {
        el.title = el.getAttribute(
            `data-title-${currentLanguage}`
        );
    });

    // النصوص المرتبطة بالـ ID
    if (texts[currentLanguage]) {

        Object.keys(texts[currentLanguage]).forEach(id => {

            const element = document.getElementById(id);

            if (element) {
                element.textContent = texts[currentLanguage][id];
            }

        });
    }
}



function loadLanguage() {
    const savedLang = localStorage.getItem('language') || 'ar';
    currentLanguage = savedLang;
    document.getElementById('htmlElement').lang = savedLang;
    document.getElementById('htmlElement').dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[onclick="switchLanguage('${savedLang}')"]`).classList.add('active');
    
    updateAllTexts();
}

// =========== SECTION NAVIGATION ============
function showSection(sectionId, event) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    document.getElementById(sectionId).classList.add('active');
    
    if (event) {
        event.target.closest('.menu-item').classList.add('active');
    }
    
    const titles = {
        ar: {
            statistics: 'الإحصائيات',
            dashboard: 'لوحة التحكم',
            customers: 'إدارة العملاء',
            archive: 'الأرشيف',
            customerWallet: 'محفظة العملاء',
            sales: 'نقطة البيع',
            invoices: 'الفواتير',
            inventory: 'إدارة المخزون',
            reports: 'التقارير',
            settings: 'الإعدادات'
        },
        en: {
            dashboard: 'Dashboard',
            customers: 'Customers',
            customerWallet: 'Customer Wallet',
            sales: 'POS',
            invoices: 'Invoices',
            inventory: 'Inventory',
            reports: 'Reports',
            settings: 'Settings'
        }
    };
    
    document.getElementById('page-title').textContent =
        titles[currentLanguage][sectionId] || '';
    
    if (sectionId === 'dashboard') updateDashboard();
    if (sectionId === 'archive') updateArchiveTable();
    if (sectionId === 'customers') updateCustomersTable();
    if (sectionId === 'sales') renderProducts();
    if (sectionId === 'invoices') updateInvoicesTable();
    if (sectionId === 'inventory') updateInventoryTable();
    if (sectionId === 'reports') updateReports();
    if (sectionId === 'settings') loadSettings();
    if (sectionId === 'customerWallet') updateWalletTable();
    if (sectionId === 'statistics') updateStatistics();
    if (sectionId === 'subscription') renderSubscriptions();
}


// =========== داش بورد==============
function updateDashboard() {
    const todayInvoices = invoices.filter(inv => {
        const invDate = new Date(inv.date).toDateString();
        return invDate === new Date().toDateString();
    });

    let dailyTotal = todayInvoices.reduce((sum, inv) =>
    sum + Number(inv.total || 0), 0);
    
    document.getElementById('dailySales').textContent = dailyTotal.toFixed(2) + ' ' + settings.currency;
    document.getElementById('invoiceCount').textContent = todayInvoices.length;
    document.getElementById('productCount').textContent = products.length;
    document.getElementById('customerCount').textContent = customers.length;

    let serviceCount = {};
    todayInvoices.forEach(inv => {
        inv.items.forEach(item => {
            serviceCount[item.name] = (serviceCount[item.name] || 0) + item.qty;
        });
    });

    const topServices = Object.entries(serviceCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name, count]) => {
            const arLabel = currentLanguage === 'ar' ? 'وحدة' : 'units';
            return `<li>${name}: ${count} ${arLabel}</li>`;
        })
        .join('');

    document.getElementById('topServices').innerHTML = topServices || `<li>${currentLanguage === 'ar' ? 'لا توجد مبيعات اليوم' : 'No sales today'}</li>`;

    const recentInvoices = todayInvoices.slice(-5).reverse()
        .map(inv => `<li>${inv.invoiceNo}: ${inv.total.toFixed(2)} ${settings.currency}</li>`)
        .join('');

    document.getElementById('recentInvoices').innerHTML = recentInvoices || `<li>${currentLanguage === 'ar' ? 'لا توجد فواتير' : 'No invoices'}</li>`;
}



// =============تحديث العملاء ===============
function updateCustomersTable() {
    
    const tbody = document.getElementById('customersTable');
    
    tbody.innerHTML = customers.map((customer, index) => {
        
        const customerInvoices = invoices.filter(
            inv => inv.customerId === customer.id
        ).length;
        
        
        return `
        <tr>

            <td>${customer.name}</td>
            <td>${customer.phone}</td>

            <td>
                ${customerInvoices}
            </td>

            <td>
                ⭐ ${customer.points || 0}
            </td>


            <td>

                <button class="btn btn-small"
                    onclick="viewCustomerInvoices(${customer.id})">
                    📄 الفواتير
                </button>


                <button class="btn btn-small"
                    onclick="openEditCustomerModal(${customer.id})">
                    ✏️ تعديل
                </button>


                <button class="btn btn-small"
                    style="background:var(--danger);color:white;"
                    onclick="deleteCustomer(${index})">
                    🗑️ حذف
                </button>

            </td>

        </tr>
        `;
        
    }).join('');
    
}


let selectedCustomer = null;


const searchInput =
    document.getElementById("invoiceCustomerSearch")
    
const resultsBox =
    document.getElementById("invoiceCustomerResults")

searchInput.addEventListener("input", function() {
    
    
    const query =
        this.value.trim().toLowerCase();
    
    
    resultsBox.innerHTML = "";
    

    if (!query) {
        
        
        selectedCustomer = null;
        const pointsBox =
            document.getElementById("pointsBox");
        
        
        if (pointsBox) {
            
            pointsBox.style.display = "none";
            
        }
        
        return;
        
    }
    
    
    const results = customers.filter(c =>
        
        c.name.toLowerCase().includes(query) ||
        c.phone.includes(query)
        
    );
    
    
    results.forEach(c => {
        
        
        const item =
            document.createElement("div");
        
        
        item.className =
            "result-item";
        
        
        item.textContent =
            `${c.name} - ${c.phone}`;
        
        
        item.onclick = () => {
            
            
            selectedCustomer = c;
            searchInput.value =
                c.name;
                
            resultsBox.innerHTML =
                "";
            
            
            document.getElementById("customerName").value =
                c.name;
            document.getElementById("customerPhone").value =
                c.phone;
            
            
            updateSubscriptionInfo(c.id);
            
            
            const pointsBox =
                document.getElementById("pointsBox");
            const pointsInfo =
                document.getElementById("pointsInfo");
            
            
            
            if (pointsBox && pointsInfo) {
                
                pointsBox.style.display =
                    "block";
                
                const customerPoints =
                    Number(c.points || 0);
                const discount =
                    Math.floor(customerPoints / 100) * 10;
                
                
                pointsInfo.innerHTML = `

                ⭐ رصيد العميل:
                <b>${customerPoints}</b> نقطة

                <br>

                💰 الخصم المتاح:
                <b>${discount.toFixed(2)}</b>
                ${settings.currency}

                `;
                
                
            }
            
        };
        
        resultsBox.appendChild(item);
        
        
    });
    
    
});



function updateCustomerSelect() {
    const select = document.getElementById("customerSelect");
    
    if (!select) return;
    
    select.innerHTML = `<option value="">-- سابقا مسجل --</option>`;
    
    
    customers.forEach((customer, index) => {
        const option = document.createElement("option");
        
        option.value = customer.id
        option.textContent = `${customer.name} - ${customer.phone}`;
        
        select.appendChild(option);
    });
}



function showAddCustomerModal() {
    editingCustomerId = null;
    document.getElementById('customerForm').reset();
    document.getElementById('addCustomerModal').classList.add('active');
}



function closeCustomerModal() {
    document.getElementById('addCustomerModal').classList.remove('active');
    editingCustomerId = null;
    
    function showAddCustomerModal() {
    document.getElementById('addCustomerModal').style.display = 'block';
}
}



function openEditCustomerModal(id) {
    
    const customer = customers.find(c => c.id === id);
    
    if (!customer) return;
    
    editingCustomerId = id;
    
    document.getElementById('customerNameInput').value = customer.name;
    document.getElementById('customerPhoneInput').value = customer.phone;
    
    document.getElementById('addCustomerModal').classList.add('active');
}


function addCustomer(event) {
    event.preventDefault();
    

    const name = document.getElementById('customerNameInput').value.trim();
    const phone = document.getElementById('customerPhoneInput').value.trim();
    
    

    if (!name || !phone) {
        alert(currentLanguage === 'ar' ? 'يرجى ملء الاسم ورقم الهاتف' : 'Please fill name and phone');
        return;
    }

    if (editingCustomerId !== null) {
    
    const customerIndex = customers.findIndex(
        c => c.id === editingCustomerId
    );
    
    
    if (customerIndex !== -1) {
        
        customers[customerIndex] = {
            ...customers[customerIndex],
            name: name,
            phone: phone,
            email: email,
            address: address
        };
    }
    
    alert('تم تحديث بيانات العميل!');
    
} else {
        const newCustomer = {
            id: Date.now(),
            name: name,
            phone: phone,
            email: email,
            address: address
        };

        customers.push(newCustomer);
        alert(currentLanguage === 'ar' ? 'تمت إضافة العميل!' : 'Customer added!');
        document.getElementById('addCustomerModal').style.display = 'none';
    }

    saveData();
    closeCustomerModal();
    updateCustomersTable();
   
    event.target.reset();
}



function deleteCustomer(index) {
    
    const customer = customers[index];
    
    if (!customer) return;
    
    
    if (!confirm("نقل العميل إلى الأرشيف؟")) return;
    
    
    archiveCustomers.push({
        type: "عميل",
        data: customer,
        date: new Date().toLocaleString()
    });
    
    
    customers.splice(index, 1);
    
    
    saveData();
    localStorage.setItem(
        "laundry_archive_customers",
        JSON.stringify(archiveCustomers)
    );
    
    
    updateCustomersTable();
    
    
    alert("تم نقل العميل للأرشيف");
}


function addCustomer(event) {
    
    event.preventDefault();
    
    const name = document.getElementById('customerNameInput').value.trim();
    const phone = document.getElementById('customerPhoneInput').value.trim();
    
if (!/^\d+$/.test(phone)) {
    alert('رقم الهاتف يجب أن يحتوي على أرقام فقط');
    return;
}


if (phone.length !== 9 && phone.length !== 10) {
    alert('رقم الهاتف يجب أن يكون 9 أو 10 أرقام');
    return;
}
    
    if (!name || !phone) {
        alert('أدخل الاسم ورقم الهاتف');
        return;
    }
    

    if (!Array.isArray(customers)) {
        customers = [];
    }
    
    
    const exists = customers.find(c => c.phone === phone);
    
    if (exists) {
        alert('هذا الرقم مسجل مسبقاً');
        return; 
    }
    
    
    customers.push({
    id: Date.now(),
    name,
    phone,
    invoices: 0,
    points: 0
});
    
    localStorage.setItem('laundry_customers', JSON.stringify(customers));
    
    alert('تمت الإضافة');
    
    document.getElementById('customerForm').reset();
    
    closeCustomerModal();
    
    updateCustomersTable();
    
    if (typeof updateCustomerSelect === "function") {
        updateCustomerSelect();
    }
}

// ==================== POS - SALES ====================
function renderProducts(productList = products) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    productList.forEach(product => {
        const btn = document.createElement('button');
        btn.className = 'product-btn';
        btn.type = 'button';
        btn.innerHTML = `
           <div class="icon">
    ${
        product.image
        ? `<img src="${product.image}" alt="${product.name}" class="product-image">`
        : `<span>${product.icon || ''}</span>`
    }
</div>
            <div class="name">${product.name}</div>
            <div class="price">${product.price} ${settings.currency}</div>
        `;
        btn.onclick = (e) => {
            e.preventDefault();
            addToCart(product);
        };
        grid.appendChild(btn);
    });
}


function addToCart(product) {
    if (product.qty <= 0) {
        alert(currentLanguage === 'ar' ? 'المنتج غير متوفر' : 'Product unavailable');
        return;
    }

    selectedProduct = product;
    document.getElementById('shemaghOptions').style.display =
        (product.name === 'شماغ' || product.name === 'غترة')
            ? 'block'
            : 'none';
            
            
    const carpetDimensions =
        document.getElementById('carpetDimensions');

    if (carpetDimensions) {

        carpetDimensions.style.display =
            (product.name === 'سجاد' || product.name === 'سجادة')
                ? 'block'
                : 'none';
    }

document.getElementById('serviceModal').classList.add('active');
}
document.addEventListener('input', function (e) {

    if (
        e.target.id !== 'carpetLength' &&
        e.target.id !== 'carpetWidth'
    ) {
        return;
    }

    const length =
        Number(document.getElementById('carpetLength')?.value || 0);

    const width =
        Number(document.getElementById('carpetWidth')?.value || 0);

    const area = length * width;

    const carpetArea =
        document.getElementById('carpetArea');

    if (carpetArea) {
        carpetArea.textContent =
            area > 0 ? area.toFixed(2) : '0';
    }
});



function updateCart() {
    
    const cartContainer =
        document.getElementById('cartItems');
    
    if (!cartContainer) {
        return;
    }
    
    
    if (cart.length === 0) {
        
        const emptyMsg =
            currentLanguage === 'ar' ?
            'السلة فارغة' :
            'Cart is empty';
        
        cartContainer.innerHTML =
            `<p class="empty-cart">${emptyMsg}</p>`;
        
        // عند إفراغ السلة نلغي التوصيل
        deliveryFee = 0;
        
        calculateTotal();
        return;
    }
    
    
    cartContainer.innerHTML =
        cart.map((item, index) => {
            
            const isCarpet =
                item.unit === "متر" ||
                item.unit === "م²" ||
                item.name === "سجاد" ||
                item.name === "سجادة" ||
                item.category === "سجاد";
            
            
            const unit =
                isCarpet ? "متر" : "قطعة";
            
            
            const qty =
                Number(item.qty) || 0;
            
            
            const price =
                Number(item.price) || 0;
            
            
            const itemTotal =
                price * qty;
            
            
            const formattedQty =
                isCarpet ?
                qty
                .toFixed(2)
                .replace(/\.?0+$/, '') :
                Math.round(qty);
            
            
            const formattedPrice =
                price.toFixed(2);
            
            
            const formattedTotal =
                itemTotal.toFixed(2);
            
            
            return `
            <div class="cart-item">

                <div class="cart-item-info">

                    <div class="cart-item-name">
                        ${item.name}
                    </div>

                    <div
                        style="
                            font-size:12px;
                            color:#666;
                            line-height:1.3
                        "
                    >

                        ${item.serviceType}
                        |
                        ${item.urgency}

                        ${
                            item.shemaghStyle
                                ? '<br>التجهيز: ' +
                                  item.shemaghStyle
                                : ''
                        }

                        <br>

                        <span>
                            السعر:
                            ${formattedPrice}
                            ريال /
                            ${unit}
                        </span>

                        <br>

                        <strong style="color:#222">
                            الإجمالي:
                            ${formattedTotal}
                            ريال
                        </strong>

                    </div>


                    <!-- تعديل السعر -->

                    <input
                        type="number"
                        min="0"
                        step="0.01"
                        value="${price}"
                        onchange="
                            updateCartPrice(
                                ${index},
                                this.value
                            )
                        "
                        style="
                            width:65px;
                            margin-top:2px;
                            height:24px;
                        "
                    >

                </div>


                <div class="cart-item-qty">

                    <button
                        type="button"
                        onclick="
                            decrementQty(${index})
                        "
                    >
                        -
                    </button>


                    <span>
                        ${formattedQty}
                        <small>${unit}</small>
                    </span>


                    <button
                        type="button"
                        onclick="
                            incrementQty(${index})
                        "
                    >
                        +
                    </button>

                </div>


                <button
                    class="cart-item-remove"
                    type="button"
                    onclick="
                        removeFromCart(${index})
                    "
                >
                    حذف
                </button>

            </div>
        `;
            
        }).join('');
    
    
    calculateTotal();
    
    
} 


function updateCartPrice(index, value) {

    if (!cart[index]) {
        return;
    }


    const newPrice =
        Number(
            String(value)
                .replace(",", ".")
                .trim()
        );

    if (
        !Number.isFinite(newPrice) ||
        newPrice < 0
    ) {
        alert(
            currentLanguage === 'ar'
                ? '❌ أدخل سعرًا صحيحًا'
                : '❌ Enter a valid price'
        );

        updateCart();
        return;
    }

    cart[index].price =
        Number(newPrice.toFixed(2));

    updateCart();
}



// زيادة الكمية
function incrementQty(index) {

    const item =
        cart[index];

    if (!item) {
        return;
    }


    const isCarpet =
        item.unit === "متر" ||
        item.name === "سجاد" ||
        item.name === "سجادة" ||
        item.category === "سجاد";


    const step =
        isCarpet ? 0.5 : 1;


    const currentQty =
        Number(item.qty) || 0;


    const newQty =
        currentQty + step;


    const product =
        products.find(
            p => p.id === item.id
        );


    if (product) {

        const availableQty =
            Number(product.qty);
        if (
            Number.isFinite(availableQty) &&
            availableQty > 0 &&
            newQty > availableQty
        ) {

            alert(
                currentLanguage === 'ar'
                    ? `❌ الكمية المتوفرة فقط ${availableQty} ${isCarpet ? 'متر' : 'قطعة'}`
                    : `❌ Only ${availableQty} ${isCarpet ? 'meters' : 'pieces'} available`
            );

            return;
        }
    }

    item.qty =
        Number(
            newQty.toFixed(
                isCarpet ? 2 : 0
            )
        );


    updateCart();
}


function decrementQty(index) {

    const item =
        cart[index];

    if (!item) {
        return;
    }


    const isCarpet =
        item.unit === "متر" ||
        item.name === "سجاد" ||
        item.name === "سجادة" ||
        item.category === "سجاد";


    const step =
        isCarpet ? 0.5 : 1;


    const currentQty =
        Number(item.qty) || 0;


    // إذا كانت الكمية أكبر من 1، اجعلها 1 مباشرة
    if (currentQty > 1) {

        item.qty = 1;

        updateCart();

        return;
    }


    let newQty =
        currentQty - step;


    if (isCarpet) {

        if (newQty < 0.5) {
            newQty = 0.5;
        }

    } else {

        if (newQty < 1) {
            newQty = 1;
        }
    }


    item.qty =
        Number(
            newQty.toFixed(
                isCarpet ? 2 : 0
            )
        );


    updateCart();
}


function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}


function clearCart() {
    const confirmMsg = currentLanguage === 'ar' ? 'هل تريد مسح السلة؟' : 'Clear cart?';
    if (confirm(confirmMsg)) {
        cart = [];
        updateCart();
    }
}


function getActiveSubscription(customerId) {
    return subscriptions.find(sub =>
        String(sub.customerId).trim() === String(customerId).trim() &&
        String(sub.status).trim() === "نشط" &&
        new Date(sub.end).getTime() >= Date.now() &&
        Number(sub.remaining || 0) > 0
    );
}


function calculateTotal() {

const subtotal =
    cart.reduce((sum, item) => {

        const price =
            Number(item.price) || 0;

        const qty =
            Number(item.qty) || 0;

        return sum + (price * qty);

    }, 0);


const discountInput =
    document.getElementById("discountInput");


const discount =
    Number(
        String(discountInput?.value || 0)
            .replace(",", ".")
            .trim()
    ) || 0;


const customer =
    getInvoiceCustomer();


let pointsDiscount = 0;
let pointsUsed = 0;


const usePoints =
    document.getElementById("usePoints");


if (
    customer &&
    customer.id &&
    usePoints &&
    usePoints.checked
) {

    const customerPoints =
        Number(customer.points || 0);


    if (settings.pointsEnabled) {

        const redeemRate =
            Number(settings.pointsRedeemRate) || 10;

        const discountValue =
            Number(settings.pointsDiscountValue) || 10;


        const groups =
            Math.floor(
                customerPoints / redeemRate
            );


        pointsDiscount =
            groups * discountValue;


        pointsUsed =
            groups * redeemRate;
    }
}


let subscriptionDiscount = 0;


if (
    customer &&
    customer.id
) {

    const activeSub =
        getActiveSubscription(customer.id);


    const useSub =
        document.getElementById(
            "useSubscription"
        );


    if (
        activeSub &&
        useSub &&
        useSub.checked
    ) {

        subscriptionDiscount =
            Number(activeSub.remaining || 0);
    }
}


const totalDiscount =
    discount +
    pointsDiscount +
    subscriptionDiscount;


const taxableAmount =
    Math.max(
        0,
        subtotal - totalDiscount
    );


const taxRate =
    Number(settings.taxRate || 0) / 100;


const tax =
    taxableAmount * taxRate;


// =========================
// رسوم التوصيل
// =========================

const deliveryTotal =
    Number(deliveryFee) || 0;


// =========================
// الإجمالي النهائي
// =========================

const total =
    taxableAmount +
    tax +
    deliveryTotal;


const formatMoney =
    (value) => {

        return (
            Number(value || 0).toFixed(2)
            +
            " " +
            settings.currency
        );
    };


const subtotalElement =
    document.getElementById("subtotal");


if (subtotalElement) {
    subtotalElement.textContent =
        formatMoney(subtotal);
}


const taxElement =
    document.getElementById("tax");


if (taxElement) {
    taxElement.textContent =
        formatMoney(tax);
}


const totalElement =
    document.getElementById("total");


if (totalElement) {
    totalElement.textContent =
        formatMoney(total);
}


const subscriptionDiscountElement =
    document.getElementById(
        "subscriptionDiscount"
    );


if (subscriptionDiscountElement) {

    subscriptionDiscountElement.textContent =
        formatMoney(subscriptionDiscount);
}


const pointsDiscountElement =
    document.getElementById(
        "pointsDiscount"
    );


if (pointsDiscountElement) {

    pointsDiscountElement.textContent =
        formatMoney(pointsDiscount);
}


window.currentDiscountData = {

    discount,

    pointsDiscount,

    pointsUsed,

    subscriptionDiscount,

    totalDiscount,

    subtotal,

    taxableAmount,

    taxRate,

    tax,

    deliveryFee: deliveryTotal,

    total
};


}


function getSelectedCustomer() {
    
    const select = document.getElementById("customerSelect");
    
    if (select && select.value !== "") {
        const id = Number(select.value);
        
        const customer = customers.find(c => c.id === id);
        
        if (customer) return customer;
    }
    
    if (selectedCustomer) {
        return selectedCustomer;
    }
    
    return null;
}


 function completePayment() {
            
    
        if (cart.length === 0) {
            alert("السلة فارغة");
            return;
        }
    
    
        let customer = getInvoiceCustomer();

        if (!customer || !customer.id) {
        
        const name =
            document.getElementById("customerName").value.trim();
        
        const phone =
            document.getElementById("customerPhone").value.trim();
        
        
        if (!name) {
            alert("❌ أكتب اسم العميل أو إضافة جديد");
            return;
        }
        
    
        const phoneRegex = /^(05\d{8}|5\d{8})$/;
        
        
        if (!phoneRegex.test(phone)) {
            
            alert(
                "تأكد من الاسم ورقم الجوال ❌"
            );
            
            return;
        }
        
        

        customer = customers.find(
            c => c.phone === phone
        );
        
    
        if (!customer) {
            
            customer = {
                
                id: Date.now(),
                name: name,
                phone: phone,
                points: 0,
                walletBalance: 0,
                invoices: 0,
                createdAt: new Date().toISOString()
                
            };
            
            
            customers.push(customer);
            localStorage.setItem(
                "customers",
                JSON.stringify(customers)
            );
            
            
            if (typeof renderCustomers === "function") {
                renderCustomers();
            }
            
        }
        
    }
    
        const subtotal = cart.reduce(
            (sum, item) => sum + (Number(item.price) * Number(item.qty)),
            0
        );
    
    
    
        let discount =
            Number(document.getElementById('discountInput').value) || 0;
            
    
        discount = Math.min(
            discount,
            subtotal
        );
    
    
        let pointsDiscount = 0;
        let pointsUsed = 0;
    
    
        const usePoints =
            document.getElementById("usePoints");
    
    
        if (
            settings.pointsEnabled &&
            usePoints &&
            usePoints.checked
        ) {
    
    
            const customerPoints =
                Number(customer.points || 0);
    
            const redeemRate =
                Number(settings.pointsRedeemRate) || 20;
    
            const discountValue =
                Number(settings.pointsDiscountValue) || 10;
    
            const availableGroups =
            Math.floor(customerPoints / redeemRate);



        pointsDiscount =
            availableGroups * discountValue;



        const afterNormalDiscount =
            Math.max(
                0,
                subtotal - discount
            );

        pointsDiscount =
            Math.min(
                pointsDiscount,
                afterNormalDiscount
            );

        pointsUsed =
            Math.ceil(
                pointsDiscount / discountValue
            ) * redeemRate;

        pointsUsed =
            Math.min(
                pointsUsed,
                customerPoints
            );

    }




const taxRate =
    Number(settings.taxRate || 0) / 100;

const amountBeforeTax =
    Math.max(
        0,
        subtotal -
        discount -
        pointsDiscount
    );

const tax =
    amountBeforeTax * taxRate;

const delivery =
    deliveryType === 'توصيل' ?
    Number(
        document.getElementById('deliveryFeeInput')?.value || 0
    ) :
    0;

const invoiceAmountBeforeSubscription =
    amountBeforeTax +
    tax +
    delivery;

let subscriptionDiscount = 0;

const activeSub =
    getActiveSubscription(customer.id);

const useSub =
    document.getElementById("useSubscription");


if (
    activeSub &&
    useSub &&
    useSub.checked
) {

    subscriptionDiscount =
        Math.min(
            Number(activeSub.remaining || 0),
            invoiceAmountBeforeSubscription
        );



    activeSub.remaining =
        Number(activeSub.remaining || 0)
        - subscriptionDiscount;


    if (activeSub.remaining <= 0) {

        activeSub.remaining = 0;
        activeSub.status = "منتهي";
    }


    localStorage.setItem(
        "subscriptions",
        JSON.stringify(subscriptions)
    );
}


let total =
    Math.max(
        0,
        invoiceAmountBeforeSubscription -
        subscriptionDiscount
    );



let walletUsed = 0;
let currentWallet =
Number(customer.walletBalance || 0);


if (currentWallet > 0) {
    
    walletUsed = Math.min(
        currentWallet,
        total
    );
    
    total -= walletUsed;
    
}

  const paymentMethod =
    document.querySelector(
        'input[name="payment"]:checked'
    )?.value || "نقدي";


let earnedPoints = 0;

  if(settings.pointsEnabled){


        const earnRate =
            Number(settings.pointsEarnRate) || 20;

        earnedPoints =
            Math.floor(total / earnRate);

    }


    cart.forEach(item=>{


        const product =
            products.find(
                p=>p.id===item.id
            );


        if(product){

            product.qty -= item.qty;


            if(product.qty < 0){
                product.qty = 0;
            }

        }

    });



// 🧾 إنشاء الفاتورة
function getNextInvoiceNo() {
    let lastNo = parseInt(localStorage.getItem("lastInvoiceNo") || "0", 10);
    lastNo++;
    localStorage.setItem("lastInvoiceNo", lastNo);
    return "INV-" + String(lastNo).padStart(3, "0");
}

    const invoiceNo = getNextInvoiceNo();
    const paymentStatus =
    document.querySelector(
        'input[name="paymentStatus"]:checked'
    )?.value || 'later';

const invoice = {
    
    invoiceNo,
    barcode: invoiceNo,
    storeName: (settings.storeName || "").trim(),

    
    total,
    paid: 0,
    paid: paymentStatus === 'paid' ? total : 0,
    remaining: paymentStatus === 'paid' ? 0 : total,
    paymentStatus:
    paymentStatus === 'paid' ?
    'مدفوعة' :
    'غير مدفوعة',
    status: "غير مستلم",

    date:
    new Date().toISOString(),


    customerId:
    customer.id,

    customerName:
    customer.name,

    customerPhone:
    customer.phone,

    items:[...cart],

    subtotal,
    discount,
    pointsDiscount,
    pointsUsed,


    subscriptionId: activeSub ? activeSub.id : null,
    subscriptionDiscount,
    tax,
    deliveryFee: delivery,
    deliveryType,
    walletUsed,
    total,
    pointsEarned:
    earnedPoints,
    paymentMethod:
    activeSub &&
    useSub &&
    useSub.checked ?
    "اشتراك" :
    (
        paymentStatus === "paid" ?
        paymentMethod :
        ""
    ),


    status:"غير مستلم"

};


    const index =
    customers.findIndex(
        c=>c.id===customer.id
    );


    if(index !== -1){


        customers[index].points =
        Math.max(
            0,
            Number(customers[index].points || 0)
            -
            pointsUsed
            +
            earnedPoints
        );


        customers[index].invoices =
        (customers[index].invoices || 0)+1;

    }

let walletTransactions =
JSON.parse(localStorage.getItem("walletTransactions")) || [];
    


const paidAmount =
    paymentStatus === 'paid' ?
    total :
    0;

const difference =
    paidAmount - total;


if (difference > 0) {
    
    addWalletTransaction(
        customer.id,
        difference,
        "إيداع",
        "رصيد متبقي من الفاتورة",
        invoice.invoiceNo
    );
    
}


else if (difference < 0) {
    
    addWalletTransaction(
        customer.id,
        difference,
        "مديونية",
        "متبقي على الفاتورة",
        invoice.invoiceNo
    );
    
}
    invoices.push(invoice);


    saveData();
    showReceipt(invoice);

    cart=[];

    updateCart();

 

document.getElementById('customerName').value = '';
document.getElementById('customerPhone').value = '';

const customerSearch = document.getElementById('customerSearch');

if (customerSearch) {
    customerSearch.value = '';
}


const resultsBox = document.getElementById('customerResults');

if (resultsBox) {
    resultsBox.innerHTML = '';
}


selectedCustomer = null;


const subscriptionInfo =
    document.getElementById('subscriptionInfo');

if (subscriptionInfo) {
    subscriptionInfo.style.display = 'none';
    subscriptionInfo.innerHTML = '';
}


const discountInput =
    document.getElementById('discountInput');

if (discountInput) {
    discountInput.value = '';
}


updateCart();

}


function getInvoiceCustomer() {
    

    if (selectedCustomer) {
        return selectedCustomer;
    }
    
    

    const select = document.getElementById("customerSelect");
    
    if (select && select.value) {
        
        const id = Number(select.value);
        
        const customer = customers.find(c => c.id === id);
        
        if (customer) {
            return customer;
        }
    }
    
    

    const name =
        document.getElementById("customerName").value.trim();
    
    const phone =
        document.getElementById("customerPhone").value.trim();
    
    

    if (!name && !phone) {
        return null;
    }
    

    const phoneRegex = /^(05\d{8}|5\d{8})$/;
    
    
    if (!phoneRegex.test(phone)) {
        
        alert(
            "❌ رقم الجوال غير صحيح\nيجب أن يبدأ بـ 05 (10 أرقام) أو 5 (9 أرقام)"
        );
        
        return null;
    }
    

    let customer =
        customers.find(c => c.phone === phone);
    
    if (!customer) {
        
        customer = {
            
            id: Date.now(),
            name: name,
            phone: phone,
            points: 0,
            walletBalance: 0,
            invoices: 0
            
        };
        
        
        customers.push(customer);
        
        localStorage.setItem(
            "customers",
            JSON.stringify(customers)
        );
        
        
        if (typeof renderCustomers === "function") {
            renderCustomers();
        }
        
    }
    
    
    return customer;
}


// ============ INVOICES  تحديث الفاتورة  =============
function updateInvoicesTable() {

const tbody = document.getElementById('invoicesTable');

if (!tbody) return;
tbody.innerHTML = invoices.map((invoice) => {


        
const total =
    Number(invoice.total || 0);

const paid =
    Number(invoice.paid || 0);

const remaining =
    Math.max(
        0,
        total - paid
    );


        const paymentText =
            remaining <= 0
            ?
            `<span style="
                color:#2e7d32;
                font-weight:bold;
                background:#e8f5e9;
                padding:5px 10px;
                border-radius:8px;">
                ✅ مدفوعة
            </span>`
            :
            `<span style="
                color:#d32f2f;
                font-weight:bold;
                background:#ffebee;
                padding:5px 10px;
                border-radius:8px;">
                ${remaining.toFixed(2)} ${settings.currency}
            </span>`;


        return `

        <tr>

            <td>
                ${invoice.invoiceNo}
            </td>


            <td>
                ${new Date(invoice.date).toLocaleDateString(
                    currentLanguage === 'ar' 
                    ? 'ar-SA' 
                    : 'en-US'
                )}
            </td>


            <td>
                ${invoice.customerName || "عميل نقدي"}
            </td>


            <td>
                ${invoice.customerPhone || "-"}
            </td>


            <td>
                ${paymentText}
            </td>


          <td>
    ${
        invoice.paymentMethod
        ? `<span style="
            display:inline-block;
            padding:5px 10px;
            border-radius:8px;
            font-weight:bold;
            background:${
                invoice.paymentMethod === "شبكة"
                    ? "#e3f2fd"
                    : invoice.paymentMethod === "كاش"
                    ? "#e8f5e9"
                    : invoice.paymentMethod === "اشتراك"
                    ? "#fff3e0"
                    : "#f3f4f6"
            };
            color:${
                invoice.paymentMethod === "شبكة"
                    ? "#1565c0"
                    : invoice.paymentMethod === "كاش"
                    ? "#2e7d32"
                    : invoice.paymentMethod === "اشتراك"
                    ? "#e65100"
                    : "#374151"
            };
        ">
            ${
                invoice.paymentMethod === "شبكة"
                    ? "💳 شبكة"
                    : invoice.paymentMethod === "كاش"
                    ? "💵 كاش"
                    : invoice.paymentMethod === "اشتراك"
                    ? "🎫 اشتراك"
                    : invoice.paymentMethod
            }
        </span>`
        : "-"
    }
</td>


            <td>

                <select 
                onchange="updateInvoiceStatus('${invoice.invoiceNo}',this.value)"
                style="
                padding:6px;
                border-radius:8px;
                ">

                    <option value="received"
                    ${invoice.status==="received"?"selected":""}>
                    استلام
                    </option>


                    <option value="washing"
                    ${invoice.status==="washing"?"selected":""}>
                    قيد الغسيل
                    </option>


                    <option value="ironing"
                    ${invoice.status==="ironing"?"selected":""}>
                    قيد الكوي
                    </option>


                    <option value="ready"
                    ${invoice.status==="ready"?"selected":""}>
                    جاهز
                    </option>


                    <option value="delivered"
                    ${invoice.status==="delivered"?"selected":""}>
                    تم التسليم
                    </option>

                </select>

            </td>



            <td style="text-align:center;">

            ${
                Number(invoice.subscriptionDiscount || 0) > 0

                ?

                `<span style="
                color:#1565c0;
                background:#e3f2fd;
                padding:5px 8px;
                border-radius:8px;
                font-weight:bold;">
                💳 خصم ${Number(invoice.subscriptionDiscount).toFixed(2)}
                </span>`

                :

                "-"
            }

            </td>

         <td>
<div style="
display:flex;
gap:6px;
justify-content:center;
align-items:center;
white-space:nowrap;">



${
    remaining <= 0
    ?
    `
    <span style="
        color:#2e7d32;
        font-weight:bold;
        background:#e8f5e9;
        padding:6px 10px;
        border-radius:8px;
        display:inline-block;">
        ✅ مدفوعة
    </span>
    `
    :
    `
    <button
        class="btn btn-small"
        onclick="openInvoiceScanner()"
        style="
            background: #0D9488;
            color:white;">
        💰 استلام دفعة
    </button>
    `
}


<button class="btn btn-small"
onclick="printInvoice('${invoice.invoiceNo}')">
🖨️ طباعة
</button>


<button class="btn btn-small"
style="background:var(--danger);color:white;"
onclick="deleteInvoice('${invoice.invoiceNo}')">
🗑️ حذف
</button>


</div>
</td>

         <td style="width:60px; text-align:center; padding-right:20px;">
    <input
        type="checkbox"
        class="inv-check"
        data-id="${invoice.invoiceNo}">
</td>


        </tr>


        `;


    }).join('');

} 

function toggleAllInvoices(source) {
    document.querySelectorAll('.inv-check')
        .forEach(cb => cb.checked = source.checked);
}

function searchInvoices() {
    const query = document.getElementById('searchInvoice').value.toLowerCase();
    const rows = document.querySelectorAll('#invoicesTable tr');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
    });
}


function deleteSelectedInvoices() {
    
    const checked = document.querySelectorAll('.inv-check:checked');
    
    if (checked.length === 0) {
        alert("لم يتم تحديد أي فاتورة");
        return;
    }
    
    if (!confirm("نقل الفواتير المحددة إلى الأرشيف؟")) return;
    
    const ids = Array.from(checked).map(cb => cb.dataset.id);
    
    ids.forEach(id => {
        
        const index = invoices.findIndex(
            inv => String(inv.invoiceNo) === String(id)
        );
        
        if (index === -1) return;
        const invoice = invoices[index];
        

        archive.push({
            type: "فاتورة",
            data: invoice,
            date: new Date().toLocaleString()
        });
        

        if (invoice.subscriptionId && invoice.subscriptionDiscount > 0) {
            
            const sub = subscriptions.find(
                s => s.id === invoice.subscriptionId
            );
            
            if (sub) {
                
                sub.remaining =
                    Number(sub.remaining || 0) +
                    Number(invoice.subscriptionDiscount || 0);
                
                if (sub.remaining > 0) {
                    sub.status = "نشط";
                }
            }
        }
        

        invoices.splice(index, 1);
        
    });
    
    
    localStorage.setItem(
        "subscriptions",
        JSON.stringify(subscriptions)
    );
    
    localStorage.setItem(
        "laundry_archive",
        JSON.stringify(archive)
    );
    
    saveData();
    updateInvoicesTable();
    
    if (typeof updateArchiveTable === "function") {
        updateArchiveTable();
    }
    
    alert("تم نقل الفواتير المحددة إلى الأرشيف");
    
}


function deleteInvoice(invoiceNo) {
    
    const index = invoices.findIndex(inv => inv.invoiceNo === invoiceNo);
    
    
    if (index === -1) return;
    if (!confirm("نقل الفاتورة إلى الأرشيف؟")) return;
    
    
    const invoice = invoices[index];
    
    archive.push({
        type: "فاتورة",
        data: invoice,
        date: new Date().toLocaleString()
    });
    

if (invoice.subscriptionId && invoice.subscriptionDiscount > 0) {
    
    const sub = subscriptions.find(
        s => s.id === invoice.subscriptionId
    );
    
    if (sub) {
        
        sub.remaining =
            Number(sub.remaining || 0) +
            Number(invoice.subscriptionDiscount || 0);
        
        if (sub.remaining > 0) {
            sub.status = "نشط";
        }
        
        localStorage.setItem(
            "subscriptions",
            JSON.stringify(subscriptions)
        );
    }
}

    invoices.splice(index, 1);
    
    
    localStorage.setItem(
        'laundry_archive',
        JSON.stringify(archive)
    );
    
    
    saveData();
    updateInvoicesTable();
    
    
    if (typeof updateArchiveTable === "function") {
        updateArchiveTable();
    }
    
    
    alert("تم نقل الفاتورة للأرشيف");
}

// ================ RECEIPTS & WHATSAPP ===============
function showReceipt(invoice) {

    lastInvoice = invoice;
    const receiptContent = `
<div style="
    font-family: monospace;
    font-size:12px;
    line-height:1.6;
    width:100%;
    max-width:320px;
    margin:auto;
    padding:5px;
">


<!-- HEADER -->

<div style="text-align:center;margin-bottom:8px;">

    <div style="font-size:16px;font-weight:bold;">
    ${(settings.storeName || sessionStorage.getItem("currentLaundryName") || "").trim()}
    </div>

    <div style="font-size:11px;">
        ${settings.storePhone || ''}
    </div>

    <div style="font-size:11px;">
        ${settings.storeAddress || ''}
    </div>

    <div style="font-size:11px;margin-top:3px;">
        VAT: ${settings.vatNumber || '-'}
    </div>

</div>


<hr style="border:none;border-top:1px dashed #000;margin:6px 0;">



<!-- INVOICE INFO -->

<div style="font-size:11px;">

<div>رقم الفاتورة: ${invoice.invoiceNo}</div>

<div>
التاريخ:
${new Date(invoice.date).toLocaleString()}
</div>

<div>
العميل:
${invoice.customerName}
</div>

<div>
الجوال:
${invoice.customerPhone}
</div>

</div>



<hr style="border:none;border-top:1px dashed #000;margin:6px 0;">



<!-- ITEMS -->

<div style="
display:flex;
justify-content:space-between;
font-weight:bold;
font-size:11px;
">

<span>الصنف</span>

<span>المجموع</span>

</div>



${invoice.items.map(item => `

<div style="margin-bottom:6px;font-size:11px;">

<div style="
display:flex;
justify-content:space-between;
">

<span>
${item.name} × ${item.qty}
</span>

<span>
${(item.price * item.qty).toFixed(2)}
</span>

</div>


<div style="font-size:10px;color:#555;">

${item.serviceType || ''}

${item.urgency ? ' - ' + item.urgency : ''}

${item.shemaghStyle ? '<br>التجهيز: ' + item.shemaghStyle : ''}

</div>


</div>


`).join('')}



<hr style="border:none;border-top:1px dashed #000;margin:6px 0;">



<!-- DISCOUNTS -->

<div style="font-size:11px;">


<div style="
display:flex;
justify-content:space-between;
">

<span>
🚚 ${invoice.deliveryType || 'استلام'}
</span>

<span>
${Number(invoice.deliveryFee || 0).toFixed(2)}
${settings.currency}
</span>

</div>



${invoice.subscriptionDiscount > 0 ? `

<div style="
display:flex;
justify-content:space-between;
color:#2e7d32;
">


</div>

` : ''}



${invoice.pointsDiscount > 0 ? `

<div style="
display:flex;
justify-content:space-between;
color:#1565c0;
">

<span>
⭐ خصم النقاط
</span>

<span>
- ${Number(invoice.pointsDiscount).toFixed(2)}
${settings.currency}
</span>

</div>

` : ''}



</div>



<hr style="border:none;border-top:1px dashed #000;margin:6px 0;">



<!-- TOTALS -->

<div style="font-size:12px;">

${invoice.paymentStatus === 'مدفوعة' ? `

<div style="display:flex; justify-content:space-between;">

    <span style="color:green; font-weight:bold;">
        💳 تم الدفع
    </span>
   <span style="flex:1;text-align:center;">⬅️</span>
    <span style="color:green; font-weight:bold;">
        ${invoice.paymentMethod}
    </span>

</div>

` : ''}



<div style="
display:flex;
justify-content:space-between;
">

<span>
الإجمالي الفرعي
</span>

<span>
${invoice.subtotal.toFixed(2)}
</span>

</div>



${invoice.discount > 0 ? `

<div style="
display:flex;
justify-content:space-between;
">

<span>
خصم
</span>

<span>
-${invoice.discount.toFixed(2)}
</span>

</div>

` : ''}



${invoice.subscriptionDiscount > 0 ? `

<div style="
display:flex;
justify-content:space-between;
color:#2e7d32;
">

<span>
💳 خصم الاشتراك مع الضريبة
</span>

<span>
-${invoice.subscriptionDiscount.toFixed(2)}
</span>

</div>

` : ''}



<div style="
display:flex;
justify-content:space-between;
">

<span>
ضريبة (${settings.taxRate}%)
</span>

<span>
${invoice.tax.toFixed(2)}
</span>

</div>


</div>



<hr style="border:none;border-top:2px solid #000;margin:6px 0;">



<!-- FINAL TOTAL -->

<div style="
display:flex;
justify-content:space-between;
font-size:14px;
font-weight:bold;
">

<span>
الإجمالي النهائي
</span>


<span>
${invoice.total.toFixed(2)}
${settings.currency}
</span>


</div>


<!-- POINTS -->

${invoice.pointsEarned > 0 ? `

<div style="
margin-top:10px;
padding:8px;
background:#fff8e1;
border-radius:8px;
text-align:center;
font-size:11px;
">

⭐ حصلت على 
<b>${invoice.pointsEarned}</b>
نقطة

</div>

` : ''}



<!-- FOOTER -->

<div style="
text-align:center;
margin-top:10px;
font-size:11px;
">

شكراً لتعاملك معنا 🙏

</div>

<!-- QR -->

<div style="
text-align:center;
margin-top:10px;
margin-bottom:0;
">

<div style="
font-size:10px;
margin-bottom:3px;
">
رمز الفاتورة
</div>


<div id="invoiceQR"
style="
display:flex;
justify-content:center;
">
</div>


<div style="
font-size:9px;
margin-top:3px;
">
${invoice.barcode || ''}
</div>

</div>
`;



document.getElementById('receiptContent').innerHTML =
receiptContent;
document.getElementById("invoiceQR").innerHTML = "";


new QRCode(
    document.getElementById("invoiceQR"),
    {
        text: invoice.barcode,
        width: 70,
        height: 70,
        colorDark: "#000",
        colorLight: "#fff"
    }
);



const whatsappBtn =
document.getElementById('whatsappBtn');


if(invoice.customerPhone){

    whatsappBtn.style.display =
    'inline-block';

}
else{

    whatsappBtn.style.display =
    'none';

}

document.getElementById('receiptModal')
.classList.add('active');

}

function closeReceiptModal() {
    document.getElementById('receiptModal').classList.remove('active');
    updateDashboard();
}


function printReceipt() {
    
    const element = document.getElementById('receiptContent');
    
    const options = {
        margin: 0.5,
        filename: `invoice-${lastInvoice.invoiceNo}.pdf`,
        
        image: {
            type: 'jpeg',
            quality: 1
        },
        
        html2canvas: {
            scale: 3
        },
        
        jsPDF: {
            unit: 'in',
            format: 'a4',
            orientation: 'portrait'
        }
    };
    
    html2pdf().set(options).from(element).save();
}


function printInvoice(invoiceNo) {
    
    const invoiceData = invoices.find(function(i) {
        return i.invoiceNo === invoiceNo;
    });
    
    if (!invoiceData) {
        alert("الفاتورة غير موجودة");
        return;
    }
    

    showReceipt(invoiceData);
    setTimeout(function() {
        
        const receipt = document.getElementById("receiptContent");
        
        if (!receipt) {
            alert("تعذر العثور على الفاتورة");
            return;
        }
        
        
        const oldPreview =
            document.getElementById("invoicePrintPreview");
        
        if (oldPreview) {
            oldPreview.remove();
        }
        

        const preview = document.createElement("div");
        
        preview.id = "invoicePrintPreview";
        preview.innerHTML = `

            <div class="invoice-print-overlay">

                <div class="invoice-print-window">

                    <div class="invoice-print-header">

                        <strong>
                            🧾 معاينة الفاتورة
                        </strong>

                        <button
                            type="button"
                            class="invoice-close-btn"
                            onclick="closeInvoicePrintPreview()">

                            ✕

                        </button>

                    </div>


                    <div class="invoice-print-body">

                        <div class="thermal-receipt-preview">

                            ${receipt.innerHTML}

                        </div>

                    </div>


                    <div class="invoice-print-footer">

                        <button
                            type="button"
                            class="invoice-print-btn"
                            onclick="printCurrentInvoicePreview()">

                            🖨️ طباعة

                        </button>


                        <button
                            type="button"
                            class="invoice-cancel-btn"
                            onclick="closeInvoicePrintPreview()">

                            إغلاق

                        </button>

                    </div>

                </div>

            </div>

        `;
        
        document.body.appendChild(preview);
        
    }, 300);
}

function closeInvoicePrintPreview() {
    
    const preview =
        document.getElementById("invoicePrintPreview");
    
    if (preview) {
        preview.remove();
    }
}


function printCurrentInvoicePreview() {

    const receipt = document.querySelector(
        "#invoicePrintPreview .thermal-receipt-preview"
    );

    if (!receipt) {
        alert("تعذر العثور على الفاتورة");
        return;
    }

    const printWindow = window.open(
        "",
        "_blank",
        "width=400,height=700,resizable=yes,scrollbars=yes"
    );

    if (!printWindow) {
        alert("يرجى السماح بالنوافذ المنبثقة للطباعة");
        return;
    }

    printWindow.document.write(`

<!DOCTYPE html>

<html lang="ar" dir="rtl">

<head>

<meta charset="UTF-8">

<title>فاتورة</title>

<style>

* {
    box-sizing: border-box;
}


@page {
    size: auto;
    margin: 0;
}

html,
body {
    margin: 0;
    padding: 0;
    background: #fff;
}

body {
    font-family: Arial, Tahoma, sans-serif;
    direction: rtl;
}

/* الفاتورة */

.receipt {
    width: 100%;
    max-width: 80mm;

    margin: 0 auto;
    padding: 3mm;

    background: #fff;
    color: #000;

    font-size: 11px;
    line-height: 1.5;

    overflow: hidden;
}

/* الصور */

.receipt img {
    max-width: 100%;
    height: auto;
}

/* الجداول */

.receipt table {
    width: 100%;
    max-width: 100%;
    border-collapse: collapse;
}

.receipt td,
.receipt th {
    padding: 3px;
    word-break: break-word;
}

/* إخفاء الأزرار */

button {
    display: none !important;
}



@media print {

    html,
    body {
        margin: 0;
        padding: 0;
        background: white;
    }

    .receipt {
        width: 100%;
        max-width: 80mm;
        margin: 0;
        padding: 3mm;
    }

}

</style>

</head>

<body>

<div class="receipt">

    ${receipt.innerHTML}

</div>

<script>

window.onload = function () {

    setTimeout(function () {

        window.print();

    }, 500);

};

window.onafterprint = function () {

    setTimeout(function () {

        window.close();

    }, 500);

};

<\/script>

</body>

</html>

    `);

    printWindow.document.close();

    printWindow.focus();
}


async function sendWhatsApp() {
    
    if (!lastInvoice) return;
    
    
    let customerPhone = lastInvoice.customerPhone || '';
    
    if (!customerPhone) {
        alert('رقم العميل غير موجود');
        return;
    }
    
    
    customerPhone = customerPhone.replace(/\D/g, '');
    
    
    if (customerPhone.startsWith('05')) {
        customerPhone = '966' + customerPhone.substring(1);
    } else if (customerPhone.startsWith('5')) {
        customerPhone = '966' + customerPhone;
    }
    
    
   let message = `🧺 *${(settings.storeName || sessionStorage.getItem("currentLaundryName") || "").trim()}*\n\n`;
    
    message += `📋 *فاتورة جديدة*\n━━━━━━━━━━━━━━\n`;
    
    message += `🔢 رقم الفاتورة: ${lastInvoice.invoiceNo}\n`;
    message += `👤 العميل: ${lastInvoice.customerName}\n`;
    message += `📅 التاريخ: ${new Date(lastInvoice.date).toLocaleDateString('ar-SA')}\n\n`;
    
    message += `🧾 *الخدمات:*\n`;
    
    lastInvoice.items.forEach(item => {
    message += `• ${item.name}\n`;
    
    if (item.shemaghStyle) {
        message += `التجهيز: ${item.shemaghStyle}\n`;
    }
    
    message += `الخدمة: ${item.serviceType}\n`;
    message += `السرعة: ${item.urgency}\n`;
    message += `الكمية: ${item.qty}\n`;
    message += `السعر: ${item.price} ${settings.currency}\n`;
    message += `الإجمالي: ${(item.price * item.qty).toFixed(2)} ${settings.currency}\n`;
    message += `ــــــــــــــــــــــ\n`;
});
    
    message += `\n💰 *الإجمالي النهائي:* ${lastInvoice.total.toFixed(2)} ${settings.currency}\n`;
    message += `💳 طريقة الدفع: ${lastInvoice.paymentMethod}\n\n`;
    message += `🙏 شكراً لتعاملكم معنا`;
    
    
    const url = `https://wa.me/${customerPhone}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
    
    alert(
        currentLanguage === 'ar' ?
        '✓ تم فتح الواتساب للعميل' :
        '✓ WhatsApp opened'
    );
}



function updateInventoryTable() {
const tbody = document.getElementById('inventoryTable');


tbody.innerHTML = products.map((product, index) => `
    <tr style="border-bottom:3px solid #E2E8F0;">

        <td style="font-weight:700;font-size:16px;color:var(--dark);vertical-align:top;padding:18px 12px;">
            <div style="background:#F8FAFC;border-radius:10px;padding:10px 12px;border:1px solid #E2E8F0;">
                ${product.name}
            </div>
        </td>

        <td style="vertical-align:top;padding:18px 12px;">
            <span style="display:inline-block;background:#F1F5F9;padding:7px 12px;border-radius:8px;font-weight:600;">
                ${product.category}
            </span>
        </td>

        <td style="vertical-align:top;padding:18px 12px;">

            <div style="display:grid;gap:10px;min-width:280px;">

                <div style="background:#F0FDFA;border:1px solid #99F6E4;border-radius:10px;padding:7px 7px;">
                    <div style="font-weight:500;color:#0F766E;margin-bottom:7px;">
                        🧺 غسيل
                    </div>

                    <div style="display:flex;justify-content:space-between;gap:8px;">
                        <span style="color:#15803D;font-weight:500;">
                            عادي
                        </span>

                        <strong>
                            ${product.priceNormalWash || 0} ${settings.currency}
                        </strong>
                    </div>

                    <div style="display:flex;justify-content:space-between;gap:8px;margin-top:5px;">
                        <span style="color:#DC2626;font-weight:500;">
                            مستعجل
                        </span>

                        <strong>
                            ${product.priceUrgentWash || 0} ${settings.currency}
                        </strong>
                    </div>
                </div>

                <div style="background:#F5F3FF;border:1px solid #DDD6FE;border-radius:10px;padding:7px 7px;">
                    <div style="font-weight:500;color:#7C3AED;margin-bottom:7px;">
                        👔 كوي
                    </div>

                    <div style="display:flex;justify-content:space-between;gap:8px;">
                        <span style="color:#15803D;font-weight:500;">
                            عادي
                        </span>

                        <strong>
                            ${product.priceNormalIron || 0} ${settings.currency}
                        </strong>
                    </div>

                    <div style="display:flex;justify-content:space-between;gap:8px;margin-top:5px;">
                        <span style="color:#DC2626;font-weight:500;">
                            مستعجل
                        </span>

                        <strong>
                            ${product.priceUrgentIron || 0} ${settings.currency}
                        </strong>
                    </div>
                </div>

                <div style="background:#EFF6FF;border:1px solid #BFDBFE;border-radius:10px;padding:7px 7px;">
                    <div style="font-weight:500;color:#0284C7;margin-bottom:7px;">
                        🧺👔 غسيل + كوي
                    </div>

                    <div style="display:flex;justify-content:space-between;gap:8px;">
                        <span style="color:#15803D;font-weight:500;">
                            عادي
                        </span>

                        <strong>
                            ${product.priceWashIron || 0} ${settings.currency}
                        </strong>
                    </div>

                    <div style="display:flex;justify-content:space-between;gap:8px;margin-top:5px;">
                        <span style="color:#DC2626;font-weight:500;">
                            مستعجل
                        </span>

                        <strong>
                            ${product.priceUrgentWashIron || 0} ${settings.currency}
                        </strong>
                    </div>
                </div>

            </div>

        </td>

        <td style="vertical-align:top;padding:18px 12px;text-align:center;">
            <span style="display:inline-block;background:#F1F5F9;border-radius:10px;padding:7px 7px;font-weight:700;">
                ${product.qty}
            </span>
        </td>

        <td style="vertical-align:top;padding:18px 12px;">

            <div style="display:flex;flex-direction:column;gap:8px;">

                <button
                    class="btn btn-small"
                    onclick="openEditProductModalById(${product.id})"
                >
                    ✏️
                    ${currentLanguage === 'ar' ? 'تعديل' : 'Edit'}
                </button>

                <button
                    class="btn btn-small"
                    style="background:var(--danger);color:white;"
                    onclick="deleteProduct(${product.id})"
                >
                    🗑️
                    ${currentLanguage === 'ar' ? 'حذف' : 'Delete'}
                </button>

            </div>

        </td>

    </tr>
`).join('');


}



function openEditProductModalById(id) {
    
    const index = products.findIndex(
        product => Number(product.id) === Number(id)
    );

    if (index === -1) {
        alert('المنتج غير موجود');
        return;
    }

    openEditProductModal(index);
}

function deleteProduct(id) {
    
    const index = products.findIndex(
        product => Number(product.id) === Number(id)
    );
    
    if (index === -1) {
        alert('المنتج غير موجود');
        return;
    }
    
    const product = products[index];
    
    if (!confirm(`نقل "${product.name}" إلى الأرشيف؟`)) {
        return;
    }
    
    archive.push({
        type: "منتج",
        data: { ...product },
        date: new Date().toLocaleString()
    });
    
    products.splice(index, 1);
    
    saveData();
    
    updateInventoryTable();
    renderProducts();
    
    alert("تم نقل المنتج للأرشيف");
}

function showAddProductModal() {
    editingProductId = null;
    document.getElementById('productForm').reset();
    document.getElementById('addProductModal').classList.add('active');
}

function closeModal() {
    document.getElementById('addProductModal').classList.remove('active');
    editingProductId = null;
}

function openEditProductModal(index) {
    
    const product = products[index];
    
    editingProductId = index;
    
    window.productImageRemoved = false;
    
    document.getElementById('productName').value =
        product.name || '';
    
    document.getElementById('productCategory').value =
        product.category || '';
    
    document.getElementById('priceNormalWash').value =
        product.priceNormalWash || 0;
    
    document.getElementById('priceUrgentWash').value =
        product.priceUrgentWash || 0;
    
    document.getElementById('priceNormalIron').value =
        product.priceNormalIron || 0;
    
    document.getElementById('priceUrgentIron').value =
        product.priceUrgentIron || 0;
    
    document.getElementById('priceWashIron').value =
        product.priceWashIron || 0;
    
    document.getElementById('priceUrgentWashIron').value =
        product.priceUrgentWashIron || 0;
    
    document.getElementById('productQuantity').value =
        product.qty || 0;
    
    const preview =
        document.getElementById('productImagePreview');
    
    if (preview) {
        
        if (product.image) {
            
            preview.innerHTML = `
                <img
                    src="${product.image}"
                    alt="${product.name}"
                >
            `;
            
        } else {
            
            preview.innerHTML = `
                <div class="image-placeholder">
                    📷
                    <span>اختر صورة للمنتج</span>
                </div>
            `;
        }
    }
    
    const imageInput =
        document.getElementById('productImage');
    
    if (imageInput) {
        imageInput.value = '';
    }
    
    document
        .getElementById('addProductModal')
        .classList.add('active');
}



// حذف صورة المنتج
function removeProductImage() {
    
    window.productImageRemoved = true;
    
    const preview =
        document.getElementById("productImagePreview");
    
    if (preview) {
        
        preview.innerHTML = `
            <div class="image-placeholder">
                📷
                <span>تم حذف الصورة</span>
            </div>
        `;
    }
    
    const imageInput =
        document.getElementById("productImage");
    
    if (imageInput) {
        imageInput.value = "";
    }
}
window.removeProductImage = removeProductImage;

function addProduct(event) {
    event.preventDefault();

    const name =
        document.getElementById('productName').value.trim();

    const category =
        document.getElementById('productCategory').value;

    const priceNormalWash =
        parseFloat(document.getElementById('priceNormalWash').value) || 0;

    const priceUrgentWash =
        parseFloat(document.getElementById('priceUrgentWash').value) || 0;

    const priceNormalIron =
        parseFloat(document.getElementById('priceNormalIron').value) || 0;

    const priceUrgentIron =
        parseFloat(document.getElementById('priceUrgentIron').value) || 0;

    const priceWashIron =
        parseFloat(document.getElementById('priceWashIron').value) || 0;

    const priceUrgentWashIron =
        parseFloat(document.getElementById('priceUrgentWashIron').value) || 0;

    const qty =
        parseInt(
            document.getElementById('productQuantity').value,
            10
        );

    const imageInput =
        document.getElementById('productImage');

    if (
        !name ||
        !category ||
        isNaN(qty)
    ) {
        alert(
            currentLanguage === 'ar'
                ? 'يرجى ملء جميع الحقول'
                : 'Please fill all fields'
        );
        return;
    }

    const saveProductData = (imageData = null) => {

        if (editingProductId !== null) {

            const oldProduct =
                products[editingProductId];

            products[editingProductId] = {

                ...oldProduct,

                name: name,
                category: category,
                priceNormalWash: priceNormalWash,
                priceUrgentWash: priceUrgentWash,
                priceNormalIron: priceNormalIron,
                priceUrgentIron: priceUrgentIron,
                priceWashIron: priceWashIron,
                priceUrgentWashIron: priceUrgentWashIron,
                price: priceNormalWash,

                qty: qty,

                image:
                    window.productImageRemoved
                        ? ''
                        : (
                            imageData !== null
                                ? imageData
                                : oldProduct.image || ''
                        )
            };

            alert(
                currentLanguage === 'ar'
                    ? 'تم تحديث المنتج بنجاح!'
                    : 'Product updated successfully!'
            );

        } else {

            const newProduct = {

                id: Date.now(),

                name: name,

                category: category,
                priceNormalWash: priceNormalWash,
                priceUrgentWash: priceUrgentWash,
                priceNormalIron: priceNormalIron,
                priceUrgentIron: priceUrgentIron,
                priceWashIron: priceWashIron,
                priceUrgentWashIron: priceUrgentWashIron,
                price: priceNormalWash,
                qty: qty,
                total: priceNormalWash * qty,
                image: imageData || '',
                icon: '📦'
            };

            products.push(newProduct);

            alert(
                currentLanguage === 'ar'
                    ? 'تم إضافة المنتج بنجاح!'
                    : 'Product added successfully!'
            );
        }

        saveData();
        closeModal();
        updateInventoryTable();
        renderProducts();

        editingProductId = null;

        window.productImageRemoved = false;

        event.target.reset();
    };

    if (
        imageInput &&
        imageInput.files &&
        imageInput.files.length > 0
    ) {

        const file =
            imageInput.files[0];

        if (!file.type.startsWith('image/')) {

            alert(
                currentLanguage === 'ar'
                    ? 'الملف المختار ليس صورة'
                    : 'Selected file is not an image'
            );

            return;
        }

        const reader =
            new FileReader();

        reader.onload = function () {

            saveProductData(
                reader.result
            );
        };

        reader.onerror = function () {

            alert(
                currentLanguage === 'ar'
                    ? 'حدث خطأ أثناء قراءة الصورة'
                    : 'Error reading image'
            );
        };

        reader.readAsDataURL(file);

    } else {

        saveProductData(null);
    }
}


// حذف صورة المنتج
function removeProductImage() {
    
    const input = document.getElementById('productImage');
    const preview = document.getElementById('productImagePreview');
    
    if (input) {
        input.value = '';
    }
    
    if (preview) {
        
        preview.innerHTML = `
            <div class="image-placeholder">
                📷
                <span>اختر صورة للمنتج</span>
            </div>
        `;
    }
    

    window.productImageRemoved = true;
}


function deleteProduct(id) {
    
    const index = products.findIndex(p => p.id === id);
    
    if (index === -1) return;
    
    
    const product = products[index];
    
    
    if (!confirm("نقل المنتج إلى الأرشيف؟")) return;
    
    
    archive.push({
        type: "منتج",
        data: product,
        date: new Date().toLocaleString()
    });
    console.log("الأرشيف الحالي:", archive);
    
    
    products.splice(index, 1);
    
    
    saveData();
    
    updateInventoryTable();
    
    alert("تم نقل المنتج للأرشيف");
}
// ==================== REPORTS ====================
function updateReports() {
    const today = new Date();
    
    const revenues = JSON.parse(
        localStorage.getItem("revenues") || "[]"
    );
    
    const todayInvoices = invoices.filter(inv => {
        const invDate = new Date(inv.date);
        return invDate.toDateString() === today.toDateString();
    });
    
    const monthInvoices = invoices.filter(inv => {
        const invDate = new Date(inv.date);
        return invDate.getMonth() === today.getMonth() &&
            invDate.getFullYear() === today.getFullYear();
    });
    

    
    const dailyTotal = todayInvoices
        .filter(inv => inv.paymentMethod !== "اشتراك")
        .reduce((sum, inv) => sum + Number(inv.total || 0), 0);
    
    const monthlyTotal = monthInvoices
        .filter(inv => inv.paymentMethod !== "اشتراك")
        .reduce((sum, inv) => sum + Number(inv.total || 0), 0);
    
    

    
    const dailySubscriptionTotal = revenues
        .filter(r => {
            const d = new Date(r.date);
            
            return r.type === "اشتراك" &&
                d.toDateString() === today.toDateString();
        })
        .reduce((sum, r) => sum + Number(r.amount || 0), 0);
    
    
    const monthlySubscriptionTotal = revenues
        .filter(r => {
            const d = new Date(r.date);
            
            return r.type === "اشتراك" &&
                d.getMonth() === today.getMonth() &&
                d.getFullYear() === today.getFullYear();
        })
        .reduce((sum, r) => sum + Number(r.amount || 0), 0);
    
    

    
    const dailyDeliveryIncome = todayInvoices
        .reduce((sum, inv) => {
            return sum + Number(inv.deliveryFee || 0);
        }, 0);
    
    const monthlyDeliveryIncome = monthInvoices
        .reduce((sum, inv) => {
            return sum + Number(inv.deliveryFee || 0);
        }, 0);
    
    

    
    const avgDaily = todayInvoices.length > 0 ?
        dailyTotal / todayInvoices.length :
        0;
    
    const avgMonthly = monthInvoices.length > 0 ?
        monthlyTotal / monthInvoices.length :
        0;
    
    

    
    document.getElementById('reportDailySales').textContent =
        dailyTotal.toFixed(2) + ' ' + settings.currency;
    
    document.getElementById('reportInvoices').textContent =
        todayInvoices.length;
    
    document.getElementById('reportAverage').textContent =
        avgDaily.toFixed(2) + ' ' + settings.currency;
    
    

    
    document.getElementById('reportMonthlySales').textContent =
        monthlyTotal.toFixed(2) + ' ' + settings.currency;
    
    document.getElementById('reportMonthlyInvoices').textContent =
        monthInvoices.length;
    
    document.getElementById('reportMonthlyAverage').textContent =
        avgMonthly.toFixed(2) + ' ' + settings.currency;
    
    

    
    let serviceCount = {};
    
    monthInvoices.forEach(inv => {
        inv.items.forEach(item => {
            serviceCount[item.name] =
                (serviceCount[item.name] || 0) + item.qty;
        });
    });
    
    const topServices = Object.entries(serviceCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name, count]) =>
            `<li>• ${name}: <strong>${count}</strong></li>`
        )
        .join('');
    
    document.getElementById('topServicesReport').innerHTML =
        topServices ||
        `<li>${currentLanguage === 'ar' ? 'لا توجد بيانات' : 'No data'}</li>`;
    
    

    
    let paymentCount = {};
    
    monthInvoices.forEach(inv => {
        paymentCount[inv.paymentMethod] =
            (paymentCount[inv.paymentMethod] || 0) + 1;
    });
    
    const paymentStats = Object.entries(paymentCount)
        .map(([method, count]) =>
            `<li>• ${method}: <strong>${count}</strong></li>`
        )
        .join('');
    
    document.getElementById('paymentMethodsReport').innerHTML =
        paymentStats ||
        `<li>${currentLanguage === 'ar' ? 'لا توجد بيانات' : 'No data'}</li>`;
    
    

    
    const dailySubscriptionIncomeEl =
        document.getElementById("reportDailySubscriptionIncome");
    
    if (dailySubscriptionIncomeEl) {
        dailySubscriptionIncomeEl.textContent =
            dailySubscriptionTotal.toFixed(2) +
            " " +
            settings.currency;
    }
    
    const monthlySubscriptionIncomeEl =
        document.getElementById("reportMonthlySubscriptionIncome");
    
    if (monthlySubscriptionIncomeEl) {
        monthlySubscriptionIncomeEl.textContent =
            monthlySubscriptionTotal.toFixed(2) +
            " " +
            settings.currency;
    }
    
    

    
    const subscriptionCount = subscriptions.length;
    
    const subscriptionCountEl =
        document.getElementById("reportSubscriptionCount");
    
    if (subscriptionCountEl) {
        subscriptionCountEl.textContent = subscriptionCount;
    }
    
    
    const dailyDeliveryIncomeEl =
        document.getElementById("reportDailyDeliveryIncome");
    
    if (dailyDeliveryIncomeEl) {
        dailyDeliveryIncomeEl.textContent =
            dailyDeliveryIncome.toFixed(2) +
            " " +
            settings.currency;
    }
    
    const monthlyDeliveryIncomeEl =
        document.getElementById("reportMonthlyDeliveryIncome");
    
    if (monthlyDeliveryIncomeEl) {
        monthlyDeliveryIncomeEl.textContent =
            monthlyDeliveryIncome.toFixed(2) +
            " " +
            settings.currency;
    }
}

function printDailyReport() {
    const today = new Date().toLocaleDateString('ar-SA');
    alert(currentLanguage === 'ar' ? 'سيتم طباعة التقرير اليومي' : 'Printing daily report');
    window.print();
}

function printMonthlyReport() {
    const month = new Date().toLocaleDateString('ar-SA', { month: 'long', year: 'numeric' });
    alert(currentLanguage === 'ar' ? 'سيتم طباعة التقرير الشهري' : 'Printing monthly report');
    window.print();
}

// ==================== SETTINGS ====================

function loadSettings() {
    
    const setValue = (id, value) => {
        const el = document.getElementById(id);
        
        if (el) {
            el.value = value ?? "";
        }
    };
    
    const setChecked = (id, value) => {
        const el = document.getElementById(id);
        
        if (el) {
            el.checked = value ?? true;
        }
    };
    
    

    
    const currentLaundryName =
    sessionStorage.getItem("currentLaundryName") || "";

    const currentOwnerName =
    sessionStorage.getItem("currentOwnerName") || "";

    settings.storeName =
    settings.storeName ||
    currentLaundryName;

    settings.ownerName =
    settings.ownerName ||
    currentOwnerName;

setValue(
    "storeName",
    settings.storeName
);

setValue(
    "ownerName",
    settings.ownerName
);
    
    setValue(
        "storePhone",
        settings.storePhone
    );
    
    setValue(
        "storeAddress",
        settings.storeAddress
    );
    
    
    setValue(
        "taxRate",
        settings.taxRate
    );
    
    
    setValue(
        "ironingFee",
        settings.ironingFee
    );
    
    setValue(
        "fullServiceFee",
        settings.fullServiceFee
    );
    
    
    setValue(
        "vatNumber",
        settings.vatNumber || ""
    );
    
    
    setValue(
        "urgentMultiplier",
        settings.urgentMultiplier || 1.3
    );
    

    
    setChecked(
        "pointsEnabled",
        settings.pointsEnabled ?? true
    );
    
    setValue(
        "pointsEarnRate",
        settings.pointsEarnRate || 20
    );
    
    setValue(
        "pointsRedeemRate",
        settings.pointsRedeemRate || 10
    );
    
    setValue(
        "pointsDiscountValue",
        settings.pointsDiscountValue || 10
    );
    
}
function saveSettings() {

 function getValue(id, defaultValue = "") {

        const element =
            document.getElementById(id);

        if (!element) {
            console.warn(
                `⚠️ عنصر الإعداد غير موجود: ${id}`
            );

            return defaultValue;
        }

        return element.value.trim();
    }


    function getNumber(id, defaultValue = 0) {

        const value =
            parseFloat(
                getValue(id, "")
            );

        return Number.isFinite(value)
            ? value
            : defaultValue;
    }


    function getChecked(id, defaultValue = false) {

        const element =
            document.getElementById(id);

        if (!element) {

            console.warn(
                `⚠️ عنصر الإعداد غير موجود: ${id}`
            );

            return defaultValue;
        }

        return element.checked;
    }


    const name =
    getValue("logoNameInput", settings.storeName || "");


    const phone =
        getValue("storePhone", settings.storePhone || "");

    const address =
        getValue(
            "storeAddress",
            settings.storeAddress || ""
        );

    const tax =
        getNumber(
            "taxRate",
            Number(settings.taxRate || 0)
        );


    if (!name || !phone || !address) {

        alert(
            currentLanguage === "ar"
                ? "يرجى ملء جميع الحقول"
                : "Please fill all fields"
        );

        return;
    }



    settings.ironingFee =
        getNumber(
            "ironingFee",
            Number(settings.ironingFee || 0)
        );


    settings.fullServiceFee =
        getNumber(
            "fullServiceFee",
            Number(settings.fullServiceFee || 0)
        );


    settings.urgentMultiplier =
        getNumber(
            "urgentMultiplier",
            Number(settings.urgentMultiplier || 1)
        );


    settings.vatNumber =
        getValue(
            "vatNumber",
            settings.vatNumber || ""
        );




    settings.pointsEnabled =
        getChecked(
            "pointsEnabled",
            settings.pointsEnabled === true
        );


    settings.pointsEarnRate =
        getNumber(
            "pointsEarnRate",
            Number(settings.pointsEarnRate || 20)
        );


    settings.pointsRedeemRate =
        getNumber(
            "pointsRedeemRate",
            Number(settings.pointsRedeemRate || 10)
        );


    settings.pointsDiscountValue =
        getNumber(
            "pointsDiscountValue",
            Number(settings.pointsDiscountValue || 10)
        );

    if (
        !Array.isArray(
            settings.subscriptionPlans
        )
    ) {

        settings.subscriptionPlans = [];

    }


    settings.subscriptionPlans =
        settings.subscriptionPlans.map(
            (plan, index) => {

                const nameElement =
                    document.getElementById(
                        `subPlanName${index}`
                    );

                const priceElement =
                    document.getElementById(
                        `subPlanPrice${index}`
                    );

                const balanceElement =
                    document.getElementById(
                        `subPlanBalance${index}`
                    );

                const daysElement =
                    document.getElementById(
                        `subPlanDays${index}`
                    );


                return {

                    id:
                        plan.id,

                    name:
                        nameElement
                            ? nameElement.value.trim()
                            : plan.name || "",

                    price:
                        priceElement
                            ? Number(priceElement.value || 0)
                            : Number(plan.price || 0),

                    balance:
                        balanceElement
                            ? Number(balanceElement.value || 0)
                            : Number(plan.balance || 0),

                    days:
                        daysElement
                            ? Number(daysElement.value || 0)
                            : Number(plan.days || 0)

                };

            }
        );

    settings.storeName =
        name;

    settings.storePhone =
        phone;

    settings.storeAddress =
        address;

    settings.taxRate =
        tax;

    saveData();
const logoTitle = document.getElementById("logo-title");
if (logoTitle) {
    logoTitle.textContent = "🧺 " + name;
}

localStorage.setItem("laundryLogoName", name);



    alert(
        currentLanguage === "ar"
            ? "✓ تم الحفظ!"
            : "✓ Saved!"
    );

}


//////  استرجاع البيانات 
function backupData() {
    const data = {
        products: products,
        customers: customers,
        invoices: invoices,
        settings: settings,
        subscriptions: subscriptions,
        backupDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = `backup_${new Date().toISOString().slice(0, 10)}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    alert(currentLanguage === 'ar' ? '✓ تم الحفظ!' : '✓ Backup created!');
}


function restoreBackup() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                if (data.products && data.invoices && data.settings && data.customers) {
                    const confirmMsg = currentLanguage === 'ar' ? 'هل تريد استرجاع؟' : 'Restore backup?';
                    if (confirm(confirmMsg)) {
                        products = data.products;
                        customers = data.customers;
                        invoices = data.invoices;
                        settings = data.settings;
                        subscriptions = data.subscriptions || [];
                        archiveSubscriptions = data.archiveSubscriptions || [];
                        saveData();
                        alert(currentLanguage === 'ar' ? '✓ تم الاسترجاع!' : '✓ Restored!');
                        location.reload();
                    }
                } else {
                    alert(currentLanguage === 'ar' ? 'ملف غير صحيح' : 'Invalid file');
                }
            } catch (error) {
                alert(currentLanguage === 'ar' ? 'خطأ في الملف' : 'File error');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function resetData() {
    const confirmMsg = currentLanguage === 'ar' ? 'تحذير! هل أنت متأكد؟' : 'Warning! Are you sure?';
    if (confirm(confirmMsg)) {
        if (confirm(currentLanguage === 'ar' ? 'تأكد مرة أخرى!' : 'Confirm again!')) {
            localStorage.clear();
            location.reload();
        }
    }
}


// ==================== CLOCK ====================
function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString('ar-SA', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    const date = now.toLocaleDateString('ar-SA', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const clock = document.getElementById('clock');

    if (clock) {
        clock.innerHTML = `
            <span class="clock-time">${time}</span>
            <span class="clock-date">${date}</span>
        `;
    }
}

// تشغيل الساعة مباشرة
updateClock();

// تحديث كل ثانية
setInterval(updateClock, 1000);


function updateStatistics() {
    
    const today = new Date().toDateString();
    

    const todayInvoices = invoices.filter(inv =>
        new Date(inv.date).toDateString() === today
    );
    
    const todaySales = todayInvoices.reduce(
        (sum, inv) => sum + Number(inv.total || 0),
        0
    );
    
    document.getElementById('todaySales').textContent =
        todaySales.toFixed(2) + ' ' + settings.currency;
    
    document.getElementById('todayInvoices').textContent =
        todayInvoices.length;
    

    document.getElementById('readyOrders').textContent =
        invoices.filter(inv => inv.status === 'ready').length;
    
    document.getElementById('processingOrders').textContent =
        invoices.filter(inv =>
            inv.status === 'washing' ||
            inv.status === 'ironing'
        ).length;
    
    document.getElementById('activeSubscriptions').textContent =
        subscriptions.filter(sub =>
            sub.status === 'نشط' &&
            new Date(sub.end) >= new Date()
        ).length;
    

    let customerTotals = {};
    
    invoices.forEach(inv => {
        customerTotals[inv.customerName] =
            (customerTotals[inv.customerName] || 0) +
            Number(inv.total || 0);
    });
    
    const topCustomers = Object.entries(customerTotals)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    document.getElementById("topCustomersList").innerHTML =
        topCustomers.length ?
        topCustomers.map((c, i) => `
                <div style="display:flex;justify-content:space-between;margin:5px 0;">
                    <span>${i + 1}- ${c[0]}</span>
                    <strong>${c[1].toFixed(2)} ${settings.currency}</strong>
                </div>
            `).join('') :
        'لا توجد بيانات';


    let serviceTotals = {};
    
    invoices.forEach(inv => {
        inv.items.forEach(item => {
            serviceTotals[item.name] =
                (serviceTotals[item.name] || 0) +
                Number(item.qty || 0);
        });
    });
    
    const topServices = Object.entries(serviceTotals)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    document.getElementById("topServicesStats").innerHTML =
        topServices.length ?
        topServices.map((s, i) => `
                <div style="display:flex;justify-content:space-between;margin:5px 0;">
                    <span>${i + 1}- ${s[0]}</span>
                    <strong>${s[1]}</strong>
                </div>
            `).join('') :
        'لا توجد بيانات';
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', function() {
    loadLanguage();
    loadData();
    invoices.forEach(inv => {
    inv.total = Number(inv.total || 0);
    inv.tax = Number(inv.tax || 0);
    inv.subtotal = Number(inv.subtotal || 0);
});
    
    
    updateCustomerSelect();
    loadCustomersToSubscription();
    
    renderProducts();
    renderSubscriptions();
    
    updateDashboard();
    updateClock();
    
    setInterval(updateClock, 1000);
    
    calculateTotal();
    
    setInterval(() => {
        if (document.getElementById('dashboard').classList.contains('active')) {
            updateDashboard();
        }
    }, 60000);
    
});

window.onclick = function(event) {
    
    const modal =
        document.getElementById("addProductModal");
    
    const customerModal =
        document.getElementById("addCustomerModal");
    
    const receiptModal =
        document.getElementById("receiptModal");
    
    
    if (event.target === modal) {
        closeModal();
    }
    
    if (event.target === customerModal) {
        closeCustomerModal();
    }
    
    if (event.target === receiptModal) {
        closeReceiptModal();
    }
    
    
};


const logoInput =
    document.getElementById("logoNameInput");

const logoTitle =
    document.getElementById("logo-title");


function updateLaundryLogo(laundryName) {
    
    const name =
        (laundryName || "").trim();
    
    const finalName =
        name || "مغسلتي";
    

    if (logoInput) {
        
        logoInput.value =
            finalName;
        
    }
    
    if (logoTitle) {
        
        logoTitle.textContent =
            "🧺 " + finalName;
        
    }
    
    
}

const laundryName =
    window.currentLaundry?.name || "";

if (laundryName) {
    
    updateLaundryLogo(
        laundryName
    );
    
    
}

function showAddSubscriptionModal() {
    loadSubscriptionPlansToSelect();
    document.getElementById("addSubscriptionModal").style.display = "block";
    loadCustomersToSubscription();
}

/// دالة نافذةإغلاق  للعملاء
function closeSubscriptionModal() {
    
    document.getElementById("addSubscriptionModal").style.display = "none";
    const customerSearch =
    document.getElementById("customerSearch");

    const subscriptionCustomer =
    document.getElementById("subscriptionCustomer");

    const customerResults =
    document.getElementById("customerResults");

if (customerSearch) {
    customerSearch.value = "";
}

if (subscriptionCustomer) {
    subscriptionCustomer.value = "";
}

if (customerResults) {
    customerResults.innerHTML = "";
    customerResults.style.display = "none";
}
}


function loadCustomersToSubscription(search = "") {
    let box = document.getElementById("customerResults");

    box.innerHTML = "";

    search = search.toLowerCase().trim();

    if (!search) {
        box.style.display = "none";
        return;
    }

    let filtered = customers.filter(customer =>
        customer.name.toLowerCase().includes(search) ||
        customer.phone.includes(search)
    );

    if (filtered.length === 0) {
        box.style.display = "none";
        return;
    }

    filtered.forEach(customer => {

        let item = document.createElement("div");

        item.style.padding = "12px 15px";
        item.style.cursor = "pointer";
        item.style.borderBottom = "1px solid #eee";
        item.style.background = "#fff";
        item.style.textAlign = "right";
        item.style.direction = "rtl";

        item.innerHTML = `
            <div style="font-weight:bold; color:#333;">
                👤 ${customer.name}
            </div>
            <div style="font-size:13px; color:#777; margin-top:4px;">
                📞 ${customer.phone}
            </div>
        `;

        item.onmouseenter = function () {
            this.style.background = "#f5f5f5";
        };

        item.onmouseleave = function () {
            this.style.background = "#fff";
        };

        item.onclick = function () {

            document.getElementById("customerSearch").value =
                customer.name + " - " + customer.phone;

            document.getElementById("subscriptionCustomer").value =
                customer.id;

            box.style.display = "none";
        };

        box.appendChild(item);
    });

    box.style.display = "block";
}


document.getElementById("customerSearch")
    .addEventListener("input", function () {
        loadCustomersToSubscription(this.value);
    });

    
    
// إضافة اشتراك جديد  
function addSubscription(e) {

    e.preventDefault();

    const customerId =
        Number(
            document.getElementById(
                "subscriptionCustomer"
            ).value
        );


    const customer =
        customers.find(
            c => c.id === customerId
        );


    if (!customer) {

        alert("العميل غير مسجل");

        return;

    }


    const planId =
        Number(
            document.getElementById(
                "subscriptionType"
            ).value
        );


    const plan =
        settings.subscriptionPlans.find(
            p => p.id === planId
        );


    if (!plan) {

        alert("اختر خطة اشتراك");

        return;

    }
    const exists =
        subscriptions.some(
            s =>
                s.customerId === customerId &&
                (
                    s.planId === plan.id ||
                    s.type === plan.name
                ) &&
                s.status === "نشط" &&
                !renewingSubscription
        );


    if (exists) {

        alert(
            "هذا العميل لديه اشتراك نشط"
        );

        return;

    }


    const startDate =
        new Date();


    const endDate =
        new Date();


    endDate.setDate(
        endDate.getDate() +
        Number(plan.days)
    );

    const subscription = {

        id:
            Date.now(),

        customerId:
            customer.id,

        customerName:
            customer.name,

        planId:
            plan.id,

        type:
            plan.name,

        price:
            Number(plan.price),

        remaining:
            Number(plan.balance),

        planBalance:
            Number(plan.balance),

        start:
            startDate.toISOString(),

        end:
            endDate.toISOString(),

        status:
            "نشط"

    };

    if (
        !Array.isArray(
            subscriptions
        )
    ) {

        subscriptions = [];

    }


    subscriptions.push(
        subscription
    );

    if (
        !Array.isArray(
            revenues
        )
    ) {

        revenues = [];

    }


    revenues.push({

        type:
            "اشتراك",

        amount:
            Number(plan.price),

        subscriptionId:
            subscription.id,

        customerName:
            customer.name,

        date:
            new Date().toISOString()

    });

    saveData();
    closeSubscriptionModal();
    

    if (
        typeof renderSubscriptions ===
        "function"
    ) {

        renderSubscriptions();

    }

    let customerPhone =
        customer.phone || "";


    customerPhone =
        customerPhone.replace(
            /\D/g,
            ""
        );


    if (
        customerPhone.startsWith("05")
    ) {

        customerPhone =
            "966" +
            customerPhone.substring(1);

    } else if (
        customerPhone.startsWith("5")
    ) {

        customerPhone =
            "966" +
            customerPhone;

    }


    if (customerPhone) {

        const startText =
            new Date(
                subscription.start
            ).toLocaleDateString(
                "ar-SA"
            );


        const endText =
            new Date(
                subscription.end
            ).toLocaleDateString(
                "ar-SA"
            );


        const message =
    
    `🧺 *${(settings.storeName || sessionStorage.getItem("currentLaundryName") || "").trim()}*

السلام عليكم ${customer.name} 👋

🎉 *تم تفعيل اشتراكك بنجاح*

📋 *تفاصيل الاشتراك:*
━━━━━━━━━━━━━━
👤 العميل: ${customer.name}
📦 نوع الاشتراك: ${subscription.type}
💰 قيمة الاشتراك: ${subscription.price.toFixed(2)} ${settings.currency}
💳 الرصيد: ${subscription.remaining.toFixed(2)} ${settings.currency}

📅 تاريخ البداية: ${startText}
📅 تاريخ الانتهاء: ${endText}

━━━━━━━━━━━━━━
🙏 شكراً لاختياركم لنا
نتمنى لكم تجربة مميزة 🌷`;

        const url =
            `https://wa.me/${customerPhone}?text=` +
            encodeURIComponent(
                message
            );


        window.open(
            url,
            "_blank"
        );

    }


    alert(
        "تم إضافة الاشتراك بنجاح"
    );

}


function renderSubscriptions(list = subscriptions) {
    
    let table = document.getElementById("subscriptionsTable");
    table.innerHTML = "";
    
    list.forEach((sub) => {
        
        const index = subscriptions.indexOf(sub);
        
        table.innerHTML += `
            <tr>
                <td>${sub.customerName}</td>
                <td>${sub.type}</td>
                <td>${sub.price.toFixed(2)} ${settings.currency}</td>
                <td>${sub.remaining.toFixed(2)} ${settings.currency}</td>
                <td>${sub.status}</td>

                <td>

                    <button class="delete-btn" onclick="deleteSubscription(${index})">
                        حذف
                    </button>

                    ${
                        (sub.remaining <= 0 || sub.status === "منتهي")
                        ?
                        `<button 
                            class="btn btn-primary"
                            onclick="renewSubscription(${index})">
                            🔄 تجديد
                        </button>`
                        :
                        ''
                    }

                </td>
            </tr>
        `;
    });
} 

function deleteSubscription(index) {
    subscriptions.splice(index, 1);
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
    renderSubscriptions();
}
let durationMap = {
    "شهري": 30,
    "3 شهور": 90,
    "6 شهور": 180,
    "سنوي": 365
};

function generatePDF() {
    if (!lastInvoice) return;
    
    const element = document.getElementById("receiptContent");
    
    const opt = {
        margin: 0.5,
        filename: `invoice-${lastInvoice.invoiceNo}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
}



// إضافة الخدمة إلى السلة
function confirmAddToCart() {

const product = selectedProduct;

if (!product) {
    alert("❌ اختر المنتج أولاً");
    return;
}


// =========================
// نوع الخدمة
// =========================

const serviceElement =
    document.querySelector(
        'input[name="serviceType"]:checked'
    );

if (!serviceElement) {
    alert("❌ اختر نوع الخدمة");
    return;
}

const service =
    serviceElement.value;


// =========================
// سرعة الخدمة
// =========================

const urgencyElement =
    document.querySelector(
        'input[name="urgencyType"]:checked'
    );

if (!urgencyElement) {
    alert("❌ اختر سرعة الخدمة");
    return;
}

const urgency =
    urgencyElement.value;


// =========================
// نوع المنتج
// =========================

const isCarpet =
    product.name === "سجاد" ||
    product.name === "سجادة";


// =========================
// نوع التوصيل
// =========================

const deliveryElement =
    document.querySelector(
        'input[name="deliveryType"]:checked'
    );


const selectedDelivery =
    deliveryElement
        ? deliveryElement.value
        : "استلام";


const deliveryRow =
    document.getElementById(
        "deliveryFeeRow"
    );


const deliveryInput =
    document.getElementById(
        "deliveryFeeInput"
    );


// =========================
// رسوم التوصيل
// =========================

let currentDeliveryFee = 0;


if (selectedDelivery === "توصيل") {

    if (deliveryRow) {
        deliveryRow.style.display = "flex";
    }


    const enteredValue =
        String(
            deliveryInput?.value || ""
        )
            .replace(",", ".")
            .trim();


    const enteredFee =
        Number(enteredValue);


    if (
        enteredValue === "" ||
        !Number.isFinite(enteredFee) ||
        enteredFee < 0
    ) {

        alert(
            "❌ أدخل رسوم التوصيل بشكل صحيح"
        );


        if (deliveryInput) {
            deliveryInput.focus();
        }


        return;
    }


    currentDeliveryFee =
        enteredFee;


    // =========================
    // مهم:
    // رسوم التوصيل للطلب كاملًا
    // =========================

    deliveryFee =
        currentDeliveryFee;

} else {

    // استلام = بدون رسوم توصيل

    deliveryFee = 0;
}


// =========================
// الكمية والمقاسات
// =========================

let quantity = 1;
let length = null;
let width = null;
let area = null;


if (isCarpet) {

    const lengthElement =
        document.getElementById(
            "carpetLength"
        );


    const widthElement =
        document.getElementById(
            "carpetWidth"
        );


    if (
        !lengthElement ||
        !widthElement
    ) {

        alert(
            "❌ خانات الطول والعرض غير موجودة"
        );

        return;
    }


    length =
        Number(
            String(lengthElement.value)
                .replace(",", ".")
                .trim()
        );


    width =
        Number(
            String(widthElement.value)
                .replace(",", ".")
                .trim()
        );


    if (
        !Number.isFinite(length) ||
        length <= 0
    ) {

        alert(
            "❌ أدخل طول السجادة بشكل صحيح"
        );


        lengthElement.focus();

        return;
    }


    if (
        !Number.isFinite(width) ||
        width <= 0
    ) {

        alert(
            "❌ أدخل عرض السجادة بشكل صحيح"
        );


        widthElement.focus();

        return;
    }


    area =
        length * width;


    quantity =
        Number(
            area.toFixed(4)
        );


    const areaElement =
        document.getElementById(
            "carpetArea"
        );


    if (areaElement) {

        areaElement.textContent =
            area
                .toFixed(2)
                .replace(/\.?0+$/, '');
    }


} else {

    const quantityElement =
        document.getElementById(
            "quantityInput"
        );


    if (!quantityElement) {

        alert(
            "❌ خانة الكمية غير موجودة"
        );

        return;
    }


    quantity =
        parseInt(
            quantityElement.value,
            10
        );


    if (
        !Number.isFinite(quantity) ||
        quantity <= 0
    ) {

        alert(
            "❌ الكمية يجب أن تكون أكبر من صفر"
        );


        quantityElement.focus();

        return;
    }
}


// =========================
// شماغ / غترة
// =========================

const isShemagh =
    product.name === "شماغ" ||
    product.name === "غترة";


let shemaghStyle = "";


if (isShemagh) {

    const starchElement =
        document.querySelector(
            'input[name="starchStyle"]:checked'
        );


    const shapeElement =
        document.querySelector(
            'input[name="shemaghShape"]:checked'
        );


    if (!starchElement) {

        alert(
            "❌ اختر مستوى النشا"
        );

        return;
    }


    if (!shapeElement) {

        alert(
            "❌ اختر طريقة الشكل"
        );

        return;
    }


    shemaghStyle =
        starchElement.value +
        " + " +
        shapeElement.value;
}


// =========================
// حساب السعر
// =========================

let price = 0;


if (isCarpet) {

    price =
        Number(product.price) || 0;


} else if (service === "غسيل") {

    price =
        urgency === "مستعجل"
            ? Number(
                product.priceUrgentWash
            ) || 0
            : Number(
                product.priceNormalWash
            ) || 0;


} else if (service === "كوي") {

    price =
        urgency === "مستعجل"
            ? Number(
                product.priceUrgentIron
            ) || 0
            : Number(
                product.priceNormalIron
            ) || 0;


} else if (service === "غسيل + كوي") {

    price =
        urgency === "مستعجل"
            ? Number(
                product.priceUrgentWashIron
            ) || 0
            : Number(
                product.priceWashIron
            ) || 0;


} else {

    price =
        Number(product.price) || 0;
}


if (
    !Number.isFinite(price) ||
    price <= 0
) {

    alert(
        "❌ لم يتم تحديد سعر لهذه الخدمة"
    );

    return;
}


// =========================
// التحقق من مخزون السجاد
// =========================

if (isCarpet) {

    const stock =
        Number(product.qty);


    if (
        Number.isFinite(stock) &&
        stock >= 0 &&
        area > stock
    ) {

        alert(
            `❌ المساحة المطلوبة أكبر من المخزون\n` +
            `المتوفر: ${stock} م²`
        );

        return;
    }
}


// =========================
// البحث عن منتج موجود
// =========================

let existingItem = null;


if (isCarpet) {

    existingItem =
        cart.find(item =>
            item.id === product.id &&
            item.serviceType === service &&
            item.urgency === urgency &&
            item.shemaghStyle === shemaghStyle &&
            item.deliveryType === selectedDelivery &&
            Number(item.length) === Number(length) &&
            Number(item.width) === Number(width)
        );


} else {

    existingItem =
        cart.find(item =>
            item.id === product.id &&
            item.serviceType === service &&
            item.urgency === urgency &&
            item.shemaghStyle === shemaghStyle &&
            item.deliveryType === selectedDelivery
        );
}


// =========================
// تحديث المنتج الموجود
// =========================

if (existingItem) {

    if (isCarpet) {

        const newArea =
            Number(existingItem.area || 0) +
            Number(area);


        existingItem.area =
            Number(
                newArea.toFixed(4)
            );


        existingItem.qty =
            existingItem.area;


    } else {

        existingItem.qty =
            Number(existingItem.qty || 0) +
            quantity;
    }

} else {

    // =========================
    // إضافة منتج جديد
    // =========================

    cart.push({

        id: product.id,

        name: product.name,

        serviceType: service,

        shemaghStyle:
            shemaghStyle,

        urgency: urgency,

        deliveryType:
            selectedDelivery,

        price:
            Number(
                price.toFixed(2)
            ),

        qty:
            isCarpet
                ? Number(
                    area.toFixed(4)
                )
                : quantity,

        length:
            isCarpet
                ? Number(
                    length.toFixed(2)
                )
                : null,

        width:
            isCarpet
                ? Number(
                    width.toFixed(2)
                )
                : null,

        area:
            isCarpet
                ? Number(
                    area.toFixed(4)
                )
                : null,

        unit:
            isCarpet
                ? "م²"
                : "قطعة"
    });
}


// =========================
// تحديث السلة والإجمالي
// =========================

updateCart();

calculateTotal();


// =========================
// إعادة ضبط الكمية
// =========================

const quantityElement =
    document.getElementById(
        "quantityInput"
    );


if (quantityElement) {
    quantityElement.value = 1;
}


// =========================
// إعادة ضبط مقاسات السجاد
// =========================

const lengthElement =
    document.getElementById(
        "carpetLength"
    );


const widthElement =
    document.getElementById(
        "carpetWidth"
    );


const areaElement =
    document.getElementById(
        "carpetArea"
    );


if (lengthElement) {
    lengthElement.value = "";
}


if (widthElement) {
    widthElement.value = "";
}


if (areaElement) {
    areaElement.textContent = "0";
}


// =========================
// إعادة ضبط رسوم التوصيل
// =========================
// لا نصفر deliveryFee هنا
// لأن الرسوم أصبحت محفوظة للطلب

if (deliveryInput) {
    deliveryInput.value = "";
}


if (deliveryRow) {
    deliveryRow.style.display = "none";
}


// =========================
// إغلاق النافذة
// =========================

closeServiceModal();


}

function updateDeliveryUI() {
    const deliveryElement = document.querySelector(
        'input[name="deliveryType"]:checked'
    );

    const deliveryRow = document.getElementById("deliveryFeeRow");
    const deliveryInput = document.getElementById("deliveryFeeInput");

    if (!deliveryRow) {
        console.error("لم يتم العثور على deliveryFeeRow");
        return;
    }

    if (!deliveryElement) {
        deliveryRow.style.display = "none";

        if (deliveryInput) {
            deliveryInput.value = "";
        }

        calculateTotal();
        return;
    }

    if (deliveryElement.value === "توصيل") {

        // إظهار حقل رسوم التوصيل
        deliveryRow.style.display = "flex";

        if (deliveryInput) {

            const defaultFee =
                Number(settings?.deliveryFee) || 0;

            if (
                deliveryInput.value === "" ||
                Number(deliveryInput.value) === 0
            ) {
                deliveryInput.value = defaultFee;
            }

            deliveryInput.oninput = calculateTotal;
        }

    } else {

        // استلام = إخفاء الرسوم وتصفيتها
        deliveryRow.style.display = "none";

        if (deliveryInput) {
            deliveryInput.value = "";
        }
    }

    calculateTotal();
}

function confirmAddToCart() {

    const product = selectedProduct;

    if (!product) {
        alert("❌ اختر المنتج أولاً");
        return;
    }

    // =========================
    // نوع الخدمة
    // =========================

    const serviceElement =
        document.querySelector(
            'input[name="serviceType"]:checked'
        );

    if (!serviceElement) {
        alert("❌ اختر نوع الخدمة");
        return;
    }

    const service =
        serviceElement.value;


    // =========================
    // سرعة الخدمة
    // =========================

    const urgencyElement =
        document.querySelector(
            'input[name="urgencyType"]:checked'
        );

    if (!urgencyElement) {
        alert("❌ اختر سرعة الخدمة");
        return;
    }

    const urgency =
        urgencyElement.value;


    // =========================
    // نوع المنتج
    // =========================

    const isCarpet =
        product.name === "سجاد" ||
        product.name === "سجادة";


    // =========================
    // التوصيل للمنتج الحالي
    // =========================

    const deliveryElement =
        document.querySelector(
            'input[name="deliveryType"]:checked'
        );

    const selectedDelivery =
        deliveryElement
            ? deliveryElement.value
            : "استلام";


    const deliveryRow =
        document.getElementById(
            "deliveryFeeRow"
        );

    const deliveryInput =
        document.getElementById(
            "deliveryFeeInput"
        );


    let currentDeliveryFee = 0;


   if (selectedDelivery === "توصيل") {

    if (deliveryRow) {
        deliveryRow.style.display = "flex";
    }

    const enteredFee = Number(
        String(deliveryInput?.value || "")
            .replace(",", ".")
            .trim()
    );

    if (
        Number.isFinite(enteredFee) &&
        enteredFee >= 0
    ) {
        currentDeliveryFee = enteredFee;

        // حفظ رسوم التوصيل للفاتورة
        deliveryFee = enteredFee;
    }

} else {

    // استلام لا يلغي رسوم التوصيل الموجودة
    if (deliveryRow) {
        deliveryRow.style.display = "none";
    }

    currentDeliveryFee = deliveryFee;
}



    // =========================
    // الكمية
    // =========================

    let quantity = 1;
    let length = null;
    let width = null;
    let area = null;


    if (isCarpet) {

        const lengthElement =
            document.getElementById(
                "carpetLength"
            );

        const widthElement =
            document.getElementById(
                "carpetWidth"
            );


        if (!lengthElement || !widthElement) {

            alert(
                "❌ خانات الطول والعرض غير موجودة"
            );

            return;
        }


        length =
            Number(
                String(lengthElement.value)
                    .replace(",", ".")
                    .trim()
            );


        width =
            Number(
                String(widthElement.value)
                    .replace(",", ".")
                    .trim()
            );


        if (
            !Number.isFinite(length) ||
            length <= 0
        ) {

            alert(
                "❌ أدخل طول السجادة بشكل صحيح"
            );

            lengthElement.focus();

            return;
        }


        if (
            !Number.isFinite(width) ||
            width <= 0
        ) {

            alert(
                "❌ أدخل عرض السجادة بشكل صحيح"
            );

            widthElement.focus();

            return;
        }


        area =
            length * width;


        quantity =
            Number(
                area.toFixed(4)
            );


        const areaElement =
            document.getElementById(
                "carpetArea"
            );


        if (areaElement) {

            areaElement.textContent =
                area
                    .toFixed(2)
                    .replace(/\.?0+$/, '');
        }


    } else {

        const quantityElement =
            document.getElementById(
                "quantityInput"
            );


        if (!quantityElement) {

            alert(
                "❌ خانة الكمية غير موجودة"
            );

            return;
        }


        quantity =
            parseInt(
                quantityElement.value,
                10
            );


        if (
            !Number.isFinite(quantity) ||
            quantity <= 0
        ) {

            alert(
                "❌ الكمية يجب أن تكون أكبر من صفر"
            );

            quantityElement.focus();

            return;
        }
    }


    // =========================
    // شماغ / غترة
    // =========================

    const isShemagh =
        product.name === "شماغ" ||
        product.name === "غترة";


    let shemaghStyle = "";


    if (isShemagh) {

        const starchElement =
            document.querySelector(
                'input[name="starchStyle"]:checked'
            );

        const shapeElement =
            document.querySelector(
                'input[name="shemaghShape"]:checked'
            );


        if (!starchElement) {

            alert(
                "❌ اختر مستوى النشا"
            );

            return;
        }


        if (!shapeElement) {

            alert(
                "❌ اختر طريقة الشكل"
            );

            return;
        }


        shemaghStyle =
            starchElement.value +
            " + " +
            shapeElement.value;
    }


    // =========================
    // السعر
    // =========================

    let price = 0;


    if (isCarpet) {

        price =
            Number(product.price) || 0;


    } else if (service === "غسيل") {

        price =
            urgency === "مستعجل"
                ? Number(product.priceUrgentWash) || 0
                : Number(product.priceNormalWash) || 0;


    } else if (service === "كوي") {

        price =
            urgency === "مستعجل"
                ? Number(product.priceUrgentIron) || 0
                : Number(product.priceNormalIron) || 0;


    } else if (service === "غسيل + كوي") {

        price =
            urgency === "مستعجل"
                ? Number(product.priceUrgentWashIron) || 0
                : Number(product.priceWashIron) || 0;


    } else {

        price =
            Number(product.price) || 0;
    }


    if (
        !Number.isFinite(price) ||
        price <= 0
    ) {

        alert(
            "❌ لم يتم تحديد سعر لهذه الخدمة"
        );

        return;
    }


    // =========================
    // مخزون السجاد
    // =========================

    if (isCarpet) {

        const stock =
            Number(product.qty);


        if (
            Number.isFinite(stock) &&
            stock >= 0 &&
            area > stock
        ) {

            alert(
                `❌ المساحة المطلوبة أكبر من المخزون\n` +
                `المتوفر: ${stock} م²`
            );

            return;
        }
    }


    // =========================
    // البحث عن نفس المنتج
    // =========================

    let existingItem = null;


    if (isCarpet) {

        existingItem =
            cart.find(item =>

                item.id === product.id &&

                item.serviceType === service &&

                item.urgency === urgency &&

                item.shemaghStyle === shemaghStyle &&

                item.deliveryType === selectedDelivery &&

                Number(item.length) === Number(length) &&

                Number(item.width) === Number(width)
            );

    } else {

        existingItem =
            cart.find(item =>

                item.id === product.id &&

                item.serviceType === service &&

                item.urgency === urgency &&

                item.shemaghStyle === shemaghStyle &&

                item.deliveryType === selectedDelivery
            );
    }


    // =========================
    // تحديث الموجود
    // =========================

    if (existingItem) {

        if (isCarpet) {

            const newArea =
                Number(existingItem.area || 0) +
                Number(area);


            existingItem.area =
                Number(
                    newArea.toFixed(4)
                );


            existingItem.qty =
                existingItem.area;

        } else {

            existingItem.qty =
                Number(existingItem.qty || 0) +
                quantity;
        }


        // تحديث توصيل هذا المنتج فقط
        if (selectedDelivery === "توصيل") {

            existingItem.deliveryFee =
                Number(currentDeliveryFee || 0);

        } else {

            existingItem.deliveryFee = 0;
        }


    } else {

        // =========================
        // إضافة منتج جديد
        // =========================

        cart.push({

            id: product.id,

            name: product.name,

            serviceType: service,

            shemaghStyle: shemaghStyle,

            urgency: urgency,

            deliveryType: selectedDelivery,

            price:
                Number(
                    price.toFixed(2)
                ),

            qty:
                isCarpet
                    ? Number(
                        area.toFixed(4)
                    )
                    : quantity,

            length:
                isCarpet
                    ? Number(
                        length.toFixed(2)
                    )
                    : null,

            width:
                isCarpet
                    ? Number(
                        width.toFixed(2)
                    )
                    : null,

            area:
                isCarpet
                    ? Number(
                        area.toFixed(4)
                    )
                    : null,

            unit:
                isCarpet
                    ? "م²"
                    : "قطعة"
        });
    }


    // =========================
    // تحديث العرض والحساب
    // =========================

    updateCart();

    calculateTotal();


    // =========================
    // تصفير الحقول للمنتج القادم
    // =========================

    const quantityElement =
        document.getElementById(
            "quantityInput"
        );

    if (quantityElement) {
        quantityElement.value = 1;
    }


    const lengthElement =
        document.getElementById(
            "carpetLength"
        );

    const widthElement =
        document.getElementById(
            "carpetWidth"
        );

    const areaElement =
        document.getElementById(
            "carpetArea"
        );


    if (lengthElement) {
        lengthElement.value = "";
    }

    if (widthElement) {
        widthElement.value = "";
    }

    if (areaElement) {
        areaElement.textContent = "0";
    }

    

    closeServiceModal();
}



 function closeServiceModal() {
   document.getElementById('serviceModal').classList.remove('active');
    selectedProduct = null;
}




function searchInventory() {
    const query = document
        .getElementById('inventorySearch')
        .value
        .toLowerCase();
    
    const rows = document.querySelectorAll('#inventoryTable tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        
        row.style.display =
            text.includes(query) ? '' : 'none';
    });
}

//=====دالة عرض الفواتير ======

function viewCustomerInvoices(customerId) {
    
    const customer = customers.find(c => c.id == customerId);
    
    if (!customer) return;
    
    
    //
    const searchInput = document.getElementById("invoiceSearchInput");
    const search = searchInput ? searchInput.value.trim() : "";
    
    
    const customerInvoices = invoices.filter(inv =>
        inv.customerId == customerId &&
        (
            search === "" ||
            String(inv.invoiceNo).includes(search)
        )
    );
    
    
    const subscription = subscriptions.find(sub =>
        sub.customerId == customerId &&
        sub.status === "نشط"
    );
    
    
    let subscriptionHtml = "";
    
    if (subscription) {
        
        subscriptionHtml = `
        <div style="
            background:#ecfdf5;
            border:2px solid #22c55e;
            padding:15px;
            border-radius:12px;
            margin:15px 0;
        ">

            <h3 style="color:#16a34a">
                ⭐ اشتراك العميل
            </h3>

            <p>
                <b>سعر الاشتراك:</b>
                ${subscription.price.toFixed(2)}
                ${settings.currency}
            </p>

            <p>
                <b>المتبقي:</b>
                ${subscription.remaining.toFixed(2)}
                ${settings.currency}
            </p>

        </div>
        `;
        
    } else {
        
        subscriptionHtml = `
        <div style="
            background:#fef2f2;
            color:#dc2626;
            padding:12px;
            border-radius:10px;
        ">
            لا يوجد اشتراك نشط
        </div>
        `;
    }
    
    
    
    let html = `

    <div style="
        background:#f8fafc;
        padding:15px;
        border-radius:12px;
        margin-bottom:15px;
    ">

        <h2>
            👤 بيانات العميل
        </h2>

        <p>
            <b>الاسم:</b>
            ${customer.name}
        </p>

        <p>
            <b>الهاتف:</b>
            ${customer.phone}
        </p>

        <p style="
            color:#f59e0b;
            font-size:18px;
            font-weight:bold;
        ">
            ⭐ رصيد النقاط:
            ${customer.points || 0} نقطة
        </p>

        ${subscriptionHtml}

    </div>

    `;
    
    
    html += `
    <div style="margin:15px 0;">
        <input
            id="invoiceSearchInput"
            type="text"
            value="${search}"
            placeholder="🔍 ابحث برقم الفاتورة..."
            oninput="filterCustomerInvoices(${customerId})"
            style="
                width:100%;
                padding:10px;
                border-radius:8px;
            "
        >
    </div>
    `;
    
    
    
    if (customerInvoices.length === 0) {
        
        html += `
        <div style="
            text-align:center;
            padding:20px;
        ">
            لا توجد فواتير لهذا العميل
        </div>
        `;
        
    } else {
        
        html += customerInvoices.map(inv => `

        <div class="customer-invoice-card">

            <h3 style="color:#0ea5e9">
                🧾 فاتورة رقم ${inv.invoiceNo}
            </h3>


            <p>
                📅 التاريخ:
                ${new Date(inv.date)
                .toLocaleDateString('ar-SA')}
            </p>


            ${
                inv.items && inv.items.length ?

                `
                <table style="
                    width:100%;
                    border-collapse:collapse;
                    margin-top:10px;
                ">

                <tr style="
                    background:#14b8a6;
                    color:white;
                ">
                    <th>الخدمة</th>
                    <th>الكمية</th>
                    <th>السعر</th>
                </tr>


                ${inv.items.map(item => `

                <tr>
                    <td>${item.name}</td>
                    <td>${item.qty}</td>
                    <td>
                        ${item.price}
                        ${settings.currency}
                    </td>
                </tr>

                `).join("")}

                </table>
                `
                :
                ""
            }


            ${
            inv.subscriptionDiscount > 0 ?

            `
            <div style="
                background:#ecfdf5;
                border:1px solid #22c55e;
                padding:10px;
                border-radius:10px;
            ">

            <p style="color:#16a34a;font-weight:bold">
                ⭐ تم الخصم من الاشتراك
            </p>

            <p>
                المبلغ المخصوم من الاشتراك:
                <b>
                ${inv.subscriptionDiscount}
                ${settings.currency}
                </b>
            </p>

            </div>
            `
            :
            ""
            }


            <hr>


            <h3 style="color:#16a34a;">
                الإجمالي:
                ${inv.total}
                ${settings.currency}
            </h3>


            <p style="
                color:#f59e0b;
                font-weight:bold;
            ">
                ⭐ النقاط المكتسبة:
                +${inv.pointsEarned || 0}
            </p>


        </div>

        `).join("");
        
    }
    
    
    
    document.getElementById(
        "customerInvoicesList"
    ).innerHTML = html;
    
    
    document.getElementById(
        "customerInvoicesModal"
    ).classList.add("active");
    
}
function searchCustomerInvoices(customerId) {
    
    const input = document.getElementById("invoiceSearchInput");
    
    if (!input) return;
    
    
    const search = input.value.trim();
    
    
    const customerInvoices = invoices.filter(inv =>
        inv.customerId == customerId &&
        (
            String(inv.invoiceNo).includes(search) ||
            String(inv.total).includes(search)
        )
    );
    
    
    let html = "";
    
    
    if (customerInvoices.length === 0) {
        
        html = `
        <div style="
            text-align:center;
            padding:20px;
            color:#dc2626;
        ">
            لا توجد فاتورة بهذا الرقم
        </div>
        `;
        
    } else {
        
        html = customerInvoices.map(inv => `    

        <div class="customer-invoice-card">

            <h3 style="color:#0ea5e9">
                🧾 فاتورة رقم ${inv.invoiceNo}
            </h3>


            <p>
                📅 التاريخ:
                ${new Date(inv.date)
                .toLocaleDateString('ar-SA')}
            </p>


            <h3 style="color:#16a34a">
                الإجمالي:
                ${inv.total}
                ${settings.currency}
            </h3>


        </div>

        `).join("");
        
    }
    
    
    const results = document.getElementById("invoiceResults");
    
    if (results) {
        results.innerHTML = html;
    }
    
}

function closeCustomerInvoices() {
    
    document.getElementById(
        'customerInvoicesModal'
    ).style.display = 'none';
}
function closeCustomerInvoices() {
    document.getElementById('customerInvoicesModal')
        .classList.remove('active');
}


// ================== AUTO LANGUAGE FIXER ==================
function autoTranslateDOM() {
    
    const map = {
        ar: {
            "Dashboard": "لوحة التحكم",
            "Customers": "العملاء",
            "POS": "نقطة البيع",
            "Invoices": "الفواتير",
            "Inventory": "المخزون",
            "Reports": "التقارير",
            "Settings": "الإعدادات",
            "Delete": "حذف",
            "Edit": "تعديل",
            "Save": "حفظ",
            "Cancel": "إلغاء",
            "Cart is empty": "السلة فارغة",
            "Are you sure?": "هل أنت متأكد؟",
            "No data": "لا توجد بيانات",
            "Total": "الإجمالي",
            "Customer": "العميل",
            "Phone": "الهاتف",
            "customerWallet":"مراقبة الدفعات المستلمة 💰",
    
       
        },
        en: {
            "لوحة التحكم": "Dashboard",
            "العملاء": "Customers",
            "نقطة البيع": "POS",
            "الفواتير": "Invoices",
            "المخزون": "Inventory",
            "التقارير": "Reports",
            "الإعدادات": "Settings",
            "حذف": "Delete",
            "تعديل": "Edit",
            "حفظ": "Save",
            "إلغاء": "Cancel",
            "السلة فارغة": "Cart is empty",
            "هل أنت متأكد؟": "Are you sure?",
            "لا توجد بيانات": "No data",
            "الإجمالي": "Total",
            "العميل": "Customer",
            "الهاتف": "Phone",
            "مراقبة الدفعات المستلمة":"customerWallet",

         
        }
    };
    
    const dict = map[currentLanguage] || {};
    
    document.querySelectorAll("body *").forEach(el => {
        
        
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") return;
        
        
        if (el.children.length === 0) {
            
            const text = el.textContent.trim();
            
            if (dict[text]) {
                el.textContent = dict[text];
            }
        }
    });
}

function updateInvoiceStatus(invoiceNo, status) {
    
    const invoice = invoices.find(inv => inv.invoiceNo === invoiceNo);
    if (!invoice) return;
    
    invoice.status = status;
    saveData();
    updateInvoicesTable();
    
    
    if (status !== 'ready') return;
    
    let phone = invoice.customerPhone || '';
    
    if (!phone) {
        alert('رقم العميل غير موجود');
        return;
    }
    
    
    const confirmSend = confirm(
        `هل تريد إرسال إشعار الجاهزية؟\n\n` +
        `العميل: ${invoice.customerName}\n` +
        `الفاتورة: ${invoice.invoiceNo}`
    );
    
    if (!confirmSend) return;
    
    phone = phone.replace(/\D/g, '');
    
    if (phone.startsWith('05')) {
        phone = '966' + phone.substring(1);
    } else if (phone.startsWith('5')) {
        phone = '966' + phone;
    }
    
    let extraMessage = "";

if (invoice.subscriptionId && invoice.subscriptionDiscount > 0 && invoice.pointsUsed > 0) {
    extraMessage = `\n\n🎟️ تم الاستفادة من خصم الاشتراك واستخدام ${invoice.pointsUsed} نقطة من رصيدكم.`;
}
else if (invoice.subscriptionId && invoice.subscriptionDiscount > 0) {
    extraMessage = `\n\n🎟️ تم الاستفادة من خصم الاشتراك الخاص بكم.`;
}
else if (invoice.pointsUsed > 0) {
    extraMessage = `\n\n⭐ تم استخدام ${invoice.pointsUsed} نقطة من رصيدكم.`;
}

const message =
    `السلام عليكم 🌷

عميلنا العزيز ${invoice.customerName}

طلبكم رقم ${invoice.invoiceNo}
أصبح جاهزًا للاستلام 🧺✅${extraMessage}

شكرًا لاختياركم لنا، ونسعد بخدمتكم دائمًا 🤍`;

const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

window.open(url, '_blank');
}



function updateDelivery() {

    const typeElement =
        document.getElementById("deliveryTypeSelect");

    const deliveryRow =
        document.getElementById("deliveryFeeRow");

    const deliveryInput =
        document.getElementById("deliveryFeeInput");


    if (!typeElement) {
        console.warn(
            "deliveryTypeSelect غير موجود"
        );
        return;
    }


    const type =
        typeElement.value;

    deliveryType =
        type;

    if (type === "توصيل") {

        if (deliveryRow) {
            deliveryRow.style.display = "flex";
        }


        if (deliveryInput) {

            deliveryFee =
                Number(
                    String(
                        deliveryInput.value || 0
                    ).replace(",", ".")
                ) || 0;
        }

    }

    else {

        if (deliveryRow) {

            deliveryRow.style.display =
                "none";
        }


        deliveryFee = 0;


        if (deliveryInput) {

    const hasExistingDelivery =
        cart.some(
            item => item.deliveryType === "توصيل"
        );

    if (!hasExistingDelivery) {
        deliveryInput.value = 0;
    }
}

    }

    if (
        typeof calculateTotal ===
        "function"
    ) {

        calculateTotal();
    }
}


function searchProducts() {
    const search = document.getElementById("searchProduct").value.toLowerCase();
    
    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(search)
    );
    
    displayProducts(filtered);
}


function updateSubscriptionInfo(customerId) {
    
    const box = document.getElementById("subscriptionInfo");
    
    const sub = getActiveSubscription(customerId);
    
    if (!sub) {
        box.style.display = "none";
        return;
    }
    
    box.style.display = "block";
    
    box.innerHTML = `
    <div style="
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:10px;
        font-size:13px;
    ">
        <div>
            💳 اشتراك:
            <strong>${Number(sub.remaining).toFixed(2)} ${settings.currency}</strong>
        </div>

        <label style="cursor:pointer;white-space:nowrap;">
            <input 
                type="checkbox"
                id="useSubscription"
                onchange="calculateTotal()"
            >
            استخدام
        </label>
    </div>
`;
}

function searchProducts() {
    const keyword = document
        .getElementById('searchProduct')
        .value
        .trim()
        .toLowerCase();
    
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(keyword)
    );
    
    renderProducts(filteredProducts);
}

function searchArchive() {
    
    const text = document.getElementById("archiveSearch")
        .value
        .toLowerCase();
    
    
    const tbody = document.getElementById("archiveTable");
    
    
    const rows = archive
        .map((item, index) => {
            
            return {
                ...item,
                archiveIndex: index
            };
            
        })
        .filter(item => {
            
            const name = item.data.name || item.data.customerName || "";
            
            return name.toLowerCase().includes(text);
            
        });
    
    
    
    tbody.innerHTML = rows.map(item => `

        <tr>

           <td>${item.data.name || item.data.customerName || ''}</td>
            <td>${item.type}</td>

            <td>${item.date}</td>

            <td>

                <button class="btn btn-small"
                onclick="restoreArchive(${item.archiveIndex})">
                    ♻️ استرجاع
                </button>

            </td>

        </tr>

    `).join("");
    
}

// عرض الأرشيف
function updateArchiveTable() {
    
    const tbody = document.getElementById("archiveTable");
    
    if (!tbody) return;
    
    tbody.innerHTML = archive.map((item, index) => `

        <tr>

<td>${item.data.name || item.data.customerName || ''}</td>

            <td>${item.type}</td>

            <td>${item.date}</td>

            <td>

                <button class="btn btn-small"
                onclick="restoreArchive(${index})">
                    ♻️ استرجاع
                </button>
            </td>

        </tr>

    `).join("");
    
}


function restoreArchive(index) {
    
    const item = archive[index];
    
    if (!item) return;
    
    
    if (!confirm("استرجاع العنصر؟")) return;
    
    

    if (item.type === "منتج") {
        
        products.push(item.data);
        
        updateInventoryTable();
    }
    
    

    if (item.type === "عميل") {
        
        customers.push(item.data);
        
        updateCustomersTable();
    }
    
    

if (item.type === "فاتورة") {
    
    const invoice = item.data;
    
    invoices.push(invoice);
    
    
    if (invoice.subscriptionId && invoice.subscriptionDiscount > 0) {
        
        const sub = subscriptions.find(
            s => s.id === invoice.subscriptionId
        );
        
        if (sub) {
            
            sub.remaining =
                Number(sub.remaining || 0) -
                Number(invoice.subscriptionDiscount || 0);
            
            if (sub.remaining <= 0) {
                sub.status = "منتهي";
            } else {
                sub.status = "نشط";
            }
            
            localStorage.setItem(
                "subscriptions",
                JSON.stringify(subscriptions)
            );
        }
    }
    
    updateInvoicesTable();
}
    

if (item.type === "اشتراك") {
    
    subscriptions.push(item.data);
    
    renderSubscriptions();
}
    
    

    archive.splice(index, 1);
    
    
    localStorage.setItem(
        'laundry_archive',
        JSON.stringify(archive)
    );
    
    
    saveData();
    updateArchiveTable();
    
    
    alert("تم الاسترجاع بنجاح");
}


function deleteCustomer(index) {
    
    const customer = customers[index];
    
    if (!customer) return;
    
    
    if (!confirm("نقل العميل إلى الأرشيف؟")) return;
    
    
    archive.push({
        type: "عميل",
        data: customer,
        date: new Date().toLocaleString()
    });
    
    
    customers.splice(index, 1);
    
    
    saveData();
    updateCustomersTable();
    updateArchiveTable();
    
    
    alert("تم نقل العميل للأرشيف");
}



function importOldData() {

    const fileInput =
        document.getElementById("oldSystemFile");

    const file =
        fileInput?.files?.[0];

    if (!file) {
        alert("اختر ملف Excel أولاً");
        return;
    }

    if (typeof XLSX === "undefined") {
        alert("مكتبة Excel غير محملة");
        return;
    }

    const reader =
        new FileReader();

    reader.onload = function (e) {

        try {

            const data =
                new Uint8Array(
                    e.target.result
                );

            const workbook =
                XLSX.read(data, {
                    type: "array",
                    cellDates: true
                });

            console.log(
                "📁 الأوراق:",
                workbook.SheetNames
            );

            if (!Array.isArray(customers)) {
                customers = [];
            }


            let added = 0;

            workbook.SheetNames.forEach(
                sheetName => {

                    const sheet =
                        workbook.Sheets[
                            sheetName
                        ];

                    const rows =
                        XLSX.utils.sheet_to_json(
                            sheet,
                            {
                                defval: ""
                            }
                        );


                    console.log(
                        "📄 الورقة:",
                        sheetName,
                        "عدد الصفوف:",
                        rows.length
                    );


                    rows.forEach(row => {

                        const keys =
                            Object.keys(row);

                        const name =
                            getExcelValue(
                                row,
                                [
                                    "اسم العميل",
                                    "العميل",
                                    "اسم",
                                    "name",
                                    "customer",
                                    "customer name"
                                ]
                            );

                        const phone =
                            getExcelValue(
                                row,
                                [
                                    "رقم الهاتف",
                                    "رقم الجوال",
                                    "الهاتف",
                                    "الجوال",
                                    "phone",
                                    "mobile"
                                ]
                            );

                        if (
                            !name &&
                            !phone
                        ) {
                            return;
                        }

                        const normalizedPhone =
                            String(
                                phone || ""
                            ).trim();


                        const normalizedName =
                            normalizeExcelText(
                                name
                            );


                        const exists =
                            customers.some(
                                customer => {

                                    const oldPhone =
                                        String(
                                            customer.phone || ""
                                        ).trim();


                                    if (
                                        normalizedPhone &&
                                        oldPhone
                                    ) {

                                        return (
                                            normalizedPhone ===
                                            oldPhone
                                        );

                                    }


                                    return (
                                        normalizeExcelText(
                                            customer.name
                                        ) ===
                                        normalizedName
                                    );

                                }
                            );


                        if (exists) {
                            return;
                        }


                        customers.push({

                            id:
                                Date.now() +
                                Math.floor(
                                    Math.random() *
                                    100000
                                ),

                            name:
                                name ||
                                "عميل",

                            phone:
                                normalizedPhone,

                            email:
                                getExcelValue(
                                    row,
                                    [
                                        "البريد",
                                        "البريد الإلكتروني",
                                        "email"
                                    ]
                                ),

                            address:
                                getExcelValue(
                                    row,
                                    [
                                        "العنوان",
                                        "address"
                                    ]
                                ),

                            points:
                                Number(
                                    getExcelValue(
                                        row,
                                        [
                                            "النقاط",
                                            "points"
                                        ]
                                    ) || 0
                                ),

                            invoices: 0,

                            createdAt:
                                new Date()
                                    .toISOString()

                        });


                        added++;

                    });

                }
            );

            localStorage.setItem(
                "customers",
                JSON.stringify(
                    customers
                )
            );

            localStorage.setItem(
                "laundry_customers",
                JSON.stringify(
                    customers
                )
            );

            if (
                typeof updateCustomersTable ===
                "function"
            ) {

                updateCustomersTable();

            }


            if (
                typeof renderCustomers ===
                "function"
            ) {

                renderCustomers();

            }


            if (
                typeof updateCustomerSelect ===
                "function"
            ) {

                updateCustomerSelect();

            }

            if (
                typeof saveData ===
                "function"
            ) {

                saveData();

            }


            alert(
                "✅ تم نقل العملاء بنجاح\n\n" +
                "👥 العملاء الجدد: " +
                added +
                "\n" +
                "📊 إجمالي العملاء: " +
                customers.length
            );


            console.log(
                "✅ تم الاستيراد:",
                {
                    added: added,
                    total: customers.length
                }
            );


        } catch (error) {

            console.error(
                "❌ Import Error:",
                error
            );

            alert(
                "❌ حدث خطأ أثناء نقل البيانات:\n\n" +
                error.message
            );

        }

    };


    reader.onerror = function () {

        alert(
            "❌ تعذر قراءة ملف Excel"
        );

    };


    reader.readAsArrayBuffer(
        file
    );

}




function getExcelValue(
    row,
    names
) {

    const keys =
        Object.keys(row);


    for (
        const wanted of names
    ) {

        const wantedNormalized =
            normalizeExcelText(
                wanted
            );


        const foundKey =
            keys.find(
                key =>
                    normalizeExcelText(
                        key
                    ) ===
                    wantedNormalized
            );


        if (
            foundKey !== undefined
        ) {

            return row[
                foundKey
            ];

        }

    }


    return "";
}



function normalizeExcelText(
    value
) {

    return String(
        value ?? ""
    )
        .trim()
        .toLowerCase()
        .replace(
            /[إأآ]/g,
            "ا"
        )
        .replace(
            /ة/g,
            "ه"
        )
        .replace(
            /\s+/g,
            " "
        );

}

// حركة محفظة العميل
function addWalletTransaction(customerId, amount, type, note, invoiceNo = null) {

    const customer = customers.find(
        c => c.id === customerId
    );


    if (!customer) {
        console.log("العميل غير موجود");
        return;
    }



    let balanceChange = 0;
    


    if (
        type === "رصيد عميل" ||
        type === "إضافة رصيد" ||
        type === "دفع زائد"
    ) {

        balanceChange = Number(amount);

    }

    if (
        type === "استخدام رصيد" ||
        type === "خصم من الرصيد"
    ) {

        balanceChange = -Math.abs(Number(amount));

    }

    customer.walletBalance =
        Number(customer.walletBalance || 0)
        +
        balanceChange;


    if (customer.walletBalance < 0) {

        customer.walletBalance = 0;

    }


    walletTransactions.push({

        id: Date.now(),
        customerId: customerId,
        invoiceNo: invoiceNo,
        type: type,
        amount: Number(amount),
        balance: Number(customer.walletBalance),
        note: note || "",
        date: new Date().toISOString()

    });


    localStorage.setItem(
        "walletTransactions",
        JSON.stringify(walletTransactions)
    );


    localStorage.setItem(
        "laundry_customers",
        JSON.stringify(customers)
    );

}


function receivePayment(invoiceNo) {
    
    const invoice = invoices.find(
        inv => inv.invoiceNo === invoiceNo
    );
    
    if (!invoice) {
        alert("الفاتورة غير موجودة");
        return;
    }
    
    const paidBefore = Number(invoice.paid || 0);
    const total = Number(invoice.total || 0);
    const remaining = total - paidBefore;
    
    if (remaining <= 0) {
        alert("هذه الفاتورة مدفوعة بالكامل");
        return;
    }
    
    
    window.currentPaymentInvoice = invoice;
    
    window.currentPaymentRemaining = remaining;
    
    openPaymentMethodModal();
}





//// فتح نافذة طريقة الدفع
function openPaymentMethodModal() {
    
    const invoice =
        window.currentPaymentInvoice;
    
    const remaining =
        Number(window.currentPaymentRemaining || 0);
    
    if (!invoice) {
        console.warn("⚠️ لا توجد فاتورة حالية");
        return;
    }
    
    let modal =
        document.getElementById("paymentMethodModal");
    
    
    
    if (!modal) {
        
        modal =
            document.createElement("div");
        
        modal.id =
            "paymentMethodModal";
        
        document.body.appendChild(modal);
    }
    
    
    modal.innerHTML = `

        <div class="payment-modal-box">

            <h2>
                💳 طريقة الدفع
            </h2>


            <div class="payment-invoice-info">

                <div>
                    رقم الفاتورة:
                    <strong>
                        ${invoice.invoiceNo}
                    </strong>
                </div>


                <div>
                    المبلغ المتبقي:
                    <strong>
                        ${remaining.toFixed(2)}
                        ${settings.currency}
                    </strong>
                </div>

            </div>


            <div class="payment-methods">


                <!-- الاشتراك -->

                <button
                    class="payment-method subscription"
                    onclick="selectPaymentMethod('subscription')">

                    <span>
                        🎫
                    </span>

                    <strong>
                        الدفع بالاشتراك
                    </strong>

                    <small>
                        خصم من رصيد الاشتراك
                    </small>

                </button>


                <!-- دفع كامل -->

                <button
                    class="payment-method full"
                    onclick="selectPaymentMethod('full')">

                    <span>
                        💰
                    </span>

                    <strong>
                        دفع كامل
                    </strong>

                    <small>
                        شبكة أو كاش
                    </small>

                </button>


                <!-- دفع جزئي -->

                <button
                    class="payment-method partial"
                    onclick="selectPaymentMethod('partial')">

                    <span>
                        💳💵
                    </span>

                    <strong>
                        دفع جزئي
                    </strong>

                    <small>
                        شبكة + كاش
                    </small>

                </button>


            </div>


            <button
                class="payment-close"
                onclick="closePaymentMethodModal()">

                إلغاء

            </button>

        </div>

    `;
    
    modal.style.display =
        "flex";
    
    
    console.log(
        "💳 نافذة الدفع:",
        invoice.invoiceNo,
        "المتبقي:",
        remaining
    );
}


////// اغلاق نافذة طريقة الدفع 
function closePaymentMethodModal(clearPayment = true) {
    
    const modal =
        document.getElementById(
            "paymentMethodModal"
        );
    
    if (modal) {
        modal.style.display = "none";
    }
    
    if (clearPayment) {
        
        window.currentPaymentInvoice = null;
        window.currentPaymentRemaining = null;
        
    }
}


///// نافذة اختيار طريقة الدفع 
function selectPaymentMethod(method) {
    
    const invoice =
        window.currentPaymentInvoice;
    
    const remaining =
        Number(window.currentPaymentRemaining);
    
    if (!invoice || remaining <= 0) {
        alert("❌ الفاتورة غير موجودة");
        return;
    }
    
    if (method === "subscription") {
        
        receivePaymentBySubscription(
            invoice,
            remaining
        );
        
        return;
    }
    
    if (method === "full") {
        
        closePaymentMethodModal(false);
        
        receiveFullPayment(
            invoice,
            remaining
        );
        
        return;
    }
    
    if (method === "partial") {
        
        closePaymentMethodModal(false);
        
        receivePartialPayment(
            invoice,
            remaining
        );
        
        return;
    }
}

//// دالة دفع الاشتراك استلام 
function receivePaymentBySubscription(invoice, remaining) {



    if (!invoice) {
        alert("الفاتورة غير موجودة");
        return;
    }

    remaining = Number(remaining || 0);

    if (remaining <= 0) {
        alert("لا يوجد مبلغ متبقي");
        return;
    }

    const customerId =
        Number(invoice.customerId);

    const customerSubscription =
        subscriptions.find(s =>
            Number(s.customerId) === customerId &&
            s.status === "نشط" &&
            Number(s.remaining || 0) > 0
        );


    if (!customerSubscription) {

        alert(
            "❌ لا يوجد اشتراك نشط للعميل أو أن رصيد الاشتراك غير كافٍ"
        );

        return;
    }


    const subscriptionBalance =
        Number(
            customerSubscription.remaining || 0
        );

    if (subscriptionBalance < remaining) {

        alert(
            `❌ رصيد الاشتراك غير كافٍ\n\n` +
            `المطلوب: ${remaining.toFixed(2)} ${settings.currency}\n` +
            `رصيد الاشتراك: ${subscriptionBalance.toFixed(2)} ${settings.currency}`
        );

        return;
    }



    customerSubscription.remaining =
        subscriptionBalance - remaining;

    if (
        customerSubscription.remaining <= 0
    ) {

        customerSubscription.remaining = 0;

    }

    invoice.paid =
        Number(invoice.paid || 0) +
        remaining;

    invoice.remaining = 0;

    invoice.paymentStatus =
        "مدفوعة";

    invoice.status =
        "delivered";


    if (!Array.isArray(walletTransactions)) {

        walletTransactions = [];

    }


    walletTransactions.push({

        id:
            Date.now(),

        customerId:
            invoice.customerId,

        invoiceNo:
            invoice.invoiceNo,

        subscriptionId:
            customerSubscription.id,

        type:
            "دفع فاتورة",

        amount:
            remaining,

        paymentMethod:
            "اشتراك",

        note:
            "خصم من رصيد الاشتراك",

        date:
            new Date().toISOString()

    });
    invoice.paymentMethod = "اشتراك";


    saveData();
    updateInvoicesTable();
    updateCustomersTable();
    updateWalletTable();

    if (
        typeof renderSubscriptions ===
        "function"
    ) {

        renderSubscriptions();

    }


    window.currentPaymentInvoice = null;
    window.currentPaymentRemaining = null;

    alert(

        `✅ تم الدفع من الاشتراك بنجاح\n\n` +

        `الفاتورة: ${invoice.invoiceNo}\n` +

        `المبلغ المستخدم: ${remaining.toFixed(2)} ${settings.currency}\n` +

        `رصيد الاشتراك المتبقي: ` +

        `${customerSubscription.remaining.toFixed(2)} ${settings.currency}`

    );
}

//// خيارات الدفع كامل 
function receiveFullPayment(invoice, remaining) {
    
    let modal =
        document.getElementById("fullPaymentModal");
    
    if (!modal) {
        
        modal = document.createElement("div");
        
        modal.id = "fullPaymentModal";
        
        modal.innerHTML = `

            <div class="payment-modal-box">

                <h2>💰 دفع كامل</h2>

                <div class="payment-invoice-info">

                    <div>
                        رقم الفاتورة:
                        <strong>
                            ${invoice.invoiceNo}
                        </strong>
                    </div>

                    <div>
                        المبلغ:
                        <strong>
                            ${remaining.toFixed(2)}
                            ${settings.currency}
                        </strong>
                    </div>

                </div>


                <div class="payment-methods">

                    <button
                        class="payment-method full"
                        onclick="completeFullPayment('شبكة')">

                        <span>💳</span>

                        <strong>
                            شبكة
                        </strong>

                        <small>
                            دفع كامل عن طريق الشبكة
                        </small>

                    </button>


                    <button
                        class="payment-method subscription"
                        style="border-color:#16a34a;"
                        onclick="completeFullPayment('كاش')">

                        <span>💵</span>

                        <strong>
                            كاش
                        </strong>

                        <small>
                            دفع كامل نقداً
                        </small>

                    </button>

                </div>


                <button
                    class="payment-close"
                    onclick="closeFullPaymentModal()">

                    رجوع

                </button>

            </div>

        `;
        
        document.body.appendChild(modal);
    }
    
    modal.style.display = "flex";
}


////  دالة الاغلاق مع دالة الدفع كامل 
 function closeFullPaymentModal() {
    
    const modal =
        document.getElementById(
            "fullPaymentModal"
        );
    
    if (modal) {
        modal.style.display = "none";
    }
    
}

function completeFullPayment(paymentMethod) {

    const invoice =
        window.currentPaymentInvoice;

    const remaining =
        window.currentPaymentRemaining;

    if (!invoice) {
        alert("الفاتورة غير موجودة");
        return;
    }

    if (!remaining || remaining <= 0) {
        alert("لا يوجد مبلغ متبقي");
        return;
    }

    invoice.paid =
        Number(invoice.paid || 0) +
        Number(remaining);

    invoice.remaining = 0;

    invoice.paymentStatus =
        "مدفوعة";

    invoice.status =
        "delivered";

    if (
        typeof walletTransactions === "undefined"
    ) {
        walletTransactions = [];
    }


    walletTransactions.push({

        id: Date.now(),

        customerId:
            invoice.customerId,

        invoiceNo:
            invoice.invoiceNo,

        type:
            "دفع فاتورة",

        amount:
            Number(remaining),

        paymentMethod:
            paymentMethod,

        note:
            "دفع كامل",

        date:
            new Date().toISOString()

    });

    localStorage.setItem(
        "walletTransactions",
        JSON.stringify(
            walletTransactions
        )
    );
    invoice.paymentMethod = paymentMethod;


    saveData();
    updateInvoicesTable();
    updateCustomersTable();
    updateWalletTable();


    window.currentPaymentInvoice = null;
    window.currentPaymentRemaining = null;


    alert(
        `✅ تم تسجيل الدفع بنجاح\n\n` +
        `طريقة الدفع: ${paymentMethod}\n` +
        `المبلغ: ${remaining.toFixed(2)} ${settings.currency}`
    );

}


function receivePartialPayment(invoice, remaining) {
    
    let modal =
        document.getElementById("partialPaymentModal");
    
    if (!modal) {
        
        modal = document.createElement("div");
        
        modal.id = "partialPaymentModal";
        
        modal.innerHTML = `

            <div class="payment-modal-box">

                <h2>💳💵 دفع جزئي</h2>

                <div class="payment-invoice-info">

                    <div>
                        رقم الفاتورة:
                        <strong>
                            ${invoice.invoiceNo}
                        </strong>
                    </div>

                    <div>
                        المبلغ المتبقي:
                        <strong>
                            ${remaining.toFixed(2)}
                            ${settings.currency}
                        </strong>
                    </div>

                </div>


                <div class="form-group">

                    <label>
                        💳 مبلغ الشبكة
                    </label>

                    <input
                        type="number"
                        id="partialNetworkAmount"
                        min="0"
                        step="0.01"
                        placeholder="مثال: 50"
                    >

                </div>


                <div class="form-group">

                    <label>
                        💵 مبلغ الكاش
                    </label>

                    <input
                        type="number"
                        id="partialCashAmount"
                        min="0"
                        step="0.01"
                        placeholder="مثال: 50"
                    >

                </div>


                <div
                    id="partialPaymentTotal"
                    style="
                        text-align:center;
                        margin:15px 0;
                        font-weight:bold;
                        color:#0284C7;
                    ">

                    المجموع: 0.00 ${settings.currency}

                </div>


                <button
                    class="save-btn"
                    onclick="completePartialPayment()">

                    ✅ تأكيد الدفع

                </button>


                <button
                    class="payment-close"
                    onclick="closePartialPaymentModal()">

                    رجوع

                </button>

            </div>

        `;
        
        document.body.appendChild(modal);
        
        
        const networkInput =
            document.getElementById(
                "partialNetworkAmount"
            );
        
        const cashInput =
            document.getElementById(
                "partialCashAmount"
            );
        
        
 function updatePartialTotal() {
            
 const network =
 Number(networkInput.value) || 0;
            
 const cash =
 Number(cashInput.value) || 0;
            
            const total =
                network + cash;
            
            
  document.getElementById(
                    "partialPaymentTotal"
                ).textContent =
                `المجموع: ${total.toFixed(2)} ${settings.currency}`;
            
        }
        
        
        networkInput.addEventListener(
            "input",
            updatePartialTotal
        );
        
        cashInput.addEventListener(
            "input",
            updatePartialTotal
        );
        
    }
    
    modal.style.display = "flex";
}



function closePartialPaymentModal() {
    
    const modal =
        document.getElementById(
            "partialPaymentModal"
        );
    
    if (modal) {
        modal.style.display = "none";
    }
    
}

///// دالة دفع الجزئي 
function completePartialPayment() {

    const invoice =
        window.currentPaymentInvoice;

    const remaining =
        Number(window.currentPaymentRemaining);


    if (!invoice) {
        alert("الفاتورة غير موجودة");
        return;
    }


    const network =
        Number(
            document.getElementById(
                "partialNetworkAmount"
            ).value
        ) || 0;


    const cash =
        Number(
            document.getElementById(
                "partialCashAmount"
            ).value
        ) || 0;


    if (network < 0 || cash < 0) {

        alert(
            "لا يمكن إدخال مبلغ سالب"
        );

        return;
    }


    if (network === 0 && cash === 0) {

        alert(
            "أدخل مبلغ الشبكة أو الكاش"
        );

        return;
    }


    const paidAmount =
        network + cash;


    if (
        Math.abs(
            paidAmount - remaining
        ) > 0.001
    ) {

        alert(

            `❌ المبلغ غير مطابق\n\n` +

            `المطلوب: ${remaining.toFixed(2)} ${settings.currency}\n` +

            `شبكة: ${network.toFixed(2)} ${settings.currency}\n` +

            `كاش: ${cash.toFixed(2)} ${settings.currency}\n\n` +

            `المجموع: ${paidAmount.toFixed(2)} ${settings.currency}`

        );

        return;
    }


    invoice.paid =
        Number(invoice.paid || 0) +
        paidAmount;


    invoice.remaining = 0;


    invoice.paymentStatus =
        "مدفوعة";


    invoice.status =
        "delivered";

    if (
        typeof walletTransactions === "undefined"
    ) {

        walletTransactions = [];

    }

    if (network > 0) {

        walletTransactions.push({

            id:
                Date.now(),

            customerId:
                invoice.customerId,

            invoiceNo:
                invoice.invoiceNo,

            type:
                "دفع فاتورة",

            amount:
                network,

            paymentMethod:
                "شبكة",

            note:
                "دفع جزئي - شبكة",

            date:
                new Date().toISOString()

        });

    }


    if (cash > 0) {

        walletTransactions.push({

            id:
                Date.now() + 1,

            customerId:
                invoice.customerId,

            invoiceNo:
                invoice.invoiceNo,

            type:
                "دفع فاتورة",

            amount:
                cash,

            paymentMethod:
                "كاش",

            note:
                "دفع جزئي - كاش",

            date:
                new Date().toISOString()

        });

    }

    localStorage.setItem(
        "walletTransactions",
        JSON.stringify(
            walletTransactions
        )
    );
    
    invoice.paymentMethod =
    network > 0 && cash > 0 ?
    "شبكة + كاش" :
    network > 0 ?
    "شبكة" :
    "كاش";


    saveData();
    updateInvoicesTable();
    updateCustomersTable();
    updateWalletTable();
    closePartialPaymentModal();

    window.currentPaymentInvoice = null;
    window.currentPaymentRemaining = null;


    alert(

        `✅ تم تسجيل الدفع بنجاح\n\n` +

        `💳 شبكة: ${network.toFixed(2)} ${settings.currency}\n` +

        `💵 كاش: ${cash.toFixed(2)} ${settings.currency}\n\n` +

        `💰 الإجمالي: ${paidAmount.toFixed(2)} ${settings.currency}`

    );

}

function handleInvoiceScan(code) {
    
    const scannedCode = String(code).trim();
    
    console.log("📷 تم مسح:", scannedCode);
    
    const invoice = invoices.find(inv =>
        String(inv.invoiceNo).trim() === scannedCode ||
        String(inv.barcode || "").trim() === scannedCode
    );
    
    if (!invoice) {
        alert(
            "❌ الفاتورة غير موجودة\n\n" +
            "الرقم المقروء: " + scannedCode
        );
        return;
    }
    
    console.log("✅ الفاتورة المطلوبة:", invoice.invoiceNo);
    
    const total = Number(invoice.total || 0);
    const paid = Number(invoice.paid || 0);
    
    const remaining = Math.max(
        0,
        total - paid
    );
    
    if (remaining <= 0) {
        alert(
            "✅ الفاتورة " +
            invoice.invoiceNo +
            " مدفوعة بالكامل"
        );
        return;
    }
    

    window.currentPaymentInvoice = invoice;
    window.currentPaymentRemaining = remaining;
    

    openPaymentMethodModal();
}


/////   طريقة دفع في استلام الدفعات 
function showPaymentMethodOptions(invoice) {
    

    const oldModal =
        document.getElementById("paymentMethodModal");
    
    if (oldModal) {
        oldModal.remove();
    }
    
    const modal =
        document.createElement("div");
    
    modal.id = "paymentMethodModal";
    
    modal.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,.65);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        padding: 20px;
    `;
    
    const box =
        document.createElement("div");
    
    box.style.cssText = `
        background: white;
        width: 100%;
        max-width: 450px;
        border-radius: 18px;
        padding: 25px;
        text-align: center;
        direction: rtl;
        box-shadow: 0 10px 40px rgba(0,0,0,.25);
    `;
    
    box.innerHTML = `

        <h2 style="margin-top:0;">
            💳 طريقة الدفع
        </h2>

        <p style="
            font-size:18px;
            font-weight:bold;
            margin-bottom:25px;
        ">
            الفاتورة: ${invoice.invoiceNo}
        </p>

        <p style="
            font-size:22px;
            color:#0F766E;
            font-weight:bold;
        ">
            الإجمالي:
            ${Number(invoice.total || invoice.amount || 0).toFixed(2)}
        </p>

        <button
            id="paymentSubscriptionBtn"
            style="
                width:100%;
                padding:15px;
                margin:7px 0;
                border:none;
                border-radius:12px;
                background:#7C3AED;
                color:white;
                font-size:17px;
                font-weight:bold;
                cursor:pointer;
            "
        >
            🎫 الدفع من الاشتراك
        </button>

        <button
            id="paymentFullBtn"
            style="
                width:100%;
                padding:15px;
                margin:7px 0;
                border:none;
                border-radius:12px;
                background:#0284C7;
                color:white;
                font-size:17px;
                font-weight:bold;
                cursor:pointer;
            "
        >
            💳 دفع كامل
        </button>

        <button
            id="paymentPartialBtn"
            style="
                width:100%;
                padding:15px;
                margin:7px 0;
                border:none;
                border-radius:12px;
                background:#D97706;
                color:white;
                font-size:17px;
                font-weight:bold;
                cursor:pointer;
            "
        >
            🔀 دفع جزئي
            <br>
            <small>شبكة + كاش</small>
        </button>

        <button
            id="paymentCancelBtn"
            style="
                width:100%;
                padding:12px;
                margin-top:15px;
                border:none;
                border-radius:12px;
                background:#E5E7EB;
                color:#374151;
                font-size:16px;
                font-weight:bold;
                cursor:pointer;
            "
        >
            إلغاء
        </button>
    `;
    
    modal.appendChild(box);
    
    document.body.appendChild(modal);
    
    
    document
        .getElementById("paymentSubscriptionBtn")
        .onclick = function() {
            
            modal.remove();
            receivePayment(
                invoice.invoiceNo,
                "subscription"
            );
            
        };
    
    
    document
        .getElementById("paymentFullBtn")
        .onclick = function() {
            
            modal.remove();
            receivePayment(
                invoice.invoiceNo,
                "full"
            );
            
        };
    
    
    document
        .getElementById("paymentPartialBtn")
        .onclick = function() {
            
            modal.remove();
            receivePayment(
                invoice.invoiceNo,
                "partial"
            );
            
        };
    
    
    document
        .getElementById("paymentCancelBtn")
        .onclick = function() {
            modal.remove();
            
        };
    
}


function testInvoiceScan() {
    
    const code =
        document.getElementById("scanInvoiceInput").value.trim();
    
    
    if (!code) {
        alert("ادخل رقم الفاتورة");
        return;
    }
    
    
    handleInvoiceScan(code);
    
}


function updateWalletTable() {

    const tbody = document.getElementById("walletTable");

    if (!tbody) return;


    tbody.innerHTML = customers.map(customer => {


        const balance =
            Number(customer.walletBalance || 0);

        const transactions =
            walletTransactions.filter(
                w => w.customerId === customer.id
            );

        const last =
            transactions.length
            ?
            transactions[transactions.length - 1]
            :
            null;


        let balanceColor = "#555";

        if (balance > 0) {
            balanceColor = "#2e7d32"; 
        }

        if (balance < 0) {
            balanceColor = "#d32f2f"; 
        }



        let lastText = "لا يوجد";


        if (last) {

            if (last.type === "رصيد عميل") {

                lastText =
                "🟢 " + last.type +
                " +" +
                Number(last.amount).toFixed(2);

            }

            else if (last.type === "استرجاع نقدي") {

                lastText =
                "🔵 " + last.type +
                " " +
                Number(last.amount).toFixed(2);

            }

            else if (last.type === "مبلغ مستحق") {

                lastText =
                "🔴 " + last.type +
                " " +
                Number(last.amount).toFixed(2);

            }

            else {

                lastText =
                last.type;

            }

        }

        return `

        <tr>

            <td>
                ${customer.name}
            </td>


            <td style="
                font-weight:bold;
                color:${balanceColor};
            ">

                ${balance.toFixed(2)}
                ${settings.currency}

            </td>


            <td>
                ${lastText}
            </td>

            <td>

                ${
                    last
                    ?
                    new Date(last.date)
                    .toLocaleString('ar-AE')
                    :
                    "-"
                }

            </td>

            <td>

                <button 
                class="btn btn-small"
                onclick="viewWalletHistory(${customer.id})">

                📄 سجل الحركات

                </button>


            </td>


        </tr>

        `;


    }).join('');

} 


// فحص لجميع الدوال الموجودة
function debugSystem() {
    
    console.clear();
    
    console.log("===== فحص الأقسام =====");
    
    document.querySelectorAll(".section").forEach(sec => {
        console.log(
            sec.id,
            document.getElementById(sec.id) ? "✅ موجود" : "❌ مفقود"
        );
    });
    
    
    console.log("===== فحص البيانات =====");
    console.log("customers:", typeof customers, customers);
    console.log("invoices:", typeof invoices, invoices);
    console.log("products:", typeof products, products);
    console.log("settings:", typeof settings, settings);
    
    
    console.log("===== فحص الدوال =====");
    
    [
        "updateDashboard",
        "updateStatistics",
        "updateWalletTable",
        "updateArchiveTable",
        "updateCustomersTable",
        "updateInvoicesTable",
        "updateInventoryTable",
        "updateReports",
        "loadSettings",
        
    ].forEach(fn => {
        
        console.log(
            fn,
            typeof window[fn] === "function" ?
            "✅ موجودة" :
            "❌ غير موجودة"
        );
        
    });
    
    
    console.log("===== فحص عناصر HTML =====");
    
    [
        "statistics",
        "archive",
        "customerWallet",
        "customersTable",
        "walletTable",
        "archiveTable",
        "subscriptionsTable",
        
    ].forEach(id => {
        
        console.log(
            id,
            document.getElementById(id) ?
            "✅" :
            "❌ غير موجود"
        );
        
    });
    
}

// نقل الاشتراك للارشيف 
function deleteSubscription(index) {
    
    const sub = subscriptions[index];
    
    if (!sub) return;
    
    
    if (!confirm("هل تريد نقل الاشتراك إلى الأرشيف؟")) {
        return;
    }
    
    

    archive.push({
    type: "اشتراك",
    data: sub,
    date: new Date().toLocaleString('ar-SA')
    });
    
    

    subscriptions.splice(index, 1);
    localStorage.setItem(
        "subscriptions",
        JSON.stringify(subscriptions)
    );
    
    localStorage.setItem(
        "archiveSubscriptions",
        JSON.stringify(archiveSubscriptions)
    );
    
    
    renderSubscriptions();
    
    alert("✅ تم نقل الاشتراك للأرشيف");
}


// حذف نهائي من الارشيف
function deleteArchive(index) {
    
    if (!archive[index]) return;
    
    if (!confirm("هل تريد حذف العنصر من الأرشيف نهائياً؟")) return;
    
    archive.splice(index, 1);
    
    saveData();
    updateArchiveTable();
    
    alert("تم حذف العنصر من الأرشيف");
}


// حركة سجل الدفعات كامل  
function viewWalletHistory(customerId) {

    const customer = customers.find(
        c => c.id === customerId
    );

    if (!customer) {
        alert("العميل غير موجود");
        return;
    }

    const history = walletTransactions.filter(
        t => t.customerId === customerId
    );

    const modal =
        document.getElementById("walletHistoryModal");

    const content =
        document.getElementById("walletHistoryContent");

    const title =
        document.getElementById("walletHistoryTitle");

    title.innerHTML = `
        السجل المالي: ${customer.name}
    `;

    if (history.length === 0) {

        content.innerHTML = `
            <p style="text-align:center">
                لا يوجد سجل مالي لهذا العميل
            </p>
        `;

        modal.style.display = "flex";
        return;
    }

    content.innerHTML = `

        <table class="inventory-table">

            <thead>
                <tr>
                    <th>الحركة</th>
                    <th>الفاتورة</th>
                    <th>المبلغ</th>
                    <th>طريقة الدفع</th>
                    <th>ملاحظة</th>
                    <th>التاريخ</th>
                </tr>
            </thead>

            <tbody>

                ${
                    history.map(item => {

                        let color = "#555";

                        if (item.type === "دفع فاتورة")
                            color = "#2e7d32";

                        if (item.type === "استرجاع")
                            color = "#1976d2";

                        return `

                            <tr>

                                <td style="
                                    color:${color};
                                    font-weight:bold">

                                    ${item.type || "-"}

                                </td>

                                <td>
                                    ${item.invoiceNo || "-"}
                                </td>

                                <td>
                                    ${Number(item.amount || 0).toFixed(2)}
                                    ${settings.currency}
                                </td>

                                <td>
                                    ${item.paymentMethod || "نقدي"}
                                </td>

                                <td>
                                    ${item.note || "-"}
                                </td>

                                <td>
                                    ${
                                        item.date
                                            ? new Date(item.date)
                                                .toLocaleString('ar-AE')
                                            : "-"
                                    }
                                </td>

                            </tr>

                        `;

                    }).join('')
                }

            </tbody>

        </table>

    `;

    modal.style.display = "flex";
}



function closeWalletHistory() {
    
    const modal =
        document.getElementById("walletHistoryModal");
    
    
    if (modal) {
        
        modal.style.display = "none";
        
    }
    
}

//   دالة بحث بالاسم او الرقم 
function searchCustomers() {
    const value = document.getElementById("searchCustomer").value.toLowerCase();
    
    document.querySelectorAll("#customersTable tr").forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(value) ?
            "" :
            "none";
    });
}

function searchWallet() {
    const value = document.getElementById("walletSearch").value.toLowerCase();
    
    document.querySelectorAll("#walletTable tr").forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(value) ?
            "" :
            "none";
    });
}

function renderSubscriptionPlans() {
    
    const box =
        document.getElementById("subscriptionPlansList");
    
    if (!box) return;
    
    if (
        !Array.isArray(settings.subscriptionPlans) ||
        settings.subscriptionPlans.length === 0
    ) {
        
        settings.subscriptionPlans = [
            
            {
                id: 1,
                name: "شهري",
                price: 100,
                balance: 170,
                days: 30
            },
            
            {
                id: 2,
                name: "سنوي",
                price: 1000,
                balance: 2000,
                days: 365
            }
            
        ];
        
    }
    
    box.innerHTML = `

        <div class="subscription-plans-grid">

            ${settings.subscriptionPlans.map(
                (plan, index) => `

                <div
                    class="subscription-card"
                    data-plan-index="${index}"
                >

                    <div class="subscription-card-header">

                        <div class="subscription-plan-title">

                            <span class="subscription-icon">
                                💳
                            </span>

                            <div>

                                <strong>
                                    ${plan.name || "اشتراك جديد"}
                                </strong>

                                <small>
                                    باقة اشتراك
                                </small>

                            </div>

                        </div>


                        <button
                            type="button"
                            class="delete-subscription-btn"
                            onclick="deleteSubscriptionPlan(${index})"
                            title="حذف الاشتراك">

                            🗑️

                        </button>

                    </div>


                    <div class="subscription-grid">


                        <!-- اسم الاشتراك -->

                        <div class="subscription-field">

                            <label>
                                🏷️ اسم الاشتراك
                            </label>

                            <input
                                type="text"
                                id="subPlanName${index}"
                                value="${plan.name || ""}"
                                placeholder="مثال: شهري"
                            >

                        </div>


                        <!-- السعر -->

                        <div class="subscription-field">

                            <label>
                                💰 السعر المدفوع
                            </label>

                            <div class="subscription-input-wrap">

                                <input
                                    type="number"
                                    id="subPlanPrice${index}"
                                    value="${Number(plan.price || 0)}"
                                    min="0"
                                    step="0.01"
                                >

                                <span>
                                    ${settings.currency || "ر.س"}
                                </span>

                            </div>

                        </div>


                        <!-- الرصيد -->

                        <div class="subscription-field">

                            <label>
                                💳 رصيد العميل
                            </label>

                            <div class="subscription-input-wrap">

                                <input
                                    type="number"
                                    id="subPlanBalance${index}"
                                    value="${Number(plan.balance || 0)}"
                                    min="0"
                                    step="0.01"
                                >

                                <span>
                                    ${settings.currency || "ر.س"}
                                </span>

                            </div>

                        </div>


                        <!-- المدة -->

                        <div class="subscription-field">

                            <label>
                                📅 مدة الاشتراك
                            </label>

                            <div class="subscription-input-wrap">

                                <input
                                    type="number"
                                    id="subPlanDays${index}"
                                    value="${Number(plan.days || 0)}"
                                    min="1"
                                >

                                <span>
                                    يوم
                                </span>

                            </div>

                        </div>


                    </div>


                    <!-- ملخص -->

                    <div class="subscription-summary">

                        <span>
                            يدفع العميل
                            <b>
                                ${Number(plan.price || 0).toFixed(2)}
                            </b>
                        </span>

                        <span class="summary-arrow">
                            ←
                        </span>

                        <span class="summary-balance">
                            يحصل على
                            <b>
                                ${Number(plan.balance || 0).toFixed(2)}
                            </b>
                        </span>

                    </div>

                </div>

            `
            ).join("")}

        </div>

    `;
}



////  دالة إضافة اشترام جديد
function addSubscriptionPlan() {
    
    if (!Array.isArray(settings.subscriptionPlans)) {
        settings.subscriptionPlans = [];
    }
    
    
    const ids =
        settings.subscriptionPlans
        .map(plan => Number(plan.id) || 0);
    
    
    const newId =
        ids.length > 0 ?
        Math.max(...ids) + 1 :
        1;
    
    
    settings.subscriptionPlans.push({
        
        id: newId,
        
        name: "اشتراك جديد",
        
        price: 0,
        
        balance: 0,
        
        days: 30
        
    });
    
    
    renderSubscriptionPlans();
    setTimeout(() => {
        
        const index =
            settings.subscriptionPlans.length - 1;
        
        const input =
            document.getElementById(
                `subPlanName${index}`
            );
        
        if (input) {
            
            input.focus();
            
            input.select();
            
        }
        
    }, 50);
}




function deleteSubscriptionPlan(index) {
    
    if (
        !settings.subscriptionPlans ||
        !settings.subscriptionPlans[index]
    ) {
        return;
    }
    
    
    const plan =
        settings.subscriptionPlans[index];
    
    
    const confirmed =
        confirm(
            `هل تريد حذف اشتراك "${plan.name}"؟`
        );
    
    
    if (!confirmed) return;
    
    
    settings.subscriptionPlans.splice(
        index,
        1
    );
    
    
    renderSubscriptionPlans();
}


function addSubscriptionPlan() {
    
    if (!settings.subscriptionPlans) {
        settings.subscriptionPlans = [];
    }
    
    
    settings.subscriptionPlans.push({
        
        id: Date.now(),
        
        name: "اشتراك جديد",
        
        price: 0,
        
        balance: 0,
        
        days: 30
        
    });
    
    
    saveData();
    renderSubscriptionPlans();
    
}

function loadSubscriptionPlansToSelect() {
    
    const select = document.getElementById(
        "subscriptionType"
    );
    
    if (!select) return;
    
    
    select.innerHTML = "";
    if (!settings.subscriptionPlans) return;
    settings.subscriptionPlans.forEach(plan => {
        
        
        select.innerHTML += `

        <option value="${plan.id}">
            ${plan.name}
            - ${plan.price} ${settings.currency}
            (رصيد ${plan.balance})
        </option>

        `;
        
        
    });
    
}


function renewSubscription(index) {
    
    const sub = subscriptions[index];
    
    if (!sub) return;
    
    const plans = settings.subscriptionPlans || [];
    
    if (plans.length === 0) {
        alert("لا توجد باقات اشتراك متاحة");
        return;
    }
    

    window.renewingSubscriptionIndex = index;
    

    let modal = document.getElementById("renewSubscriptionModal");
    
    if (!modal) {
        
        modal = document.createElement("div");
        
        modal.id = "renewSubscriptionModal";
        
        modal.className = "renew-subscription-overlay";
        
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = `

        <div class="renew-subscription-modal">

            <div class="renew-subscription-header">

                <div>
                    <h3>🔄 تجديد الاشتراك</h3>
                    <small>
                        اختر الباقة التي تريد التجديد بها
                    </small>
                </div>

                <button
                    type="button"
                    class="renew-close-btn"
                    onclick="closeRenewSubscription()">
                    ✕
                </button>

            </div>


            <div class="renew-subscription-body">

                <div class="renew-customer-info">

                    <strong>
                        👤 ${sub.customerName || sub.name || "العميل"}
                    </strong>

                    <span>
                        اختر إحدى الباقات التالية
                    </span>

                </div>


                <div class="renew-plans-grid">

                    ${plans.map((plan, planIndex) => `

                        <div
                            class="renew-plan-card"
                            onclick="selectRenewPlan(${planIndex})"
                            data-plan-index="${planIndex}"
                        >

                            <div class="renew-plan-icon">
                                💳
                            </div>

                            <div class="renew-plan-name">
                                ${plan.name || "باقة اشتراك"}
                            </div>

                            <div class="renew-plan-price">
                                ${Number(plan.price || 0).toFixed(2)}
                                ${settings.currency || "ر.س"}
                            </div>

                            <div class="renew-plan-details">

                                <span>
                                    💰 رصيد:
                                    <b>${Number(plan.balance || 0)}</b>
                                </span>

                                <span>
                                    📅 مدة:
                                    <b>${Number(plan.days || 0)} يوم</b>
                                </span>

                            </div>

                        </div>

                    `).join("")}

                </div>

            </div>


            <div class="renew-subscription-footer">

                <button
                    type="button"
                    class="renew-cancel-btn"
                    onclick="closeRenewSubscription()">
                    إلغاء
                </button>

                <button
                    type="button"
                    id="confirmRenewBtn"
                    class="renew-confirm-btn"
                    disabled
                    onclick="confirmRenewSubscription()">
                    ✓ تأكيد التجديد
                </button>

            </div>

        </div>
    `;
    
    modal.style.display = "flex";
}

function selectRenewPlan(planIndex) {
    
    const modal = document.getElementById("renewSubscriptionModal");
    
    if (!modal) return;
    

    modal.querySelectorAll(".renew-plan-card").forEach(card => {
        card.classList.remove("selected");
    });
    

    const selectedCard =
        modal.querySelector(
            `.renew-plan-card[data-plan-index="${planIndex}"]`
        );
    
    if (selectedCard) {
        selectedCard.classList.add("selected");
    }
    

    window.selectedRenewPlanIndex = planIndex;
    
    const confirmBtn =
        document.getElementById("confirmRenewBtn");
    
    if (confirmBtn) {
        confirmBtn.disabled = false;
    }
}



function confirmRenewSubscription() {
    
    const subIndex =
        window.renewingSubscriptionIndex;
    
    const planIndex =
        window.selectedRenewPlanIndex;
    
    if (
        subIndex === undefined ||
        planIndex === undefined
    ) {
        alert("اختر الباقة أولاً");
        return;
    }
    
    const sub = subscriptions[subIndex];
    
    const plan =
        settings.subscriptionPlans[planIndex];
    
    if (!sub || !plan) return;
    
    

    sub.planId = plan.id;
    sub.planName = plan.name;
    sub.price = Number(plan.price || 0);
    sub.remaining = Number(plan.balance || 0);
    sub.days = Number(plan.days || 0);
    sub.status = "نشط";
    
    

    sub.startDate =
        new Date().toISOString();
    
    

    const endDate = new Date();
    
    endDate.setDate(
        endDate.getDate() +
        Number(plan.days || 0)
    );
    
    sub.endDate =
        endDate.toISOString();
    
    
    localStorage.setItem(
        "subscriptions",
        JSON.stringify(subscriptions)
    );
    
    

    closeRenewSubscription();
    renderSubscriptions();
    
    
    alert(
        `✓ تم تجديد الاشتراك بباقة ${plan.name}`
    );
}


function closeRenewSubscription() {
    
    const modal =
        document.getElementById("renewSubscriptionModal");
    
    if (modal) {
        modal.style.display = "none";
    }
    
    window.renewingSubscriptionIndex = undefined;
    
    window.selectedRenewPlanIndex = undefined;
}



function restoreSubscription(index) {
    
    const sub = archiveSubscriptions[index];
    
    if (!sub) return;
    
    
    subscriptions.push(sub);
    
    
    archiveSubscriptions.splice(index, 1);
    
    
    localStorage.setItem(
        "subscriptions",
        JSON.stringify(subscriptions)
    );
    
    localStorage.setItem(
        "archiveSubscriptions",
        JSON.stringify(archiveSubscriptions)
    );
    
    
    renderSubscriptions();
    renderArchiveSubscriptions();
}

///////دالة البحث في الاشتراكات 
function searchSubscriptions() {
    
    const value = document
        .getElementById("subscriptionSearch")
        .value
        .toLowerCase()
        .trim();
    
    
    const filtered = subscriptions.filter(sub => {
        
        return (
            sub.customerName.toLowerCase().includes(value) ||
            sub.type.toLowerCase().includes(value)
        );
        
    });
    
    
    renderSubscriptions(filtered);
}

function filterCustomerInvoices(customerId) {
    
    const search = document
        .getElementById("invoiceSearchInput")
        .value
        .trim();
    
    const cards = document.querySelectorAll(
        ".customer-invoice-card"
    );
    
    cards.forEach(card => {
        
        if (card.textContent.includes(search)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
        
    });
    
}


function syncGlobalData() {
    
    window.customers =
        customers;
    
    window.invoices =
        invoices;
    
    window.products =
        products;
    
    window.subscriptions =
        subscriptions;
    
    window.settings =
        settings;
    
    window.archive =
        archive;
    
    window.walletTransactions =
        walletTransactions;
    
    window.revenues =
        revenues;
    
    window.archiveSubscriptions =
        archiveSubscriptions;
}


//// دالة ادارة الاشتراك 
function openSubscriptionManager() {
    
    const modal =
        document.getElementById(
            "subscriptionManagerModal"
        );
    
    if (!modal) return;
    
    renderSubscriptionPlans();
    
    modal.style.display = "flex";
    
}


function closeSubscriptionManager() {
    
    const modal =
        document.getElementById(
            "subscriptionManagerModal"
        );
    
    if (!modal) return;
    
    modal.style.display = "none";
    
}