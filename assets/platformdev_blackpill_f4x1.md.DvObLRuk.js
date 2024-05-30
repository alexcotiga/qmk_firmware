import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.DyMmIvSC.js";
const __pageData = JSON.parse('{"title":"WeAct Blackpill (STM32F4x1)","description":"","frontmatter":{},"headers":[],"relativePath":"platformdev_blackpill_f4x1.md","filePath":"platformdev_blackpill_f4x1.md"}');
const _sfc_main = { name: "platformdev_blackpill_f4x1.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="weact-blackpill-stm32f4x1" tabindex="-1">WeAct Blackpill (STM32F4x1) <a class="header-anchor" href="#weact-blackpill-stm32f4x1" aria-label="Permalink to &quot;WeAct Blackpill (STM32F4x1)&quot;">​</a></h1><p>This document applies to the F401- and F411-based Blackpills.</p><p>The WeAct Blackpill is a popular choice for handwired boards, as it offers a powerful micro controller, USB Type C, a good number of pins to use, and a large amount of firmware space. All for a ~$6 USD price tag.</p><ul><li><a href="https://github.com/WeActStudio/WeActStudio.MiniSTM32F4x1" target="_blank" rel="noreferrer">WeAct GitHub for F4x1 Blackpill</a><ul><li>Unfortunately, due to supply issues official WeAct F411 based blackpills may not be available.</li></ul></li></ul><p><img src="https://i.imgur.com/nCgeolTh.png" alt="Blackpill F411"></p><h2 id="pin-usage-limitations" tabindex="-1">Pin Usage Limitations <a class="header-anchor" href="#pin-usage-limitations" aria-label="Permalink to &quot;Pin Usage Limitations&quot;">​</a></h2><p>While the Blackpill is a great choice to use in your keyboard, there are a number of caveats in regards to using them. The first is that a number of exposed pins cannot be used, or have special considerations/hardware tweaks that are required for proper operation.</p><h3 id="unusable-pins" tabindex="-1">Unusable pins <a class="header-anchor" href="#unusable-pins" aria-label="Permalink to &quot;Unusable pins&quot;">​</a></h3><ul><li>Pins <code>A11</code> and <code>A12</code> are not usable because they&#39;re used for USB connection, and cannot be shared. <ul><li>In theory, these pins can be used. However, doing so may disable USB connectivity, outright, if used for anything other than a USB port</li></ul></li><li>Pin <code>B2</code> is used by <code>BOOT1</code> and cannot be used, without causing problems.</li><li><code>VBAT</code> is not a usable pin.</li><li><code>NRST</code> is not a usable pin.</li></ul><h3 id="pins-to-be-avoided" tabindex="-1">Pins to be avoided <a class="header-anchor" href="#pins-to-be-avoided" aria-label="Permalink to &quot;Pins to be avoided&quot;">​</a></h3><ul><li>Pin <code>A9</code> is meant for VBUS Sense and should not be used, if it can be avoided. It has an internal pull-down resistor, which may cause issues with usage. However, a pull-up resistor can work (~5.1k), but should be avoided.</li><li>Pin <code>A10</code> can be used, but should be avoided. Any connection on this pin can prevent the bootloader from entering the proper mode for DFU flashing. A pull-up resistor (~22k) on this pin fixes the bootloader issue.</li></ul><h3 id="shared-usage" tabindex="-1">Shared Usage <a class="header-anchor" href="#shared-usage" aria-label="Permalink to &quot;Shared Usage&quot;">​</a></h3><ul><li>Pin <code>A0</code> is shared with the User Key (button) on the controller. It can be used.</li><li>Pin <code>C13</code> is shared with the onboard LED indicator, and is connected to +3.3V. This can be used, but may cause the LED to blink intermittently, depending on activity on the pin.</li><li>Pins <code>A4</code>, <code>A5</code>, <code>A6</code> and <code>A7</code> are used by the SOI8 footprint on the back of the controller, that can be used for either an SPI Flash chip, or an SPI EEPROM chip. <code>A4</code> is the Chip Select pin, and cannot be shared. However, <code>A5</code>, <code>A6</code>, and <code>A7</code> are the <code>SCK</code>, <code>MISO</code>, and <code>MOSI</code> pins, respectively, and can be shared with other SPI devices.</li></ul><h3 id="limited-usage" tabindex="-1">Limited Usage <a class="header-anchor" href="#limited-usage" aria-label="Permalink to &quot;Limited Usage&quot;">​</a></h3><ul><li><p>Pins <code>C13</code>, <code>C14</code>, and <code>C15</code> have limits on output current. They should be used only as input, e.g., they should not be used for row pins in COL2ROW matrix configurations, but can be used as column pins.</p><ul><li>This is because the column pins (in COL2ROW) are pulled up (the pull-up strength is independent of the current sourcing limitation) and the ROW is driven low and sinks current, then we check the state of the COLs to look for keypresses.</li></ul></li><li><p>Pins <code>A0</code> and <code>B5</code> are not 5V tolerant, and should only be used with 3.3V compatible functionality.</p></li></ul><h2 id="additional-information" tabindex="-1">Additional Information <a class="header-anchor" href="#additional-information" aria-label="Permalink to &quot;Additional Information&quot;">​</a></h2><h3 id="bootloader-issues" tabindex="-1">Bootloader issues <a class="header-anchor" href="#bootloader-issues" aria-label="Permalink to &quot;Bootloader issues&quot;">​</a></h3><p>Due to the use of a 25MHz crystal, the controller may have issues entering the bootloader. Heating up the controller can help with this issue.</p><p>Also, if pin <code>A10</code> is connected to anything at all, it needs to have a pull-up resistor (see <a href="#pins-to-be-avoided">Pins to be avoided</a>, above)</p><h3 id="tiny-uf2-support" tabindex="-1">Tiny UF2 Support <a class="header-anchor" href="#tiny-uf2-support" aria-label="Permalink to &quot;Tiny UF2 Support&quot;">​</a></h3><p>There is <a href="https://github.com/adafruit/tinyuf2/tree/master/ports/stm32f4/boards/stm32f411ce_blackpill" target="_blank" rel="noreferrer">tinyuf2 support for the WeAct Blackpill</a>. Instructions on how to compile the bootloader can be found <a href="https://github.com/adafruit/tinyuf2#build-and-flash" target="_blank" rel="noreferrer">here</a>. Setting <code>BOOTLOADER = tinyuf2</code> will enable support for this user bootloader, and the correct configuration to prevent it from being overwritten when flashing firmware.</p>', 21);
const _hoisted_22 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_22);
}
const platformdev_blackpill_f4x1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  platformdev_blackpill_f4x1 as default
};
