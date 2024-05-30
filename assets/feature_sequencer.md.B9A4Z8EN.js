import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.DyMmIvSC.js";
const __pageData = JSON.parse('{"title":"Sequencer","description":"","frontmatter":{},"headers":[],"relativePath":"feature_sequencer.md","filePath":"feature_sequencer.md"}');
const _sfc_main = { name: "feature_sequencer.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="sequencer" tabindex="-1">Sequencer <a class="header-anchor" href="#sequencer" aria-label="Permalink to &quot;Sequencer&quot;">​</a></h1><p>Since QMK has experimental support for MIDI, you can now turn your keyboard into a <a href="https://en.wikipedia.org/wiki/Music_sequencer#Step_sequencers" target="_blank" rel="noreferrer">step sequencer</a>!</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>IMPORTANT:</strong> This feature is highly experimental, it has only been tested on a Planck EZ so far. Also, the scope will be limited to support the drum machine use-case to start with.</p></div><h2 id="enable-the-step-sequencer" tabindex="-1">Enable the step sequencer <a class="header-anchor" href="#enable-the-step-sequencer" aria-label="Permalink to &quot;Enable the step sequencer&quot;">​</a></h2><p>Add the following line to your <code>rules.mk</code>:</p><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SEQUENCER_ENABLE = yes</span></span></code></pre></div><p>By default the sequencer has 16 steps, but you can override this setting in your <code>config.h</code>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SEQUENCER_STEPS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span></span></code></pre></div><h2 id="tracks" tabindex="-1">Tracks <a class="header-anchor" href="#tracks" aria-label="Permalink to &quot;Tracks&quot;">​</a></h2><p>You can program up to 8 independent tracks with the step sequencer. Select the tracks you want to edit, enable or disable some steps, and start the sequence!</p><h2 id="resolutions" tabindex="-1">Resolutions <a class="header-anchor" href="#resolutions" aria-label="Permalink to &quot;Resolutions&quot;">​</a></h2><p>While the tempo defines the absolute speed at which the sequencer goes through the steps, the resolution defines the granularity of these steps (from coarser to finer).</p><table><thead><tr><th>Resolution</th><th>Description</th></tr></thead><tbody><tr><td><code>SQ_RES_2</code></td><td>Every other beat</td></tr><tr><td><code>SQ_RES_2T</code></td><td>Every 1.5 beats</td></tr><tr><td><code>SQ_RES_4</code></td><td>Every beat</td></tr><tr><td><code>SQ_RES_4T</code></td><td>Three times per 2 beats</td></tr><tr><td><code>SQ_RES_8</code></td><td>Twice per beat</td></tr><tr><td><code>SQ_RES_8T</code></td><td>Three times per beat</td></tr><tr><td><code>SQ_RES_16</code></td><td>Four times per beat</td></tr><tr><td><code>SQ_RES_16T</code></td><td>Six times per beat</td></tr><tr><td><code>SQ_RES_32</code></td><td>Eight times per beat</td></tr></tbody></table><h2 id="keycodes" tabindex="-1">Keycodes <a class="header-anchor" href="#keycodes" aria-label="Permalink to &quot;Keycodes&quot;">​</a></h2><table><thead><tr><th>Key</th><th>Aliases</th><th>Description</th></tr></thead><tbody><tr><td><code>QK_SEQUENCER_ON</code></td><td><code>SQ_ON</code></td><td>Start the step sequencer</td></tr><tr><td><code>QK_SEQUENCER_OFF</code></td><td><code>SQ_OFF</code></td><td>Stop the step sequencer</td></tr><tr><td><code>QK_SEQUENCER_TOGGLE</code></td><td><code>SQ_TOGG</code></td><td>Toggle the step sequencer playback</td></tr><tr><td><code>QK_SEQUENCER_STEPS_ALL</code></td><td><code>SQ_SALL</code></td><td>Enable all the steps</td></tr><tr><td><code>QK_SEQUENCER_STEPS_CLEAR</code></td><td><code>SQ_SCLR</code></td><td>Disable all the steps</td></tr><tr><td><code>QK_SEQUENCER_TEMPO_DOWN</code></td><td><code>SQ_TMPD</code></td><td>Decrease the tempo</td></tr><tr><td><code>QK_SEQUENCER_TEMPO_UP</code></td><td><code>SQ_TMPU</code></td><td>Increase the tempo</td></tr><tr><td><code>QK_SEQUENCER_RESOLUTION_DOWN</code></td><td><code>SQ_RESD</code></td><td>Change to the slower resolution</td></tr><tr><td><code>QK_SEQUENCER_RESOLUTION_UP</code></td><td><code>SQ_RESU</code></td><td>Change to the faster resolution</td></tr><tr><td><code>SQ_S(n)</code></td><td></td><td>Toggle the step <code>n</code></td></tr><tr><td><code>SQ_R(n)</code></td><td></td><td>Set the resolution to n</td></tr><tr><td><code>SQ_T(n)</code></td><td></td><td>Set <code>n</code> as the only active track or deactivate all</td></tr></tbody></table><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><code>bool is_sequencer_on(void);</code></td><td>Return whether the sequencer is playing</td></tr><tr><td><code>void sequencer_toggle(void);</code></td><td>Toggle the step sequencer playback</td></tr><tr><td><code>void sequencer_on(void);</code></td><td>Start the step sequencer</td></tr><tr><td><code>void sequencer_off(void);</code></td><td>Stop the step sequencer</td></tr><tr><td><code>bool is_sequencer_step_on(uint8_t step);</code></td><td>Return whether the step is currently enabled</td></tr><tr><td><code>void sequencer_set_step(uint8_t step, bool value);</code></td><td>Enable or disable the step</td></tr><tr><td><code>void sequencer_set_step_on();</code></td><td>Enable the step</td></tr><tr><td><code>void sequencer_set_step_off();</code></td><td>Disable the step</td></tr><tr><td><code>void sequencer_toggle_step(uint8_t step);</code></td><td>Toggle the step</td></tr><tr><td><code>void sequencer_set_all_steps(bool value);</code></td><td>Enable or disable all the steps</td></tr><tr><td><code>void sequencer_set_all_steps_on();</code></td><td>Enable all the steps</td></tr><tr><td><code>void sequencer_set_all_steps_off();</code></td><td>Disable all the steps</td></tr><tr><td><code>uint8_t sequencer_get_tempo(void);</code></td><td>Return the current tempo</td></tr><tr><td><code>void sequencer_set_tempo(uint8_t tempo);</code></td><td>Set the tempo to <code>tempo</code> (between 1 and 255)</td></tr><tr><td><code>void sequencer_increase_tempo(void);</code></td><td>Increase the tempo</td></tr><tr><td><code>void sequencer_decrease_tempo(void);</code></td><td>Decrease the tempo</td></tr><tr><td><code>sequencer_resolution_t sequencer_get_resolution(void);</code></td><td>Return the current resolution</td></tr><tr><td><code>void sequencer_set_resolution(sequencer_resolution_t resolution);</code></td><td>Set the resolution to <code>resolution</code></td></tr><tr><td><code>void sequencer_increase_resolution(void);</code></td><td>Change to the faster resolution</td></tr><tr><td><code>void sequencer_decrease_resolution(void);</code></td><td>Change to the slower resolution</td></tr><tr><td><code>bool is_sequencer_track_active(uint8_t track);</code></td><td>Return whether the track is active</td></tr><tr><td><code>void sequencer_set_track_activation(uint8_t track, bool value);</code></td><td>Activate or deactivate the <code>track</code></td></tr><tr><td><code>void sequencer_toggle_track_activation(uint8_t track);</code></td><td>Toggle the <code>track</code></td></tr><tr><td><code>void sequencer_activate_track(uint8_t track);</code></td><td>Activate the <code>track</code></td></tr><tr><td><code>void sequencer_deactivate_track(uint8_t track);</code></td><td>Deactivate the <code>track</code></td></tr><tr><td><code>void sequencer_toggle_single_active_track(uint8_t track);</code></td><td>Set <code>track</code> as the only active track or deactivate all</td></tr></tbody></table>', 17);
const _hoisted_18 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_18);
}
const feature_sequencer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  feature_sequencer as default
};
