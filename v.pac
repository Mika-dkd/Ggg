function FindProxyForURL(url, host) {
            // توجيه بوبجي إلى سيرفر GitHub Codespaces الخاص بك
                if (shExpMatch(host, "*.playbattlegrounds.com") || 
                        shExpMatch(host, "*.pubgmobile.com") || 
                                shExpMatch(host, "*.proximabeta.com")) {
                                        
                                                // هنا نضع الرابط بدون https:// وبدون الشرطة المائلة في النهاية
                                                        return "SOCKS5 jubilant-fiesta-7vg575rjj5jhxv5v-1080.app.github.dev:443; DIRECT";
                                                            }

                                                                return "DIRECT";
                                                                }
                                                                
