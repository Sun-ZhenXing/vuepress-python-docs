import{_ as t,r as o,o as r,c as i,b as s,a as n,w as p,d as a,e as c}from"./app-fnnGyvh1.js";const d={},D=s("h1",{id:"python-工程下使用-git-钩子",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#python-工程下使用-git-钩子","aria-hidden":"true"},"#"),a(" Python 工程下使用 Git 钩子")],-1),m={class:"table-of-contents"},h=s("h2",{id:"1-安装-pre-commit-钩子",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#1-安装-pre-commit-钩子","aria-hidden":"true"},"#"),a(" 1. 安装 pre-commit 钩子")],-1),y={href:"https://pre-commit.com/",target:"_blank",rel:"noopener noreferrer"},u=c(`<p>下面安装 <code>pre-commit</code>：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pip</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">pre-commit</span></span>
<span class="line"></span></code></pre></div><p>或者使用 <code>pipx</code> 安装，这也是推荐的安装方式：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pipx</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">pre-commit</span></span>
<span class="line"></span></code></pre></div><p>可以使用 Homebrew 安装：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">brew</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">pre-commit</span></span>
<span class="line"></span></code></pre></div><h2 id="2-快速开始" tabindex="-1"><a class="header-anchor" href="#2-快速开始" aria-hidden="true">#</a> 2. 快速开始</h2><p><code>pre-commit</code> 的使用非常简单，只需要在项目根目录下创建一个 <code>.pre-commit-config.yaml</code> 文件，然后在其中指定需要运行的钩子即可。</p><p>你可以使用 <code>pre-commit sample-config</code> 生成一个基本配置。</p><p>下面示例使用 <code>black</code> 格式化项目代码：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">repos</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">-   </span><span style="color:#569CD6;">repo</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">https://github.com/pre-commit/pre-commit-hooks</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">rev</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">v2.3.0</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">hooks</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    -   </span><span style="color:#569CD6;">id</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">check-yaml</span></span>
<span class="line"><span style="color:#D4D4D4;">    -   </span><span style="color:#569CD6;">id</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">end-of-file-fixer</span></span>
<span class="line"><span style="color:#D4D4D4;">    -   </span><span style="color:#569CD6;">id</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">trailing-whitespace</span></span>
<span class="line"><span style="color:#D4D4D4;">-   </span><span style="color:#569CD6;">repo</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">https://github.com/psf/black</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">rev</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">22.10.0</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">hooks</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    -   </span><span style="color:#569CD6;">id</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">black</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),b={href:"https://pre-commit.com/hooks.html",target:"_blank",rel:"noopener noreferrer"},_=c(`<p>下面安装钩子：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pre-commit</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span></span>
<span class="line"></span></code></pre></div><p>在进行任何更改时，都可以运行钩子：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pre-commit</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">run</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--all-files</span></span>
<span class="line"></span></code></pre></div>`,4),v={href:"https://github.com/astral-sh/ruff",target:"_blank",rel:"noopener noreferrer"},k=s("code",null,"ruff",-1),C=s("code",null,"pre-commit",-1),E={href:"https://github.com/astral-sh/ruff-pre-commit",target:"_blank",rel:"noopener noreferrer"},f=s("code",null,"ruff-pre-commit",-1);function g(x,A){const l=o("router-link"),e=o("ExternalLinkIcon");return r(),i("div",null,[D,s("nav",m,[s("ul",null,[s("li",null,[n(l,{to:"#1-安装-pre-commit-钩子"},{default:p(()=>[a("1. 安装 pre-commit 钩子")]),_:1})]),s("li",null,[n(l,{to:"#2-快速开始"},{default:p(()=>[a("2. 快速开始")]),_:1})])])]),h,s("p",null,[s("a",y,[a("pre-commit"),n(e)]),a(" 是一个 Python 编写的工具，可以在各种项目中管理和维护多个 Git 钩子（除了 Python 项目，各种项目都可以使用）。")]),u,s("p",null,[a("通过 "),s("a",b,[a("官方文档：hooks"),n(e)]),a(" 查看所有可用的钩子。")]),_,s("blockquote",null,[s("p",null,[a("还有一些代码格式化工具，如 "),s("a",v,[k,n(e)]),a(" 也提供了 "),C,a(" 钩子 "),s("a",E,[f,n(e)]),a("。")])])])}const B=t(d,[["render",g],["__file","git-hooks.html.vue"]]);export{B as default};