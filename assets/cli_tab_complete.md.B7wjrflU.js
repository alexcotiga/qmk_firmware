import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.DyMmIvSC.js";
const __pageData = JSON.parse('{"title":"Tab Completion for QMK","description":"","frontmatter":{},"headers":[],"relativePath":"cli_tab_complete.md","filePath":"cli_tab_complete.md"}');
const _sfc_main = { name: "cli_tab_complete.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="tab-completion-for-qmk" tabindex="-1">Tab Completion for QMK <a class="header-anchor" href="#tab-completion-for-qmk" aria-label="Permalink to &quot;Tab Completion for QMK&quot;">​</a></h1><p>If you are using Bash 4.2 or later, Zsh, or FiSH you can enable Tab Completion for the QMK CLI. This will let you tab complete the names of flags, keyboards, files, and other <code>qmk</code> options.</p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><p>There are several ways you can setup tab completion.</p><h3 id="for-your-user-only" tabindex="-1">For Your User Only <a class="header-anchor" href="#for-your-user-only" aria-label="Permalink to &quot;For Your User Only&quot;">​</a></h3><p>Add this to the end of your <code>.profile</code> or <code>.bashrc</code>:</p><pre><code>source ~/qmk_firmware/util/qmk_tab_complete.sh\n</code></pre><p>If you put <code>qmk_firmware</code> into another location you will need to adjust this path.</p><p>Zsh users will need to load <code>bashcompinit</code>. The following can be added to <code>~/.zshrc</code> file:</p><pre><code>autoload -Uz bashcompinit &amp;&amp; bashcompinit\n</code></pre><h3 id="system-wide-symlink" tabindex="-1">System Wide Symlink <a class="header-anchor" href="#system-wide-symlink" aria-label="Permalink to &quot;System Wide Symlink&quot;">​</a></h3><p>If you want the tab completion available to all users of the system you can add a symlink to the <code>qmk_tab_complete.sh</code> script:</p><pre><code>ln -s ~/qmk_firmware/util/qmk_tab_complete.sh /etc/profile.d/qmk_tab_complete.sh\n</code></pre><h3 id="system-wide-copy" tabindex="-1">System Wide Copy <a class="header-anchor" href="#system-wide-copy" aria-label="Permalink to &quot;System Wide Copy&quot;">​</a></h3><p>In some cases a symlink may not work. Instead you can copy the file directly into place. Be aware that updates to the tab complete script may happen from time to time, you will want to recopy the file periodically.</p><pre><code>cp util/qmk_tab_complete.sh /etc/profile.d\n</code></pre>', 16);
const _hoisted_17 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_17);
}
const cli_tab_complete = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  cli_tab_complete as default
};
