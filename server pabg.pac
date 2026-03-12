function FindProxyForURL(url, host) {
        // إذا كنت تفتح مواقع داخلية أو محليه، لا تستخدم البروكسي
            if (isPlainHostName(host) || shExpMatch(host, "*.local")) {
                        return "DIRECT";
            }

                // توجيه كافة طلبات الإنترنت عبر السيرفر الخاص بك
                    // استبدل 8080 بمنفذ (Port) السيرفر الخاص بك إذا كان مختلفاً
                        return "PROXY 1.1.1.1:8080; DIRECT";
        };

            
