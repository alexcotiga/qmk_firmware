// Copyright 2023 QMK
// SPDX-License-Identifier: GPL-2.0-or-later

#include QMK_KEYBOARD_H

enum layers
{
    _ALPHA_QWERTY = 0,
    _NAV,
    _SYM,
    _FUN_NUM,
    _NUM,
    _FUN,
    _CFG,
    /*_ALPHA_COLEMAK,*/
};

#define HOME G(KC_LEFT)
#define END G(KC_RGHT)
#define FWD G(KC_RBRC)
#define BACK G(KC_LBRC)
#define TAB_L G(S(KC_LBRC))
#define TAB_R G(S(KC_RBRC))
#define SPACE_L A(G(KC_LEFT))
#define SPACE_R A(G(KC_RGHT))
#define LA_SYM MO(SYM)
#define LA_NAV MO(NAV)

#define OS_LSFT OSM(MOD_LSFT)
#define OS_LCTL OSM(MOD_LCTL)
#define OS_LALT OSM(MOD_LALT)
#define OS_LGUI OSM(MOD_LGUI)

#define OS_RSFT OSM(MOD_RSFT)
#define OS_RCTL OSM(MOD_RCTL)
#define OS_RALT OSM(MOD_RALT)
#define OS_RGUI OSM(MOD_RGUI)

