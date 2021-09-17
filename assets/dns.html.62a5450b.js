import{r as n,o as s,c as l,a,b as e,w as o,F as t,e as c}from"./app.4835a470.js";const u={},p=a("h1",{id:"内置-dns-服务器",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#内置-dns-服务器","aria-hidden":"true"},"#"),c(" 内置 DNS 服务器")],-1),r=a("h2",{id:"dns-服务器",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#dns-服务器","aria-hidden":"true"},"#"),c(" DNS 服务器")],-1),i=a("p",null,"Xray 内置的 DNS 模块，主要有两大用途：",-1),d=a("ul",null,[a("li",null,[a("p",null,[c("在路由阶段, 解析域名为 IP, 并且根据域名解析得到的 IP 进行规则匹配以分流. 是否解析域名及分流和路由配置模块中 "),a("code",null,"domainStrategy"),c(" 的值有关, 只有在设置以下两种值时,才会使用内置 DNS 服务器进行 DNS 查询:")]),a("ul",null,[a("li",null,'"IPIfNonMatch", 请求一个域名时，进行路由里面的 domain 进行匹配，若无法匹配到结果，则对这个域名使用内置 DNS 服务器进行 DNS 查询，并且使用查询返回的 IP 地址再重新进行 IP 路由匹配。'),a("li",null,'"IPOnDemand", 当匹配时碰到任何基于 IP 的规则，将域名立即解析为 IP 进行匹配。')])]),a("li",null,[a("p",null,"解析目标地址进行连接。"),a("ul",null,[a("li",null,[c("如 在 "),a("code",null,"freedom"),c(" 出站中，将 "),a("code",null,"domainStrategy"),c(" 设置为 "),a("code",null,"UseIP"),c(", 由此出站发出的请求, 会先将域名通过内置服务器解析成 IP, 然后进行连接。")]),a("li",null,[c("如 在 "),a("code",null,"sockopt"),c(" 中，将 "),a("code",null,"domainStrategy"),c(" 设置为 "),a("code",null,"UseIP"),c(", 此出站发起的系统连接，将先由内置服务器解析为 IP, 然后进行连接。")])])])],-1),b=a("div",{class:"custom-container tip"},[a("p",{class:"custom-container-title"},"TIP 1"),a("p",null,"内置 DNS 服务器所发出的 DNS 查询请求，会自动根据路由配置进行转发。")],-1),k=a("div",{class:"custom-container tip"},[a("p",{class:"custom-container-title"},"TIP 2"),a("p",null,"只支持最基本的 IP 查询（A 和 AAAA 记录）。其他查询不会进入内置 DNS 服务器。")],-1),m=a("h2",{id:"dns-处理流程",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#dns-处理流程","aria-hidden":"true"},"#"),c(" DNS 处理流程")],-1),g=a("p",null,"DNS 服务器配置模块可以配置多个 DNS 服务器, 并且指定优先匹配列表.",-1),h=a("ol",null,[a("li",null,"查询的域名与某个 DNS 服务器指定的域名列表匹配时，Xray 会优先使用这个 DNS 服务器进行查询。"),a("li",null,"无匹配时, 按从上往下的顺序进行查询，并且会跳过 1 步骤中使用的最后一个服务器。"),a("li",null,"只返回匹配 expectIPs 的 IP 列表。")],-1),y=a("p",null,"DNS 服务器的处理流程示意图如下：",-1),D=a("p",null,[a("img",{src:"/Xray-docs-next/assets/dns_flow.c919fdc8.png?classes=border,shadow",alt:""})],-1),S=a("h2",{id:"dnsobject",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#dnsobject","aria-hidden":"true"},"#"),c(" DnsObject")],-1),I=a("p",null,[a("code",null,"DnsObject"),c(" 对应配置文件的 "),a("code",null,"dns"),c(" 项。")],-1),P=a("div",{class:"language-json ext-json line-numbers-mode"},[a("pre",{class:"language-json"},[a("code",null,[a("span",{class:"token punctuation"},"{"),c("\n  "),a("span",{class:"token property"},'"dns"'),a("span",{class:"token operator"},":"),c(),a("span",{class:"token punctuation"},"{"),c("\n    "),a("span",{class:"token property"},'"hosts"'),a("span",{class:"token operator"},":"),c(),a("span",{class:"token punctuation"},"{"),c("\n      "),a("span",{class:"token property"},'"baidu.com"'),a("span",{class:"token operator"},":"),c(),a("span",{class:"token string"},'"127.0.0.1"'),c("\n    "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),c("\n    "),a("span",{class:"token property"},'"servers"'),a("span",{class:"token operator"},":"),c(),a("span",{class:"token punctuation"},"["),c("\n      "),a("span",{class:"token string"},'"8.8.8.8"'),a("span",{class:"token punctuation"},","),c("\n      "),a("span",{class:"token string"},'"8.8.4.4"'),a("span",{class:"token punctuation"},","),c("\n      "),a("span",{class:"token punctuation"},"{"),c("\n        "),a("span",{class:"token property"},'"address"'),a("span",{class:"token operator"},":"),c(),a("span",{class:"token string"},'"1.2.3.4"'),a("span",{class:"token punctuation"},","),c("\n        "),a("span",{class:"token property"},'"port"'),a("span",{class:"token operator"},":"),c(),a("span",{class:"token number"},"5353"),a("span",{class:"token punctuation"},","),c("\n        "),a("span",{class:"token property"},'"domains"'),a("span",{class:"token operator"},":"),c(),a("span",{class:"token punctuation"},"["),a("span",{class:"token string"},'"domain:xray.com"'),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),c("\n        "),a("span",{class:"token property"},'"expectIPs"'),a("span",{class:"token operator"},":"),c(),a("span",{class:"token punctuation"},"["),a("span",{class:"token string"},'"geoip:cn"'),a("span",{class:"token punctuation"},"]"),c("\n      "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),c("\n      "),a("span",{class:"token string"},'"localhost"'),c("\n    "),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),c("\n    "),a("span",{class:"token property"},'"clientIp"'),a("span",{class:"token operator"},":"),c(),a("span",{class:"token string"},'"1.2.3.4"'),a("span",{class:"token punctuation"},","),c("\n    "),a("span",{class:"token property"},'"tag"'),a("span",{class:"token operator"},":"),c(),a("span",{class:"token string"},'"dns_inbound"'),c("\n  "),a("span",{class:"token punctuation"},"}"),c("\n"),a("span",{class:"token punctuation"},"}"),c("\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br"),a("span",{class:"line-number"},"18"),a("br"),a("span",{class:"line-number"},"19"),a("br"),a("span",{class:"line-number"},"20"),a("br")])],-1),N=a("blockquote",null,[a("p",null,[a("code",null,"hosts"),c(": map{string: address}")])],-1),f=a("p",null,'静态 IP 列表，其值为一系列的 "域名": "地址"。其中地址可以是 IP 或者域名。在解析域名时，如果域名匹配这个列表中的某一项:',-1),x=a("ul",null,[a("li",null,"当该项的地址为 IP 时，则解析结果为该项的 IP"),a("li",null,"当该项的地址为域名时，会使用此域名进行 IP 解析，而不使用原始域名。")],-1),v=a("p",null,"域名的格式有以下几种形式：",-1),j=a("li",null,'纯字符串：当此字符串完整匹配目标域名时，该规则生效。例如 "xray.com" 匹配 "xray.com"，但不匹配 "www.xray.com"。',-1),q=a("li",null,[c("正则表达式：由 "),a("code",null,'"regexp:"'),c(' 开始，余下部分是一个正则表达式。当此正则表达式匹配目标域名时，该规则生效。例如 "regexp:\\\\.goo.*\\\\.com$" 匹配 "www.google.com"、"fonts.googleapis.com"，但不匹配 "google.com"。')],-1),O=a("li",null,[c("子域名 (推荐)：由 "),a("code",null,'"domain:"'),c(' 开始，余下部分是一个域名。当此域名是目标域名或其子域名时，该规则生效。例如 "domain:xray.com" 匹配 "www.xray.com" 与 "xray.com"，但不匹配 "wxray.com"。')],-1),w=a("li",null,[c("子串：由 "),a("code",null,'"keyword:"'),c(' 开始，余下部分是一个字符串。当此字符串匹配目标域名中任意部分，该规则生效。比如 "keyword:sina.com" 可以匹配 "sina.com"、"sina.com.cn" 和 "www.sina.com"，但不匹配 "sina.cn"。')],-1),X=c("预定义域名列表：由 "),H=a("code",null,'"geosite:"',-1),A=c(" 开头，余下部分是一个名称，如 "),T=a("code",null,"geosite:google",-1),E=c(" 或者 "),F=a("code",null,"geosite:cn",-1),_=c("。名称及域名列表参考 "),R=c("预定义域名列表"),L=c("。"),U=a("blockquote",null,[a("p",null,[a("code",null,"servers"),c(": [string | "),a("a",{href:"#serverobject"},"ServerObject"),c(" ]")])],-1),C=a("p",null,[c("一个 DNS 服务器列表，支持的类型有两种：DNS 地址（字符串形式）和 "),a("a",{href:"#serverobject"},"ServerObject"),c(" 。")],-1),B=a("p",null,[c("当它的值是一个 DNS IP 地址时，如 "),a("code",null,'"8.8.8.8"'),c("，Xray 会使用此地址的 53 端口进行 DNS 查询。")],-1),M=a("p",null,[c("当值为 "),a("code",null,'"localhost"'),c(" 时，表示使用本机预设的 DNS 配置。")],-1),$=a("p",null,[c("当值是 "),a("code",null,'"https://host:port/dns-query"'),c(" 的形式，如 "),a("code",null,'"https://dns.google/dns-query"'),c("，Xray 会使用 "),a("code",null,"DNS over HTTPS"),c(" (RFC8484, 简称 DOH) 进行查询。有些服务商拥有 IP 别名的证书，可以直接写 IP 形式，比如 "),a("code",null,"https://1.1.1.1/dns-query"),c("。也可使用非标准端口和路径，如 "),a("code",null,'"https://a.b.c.d:8443/my-dns-query"')],-1),z=a("p",null,[c("当值是 "),a("code",null,'"https+local://host:port/dns-query"'),c(" 的形式，如 "),a("code",null,'"https+local://dns.google/dns-query"'),c("，Xray 会使用 "),a("code",null,"DOH本地模式"),c(" 进行查询，即 DOH 请求不会经过 Routing/Outbound 等组件，直接对外请求，以降低耗时。一般适合在服务端使用。也可使用非标端口和路径。")],-1),G=a("p",null,[c("当值是 "),a("code",null,"fakedns"),c(" 时，将使用 FakeDNS 功能进行查询。")],-1),J=a("div",{class:"custom-container tip"},[a("p",{class:"custom-container-title"},"TIP 1"),a("p",null,[c("当使用 "),a("code",null,"localhost"),c(" 时，本机的 DNS 请求不受 Xray 控制，需要额外的配置才可以使 DNS 请求由 Xray 转发。")])],-1),K=a("div",{class:"custom-container tip"},[a("p",{class:"custom-container-title"},"TIP 2"),a("p",null,[c("不同规则初始化得到的 DNS 客户端会在 Xray 启动日志中以 "),a("code",null,"info"),c(" 级别体现，比如 "),a("code",null,"local DOH"),c("、"),a("code",null,"remote DOH"),c(" 和 "),a("code",null,"udp"),c(" 等模式。")])],-1),Q={class:"custom-container tip"},V=a("p",{class:"custom-container-title"},"TIP 3",-1),W=c("(v1.4.0+) 可以在 "),Y=c("日志"),Z=c(" 中打开 DNS 查询日志。"),nn=a("blockquote",null,[a("p",null,[a("code",null,"clientIp"),c(": string")])],-1),sn=a("p",null,"用于 DNS 查询时通知服务器以指定 IP 位置。不能是私有地址。",-1),ln=a("blockquote",null,[a("p",null,[a("code",null,"tag"),c(": string")])],-1),an=a("p",null,[c("由内置 DNS 发出的查询流量，除 "),a("code",null,"localhost"),c(" 和 "),a("code",null,"DOHL_"),c(" 模式外，都可以用此标识在路由使用 "),a("code",null,"inboundTag"),c(" 进行匹配。")],-1),en=a("h3",{id:"serverobject",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#serverobject","aria-hidden":"true"},"#"),c(" ServerObject")],-1),on=a("div",{class:"language-json ext-json line-numbers-mode"},[a("pre",{class:"language-json"},[a("code",null,[a("span",{class:"token punctuation"},"{"),c("\n  "),a("span",{class:"token property"},'"address"'),a("span",{class:"token operator"},":"),c(),a("span",{class:"token string"},'"1.2.3.4"'),a("span",{class:"token punctuation"},","),c("\n  "),a("span",{class:"token property"},'"port"'),a("span",{class:"token operator"},":"),c(),a("span",{class:"token number"},"5353"),a("span",{class:"token punctuation"},","),c("\n  "),a("span",{class:"token property"},'"domains"'),a("span",{class:"token operator"},":"),c(),a("span",{class:"token punctuation"},"["),a("span",{class:"token string"},'"domain:xray.com"'),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),c("\n  "),a("span",{class:"token property"},'"expectIPs"'),a("span",{class:"token operator"},":"),c(),a("span",{class:"token punctuation"},"["),a("span",{class:"token string"},'"geoip:cn"'),a("span",{class:"token punctuation"},"]"),c("\n"),a("span",{class:"token punctuation"},"}"),c("\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br")])],-1),tn=a("blockquote",null,[a("p",null,[a("code",null,"address"),c(": address")])],-1),cn=a("p",null,"一个 DNS 服务器列表，支持的类型有两种：DNS 地址（字符串形式）和 ServerObject 。",-1),un=a("p",null,'当它的值是一个 DNS IP 地址时，如 "8.8.8.8"，Xray 会使用此地址的 53 端口进行 DNS 查询。',-1),pn=a("p",null,'当值为 "localhost" 时，表示使用本机预设的 DNS 配置。',-1),rn=a("p",null,[c("当值是 "),a("code",null,'"https://host:port/dns-query"'),c(" 的形式，如 "),a("code",null,'"https://dns.google/dns-query"'),c("，Xray 会使用 "),a("code",null,"DNS over HTTPS"),c(" (RFC8484, 简称 DOH) 进行查询。有些服务商拥有 IP 别名的证书，可以直接写 IP 形式，比如 "),a("code",null,"https://1.1.1.1/dns-query"),c("。也可使用非标准端口和路径，如 "),a("code",null,'"https://a.b.c.d:8443/my-dns-query"')],-1),dn=a("p",null,[c("当值是 "),a("code",null,'"https+local://host:port/dns-query"'),c(" 的形式，如 "),a("code",null,'"https+local://dns.google/dns-query"'),c("，Xray 会使用 DOH 本地模式 进行查询，即 DOH 请求不会经过 Routing/Outbound 等组件，直接对外请求，以降低耗时。一般适合在服务端使用。也可使用非标端口和路径。")],-1),bn=a("p",null,[c("当值是 "),a("code",null,"fakedns"),c(" 时，将使用 FakeDNS 功能进行查询。")],-1),kn=a("blockquote",null,[a("p",null,[a("code",null,"port"),c(": number")])],-1),mn=a("p",null,[c("DNS 服务器端口，如 "),a("code",null,"53"),c("。此项缺省时默认为 "),a("code",null,"53"),c("。当使用 DOH 模式该项无效，非标端口应在 URL 中指定。")],-1),gn=a("blockquote",null,[a("p",null,[a("code",null,"domains"),c(": [string]")])],-1),hn=c("一个域名列表，此列表包含的域名，将优先使用此服务器进行查询。域名格式和 "),yn=c("路由配置"),Dn=c(" 中相同。"),Sn=a("blockquote",null,[a("p",null,[a("code",null,"expectIPs"),c(":[string]")])],-1),In=c("一个 IP 范围列表，格式和 "),Pn=c("路由配置"),Nn=c(" 中相同。"),fn=a("p",null,"当配置此项时，Xray DNS 会对返回的 IP 的进行校验，只返回包含 expectIPs 列表中的地址。",-1),xn=a("p",null,"如果未配置此项，会原样返回 IP 地址。",-1);u.render=function(c,u){const vn=n("RouterLink");return s(),l(t,null,[p,r,i,d,b,k,m,g,h,y,D,S,I,P,N,f,x,v,a("ul",null,[j,q,O,w,a("li",null,[X,H,A,T,E,F,_,e(vn,{to:"/en/config/routing.html#%E9%A2%84%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E5%88%97%E8%A1%A8"},{default:o((()=>[R])),_:1}),L])]),U,C,B,M,$,z,G,J,K,a("div",Q,[V,a("p",null,[W,e(vn,{to:"/en/config/log.html"},{default:o((()=>[Y])),_:1}),Z])]),nn,sn,ln,an,en,on,tn,cn,un,pn,rn,dn,bn,kn,mn,gn,a("p",null,[hn,e(vn,{to:"/en/config/routing.html#ruleobject"},{default:o((()=>[yn])),_:1}),Dn]),Sn,a("p",null,[In,e(vn,{to:"/en/config/routing.html#ruleobject"},{default:o((()=>[Pn])),_:1}),Nn]),fn,xn],64)};export default u;
