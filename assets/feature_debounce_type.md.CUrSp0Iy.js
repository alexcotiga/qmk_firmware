import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.DyMmIvSC.js";
const __pageData = JSON.parse('{"title":"Contact bounce / contact chatter","description":"","frontmatter":{},"headers":[],"relativePath":"feature_debounce_type.md","filePath":"feature_debounce_type.md"}');
const _sfc_main = { name: "feature_debounce_type.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="contact-bounce-contact-chatter" tabindex="-1">Contact bounce / contact chatter <a class="header-anchor" href="#contact-bounce-contact-chatter" aria-label="Permalink to &quot;Contact bounce / contact chatter&quot;">​</a></h1><p>Mechanical switches often don&#39;t have a clean single transition between pressed and unpressed states.</p><p>In an ideal world, when you press a switch, you would expect the digital pin to see something like this: (X axis showing time</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>voltage                   +----------------------</span></span>\n<span class="line"><span> ^                        |</span></span>\n<span class="line"><span> |                        |</span></span>\n<span class="line"><span> |      ------------------+</span></span>\n<span class="line"><span>          ----&gt; time</span></span></code></pre></div><p>However in the real world you will actually see contact bounce, which will look like multiple 1-&gt;0 and 0-&gt;1 transitions, until the value finally settles.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>                  +-+ +--+ +-------------</span></span>\n<span class="line"><span>                  | | |  | |</span></span>\n<span class="line"><span>                  | | |  | |</span></span>\n<span class="line"><span>+-----------------+ +-+  +-+</span></span></code></pre></div><p>The time it takes for the switch to settle might vary with switch type, age, and even pressing technique.</p><p>If the device chooses not to mitigate contact bounce, then often actions that happen when the switch is pressed are repeated multiple times.</p><p>There are many ways to handle contact bounce (&quot;Debouncing&quot;). Some include employing additional hardware, for example an RC filter, while there are various ways to do debouncing in software too, often called debounce algorithms. This page discusses software debouncing methods available in QMK.</p><p>While technically not considered contact bounce/contact chatter, some switch technologies are susceptible to noise, meaning, while the key is not changing state, sometimes short random 0-&gt;1 or 1-&gt;0 transitions might be read by the digital circuit, for example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>                  +-+</span></span>\n<span class="line"><span>                  | |</span></span>\n<span class="line"><span>                  | |</span></span>\n<span class="line"><span>+-----------------+ +--------------------</span></span></code></pre></div><p>Many debounce methods (but not all) will also make the device resistant to noise. If you are working with a technology that is susceptible to noise, you must choose a debounce method that will also mitigate noise for you.</p><h2 id="types-of-debounce-algorithms" tabindex="-1">Types of debounce algorithms <a class="header-anchor" href="#types-of-debounce-algorithms" aria-label="Permalink to &quot;Types of debounce algorithms&quot;">​</a></h2><ol><li><p>Unit of time: Timestamp (milliseconds) vs Cycles (scans)</p><ul><li>Debounce algorithms often have a &#39;debounce time&#39; parameter, that specifies the maximum settling time of the switch contacts. This time might be measured in various units: <ul><li>Cycles-based debouncing waits n cycles (scans), decreasing count by one each matrix_scan</li><li>Timestamp-based debouncing stores the millisecond timestamp a change occurred, and does substraction to figure out time elapsed.</li></ul></li><li>Timestamp-based debouncing is usually superior, especially in the case of noise-resistant devices because settling times of physical switches is specified in units of time, and should not depend on the matrix scan-rate of the keyboard.</li><li>Cycles-based debouncing is sometimes considered inferior, because the settling time that it is able to compensate for depends on the performance of the matrix scanning code. If you use cycles-based debouncing, and you significantly improve the performance of your scanning code, you might end up with less effective debouncing. A situation in which cycles-based debouncing might be preferable is when noise is present, and the scanning algorithm is slow, or variable speed. Even if your debounce algorithm is fundamentally noise-resistant, if the scanning is slow, and you are using a timestamp-based algorithm, you might end up making a debouncing decision based on only two sampled values, which will limit the noise-resistance of the algorithm.</li><li>Currently all built-in debounce algorithms support timestamp-based debouncing only. In the future we might implement cycles-based debouncing, and it will be selectable via a <code>config.h</code> macro.</li></ul></li><li><p>Symmetric vs Asymmetric</p><ul><li>Symmetric - apply the same debouncing algorithm, to both key-up and key-down events. <ul><li>Recommended naming convention: <code>sym_*</code></li></ul></li><li>Asymmetric - apply different debouncing algorithms to key-down and key-up events. E.g. Eager key-down, Defer key-up. <ul><li>Recommended naming convention: <code>asym_*</code> followed by details of the type of algorithm in use, in order, for key-down and then key-up</li></ul></li></ul></li><li><p>Eager vs Defer</p><ul><li>Eager - any key change is reported immediately. All further inputs for DEBOUNCE ms are ignored. <ul><li>Eager algorithms are not noise-resistant.</li><li>Recommended naming conventions: <ul><li><code>sym_eager_*</code></li><li><code>asym_eager_*_*</code>: key-down is using eager algorithm</li><li><code>asym_*_eager_*</code>: key-up is using eager algorithm</li></ul></li></ul></li><li>Defer - wait for no changes for DEBOUNCE ms before reporting change. <ul><li>Defer algorithms are noise-resistant</li><li>Recommended naming conventions: <ul><li><code>sym_defer_*</code></li><li><code>asym_defer_*_*</code>: key-down is using defer algorithm</li><li><code>asym_*_defer_*</code>: key-up is using defer algorithm</li></ul></li></ul></li></ul></li><li><p>Global vs Per-Key vs Per-Row</p><ul><li>Global - one timer for all keys. Any key change state affects global timer <ul><li>Recommended naming convention: <code>*_g</code></li></ul></li><li>Per-key - one timer per key <ul><li>Recommended naming convention: <code>*_pk</code></li></ul></li><li>Per-row - one timer per row <ul><li>Recommended naming convention: <code>*_pr</code></li></ul></li><li>Per-key and per-row algorithms consume more resources (in terms of performance, and ram usage), but fast typists might prefer them over global.</li></ul></li></ol><h2 id="supported-debounce-algorithms" tabindex="-1">Supported Debounce Algorithms <a class="header-anchor" href="#supported-debounce-algorithms" aria-label="Permalink to &quot;Supported Debounce Algorithms&quot;">​</a></h2><p>QMK supports multiple algorithms through its debounce API.</p><h3 id="debounce-time" tabindex="-1">Debounce Time <a class="header-anchor" href="#debounce-time" aria-label="Permalink to &quot;Debounce Time&quot;">​</a></h3><p>Default debounce time is 5 milliseconds and it can be changed with the following line in <code>config.h</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#define DEBOUNCE 10</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Setting <code>DEBOUNCE</code> to <code>0</code> will disable this feature.</p></div><h3 id="debounce-method" tabindex="-1">Debounce Method <a class="header-anchor" href="#debounce-method" aria-label="Permalink to &quot;Debounce Method&quot;">​</a></h3><p>Keyboards may select one of the core debounce methods by adding the following line into <code>rules.mk</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>DEBOUNCE_TYPE = &lt;name of algorithm&gt;</span></span></code></pre></div><p>Name of algorithm is one of:</p><table><thead><tr><th>Algorithm</th><th>Description</th></tr></thead><tbody><tr><td><code>sym_defer_g</code></td><td>Debouncing per keyboard. On any state change, a global timer is set. When <code>DEBOUNCE</code> milliseconds of no changes has occurred, all input changes are pushed. This is the highest performance algorithm with lowest memory usage and is noise-resistant.</td></tr><tr><td><code>sym_defer_pr</code></td><td>Debouncing per row. On any state change, a per-row timer is set. When <code>DEBOUNCE</code> milliseconds of no changes have occurred on that row, the entire row is pushed. This can improve responsiveness over <code>sym_defer_g</code> while being less susceptible to noise than per-key algorithm.</td></tr><tr><td><code>sym_defer_pk</code></td><td>Debouncing per key. On any state change, a per-key timer is set. When <code>DEBOUNCE</code> milliseconds of no changes have occurred on that key, the key status change is pushed.</td></tr><tr><td><code>sym_eager_pr</code></td><td>Debouncing per row. On any state change, response is immediate, followed by <code>DEBOUNCE</code> milliseconds of no further input for that row.</td></tr><tr><td><code>sym_eager_pk</code></td><td>Debouncing per key. On any state change, response is immediate, followed by <code>DEBOUNCE</code> milliseconds of no further input for that key.</td></tr><tr><td><code>asym_eager_defer_pk</code></td><td>Debouncing per key. On a key-down state change, response is immediate, followed by <code>DEBOUNCE</code> milliseconds of no further input for that key. On a key-up state change, a per-key timer is set. When <code>DEBOUNCE</code> milliseconds of no changes have occurred on that key, the key-up status change is pushed.</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>sym_defer_g</code> is the default if <code>DEBOUNCE_TYPE</code> is undefined.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>sym_eager_pr</code> is suitable for use in keyboards where refreshing <code>NUM_KEYS</code> 8-bit counters is computationally expensive or has low scan rate while fingers usually hit one row at a time. This could be appropriate for the ErgoDox models where the matrix is rotated 90°. Hence its &quot;rows&quot; are really columns and each finger only hits a single &quot;row&quot; at a time with normal usage.</p></div><h3 id="implementing-your-own-debouncing-code" tabindex="-1">Implementing your own debouncing code <a class="header-anchor" href="#implementing-your-own-debouncing-code" aria-label="Permalink to &quot;Implementing your own debouncing code&quot;">​</a></h3><p>You have the option to implement you own debouncing algorithm with the following steps:</p><ul><li>Set <code>DEBOUNCE_TYPE = custom</code> in <code>rules.mk</code>.</li><li>Add <code>SRC += debounce.c</code> in <code>rules.mk</code></li><li>Implement your own <code>debounce.c</code>. See <code>quantum/debounce</code> for examples.</li><li>Debouncing occurs after every raw matrix scan.</li><li>Use num_rows instead of MATRIX_ROWS to support split keyboards correctly.</li><li>If your custom algorithm is applicable to other keyboards, please consider making a pull request.</li></ul>', 30);
const _hoisted_31 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_31);
}
const feature_debounce_type = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  feature_debounce_type as default
};
