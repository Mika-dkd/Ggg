// لابد من استخدام Node.js لإجراء الطلبات والكتابة إلى ملف
const fs = require('fs/promises'); // لاستخدام واجهة fs المبنية على Promises
const fetch = require('node-fetch'); // إذا كنت تستخدم إصدار Node.js قديمًا قبل دمج fetch

// إذا كنت تستخدم إصدار Node.js حديث (21+)، قد لا تحتاج لاستيراد 'node-fetch'
// ولكن في معظم الحالات، الأفضل استخدامه لضمان التوافق.

// عنوان URL الذي تريد إرسال 100 طلب إليه. (يجب تغييره)
const BASE_URL = 'https://raw.githubusercontent.com/Mika-dkd/Ggg/refs/heads/main/uio.pac'; 
const NUMBER_OF_REQUESTS = 100;

async function makeRequestsAndSave() {
    console.log(`بدء إرسال ${NUMBER_OF_REQUESTS} طلب إلى ${BASE_URL}...`);
        
            // إنشاء مصفوفة من الوعود (Promises)
                const requestPromises = [];
                    for (let i = 1; i <= NUMBER_OF_REQUESTS; i++) {
                            // لنفترض أننا نطلب مسارًا مختلفًا لكل طلب (مثل https://.../posts/1, /posts/2, ...)
                                    const url = `${BASE_URL}/${i}`; 
                                            
                                                    const requestPromise = fetch(url)
                                                                .then(response => {
                                                                                if (!response.ok) {
                                                                                                    throw new Error(`خطأ HTTP الحالة: ${response.status} لـ: ${url}`);
                                                                                                                    }
                                                                                                                                    return response.json(); // افترض أن الرد سيكون بصيغة JSON
                                                                                                                                                })
                                                                                                                                                            .then(data => ({ status: 'success', url, data }))
                                                                                                                                                                        .catch(error => {
                                                                                                                                                                                        console.error(`خطأ في الطلب لـ ${url}: ${error.message}`);
                                                                                                                                                                                                        return { status: 'error', url, message: error.message };
                                                                                                                                                                                                                    });

                                                                                                                                                                                                                            requestPromises.push(requestPromise);
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                    try {
                                                                                                                                                                                                                                            // انتظار جميع الوعود لتنتهي (سواء بنجاح أو فشل)
                                                                                                                                                                                                                                                    const allResults = await Promise.all(requestPromises);
                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                    // تحويل النتائج إلى سلسلة نصية (يمكنك اختيار تنسيق آخر مثل JSON)
                                                                                                                                                                                                                                                                            const resultsText = allResults.map(result => 
                                                                                                                                                                                                                                                                                        `URL: ${result.url}\nStatus: ${result.status}\nData: ${JSON.stringify(result.data || result.message)}\n---`
                                                                                                                                                                                                                                                                                                ).join('\n');
                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                const fileName = 'requests_results.txt';
                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                // كتابة النتائج إلى ملف
                                                                                                                                                                                                                                                                                                                                        await fs.writeFile(fileName, resultsText);
                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                        console.log(`✅ تم الانتهاء! تم حفظ النتائج في الملف: ${fileName}`);
                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                    } catch (error) {
                                                                                                                                                                                                                                                                                                                                                                            console.error('حدث خطأ أثناء معالجة الطلبات:', error);
                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                                makeRequestsAndSave();
