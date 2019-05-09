var WEB_SUFFIX = "/live";
var LAppDefine = {

    // WEB_SUFFIX:"/live",
    DEBUG_LOG: false,
    DEBUG_MOUSE_LOG: false,
    // DEBUG_DRAW_HIT_AREA : false,
    // DEBUG_DRAW_ALPHA_MODEL : false,


    VIEW_MAX_SCALE: 2,
    VIEW_MIN_SCALE: 0.8,

    VIEW_LOGICAL_LEFT: -1,
    VIEW_LOGICAL_RIGHT: 1,

    VIEW_LOGICAL_MAX_LEFT: -2,
    VIEW_LOGICAL_MAX_RIGHT: 2,
    VIEW_LOGICAL_MAX_BOTTOM: -2,
    VIEW_LOGICAL_MAX_TOP: 2,


    PRIORITY_NONE: 0,
    PRIORITY_IDLE: 1,
    PRIORITY_NORMAL: 2,
    PRIORITY_FORCE: 3,


    // BACK_IMAGE_NAME : "assets/image/back_class_normal.png",


    MODEL_HARU: Store.root+"/live2d/assets/live2d/haru/haru.model.json",
    MODEL_HARU_A: Store.root+"/live2d/assets/live2d/haru/haru_01.model.json",
    MODEL_HARU_B: Store.root+"/live2d/assets/live2d/haru/haru_02.model.json",
    MODEL_SHIZUKU: Store.root+"/live2d/assets/live2d/shizuku/shizuku.model.json",
    MODEL_WANKO: Store.root+"/live2d/assets/live2d/wanko/wanko.model.json",
    MODEL_EPSILON: Store.root+"/live2d/assets/live2d/Epsilon2.1/Epsilon2.1.model.json",


    MOTION_GROUP_IDLE: "idle",
    MOTION_GROUP_TAP_BODY: "tap_body",
    MOTION_GROUP_FLICK_HEAD: "flick_head",
    MOTION_GROUP_PINCH_IN: "pinch_in",
    MOTION_GROUP_PINCH_OUT: "pinch_out",
    MOTION_GROUP_SHAKE: "shake",


    HIT_AREA_HEAD: "head",
    HIT_AREA_BODY: "body"

};