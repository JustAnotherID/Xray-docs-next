import{r as a,o as n,c as s,a as o,b as e,w as t,F as c,e as p,d as i}from"./app.b406bbc4.js";const l={},d=o("h1",{id:"domain-socket",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#domain-socket","aria-hidden":"true"},"#"),p(" Domain Socket")],-1),r={class:"custom-container danger"},u=o("p",{class:"custom-container-title"},"警告",-1),b=p("推荐写到 "),k=p("inbounds"),m=p(" 的 "),h=o("code",null,"listen",-1),f=p(" 处，传输方式可选 TCP、WebSocket、HTTP/2. 未来这里的 DomainSocket 可能会被弃用。"),q=i('<p>Domain Socket 使用标准的 Unix domain socket 来传输数据。</p><p>它的优势是使用了操作系统内建的传输通道，而不会占用网络缓存。 理论上相比起本地环回网络（local loopback）来说，Domain socket 速度略快一些。</p><p>目前仅可用于支持 Unix domain socket 的平台，如 Linux 和 macOS。在 Windows 10 Build 17036 前不可用。</p><p>如果指定了 domain socket 作为传输方式，在入站出站代理中配置的端口和 IP 地址将会失效，所有的传输由 domain socket 取代。</p><h2 id="domainsocketobject" tabindex="-1"><a class="header-anchor" href="#domainsocketobject" aria-hidden="true">#</a> DomainSocketObject</h2><p><code>DomainSocketObject</code> 对应传输配置的 <code>dsSettings</code> 项。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/path/to/ds/file&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;abstract&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;padding&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>path</code>: string</p></blockquote><p>一个合法的文件路径。</p><div class="custom-container danger"><p class="custom-container-title">警告</p><p>在运行 Xray 之前，这个文件必须不存在。</p></div><blockquote><p><code>abstract</code>: true | false</p></blockquote><p>是否为 abstract domain socket，默认值 <code>false</code>。</p><blockquote><p><code>padding</code>: true | false</p></blockquote><p>abstract domain socket 是否带 padding，默认值 <code>false</code>。</p>',14);l.render=function(p,i){const l=a("RouterLink");return n(),s(c,null,[d,o("div",r,[u,o("p",null,[b,e(l,{to:"/config/inbound.html"},{default:t((()=>[k])),_:1}),m,h,f])]),q],64)};export default l;