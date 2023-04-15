import{_ as t,c as s,o as a,Q as l}from"./chunks/framework.e69504e4.js";const n="/vdrag-topo-docs/assets/vtSwitch.893f4a37.png",g=JSON.parse('{"title":"vtSwitch","description":"","frontmatter":{},"headers":[],"relativePath":"vdrag-topo-ui-doc/components/vtSwitch.md","lastUpdated":1681566356000}'),e={name:"vdrag-topo-ui-doc/components/vtSwitch.md"},o=l('<h1 id="vtswitch" tabindex="-1">vtSwitch <a class="header-anchor" href="#vtswitch" aria-label="Permalink to &quot;vtSwitch&quot;">​</a></h1><ul><li><p>demo <img src="'+n+`" alt="图片"></p></li><li><p>config</p></li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">vt-switch</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">config</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">configSwitch</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">changeValue</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">changeValue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">vt-switch</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> configSwitch </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vtSwitch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">首行锁进</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">open</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">disabled</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">open</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ul><li>属性</li></ul><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:right;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">可选</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:right;">组件的 key</td><td style="text-align:center;">string</td><td style="text-align:center;">必填</td></tr><tr><td style="text-align:left;">label</td><td style="text-align:right;">label 展示</td><td style="text-align:center;">string</td><td style="text-align:center;">必填</td></tr><tr><td style="text-align:left;">key</td><td style="text-align:right;">绑定的 key</td><td style="text-align:center;">string</td><td style="text-align:center;">必填</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:right;">是否可编辑</td><td style="text-align:center;">boolean</td><td style="text-align:center;">非必填</td></tr></tbody></table><ul><li>方法</li></ul><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:right;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">可选</th></tr></thead><tbody><tr><td style="text-align:left;">changeValue(key, value)</td><td style="text-align:right;">绑定的 key 的值发生变化，触发改事件</td><td style="text-align:center;">Function</td><td style="text-align:center;">非必填</td></tr></tbody></table>`,8),p=[o];function c(r,y,i,D,F,d){return a(),s("div",null,p)}const h=t(e,[["render",c]]);export{g as __pageData,h as default};
