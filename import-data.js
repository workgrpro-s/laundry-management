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


    const reader = new FileReader();


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


            let customersData =
                getStorageArray("customers");


            let importedCustomers = 0;
            workbook.SheetNames.forEach(
                sheetName => {

                    const sheet =
                        workbook.Sheets[sheetName];


                    const rows =
                        XLSX.utils.sheet_to_json(
                            sheet,
                            {
                                defval: ""
                            }
                        );


                    console.log(
                        "📄 الورقة:",
                        sheetName
                    );


                    console.log(
                        "📊 عدد الصفوف:",
                        rows.length
                    );


                    if (!rows.length) {
                        return;
                    }


                    console.log(
                        "📋 الأعمدة:",
                        Object.keys(rows[0])
                    );

                    const sheetText =
                        normalize(sheetName);


                    const isCustomerSheet =
                        sheetText.includes("عميل") ||
                        sheetText.includes("عملاء") ||
                        sheetText.includes("customer");


                    if (!isCustomerSheet) {
                        return;
                    }

                    rows.forEach(row => {

                        const keys =
                            Object.keys(row);


                        const name =
                            getValueFlexible(
                                row,
                                [
                                    "اسم العميل",
                                    "اسم العميل ",
                                    "العميل",
                                    "اسم الزبون",
                                    "الزبون",
                                    "الاسم",
                                    "name",
                                    "customer",
                                    "customer name"
                                ]
                            );


                        const phone =
                            getValueFlexible(
                                row,
                                [
                                    "رقم الهاتف",
                                    "رقم الجوال",
                                    "الهاتف",
                                    "الجوال",
                                    "الجوال ",
                                    "رقم",
                                    "phone",
                                    "mobile"
                                ]
                            );


                        const email =
                            getValueFlexible(
                                row,
                                [
                                    "البريد",
                                    "البريد الإلكتروني",
                                    "الايميل",
                                    "email"
                                ]
                            );


                        const address =
                            getValueFlexible(
                                row,
                                [
                                    "العنوان",
                                    "عنوان",
                                    "address"
                                ]
                            );


                        if (
                            !String(name).trim() &&
                            !String(phone).trim()
                        ) {
                            return;
                        }


                        const cleanName =
                            String(
                                name || "عميل"
                            ).trim();


                        const cleanPhone =
                            String(
                                phone || ""
                            )
                            .trim();

                        const exists =
                            customersData.some(
                                customer => {

                                    const oldPhone =
                                        String(
                                            customer.phone || ""
                                        ).trim();


                                    if (
                                        cleanPhone &&
                                        oldPhone
                                    ) {
                                        return (
                                            oldPhone ===
                                            cleanPhone
                                        );
                                    }


                                    return (
                                        normalize(
                                            customer.name
                                        ) ===
                                        normalize(
                                            cleanName
                                        )
                                    );

                                }
                            );


                        if (exists) {
                            return;
                        }

                        customersData.push({

                            id:
                                generateImportId(),

                            name:
                                cleanName,

                            phone:
                                cleanPhone,

                            email:
                                email || "",

                            address:
                                address || "",

                            invoices:
                                0,

                            points:
                                0,

                            createdAt:
                                new Date()
                                    .toISOString()

                        });


                        importedCustomers++;

                    });

                }
            );

            saveStorageArray(
                "customers",
                customersData
            );

            if (
                typeof customers !== "undefined"
            ) {

                customers =
                    customersData;

            }

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

            alert(
                "✅ تم استيراد العملاء\n\n" +
                "👥 عدد العملاء الجدد: " +
                importedCustomers
            );


            console.log(
                "✅ العملاء بعد الاستيراد:",
                customersData
            );

        }


        catch (error) {

            console.error(
                "❌ Import Error:",
                error
            );


            alert(
                "❌ حدث خطأ أثناء الاستيراد:\n\n" +
                error.message
            );

        }

    };


    reader.readAsArrayBuffer(file);

}


