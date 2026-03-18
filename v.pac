function FindProxyForURL(url, host) {
        // سيرفرات بوبجي الأساسية
            if (
                        shExpMatch(host, "*.playbattlegrounds.com") || 
                                shExpMatch(host, "*.pubgmobile.com") || 
                                        shExpMatch(host, "*.proximabeta.com") ||
                                                shExpMatch(host, "telemetry-p.igamecj.com")
            ) {
                        // نستخدم SOCKS5 هنا لأنه أسرع للألعاب
                                // 127.0.0.1 هو جهازك، أو استبدله بـ IP السيرفر
                                        return "SOCKS5 100.120.0.2:1080; SOCKS 100.120.0.2:1080; DIRECT";
            }

                // باقي المواقع تعمل بشكل طبيعي (DIRECT)
                    return "DIRECT";
        }

            
            
