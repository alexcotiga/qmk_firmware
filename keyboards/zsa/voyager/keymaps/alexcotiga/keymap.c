#include QMK_KEYBOARD_H
#include "version.h"
#define MOON_LED_LEVEL LED_LEVEL
#define ML_SAFE_RANGE SAFE_RANGE

enum custom_keycodes {
  RGB_SLD = ML_SAFE_RANGE,
  HSV_0_255_255,
  HSV_74_255_255,
  HSV_169_255_255,
  ST_MACRO_0,
};



const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
  [0] = LAYOUT_voyager(
    KC_GRAVE,       KC_1,           KC_2,           KC_3,           KC_4,           KC_5,                                           KC_6,           KC_7,           KC_8,           KC_9,           KC_0,           QK_AREP,
    KC_TAB,         KC_Q,           KC_W,           KC_E,           KC_R,           KC_T,                                           KC_Y,           KC_U,           KC_I,           KC_O,           KC_P,           KC_BSPC,
    KC_ESCAPE,      KC_A,           KC_S,           KC_D,           KC_F,           KC_G,                                           KC_H,           KC_J,           KC_K,           KC_L,           KC_SCLN,        KC_QUOTE,
    QK_REP,         KC_Z,           KC_X,           KC_C,           KC_V,           KC_B,                                           KC_N,           KC_M,           KC_COMMA,       KC_DOT,         KC_SLASH,       QK_AREP,
                                                    MO(1),          OSM(MOD_LSFT),                                KC_SPACE,       MO(2)
  ),
  [1] = LAYOUT_voyager(
    RGB_TOG,        TOGGLE_LAYER_COLOR,RGB_MODE_FORWARD,RGB_SLD,        RGB_VAD,        RGB_VAI,                                    KC_TRANSPARENT, LCTL(LSFT(KC_TAB)),LCTL(KC_TAB),   KC_TRANSPARENT, QK_BOOT,        QK_MAGIC_TOGGLE_NKRO,
    KC_TRANSPARENT, KC_TRANSPARENT, KC_AUDIO_VOL_DOWN,KC_AUDIO_VOL_UP,KC_AUDIO_MUTE,  KC_PAGE_UP,                                   KC_HOME,        KC_BSPC,        KC_UP,          KC_ENTER,       KC_END,         KC_TRANSPARENT,
    KC_TRANSPARENT, OSM(MOD_LSFT),  OSM(MOD_LALT),  OSM(MOD_LCTL),  OSM(MOD_LGUI),  KC_PGDN,                                        KC_TAB,         KC_LEFT,        KC_DOWN,        KC_RIGHT,       LSFT(KC_ENTER), KC_TRANSPARENT,
    KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, HSV_0_255_255,  HSV_74_255_255, HSV_169_255_255,                                KC_TRANSPARENT, LALT(KC_BSPC),  KC_TRANSPARENT, ST_MACRO_0,     KC_TRANSPARENT, KC_TRANSPARENT,
                                                    KC_TRANSPARENT, KC_TRANSPARENT,                                 KC_BSPC,      KC_TRANSPARENT
  ),
  [2] = LAYOUT_voyager(
    KC_F1,          KC_F2,          KC_F3,          KC_F4,          KC_F5,          KC_F6,                                          KC_F7,          KC_F8,          KC_F9,          KC_F10,         KC_F11,         KC_F12,
    KC_TRANSPARENT, KC_MINUS,       KC_LCBR,        KC_RCBR,        KC_UNDS,        KC_PIPE,                                        KC_AT,          KC_DLR,         KC_PERC,        KC_CIRC,        KC_AMPR,        KC_TRANSPARENT,
    TO(0),          KC_DQUO,        KC_LPRN,        KC_RPRN,        KC_QUOTE,       KC_GRAVE,                                       KC_TILD,        OSM(MOD_RGUI),  OSM(MOD_RCTL),  OSM(MOD_RALT),  OSM(MOD_RSFT),  KC_TRANSPARENT,
    KC_TRANSPARENT, KC_PLUS,        KC_LBRC,        KC_RBRC,        KC_EQUAL,       KC_BSLS,                                        KC_HASH,        KC_ASTR,        OSM(MOD_MEH),   OSM(MOD_HYPR),  KC_EXLM,        KC_TRANSPARENT,
                                                    KC_TRANSPARENT, KC_ENTER,                                       KC_TRANSPARENT, KC_TRANSPARENT
  ),
  [3] = LAYOUT_voyager(
    KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT,                                 KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT,
    KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT,                                 KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT,
    KC_TRANSPARENT, OSM(MOD_LSFT),  OSM(MOD_LALT),  OSM(MOD_LCTL),  OSM(MOD_LGUI),  KC_TRANSPARENT,                                 KC_TRANSPARENT, KC_MS_BTN1,     KC_MS_UP,       KC_MS_BTN2,     KC_TRANSPARENT, KC_TRANSPARENT,
    KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT,                                 KC_TRANSPARENT, KC_MS_LEFT,     KC_MS_DOWN,     KC_MS_RIGHT,    KC_TRANSPARENT, KC_TRANSPARENT,
                                                    KC_TRANSPARENT, KC_TRANSPARENT,                                 KC_BSPC,        KC_TRANSPARENT
  ),
  [4] = LAYOUT_voyager(
    KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT,                                 KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT,
    KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT,                                 KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT,
    KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT,                                 KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT,
    KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT,                                 KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT, KC_TRANSPARENT,
                                                    KC_TRANSPARENT, QK_LOCK,                                        KC_TRANSPARENT, KC_TRANSPARENT
  ),
};

const uint16_t PROGMEM combo0[] = { KC_9, KC_0, COMBO_END};
const uint16_t PROGMEM combo1[] = { KC_9, KC_8, COMBO_END};
const uint16_t PROGMEM combo2[] = { KC_8, KC_7, COMBO_END};

combo_t key_combos[COMBO_COUNT] = {
    COMBO(combo0, KC_AUDIO_VOL_UP),
    COMBO(combo1, KC_AUDIO_VOL_DOWN),
    COMBO(combo2, KC_AUDIO_MUTE),
};



bool process_record_user(uint16_t keycode, keyrecord_t *record) {
  switch (keycode) {
    case ST_MACRO_0:
    if (record->event.pressed) {
      /*SEND_STRING(SS_TAP(X_DOT) SS_DELAY(5) SS_TAP(X_SPACE) SS_DELAY(5) SS_DOWN(X_RIGHT_SHIFT));*/
      SEND_STRING(". ");
      add_oneshot_mods(MOD_BIT(KC_LSFT));  // Set one-shot mod for shift.
    }
    break;

    case RGB_SLD:
      if (record->event.pressed) {
        rgblight_mode(1);
      }
      return false;
    case HSV_0_255_255:
      if (record->event.pressed) {
        rgblight_mode(1);
        rgblight_sethsv(0,255,255);
      }
      return false;
    case HSV_74_255_255:
      if (record->event.pressed) {
        rgblight_mode(1);
        rgblight_sethsv(74,255,255);
      }
      return false;
    case HSV_169_255_255:
      if (record->event.pressed) {
        rgblight_mode(1);
        rgblight_sethsv(169,255,255);
      }
      return false;
  }
  return true;
}