function getValueFlexible(row, names) {
    
    const keys =
        Object.keys(row);
    
    
    for (const wanted of names) {
        
        const wantedNormalized =
            normalize(wanted);
        
        
        const foundKey =
            keys.find(key => {
                
                return (
                    normalize(key) ===
                    wantedNormalized
                );
                
            });
        
        
        if (
            foundKey !== undefined
        ) {
            
            return row[foundKey];
            
        }
        
    }
    
    

    for (const key of keys) {
        
        const keyNormalized =
            normalize(key);
        
        
        for (const wanted of names) {
            
            const wantedNormalized =
                normalize(wanted);
            
            
            if (
                keyNormalized.includes(
                    wantedNormalized
                ) ||
                wantedNormalized.includes(
                    keyNormalized
                )
            ) {
                
                return row[key];
                
            }
            
        }
        
    }
    
    
    return "";
    
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

    const reader = new FileReader();

    reader.onload = function (e) {

        try {

            const workbook = XLSX.read(
                new Uint8Array(e.target.result),
                {
                    type: "array",
                    cellDates: true
                }
            );

            if (!Array.isArray(customers)) {
                customers = [];
            }

            if (!Array.isArray(invoices)) {
                invoices = [];
            }

            if (!Array.isArray(subscriptions)) {
                subscriptions = [];
            }

            if (!Array.isArray(revenues)) {
                revenues = [];
            }
            

            const imported = {

                customers: 0,

                invoices: 0,

                subscriptions: 0,

                revenues: 0,

                products: 0

            };


            workbook.SheetNames.forEach(
                sheetName => {

                    const sheet =
                        workbook.Sheets[sheetName];

                    const rows =
                        XLSX.utils.sheet_to_json(
                            sheet,
                            {
                                defval: ""
                            }
                        );


                    console.log(
                        "📄 قراءة:",
                        sheetName,
                        "عدد الصفوف:",
                        rows.length
                    );
                    
                    rows.forEach(row => {

                        importExcelRow(
                            row,
                            sheetName,
                            imported
                        );

                    });

                }
            );


            localStorage.setItem(
                "customers",
                JSON.stringify(customers)
            );

            localStorage.setItem(
                "laundry_customers",
                JSON.stringify(customers)
            );

            localStorage.setItem(
                "invoices",
                JSON.stringify(invoices)
            );

            localStorage.setItem(
                "subscriptions",
                JSON.stringify(subscriptions)
            );

            localStorage.setItem(
                "revenues",
                JSON.stringify(revenues)
            );

            if (
                typeof saveData === "function"
            ) {

                saveData();

            }

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
                typeof renderInvoices ===
                "function"
            ) {

                renderInvoices();

            }

            if (
                typeof updateInvoicesTable ===
                "function"
            ) {

                updateInvoicesTable();

            }

            if (
                typeof renderSubscriptions ===
                "function"
            ) {

                renderSubscriptions();

            }

            if (
                typeof updateReports ===
                "function"
            ) {

                updateReports();

            }

            if (
                typeof updateDashboard ===
                "function"
            ) {

                updateDashboard();

            }

            alert(
                "✅ تم نقل البيانات بنجاح\n\n" +

                "👥 العملاء: " +
                imported.customers +

                "\n🧾 الفواتير: " +
                imported.invoices +

                "\n🎫 الاشتراكات: " +
                imported.subscriptions +

                "\n💰 الإيرادات: " +
                imported.revenues +

                "\n📦 الخدمات: " +
                imported.products
            );


            console.log(
                "📊 نتيجة الاستيراد:",
                imported
            );


        } catch (error) {

            console.error(
                "❌ Import Error:",
                error
            );

            alert(
                "❌ حدث خطأ أثناء الاستيراد:\n\n" +
                error.message
            );

        }

    };


    reader.onerror = function () {

        alert(
            "❌ تعذر قراءة ملف Excel"
        );

    };


    reader.readAsArrayBuffer(file);

}




function importExcelRow(
    row,
    sheetName,
    imported
) {

    const sheet =
        normalizeExcelText(
            sheetName
        );
        
    const keys =
        Object.keys(row);

    const text =
        normalizeExcelText(
            sheetName +
            " " +
            keys.join(" ") +
            " " +
            Object.values(row).join(" ")
        );


    const type =
        detectExcelType(
            sheet,
            keys,
            text
        );

    if (type === "customer") {

        importCustomer(
            row,
            imported
        );

        return;
    }

    if (type === "subscription") {

        importSubscription(
            row,
            imported
        );

        return;
    }

    if (type === "revenue") {

        importRevenue(
            row,
            imported
        );

        return;
    }

    if (type === "invoice") {

        importInvoice(
            row,
            imported
        );

        return;
    }

    if (type === "product") {

        importProduct(
            row,
            imported
        );

    }

}


