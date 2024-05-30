import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.DyMmIvSC.js";
const __pageData = JSON.parse('{"title":"Send String","description":"","frontmatter":{},"headers":[],"relativePath":"feature_send_string.md","filePath":"feature_send_string.md"}');
const _sfc_main = { name: "feature_send_string.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="send-string" tabindex="-1">Send String <a class="header-anchor" href="#send-string" aria-label="Permalink to &quot;Send String {#send-string}&quot;">​</a></h1><p>The Send String API is part of QMK&#39;s macro system. It allows for sequences of keystrokes to be sent automatically.</p><p>The full ASCII character set is supported, along with all of the keycodes in the Basic Keycode range (as these are the only ones that will actually be sent to the host).</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Unicode characters are <strong>not</strong> supported with this API -- see the <a href="./feature_unicode">Unicode</a> feature instead.</p></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage {#usage}&quot;">​</a></h2><p>Send String is enabled by default, so there is usually no need for any special setup. However, if it is disabled, add the following to your <code>rules.mk</code>:</p><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SEND_STRING_ENABLE = yes</span></span></code></pre></div><h2 id="basic-configuration" tabindex="-1">Basic Configuration <a class="header-anchor" href="#basic-configuration" aria-label="Permalink to &quot;Basic Configuration {#basic-configuration}&quot;">​</a></h2><p>Add the following to your <code>config.h</code>:</p><table><thead><tr><th>Define</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>SENDSTRING_BELL</code></td><td><em>Not defined</em></td><td>If the <a href="./feature_audio">Audio</a> feature is enabled, the <code>\\a</code> character (ASCII <code>BEL</code>) will beep the speaker.</td></tr><tr><td><code>BELL_SOUND</code></td><td><code>TERMINAL_SOUND</code></td><td>The song to play when the <code>\\a</code> character is encountered. By default, this is an eighth note of C5.</td></tr></tbody></table><h2 id="keycodes" tabindex="-1">Keycodes <a class="header-anchor" href="#keycodes" aria-label="Permalink to &quot;Keycodes {#keycodes}&quot;">​</a></h2><p>The Send String functions accept C string literals, but specific keycodes can be injected with the below macros. All of the keycodes in the <a href="./keycodes_basic">Basic Keycode range</a> are supported (as these are the only ones that will actually be sent to the host), but with an <code>X_</code> prefix instead of <code>KC_</code>.</p><table><thead><tr><th>Macro</th><th>Description</th></tr></thead><tbody><tr><td><code>SS_TAP(x)</code></td><td>Send a keydown, then keyup, event for the given Send String keycode</td></tr><tr><td><code>SS_DOWN(x)</code></td><td>Send a keydown event for the given Send String keycode</td></tr><tr><td><code>SS_UP(x)</code></td><td>Send a keyup event for the given Send String keycode</td></tr><tr><td><code>SS_DELAY(ms)</code></td><td>Wait for <code>ms</code> milliseconds</td></tr></tbody></table><p>The following characters are also mapped to their respective keycodes for convenience:</p><table><thead><tr><th>Character</th><th>Hex</th><th>ASCII</th><th>Keycode</th></tr></thead><tbody><tr><td><code>\\b</code></td><td><code>\\x08</code></td><td><code>BS</code></td><td><code>KC_BACKSPACE</code></td></tr><tr><td><code>\\e</code></td><td><code>\\x09</code></td><td><code>ESC</code></td><td><code>KC_ESCAPE</code></td></tr><tr><td><code>\\n</code></td><td><code>\\x0A</code></td><td><code>LF</code></td><td><code>KC_ENTER</code></td></tr><tr><td><code>\\t</code></td><td><code>\\x1B</code></td><td><code>TAB</code></td><td><code>KC_TAB</code></td></tr><tr><td></td><td><code>\\x7F</code></td><td><code>DEL</code></td><td><code>KC_DELETE</code></td></tr></tbody></table><h3 id="language-support" tabindex="-1">Language Support <a class="header-anchor" href="#language-support" aria-label="Permalink to &quot;Language Support {#language-support}&quot;">​</a></h3><p>By default, Send String assumes your OS keyboard layout is set to US ANSI. If you are using a different keyboard layout, you can <a href="./reference_keymap_extras#sendstring-support">override the lookup tables used to convert ASCII characters to keystrokes</a>.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples {#examples}&quot;">​</a></h2><h3 id="example-hello-world" tabindex="-1">Hello World <a class="header-anchor" href="#example-hello-world" aria-label="Permalink to &quot;Hello World {#example-hello-world}&quot;">​</a></h3><p>A simple custom keycode which types out &quot;Hello, world!&quot; and the Enter key when pressed.</p><p>Add the following to your <code>keymap.c</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> process_record_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint16_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> keycode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">keyrecord_t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (keycode) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SS_HELLO:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (record</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.pressed) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                SEND_STRING</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, world!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="example-keycode-injection" tabindex="-1">Keycode Injection <a class="header-anchor" href="#example-keycode-injection" aria-label="Permalink to &quot;Keycode Injection {#example-keycode-injection}&quot;">​</a></h3><p>This example types out opening and closing curly braces, then taps the left arrow key to move the cursor between the two.</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SEND_STRING</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{}&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SS_TAP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(X_LEFT));</span></span></code></pre></div><p>This example types Ctrl+A, then Ctrl+C, without releasing Ctrl.</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SEND_STRING</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SS_LCTL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ac&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API {#api}&quot;">​</a></h2><h3 id="api-send-string" tabindex="-1"><code>void send_string(const char *string)</code> <a class="header-anchor" href="#api-send-string" aria-label="Permalink to &quot;`void send_string(const char *string)` {#api-send-string}&quot;">​</a></h3><p>Type out a string of ASCII characters.</p><p>This function simply calls <code>send_string_with_delay(string, 0)</code>.</p><h4 id="api-send-string-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-send-string-arguments" aria-label="Permalink to &quot;Arguments {#api-send-string-arguments}&quot;">​</a></h4><ul><li><code>const char *string</code><br> The string to type out.</li></ul><hr><h3 id="api-send-string-with-delay" tabindex="-1"><code>void send_string_with_delay(const char *string, uint8_t interval)</code> <a class="header-anchor" href="#api-send-string-with-delay" aria-label="Permalink to &quot;`void send_string_with_delay(const char *string, uint8_t interval)` {#api-send-string-with-delay}&quot;">​</a></h3><p>Type out a string of ASCII characters, with a delay between each character.</p><h4 id="api-send-string-with-delay-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-send-string-with-delay-arguments" aria-label="Permalink to &quot;Arguments {#api-send-string-with-delay-arguments}&quot;">​</a></h4><ul><li><code>const char *string</code><br> The string to type out.</li><li><code>uint8_t interval</code><br> The amount of time, in milliseconds, to wait before typing the next character.</li></ul><hr><h3 id="api-send-string-p" tabindex="-1"><code>void send_string_P(const char *string)</code> <a class="header-anchor" href="#api-send-string-p" aria-label="Permalink to &quot;`void send_string_P(const char *string)` {#api-send-string-p}&quot;">​</a></h3><p>Type out a PROGMEM string of ASCII characters.</p><p>On ARM devices, this function is simply an alias for <code>send_string_with_delay(string, 0)</code>.</p><h4 id="api-send-string-p-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-send-string-p-arguments" aria-label="Permalink to &quot;Arguments {#api-send-string-p-arguments}&quot;">​</a></h4><ul><li><code>const char *string</code><br> The string to type out.</li></ul><hr><h3 id="api-send-string-with-delay-p" tabindex="-1"><code>void send_string_with_delay_P(const char *string, uint8_t interval)</code> <a class="header-anchor" href="#api-send-string-with-delay-p" aria-label="Permalink to &quot;`void send_string_with_delay_P(const char *string, uint8_t interval)` {#api-send-string-with-delay-p}&quot;">​</a></h3><p>Type out a PROGMEM string of ASCII characters, with a delay between each character.</p><p>On ARM devices, this function is simply an alias for <code>send_string_with_delay(string, interval)</code>.</p><h4 id="api-send-string-with-delay-p-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-send-string-with-delay-p-arguments" aria-label="Permalink to &quot;Arguments {#api-send-string-with-delay-p-arguments}&quot;">​</a></h4><ul><li><code>const char *string</code><br> The string to type out.</li><li><code>uint8_t interval</code><br> The amount of time, in milliseconds, to wait before typing the next character.</li></ul><hr><h3 id="api-send-char" tabindex="-1"><code>void send_char(char ascii_code)</code> <a class="header-anchor" href="#api-send-char" aria-label="Permalink to &quot;`void send_char(char ascii_code)` {#api-send-char}&quot;">​</a></h3><p>Type out an ASCII character.</p><h4 id="api-send-char-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-send-char-arguments" aria-label="Permalink to &quot;Arguments {#api-send-char-arguments}&quot;">​</a></h4><ul><li><code>char ascii_code</code><br> The character to type.</li></ul><hr><h3 id="api-send-dword" tabindex="-1"><code>void send_dword(uint32_t number)</code> <a class="header-anchor" href="#api-send-dword" aria-label="Permalink to &quot;`void send_dword(uint32_t number)` {#api-send-dword}&quot;">​</a></h3><p>Type out an eight digit (unsigned 32-bit) hexadecimal value.</p><p>The format is <code>[0-9a-f]{8}</code>, eg. <code>00000000</code> through <code>ffffffff</code>.</p><h4 id="api-send-dword-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-send-dword-arguments" aria-label="Permalink to &quot;Arguments {#api-send-dword-arguments}&quot;">​</a></h4><ul><li><code>uint32_t number</code><br> The value to type, from 0 to 4,294,967,295.</li></ul><hr><h3 id="api-send-word" tabindex="-1"><code>void send_word(uint16_t number)</code> <a class="header-anchor" href="#api-send-word" aria-label="Permalink to &quot;`void send_word(uint16_t number)` {#api-send-word}&quot;">​</a></h3><p>Type out a four digit (unsigned 16-bit) hexadecimal value.</p><p>The format is <code>[0-9a-f]{4}</code>, eg. <code>0000</code> through <code>ffff</code>.</p><h4 id="api-send-word-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-send-word-arguments" aria-label="Permalink to &quot;Arguments {#api-send-word-arguments}&quot;">​</a></h4><ul><li><code>uint16_t number</code><br> The value to type, from 0 to 65,535.</li></ul><hr><h3 id="api-send-bytes" tabindex="-1"><code>void send_byte(uint8_t number)</code> <a class="header-anchor" href="#api-send-bytes" aria-label="Permalink to &quot;`void send_byte(uint8_t number)` {#api-send-bytes}&quot;">​</a></h3><p>Type out a two digit (8-bit) hexadecimal value.</p><p>The format is <code>[0-9a-f]{2}</code>, eg. <code>00</code> through <code>ff</code>.</p><h4 id="api-send-byte-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-send-byte-arguments" aria-label="Permalink to &quot;Arguments {#api-send-byte-arguments}&quot;">​</a></h4><ul><li><code>uint8_t number</code><br> The value to type, from 0 to 255.</li></ul><hr><h3 id="api-send-nibble" tabindex="-1"><code>void send_nibble(uint8_t number)</code> <a class="header-anchor" href="#api-send-nibble" aria-label="Permalink to &quot;`void send_nibble(uint8_t number)` {#api-send-nibble}&quot;">​</a></h3><p>Type out a single hexadecimal digit.</p><p>The format is <code>[0-9a-f]{1}</code>, eg. <code>0</code> through <code>f</code>.</p><h4 id="api-send-nibble-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-send-nibble-arguments" aria-label="Permalink to &quot;Arguments {#api-send-nibble-arguments}&quot;">​</a></h4><ul><li><code>uint8_t number</code><br> The value to type, from 0 to 15.</li></ul><hr><h3 id="api-tap-random-base64" tabindex="-1"><code>void tap_random_base64(void)</code> <a class="header-anchor" href="#api-tap-random-base64" aria-label="Permalink to &quot;`void tap_random_base64(void)` {#api-tap-random-base64}&quot;">​</a></h3><p>Type a pseudorandom character from the set <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>+</code> and <code>/</code>.</p><hr><h3 id="api-send-string-macro" tabindex="-1"><code>SEND_STRING(string)</code> <a class="header-anchor" href="#api-send-string-macro" aria-label="Permalink to &quot;`SEND_STRING(string)` {#api-send-string-macro}&quot;">​</a></h3><p>Shortcut macro for <code>send_string_with_delay_P(PSTR(string), 0)</code>.</p><p>On ARM devices, this define evaluates to <code>send_string_with_delay(string, 0)</code>.</p><hr><h3 id="api-send-string-delay-macro" tabindex="-1"><code>SEND_STRING_DELAY(string, interval)</code> <a class="header-anchor" href="#api-send-string-delay-macro" aria-label="Permalink to &quot;`SEND_STRING_DELAY(string, interval)` {#api-send-string-delay-macro}&quot;">​</a></h3><p>Shortcut macro for <code>send_string_with_delay_P(PSTR(string), interval)</code>.</p><p>On ARM devices, this define evaluates to <code>send_string_with_delay(string, interval)</code>.</p>', 90);
const _hoisted_91 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_91);
}
const feature_send_string = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  feature_send_string as default
};
