import{_ as t,c as s,o as l,Q as a}from"./chunks/framework.b316c3a7.js";const e="/vdrag-topo-docs/assets/vtTable.44dc0a35.png",C=JSON.parse('{"title":"vtUpload","description":"","frontmatter":{},"headers":[],"relativePath":"vdrag-topo-ui-doc/components/vtTable.md","lastUpdated":null}'),n={name:"vdrag-topo-ui-doc/components/vtTable.md"},o=a('<h1 id="vtupload" tabindex="-1">vtUpload <a class="header-anchor" href="#vtupload" aria-label="Permalink to &quot;vtUpload&quot;">​</a></h1><ul><li><p>demo <img src="'+e+`" alt="图片"></p></li><li><p>config</p></li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">vt-table</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">config</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">configTable</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">changeValue</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">changeValue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">vt-table</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> configTable </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vtTable</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">表格</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tableTitleData</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">draggble</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">showHeader</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><ul><li>属性</li></ul><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:right;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">可选</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:right;">组件的 key</td><td style="text-align:center;">string</td><td style="text-align:center;">必填</td></tr><tr><td style="text-align:left;">label</td><td style="text-align:right;">label 展示</td><td style="text-align:center;">string</td><td style="text-align:center;">必填</td></tr><tr><td style="text-align:left;">key</td><td style="text-align:right;">绑定的 key</td><td style="text-align:center;">string</td><td style="text-align:center;">必填</td></tr><tr><td style="text-align:left;">draggble</td><td style="text-align:right;">是否支持行拖拽，默认不支持</td><td style="text-align:center;">boolean</td><td style="text-align:center;">非必填</td></tr><tr><td style="text-align:left;">border</td><td style="text-align:right;">是否显示边框，默认显示</td><td style="text-align:center;">boolean</td><td style="text-align:center;">非必填</td></tr><tr><td style="text-align:left;">showHeader</td><td style="text-align:right;">是否显示表头，默认显示</td><td style="text-align:center;">boolean</td><td style="text-align:center;">非必填</td></tr></tbody></table><ul><li>方法</li></ul><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:right;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">可选</th></tr></thead><tbody><tr><td style="text-align:left;">changeValue(key, value)</td><td style="text-align:right;">绑定的 key 的值发生变化，触发改事件</td><td style="text-align:center;">Function</td><td style="text-align:center;">非必填</td></tr></tbody></table>`,8),p=[o];function r(c,y,d,i,D,F){return l(),s("div",null,p)}const h=t(n,[["render",r]]);export{C as __pageData,h as default};
