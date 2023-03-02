import{_ as n,p as s,q as a,a1 as t}from"./framework-8980b429.js";const p={},e=t(`<h1 id="将-bytes-转换为任意-c-类型" tabindex="-1"><a class="header-anchor" href="#将-bytes-转换为任意-c-类型" aria-hidden="true">#</a> 将 bytes 转换为任意 C 类型</h1><p>下面的方法实现了 <code>bytes</code> 转换到任意 C 类型。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> ctypes <span class="token keyword">import</span> POINTER<span class="token punctuation">,</span> c_char_p<span class="token punctuation">,</span> c_double<span class="token punctuation">,</span> cast<span class="token punctuation">,</span> sizeof
<span class="token keyword">from</span> typing <span class="token keyword">import</span> TypeVar

_T <span class="token operator">=</span> TypeVar<span class="token punctuation">(</span><span class="token string">&#39;_T&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">cast_bytes</span><span class="token punctuation">(</span>data_bytes<span class="token punctuation">:</span> <span class="token builtin">bytes</span><span class="token punctuation">,</span> ctype<span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">[</span>_T<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> _T<span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;Cast bytes to a ctype&quot;&quot;&quot;</span>
    <span class="token keyword">assert</span> <span class="token builtin">len</span><span class="token punctuation">(</span>data_bytes<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> sizeof<span class="token punctuation">(</span>ctype<span class="token punctuation">)</span>
    <span class="token keyword">return</span> cast<span class="token punctuation">(</span>
        c_char_p<span class="token punctuation">(</span>data_bytes<span class="token punctuation">)</span><span class="token punctuation">,</span>
        POINTER<span class="token punctuation">(</span>ctype<span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span>contents

v <span class="token operator">=</span> cast_bytes<span class="token punctuation">(</span><span class="token string">b&#39;\\x7f&#39;</span> <span class="token operator">*</span> <span class="token number">8</span><span class="token punctuation">,</span> c_double<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们就获得了一个 <code>c_double</code> 类型的 <code>v</code> 变量，使用 <code>v.value</code> 很容易获得其值。</p><p>以上的代码相当于下面的 C++ 代码：</p><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\\x7f\\x7f\\x7f\\x7f\\x7f\\x7f\\x7f\\x7f&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> value <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">double</span><span class="token operator">*</span><span class="token punctuation">)</span>a<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> value <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>如果需要使用 Python 将 C 类型转换为二进制表示，使用 <code>memoryview</code> 即可。</p>`,7),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","convert-bytes-to-any-ctypes.html.vue"]]);export{r as default};