//// تحميل العملاء
function importCustomer(
    row,
    imported
) {

    const name =
        getExcelValue(
            row,
            [
                "اسم العميل",
                "اسم العميل ",
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
                "رقم العميل",
                "الهاتف",
                "الجوال",
                "phone",
                "mobile"
            ]
        );


    if (!name && !phone) {
        return;
    }


    const cleanPhone =
        String(
            phone || ""
        ).trim();


    const exists =
        customers.some(
            customer => {

                const oldPhone =
                    String(
                        customer.phone || ""
                    ).trim();


                if (
                    cleanPhone &&
                    oldPhone
                ) {

                    return (
                        cleanPhone ===
                        oldPhone
                    );

                }


                return (
                    normalizeExcelText(
                        customer.name
                    ) ===
                    normalizeExcelText(
                        name
                    )
                );

            }
        );


    if (exists) {
        return;
    }


    customers.push({

        id:
            generateImportId(),

        name:
            name ||
            "عميل",

        phone:
            cleanPhone,

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

        invoices:
            Number(
                getExcelValue(
                    row,
                    [
                        "الفواتير",
                        "عدد الفواتير",
                        "invoices"
                    ]
                ) || 0
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
            )

    });


    imported.customers++;

}




// الاشتراكات
function importSubscription(
    row,
    imported
) {

    const customerName =
        getExcelValue(
            row,
            [
                "اسم العميل",
                "العميل",
                "customer",
                "customer name"
            ]
        );


    const customerPhone =
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


    let customer =
        findImportedCustomer(
            customerName,
            customerPhone
        );


    if (
        !customer &&
        (
            customerName ||
            customerPhone
        )
    ) {

        customer = {

            id:
                generateImportId(),

            name:
                customerName ||
                "عميل",

            phone:
                String(
                    customerPhone || ""
                ).trim(),

            invoices: 0,

            points: 0

        };


        customers.push(
            customer
        );


        imported.customers++;

    }


    const type =
        getExcelValue(
            row,
            [
                "نوع الاشتراك",
                "الاشتراك",
                "الخطة",
                "نوع",
                "subscription",
                "subscription type"
            ]
        );
    const price =
        Number(
            getExcelValue(
                row,
                [
                    "السعر",
                    "قيمة الاشتراك",
                    "المبلغ",
                    "price",
                    "amount"
                ]
            ) || 0
        );
    const balance =
        Number(
            getExcelValue(
                row,
                [
                    "الرصيد",
                    "الرصيد الأساسي",
                    "المتبقي",
                    "balance",
                    "remaining"
                ]
            ) || 0
        );
    const start =
        normalizeExcelDate(
            getExcelValue(
                row,
                [
                    "تاريخ البداية",
                    "البداية",
                    "start",
                    "start date"
                ]
            )
        );
    const end =
        normalizeExcelDate(
            getExcelValue(
                row,
                [
                    "تاريخ الانتهاء",
                    "الانتهاء",
                    "النهاية",
                    "end",
                    "end date"
                ]
            )
        );
    const status =
        getExcelValue(
            row,
            [
                "الحالة",
                "status"
            ]
        ) ||
        "نشط";


    if (
        !customer &&
        !type &&
        !price
    ) {
        return;
    }


    const subscription = {

        id:
            generateImportId(),

        customerId:
            customer?.id || "",

        customerName:
            customer?.name ||
            customerName ||
            "",

        type:
            type ||
            "اشتراك",

        price:
            price,

        remaining:
            balance,

        planBalance:
            balance,

        start:
            start,

        end:
            end,

        status:
            status

    };


    subscriptions.push(
        subscription
    );


    imported.subscriptions++;
    revenues.push({

        type:
            "اشتراك",

        amount:
            price,

        subscriptionId:
            subscription.id,

        customerName:
            subscription.customerName,

        date:
            start

    });


    imported.revenues++;

}



// الإيرادات
function importRevenue(
    row,
    imported
) {

    const amount =
        Number(
            getExcelValue(
                row,
                [
                    "المبلغ",
                    "القيمة",
                    "الإجمالي",
                    "amount",
                    "price"
                ]
            ) || 0
        );


    const type =
        getExcelValue(
            row,
            [
                "النوع",
                "نوع الإيراد",
                "type"
            ]
        ) ||
        "إيراد";


    const date =
        normalizeExcelDate(
            getExcelValue(
                row,
                [
                    "التاريخ",
                    "تاريخ",
                    "date"
                ]
            )
        );


    const description =
        getExcelValue(
            row,
            [
                "الوصف",
                "البيان",
                "description"
            ]
        );


    if (
        !amount &&
        !description
    ) {
        return;
    }


    revenues.push({

        type:
            type,

        amount:
            amount,

        date:
            date,

        description:
            description

    });


    imported.revenues++;

}



