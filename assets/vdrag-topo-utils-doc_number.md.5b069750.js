import{_ as t,c as s,o as a,Q as l}from"./chunks/framework.b316c3a7.js";const F=JSON.parse('{"title":"formatDecimal","description":"","frontmatter":{},"headers":[],"relativePath":"vdrag-topo-utils-doc/number.md","lastUpdated":1699946773000}'),o={name:"vdrag-topo-utils-doc/number.md"},e=l(`<h1 id="formatdecimal" tabindex="-1">formatDecimal <a class="header-anchor" href="#formatdecimal" aria-label="Permalink to &quot;formatDecimal&quot;">​</a></h1><blockquote><p>保留指定位数的小数</p></blockquote><ul><li>demo</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">formatDecimal</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vdrag-topo-utils</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">formatDecimal</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0.2000002</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 0.20</span></span></code></pre></div><ul><li>入参</li></ul><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:right;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">num</td><td style="text-align:right;">传入原数据</td></tr><tr><td style="text-align:left;">decimal</td><td style="text-align:right;">小数位数</td></tr></tbody></table><h1 id="random" tabindex="-1">random <a class="header-anchor" href="#random" aria-label="Permalink to &quot;random&quot;">​</a></h1><blockquote><p>生成指定范围(包含 min, 不包含 max)的随机整数</p></blockquote><ul><li>demo</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">random</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vdrag-topo-utils</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">random</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ul><li>入参</li></ul><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:right;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">min</td><td style="text-align:right;">数值的下限</td></tr><tr><td style="text-align:left;">max</td><td style="text-align:right;">数值的上限</td></tr></tbody></table>`,12),n=[e];function p(r,c,i,d,y,D){return a(),s("div",null,n)}const C=t(o,[["render",p]]);export{F as __pageData,C as default};
