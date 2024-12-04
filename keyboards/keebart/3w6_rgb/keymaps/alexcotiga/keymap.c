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
    _NAV,
    _SYM,
    _NUM,
    _CFG,
    /*_ALPHA_COLEMAK,*/
};

#define OS_LSFT OSM(MOD_LSFT)
#define OS_LCTL OSM(MOD_LCTL)
#define OS_LALT OSM(MOD_LALT)
#define OS_LGUI OSM(MOD_LGUI)

#define OS_RSFT OSM(MOD_RSFT)
#define OS_RCTL OSM(MOD_RCTL)
#define OS_RALT OSM(MOD_RALT)
#define OS_RGUI OSM(MOD_RGUI)

#define NAV_ESC LT(_NAV, KC_ESC)
#define SYM_REP LT(_SYM, KC_TAB)

const uint16_t PROGMEM test_combo1[] = {KC_A, KC_B, COMBO_END};
const uint16_t PROGMEM test_combo2[] = {KC_C, KC_D, COMBO_END};
combo_t key_combos[] = {
    COMBO(test_combo1, QK_REP),
    COMBO(test_combo2, QK_AREP), // keycodes with modifiers are possible too!
};

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {


    [_ALPHA_QWERTY] = LAYOUT_split_3x5_3(
        KC_Q,         KC_W,    KC_E,    KC_R,    KC_T,                                                KC_Y,    KC_U,    KC_I,    KC_O,    KC_P,
        KC_A,         KC_S,    KC_D,    KC_F,    KC_G,                                                KC_H,    KC_J,    KC_K,    KC_L,    KC_QUOTE,
        KC_Z,         KC_X,    KC_C,    KC_V,    KC_B,                                                KC_N,    KC_M,    KC_COMM, KC_DOT,  KC_SCLN,

                        KC_TAB, NAV_ESC, OSM(MOD_LSFT),        KC_SPACE, SYM_REP, LSFT(KC_ENT)
    ),
    /*[_ALPHA_COLEMAK] = LAYOUT_split_3x5_3(*/
    /*    KC_Q,         KC_W,    KC_F,    KC_P,    KC_G,                                                KC_J,    KC_L,    KC_U,    KC_Y,    KC_QUOT,*/
    /*    KC_A,         KC_R,    KC_S,    KC_T,    KC_D,                                                KC_H,    KC_N,    KC_E,    KC_I,    KC_O,*/
    /*    LSFT_T(KC_Z), KC_X,    KC_C,    KC_V,    KC_B,                                                KC_K,    KC_M,    KC_COMM, KC_DOT,  RSFT_T(KC_SCLN),*/
    /*                    LCTL_T(KC_ENT), LT(_NUM,KC_SPC), KC_TRNS,     LT(_SYM, KC_BSPC), KC_ENT, LALT_T(KC_DEL)*/
    /*),*/
    [_NAV] = LAYOUT_split_3x5_3(
        XXXXXXX,        QK_AREP,        KC_MUTE,        QK_REP,         XXXXXXX,                        KC_PGUP,        KC_PGDN,    KC_UP,      KC_PGUP,    KC_BSPC,
        OSM(MOD_LSFT),  OSM(MOD_LCTL),  OSM(MOD_LALT),  OSM(MOD_LGUI),  XXXXXXX,                        KC_TAB,         KC_LEFT,    KC_DOWN,    KC_RGHT,    KC_ENT,
        XXXXXXX,        XXXXXXX,        XXXXXXX,        XXXXXXX,        XXXXXXX,                        LALT(KC_BSPC),  XXXXXXX,    XXXXXXX,    XXXXXXX,    LSFT(KC_ENT),

                                        KC_TRNS, KC_TRNS, KC_TRNS,              KC_TRNS, KC_TRNS, KC_TRNS
    ),
    [_SYM] = LAYOUT_split_3x5_3(
        KC_GRV , KC_CIRC,   KC_AT,  KC_DLR, KC_TILD,                                KC_AMPR, KC_EXLM, KC_PIPE, KC_UNDS, KC_HASH,
        KC_SLSH, KC_LBRC, KC_LCBR, KC_LPRN,  KC_EQL,                                KC_ASTR, OSM(MOD_RGUI), OSM(MOD_RALT), OSM(MOD_RCTL), OSM(MOD_RSFT),
        KC_GRV,  KC_QUES, KC_PLUS, KC_PERC, XXXXXXX,                                XXXXXXX, XXXXXXX, KC_MINS, XXXXXXX, KC_SLSH,
                                        KC_TRNS, KC_TRNS, KC_TRNS,     KC_TRNS, KC_TRNS, KC_TRNS
    ),
    [_NUM] = LAYOUT_split_3x5_3(
        KC_1,  KC_2, KC_3, KC_4, KC_5,                                    KC_6,  KC_7,  KC_8,  KC_9, KC_0,
        OSM(MOD_LSFT), OSM(MOD_LCTL), OSM(MOD_LALT), OSM(MOD_LGUI), KC_F11,         KC_F12,  OSM(MOD_RGUI), OSM(MOD_RALT), OSM(MOD_RCTL), OSM(MOD_RSFT),
        KC_F1,  KC_F2,  KC_F3,  KC_F4,  KC_F5,                                    KC_F6,  KC_F7,  KC_F8,  KC_F9, KC_F10,
                                        KC_TRNS, KC_TRNS, KC_TRNS,     KC_TRNS, KC_TRNS, KC_TRNS
    ),
    [_CFG] = LAYOUT_split_3x5_3(
        XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,                                XXXXXXX, XXXXXXX, XXXXXXX,DF(_ALPHA_QWERTY), XXXXXXX,
        XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,                                XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,
        XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,                                XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,
                                         XXXXXXX, XXXXXXX, XXXXXXX,     XXXXXXX, XXXXXXX, XXXXXXX
    ),
};

/*bool process_record_user(uint16_t keycode, keyrecord_t *record) {*/
    /*bool isShifted;*/
    /*switch (keycode) {*/
        /*case KC_F24:*/
        /*case SYM_REP:*/
            /*if (!record->event.pressed) {*/
                /*isShifted = get_mods() & MOD_MASK_SHIFT;*/
                /*if (!isShifted) {*/
                /*        tap_code(KC_GRV);*/
                        /*process_repeat_key(QK_REPEAT_KEY, record);*/
/*                    return false;*/
/*                }*/
/*#ifndef NO_ALT_REPEAT_KEY*/
/*                else {*/
/*                    if (!record->event.pressed)*/
/*                        tap_code(KC_SLSH);*/
                        /*process_repeat_key(QK_ALT_REPEAT_KEY, record);*/
/*                    return false;*/
/*                }*/
/*            }*/
/*#endif*/
/*            break;*/
/*    }*/
/*    return true;*/
/*}*/
