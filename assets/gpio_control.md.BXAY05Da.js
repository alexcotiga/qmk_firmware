import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.DyMmIvSC.js";
const __pageData = JSON.parse('{"title":"GPIO Control","description":"","frontmatter":{},"headers":[],"relativePath":"gpio_control.md","filePath":"gpio_control.md"}');
const _sfc_main = { name: "gpio_control.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="gpio-control" tabindex="-1">GPIO Control <a class="header-anchor" href="#gpio-control" aria-label="Permalink to &quot;GPIO Control {#gpio-control}&quot;">​</a></h1><p>QMK has a GPIO control abstraction layer which is microcontroller agnostic. This is done to allow easy access to pin control across different platforms.</p><h2 id="macros" tabindex="-1">Macros <a class="header-anchor" href="#macros" aria-label="Permalink to &quot;Macros {#macros}&quot;">​</a></h2><p>The following macros provide basic control of GPIOs and are found in <code>platforms/&lt;platform&gt;/gpio.h</code>.</p><table><thead><tr><th>Macro</th><th>Description</th></tr></thead><tbody><tr><td><code>gpio_set_pin_input(pin)</code></td><td>Set pin as input with high impedance (High-Z)</td></tr><tr><td><code>gpio_set_pin_input_high(pin)</code></td><td>Set pin as input with builtin pull-up resistor</td></tr><tr><td><code>gpio_set_pin_input_low(pin)</code></td><td>Set pin as input with builtin pull-down resistor (unavailable on AVR)</td></tr><tr><td><code>gpio_set_pin_output(pin)</code></td><td>Set pin as output (alias of <code>gpio_set_pin_output_push_pull</code>)</td></tr><tr><td><code>gpio_set_pin_output_push_pull(pin)</code></td><td>Set pin as output, push/pull mode</td></tr><tr><td><code>gpio_set_pin_output_open_drain(pin)</code></td><td>Set pin as output, open-drain mode (unavailable on AVR and ATSAM)</td></tr><tr><td><code>gpio_write_pin_high(pin)</code></td><td>Set pin level as high, assuming it is an output</td></tr><tr><td><code>gpio_write_pin_low(pin)</code></td><td>Set pin level as low, assuming it is an output</td></tr><tr><td><code>gpio_write_pin(pin, level)</code></td><td>Set pin level, assuming it is an output</td></tr><tr><td><code>gpio_read_pin(pin)</code></td><td>Returns the level of the pin</td></tr><tr><td><code>gpio_toggle_pin(pin)</code></td><td>Invert pin level, assuming it is an output</td></tr></tbody></table><h2 id="advanced-settings" tabindex="-1">Advanced Settings <a class="header-anchor" href="#advanced-settings" aria-label="Permalink to &quot;Advanced Settings {#advanced-settings}&quot;">​</a></h2><p>Each microcontroller can have multiple advanced settings regarding its GPIO. This abstraction layer does not limit the use of architecture-specific functions. Advanced users should consult the datasheet of their desired device. For AVR, the standard <code>avr/io.h</code> library is used; for STM32, the ChibiOS <a href="https://chibios.sourceforge.net/docs3/hal/group___p_a_l.html" target="_blank" rel="noreferrer">PAL library</a> is used.</p><h2 id="atomic-operation" tabindex="-1">Atomic Operation <a class="header-anchor" href="#atomic-operation" aria-label="Permalink to &quot;Atomic Operation {#atomic-operation}&quot;">​</a></h2><p>The above functions are not always guaranteed to work atomically. Therefore, if you want to prevent interruptions in the middle of operations when using multiple combinations of the above functions, use the following <code>ATOMIC_BLOCK_FORCEON</code> macro.</p><p>eg.</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> some_function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // some process</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     ATOMIC_BLOCK_FORCEON {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Atomic Processing</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // some process</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>ATOMIC_BLOCK_FORCEON</code> forces interrupts to be disabled before the block is executed, without regard to whether they are enabled or disabled. Then, after the block is executed, the interrupt is enabled.</p><p>Note that <code>ATOMIC_BLOCK_FORCEON</code> can therefore be used if you know that interrupts are enabled before the execution of the block, or if you know that it is OK to enable interrupts at the completion of the block.</p>', 13);
const _hoisted_14 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_14);
}
const gpio_control = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gpio_control as default
};
