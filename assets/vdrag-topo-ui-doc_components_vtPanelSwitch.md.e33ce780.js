import{_ as s,c as t,o as n,Q as a}from"./chunks/framework.e69504e4.js";const l="/vdrag-topo-docs/assets/vtPanelSwitch.42bdc909.png",A=JSON.parse('{"title":"vtPanelSwitch","description":"","frontmatter":{},"headers":[],"relativePath":"vdrag-topo-ui-doc/components/vtPanelSwitch.md","lastUpdated":1681566356000}'),e={name:"vdrag-topo-ui-doc/components/vtPanelSwitch.md"},o=a('<h1 id="vtpanelswitch" tabindex="-1">vtPanelSwitch <a class="header-anchor" href="#vtpanelswitch" aria-label="Permalink to &quot;vtPanelSwitch&quot;">​</a></h1><ul><li><p>demo <img src="'+l+`" alt="图片"></p></li><li><p>config</p></li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">vt-panel-switch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">config</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">configPanel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">vt-panel-switch</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> configPanelSwitch </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vtPanelSwitch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">描边</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">shadowOpen</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vtBorder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">样式</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stoke</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">key1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stokeStyle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">key2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stokeWidth</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><ul><li>属性</li></ul><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:right;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">可选</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:right;">组件的 key</td><td style="text-align:center;">string</td><td style="text-align:center;">必填</td></tr><tr><td style="text-align:left;">label</td><td style="text-align:right;">label 展示</td><td style="text-align:center;">string</td><td style="text-align:center;">必填</td></tr><tr><td style="text-align:left;">key</td><td style="text-align:right;">panel 是否展开</td><td style="text-align:center;">boolean</td><td style="text-align:center;">必填</td></tr><tr><td style="text-align:left;">children</td><td style="text-align:right;">在#content slot 中展示的内容</td><td style="text-align:center;">array</td><td style="text-align:center;">必填</td></tr></tbody></table>`,6),p=[o];function c(r,y,D,F,i,d){return n(),t("div",null,p)}const h=s(e,[["render",c]]);export{A as __pageData,h as default};
