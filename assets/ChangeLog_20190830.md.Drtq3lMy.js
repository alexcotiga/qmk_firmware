import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.DyMmIvSC.js";
const __pageData = JSON.parse('{"title":"QMK Breaking Change - 2019 Aug 30","description":"","frontmatter":{},"headers":[],"relativePath":"ChangeLog/20190830.md","filePath":"ChangeLog/20190830.md"}');
const _sfc_main = { name: "ChangeLog/20190830.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="qmk-breaking-change-2019-aug-30" tabindex="-1">QMK Breaking Change - 2019 Aug 30 <a class="header-anchor" href="#qmk-breaking-change-2019-aug-30" aria-label="Permalink to &quot;QMK Breaking Change - 2019 Aug 30&quot;">​</a></h1><p>Four times a year QMK runs a process for merging Breaking Changes. A Breaking Change is any change which modifies how QMK behaves in a way that is incompatible or potentially dangerous. We limit these changes to 4 times per year so that users can have confidence that updating their QMK tree will not break their keymaps.</p><p>This document marks the inaugural Breaking Change merge. A list of changes follows.</p><h2 id="core-code-formatting-with-clang-format" tabindex="-1">Core code formatting with clang-format <a class="header-anchor" href="#core-code-formatting-with-clang-format" aria-label="Permalink to &quot;Core code formatting with clang-format&quot;">​</a></h2><ul><li>All core files (<code>drivers/</code>, <code>quantum/</code>, <code>tests/</code>, and <code>tmk_core/</code>) have been formatted with clang-format</li><li>A travis process to reformat PRs on merge has been instituted</li><li>You can use the new CLI command <code>qmk cformat</code> to format before submitting your PR if you wish.</li></ul><h2 id="lufa-usb-descriptor-cleanup" tabindex="-1">LUFA USB descriptor cleanup <a class="header-anchor" href="#lufa-usb-descriptor-cleanup" aria-label="Permalink to &quot;LUFA USB descriptor cleanup&quot;">​</a></h2><ul><li>Some code cleanups related to the USB HID descriptors on AVR keyboards, to make them easier to read and understand</li><li>More information: see <a href="https://github.com/qmk/qmk_firmware/pull/4871" target="_blank" rel="noreferrer">https://github.com/qmk/qmk_firmware/pull/4871</a></li><li>No behaviour changes anticipated and no keymaps modified</li></ul><h2 id="migrating-action-layer-momentary-entries-in-fn-actions-to-mo-keycodes" tabindex="-1">Migrating <code>ACTION_LAYER_MOMENTARY()</code> entries in <code>fn_actions</code> to <code>MO()</code> keycodes <a class="header-anchor" href="#migrating-action-layer-momentary-entries-in-fn-actions-to-mo-keycodes" aria-label="Permalink to &quot;Migrating `ACTION_LAYER_MOMENTARY()` entries in `fn_actions` to `MO()` keycodes&quot;">​</a></h2><ul><li><code>fn_actions</code> is deprecated, and its functionality has been superseded by direct keycodes and <code>process_record_user()</code></li><li>The end result of removing this obsolete feature should result in a decent reduction in firmware size and code complexity</li><li>All keymaps affected are recommended to switch away from <code>fn_actions</code> in favour of the <a href="./../custom_quantum_functions">custom keycode</a> and <a href="./../feature_macros">macro</a> features</li></ul><h2 id="update-atreus-to-current-code-conventions" tabindex="-1">Update Atreus to current code conventions <a class="header-anchor" href="#update-atreus-to-current-code-conventions" aria-label="Permalink to &quot;Update Atreus to current code conventions&quot;">​</a></h2><ul><li>Duplicate include guards have bypassed the expected header processing behavior</li><li>All keymaps affected are recommended to remove duplication of <code>&lt;keyboard&gt;/config.h</code> to <code>&lt;keyboard&gt;/keymaps/&lt;user&gt;/config.h</code> and only provide overrides at the keymap level</li></ul><h2 id="backport-changes-to-keymap-language-files-from-zsa-fork" tabindex="-1">Backport changes to keymap language files from ZSA fork <a class="header-anchor" href="#backport-changes-to-keymap-language-files-from-zsa-fork" aria-label="Permalink to &quot;Backport changes to keymap language files from ZSA fork&quot;">​</a></h2><ul><li>Fixes an issue in the <code>keymap_br_abnt2.h</code> file that includes the wrong source (<code>keymap_common.h</code> instead of <code>keymap.h</code>)</li><li>Updates the <code>keymap_swedish.h</code> file to be specific to swedish, and not just &quot;nordic&quot; in general.</li><li>Any keymaps using this will need to remove <code>NO_*</code> and replace it with <code>SE_*</code>.</li></ul><h2 id="update-repo-to-use-lufa-as-a-git-submodule" tabindex="-1">Update repo to use LUFA as a git submodule <a class="header-anchor" href="#update-repo-to-use-lufa-as-a-git-submodule" aria-label="Permalink to &quot;Update repo to use LUFA as a git submodule&quot;">​</a></h2><ul><li><code>/lib/LUFA</code> removed from the repo</li><li>LUFA set as a submodule, pointing to qmk/lufa</li><li>This should allow more flexibility with LUFA, and allow us to keep the sub-module up to date, a lot more easily. It was ~2 years out of date with no easy path to fix that. This prevents that from being an issue in the future</li></ul><h2 id="migrating-action-backlight-entries-in-fn-actions-to-bl-keycodes" tabindex="-1">Migrating <code>ACTION_BACKLIGHT_*()</code> entries in <code>fn_actions</code> to <code>BL_</code> keycodes <a class="header-anchor" href="#migrating-action-backlight-entries-in-fn-actions-to-bl-keycodes" aria-label="Permalink to &quot;Migrating `ACTION_BACKLIGHT_*()` entries in `fn_actions` to `BL_` keycodes&quot;">​</a></h2><ul><li><code>fn_actions</code> is deprecated, and its functionality has been superseded by direct keycodes and <code>process_record_user()</code></li><li>All keymaps using these actions have had the relevant <code>KC_FN*</code> keys replaced with the equivalent <code>BL_*</code> keys</li><li>If you currently use <code>KC_FN*</code> you will need to replace <code>fn_actions</code> with the <a href="./../custom_quantum_functions">custom keycode</a> and <a href="./../feature_macros">macro</a> features</li></ul><h2 id="remove-kc-delt-alias-in-favor-of-kc-del" tabindex="-1">Remove <code>KC_DELT</code> alias in favor of <code>KC_DEL</code> <a class="header-anchor" href="#remove-kc-delt-alias-in-favor-of-kc-del" aria-label="Permalink to &quot;Remove `KC_DELT` alias in favor of `KC_DEL`&quot;">​</a></h2><ul><li><code>KC_DELT</code> was a redundant, undocumented alias for <code>KC_DELETE</code></li><li>It has been removed and all its uses replaced with the more common <code>KC_DEL</code> alias</li><li>Around 90 keymaps (mostly for ErgoDox boards) have been modified as a result</li></ul>', 19);
const _hoisted_20 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_20);
}
const _20190830 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _20190830 as default
};
