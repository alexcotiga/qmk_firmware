import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.DyMmIvSC.js";
const __pageData = JSON.parse('{"title":"Frequently Asked Build Questions","description":"","frontmatter":{},"headers":[],"relativePath":"faq_build.md","filePath":"faq_build.md"}');
const _sfc_main = { name: "faq_build.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="frequently-asked-build-questions" tabindex="-1">Frequently Asked Build Questions <a class="header-anchor" href="#frequently-asked-build-questions" aria-label="Permalink to &quot;Frequently Asked Build Questions&quot;">​</a></h1><p>This page covers questions about building QMK. If you haven&#39;t yet done so, you should read the <a href="./newbs_getting_started">Build Environment Setup</a> and <a href="./getting_started_make_guide">Make Instructions</a> guides.</p><h2 id="can-t-program-on-linux" tabindex="-1">Can&#39;t Program on Linux <a class="header-anchor" href="#can-t-program-on-linux" aria-label="Permalink to &quot;Can&#39;t Program on Linux&quot;">​</a></h2><p>You will need proper permissions to operate a device. For Linux users, see the instructions regarding <code>udev</code> rules, below. If you have issues with <code>udev</code>, a work-around is to use the <code>sudo</code> command. If you are not familiar with this command, check its manual with <code>man sudo</code> or <a href="https://linux.die.net/man/8/sudo" target="_blank" rel="noreferrer">see this webpage</a>.</p><p>An example of using <code>sudo</code>, when your controller is ATMega32u4:</p><pre><code>$ sudo dfu-programmer atmega32u4 erase --force\n$ sudo dfu-programmer atmega32u4 flash your.hex\n$ sudo dfu-programmer atmega32u4 reset\n</code></pre><p>or just:</p><pre><code>$ sudo make &lt;keyboard&gt;:&lt;keymap&gt;:flash\n</code></pre><p>Note that running <code>make</code> with <code>sudo</code> is generally <em><strong>not</strong></em> a good idea, and you should use one of the former methods, if possible.</p><h3 id="linux-udev-rules" tabindex="-1">Linux <code>udev</code> Rules <a class="header-anchor" href="#linux-udev-rules" aria-label="Permalink to &quot;Linux `udev` Rules {#linux-udev-rules}&quot;">​</a></h3><p>On Linux, you&#39;ll need proper privileges to communicate with the bootloader device. You can either use <code>sudo</code> when flashing firmware (not recommended), or place <a href="https://github.com/qmk/qmk_firmware/tree/master/util/udev/50-qmk.rules" target="_blank" rel="noreferrer">this file</a> into <code>/etc/udev/rules.d/</code>.</p><p>Once added, run the following:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo udevadm control --reload-rules</span></span>\n<span class="line"><span>sudo udevadm trigger</span></span></code></pre></div><p><strong>Note:</strong> With older versions of ModemManager (&lt; 1.12), filtering only works when not in strict mode. The following commands can update that setting:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>printf &#39;[Service]\\nExecStart=\\nExecStart=/usr/sbin/ModemManager --filter-policy=default&#39; | sudo tee /etc/systemd/system/ModemManager.service.d/policy.conf</span></span>\n<span class="line"><span>sudo systemctl daemon-reload</span></span>\n<span class="line"><span>sudo systemctl restart ModemManager</span></span></code></pre></div><h3 id="serial-device-is-not-detected-in-bootloader-mode-on-linux" tabindex="-1">Serial device is not detected in bootloader mode on Linux <a class="header-anchor" href="#serial-device-is-not-detected-in-bootloader-mode-on-linux" aria-label="Permalink to &quot;Serial device is not detected in bootloader mode on Linux&quot;">​</a></h3><p>Make sure your kernel has appropriate support for your device. If your device uses USB ACM, such as Pro Micro (Atmega32u4), make sure to include <code>CONFIG_USB_ACM=y</code>. Other devices may require <code>USB_SERIAL</code> and any of its sub options.</p><h2 id="unknown-device-for-dfu-bootloader" tabindex="-1">Unknown Device for DFU Bootloader <a class="header-anchor" href="#unknown-device-for-dfu-bootloader" aria-label="Permalink to &quot;Unknown Device for DFU Bootloader&quot;">​</a></h2><p>Issues encountered when flashing keyboards on Windows are most often due to having the wrong drivers installed for the bootloader, or none at all.</p><p>Re-running the QMK installation script (<code>./util/qmk_install.sh</code> from the <code>qmk_firmware</code> directory in MSYS2 or WSL) or reinstalling the QMK Toolbox may fix the issue. Alternatively, you can download and run the <a href="https://github.com/qmk/qmk_driver_installer" target="_blank" rel="noreferrer"><code>qmk_driver_installer</code></a> package manually.</p><p>If that doesn&#39;t work, then you may need to download and run Zadig. See <a href="./driver_installation_zadig">Bootloader Driver Installation with Zadig</a> for more detailed information.</p><h2 id="usb-vid-and-pid" tabindex="-1">USB VID and PID <a class="header-anchor" href="#usb-vid-and-pid" aria-label="Permalink to &quot;USB VID and PID&quot;">​</a></h2><p>You can use any ID you want with editing <code>config.h</code>. Using any presumably unused ID will be no problem in fact except for very low chance of collision with other product.</p><p>Most boards in QMK use <code>0xFEED</code> as the vendor ID. You should look through other keyboards to make sure you pick a unique Product ID.</p><p>Also see this. <a href="https://github.com/tmk/tmk_keyboard/issues/150" target="_blank" rel="noreferrer">https://github.com/tmk/tmk_keyboard/issues/150</a></p><p>You can buy a really unique VID:PID here. I don&#39;t think you need this for personal use.</p><ul><li><a href="https://www.obdev.at/products/vusb/license.html" target="_blank" rel="noreferrer">https://www.obdev.at/products/vusb/license.html</a></li><li><a href="https://www.mcselec.com/index.php?page=shop.product_details&amp;flypage=shop.flypage&amp;product_id=92&amp;option=com_phpshop&amp;Itemid=1" target="_blank" rel="noreferrer">https://www.mcselec.com/index.php?page=shop.product_details&amp;flypage=shop.flypage&amp;product_id=92&amp;option=com_phpshop&amp;Itemid=1</a></li></ul><h3 id="i-just-flashed-my-keyboard-and-it-does-nothing-keypresses-don-t-register-it-s-also-arm-rev6-planck-clueboard-60-hs60v2-etc-feb-2019" tabindex="-1">I just flashed my keyboard and it does nothing/keypresses don&#39;t register - it&#39;s also ARM (rev6 planck, clueboard 60, hs60v2, etc...) (Feb 2019) <a class="header-anchor" href="#i-just-flashed-my-keyboard-and-it-does-nothing-keypresses-don-t-register-it-s-also-arm-rev6-planck-clueboard-60-hs60v2-etc-feb-2019" aria-label="Permalink to &quot;I just flashed my keyboard and it does nothing/keypresses don&#39;t register - it&#39;s also ARM (rev6 planck, clueboard 60, hs60v2, etc...) (Feb 2019)&quot;">​</a></h3><p>Due to how EEPROM works on ARM based chips, saved settings may no longer be valid. This affects the default layers, and <em>may</em>, under certain circumstances we are still figuring out, make the keyboard unusable. Resetting the EEPROM will correct this.</p><p><a href="https://cdn.discordapp.com/attachments/473506116718952450/539284620861243409/planck_rev6_default.bin" target="_blank" rel="noreferrer">Planck rev6 reset EEPROM</a> can be used to force an eeprom reset. After flashing this image, flash your normal firmware again which should restore your keyboard to <em>normal</em> working order. <a href="https://cdn.discordapp.com/attachments/473506116718952450/537849497313738762/preonic_rev3_default.bin" target="_blank" rel="noreferrer">Preonic rev3 reset EEPROM</a></p><p>If bootmagic is enabled in any form, you should be able to do this too (see <a href="./feature_bootmagic">Bootmagic docs</a> and keyboard info for specifics on how to do this).</p>', 31);
const _hoisted_32 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_32);
}
const faq_build = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  faq_build as default
};
