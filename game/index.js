/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//-----libs-begin-----
loadLib("libs/laya.core.js")
loadLib("libs/laya.html.js")
loadLib("libs/laya.ui.js")
loadLib("libs/laya.d3.js")
loadLib("libs/laya.device.js")
loadLib("libs/AgoraRTC_N-4.3.0.js")
loadLib("libs/clipboard.js")
loadLib("libs/jquery.js")
loadLib("libs/laya.physics3D.js")
//-----libs-end-------
loadLib("js/bundle.js");
