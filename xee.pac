function FindProxyForURL(url, host) {
        // 1. قائمة نطاقات بوبجي موبايل المعروفة
            // تشمل سيرفرات اللعبة، التحقق من التحديثات، وسيرفرات تنسنت
                if (shExpMatch(host, "*.pubgmobile.com") || 
                        shExpMatch(host, "*.tencentgames.com") || 
                                shExpMatch(host, "*.igamecj.com") || 
                                        shExpMatch(host, "*.midasbuy.com") ||
                                                shExpMatch(host, "proximabeta.com")) {
                                                        
                                                                // توجيه اللعبة فقط إلى البروكسي الخاص بك في Codespaces
                                                                        return "SOCKS5 probable-umbrella-wrxxw676xg5x2x77-1080.app.github.dev:443";
                                                                            }

                                                                                // 2. أي شيء آخر (تصفح، يوتيوب، فيسبوك) يعمل مباشرة بدون بروكسي
                                                                                    return "DIRECT";
                                                                                    }

