// اسم الملف: proxy.pac

function FindProxyForURL(url, host) {
    // عنوان نقطة نهاية WireGuard (Endpoint)
        var wireguard_endpoint = "engage.cloudflareclient.com";
            // منفذ WireGuard (Endpoint Port) - غالبًا ما يكون 2488
                var wireguard_port = "2488"; 
                    
                        // عنوان IP الخاص بالند (Peer) على شبكة WireGuard (مأخوذ من AllowedIPs)
                            // لاحظ: لا يوجد بروكسي SOCKS يعمل على هذا العنوان مباشرة، هذا مثال افتراضي
                                // لتوجيه الحركة إلى بروكسي SOCKS يعمل عبر نفق WireGuard
                                    var socks_proxy_ip = "172.16.0.2"; 
                                        var socks_proxy_port = "1080"; // منفذ SOCKS الافتراضي

                                            // قائمة الاستثناءات: الاتصال مباشرة دون بروكسي (LAN/localhost)
                                                if (
                                                        isPlainHostName(host) ||
                                                                host == "localhost" ||
                                                                        isInNet(host, "127.0.0.1", "255.0.0.0") ||
                                                                                isInNet(host, "10.0.0.0", "255.0.0.0") ||
                                                                                        isInNet(host, "192.168.0.0", "255.255.0.0") ||
                                                                                                isInNet(host, "172.16.0.0", "255.240.0.0")
                                                                                                    ) {
                                                                                                            return "DIRECT";
                                                                                                                }

                                                                                                                    // إذا كانت عناوين AllowedIPs لديك هي 0.0.0.0/0 (لجميع الحركة)، 
                                                                                                                        // فمن المفترض أن يتم توجيه كل شيء عبر نفق WireGuard.
                                                                                                                            // لكن ملف PAC يحتاج إلى عنوان بروكسي SOCKS لتوجيه الحركة إليه.
                                                                                                                                
                                                                                                                                    // الافتراض: توجيه كل حركة المرور إلى بروكسي SOCKS يعمل عبر نفق WireGuard
                                                                                                                                        // *يجب* أن يكون هناك بروكسي SOCKS (مثل Dante أو Redsocks) يعمل على العنوان 
                                                                                                                                            // الداخلي لـ WireGuard (172.16.0.2) ومنفذ محدد (مثل 1080).
                                                                                                                                                return "SOCKS " + socks_proxy_ip + ":" + socks_proxy_port + "; DIRECT";
                                                                                                                                                    
                                                                                                                                                        // ملاحظة: إذا كنت تستخدم خدمة VPN مثل Cloudflare WARP التي قد تستخدم 
                                                                                                                                                            // WireGuard ولا توفر بروكسي SOCKS تقليديًا، فلن يعمل هذا PAC. 
                                                                                                                                                                // ملف PAC لا يستطيع تشغيل WireGuard، بل فقط يوجه حركة البروكسي.
                                                                                                                                                                }
                                                                                                                                                                