#define NAV_ESC LT(_NAV, KC_ESC)
#define SYM_TAB LT(_SYM, KC_TAB)
#define OS_NUM  OSL(_NUM)
#define OS_FUN  OSL(_FUN)
#define FUN_NUM OSL(_FUN_NUM)

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    [_ALPHA_QWERTY] = LAYOUT_split_3x6_3(
  //,-----------------------------------------------------.                    ,-----------------------------------------------------.
       KC_TAB,    KC_Q,    KC_W,    KC_E,    KC_R,    KC_T,                         KC_Y,    KC_U,    KC_I,    KC_O,   KC_P,  KC_BSPC,
  //|--------+--------+--------+--------+--------+--------|                    |--------+--------+--------+--------+--------+--------|
      OS_LSFT,    KC_A,    KC_S,    KC_D,    KC_F,    KC_G,                         KC_H,    KC_J,    KC_K,    KC_L, KC_QUOT, OS_RSFT,
  //|--------+--------+--------+--------+--------+--------|                    |--------+--------+--------+--------+--------+--------|
      KC_LSFT,    KC_Z,    KC_X,    KC_C,    KC_V,    KC_B,                         KC_N,    KC_M, KC_COMM,  KC_DOT, KC_SCLN, KC_SLSH,
  //|--------+--------+--------+--------+--------+--------+--------|  |--------+--------+--------+--------+--------+--------+--------|
                                           OS_NUM, NAV_ESC,  QK_REP,     KC_SPC, SYM_TAB, MO(_CFG)
                                      //`--------------------------'  `--------------------------'

  ),

    [_NAV] = LAYOUT_split_3x6_3(
  //,-----------------------------------------------------.                    ,-----------------------------------------------------.
       KC_TAB, KC_TAB,  XXXXXXX,   TAB_L,   TAB_R, KC_VOLU,                         KC_6,    KC_7,   KC_UP,    KC_9,    KC_0, XXXXXXX,
  //|--------+--------+--------+--------+--------+--------|                    |--------+--------+--------+--------+--------+--------|
      KC_LCTL, OS_LSFT, OS_LCTL, OS_LALT, OS_LGUI, KC_VOLD,                      KC_TAB , KC_LEFT, KC_DOWN,KC_RIGHT, KC_ENT,  XXXXXXX,
  //|--------+--------+--------+--------+--------+--------|                    |--------+--------+--------+--------+--------+--------|
      KC_LSFT, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,                      XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,
  //|--------+--------+--------+--------+--------+--------+--------|  |--------+--------+--------+--------+--------+--------+--------|
                                          _______, _______,  KC_SPC,     KC_ENT, FUN_NUM, _______
                                      //`--------------------------'  `--------------------------'
  ),

    [_SYM] = LAYOUT_split_3x6_3(
  //,-----------------------------------------------------.                    ,-----------------------------------------------------.
       KC_TAB, KC_ESC,  KC_LBRC, KC_LCBR, KC_LPRN, KC_TILD,                      KC_CIRC, KC_RPRN, KC_RCBR, KC_RBRC,  KC_GRV, XXXXXXX,
  //|--------+--------+--------+--------+--------+--------|                    |--------+--------+--------+--------+--------+--------|
      KC_LCTL, KC_MINS, KC_ASTR, KC_EQL,  KC_UNDS, KC_DLR,                       KC_HASH, OS_RGUI, OS_RALT, OS_RCTL, OS_RSFT, XXXXXXX,
  //|--------+--------+--------+--------+--------+--------|                    |--------+--------+--------+--------+--------+--------|
      KC_LSFT, KC_PLUS, KC_PIPE, KC_AT,   KC_SLSH, KC_PERC,                      XXXXXXX, KC_BSLS, KC_AMPR, KC_QUES, KC_EXLM, XXXXXXX,
  //|--------+--------+--------+--------+--------+--------+--------|  |--------+--------+--------+--------+--------+--------+--------|
                                          _______, FUN_NUM,  QK_AREP,    KC_ENT, _______, _______
                                      //`--------------------------'  `--------------------------'
  ),

    [_FUN_NUM] = LAYOUT_split_3x6_3(
  //,-----------------------------------------------------.                    ,-----------------------------------------------------.
       KC_TAB, KC_1   , KC_2   , KC_3  ,  KC_4   , KC_5  ,                       KC_6   , KC_7   , KC_8   , KC_9   , KC_0   , XXXXXXX,
  //|--------+--------+--------+--------+--------+--------|                    |--------+--------+--------+--------+--------+--------|
      KC_LCTL, OS_LSFT, OS_LCTL, OS_LALT, OS_LGUI, KC_F11,                       KC_F12 , OS_RGUI, OS_RALT, OS_RCTL, OS_RSFT, XXXXXXX,
  //|--------+--------+--------+--------+--------+--------|                    |--------+--------+--------+--------+--------+--------|
      KC_LSFT, KC_F1  , KC_F2  , KC_F3  , KC_F4  , KC_F5 ,                       KC_F6  , KC_F7  , KC_F8  , KC_F9  , KC_F10 , XXXXXXX,
  //|--------+--------+--------+--------+--------+--------+--------|  |--------+--------+--------+--------+--------+--------+--------|
                                          _______,   MO(3),  QK_AREP,    KC_ENT, _______, _______
                                      //`--------------------------'  `--------------------------'
  ),

    [_NUM] = LAYOUT_split_3x6_3(
  //,-----------------------------------------------------.                    ,-----------------------------------------------------.
       KC_TAB, KC_ESC,  KC_LBRC, KC_LCBR, KC_LPRN, KC_TILD,                      KC_CIRC, KC_7   , KC_8   , KC_9   ,  KC_GRV, XXXXXXX,
  //|--------+--------+--------+--------+--------+--------|                    |--------+--------+--------+--------+--------+--------|
      KC_LCTL, KC_MINS, KC_ASTR, KC_EQL,  KC_UNDS, KC_DLR,                       KC_HASH, KC_4   , KC_5   , KC_6   , OS_RSFT, XXXXXXX,
  //|--------+--------+--------+--------+--------+--------|                    |--------+--------+--------+--------+--------+--------|
      KC_LSFT, KC_PLUS, KC_PIPE, KC_AT,   KC_SLSH, KC_PERC,                      XXXXXXX, KC_1   , KC_2   , KC_3   , KC_EXLM, XXXXXXX,
  //|--------+--------+--------+--------+--------+--------+--------|  |--------+--------+--------+--------+--------+--------+--------|
                                          _______,   MO(3),  QK_AREP,    KC_0  , _______, _______
                                      //`--------------------------'  `--------------------------'
  ),

    [_FUN] = LAYOUT_split_3x6_3(
  //,-----------------------------------------------------.                    ,-----------------------------------------------------.
       KC_TAB, KC_ESC,  KC_F7  , KC_F8  , KC_F9  , KC_F12,                      KC_CIRC, KC_RPRN, KC_RCBR, KC_RBRC,  KC_GRV, XXXXXXX,
  //|--------+--------+--------+--------+--------+-------|                    |--------+--------+--------+--------+--------+--------|
      KC_LCTL, KC_MINS, KC_F4  , KC_F5  , KC_F6  , KC_F11,                       KC_HASH, OS_RGUI, OS_RALT, OS_RCTL, OS_RSFT, XXXXXXX,
  //|--------+--------+--------+--------+--------+-------|                    |--------+--------+--------+--------+--------+--------|
      KC_LSFT, KC_PLUS, KC_F1  , KC_F2  , KC_F3  , KC_F10,                      XXXXXXX, KC_BSLS, KC_AMPR, KC_QUES, KC_EXLM, XXXXXXX,
  //|--------+--------+--------+--------+--------+--------+--------|  |--------+--------+--------+--------+--------+--------+--------|
                                          _______,   MO(3),  QK_AREP,    KC_ENT, _______, _______
                                      //`--------------------------'  `--------------------------'
  ),

    [_CFG] = LAYOUT_split_3x6_3(
  //,-----------------------------------------------------.                    ,-----------------------------------------------------.
        QK_BOOT, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,                      XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,
  //|--------+--------+--------+--------+--------+--------|                    |--------+--------+--------+--------+--------+--------|
      XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,                      XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,
  //|--------+--------+--------+--------+--------+--------|                    |--------+--------+--------+--------+--------+--------|
      XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,                      XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,
  //|--------+--------+--------+--------+--------+--------+--------|  |--------+--------+--------+--------+--------+--------+--------|
                                          _______, _______, _______,    _______, _______, _______
                                      //`--------------------------'  `--------------------------'
  )
};
