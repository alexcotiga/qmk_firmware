import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.DyMmIvSC.js";
const __pageData = JSON.parse(`{"title":"Understanding QMK's Code","description":"","frontmatter":{},"headers":[],"relativePath":"understanding_qmk.md","filePath":"understanding_qmk.md"}`);
const _sfc_main = { name: "understanding_qmk.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="understanding-qmk-s-code" tabindex="-1">Understanding QMK&#39;s Code <a class="header-anchor" href="#understanding-qmk-s-code" aria-label="Permalink to &quot;Understanding QMK&#39;s Code&quot;">​</a></h1><p>This document attempts to explain how the QMK firmware works from a very high level. It assumes you understand basic programming concepts but does not (except where needed to demonstrate) assume familiarity with C. It assumes that you have a basic understanding of the following documents:</p><ul><li><a href="./getting_started_introduction">Introduction</a></li><li><a href="./how_keyboards_work">How Keyboards Work</a></li><li><a href="./faq_general">FAQ</a></li></ul><h2 id="startup" tabindex="-1">Startup <a class="header-anchor" href="#startup" aria-label="Permalink to &quot;Startup&quot;">​</a></h2><p>You can think of QMK as no different from any other computer program. It is started and performs its tasks, but this program never finishes. Like other C programs, the entry point is the <code>main()</code> function. For QMK, the <code>main()</code> function is found in <a href="https://github.com/qmk/qmk_firmware/blob/0.15.13/quantum/main.c#L55" target="_blank" rel="noreferrer"><code>quantum/main.c</code></a>.</p><p>If you browse through the <code>main()</code> function you&#39;ll find that it starts by initializing any hardware that has been configured (including USB to the host). The most common platform for QMK is <code>lufa</code>, which runs on AVR processors such as the atmega32u4. When compiled for that platform, it will invoke for example <code>platform_setup()</code> in <a href="https://github.com/qmk/qmk_firmware/blob/0.15.13/platforms/avr/platform.c#L19" target="_blank" rel="noreferrer"><code>platforms/avr/platform.c</code></a> and <code>protocol_setup()</code> in <a href="https://github.com/qmk/qmk_firmware/blob/0.15.13/tmk_core/protocol/lufa/lufa.c#L1066" target="_blank" rel="noreferrer"><code>tmk_core/protocol/lufa/lufa.c</code></a>. It will use other implementations when compiled for other platforms like <code>chibios</code> and <code>vusb</code>. At first glance, it can look like a lot of functionality but most of the time the code will be disabled by <code>#define</code>s.</p><p>The <code>main()</code> function will then start the core part of the program with a <a href="https://github.com/qmk/qmk_firmware/blob/0.15.13/quantum/main.c#L63" target="_blank" rel="noreferrer"><code>while (true)</code></a>. This is <a href="#the-main-loop">The Main Loop</a>.</p><h2 id="the-main-loop" tabindex="-1">The Main Loop <a class="header-anchor" href="#the-main-loop" aria-label="Permalink to &quot;The Main Loop&quot;">​</a></h2><p>This section of code is called &quot;The Main Loop&quot; because it&#39;s responsible for looping over the same set of instructions forever, without ever reaching the end. This is where QMK dispatches out to the functions responsible for making the keyboard do everything it is supposed to do.</p><p>The main loop will call <a href="https://github.com/qmk/qmk_firmware/blob/0.15.13/quantum/main.c#L38" target="_blank" rel="noreferrer"><code>protocol_task()</code></a>, which in turn will call <code>keyboard_task()</code> in <a href="https://github.com/qmk/qmk_firmware/blob/0.15.13/quantum/keyboard.c#L377" target="_blank" rel="noreferrer"><code>quantum/keyboard.c</code></a>. This is where all the keyboard specific functionality is dispatched, and it is responsible for detecting changes in the matrix and turning status LEDs on and off.</p><p>Within <code>keyboard_task()</code> you&#39;ll find code to handle:</p><ul><li><a href="#matrix-scanning">Matrix Scanning</a></li><li>Mouse Handling</li><li>Keyboard status LEDs (Caps Lock, Num Lock, Scroll Lock)</li></ul><h4 id="matrix-scanning" tabindex="-1">Matrix Scanning <a class="header-anchor" href="#matrix-scanning" aria-label="Permalink to &quot;Matrix Scanning&quot;">​</a></h4><p>Matrix scanning is the core function of a keyboard firmware. It is the process of detecting which keys are currently pressed, and your keyboard runs this function many times a second. It&#39;s no exaggeration to say that 99% of your firmware&#39;s CPU time is spent on matrix scanning.</p><p>While there are different strategies for doing the actual matrix detection, they are out of scope for this document. It is sufficient to treat matrix scanning as a black box, you ask for the matrix&#39;s current state and get back a datastructure that looks like this:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>\n<span class="line"><span>    {0,0,0,0},</span></span>\n<span class="line"><span>    {0,0,0,0},</span></span>\n<span class="line"><span>    {0,0,0,0},</span></span>\n<span class="line"><span>    {0,0,0,0},</span></span>\n<span class="line"><span>    {0,0,0,0}</span></span>\n<span class="line"><span>}</span></span></code></pre></div><p>That datastructure is a direct representation of the matrix for a 5 row by 4 column numpad. When a key is pressed that key&#39;s position within the matrix will be returned as <code>1</code> instead of <code>0</code>.</p><p>Matrix Scanning runs many times per second. The exact rate varies but typically it runs at least 10 times per second to avoid perceptible lag.</p><h5 id="matrix-to-physical-layout-map" tabindex="-1">Matrix to Physical Layout Map <a class="header-anchor" href="#matrix-to-physical-layout-map" aria-label="Permalink to &quot;Matrix to Physical Layout Map&quot;">​</a></h5><p>Once we know the state of every switch on our keyboard we have to map that to a keycode. In QMK this is done by making use of C macros to allow us to separate the definition of the physical layout from the definition of keycodes.</p><p>At the keyboard level we define a C macro (typically named <code>LAYOUT()</code>) which maps our keyboard&#39;s matrix to physical keys. Sometimes the matrix does not have a switch in every location, and we can use this macro to pre-populate those with KC_NO, making the keymap definition easier to work with. Here&#39;s an example <code>LAYOUT()</code> macro for a numpad:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LAYOUT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    k00, k01, k02, k03, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    k10, k11, k12, k13, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    k20, k21, k22, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    k30, k31, k32, k33, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    k40,      k42 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { k00, k01,   k02, k03   }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { k10, k11,   k12, k13   }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { k20, k21,   k22, KC_NO }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { k30, k31,   k32, k33   }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { k40, KC_NO, k42, KC_NO } </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Notice how the second block of our <code>LAYOUT()</code> macro matches the Matrix Scanning array above? This macro is what will map the matrix scanning array to keycodes. However, if you look at a 17 key numpad you&#39;ll notice that it has 3 places where the matrix could have a switch but doesn&#39;t, due to larger keys. We have populated those spaces with <code>KC_NO</code> so that our keymap definition doesn&#39;t have to.</p><p>You can also use this macro to handle unusual matrix layouts, for example the <a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/keyboards/sneakbox/aliceclone/aliceclone.h#L24" target="_blank" rel="noreferrer">Alice</a>. Explaining that is outside the scope of this document.</p><h5 id="keycode-assignment" tabindex="-1">Keycode Assignment <a class="header-anchor" href="#keycode-assignment" aria-label="Permalink to &quot;Keycode Assignment&quot;">​</a></h5><p>At the keymap level we make use of our <code>LAYOUT()</code> macro above to map keycodes to physical locations to matrix locations. It looks like this:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> uint16_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PROGMEM keymaps</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[MATRIX_ROWS][MATRIX_COLS] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LAYOUT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        KC_NUM,  KC_PSLS, KC_PAST, KC_PMNS,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        KC_P7,   KC_P8,   KC_P9,   KC_PPLS,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        KC_P4,   KC_P5,   KC_P6,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        KC_P1,   KC_P2,   KC_P3,   KC_PENT,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        KC_P0,            KC_PDOT</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Notice how all of these arguments match up with the first half of the <code>LAYOUT()</code> macro from the last section? This is how we take a keycode and map it to our Matrix Scan from earlier.</p><h5 id="state-change-detection" tabindex="-1">State Change Detection <a class="header-anchor" href="#state-change-detection" aria-label="Permalink to &quot;State Change Detection&quot;">​</a></h5><p>The matrix scanning described above tells us the state of the matrix at a given moment, but your computer only wants to know about changes, it doesn&#39;t care about the current state. QMK stores the results from the last matrix scan and compares the results from this matrix to determine when a key has been pressed or released.</p><p>Let&#39;s look at an example. We&#39;ll hop into the middle of a keyboard scanning loop to find that our previous scan looks like this:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>\n<span class="line"><span>    {0,0,0,0},</span></span>\n<span class="line"><span>    {0,0,0,0},</span></span>\n<span class="line"><span>    {0,0,0,0},</span></span>\n<span class="line"><span>    {0,0,0,0},</span></span>\n<span class="line"><span>    {0,0,0,0}</span></span>\n<span class="line"><span>}</span></span></code></pre></div><p>And when our current scan completes it will look like this:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>\n<span class="line"><span>    {1,0,0,0},</span></span>\n<span class="line"><span>    {0,0,0,0},</span></span>\n<span class="line"><span>    {0,0,0,0},</span></span>\n<span class="line"><span>    {0,0,0,0},</span></span>\n<span class="line"><span>    {0,0,0,0}</span></span>\n<span class="line"><span>}</span></span></code></pre></div><p>Comparing against our keymap we can see that the pressed key is <code>KC_NUM</code>. From here we dispatch to the <code>process_record</code> set of functions.</p><h5 id="process-record" tabindex="-1">Process Record <a class="header-anchor" href="#process-record" aria-label="Permalink to &quot;Process Record&quot;">​</a></h5><p>The <code>process_record()</code> function itself is deceptively simple, but hidden within is a gateway to overriding functionality at various levels of QMK. The chain of events is listed below, using cluecard whenever we need to look at the keyboard/keymap level functions. Depending on options set in <code>rules.mk</code> or elsewhere, only a subset of the functions below will be included in final firmware.</p><ul><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/action.c#L78-L140" target="_blank" rel="noreferrer"><code>void action_exec(keyevent_t event)</code></a><ul><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/quantum.c#L204" target="_blank" rel="noreferrer"><code>void pre_process_record_quantum(keyrecord_t *record)</code></a><ul><li><a href="https://github.com/qmk/qmk_firmware/blob/27119fa77e8a1b95fff80718d3db4f3e32849298/quantum/quantum.c#L117" target="_blank" rel="noreferrer"><code>bool pre_process_record_kb(uint16_t keycode, keyrecord_t *record)</code></a><ul><li><a href="https://github.com/qmk/qmk_firmware/blob/27119fa77e8a1b95fff80718d3db4f3e32849298/quantum/quantum.c#L121" target="_blank" rel="noreferrer"><code>bool pre_process_record_user(uint16_t keycode, keyrecord_t *record)</code></a></li></ul></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_combo.c#L521" target="_blank" rel="noreferrer"><code>bool process_combo(uint16_t keycode, keyrecord_t *record)</code></a></li></ul></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/action.c#L254" target="_blank" rel="noreferrer"><code>void process_record(keyrecord_t *record)</code></a><ul><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/quantum.c#L224" target="_blank" rel="noreferrer"><code>bool process_record_quantum(keyrecord_t *record)</code></a><ul><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/quantum.c#L225" target="_blank" rel="noreferrer">Map this record to a keycode</a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/velocikey.c#L27" target="_blank" rel="noreferrer"><code>void velocikey_accelerate(void)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/wpm.c#L109" target="_blank" rel="noreferrer"><code>void update_wpm(uint16_t keycode)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_tap_dance.c#L118" target="_blank" rel="noreferrer"><code>void preprocess_tap_dance(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_key_lock.c#L64" target="_blank" rel="noreferrer"><code>bool process_key_lock(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_dynamic_macro.c#L160" target="_blank" rel="noreferrer"><code>bool process_dynamic_macro(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_clicky.c#L84" target="_blank" rel="noreferrer"><code>bool process_clicky(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_haptic.c#L87" target="_blank" rel="noreferrer"><code>bool process_haptic(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/via.c#L160" target="_blank" rel="noreferrer"><code>bool process_record_via(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/keyboards/planck/ez/ez.c#L271" target="_blank" rel="noreferrer"><code>bool process_record_kb(uint16_t keycode, keyrecord_t *record)</code></a><ul><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/keyboards/planck/keymaps/default/keymap.c#L183" target="_blank" rel="noreferrer"><code>bool process_record_user(uint16_t keycode, keyrecord_t *record)</code></a></li></ul></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_secure.c#L23" target="_blank" rel="noreferrer"><code>bool process_secure(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_sequencer.c#L19" target="_blank" rel="noreferrer"><code>bool process_sequencer(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_midi.c#L75" target="_blank" rel="noreferrer"><code>bool process_midi(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_audio.c#L18" target="_blank" rel="noreferrer"><code>bool process_audio(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_backlight.c#L25" target="_blank" rel="noreferrer"><code>bool process_backlight(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_steno.c#L159" target="_blank" rel="noreferrer"><code>bool process_steno(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_music.c#L103" target="_blank" rel="noreferrer"><code>bool process_music(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/5a1b857dea45a17698f6baa7dd1b7a7ea907fb0a/quantum/process_keycode/process_key_override.c#L397" target="_blank" rel="noreferrer"><code>bool process_key_override(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_tap_dance.c#L135" target="_blank" rel="noreferrer"><code>bool process_tap_dance(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_caps_word.c#L17" target="_blank" rel="noreferrer"><code>bool process_caps_word(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_unicode_common.c#L290" target="_blank" rel="noreferrer"><code>bool process_unicode_common(uint16_t keycode, keyrecord_t *record)</code></a> calls one of: <ul><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_unicode.c#L21" target="_blank" rel="noreferrer"><code>bool process_unicode(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_unicodemap.c#L42" target="_blank" rel="noreferrer"><code>bool process_unicodemap(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_ucis.c#L70" target="_blank" rel="noreferrer"><code>bool process_ucis(uint16_t keycode, keyrecord_t *record)</code></a></li></ul></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_leader.c#L48" target="_blank" rel="noreferrer"><code>bool process_leader(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_auto_shift.c#L353" target="_blank" rel="noreferrer"><code>bool process_auto_shift(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_dynamic_tapping_term.c#L35" target="_blank" rel="noreferrer"><code>bool process_dynamic_tapping_term(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_space_cadet.c#L123" target="_blank" rel="noreferrer"><code>bool process_space_cadet(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_magic.c#L40" target="_blank" rel="noreferrer"><code>bool process_magic(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_grave_esc.c#L23" target="_blank" rel="noreferrer"><code>bool process_grave_esc(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_rgb.c#L53" target="_blank" rel="noreferrer"><code>bool process_rgb(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_joystick.c#L9" target="_blank" rel="noreferrer"><code>bool process_joystick(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/process_keycode/process_programmable_button.c#L21" target="_blank" rel="noreferrer"><code>bool process_programmable_button(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="https://github.com/qmk/qmk_firmware/blob/325da02e57fe7374e77b82cb00360ba45167e25c/quantum/quantum.c#L343" target="_blank" rel="noreferrer">Identify and process Quantum-specific keycodes</a></li></ul></li></ul></li></ul></li></ul><p>At any step during this chain of events a function (such as <code>process_record_kb()</code>) can <code>return false</code> to halt all further processing.</p><p>After this is called, <code>post_process_record()</code> is called, which can be used to handle additional cleanup that needs to be run after the keycode is normally handled.</p><ul><li><a href="./"><code>void post_process_record(keyrecord_t *record)</code></a><ul><li><a href="./"><code>void post_process_record_quantum(keyrecord_t *record)</code></a><ul><li><a href="./">Map this record to a keycode</a></li><li><a href="./"><code>void post_process_clicky(uint16_t keycode, keyrecord_t *record)</code></a></li><li><a href="./"><code>void post_process_record_kb(uint16_t keycode, keyrecord_t *record)</code></a><ul><li><a href="./"><code>void post_process_record_user(uint16_t keycode, keyrecord_t *record)</code></a></li></ul></li></ul></li></ul></li></ul>', 41);
const _hoisted_42 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_42);
}
const understanding_qmk = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  understanding_qmk as default
};
