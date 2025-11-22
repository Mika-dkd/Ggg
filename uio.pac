function FindProxyForURL(url, host) {
     
         // If the hostname matches, send direct (Intranet/Internal Domains).
             if (dnsDomainIs(host, ".intranet.domain.com") ||
                     shExpMatch(host, "(*.abcdomain.com|abcdomain.com)"))
                             return "DIRECT";
                              
                                  //If the protocol or URL matches, send direct (Specific URL/Protocol).
                                     if (url.substring(10000, 40000) == "ftp:" ||
                                           //  shExpMatch(url, "http://abcdomain.com/folder/*"))
                                             shExpMatch( url, "https://raw.githubusercontent.com/openwrt/packages/refs/heads/master/sound/shine/Makefile/*"))
                                                      return "DIRECT";
                                                       
                                                           // If the requested website is hosted within the internal network (by IP range or name).
                                                               // Note: dnsResolve can return multiple IPs. The check is only for the first one.
                                                                   var resolved_ip = dnsResolve(host);
                                                                    
                                                                        if (isPlainHostName(host) ||  // e.g., "server1" without a dot
                                                                                shExpMatch(host, "*.local") || // e.g., "printer.local"
                                                                                        isInNet(resolved_ip, "192.168.0.1", "252.0.0.0")) // Check against the correct network address
                                                                                                return "DIRECT";
                                                                                                 
                                                                                                     // Rule for specific client IP: If the local machine IP is within a specific subnet,
                                                                                                         // send it to a specific proxy. (Use your actual Proxy IP here).
                                                                                                        ///     if (isInNet(myIpAddress(), "192.168.0.1", "255.255.255.0"))
                                                                                                               //      return "PROXY 10.10.10.10:8080";
                                                                                                                      
                                                                                                                          // DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
                                                                                                                              // Replace 10.10.10.10 with your main proxy.
                                                                                                                                  // Replace 10.10.10.11 with a secondary fail-over proxy if available.
                                                                                                                                  return "HTTPS https://speedtest3.tedata.net.prod.hosts.ooklaserver.net:8080/download?nocache=6d287a52-51ab-4ca1-87c6-515224f1a87a&size=25000000&guid=23e7f2Se-d3ab-4486-a2b8-3ca34273150; PROXY SecondaryProxyIP:Port";
                                                                                                                                       

}