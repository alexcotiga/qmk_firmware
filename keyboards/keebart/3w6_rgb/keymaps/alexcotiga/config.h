/*
  Set any config.h overrides for your specific keymap here.
  See config.h options at https://docs.qmk.fm/#/config_options?id=the-configh-file
*/

#define FORCE_NKRO
#define PERMISSIVE_HOLD
// #define USB_SUSPEND_WAKEUP_DELAY 0
#define HOLD_ON_OTHER_KEY_PRESS
#define TAPPING_TERM 200
#define ONESHOT_TAP_TOGGLE 3  /* Tapping this number of times holds the key until tapped once again. */
#define ONESHOT_TIMEOUT 5000  /* Time (in ms) before the one shot key is released */
// #define LAYER_STATE_8BIT
// #define COMBO_COUNT 16
// #define RGB_MATRIX_STARTUP_SPD 60
#define DOUBLE_TAP_SHIFT_TURNS_ON_CAPS_WORD

