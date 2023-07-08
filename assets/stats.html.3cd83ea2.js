import{r as t,o as e,c as a,a as i,b as s,w as n,F as c,d as o,e as r}from"./app.a645fd1a.js";const p={},l=o('<h1 id="traffic-statistics" tabindex="-1"><a class="header-anchor" href="#traffic-statistics" aria-hidden="true">#</a> Traffic Statistics</h1><p>Used to configure traffic statistics for Xray.</p><h2 id="statsobject" tabindex="-1"><a class="header-anchor" href="#statsobject" aria-hidden="true">#</a> StatsObject</h2><p>The <code>StatsObject</code> corresponds to the <code>stats</code> item in the configuration file.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Currently, no parameters are required for traffic statistics, and internal statistics will be enabled as long as the <code>StatsObject</code> item exists.</p>',6),d=r("After statistics are enabled, you only need to enable the corresponding items in the "),f=r("Policy"),g=r(" to collect the corresponding data."),u=o('<h2 id="retrieving-traffic-statistics" tabindex="-1"><a class="header-anchor" href="#retrieving-traffic-statistics" aria-hidden="true">#</a> Retrieving Traffic Statistics</h2><p>You can use the <code>xray api</code> command to retrieve traffic statistics.</p><p>The current traffic statistics are as follows:</p><ul><li><p>User Data</p><ul><li><p><code>user&gt;&gt;&gt;[email]&gt;&gt;&gt;traffic&gt;&gt;&gt;uplink</code></p><p>The uplink traffic of a specific user, in bytes.</p></li><li><p><code>user&gt;&gt;&gt;[email]&gt;&gt;&gt;traffic&gt;&gt;&gt;downlink</code></p><p>The downlink traffic of a specific user, in bytes.</p></li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>If the corresponding user does not have an email specified, statistics will not be enabled.</p></div><ul><li><p>Global Data</p><ul><li><p><code>inbound&gt;&gt;&gt;[tag]&gt;&gt;&gt;traffic&gt;&gt;&gt;uplink</code></p><p>The uplink traffic of a specific inbound, in bytes.</p></li><li><p><code>inbound&gt;&gt;&gt;[tag]&gt;&gt;&gt;traffic&gt;&gt;&gt;downlink</code></p><p>The downlink traffic of a specific inbound, in bytes.</p></li><li><p><code>outbound&gt;&gt;&gt;[tag]&gt;&gt;&gt;traffic&gt;&gt;&gt;uplink</code></p><p>The uplink traffic of a specific outbound, in bytes.</p></li><li><p><code>outbound&gt;&gt;&gt;[tag]&gt;&gt;&gt;traffic&gt;&gt;&gt;downlink</code></p><p>The downlink traffic of a specific outbound, in bytes.</p></li></ul></li></ul>',6);p.render=function(o,r){const p=t("RouterLink");return e(),a(c,null,[l,i("p",null,[d,s(p,{to:"/en/config/policy.html"},{default:n((()=>[f])),_:1}),g]),u],64)};export default p;
