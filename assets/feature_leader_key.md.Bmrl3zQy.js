import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.DyMmIvSC.js";
const __pageData = JSON.parse('{"title":"The Leader Key: A New Kind of Modifier","description":"","frontmatter":{},"headers":[],"relativePath":"feature_leader_key.md","filePath":"feature_leader_key.md"}');
const _sfc_main = { name: "feature_leader_key.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="the-leader-key" tabindex="-1">The Leader Key: A New Kind of Modifier <a class="header-anchor" href="#the-leader-key" aria-label="Permalink to &quot;The Leader Key: A New Kind of Modifier {#the-leader-key}&quot;">​</a></h1><p>If you&#39;re a Vim user, you probably know what a Leader key is. In contrast to <a href="./feature_combo">Combos</a>, the Leader key allows you to hit a <em>sequence</em> of up to five keys instead, which triggers some custom functionality once complete.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage {#usage}&quot;">​</a></h2><p>Add the following to your <code>rules.mk</code>:</p><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LEADER_ENABLE = yes</span></span></code></pre></div><p>Then add the <code>QK_LEAD</code> keycode to your keymap.</p><h2 id="callbacks" tabindex="-1">Callbacks <a class="header-anchor" href="#callbacks" aria-label="Permalink to &quot;Callbacks {#callbacks}&quot;">​</a></h2><p>These callbacks are invoked when the leader sequence begins and ends. In the latter you can implement your custom functionality based on the contents of the sequence buffer.</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> leader_start_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Do something when the leader key is pressed</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> leader_end_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">leader_sequence_one_key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KC_F)) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Leader, f =&gt; Types the below string</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        SEND_STRING</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;QMK is awesome.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">leader_sequence_two_keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KC_D, KC_D)) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Leader, d, d =&gt; Ctrl+A, Ctrl+C</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        SEND_STRING</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SS_LCTL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SS_LCTL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">leader_sequence_three_keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KC_D, KC_D, KC_S)) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Leader, d, d, s =&gt; Types the below string</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        SEND_STRING</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://start.duckduckgo.com</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">leader_sequence_two_keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KC_A, KC_S)) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Leader, a, s =&gt; GUI+S</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        tap_code16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">LGUI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KC_S));</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="basic-configuration" tabindex="-1">Basic Configuration <a class="header-anchor" href="#basic-configuration" aria-label="Permalink to &quot;Basic Configuration {#basic-configuration}&quot;">​</a></h2><h3 id="timeout" tabindex="-1">Timeout <a class="header-anchor" href="#timeout" aria-label="Permalink to &quot;Timeout {#timeout}&quot;">​</a></h3><p>This is the amount of time you have to complete a sequence once the leader key has been pressed. The default value is 300 milliseconds, but you can change this by adding the following to your <code>config.h</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LEADER_TIMEOUT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 350</span></span></code></pre></div><h3 id="per-key-timeout" tabindex="-1">Per-Key Timeout <a class="header-anchor" href="#per-key-timeout" aria-label="Permalink to &quot;Per-Key Timeout {#per-key-timeout}&quot;">​</a></h3><p>Rather than relying on an incredibly high timeout for long leader key strings or those of us without 200 wpm typing skills, you can enable per-key timing to ensure that each key pressed provides you with more time to finish the sequence. This is incredibly helpful with leader key emulation of tap dance (such as multiple taps of the same key like C, C, C).</p><p>To enable this, add the following to your <code>config.h</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LEADER_PER_KEY_TIMING</span></span></code></pre></div><p>After this, it&#39;s recommended that you lower your timeout below 300 ms:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LEADER_TIMEOUT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 250</span></span></code></pre></div><p>Now, something like this won&#39;t seem impossible to do without a 1000 millisecond timeout:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">leader_sequence_three_keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KC_C, KC_C, KC_C)) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    SEND_STRING</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Per key timing is great!!!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="disabling-initial-timeout" tabindex="-1">Disabling Initial Timeout <a class="header-anchor" href="#disabling-initial-timeout" aria-label="Permalink to &quot;Disabling Initial Timeout {#disabling-initial-timeout}&quot;">​</a></h3><p>Sometimes your leader key may be too far away from the rest of the keys in the sequence. Imagine that your leader key is one of your outer top right keys - you may need to reposition your hand just to reach your leader key. This can make typing the entire sequence on time hard difficult if you are able to type most of the sequence fast. For example, if your sequence is <code>Leader + asd</code>, typing <code>asd</code> fast is very easy once you have your hands in your home row, but starting the sequence in time after moving your hand out of the home row to reach the leader key and back is not.</p><p>To remove the stress this situation produces to your hands, you can disable the timeout just for the leader key. Add the following to your <code>config.h</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LEADER_NO_TIMEOUT</span></span></code></pre></div><p>Now, after you hit the leader key, you will have an infinite amount of time to start the rest of the sequence, allowing you to properly position your hands to type the rest of the sequence comfortably. This way you can configure a very short <code>LEADER_TIMEOUT</code>, but still have plenty of time to position your hands.</p><h3 id="strict-key-processing" tabindex="-1">Strict Key Processing <a class="header-anchor" href="#strict-key-processing" aria-label="Permalink to &quot;Strict Key Processing {#strict-key-processing}&quot;">​</a></h3><p>By default, only the &quot;tap keycode&quot; portions of <a href="./mod_tap">Mod-Taps</a> and <a href="./feature_layers#switching-and-toggling-layers">Layer Taps</a> are added to the sequence buffer. This means if you press eg. <code>LT(3, KC_A)</code> as part of a sequence, <code>KC_A</code> will be added to the buffer, rather than the entire <code>LT(3, KC_A)</code> keycode.</p><p>This gives a more expected behaviour for most users, however you may want to change this.</p><p>To enable this, add the following to your <code>config.h</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LEADER_KEY_STRICT_KEY_PROCESSING</span></span></code></pre></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example {#example}&quot;">​</a></h2><p>This example will play the Mario &quot;One Up&quot; sound when you hit <code>QK_LEAD</code> to start the leader sequence. When the sequence ends, it will play &quot;All Star&quot; if it completes successfully or &quot;Rick Roll&quot; you if it fails (in other words, no sequence matched).</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AUDIO_ENABLE</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> leader_start_song</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SONG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ONE_UP_SOUND);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> leader_succeed_song</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SONG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ALL_STAR);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> leader_fail_song</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SONG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(RICK_ROLL);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#endif</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> leader_start_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AUDIO_ENABLE</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    PLAY_SONG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(leader_start_song);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#endif</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> leader_end_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> did_leader_succeed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">leader_sequence_one_key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KC_E)) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        SEND_STRING</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SS_LCTL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SS_LSFT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;t&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)));</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        did_leader_succeed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">leader_sequence_two_keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KC_E, KC_D)) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        SEND_STRING</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SS_LGUI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;r&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SS_LCTL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        did_leader_succeed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AUDIO_ENABLE</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (did_leader_succeed) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        PLAY_SONG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(leader_succeed_song);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        PLAY_SONG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(leader_fail_song);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#endif</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="keycodes" tabindex="-1">Keycodes <a class="header-anchor" href="#keycodes" aria-label="Permalink to &quot;Keycodes {#keycodes}&quot;">​</a></h2><table><thead><tr><th>Key</th><th>Aliases</th><th>Description</th></tr></thead><tbody><tr><td><code>QK_LEADER</code></td><td><code>QK_LEAD</code></td><td>Begin the leader sequence</td></tr></tbody></table><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API {#api}&quot;">​</a></h2><h3 id="api-leader-start-user" tabindex="-1"><code>void leader_start_user(void)</code> <a class="header-anchor" href="#api-leader-start-user" aria-label="Permalink to &quot;`void leader_start_user(void)` {#api-leader-start-user}&quot;">​</a></h3><p>User callback, invoked when the leader sequence begins.</p><hr><h3 id="api-leader-end-user" tabindex="-1"><code>void leader_end_user(void)</code> <a class="header-anchor" href="#api-leader-end-user" aria-label="Permalink to &quot;`void leader_end_user(void)` {#api-leader-end-user}&quot;">​</a></h3><p>User callback, invoked when the leader sequence ends.</p><hr><h3 id="api-leader-start" tabindex="-1"><code>void leader_start(void)</code> <a class="header-anchor" href="#api-leader-start" aria-label="Permalink to &quot;`void leader_start(void)` {#api-leader-start}&quot;">​</a></h3><p>Begin the leader sequence, resetting the buffer and timer.</p><hr><h3 id="api-leader-end" tabindex="-1"><code>void leader_end(void)</code> <a class="header-anchor" href="#api-leader-end" aria-label="Permalink to &quot;`void leader_end(void)` {#api-leader-end}&quot;">​</a></h3><p>End the leader sequence.</p><hr><h3 id="api-leader-sequence-active" tabindex="-1"><code>bool leader_sequence_active(void)</code> <a class="header-anchor" href="#api-leader-sequence-active" aria-label="Permalink to &quot;`bool leader_sequence_active(void)` {#api-leader-sequence-active}&quot;">​</a></h3><p>Whether the leader sequence is active.</p><hr><h3 id="api-leader-sequence-add" tabindex="-1"><code>bool leader_sequence_add(uint16_t keycode)</code> <a class="header-anchor" href="#api-leader-sequence-add" aria-label="Permalink to &quot;`bool leader_sequence_add(uint16_t keycode)` {#api-leader-sequence-add}&quot;">​</a></h3><p>Add the given keycode to the sequence buffer.</p><p>If <code>LEADER_NO_TIMEOUT</code> is defined, the timer is reset if the buffer is empty.</p><h4 id="api-leader-sequence-add-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-leader-sequence-add-arguments" aria-label="Permalink to &quot;Arguments {#api-leader-sequence-add-arguments}&quot;">​</a></h4><ul><li><code>uint16_t keycode</code><br> The keycode to add.</li></ul><h4 id="api-leader-sequence-add-return" tabindex="-1">Return Value <a class="header-anchor" href="#api-leader-sequence-add-return" aria-label="Permalink to &quot;Return Value {#api-leader-sequence-add-return}&quot;">​</a></h4><p><code>true</code> if the keycode was added, <code>false</code> if the buffer is full.</p><hr><h3 id="api-leader-sequence-timed-out" tabindex="-1"><code>bool leader_sequence_timed_out(void)</code> <a class="header-anchor" href="#api-leader-sequence-timed-out" aria-label="Permalink to &quot;`bool leader_sequence_timed_out(void)` {#api-leader-sequence-timed-out}&quot;">​</a></h3><p>Whether the leader sequence has reached the timeout.</p><p>If <code>LEADER_NO_TIMEOUT</code> is defined, the buffer must also contain at least one key.</p><hr><h3 id="api-leader-reset-timer" tabindex="-1"><code>bool leader_reset_timer(void)</code> <a class="header-anchor" href="#api-leader-reset-timer" aria-label="Permalink to &quot;`bool leader_reset_timer(void)` {#api-leader-reset-timer}&quot;">​</a></h3><p>Reset the leader sequence timer.</p><hr><h3 id="api-leader-sequence-one-key" tabindex="-1"><code>bool leader_sequence_one_key(uint16_t kc)</code> <a class="header-anchor" href="#api-leader-sequence-one-key" aria-label="Permalink to &quot;`bool leader_sequence_one_key(uint16_t kc)` {#api-leader-sequence-one-key}&quot;">​</a></h3><p>Check the sequence buffer for the given keycode.</p><h4 id="api-leader-sequence-one-key-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-leader-sequence-one-key-arguments" aria-label="Permalink to &quot;Arguments {#api-leader-sequence-one-key-arguments}&quot;">​</a></h4><ul><li><code>uint16_t kc</code><br> The keycode to check.</li></ul><h4 id="api-leader-sequence-one-key-return" tabindex="-1">Return Value <a class="header-anchor" href="#api-leader-sequence-one-key-return" aria-label="Permalink to &quot;Return Value {#api-leader-sequence-one-key-return}&quot;">​</a></h4><p><code>true</code> if the sequence buffer matches.</p><hr><h3 id="api-leader-sequence-two-keys" tabindex="-1"><code>bool leader_sequence_two_keys(uint16_t kc1, uint16_t kc2)</code> <a class="header-anchor" href="#api-leader-sequence-two-keys" aria-label="Permalink to &quot;`bool leader_sequence_two_keys(uint16_t kc1, uint16_t kc2)` {#api-leader-sequence-two-keys}&quot;">​</a></h3><p>Check the sequence buffer for the given keycodes.</p><h4 id="api-leader-sequence-two-keys-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-leader-sequence-two-keys-arguments" aria-label="Permalink to &quot;Arguments {#api-leader-sequence-two-keys-arguments}&quot;">​</a></h4><ul><li><code>uint16_t kc1</code><br> The first keycode to check.</li><li><code>uint16_t kc2</code><br> The second keycode to check.</li></ul><h4 id="api-leader-sequence-two-keys-return" tabindex="-1">Return Value <a class="header-anchor" href="#api-leader-sequence-two-keys-return" aria-label="Permalink to &quot;Return Value {#api-leader-sequence-two-keys-return}&quot;">​</a></h4><p><code>true</code> if the sequence buffer matches.</p><hr><h3 id="api-leader-sequence-three-keys" tabindex="-1"><code>bool leader_sequence_three_keys(uint16_t kc1, uint16_t kc2, uint16_t kc3)</code> <a class="header-anchor" href="#api-leader-sequence-three-keys" aria-label="Permalink to &quot;`bool leader_sequence_three_keys(uint16_t kc1, uint16_t kc2, uint16_t kc3)` {#api-leader-sequence-three-keys}&quot;">​</a></h3><p>Check the sequence buffer for the given keycodes.</p><h4 id="api-leader-sequence-three-keys-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-leader-sequence-three-keys-arguments" aria-label="Permalink to &quot;Arguments {#api-leader-sequence-three-keys-arguments}&quot;">​</a></h4><ul><li><code>uint16_t kc1</code><br> The first keycode to check.</li><li><code>uint16_t kc2</code><br> The second keycode to check.</li><li><code>uint16_t kc3</code><br> The third keycode to check.</li></ul><h4 id="api-leader-sequence-three-keys-return" tabindex="-1">Return Value <a class="header-anchor" href="#api-leader-sequence-three-keys-return" aria-label="Permalink to &quot;Return Value {#api-leader-sequence-three-keys-return}&quot;">​</a></h4><p><code>true</code> if the sequence buffer matches.</p><hr><h3 id="api-leader-sequence-four-keys" tabindex="-1"><code>bool leader_sequence_four_keys(uint16_t kc1, uint16_t kc2, uint16_t kc3, uint16_t kc4)</code> <a class="header-anchor" href="#api-leader-sequence-four-keys" aria-label="Permalink to &quot;`bool leader_sequence_four_keys(uint16_t kc1, uint16_t kc2, uint16_t kc3, uint16_t kc4)` {#api-leader-sequence-four-keys}&quot;">​</a></h3><p>Check the sequence buffer for the given keycodes.</p><h4 id="api-leader-sequence-four-keys-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-leader-sequence-four-keys-arguments" aria-label="Permalink to &quot;Arguments {#api-leader-sequence-four-keys-arguments}&quot;">​</a></h4><ul><li><code>uint16_t kc1</code><br> The first keycode to check.</li><li><code>uint16_t kc2</code><br> The second keycode to check.</li><li><code>uint16_t kc3</code><br> The third keycode to check.</li><li><code>uint16_t kc4</code><br> The fourth keycode to check.</li></ul><h4 id="api-leader-sequence-four-keys-return" tabindex="-1">Return Value <a class="header-anchor" href="#api-leader-sequence-four-keys-return" aria-label="Permalink to &quot;Return Value {#api-leader-sequence-four-keys-return}&quot;">​</a></h4><p><code>true</code> if the sequence buffer matches.</p><hr><h3 id="api-leader-sequence-five-keys" tabindex="-1"><code>bool leader_sequence_five_keys(uint16_t kc1, uint16_t kc2, uint16_t kc3, uint16_t kc4, uint16_t kc5)</code> <a class="header-anchor" href="#api-leader-sequence-five-keys" aria-label="Permalink to &quot;`bool leader_sequence_five_keys(uint16_t kc1, uint16_t kc2, uint16_t kc3, uint16_t kc4, uint16_t kc5)` {#api-leader-sequence-five-keys}&quot;">​</a></h3><p>Check the sequence buffer for the given keycodes.</p><h4 id="api-leader-sequence-five-keys-arguments" tabindex="-1">Arguments <a class="header-anchor" href="#api-leader-sequence-five-keys-arguments" aria-label="Permalink to &quot;Arguments {#api-leader-sequence-five-keys-arguments}&quot;">​</a></h4><ul><li><code>uint16_t kc1</code><br> The first keycode to check.</li><li><code>uint16_t kc2</code><br> The second keycode to check.</li><li><code>uint16_t kc3</code><br> The third keycode to check.</li><li><code>uint16_t kc4</code><br> The fourth keycode to check.</li><li><code>uint16_t kc5</code><br> The fifth keycode to check.</li></ul><h4 id="api-leader-sequence-five-keys-return" tabindex="-1">Return Value <a class="header-anchor" href="#api-leader-sequence-five-keys-return" aria-label="Permalink to &quot;Return Value {#api-leader-sequence-five-keys-return}&quot;">​</a></h4><p><code>true</code> if the sequence buffer matches.</p>', 101);
const _hoisted_102 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_102);
}
const feature_leader_key = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  feature_leader_key as default
};
