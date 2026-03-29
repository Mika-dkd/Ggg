function FindProxyForURL(url, host) {
      // 1. العناوين المحلية التي لا تحتاج بروكسي
          if (isPlainHostName(host) || 
                  shExpMatch(host, "*.local") || 
                          host === "127.0.0.1" || 
                                  host === "localhost") {
                                          return "DIRECT";
                                              }

                                                  // 2. توجيه كافة البيانات إلى بروكسي Codespaces الخاص بك
                                                      // ملاحظة: نستخدم SOCKS5 لأننا برمجنا السيرفر بهذا البروتوكول
                                                          return "SOCKS5 probable-umbrella-wrxxw676xg5x2x77-1080.app.github.dev:443; DIRECT";
                                                          }