// الفواتير
function importInvoice(
    row,
    imported
) {

    const customerName =
        getExcelValue(
            row,
            [
                "اسم العميل",
                "العميل",
                "customer",
                "customer name"
            ]
        );


    const customerPhone =
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


    let customer =
        findImportedCustomer(
            customerName,
            customerPhone
        );

    if (
        !customer &&
        (
            customerName ||
            customerPhone
        )
    ) {

        customer = {

            id:
                generateImportId(),

            name:
                customerName ||
                "عميل",

            phone:
                String(
                    customerPhone || ""
                ).trim(),

            invoices: 0,

            points: 0

        };


        customers.push(
            customer
        );


        imported.customers++;

    }
    const invoiceNumber =
        getExcelValue(
            row,
            [
                "رقم الفاتورة",
                "رقم الفاتورة ",
                "رقم",
                "invoice",
                "invoice number",
                "invoice no"
            ]
        );
        
    if (
        invoiceNumber &&
        invoices.some(
            invoice =>
                String(
                    invoice.invoiceNumber || ""
                ) ===
                String(
                    invoiceNumber
                )
        )
    ) {

        return;
    }


    const total =
        Number(
            getExcelValue(
                row,
                [
                    "الإجمالي",
                    "المجموع",
                    "الإجمالي النهائي",
                    "المبلغ",
                    "total",
                    "amount"
                ]
            ) || 0
        );


    const deliveryFee =
        Number(
            getExcelValue(
                row,
                [
                    "سعر التوصيل",
                    "رسوم التوصيل",
                    "التوصيل",
                    "delivery",
                    "delivery fee"
                ]
            ) || 0
        );

    const tax =
        Number(
            getExcelValue(
                row,
                [
                    "الضريبة",
                    "ضريبة",
                    "tax",
                    "vat"
                ]
            ) || 0
        );

    const discount =
        Number(
            getExcelValue(
                row,
                [
                    "الخصم",
                    "discount"
                ]
            ) || 0
        );


    const paymentMethod =
        getExcelValue(
            row,
            [
                "طريقة الدفع",
                "الدفع",
                "payment",
                "payment method"
            ]
        ) ||
        "نقداً";


    const date =
        normalizeExcelDate(
            getExcelValue(
                row,
                [
                    "التاريخ",
                    "تاريخ",
                    "date"
                ]
            )
        );


    const invoice = {

        id:
            generateImportId(),

        invoiceNumber:
            invoiceNumber ||
            generateInvoiceNumber(),

        date:
            date,

        customerId:
            customer?.id ||
            "",

        customerName:
            customer?.name ||
            customerName ||
            "",

        customerPhone:
            customer?.phone ||
            customerPhone ||
            "",

        items: [],

        subtotal:
            Math.max(
                0,
                total -
                deliveryFee -
                tax +
                discount
            ),

        tax:
            tax,

        discount:
            discount,

        deliveryFee:
            deliveryFee,

        deliveryType:
            deliveryFee > 0
                ? "توصيل"
                : "استلام",

        total:
            total,

        paymentMethod:
            paymentMethod,

        paymentStatus:
            getExcelValue(
                row,
                [
                    "حالة الدفع",
                    "payment status"
                ]
            ) ||
            "paid"

    };


    invoices.push(
        invoice
    );


    imported.invoices++;


    if (customer) {

        customer.invoices =
            Number(
                customer.invoices || 0
            ) + 1;

    }


    if (total > 0) {

        revenues.push({

            type:
                "فاتورة",

            amount:
                total,

            invoiceId:
                invoice.id,

            customerName:
                invoice.customerName,

            date:
                date

        });


        imported.revenues++;

    }

}



// الخدمات / المنتجات//
function importProduct(
    row,
    imported
) {


    let products =
        getLocalArray(
            "products"
        );


    const name =
        getExcelValue(
            row,
            [
                "اسم الخدمة",
                "اسم المنتج",
                "الخدمة",
                "المنتج",
                "name",
                "product",
                "service"
            ]
        );


    if (!name) {
        return;
    }


    const exists =
        products.some(
            product =>
                normalizeExcelText(
                    product.name
                ) ===
                normalizeExcelText(
                    name
                )
        );


    if (exists) {
        return;
    }


    products.push({

        id:
            generateImportId(),

        name:
            name,

        category:
            getExcelValue(
                row,
                [
                    "الفئة",
                    "التصنيف",
                    "category"
                ]
            ) ||
            "خدمات",

        price:
            Number(
                getExcelValue(
                    row,
                    [
                        "السعر",
                        "سعر",
                        "price"
                    ]
                ) || 0
            ),

        quantity:
            Number(
                getExcelValue(
                    row,
                    [
                        "الكمية",
                        "المخزون",
                        "quantity"
                    ]
                ) || 0
            )

    });


    localStorage.setItem(
        "products",
        JSON.stringify(
            products
        )
    );


    imported.products++;

}




