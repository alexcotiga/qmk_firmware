import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.DyMmIvSC.js";
const __pageData = JSON.parse('{"title":"OS Detection","description":"","frontmatter":{},"headers":[],"relativePath":"feature_os_detection.md","filePath":"feature_os_detection.md"}');
const _sfc_main = { name: "feature_os_detection.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="os-detection" tabindex="-1">OS Detection <a class="header-anchor" href="#os-detection" aria-label="Permalink to &quot;OS Detection&quot;">​</a></h1><p>This feature makes a best guess at the host OS based on OS specific behavior during USB setup. It may not always get the correct OS, and shouldn&#39;t be relied on as for critical functionality.</p><p>Using it you can have OS specific key mappings or combos which work differently on different devices.</p><p>It is available for keyboards which use ChibiOS, LUFA and V-USB.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>In your <code>rules.mk</code> add:</p><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">OS_DETECTION_ENABLE = yes</span></span></code></pre></div><p>It will automatically include the required headers file. It declares <code>os_variant_t detected_host_os(void);</code> which you can call to get detected OS.</p><p>It returns one of the following values:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    OS_UNSURE,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    OS_LINUX,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    OS_WINDOWS,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    OS_MACOS,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    OS_IOS,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">os_variant_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Note that it takes some time after firmware is booted to detect the OS.</p></div><p>This time is quite short, probably hundreds of milliseconds, but this data may be not ready in keyboard and layout setup functions which run very early during firmware startup.</p><h2 id="callbacks" tabindex="-1">Callbacks <a class="header-anchor" href="#callbacks" aria-label="Permalink to &quot;Callbacks {#callbacks}&quot;">​</a></h2><p>If you want to perform custom actions when the OS is detected, then you can use the <code>process_detected_host_os_kb</code> function on the keyboard level source file, or <code>process_detected_host_os_user</code> function in the user <code>keymap.c</code>.</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process_detected_host_os_kb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">os_variant_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> detected_os</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">process_detected_host_os_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(detected_os)) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (detected_os) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OS_MACOS:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OS_IOS:</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            rgb_matrix_set_color_all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(RGB_WHITE);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OS_WINDOWS:</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            rgb_matrix_set_color_all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(RGB_BLUE);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OS_LINUX:</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            rgb_matrix_set_color_all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(RGB_ORANGE);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OS_UNSURE:</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            rgb_matrix_set_color_all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(RGB_RED);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="os-detection-stability" tabindex="-1">OS detection stability <a class="header-anchor" href="#os-detection-stability" aria-label="Permalink to &quot;OS detection stability&quot;">​</a></h2><p>The OS detection is currently handled while the USB device descriptor is being assembled. The process is done in steps, generating a number of intermediate results until it stabilizes. We therefore resort to debouncing the result until it has been stable for a given amount of milliseconds. This amount can be configured, in case your board is not stable within the default debouncing time of 200ms.</p><h2 id="kvm-and-usb-switches" tabindex="-1">KVM and USB switches <a class="header-anchor" href="#kvm-and-usb-switches" aria-label="Permalink to &quot;KVM and USB switches&quot;">​</a></h2><p>Some KVM and USB switches may not trigger the USB controller on the keyboard to fully reset upon switching machines. If your keyboard does not redetect the OS in this situation, you can force the keyboard to reset when the USB initialization event is detected, forcing the USB controller to be reconfigured.</p><h2 id="configuration-options" tabindex="-1">Configuration Options <a class="header-anchor" href="#configuration-options" aria-label="Permalink to &quot;Configuration Options&quot;">​</a></h2><ul><li><code>#define OS_DETECTION_DEBOUNCE 200</code><ul><li>defined the debounce time for OS detection, in milliseconds</li></ul></li><li><code>#define OS_DETECTION_KEYBOARD_RESET</code><ul><li>enables the keyboard reset upon a USB device reinitilization, such as switching devices on some KVMs</li></ul></li></ul><h2 id="debug" tabindex="-1">Debug <a class="header-anchor" href="#debug" aria-label="Permalink to &quot;Debug&quot;">​</a></h2><p>If OS is guessed incorrectly, you may want to collect data about USB setup packets to refine the detection logic.</p><p>To do so in your <code>config.h</code> add:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OS_DETECTION_DEBUG_ENABLE</span></span></code></pre></div><p>And in your <code>rules.mk</code> add:</p><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CONSOLE_ENABLE = yes</span></span></code></pre></div><p>And also include <code>&quot;os_detection.h&quot;</code> in your <code>keymap.c</code>.</p><p>Then you can define custom keycodes to store data about USB setup packets in EEPROM (persistent memory) and to print it later on host where you can run <code>qmk console</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> custom_keycodes {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    STORE_SETUPS </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SAFE_RANGE,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    PRINT_SETUPS,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process_record_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint16_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> keycode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">keyrecord_t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (keycode) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> STORE_SETUPS:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (record</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.pressed) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                store_setups_in_eeprom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PRINT_SETUPS:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (record</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.pressed) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                print_stored_setups</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Then please open an issue on Github with this information and tell what OS was not detected correctly and if you have any intermediate devices between keyboard and your computer.</p><h2 id="credits" tabindex="-1">Credits <a class="header-anchor" href="#credits" aria-label="Permalink to &quot;Credits&quot;">​</a></h2><p>Original idea is coming from <a href="https://github.com/keyboardio/FingerprintUSBHost" target="_blank" rel="noreferrer">FingerprintUSBHost</a> project.</p>', 33);
const _hoisted_34 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_34);
}
const feature_os_detection = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  feature_os_detection as default
};
