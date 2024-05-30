import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.DyMmIvSC.js";
const __pageData = JSON.parse('{"title":"Layouts: Using a Keymap with Multiple Keyboards","description":"","frontmatter":{},"headers":[],"relativePath":"feature_layouts.md","filePath":"feature_layouts.md"}');
const _sfc_main = { name: "feature_layouts.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="layouts-using-a-keymap-with-multiple-keyboards" tabindex="-1">Layouts: Using a Keymap with Multiple Keyboards <a class="header-anchor" href="#layouts-using-a-keymap-with-multiple-keyboards" aria-label="Permalink to &quot;Layouts: Using a Keymap with Multiple Keyboards&quot;">​</a></h1><p>The <code>layouts/</code> folder contains different physical key layouts that can apply to different keyboards.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>layouts/</span></span>\n<span class="line"><span>+ default/</span></span>\n<span class="line"><span>| + 60_ansi/</span></span>\n<span class="line"><span>| | + readme.md</span></span>\n<span class="line"><span>| | + layout.json</span></span>\n<span class="line"><span>| | + a_good_keymap/</span></span>\n<span class="line"><span>| | | + keymap.c</span></span>\n<span class="line"><span>| | | + readme.md</span></span>\n<span class="line"><span>| | | + config.h</span></span>\n<span class="line"><span>| | | + rules.mk</span></span>\n<span class="line"><span>| | + &lt;keymap folder&gt;/</span></span>\n<span class="line"><span>| | + ...</span></span>\n<span class="line"><span>| + &lt;layout folder&gt;/</span></span>\n<span class="line"><span>+ community/</span></span>\n<span class="line"><span>| + &lt;layout folder&gt;/</span></span>\n<span class="line"><span>| + ...</span></span></code></pre></div><p>The <code>layouts/default/</code> and <code>layouts/community/</code> are two examples of layout &quot;repositories&quot; - currently <code>default</code> will contain all of the information concerning the layout, and one default keymap named <code>default_&lt;layout&gt;</code>, for users to use as a reference. <code>community</code> contains all of the community keymaps, with the eventual goal of being split-off into a separate repo for users to clone into <code>layouts/</code>. QMK searches through all folders in <code>layouts/</code>, so it&#39;s possible to have multiple repositories here.</p><p>Each layout folder is named (<code>[a-z0-9_]</code>) after the physical aspects of the layout, in the most generic way possible, and contains a <code>readme.md</code> with the layout to be defined by the keyboard:</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 60_ansi</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   LAYOUT_60_ansi</span></span></code></pre></div><p>New names should try to stick to the standards set by existing layouts, and can be discussed in the PR/Issue.</p><h2 id="supporting-a-layout" tabindex="-1">Supporting a Layout <a class="header-anchor" href="#supporting-a-layout" aria-label="Permalink to &quot;Supporting a Layout&quot;">​</a></h2><p>For a keyboard to support a layout, the variable must be defined in it&#39;s <code>&lt;keyboard&gt;.h</code>, and match the number of arguments/keys (and preferably the physical layout):</p><pre><code>#define LAYOUT_60_ansi KEYMAP_ANSI\n</code></pre><p>The name of the layout must match this regex: <code>[a-z0-9_]+</code></p><p>The folder name must be added to the keyboard&#39;s <code>rules.mk</code>:</p><pre><code>LAYOUTS = 60_ansi\n</code></pre><p><code>LAYOUTS</code> can be set in any keyboard folder level&#39;s <code>rules.mk</code>:</p><pre><code>LAYOUTS = 60_iso\n</code></pre><p>but the <code>LAYOUT_&lt;layout&gt;</code> variable must be defined in <code>&lt;folder&gt;.h</code> as well.</p><h2 id="building-a-keymap" tabindex="-1">Building a Keymap <a class="header-anchor" href="#building-a-keymap" aria-label="Permalink to &quot;Building a Keymap&quot;">​</a></h2><p>You should be able to build the keyboard keymap with a command in this format:</p><pre><code>make &lt;keyboard&gt;:&lt;layout&gt;\n</code></pre><h3 id="conflicting-layouts" tabindex="-1">Conflicting layouts <a class="header-anchor" href="#conflicting-layouts" aria-label="Permalink to &quot;Conflicting layouts&quot;">​</a></h3><p>When a keyboard supports multiple layout options,</p><pre><code>LAYOUTS = ortho_4x4 ortho_4x12\n</code></pre><p>And a layout exists for both options,</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>layouts/</span></span>\n<span class="line"><span>+ community/</span></span>\n<span class="line"><span>| + ortho_4x4/</span></span>\n<span class="line"><span>| | + &lt;layout&gt;/</span></span>\n<span class="line"><span>| | | + ...</span></span>\n<span class="line"><span>| + ortho_4x12/</span></span>\n<span class="line"><span>| | + &lt;layout&gt;/</span></span>\n<span class="line"><span>| | | + ...</span></span>\n<span class="line"><span>| + ...</span></span></code></pre></div><p>The FORCE_LAYOUT argument can be used to specify which layout to build</p><pre><code>make &lt;keyboard&gt;:&lt;layout&gt; FORCE_LAYOUT=ortho_4x4\nmake &lt;keyboard&gt;:&lt;layout&gt; FORCE_LAYOUT=ortho_4x12\n</code></pre><h2 id="tips-for-making-layouts-keyboard-agnostic" tabindex="-1">Tips for Making Layouts Keyboard-Agnostic <a class="header-anchor" href="#tips-for-making-layouts-keyboard-agnostic" aria-label="Permalink to &quot;Tips for Making Layouts Keyboard-Agnostic&quot;">​</a></h2><h3 id="includes" tabindex="-1">Includes <a class="header-anchor" href="#includes" aria-label="Permalink to &quot;Includes&quot;">​</a></h3><p>Instead of using <code>#include &quot;planck.h&quot;</code>, you can use this line to include whatever <code>&lt;keyboard&gt;.h</code> (<code>&lt;folder&gt;.h</code> should not be included here) file that is being compiled:</p><pre><code>#include QMK_KEYBOARD_H\n</code></pre><p>If you want to keep some keyboard-specific code, you can use these variables to escape it with an <code>#ifdef</code> statement:</p><ul><li><code>KEYBOARD_&lt;folder1&gt;_&lt;folder2&gt;</code></li></ul><p>For example:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> KEYBOARD_planck</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    #ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> KEYBOARD_planck_rev4</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        planck_rev4_function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    #endif</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#endif</span></span></code></pre></div><p>Note that the names are lowercase and match the folder/file names for the keyboard/revision exactly.</p><h3 id="keymaps" tabindex="-1">Keymaps <a class="header-anchor" href="#keymaps" aria-label="Permalink to &quot;Keymaps&quot;">​</a></h3><p>In order to support both split and non-split keyboards with the same layout, you need to use the keyboard agnostic <code>LAYOUT_&lt;layout name&gt;</code> macro in your keymap. For instance, in order for a Let&#39;s Split and Planck to share the same layout file, you need to use <code>LAYOUT_ortho_4x12</code> instead of <code>LAYOUT_planck_grid</code> or just <code>{}</code> for a C array.</p>', 37);
const _hoisted_38 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_38);
}
const feature_layouts = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  feature_layouts as default
};
