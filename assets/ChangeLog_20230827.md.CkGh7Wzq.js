import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.DyMmIvSC.js";
const __pageData = JSON.parse('{"title":"QMK Breaking Changes - 2023 Aug 27 Changelog","description":"","frontmatter":{},"headers":[],"relativePath":"ChangeLog/20230827.md","filePath":"ChangeLog/20230827.md"}');
const _sfc_main = { name: "ChangeLog/20230827.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="qmk-breaking-changes-2023-aug-27-changelog" tabindex="-1">QMK Breaking Changes - 2023 Aug 27 Changelog <a class="header-anchor" href="#qmk-breaking-changes-2023-aug-27-changelog" aria-label="Permalink to &quot;QMK Breaking Changes - 2023 Aug 27 Changelog&quot;">​</a></h1><h2 id="notable-changes" tabindex="-1">Notable Changes <a class="header-anchor" href="#notable-changes" aria-label="Permalink to &quot;Notable Changes {#notable-changes}&quot;">​</a></h2><p>As per last few breaking changes cycles, there have been <em>a lot</em> of behind-the-scenes changes, mainly around migration of configurables into <code>info.json</code> files, cleanup of <code>info.json</code> files, additional layout definitions for keyboards, adding support for general community layouts to keyboards, as well as addressing technical debt.</p><p>One thing to note for this release -- <code>qmk/qmk_firmware</code> is no longer accepting PRs for keymaps other than for manufacturer-supported keymaps. User keymap workflow has been documented <a href="./../newbs">here</a> for several years. This change is to progressively reduce the maintenance burden on the project, and to allow us to focus on the core features of QMK.</p><p>Existing user keymaps and userspace areas will likely be relocated/removed in the future -- non-building keymaps and userspace will be first targets, likely during the new breaking changes cycle. We will provide more information on Discord regarding this initiative as it becomes available.</p><h3 id="rgb-matrix-optimizations" tabindex="-1">RGB Matrix optimizations (<a href="https://github.com/qmk/qmk_firmware/pull/21134" target="_blank" rel="noreferrer">#21134</a>, <a href="https://github.com/qmk/qmk_firmware/pull/21135" target="_blank" rel="noreferrer">#21135</a>) <a class="header-anchor" href="#rgb-matrix-optimizations" aria-label="Permalink to &quot;RGB Matrix optimizations ([#21134](https://github.com/qmk/qmk_firmware/pull/21134), [#21135](https://github.com/qmk/qmk_firmware/pull/21135)) {#rgb-matrix-optimizations}&quot;">​</a></h3><p>Most RGB Matrix implementations now check whether or not RGB LED data has changed and skip transmission if it hasn&#39;t. This was measured to improve scan frequency in cases of static or infrequently-changing colors.</p><h3 id="audio-optimizations-21496-21498" tabindex="-1">Audio optimizations (<a href="https://github.com/qmk/qmk_firmware/pull/21496" target="_blank" rel="noreferrer">#21496</a>, <a href="https://github.com/qmk/qmk_firmware/pull/21498" target="_blank" rel="noreferrer">#21498</a>) <a class="header-anchor" href="#audio-optimizations-21496-21498" aria-label="Permalink to &quot;Audio optimizations ([#21496](https://github.com/qmk/qmk_firmware/pull/21496), [#21498](https://github.com/qmk/qmk_firmware/pull/21498))&quot;">​</a></h3><p>Some audio code relating to &quot;notes&quot; used <code>double</code> datatypes, which are implemented in software floating-point for most ARM microcontrollers. This has been changed to use <code>float</code> datatypes instead, which are implemented in hardware floating-point on most ARM microcontrollers. This change increases performance as well as reduces the firmware size by significant number of bytes.</p><p>AVR sees minimal (if any) benefit -- <code>double</code> was interpreted as <code>float</code> on AVR anyway.</p><h2 id="changes-requiring-user-action" tabindex="-1">Changes Requiring User Action <a class="header-anchor" href="#changes-requiring-user-action" aria-label="Permalink to &quot;Changes Requiring User Action {#changes-requiring-user-action}&quot;">​</a></h2><h3 id="updated-keyboard-codebases" tabindex="-1">Updated Keyboard Codebases <a class="header-anchor" href="#updated-keyboard-codebases" aria-label="Permalink to &quot;Updated Keyboard Codebases {#updated-keyboard-codebases}&quot;">​</a></h3><table><thead><tr><th>Old Keyboard Name</th><th>New Keyboard Name</th></tr></thead><tbody><tr><td>capsunlocked/cu80/v2_ansi/base</td><td>capsunlocked/cu80/v2/ansi</td></tr><tr><td>capsunlocked/cu80/v2_iso/base</td><td>capsunlocked/cu80/v2/iso</td></tr><tr><td>handwired/dactyl_manuform/3x5_3</td><td>handwired/dactyl_minidox</td></tr><tr><td>handwired/dactyl_manuform/6x6_kinesis</td><td>handwired/dactyl_kinesis</td></tr><tr><td>handwired/jscotto/scotto36</td><td>handwired/scottokeebs/scotto36</td></tr><tr><td>handwired/jscotto/scotto40</td><td>handwired/scottokeebs/scotto40</td></tr><tr><td>handwired/jscotto/scotto9</td><td>handwired/scottokeebs/scotto9</td></tr><tr><td>handwired/jscotto/scottocmd</td><td>handwired/scottokeebs/scottocmd</td></tr><tr><td>handwired/jscotto/scottostarter</td><td>handwired/scottokeebs/scottostarter</td></tr><tr><td>hfdkb/keyboard_sw/k83</td><td>inland/kb83</td></tr><tr><td>idb_60</td><td>idb/idb_60</td></tr><tr><td>kamigakushi</td><td>jaykeeb/kamigakushi</td></tr><tr><td>kbdfans/kbd67mkiirgb</td><td>kbdfans/kbd67/mkiirgb</td></tr><tr><td>modelh</td><td>ibm/model_m/modelh</td></tr><tr><td>vinta</td><td>coarse/vinta</td></tr></tbody></table><h3 id="remove-encoder-in-matrix-workaround-code" tabindex="-1">Remove encoder in-matrix workaround code (<a href="https://github.com/qmk/qmk_firmware/pull/20389" target="_blank" rel="noreferrer">#20389</a>) <a class="header-anchor" href="#remove-encoder-in-matrix-workaround-code" aria-label="Permalink to &quot;Remove encoder in-matrix workaround code ([#20389](https://github.com/qmk/qmk_firmware/pull/20389)) {#remove-encoder-in-matrix-workaround-code}&quot;">​</a></h3><p>Some keyboards &quot;hacked&quot; encoder support into spare slots in the key matrix in order to interoperate with VIA. This workaround is no longer necessary, and the code has been removed. If you have a keyboard that uses this workaround, you will need to update your keymap to use the new <a href="./../feature_encoders#encoder-map">Encoder Map</a> API instead.</p><h3 id="unicodemap-keycodes-rename" tabindex="-1">Unicodemap keycodes rename (<a href="https://github.com/qmk/qmk_firmware/pull/21092" target="_blank" rel="noreferrer">#21092</a>) <a class="header-anchor" href="#unicodemap-keycodes-rename" aria-label="Permalink to &quot;Unicodemap keycodes rename ([#21092](https://github.com/qmk/qmk_firmware/pull/21092)) {#unicodemap-keycodes-rename}&quot;">​</a></h3><p>The Unicodemap keycodes have been renamed:</p><table><thead><tr><th>Old</th><th>New</th></tr></thead><tbody><tr><td><code>X(i)</code></td><td><code>UM(i)</code></td></tr><tr><td><code>XP(i,j)</code></td><td><code>UP(i,j)</code></td></tr></tbody></table><h3 id="remove-old-oled-api-code" tabindex="-1">Remove old OLED API code (<a href="https://github.com/qmk/qmk_firmware/pull/21651" target="_blank" rel="noreferrer">#21651</a>) <a class="header-anchor" href="#remove-old-oled-api-code" aria-label="Permalink to &quot;Remove old OLED API code ([#21651](https://github.com/qmk/qmk_firmware/pull/21651)) {#remove-old-oled-api-code}&quot;">​</a></h3><p>Old OLED code using <code>ssd1306.c</code> <code>ssd1306.h</code>, and <code>SSD1306OLED</code> and other similar files have been consolidated to use the standard OLED driver. External user keymaps will need to be updated to use the standard OLED driver accordingly.</p><h3 id="driver-naming-consolidation" tabindex="-1">Driver naming consolidation (<a href="https://github.com/qmk/qmk_firmware/pull/21551" target="_blank" rel="noreferrer">#21551</a>, <a href="https://github.com/qmk/qmk_firmware/pull/21558" target="_blank" rel="noreferrer">#21558</a>, <a href="https://github.com/qmk/qmk_firmware/pull/21580" target="_blank" rel="noreferrer">#21580</a>, <a href="https://github.com/qmk/qmk_firmware/pull/21594" target="_blank" rel="noreferrer">#21594</a>, <a href="https://github.com/qmk/qmk_firmware/pull/21624" target="_blank" rel="noreferrer">#21624</a>, <a href="https://github.com/qmk/qmk_firmware/pull/21710" target="_blank" rel="noreferrer">#21710</a>) <a class="header-anchor" href="#driver-naming-consolidation" aria-label="Permalink to &quot;Driver naming consolidation ([#21551](https://github.com/qmk/qmk_firmware/pull/21551), [#21558](https://github.com/qmk/qmk_firmware/pull/21558), [#21580](https://github.com/qmk/qmk_firmware/pull/21580), [#21594](https://github.com/qmk/qmk_firmware/pull/21594), [#21624](https://github.com/qmk/qmk_firmware/pull/21624), [#21710](https://github.com/qmk/qmk_firmware/pull/21710)) {#driver-naming-consolidation}&quot;">​</a></h3><p>In most circumstances this won&#39;t affect users -- only keyboard designers with currently-unmerged boards. The only users affected are people who have modified existing keyboards in order to add/modify haptics, lighting, or bluetooth -- and only if the base keyboard did not configure them already. Driver naming has been modified to be lowercase.</p><p>RGBLight (<code>RGBLIGHT_DRIVER</code> / <code>rgblight.driver</code>):</p><table><thead><tr><th>Old</th><th>New</th></tr></thead><tbody><tr><td><code>WS2812</code></td><td><code>ws2812</code></td></tr><tr><td><code>APA102</code></td><td><code>apa102</code></td></tr></tbody></table><p>LED Matrix (<code>LED_MATRIX_DRIVER</code> / <code>led_matrix.driver</code>):</p><table><thead><tr><th>Old</th><th>New</th></tr></thead><tbody><tr><td><code>IS31FL3731</code></td><td><code>is31fl3731</code></td></tr><tr><td><code>IS31FL3742A</code></td><td><code>is31fl3742a</code></td></tr><tr><td><code>IS31FL3743A</code></td><td><code>is31fl3743a</code></td></tr><tr><td><code>IS31FL3745</code></td><td><code>is31fl3745</code></td></tr><tr><td><code>IS31FL3746A</code></td><td><code>is31fl3746a</code></td></tr><tr><td><code>CKLED2001</code></td><td><code>ckled2001</code></td></tr></tbody></table><p>RGB Matrix (<code>RGB_MATRIX_DRIVER</code> / <code>rgb_matrix.driver</code>):</p><table><thead><tr><th>Old</th><th>New</th></tr></thead><tbody><tr><td><code>AW20216</code></td><td><code>aw20216</code></td></tr><tr><td><code>IS31FL3731</code></td><td><code>is31fl3731</code></td></tr><tr><td><code>IS31FL3733</code></td><td><code>is31fl3733</code></td></tr><tr><td><code>IS31FL3736</code></td><td><code>is31fl3736</code></td></tr><tr><td><code>IS31FL3737</code></td><td><code>is31fl3737</code></td></tr><tr><td><code>IS31FL3741</code></td><td><code>is31fl3741</code></td></tr><tr><td><code>IS31FL3742A</code></td><td><code>is31fl3742a</code></td></tr><tr><td><code>IS31FL3743A</code></td><td><code>is31fl3743a</code></td></tr><tr><td><code>IS31FL3745</code></td><td><code>is31fl3745</code></td></tr><tr><td><code>IS31FL3746A</code></td><td><code>is31fl3746a</code></td></tr><tr><td><code>CKLED2001</code></td><td><code>ckled2001</code></td></tr><tr><td><code>WS2812</code></td><td><code>ws2812</code></td></tr></tbody></table><p>OLED (<code>OLED_DRIVER</code>):</p><table><thead><tr><th>Old</th><th>New</th></tr></thead><tbody><tr><td><code>SSD1306</code></td><td><code>ssd1306</code></td></tr></tbody></table><p>Haptic (<code>HAPTIC_DRIVER</code>):</p><table><thead><tr><th>Old</th><th>New</th></tr></thead><tbody><tr><td><code>DRV2605L</code></td><td><code>drv2605l</code></td></tr><tr><td><code>SOLENOID</code></td><td><code>solenoid</code></td></tr></tbody></table><p>Bluetooth (<code>BLUETOOTH_DRIVER</code> / <code>bluetooth.driver</code>):</p><table><thead><tr><th>Old</th><th>New</th></tr></thead><tbody><tr><td><code>BluefruitLE</code></td><td><code>bluefruit_le</code></td></tr><tr><td><code>RN42</code></td><td><code>rn42</code></td></tr></tbody></table><h2 id="full-changelist" tabindex="-1">Full changelist <a class="header-anchor" href="#full-changelist" aria-label="Permalink to &quot;Full changelist {#full-changelist}&quot;">​</a></h2><p>Core:</p><ul><li>On-each-release tap dance function (<a href="https://github.com/qmk/qmk_firmware/pull/20255" target="_blank" rel="noreferrer">#20255</a>)</li><li>Send a dummy keycode to neutralize flashing modifiers in retro tap and key overrides (<a href="https://github.com/qmk/qmk_firmware/pull/20992" target="_blank" rel="noreferrer">#20992</a>)</li><li>Adds a way to separate tab from AUTO_SHIFT_SPECIAL. (<a href="https://github.com/qmk/qmk_firmware/pull/20996" target="_blank" rel="noreferrer">#20996</a>)</li><li>[Enhancement] More info on <code>apply_autocorrect</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21056" target="_blank" rel="noreferrer">#21056</a>)</li><li>Remove quantum/keymap.h (<a href="https://github.com/qmk/qmk_firmware/pull/21086" target="_blank" rel="noreferrer">#21086</a>)</li><li>Unicodemap keycodes rename (<a href="https://github.com/qmk/qmk_firmware/pull/21092" target="_blank" rel="noreferrer">#21092</a>)</li><li>Merge upstream uf2conv.py changes (<a href="https://github.com/qmk/qmk_firmware/pull/21107" target="_blank" rel="noreferrer">#21107</a>)</li><li>Add a dynamic_macro_stop_recording(void) function. (<a href="https://github.com/qmk/qmk_firmware/pull/21108" target="_blank" rel="noreferrer">#21108</a>)</li><li>platforms: chibios: wait: only define the frequency (<a href="https://github.com/qmk/qmk_firmware/pull/21115" target="_blank" rel="noreferrer">#21115</a>)</li><li>[Enhancement] Decouple autocorrect logic (<a href="https://github.com/qmk/qmk_firmware/pull/21116" target="_blank" rel="noreferrer">#21116</a>)</li><li>Optimisation - Add RGB LED colour set check in drivers (<a href="https://github.com/qmk/qmk_firmware/pull/21134" target="_blank" rel="noreferrer">#21134</a>)</li><li>RGB matrix ws2812 update (<a href="https://github.com/qmk/qmk_firmware/pull/21135" target="_blank" rel="noreferrer">#21135</a>)</li><li>Pixel rain: Refactor the rain light decision operator (<a href="https://github.com/qmk/qmk_firmware/pull/21139" target="_blank" rel="noreferrer">#21139</a>)</li><li>Use unsigned integer for kinetic speed (<a href="https://github.com/qmk/qmk_firmware/pull/21151" target="_blank" rel="noreferrer">#21151</a>)</li><li>Reset <code>matrix_need_update</code> properly in eager debouncing algorithms (<a href="https://github.com/qmk/qmk_firmware/pull/21154" target="_blank" rel="noreferrer">#21154</a>)</li><li>Refactor kinetic mouse key feature (<a href="https://github.com/qmk/qmk_firmware/pull/21164" target="_blank" rel="noreferrer">#21164</a>)</li><li>RGB Matrix limit basic indicators to the last render (<a href="https://github.com/qmk/qmk_firmware/pull/21169" target="_blank" rel="noreferrer">#21169</a>)</li><li>dynamic keymap: Rely on introspection to handle OOB access. (<a href="https://github.com/qmk/qmk_firmware/pull/21247" target="_blank" rel="noreferrer">#21247</a>)</li><li>add VIA support for LED Matrix (<a href="https://github.com/qmk/qmk_firmware/pull/21281" target="_blank" rel="noreferrer">#21281</a>)</li><li>Refactor times inverse of sqrt 2 calculation (<a href="https://github.com/qmk/qmk_firmware/pull/21293" target="_blank" rel="noreferrer">#21293</a>)</li><li>Move protocol makefiles into their respective folders (<a href="https://github.com/qmk/qmk_firmware/pull/21332" target="_blank" rel="noreferrer">#21332</a>)</li><li>Remove use of __flash within LED drivers (<a href="https://github.com/qmk/qmk_firmware/pull/21343" target="_blank" rel="noreferrer">#21343</a>)</li><li>STM32H723 support (<a href="https://github.com/qmk/qmk_firmware/pull/21352" target="_blank" rel="noreferrer">#21352</a>)</li><li>Remove CORTEX_ENABLE_WFI_IDLE from keyboards. (<a href="https://github.com/qmk/qmk_firmware/pull/21353" target="_blank" rel="noreferrer">#21353</a>)</li><li>Get rid of <code>USB_LED_KANA</code> and <code>USB_LED_COMPOSE</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21366" target="_blank" rel="noreferrer">#21366</a>)</li><li>Minor board clean-up after #19780 (<a href="https://github.com/qmk/qmk_firmware/pull/21391" target="_blank" rel="noreferrer">#21391</a>)</li><li>Get rid of <code>USB_LED_SCROLL_LOCK</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21405" target="_blank" rel="noreferrer">#21405</a>)</li><li>Get rid of <code>USB_LED_NUM_LOCK</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21424" target="_blank" rel="noreferrer">#21424</a>)</li><li>Simplify audio_duration_to_ms() and audio_ms_to_duration(), reduce firmware size by a few bytes. (<a href="https://github.com/qmk/qmk_firmware/pull/21427" target="_blank" rel="noreferrer">#21427</a>)</li><li>Allow key override to respect weak mods caused by caps word (<a href="https://github.com/qmk/qmk_firmware/pull/21434" target="_blank" rel="noreferrer">#21434</a>)</li><li>Get rid of <code>USB_LED_CAPS_LOCK</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21436" target="_blank" rel="noreferrer">#21436</a>)</li><li>tmk_core: remove direct <code>quantum.h</code> includes (<a href="https://github.com/qmk/qmk_firmware/pull/21465" target="_blank" rel="noreferrer">#21465</a>)</li><li>bootmagic mods covering the case when swapped mods are pressed at the same time (#21320) (<a href="https://github.com/qmk/qmk_firmware/pull/21472" target="_blank" rel="noreferrer">#21472</a>)</li><li>drivers: remove direct <code>quantum.h</code> includes (<a href="https://github.com/qmk/qmk_firmware/pull/21473" target="_blank" rel="noreferrer">#21473</a>)</li><li>debounce: remove direct <code>quantum.h</code> includes (<a href="https://github.com/qmk/qmk_firmware/pull/21480" target="_blank" rel="noreferrer">#21480</a>)</li><li>keymap_extras: remove direct <code>quantum.h</code> includes (<a href="https://github.com/qmk/qmk_firmware/pull/21485" target="_blank" rel="noreferrer">#21485</a>)</li><li>process_keycode: remove direct <code>quantum.h</code> includes (<a href="https://github.com/qmk/qmk_firmware/pull/21486" target="_blank" rel="noreferrer">#21486</a>)</li><li>Add MOUSEKEY_WHEEL_DELTA documentation (<a href="https://github.com/qmk/qmk_firmware/pull/21493" target="_blank" rel="noreferrer">#21493</a>)</li><li>Reduce needless precision in audio note frequency calculation (<a href="https://github.com/qmk/qmk_firmware/pull/21496" target="_blank" rel="noreferrer">#21496</a>)</li><li>Remove needless precision in additive DAC sample generation (<a href="https://github.com/qmk/qmk_firmware/pull/21498" target="_blank" rel="noreferrer">#21498</a>)</li><li>quantum: remove direct <code>quantum.h</code> includes (<a href="https://github.com/qmk/qmk_firmware/pull/21507" target="_blank" rel="noreferrer">#21507</a>)</li><li>process_combo: restore wait.h header (<a href="https://github.com/qmk/qmk_firmware/pull/21514" target="_blank" rel="noreferrer">#21514</a>)</li><li>Eliminate <code>TMK_COMMON_*</code> in makefiles (<a href="https://github.com/qmk/qmk_firmware/pull/21517" target="_blank" rel="noreferrer">#21517</a>)</li><li>backlight: split AVR PWM and timer drivers (<a href="https://github.com/qmk/qmk_firmware/pull/21540" target="_blank" rel="noreferrer">#21540</a>)</li><li>haptic: naming cleanups (<a href="https://github.com/qmk/qmk_firmware/pull/21551" target="_blank" rel="noreferrer">#21551</a>)</li><li>rgblight: driver selection cleanups (<a href="https://github.com/qmk/qmk_firmware/pull/21558" target="_blank" rel="noreferrer">#21558</a>)</li><li>LED Matrix: driver naming cleanups (<a href="https://github.com/qmk/qmk_firmware/pull/21580" target="_blank" rel="noreferrer">#21580</a>)</li><li>Unify MIDI note calculation with the audio feature (from #21496) (<a href="https://github.com/qmk/qmk_firmware/pull/21588" target="_blank" rel="noreferrer">#21588</a>)</li><li>Allow the user to select a single tone for the additive DAC (<a href="https://github.com/qmk/qmk_firmware/pull/21591" target="_blank" rel="noreferrer">#21591</a>)</li><li>RGB Matrix: driver naming cleanups (<a href="https://github.com/qmk/qmk_firmware/pull/21594" target="_blank" rel="noreferrer">#21594</a>)</li><li>Raw HID: documentation improvements (<a href="https://github.com/qmk/qmk_firmware/pull/21596" target="_blank" rel="noreferrer">#21596</a>)</li><li>Unicode: move keycode aliases to a separate header (<a href="https://github.com/qmk/qmk_firmware/pull/21613" target="_blank" rel="noreferrer">#21613</a>)</li><li>Bluetooth: driver naming cleanups (<a href="https://github.com/qmk/qmk_firmware/pull/21624" target="_blank" rel="noreferrer">#21624</a>)</li><li>Remove old OLED API code (<a href="https://github.com/qmk/qmk_firmware/pull/21651" target="_blank" rel="noreferrer">#21651</a>)</li><li>haptic: further naming cleanups (<a href="https://github.com/qmk/qmk_firmware/pull/21682" target="_blank" rel="noreferrer">#21682</a>)</li><li>Simplfy RGB/LED matrix effect logic (<a href="https://github.com/qmk/qmk_firmware/pull/21703" target="_blank" rel="noreferrer">#21703</a>)</li><li>OLED: driver naming cleanups (<a href="https://github.com/qmk/qmk_firmware/pull/21710" target="_blank" rel="noreferrer">#21710</a>)</li></ul><p>CLI:</p><ul><li>Add *_MATRIX_LED_COUNT generation/validation (<a href="https://github.com/qmk/qmk_firmware/pull/19515" target="_blank" rel="noreferrer">#19515</a>)</li><li>Revert &quot;Add *_MATRIX_LED_COUNT generation/validation&quot; (<a href="https://github.com/qmk/qmk_firmware/pull/21109" target="_blank" rel="noreferrer">#21109</a>)</li><li>Add *_MATRIX_LED_COUNT generation (<a href="https://github.com/qmk/qmk_firmware/pull/21110" target="_blank" rel="noreferrer">#21110</a>)</li><li>feat, docs: WB32 flashing (<a href="https://github.com/qmk/qmk_firmware/pull/21217" target="_blank" rel="noreferrer">#21217</a>)</li><li>Improve error messages when layout key matrix row/col is OOB (<a href="https://github.com/qmk/qmk_firmware/pull/21640" target="_blank" rel="noreferrer">#21640</a>)</li></ul><p>Submodule updates:</p><ul><li>Update ChibiOS-Contrib (<a href="https://github.com/qmk/qmk_firmware/pull/21553" target="_blank" rel="noreferrer">#21553</a>)</li></ul><p>Keyboards:</p><ul><li>Add support for Rastersoft MiniTKL (<a href="https://github.com/qmk/qmk_firmware/pull/20230" target="_blank" rel="noreferrer">#20230</a>)</li><li>Remove encoder in-matrix workaround code (<a href="https://github.com/qmk/qmk_firmware/pull/20389" target="_blank" rel="noreferrer">#20389</a>)</li><li>Revamp <code>dactyl_manuform</code> readme.md (<a href="https://github.com/qmk/qmk_firmware/pull/20395" target="_blank" rel="noreferrer">#20395</a>)</li><li>added hackpad keyboard (<a href="https://github.com/qmk/qmk_firmware/pull/20402" target="_blank" rel="noreferrer">#20402</a>)</li><li>Add <code>handwired/dactyl_cc</code> keyboard (<a href="https://github.com/qmk/qmk_firmware/pull/20517" target="_blank" rel="noreferrer">#20517</a>)</li><li>Add Mino Plus Hotswap (<a href="https://github.com/qmk/qmk_firmware/pull/20534" target="_blank" rel="noreferrer">#20534</a>)</li><li>Move kb83 keyboard. (<a href="https://github.com/qmk/qmk_firmware/pull/20761" target="_blank" rel="noreferrer">#20761</a>)</li><li>Rename <code>dactyl_manuform</code> variant <code>3x5_3</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21015" target="_blank" rel="noreferrer">#21015</a>)</li><li>Update <code>k34</code> layout to <code>split_3x5_2</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21046" target="_blank" rel="noreferrer">#21046</a>)</li><li>giabalanai keymaps: transpose added (<a href="https://github.com/qmk/qmk_firmware/pull/21054" target="_blank" rel="noreferrer">#21054</a>)</li><li>Move <code>RGBLIGHT_SLEEP</code> to data driven (<a href="https://github.com/qmk/qmk_firmware/pull/21072" target="_blank" rel="noreferrer">#21072</a>)</li><li>update layouts of <code>dactyl_manuform/4x5_5</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21094" target="_blank" rel="noreferrer">#21094</a>)</li><li>Move <code>RGBLIGHT_LED_MAP</code> to data driven (<a href="https://github.com/qmk/qmk_firmware/pull/21095" target="_blank" rel="noreferrer">#21095</a>)</li><li>Move <code>RGBLED_SPLIT</code> to data driven (<a href="https://github.com/qmk/qmk_firmware/pull/21113" target="_blank" rel="noreferrer">#21113</a>)</li><li>Update <code>dactyl_promicro</code> readme (<a href="https://github.com/qmk/qmk_firmware/pull/21144" target="_blank" rel="noreferrer">#21144</a>)</li><li>Delete jscotto directory (<a href="https://github.com/qmk/qmk_firmware/pull/21157" target="_blank" rel="noreferrer">#21157</a>)</li><li>correct and modernise <code>dactyl_manuform/6x7</code> variant (<a href="https://github.com/qmk/qmk_firmware/pull/21176" target="_blank" rel="noreferrer">#21176</a>)</li><li>Move <code>RGBLIGHT_SPLIT</code> to data driven (<a href="https://github.com/qmk/qmk_firmware/pull/21190" target="_blank" rel="noreferrer">#21190</a>)</li><li>Minor amendment to <code>bcat</code> userspace to prevent build failure (<a href="https://github.com/qmk/qmk_firmware/pull/21205" target="_blank" rel="noreferrer">#21205</a>)</li><li>FJLabs Swordfish Layout Macro Refactor (<a href="https://github.com/qmk/qmk_firmware/pull/21234" target="_blank" rel="noreferrer">#21234</a>)</li><li>Add skyloong/Dt40 keyboard (<a href="https://github.com/qmk/qmk_firmware/pull/21237" target="_blank" rel="noreferrer">#21237</a>)</li><li><code>dactyl_manuform/6x7</code> correction (<a href="https://github.com/qmk/qmk_firmware/pull/21240" target="_blank" rel="noreferrer">#21240</a>)</li><li>Amend <code>ryanbaekr</code> boards by pin definitions (<a href="https://github.com/qmk/qmk_firmware/pull/21248" target="_blank" rel="noreferrer">#21248</a>)</li><li>EC Pro X JIS Layout Touch-Up (<a href="https://github.com/qmk/qmk_firmware/pull/21260" target="_blank" rel="noreferrer">#21260</a>)</li><li>Eason Aeroboard Refactor (<a href="https://github.com/qmk/qmk_firmware/pull/21271" target="_blank" rel="noreferrer">#21271</a>)</li><li>Move <code>RGBLED_NUM</code> to data driven (<a href="https://github.com/qmk/qmk_firmware/pull/21278" target="_blank" rel="noreferrer">#21278</a>)</li><li>Remove default <code>TAPPING_TERM</code> from keyboard config.h (<a href="https://github.com/qmk/qmk_firmware/pull/21284" target="_blank" rel="noreferrer">#21284</a>)</li><li>Move <code>RGBLIGHT_HUE/SAT/VAL_STEP</code> to data driven (<a href="https://github.com/qmk/qmk_firmware/pull/21292" target="_blank" rel="noreferrer">#21292</a>)</li><li>Move <code>TAPPING_TERM</code> to data driven (<a href="https://github.com/qmk/qmk_firmware/pull/21296" target="_blank" rel="noreferrer">#21296</a>)</li><li>Modernize, correct, and uniform <code>dactyl_manuform</code> variant <code>5x6_68</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21299" target="_blank" rel="noreferrer">#21299</a>)</li><li>rename and modernise <code>dactyl_manuform/6x6_kinesis</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21302" target="_blank" rel="noreferrer">#21302</a>)</li><li>ProtoTypist PT-60 Refactor (<a href="https://github.com/qmk/qmk_firmware/pull/21322" target="_blank" rel="noreferrer">#21322</a>)</li><li>ProtoTypist PT-80 Refactor (<a href="https://github.com/qmk/qmk_firmware/pull/21325" target="_blank" rel="noreferrer">#21325</a>)</li><li>add jels60v2 support (<a href="https://github.com/qmk/qmk_firmware/pull/21337" target="_blank" rel="noreferrer">#21337</a>)</li><li>Move <code>RGB_MATRIX_HUE/SAT/VAL/SPD_STEP</code> to data driven (<a href="https://github.com/qmk/qmk_firmware/pull/21354" target="_blank" rel="noreferrer">#21354</a>)</li><li>Move <code>TAPPING_TOGGLE</code> to data driven (<a href="https://github.com/qmk/qmk_firmware/pull/21360" target="_blank" rel="noreferrer">#21360</a>)</li><li>Move <code>TAP_CODE_DELAY</code> to data driven (<a href="https://github.com/qmk/qmk_firmware/pull/21363" target="_blank" rel="noreferrer">#21363</a>)</li><li>gmmk/pro: Turn off RGB when suspended (<a href="https://github.com/qmk/qmk_firmware/pull/21370" target="_blank" rel="noreferrer">#21370</a>)</li><li>Move miscellaneous defines to data driven (<a href="https://github.com/qmk/qmk_firmware/pull/21382" target="_blank" rel="noreferrer">#21382</a>)</li><li>kyria: remove <code>LAYOUT_stack</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21384" target="_blank" rel="noreferrer">#21384</a>)</li><li>Reduce <code>keebio/bamfk1:via</code> firmware size (<a href="https://github.com/qmk/qmk_firmware/pull/21432" target="_blank" rel="noreferrer">#21432</a>)</li><li>Refactor <code>capsunlocked/cu80/v2</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21454" target="_blank" rel="noreferrer">#21454</a>)</li><li>Mechlovin Zed65 rev1 Develop Touch-Up (<a href="https://github.com/qmk/qmk_firmware/pull/21476" target="_blank" rel="noreferrer">#21476</a>)</li><li>Add PW88 keyboard (<a href="https://github.com/qmk/qmk_firmware/pull/21482" target="_blank" rel="noreferrer">#21482</a>)</li><li>Prepare ymdk/ymd75 for rev4 (<a href="https://github.com/qmk/qmk_firmware/pull/21484" target="_blank" rel="noreferrer">#21484</a>)</li><li>Move <code>DEBOUNCE_TYPE</code> to data driven (<a href="https://github.com/qmk/qmk_firmware/pull/21489" target="_blank" rel="noreferrer">#21489</a>)</li><li>aleblazer/zodiark:via: Disable two RGB effects (<a href="https://github.com/qmk/qmk_firmware/pull/21495" target="_blank" rel="noreferrer">#21495</a>)</li><li>Spruce up <code>dactyl_lightcycle</code> and <code>dactyl_maximus</code> layouts (<a href="https://github.com/qmk/qmk_firmware/pull/21519" target="_blank" rel="noreferrer">#21519</a>)</li><li>Amend layout and matrix positions for <code>dactyl_cc</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21523" target="_blank" rel="noreferrer">#21523</a>)</li><li>moved model h controller under ibm/model_m (<a href="https://github.com/qmk/qmk_firmware/pull/21526" target="_blank" rel="noreferrer">#21526</a>)</li><li>tominabox1/le_chiffre refactor pt 1 (<a href="https://github.com/qmk/qmk_firmware/pull/21567" target="_blank" rel="noreferrer">#21567</a>)</li><li>Update ERA65 PCB (<a href="https://github.com/qmk/qmk_firmware/pull/21592" target="_blank" rel="noreferrer">#21592</a>)</li><li>Update <code>usb.</code>* for dactyl_cc (<a href="https://github.com/qmk/qmk_firmware/pull/21612" target="_blank" rel="noreferrer">#21612</a>)</li><li>Kintwin controller for kinesis keyboard, split layout (<a href="https://github.com/qmk/qmk_firmware/pull/21614" target="_blank" rel="noreferrer">#21614</a>)</li><li>Add STM32f3 Discovery onekey (<a href="https://github.com/qmk/qmk_firmware/pull/21625" target="_blank" rel="noreferrer">#21625</a>)</li><li>Automata02 Alisaie Develop Touch-Up (<a href="https://github.com/qmk/qmk_firmware/pull/21630" target="_blank" rel="noreferrer">#21630</a>)</li><li>Move RGBLight animations to data driven (<a href="https://github.com/qmk/qmk_firmware/pull/21635" target="_blank" rel="noreferrer">#21635</a>)</li><li>Refactoring entirely Caticorn PCB (<a href="https://github.com/qmk/qmk_firmware/pull/21644" target="_blank" rel="noreferrer">#21644</a>)</li><li>AMJKeyboard AMJ84 Develop Touch-Up (<a href="https://github.com/qmk/qmk_firmware/pull/21645" target="_blank" rel="noreferrer">#21645</a>)</li><li>Remove layout aliases from keyboard_aliases.hjson (<a href="https://github.com/qmk/qmk_firmware/pull/21658" target="_blank" rel="noreferrer">#21658</a>)</li><li>kikoslab/kl90: Remove invalid config option (<a href="https://github.com/qmk/qmk_firmware/pull/21708" target="_blank" rel="noreferrer">#21708</a>)</li><li>Remove more legacy config.h options (<a href="https://github.com/qmk/qmk_firmware/pull/21709" target="_blank" rel="noreferrer">#21709</a>)</li><li>add willoucom/keypad (<a href="https://github.com/qmk/qmk_firmware/pull/21714" target="_blank" rel="noreferrer">#21714</a>)</li><li>Tidy up encoder in matrix references (<a href="https://github.com/qmk/qmk_firmware/pull/21718" target="_blank" rel="noreferrer">#21718</a>)</li><li>Add city42 (<a href="https://github.com/qmk/qmk_firmware/pull/21727" target="_blank" rel="noreferrer">#21727</a>)</li><li>feat: add squigglybob splitkb kyria rev2 keymap (<a href="https://github.com/qmk/qmk_firmware/pull/21751" target="_blank" rel="noreferrer">#21751</a>)</li><li>Align SENSE75 with recent Drop additions (<a href="https://github.com/qmk/qmk_firmware/pull/21757" target="_blank" rel="noreferrer">#21757</a>)</li></ul><p>Keyboard fixes:</p><ul><li>fix <code>scheikled</code> keymap for <code>dactyl_manuform/4x6</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21206" target="_blank" rel="noreferrer">#21206</a>)</li><li>Fixup <code>dekunukem/duckypad</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21298" target="_blank" rel="noreferrer">#21298</a>)</li><li>Fixup <code>nightly_boards/n40_o</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21307" target="_blank" rel="noreferrer">#21307</a>)</li><li>Fix <code>rate/pistachio_pro:via</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21339" target="_blank" rel="noreferrer">#21339</a>)</li><li>Fix encoder map declarations (<a href="https://github.com/qmk/qmk_firmware/pull/21435" target="_blank" rel="noreferrer">#21435</a>)</li><li>jones/v1: fix layout offset and disable audio on via keymap (<a href="https://github.com/qmk/qmk_firmware/pull/21468" target="_blank" rel="noreferrer">#21468</a>)</li><li>Fix backlight support for some boards (<a href="https://github.com/qmk/qmk_firmware/pull/21554" target="_blank" rel="noreferrer">#21554</a>)</li><li>kinesis: remove stacked split layouts (<a href="https://github.com/qmk/qmk_firmware/pull/21569" target="_blank" rel="noreferrer">#21569</a>)</li><li>Fix layout offsets for a handful of boards (<a href="https://github.com/qmk/qmk_firmware/pull/21636" target="_blank" rel="noreferrer">#21636</a>)</li><li>doio/kb38: fix layout (<a href="https://github.com/qmk/qmk_firmware/pull/21704" target="_blank" rel="noreferrer">#21704</a>)</li><li>Fix drop/shift/v2 compilation (<a href="https://github.com/qmk/qmk_firmware/pull/21800" target="_blank" rel="noreferrer">#21800</a>)</li><li>Fix keyboards with old RGB driver names (<a href="https://github.com/qmk/qmk_firmware/pull/21815" target="_blank" rel="noreferrer">#21815</a>)</li><li>Fix keyboards with old RGB driver names (<a href="https://github.com/qmk/qmk_firmware/pull/21817" target="_blank" rel="noreferrer">#21817</a>)</li></ul><p>Others:</p><ul><li>Rework info.json reference (<a href="https://github.com/qmk/qmk_firmware/pull/21324" target="_blank" rel="noreferrer">#21324</a>)</li><li>Enable auto-merge of develop to riot (<a href="https://github.com/qmk/qmk_firmware/pull/21389" target="_blank" rel="noreferrer">#21389</a>)</li></ul><p>Bugs:</p><ul><li>Fix non-functional S3 wakeup / resume from suspense (<a href="https://github.com/qmk/qmk_firmware/pull/19780" target="_blank" rel="noreferrer">#19780</a>)</li><li>[Bugfix] Check <code>NULL</code> pointers on QP (<a href="https://github.com/qmk/qmk_firmware/pull/20481" target="_blank" rel="noreferrer">#20481</a>)</li><li>Fix PS2_MOUSE_INVERT_BUTTONS (<a href="https://github.com/qmk/qmk_firmware/pull/20646" target="_blank" rel="noreferrer">#20646</a>)</li><li>Fix backlight sync on suspend_power_down for split keyboards (<a href="https://github.com/qmk/qmk_firmware/pull/21079" target="_blank" rel="noreferrer">#21079</a>)</li><li>Consolidate <code>KEYBOARD_OUTPUT</code>+<code>KEYMAP_OUTPUT</code>=&gt;<code>INTERMEDIATE_OUTPUT</code> (<a href="https://github.com/qmk/qmk_firmware/pull/21272" target="_blank" rel="noreferrer">#21272</a>)</li><li>Chibios USB: Take into account if host wants remote wakeup or not (<a href="https://github.com/qmk/qmk_firmware/pull/21287" target="_blank" rel="noreferrer">#21287</a>)</li><li>Fix anchor IDs for some API references (<a href="https://github.com/qmk/qmk_firmware/pull/21345" target="_blank" rel="noreferrer">#21345</a>)</li><li>Pixel fractal: Set minimum middle column value (<a href="https://github.com/qmk/qmk_firmware/pull/21365" target="_blank" rel="noreferrer">#21365</a>)</li><li>Fix ili9xxx inversion opcode entry (<a href="https://github.com/qmk/qmk_firmware/pull/21422" target="_blank" rel="noreferrer">#21422</a>)</li><li>Relocate backlight drivers (<a href="https://github.com/qmk/qmk_firmware/pull/21444" target="_blank" rel="noreferrer">#21444</a>)</li><li>Fixup STM32-DFU (<a href="https://github.com/qmk/qmk_firmware/pull/21447" target="_blank" rel="noreferrer">#21447</a>)</li><li>keycode aliases: work around ChibiOS ch.h include guard (<a href="https://github.com/qmk/qmk_firmware/pull/21497" target="_blank" rel="noreferrer">#21497</a>)</li><li>Fix compilation error when Split Watchdog enabled (<a href="https://github.com/qmk/qmk_firmware/pull/21543" target="_blank" rel="noreferrer">#21543</a>)</li><li>Revert &quot; Fix compilation error when Split Watchdog enabled&quot; (<a href="https://github.com/qmk/qmk_firmware/pull/21572" target="_blank" rel="noreferrer">#21572</a>)</li><li>quantum.h: clean up process_keycode includes (<a href="https://github.com/qmk/qmk_firmware/pull/21579" target="_blank" rel="noreferrer">#21579</a>)</li><li>Fix stuck note with square wave in additive DAC (<a href="https://github.com/qmk/qmk_firmware/pull/21589" target="_blank" rel="noreferrer">#21589</a>)</li><li>[Fix] USB HID tests compliance (<a href="https://github.com/qmk/qmk_firmware/pull/21626" target="_blank" rel="noreferrer">#21626</a>)</li><li>Fix Dynamic Macro Compilation for avr-gcc 5.4.0 + Linux (<a href="https://github.com/qmk/qmk_firmware/pull/21653" target="_blank" rel="noreferrer">#21653</a>)</li><li>Unicode, Unicodemap and UCIS refactor (<a href="https://github.com/qmk/qmk_firmware/pull/21659" target="_blank" rel="noreferrer">#21659</a>)</li><li>Audio: Don&#39;t play the first note of zero-note melodies (<a href="https://github.com/qmk/qmk_firmware/pull/21661" target="_blank" rel="noreferrer">#21661</a>)</li><li>Fix mouse-key spamming empty reports (<a href="https://github.com/qmk/qmk_firmware/pull/21663" target="_blank" rel="noreferrer">#21663</a>)</li><li>Restore usb suspend wakeup delay (<a href="https://github.com/qmk/qmk_firmware/pull/21676" target="_blank" rel="noreferrer">#21676</a>)</li><li>Fix compilation error for APA on ChibiOS (<a href="https://github.com/qmk/qmk_firmware/pull/21773" target="_blank" rel="noreferrer">#21773</a>)</li><li>fix: restore rgb matrix indicators to jellybean_raindrops animation (<a href="https://github.com/qmk/qmk_firmware/pull/21792" target="_blank" rel="noreferrer">#21792</a>)</li><li>Remove <code>led_matrix.hue_steps</code> and <code>led_matrix.sat_steps</code> from schema (<a href="https://github.com/qmk/qmk_firmware/pull/21827" target="_blank" rel="noreferrer">#21827</a>)</li><li>Revert changes to ChibiOS Suspend Code (<a href="https://github.com/qmk/qmk_firmware/pull/21830" target="_blank" rel="noreferrer">#21830</a>)</li><li>Add &quot;apm32-dfu&quot; in keyboard.jsonschema (<a href="https://github.com/qmk/qmk_firmware/pull/21842" target="_blank" rel="noreferrer">#21842</a>)</li></ul>', 49);
const _hoisted_50 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_50);
}
const _20230827 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _20230827 as default
};
