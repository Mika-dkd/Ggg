const socks5 = require('socksv5');

const srv = socks5.createServer((info, accept, deny) => {
  const socket = accept();
    if (socket) {
        // ميزة تقليل تأخير الطلقات: إرسال البيانات فوراً بدون انتظار التجميع
            socket.setNoDelay(true); 
                // تحسين استهلاك الموارد لضمان استقرار البنج
                    socket.setKeepAlive(true, 1000); 
                      }
                      });

                      srv.listen(1080, '0.0.0.0', () => {
                        console.log('pubgmobile.com:1080');
                        });

                        srv.useAuth(socks5.auth.None());
