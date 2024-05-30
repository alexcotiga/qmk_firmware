import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.DyMmIvSC.js";
const __pageData = JSON.parse('{"title":"Squeezing the most out of AVR","description":"","frontmatter":{},"headers":[],"relativePath":"squeezing_avr.md","filePath":"squeezing_avr.md"}');
const _sfc_main = { name: "squeezing_avr.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="squeezing-the-most-out-of-avr" tabindex="-1">Squeezing the most out of AVR <a class="header-anchor" href="#squeezing-the-most-out-of-avr" aria-label="Permalink to &quot;Squeezing the most out of AVR&quot;">​</a></h1><p>AVR is severely resource-constrained, and as QMK continues to grow, it is approaching a point where support for AVR may need to be moved to legacy status as newer development is unable to fit into those constraints.</p><p>However, if you need to reduce the compiled size of your firmware to fit the controller&#39;s limited flash size, there are a number of options to do so.</p><h2 id="rules-mk-settings" tabindex="-1"><code>rules.mk</code> Settings <a class="header-anchor" href="#rules-mk-settings" aria-label="Permalink to &quot;`rules.mk` Settings&quot;">​</a></h2><p>First and foremost is enabling link time optimization. To do so, add this to your rules.mk:</p><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LTO_ENABLE = yes</span></span></code></pre></div><p>This will cause the final step to take longer, but should get you a smaller compiled size. This also disables Action Functions, and Action Macros, both of which are deprecated. This will get you the most savings, in most situations.</p><p>From there, disabling extraneous systems will help -- e.g.:</p><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CONSOLE_ENABLE = no</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">COMMAND_ENABLE = no</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MOUSEKEY_ENABLE = no</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EXTRAKEY_ENABLE = no</span></span></code></pre></div><p>This disables some of the functionality that you may not need. But note that extrakeys disables stuff like the media keys and system volume control.</p><p>If that isn&#39;t enough to get your firmware down to size, then there are some additional features that you can disable:</p><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SPACE_CADET_ENABLE = no</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GRAVE_ESC_ENABLE = no </span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MAGIC_ENABLE = no</span></span></code></pre></div><p>These features are enabled by default, but they may not be needed. Double check to make sure. The <a href="./keycodes_magic">Magic Keycodes</a> are the largest and control things like NKRO toggling, GUI and ALT/CTRL swapping, etc. Disabling them will disable those functions. See <a href="#magic-functions">Magic Functions</a> for disabling related functions.</p><p>If you use <code>sprintf</code> or <code>snprintf</code> functions you can save around ~400 Bytes by enabling this option.</p><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AVR_USE_MINIMAL_PRINTF = yes</span></span></code></pre></div><p>This will include smaller implementations from AVRs libc into your Firmware. They are <a href="https://www.nongnu.org/avr-libc/user-manual/group__avr__stdio.html#gaa3b98c0d17b35642c0f3e4649092b9f1" target="_blank" rel="noreferrer">not fully featured</a>, for instance zero padding and field width specifiers are not supported. So if you use <code>sprintf</code> or <code>snprintf</code> like this:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sprintf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(wpm_str, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%03d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get_current_wpm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">snprintf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(keylog_str, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(keylog_str), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, k</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%2d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> : </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>you will still need the standard implementation.</p><h2 id="config-h-settings" tabindex="-1"><code>config.h</code> Settings <a class="header-anchor" href="#config-h-settings" aria-label="Permalink to &quot;`config.h` Settings&quot;">​</a></h2><p>If you&#39;ve done all of that, and you don&#39;t want to disable features like RGB, Audio, OLEDs, etc, there are some additional options that you can add to your config.h that can help.</p><p>Starting with Lock Key support. If you have a Cherry MX Lock switch (lucky you!), you don&#39;t want to do this. But chances are, you don&#39;t. In that case, add this to your <code>config.h</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LOCKING_SUPPORT_ENABLE</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LOCKING_RESYNC_ENABLE</span></span></code></pre></div><p>Oneshots. If you&#39;re not using these, you can disable the feature by adding this to your <code>config.h</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NO_ACTION_ONESHOT</span></span></code></pre></div><p>The same with tapping keys (mod tap, layer tap, etc)</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NO_ACTION_TAPPING</span></span></code></pre></div><h2 id="audio-settings" tabindex="-1">Audio Settings <a class="header-anchor" href="#audio-settings" aria-label="Permalink to &quot;Audio Settings&quot;">​</a></h2><p>If you&#39;re using the Audio feature, by default that includes the music mode feature. This tranlates matrix positions into notes. It&#39;s neat for sure, but most likely, you&#39;re not using it. You can disable it by adding this to your <code>config.h</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NO_MUSIC_MODE</span></span></code></pre></div><p>And by adding this to your <code>rules.mk</code></p><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MUSIC_ENABLE = no</span></span></code></pre></div><h2 id="layers" tabindex="-1">Layers <a class="header-anchor" href="#layers" aria-label="Permalink to &quot;Layers&quot;">​</a></h2><p>There are also some options for layers, that can reduce the firmware size. All of these settings are for your <code>config.h</code>.</p><p>You can limit the number of layers that the firmware uses -- if you&#39;re using up to 8 layers in total:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LAYER_STATE_8BIT</span></span></code></pre></div><p>or if you require up to 16 layers instead:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LAYER_STATE_16BIT</span></span></code></pre></div><p>Or if you&#39;re not using layers at all, you can outright remove the functionality altogether:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NO_ACTION_LAYER</span></span></code></pre></div><h2 id="magic-functions" tabindex="-1">Magic Functions <a class="header-anchor" href="#magic-functions" aria-label="Permalink to &quot;Magic Functions&quot;">​</a></h2><p>There are two <code>__attribute__ ((weak))</code> placeholder functions available to customize magic keycodes. If you are not using that feature to swap keycodes, such as backslash with backspace, add the following to your <code>keymap.c</code> or user space code:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#ifndef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MAGIC_ENABLE</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint16_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> keycode_config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint16_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> keycode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> keycode;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#endif</span></span></code></pre></div><p>Likewise, if you are not using magic keycodes to swap modifiers, such as Control with GUI, add the following to your <code>keymap.c</code> or user space code:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#ifndef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MAGIC_ENABLE</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint8_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mod_config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint8_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> mod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mod;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#endif</span></span></code></pre></div><p>Both of them will overwrite the placeholder functions with a simple return statement to reduce firmware size.</p><h2 id="oled-tweaks" tabindex="-1">OLED tweaks <a class="header-anchor" href="#oled-tweaks" aria-label="Permalink to &quot;OLED tweaks&quot;">​</a></h2><p>One place you can save a bunch of space here is by not using <code>sprintf</code> or <code>snprintf</code>. This function call takes up ~1.5kB of firmware space, and can be rewritten. For instance, WPM uses this a lot.</p><p>You can convert this:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // OLD CODE</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    char</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> wpm_str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    sprintf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(wpm_str, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;WPM: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%03d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get_current_wpm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    oled_write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(wpm_str, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39; &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>into this:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // NEW CODE</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    oled_write_P</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PSTR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;WPM: &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    oled_write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get_u8_str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get_current_wpm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39; &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>which outputs <code>WPM: 5</code>. Or this:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // NEW CODE</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    oled_write_P</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PSTR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;WPM: &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    oled_write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get_u8_str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get_current_wpm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>which outputs <code>WPM: 005</code>.</p><h2 id="rgb-settings" tabindex="-1">RGB Settings <a class="header-anchor" href="#rgb-settings" aria-label="Permalink to &quot;RGB Settings&quot;">​</a></h2><p>If you&#39;re using RGB on your board, both RGB Light (Underglow) and RGB Matrix (per key RGB) now require defines to enable different animations -- some keyboards enable a lot of animations by default, so you can generally gain back some space by disabling specific animations if you don&#39;t use them. For RGB Light you can disable these in your keymap&#39;s <code>config.h</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RGBLIGHT_ANIMATIONS</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RGBLIGHT_EFFECT_BREATHING</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RGBLIGHT_EFFECT_RAINBOW_MOOD</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RGBLIGHT_EFFECT_RAINBOW_SWIRL</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RGBLIGHT_EFFECT_SNAKE</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RGBLIGHT_EFFECT_KNIGHT</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RGBLIGHT_EFFECT_CHRISTMAS</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RGBLIGHT_EFFECT_STATIC_GRADIENT</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RGBLIGHT_EFFECT_RGB_TEST</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RGBLIGHT_EFFECT_ALTERNATING</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RGBLIGHT_EFFECT_TWINKLE</span></span></code></pre></div><p>For RGB Matrix, these need to be explicitly enabled as well. To disable any that were enabled by the keyboard, add one or more of these to your keymap&#39;s <code>config.h</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_ALPHAS_MODS</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_GRADIENT_UP_DOWN</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_GRADIENT_LEFT_RIGHT</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_BREATHING</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_BAND_SAT</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_BAND_VAL</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_BAND_PINWHEEL_SAT</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_BAND_PINWHEEL_VAL</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_BAND_SPIRAL_SAT</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_BAND_SPIRAL_VAL</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_CYCLE_ALL</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_CYCLE_LEFT_RIGHT</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_CYCLE_UP_DOWN</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_RAINBOW_MOVING_CHEVRON</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_CYCLE_OUT_IN</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_CYCLE_OUT_IN_DUAL</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_CYCLE_PINWHEEL</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_CYCLE_SPIRAL</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_DUAL_BEACON</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_RAINBOW_BEACON</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_RAINBOW_PINWHEELS</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_FLOWER_BLOOMING</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_RAINDROPS</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_JELLYBEAN_RAINDROPS</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_HUE_BREATHING</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_HUE_PENDULUM</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_HUE_WAVE</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_PIXEL_FRACTAL</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_PIXEL_FLOW</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_PIXEL_RAIN</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_TYPING_HEATMAP</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_DIGITAL_RAIN</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_SOLID_REACTIVE_SIMPLE</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_SOLID_REACTIVE</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_SOLID_REACTIVE_WIDE</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_SOLID_REACTIVE_MULTIWIDE</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_SOLID_REACTIVE_CROSS</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_SOLID_REACTIVE_MULTICROSS</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_SOLID_REACTIVE_NEXUS</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_SOLID_REACTIVE_MULTINEXUS</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_SPLASH</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_MULTISPLASH</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_SOLID_SPLASH</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#undef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ENABLE_RGB_MATRIX_SOLID_MULTISPLASH</span></span></code></pre></div><h1 id="final-thoughts" tabindex="-1">Final Thoughts <a class="header-anchor" href="#final-thoughts" aria-label="Permalink to &quot;Final Thoughts&quot;">​</a></h1><p>If you&#39;ve done all of this, and your firmware is still too large, then it is time to consider making the switch to ARM. There are a number of Pro Micro replacements with an ARM controller:</p><ul><li><a href="https://github.com/customMK/Bonsai-C" target="_blank" rel="noreferrer">Bonsai C</a> (Open Source, DIY/PCBA)</li><li><a href="https://github.com/megamind4089/STeMCell" target="_blank" rel="noreferrer">STeMCell</a> (Open Source, DIY/PCBA)</li><li><a href="https://learn.adafruit.com/adafruit-kb2040" target="_blank" rel="noreferrer">Adafruit KB2040</a></li><li><a href="https://www.sparkfun.com/products/18288" target="_blank" rel="noreferrer">SparkFun Pro Micro - RP2040</a></li><li><a href="https://boardsource.xyz/store/628b95b494dfa308a6581622" target="_blank" rel="noreferrer">Blok</a></li><li><a href="https://keeb.io/products/elite-pi-usb-c-pro-micro-replacement-rp2040" target="_blank" rel="noreferrer">Elite-Pi</a></li><li><a href="https://keeb.supply/products/0xcb-helios" target="_blank" rel="noreferrer">0xCB Helios</a> (<a href="https://github.com/0xCB-dev/0xCB-Helios" target="_blank" rel="noreferrer">Open Source</a>, DIY/PCBA/Shop)</li><li><a href="https://splitkb.com/products/liatris" target="_blank" rel="noreferrer">Liatris</a></li><li><a href="https://splitkb.com/products/imera" target="_blank" rel="noreferrer">Imera</a></li><li><a href="https://github.com/ci-bus/michi-promicro-rp2040" target="_blank" rel="noreferrer">Michi</a></li><li><a href="https://qmk.fm/proton-c/" target="_blank" rel="noreferrer">Proton C</a> (out of stock)</li></ul><p>There are other, non-Pro Micro compatible boards out there. The most popular being:</p><ul><li><a href="https://www.aliexpress.com/item/1005001456186625.html" target="_blank" rel="noreferrer">WeAct Blackpill F411</a> (~$6 USD)</li></ul>', 64);
const _hoisted_65 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_65);
}
const squeezing_avr = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  squeezing_avr as default
};