function detectExcelType(
    sheet,
    keys,
    text
) {

    if (
        sheet.includes("عميل") ||
        sheet.includes("customer")
    ) {
        return "customer";
    }


    if (
        sheet.includes("فاتور") ||
        sheet.includes("مبيع") ||
        sheet.includes("invoice") ||
        sheet.includes("sales")
    ) {
        return "invoice";
    }


    if (
        sheet.includes("اشتراك") ||
        sheet.includes("subscription")
    ) {
        return "subscription";
    }


    if (
        sheet.includes("ايراد") ||
        sheet.includes("إيراد") ||
        sheet.includes("revenue")
    ) {
        return "revenue";
    }


    if (
        sheet.includes("منتج") ||
        sheet.includes("خدم") ||
        sheet.includes("product") ||
        sheet.includes("service") ||
        sheet.includes("مخزون")
    ) {
        return "product";
    }

    if (
        hasExcelColumn(
            keys,
            [
                "رقم الفاتورة",
                "invoice",
                "invoice number"
            ]
        )
    ) {
        return "invoice";
    }


    if (
        hasExcelColumn(
            keys,
            [
                "نوع الاشتراك",
                "الاشتراك",
                "subscription"
            ]
        )
    ) {
        return "subscription";
    }


    if (
        hasExcelColumn(
            keys,
            [
                "اسم الخدمة",
                "اسم المنتج",
                "الخدمة",
                "المنتج",
                "product",
                "service"
            ]
        )
    ) {
        return "product";
    }


    if (
        hasExcelColumn(
            keys,
            [
                "اسم العميل",
                "العميل",
                "customer"
            ]
        )
    ) {
        return "customer";
    }


    if (
        hasExcelColumn(
            keys,
            [
                "المبلغ",
                "الإيراد",
                "revenue"
            ]
        )
    ) {
        return "revenue";
    }


    return "unknown";

}



// البحث عن العميل
function findImportedCustomer(
    name,
    phone
) {

    const cleanPhone =
        String(
            phone || ""
        ).trim();


    if (cleanPhone) {

        const byPhone =
            customers.find(
                customer =>
                    String(
                        customer.phone || ""
                    ).trim() ===
                    cleanPhone
            );


        if (byPhone) {
            return byPhone;
        }

    }


    if (name) {

        return customers.find(
            customer =>
                normalizeExcelText(
                    customer.name
                ) ===
                normalizeExcelText(
                    name
                )
        );

    }


    return null;

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

        const normalizedWanted =
            normalizeExcelText(
                wanted
            );


        const key =
            keys.find(
                currentKey =>
                    normalizeExcelText(
                        currentKey
                    ) ===
                    normalizedWanted
            );


        if (
            key !== undefined
        ) {

            return row[key];

        }

    }


    return "";

}




function hasExcelColumn(
    keys,
    names
) {

    return names.some(
        name => {

            const wanted =
                normalizeExcelText(
                    name
                );


            return keys.some(
                key =>
                    normalizeExcelText(
                        key
                    ) ===
                    wanted
            );

        }
    );

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



//// دالة التاريخ 
function normalizeExcelDate(
    value
) {

    if (!value) {

        return new Date()
            .toISOString();

    }


    if (
        value instanceof Date
    ) {

        return value
            .toISOString();

    }


    const date =
        new Date(value);


    if (
        !isNaN(
            date.getTime()
        )
    ) {

        return date
            .toISOString();

    }


    return new Date()
        .toISOString();

}




function generateImportId() {

    return Date.now()
        .toString(36) +
        Math.random()
            .toString(36)
            .substring(
                2,
                9
            );

}




function generateInvoiceNumber() {

    return "IMP-" +
        Date.now() +
        "-" +
        Math.floor(
            Math.random() *
            1000
        );

}




function getLocalArray(
    key
) {

    try {

        const data =
            JSON.parse(
                localStorage.getItem(
                    key
                ) ||
                "[]"
            );


        return Array.isArray(data)
            ? data
            : [];

    } catch {

        return [];

    }

}