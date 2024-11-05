/* Copyright 2021 weteor
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

#include QMK_KEYBOARD_H

enum layers
{
    _ALPHA_QWERTY = 0,
    _SYM,
    _NAV,
    _NUM,
    _CFG,
    _ALPHA_COLEMAK,
};

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {


    [_ALPHA_QWERTY] = LAYOUT_split_3x5_3(
        KC_Q,         KC_W,    KC_E,    KC_R,    KC_T,                                                KC_Y,    KC_U,    KC_I,    KC_O,    KC_P,
        KC_A,         KC_S,    KC_D,    KC_F,    KC_G,                                                KC_H,    KC_J,    KC_K,    KC_L,    KC_QUOTE,
        KC_Z,         KC_X,    KC_C,    KC_V,    KC_B,                                                KC_N,    KC_M,    KC_COMM, KC_DOT,  KC_SCLN,

                        KC_ESC, LT(_NAV, KC_ESC), OSM(MOD_LSFT),        KC_SPACE, LT(_SYM, LSFT(KC_ENT)), LSFT(KC_ENT)
    ),
    [_ALPHA_COLEMAK] = LAYOUT_split_3x5_3(
        KC_Q,         KC_W,    KC_F,    KC_P,    KC_G,                                                KC_J,    KC_L,    KC_U,    KC_Y,    KC_QUOT,
        KC_A,         KC_R,    KC_S,    KC_T,    KC_D,                                                KC_H,    KC_N,    KC_E,    KC_I,    KC_O,
        LSFT_T(KC_Z), KC_X,    KC_C,    KC_V,    KC_B,                                                KC_K,    KC_M,    KC_COMM, KC_DOT,  RSFT_T(KC_SCLN),
                        LCTL_T(KC_ENT), LT(_NUM,KC_SPC), KC_TRNS,     LT(_SYM, KC_BSPC), KC_ENT, LALT_T(KC_DEL)
    ),
    [_SYM] = LAYOUT_split_3x5_3(
        KC_GRV , KC_CIRC,   KC_AT,  KC_DLR, KC_TILD,                                KC_AMPR, KC_EXLM, KC_PIPE, KC_UNDS, KC_HASH,
        KC_SLSH, KC_LBRC, KC_LCBR, KC_LPRN,  KC_EQL,                                KC_ASTR, OSM(MOD_RGUI), OSM(MOD_RALT), OSM(MOD_RCTL), OSM(MOD_RSFT),
        KC_GRV,  KC_QUES, KC_PLUS, KC_PERC, XXXXXXX,                                XXXXXXX, XXXXXXX, KC_MINS, XXXXXXX, KC_SLSH,
                                        XXXXXXX, MO(_CFG), KC_TRNS,     KC_TRNS, XXXXXXX, XXXXXXX
    ),
    [_NAV] = LAYOUT_split_3x5_3(
        XXXXXXX, QK_AREP, KC_MUTE, QK_REP, XXXXXXX,                                XXXXXXX, KC_PGDN,   KC_UP, KC_PGUP,   KC_BSPC,
        OSM(MOD_LSFT), OSM(MOD_LCTL), OSM(MOD_LALT), OSM(MOD_LGUI), XXXXXXX,        KC_TAB,  KC_LEFT, KC_DOWN, KC_RGHT,  KC_ENT,
        XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,                                LALT(KC_BSPC), XXXXXXX, XXXXXXX, XXXXXXX,  LSFT(KC_ENT),
                                        XXXXXXX, XXXXXXX, KC_TRNS,      KC_TRNS, MO(_CFG), XXXXXXX
    ),
    [_NUM] = LAYOUT_split_3x5_3(
        XXXXXXX,  KC_F9, KC_F10, KC_F11, KC_F12,                                    KC_PPLS,  KC_P7,  KC_P8,  KC_P9, KC_PSLS,
        XXXXXXX,  KC_F5,  KC_F6,  KC_F7,  KC_F8,                                    KC_P0,  KC_P4,  KC_P5,  KC_P6, KC_PDOT,
        XXXXXXX,  KC_F1,  KC_F2,  KC_F3,  KC_F4,                                    KC_PMNS,  KC_P1,  KC_P2,  KC_P3, KC_PAST,
                                        XXXXXXX, XXXXXXX, XXXXXXX,      KC_TRNS, KC_PENT, KC_PEQL
    ),
    [_CFG] = LAYOUT_split_3x5_3(
        XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,                                XXXXXXX, XXXXXXX, XXXXXXX,DF(_ALPHA_QWERTY), DF(_ALPHA_COLEMAK),
        XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,                                XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,
        XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,                                XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,
                                         XXXXXXX, XXXXXXX, XXXXXXX,     XXXXXXX, XXXXXXX, XXXXXXX
    ),
};
