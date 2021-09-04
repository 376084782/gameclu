(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var EventDispatcher = Laya.EventDispatcher;
    class EventManager extends EventDispatcher {
        static pub(InName, agv) {
            EventManager.eventDispatcher.event(InName, agv);
        }
        static sub(InName, caller, listener, arg) {
            EventManager.eventDispatcher.on(InName, caller, listener, arg == null ? null : [arg]);
        }
        static unSub(caller) {
            EventManager.eventDispatcher.offAllCaller(caller);
        }
    }
    EventManager.eventDispatcher = new EventDispatcher();
    window["EventManager"] = EventManager;

    class LogManager {
        static log(...[]) {
            console.log(arguments);
        }
        static info(...[]) {
            console.info(arguments);
        }
        static warn(...[]) {
            console.warn(arguments);
        }
        static error(...[]) {
            console.error(arguments);
        }
    }
    LogManager.logLev = 0;

    class Agora {
        static instance() {
            if (!this.client) {
                this.init();
            }
            return this.client;
        }
        static checkVolumn() {
            let levMin = 0.2;
            this.listTalking = [];
            this.remoteStreamList.forEach(user => {
                if (user && user.audioTrack) {
                    let lev = user.audioTrack.getVolumeLevel();
                    if (lev > levMin) {
                        this.listTalking.push(user.uid);
                    }
                }
            });
            if (this.localStream) {
                if (this.localStream.getVolumeLevel() > levMin) {
                    this.listTalking.push(GameManager.userInfo.userId);
                }
            }
        }
        static init() {
            return new Promise((rsv, rej) => {
                this.client = AgoraRTC.createClient({
                    mode: "live",
                    codec: "vp8"
                });
                AgoraRTC.createMicrophoneAudioTrack({
                    encoderConfig: "high_quality_stereo"
                }).then(e => {
                    console.log("设置高音质");
                });
                this.client.on("user-published", (user, mediaType) => __awaiter(this, void 0, void 0, function* () {
                    yield this.client.subscribe(user, mediaType);
                    console.log("subscribe success");
                    if (mediaType === "audio") {
                        const remoteAudioTrack = user.audioTrack;
                        this.remoteStreamList.push(user);
                        remoteAudioTrack.play();
                    }
                }));
            });
        }
        static toggleSound(flag) {
            if (flag == undefined) {
                this.flagSound = !this.flagSound;
            }
            else {
                this.flagSound = flag;
            }
            console.log("切换音量", this.flagSound);
            this.remoteStreamList.forEach(remoteStream => {
                remoteStream.audioTrack.setVolume(this.flagSound ? 100 : 0);
            });
        }
        static toggleMicro(flag) {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.openAccessSpeek();
                this.flagMicro = flag;
                if (this.client && this.localStream) {
                    this.localStream.setVolume(this.flagMicro ? 100 : 0);
                    console.log("updateMicroMute", this.flagMicro);
                }
            });
        }
        static initLocalStream() {
            return new Promise((rsv) => __awaiter(this, void 0, void 0, function* () {
                if (!this.localStream) {
                    this.localStream = yield AgoraRTC.createMicrophoneAudioTrack();
                }
                yield this.instance().setClientRole("host");
                yield this.client.publish([this.localStream]);
                this.toggleMicro(GameManager.talkingUserId == GameManager.userInfo.userId);
                console.log("publish success!");
            }));
        }
        static openAccessSpeek() {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((rsv, rej) => {
                    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                        navigator.mediaDevices
                            .getUserMedia({ audio: true })
                            .then(e => {
                            console.log(e, "success");
                            rsv(null);
                        })
                            .catch(e => {
                            console.log("fail", e);
                            rej(null);
                        });
                    }
                });
            });
        }
        static joinRoom() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.flagInRoom) {
                    console.warn("已经在房间里了");
                    return;
                }
                return new Promise((rsv, rej) => __awaiter(this, void 0, void 0, function* () {
                    let roomid = "" + GameManager.roomInfo.roomId;
                    let userId = GameManager.userInfo.userId;
                    if (!this.instance()) {
                        yield this.init();
                    }
                    let token = yield NetController.getAgoraToken(roomid);
                    console.log(this.appID, roomid, token, "join");
                    this.instance()
                        .join(this.appID, roomid, token, GameManager.userInfo.userId)
                        .then(e => {
                        console.log("加入房间成功,自动打开声音播放", e);
                        this.uid = e;
                        this.initLocalStream().then(e => {
                            this.flagInRoom = true;
                            rsv(null);
                        });
                    });
                }));
            });
        }
        static testAudio(uid) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((rsv, rej) => __awaiter(this, void 0, void 0, function* () {
                    let devices = yield AgoraRTC.getDevices();
                    let mics = yield AgoraRTC.getMicrophones();
                    const audioTrack = yield AgoraRTC.createMicrophoneAudioTrack({});
                    AgoraRTC.checkAudioTrackIsActive(audioTrack)
                        .then(result => {
                        console.log(`microphoneLabel is ${result ? "available" : "unavailable"}`);
                        rsv(!!result);
                    })
                        .catch(e => {
                        console.log("check audio track error!", e);
                    });
                }));
            });
        }
        static quitRoom() {
            return new Promise((rsv, rej) => {
                this.instance().leave(uid => {
                    console.log("client leaves channel");
                    this.flagInRoom = false;
                    rsv(null);
                }, function (err) {
                    console.log("client leave failed ", err);
                    rej(null);
                });
                rsv(null);
            });
        }
    }
    Agora.token = "";
    Agora.client = null;
    Agora.uid = null;
    Agora.localStream = null;
    Agora.flagSound = true;
    Agora.appID = "fca3b39544ba4571aa16bdaff4a6e0a5";
    Agora.listTalking = [];
    Agora.remoteStreamList = [];
    Agora.flagInRoom = false;
    window["Agora"] = Agora;

    class WSManager {
        static sendHeartBeat() {
            let data = {
                type: "ping"
            };
            this.ws.send(JSON.stringify(data));
        }
        static connect(url) {
            this.lastUrl = url;
            let ws = new WebSocket(url);
            this.ws = ws;
            Laya.timer.clearAll(this);
            ws.onopen = () => __awaiter(this, void 0, void 0, function* () {
                Laya.timer.loop(1000, this, this.sendHeartBeat);
                if (!this.isFirstConnect) {
                    GameManager.doReconnect();
                    this.isFirstConnect = false;
                }
            });
            ws.onmessage = (e) => __awaiter(this, void 0, void 0, function* () {
                let result = JSON.parse(e.data);
                let type = result.type;
                let data = result.data;
                if (data != "pong") {
                    console.log("收到ws消息", type, data);
                }
                switch (type) {
                    case "KICK_OUT_ROOM": {
                        if (data.userId == GameManager.userInfo.userId) {
                            UIManager.showConfirm({
                                content: DataLang.getTxtByType("kicked"),
                                onSure() {
                                    UIManager.goHall();
                                },
                                onCancel() {
                                    UIManager.goHall();
                                }
                            });
                        }
                        else {
                            UIManager.showMessage(DataLang.getTxtByType("someonekicked", {
                                username: data.username
                            }));
                        }
                        break;
                    }
                    case "ROOM_AWARD": {
                        UIManager.showMessage(data.context);
                        break;
                    }
                    case "CHANGE_ROOM_ONWER": {
                        GameManager.roomInfo.masterUserId = data;
                        EventManager.pub("room/updateRoomInfo");
                        break;
                    }
                    case "CHAT": {
                        GameManager.chatList.push(JSON.parse(data.content));
                        EventManager.pub("game/updateChat");
                        EventManager.pub("game/showChatNotSee");
                        break;
                    }
                    case "SCENE_MAP": {
                        GameManager.sceneMap = data;
                        EventManager.pub("game/updateInScene");
                        break;
                    }
                    case "EXIT_ROOM": {
                        let targetData = GameManager.roomUserList.find(item => item.userId == data);
                        if (targetData) {
                            let idx = GameManager.roomUserList.indexOf(targetData);
                            GameManager.roomUserList.splice(idx, 1);
                        }
                        EventManager.pub("room/updateRoomInfo");
                        if (data == GameManager.userInfo.userId) {
                            UIManager.goHall();
                        }
                        break;
                    }
                    case "ENTER_ROOM": {
                        GameManager.roomUserList = data.game.userList;
                        GameManager.roomUserList1 = data.game.userList;
                        GameManager.roomReadyList = data.game.nextReadyUserIdList || [];
                        NetController.updateRoomInfo(data);
                        yield UIManager.goScene("scene/SceneBeforeStart.scene");
                        break;
                    }
                    case "IN_ADVANCE_START_GAME": {
                        UIManager.openModal("modal/AdStartGame.scene");
                        break;
                    }
                    case "END_IN_ADVANCE_START_GAME": {
                        UIManager.closeModal("modal/AdStartGame.scene");
                        break;
                    }
                    case "REQUEST_ENTER_PRE_TALKING": {
                        GameManager.step = "PRE_TALKING";
                        UIManager.goScene("scene/SceneTalking.scene").then(e => {
                            UIManager.showHint([
                                "hintPreTalking",
                                "hintMine",
                                "hintRule",
                                "hintSetting"
                            ]);
                        });
                        GameManager.timeTitle = DataLang.getTxtByType("selfIntro");
                        Agora.joinRoom();
                        break;
                    }
                    case "REQUEST_ENTER_CONCLUSION": {
                        GameManager.step = "CONCLUSION";
                        GameManager.timeTitle = DataLang.getTxtByType("CONCLUSION");
                        EventManager.pub("game/updateTimeLeft");
                        Agora.joinRoom();
                        UIManager.showHint(["hintConclusion"]);
                        break;
                    }
                    case "UPDATE_ROOM_INFO": {
                        if (data) {
                            GameManager.roomUserList = data.game.userList;
                            GameManager.roomReadyList = data.game.nextReadyUserIdList || [];
                            NetController.updateRoomInfo(data);
                        }
                        break;
                    }
                    case "END_ROLE_SELECT": {
                        GameManager.roomReadyList = data || [];
                        EventManager.pub("game/updateReadyBtn");
                        break;
                    }
                    case "GLOBAL_INFO": {
                        GameManager.globalUserNum = data.globalUserNum;
                        EventManager.pub("hall/updateUserNumAll");
                        break;
                    }
                    case "DISMISS_ROOM": {
                        UIManager.goHall();
                        break;
                    }
                    case "READY": {
                        GameManager.roomReadyList = data || [];
                        EventManager.pub("room/updateRoomInfo");
                        break;
                    }
                    case "UNREADY": {
                        GameManager.roomReadyList = data || [];
                        EventManager.pub("room/updateRoomInfo");
                        break;
                    }
                    case "START_GAME": {
                        GameManager.roomReadyList = [];
                        GameManager.selectRoleMapRoleToUser = data;
                        yield UIManager.goScene("scene/SceneRole.scene");
                        break;
                    }
                    case "REQUEST_LOADING": {
                        GameManager.step = "GAME_LOADING";
                        GameManager.roomReadyList = [];
                        UIManager.goScene("scene/SceneVideo.scene");
                        break;
                    }
                    case "SELECT_ROLE": {
                        GameManager.selectRoleMapRoleToUser = data;
                        EventManager.pub("game/updateRoleSelct");
                        break;
                    }
                    case "LOAD_SUCCESS": {
                        GameManager.roomReadyList = data || [];
                        EventManager.pub("game/updateReadyBtn");
                        break;
                    }
                    case "REQUEST_ENTER_FREE_TALKING": {
                        if (GameManager.gameRound == 1) {
                            UIManager.showHint(["hintTalking"]);
                        }
                        else {
                            UIManager.showHint(["hintFreeTalking"]);
                        }
                        GameManager.talkingUserId = 0;
                        GameManager.timeTitle = DataLang.getTxtByType("freeTalking");
                        GameManager.step = "FREE_TALKING";
                        EventManager.pub("talking/changeFree");
                        EventManager.pub("game/updateCluList");
                        EventManager.pub("game/updateStepRender");
                        break;
                    }
                    case "SECOND_REQUEST_ENTER_SCENE": {
                        GameManager.gameRound = 2;
                        GameManager.step = "CLUE_FIND";
                        GameManager.timeTitle = DataLang.getTxtByType("Searching");
                        GameManager.goSceneGame().then(e => {
                            UIManager.showHint(["hintFind2"]);
                        });
                        GameManager.resetInStep();
                        Agora.quitRoom();
                        EventManager.pub("game/updateStepRender");
                        break;
                    }
                    case "FIRST_REQUEST_ENTER_SCENE": {
                        GameManager.gameRound = 1;
                        GameManager.step = "CLUE_FIND";
                        GameManager.timeTitle = DataLang.getTxtByType("Searching");
                        GameManager.goSceneGame().then(e => {
                            UIManager.showHint([
                                "hintCluEnd",
                                "hintSelectRoom",
                                "hintNPC",
                                "hintBookBack",
                                "hintTimeline",
                                "hintDetail",
                                "hintStep"
                            ]);
                        });
                        GameManager.resetInStep();
                        Agora.quitRoom();
                        EventManager.pub("game/updateStepRender");
                        break;
                    }
                    case "TALKING": {
                        GameManager.talkingUserId = data.talkingUserId;
                        EventManager.pub("talking/changeCurrent", data);
                        if (data.talkingUserId == GameManager.userInfo.userId) {
                            if (GameManager.step == "PRE_TALKING") {
                                UIManager.showHint(["hintSelfTalkingEnd"]);
                            }
                            else if (GameManager.step == "FREE_TALKING") {
                                UIManager.showHint(["hintTalkingEnd"]);
                            }
                        }
                        break;
                    }
                    case "REQUEST_ENTER_VOTE": {
                        GameManager.step = "VOTE";
                        Agora.quitRoom();
                        GameManager.timeTitle = DataLang.getTxtByType("VOTING");
                        "请在2分钟内谨慎思考后投出你心目中的凶手。点击角色头像，并确认，一旦点击确认，投票将不可更改，得票最高的玩家将会是作为嫌疑犯被逮捕";
                        UIManager.showHint(["hintVote"]);
                        EventManager.pub("game/updateStepRender");
                        break;
                    }
                    case "SIGNAL_VALID": {
                        let idx = GameManager.audioChecked.findIndex(e => e.userId == data.userId);
                        if (idx > -1) {
                            GameManager.audioChecked[idx] = data;
                        }
                        else {
                            GameManager.audioChecked.push(data);
                        }
                        EventManager.pub("room/updateRoomInfo");
                        break;
                    }
                    case "GAME_END": {
                        UIManager.goHall();
                        break;
                    }
                    case "REQUEST_ENTER_ANALYSE": {
                        GameManager.step = "ANALYSE";
                        GameManager.timeTitle = "复盘";
                        UIManager.openModal("modal/ModalResult.scene");
                        break;
                    }
                    case "END_SCENE": {
                        GameManager.roomReadyList = data || [];
                        EventManager.pub("game/updateReadyBtn");
                        break;
                    }
                    case "END_FREE_TALKING": {
                        GameManager.roomReadyList = data || [];
                        EventManager.pub("game/updateReadyBtn");
                        break;
                    }
                    case "SHARE_CLUE": {
                        WSManager.updateCluList(data);
                        break;
                    }
                    case "CANCEL_CLUE": {
                        WSManager.updateCluList(data);
                        break;
                    }
                    case "END_CLUE": {
                        break;
                    }
                    case "VOTE": {
                        GameManager.voteMap[data.requestUserId] = data.votedRoleId;
                        EventManager.pub("game/updateVoted");
                        break;
                    }
                    case "END_SHARE_CLUE": {
                        WSManager.updateCluList(data);
                        break;
                    }
                    case "FIRST_REQUEST_ENTER_TALKING": {
                        GameManager.gameRound = 1;
                        GameManager.step = "TALKING";
                        Agora.joinRoom();
                        GameManager.resetInStep();
                        GameManager.timeTitle = DataLang.getTxtByType("talking");
                        UIManager.closeModal("modal/ModalShareClu.scene");
                        EventManager.pub("game/ChangeToTalking");
                        EventManager.pub("game/updateCluList");
                        EventManager.pub("game/updateStepRender");
                        UIManager.showHint(["hintDetailInTalking", "hintTalkingNext"]);
                        break;
                    }
                    case "SECOND_REQUEST_ENTER_TALKING": {
                        GameManager.gameRound = 2;
                        GameManager.step = "TALKING";
                        Agora.joinRoom();
                        GameManager.resetInStep();
                        GameManager.timeTitle = DataLang.getTxtByType("talking");
                        UIManager.closeModal("modal/ModalShareClu.scene");
                        EventManager.pub("game/ChangeToTalking");
                        EventManager.pub("game/updateCluList");
                        EventManager.pub("game/updateStepRender");
                        break;
                    }
                    case "REQUEST_EXCHANGE_ROLE": {
                        UIManager.openModal("modal/ModalAskChangeRole.scene", false, data);
                        break;
                    }
                    case "AGREE_EXCHANGE_ROLE": {
                        GameManager.selectRoleMapRoleToUser = data;
                        EventManager.pub("game/updateRoleSelct");
                        break;
                    }
                    case "TIMER": {
                        GameManager.startTime = +data.startTimestamp;
                        GameManager.endTime = +data.endTimestamp;
                        break;
                    }
                }
            });
            ws.onclose = e => {
                WSManager.connect(WSManager.lastUrl);
                console.log("close");
            };
            ws.onerror = e => {
                console.log(e);
            };
        }
        static updateCluList(data) {
            let listRes = GameManager.evidentListGot.filter(item => item.fromUserId == GameManager.userInfo.userId);
            let cluServerDataList = [];
            for (let userId in data) {
                let cluList = data[userId];
                for (let cluId in cluList) {
                    let cluData = JSON.parse(cluList[cluId]);
                    cluData.fromUserId = userId;
                    cluData.serverId = cluId;
                    if (+userId != GameManager.userInfo.userId) {
                        cluData.order = 0;
                    }
                    cluServerDataList.push(cluData);
                }
            }
            listRes.forEach(item1 => {
                let serverData = cluServerDataList.find(item => item.fromUserId == GameManager.userInfo.userId && item.id == item1.id);
                if (!serverData) {
                    item1.serverId = null;
                }
            });
            cluServerDataList.forEach(itemData => {
                if (itemData.fromUserId == GameManager.userInfo.userId) {
                    let targetData = listRes.find(item => item.id == itemData.id);
                    if (!targetData) {
                        listRes.push(itemData);
                    }
                    else {
                        let targetIdx = listRes.indexOf(targetData);
                        listRes[targetIdx] = itemData;
                    }
                }
                else {
                    itemData.flagRead = false;
                    listRes.push(itemData);
                }
            });
            GameManager.evidentListGot = listRes;
            EventManager.pub("game/updateCluList");
        }
        static createRoom() { }
    }
    WSManager.isFirstConnect = true;

    class LoadingManager {
        static get sceneList() {
            return Scene3dConfig.sceneList.map(item => item.url);
        }
        static get list() {
            return this._list;
        }
        static loadFontList(arr) {
            arr.forEach(name => {
                this.loadFont(name);
            });
        }
        static loadSingle(url) {
            return new Promise(rsv => {
                Laya.loader.load(url, Laya.Handler.create(null, scene => {
                    rsv(scene);
                }));
            });
        }
        static loadingSceneSingle(url) {
            return new Promise(rsv => {
                Laya.Scene3D.load(url, Laya.Handler.create(null, scene => {
                    if (!this.wrap3d) {
                        this.wrap3d = new Laya.Scene3D();
                    }
                    this.wrap3d.addChild(scene);
                    rsv(null);
                }));
            });
        }
        static loadFont(name) {
            var bitmapFont = new Laya.BitmapFont();
            bitmapFont.loadFont("font/" + name + ".fnt", new Laya.Handler(this, e => {
                this.onFontLoaded(e, name);
            }, [bitmapFont]));
        }
        static onFontLoaded(bitmapFont, name) {
            bitmapFont.setSpaceWidth(20);
            Laya.Text.registerBitmapFont(name, bitmapFont);
        }
        static loadScene3d() {
            return __awaiter(this, void 0, void 0, function* () {
                return;
                return this.loadByMap("./map3d.json", e => {
                    this.progress3d = e;
                });
            });
        }
        static startLoad() {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((rsv, rej) => {
                    if (this.list.length > 0) {
                        return this.loadByMap("./mainfest.json", e => {
                            this.progress = e;
                        });
                    }
                    else {
                        rsv(null);
                    }
                });
            });
        }
        static loadByMap(mapUrl, onProgress) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((rsv, rej) => __awaiter(this, void 0, void 0, function* () {
                    let list = (yield this.loadSingle(mapUrl));
                    Laya.loader.load(list, Laya.Handler.create(this, () => {
                        rsv(null);
                    }), Laya.Handler.create(null, onProgress, null, false));
                }));
            });
        }
    }
    LoadingManager._list = ["scene/SceneGame.json", "v2/font/FZZYJW.ttf"];
    LoadingManager.progress = 0;
    LoadingManager.progress3d = 1;

    const colorList = [
        "#feb853",
        "#2ee9ff"
    ];
    class GameManager {
        static checkMurderOut() {
            let flag = 0;
            let map1 = {};
            for (let uid in this.voteMap) {
                let roleId = GameManager.getSelectedRoleIdByUserId(uid);
                let votedRoleId = this.voteMap[uid];
                let power = roleId == this.ditectiveRoleId ? 1.5 : 1;
                if (!map1[votedRoleId]) {
                    map1[votedRoleId] = power;
                }
                else {
                    map1[votedRoleId] += power;
                }
            }
            let maxPowerRoleList = [];
            let roleList = [];
            for (let key in map1) {
                roleList.push(+key);
            }
            roleList.sort((roleId1, roleId2) => {
                return map1[roleId2] - map1[roleId1];
            });
            if (roleList.length == 0) {
            }
            else {
                let maxPower = map1[roleList[0]];
                maxPowerRoleList = roleList.filter(roleId => map1[roleId] == maxPower);
            }
            console.log(roleList, maxPowerRoleList, map1, "=======");
            if (maxPowerRoleList.length == 0) {
                flag = 1;
            }
            else if (maxPowerRoleList.length == 1) {
                flag = maxPowerRoleList.indexOf(1) > -1 ? 2 : 3;
            }
            else {
                flag = maxPowerRoleList.indexOf(1) > -1 ? 1 : 3;
            }
            return { maxPowerRoleList, flag };
        }
        static toggleChatBox() {
            this.chatBoxOpened = !this.chatBoxOpened;
        }
        static get isTest() {
            return +Utils.getQueryVariable("test") == 1;
        }
        static getMurderUserId() {
            return GameManager.selectRoleMapRoleToUser[GameManager.murderRoleId];
        }
        static checkIsMurder(userId) {
            let roleId = GameManager.getSelectedRoleIdByUserId(userId);
            return roleId == GameManager.murderRoleId;
        }
        static getColorBySeat(id) {
            return colorList[id];
        }
        static getChatListCommon() {
            return this.chatList.filter(item => item.toUserId == 0);
        }
        static getChatListWith(userId) {
            let selfUserId = GameManager.userInfo.userId;
            return this.chatList.filter(item => (item.toUserId == userId && item.fromUserId == selfUserId) ||
                (item.fromUserId == userId && item.toUserId == selfUserId));
        }
        static set step(step) {
            this._step = step;
            EventManager.pub("step/changeStep");
        }
        static get step() {
            return this._step;
        }
        static getVotedListByTargetRoleId(roleId) {
            let list = [];
            for (let userId in this.voteMap) {
                if (roleId == this.voteMap[userId]) {
                    list.push(userId);
                }
            }
            return list;
        }
        static resetInStep() {
            this.roomReadyList = [];
            EventManager.pub("game/updateReadyBtn");
        }
        static resetRoomData() {
            this.hintedList = [];
            this.hintedMap = {};
            this.chatList = [];
            this.gameRound = 1;
            this.listAnswered = [];
            this.talkingUserId = null;
            this.step = "";
            this.flagCanMove = true;
            this.voteMap = [];
            this.roomUserList = [];
            this.audioChecked = [];
            this.roomReadyList = [];
            this.evidentListGot = [];
            this.listNote = [];
            this.selectRoleMapRoleToUser = {};
            this.roomInfo = {
                roomPwd: "",
                masterUserId: 0,
                readyUserNum: 0,
                roomId: 0,
                userLimit: 6,
                roomName: "",
                roomNum: 0,
                publicFlag: 1,
                gsId: 1
            };
            this.currentScene = "";
            this.selectedDetailItem = null;
        }
        static updateChatList() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield NetController.getChatList();
                let list = data.list || [];
                let chatList = [];
                list.forEach(conf => {
                    let itemConf = JSON.parse(conf.content);
                    chatList.push({
                        text: itemConf.text,
                        toUserId: itemConf.toUserId,
                        fromUserId: itemConf.fromUserId,
                        fromUserName: itemConf.fromUserName
                    });
                });
                this.chatList = chatList.reverse();
                EventManager.pub("game/updateChat");
            });
        }
        static saveHintedRoomId() {
            let roomId = Laya.LocalStorage.getItem("roomId");
            if (!roomId && GameManager.roomInfo && GameManager.roomInfo.id) {
                Laya.LocalStorage.setItem("roomId", GameManager.roomInfo.id);
            }
        }
        static doReconnect() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield NetController.getInRoomData();
                if (!data) {
                    UIManager.goHall();
                    return;
                }
                DataLang.lang = Utils.getQueryVariable("lang") || "zh-CN";
                let dataGame = data.game;
                let dataRoom = data.room;
                GameManager.roomUserList = dataGame.userList;
                GameManager.roomUserList1 = data.game.userList;
                GameManager.roomReadyList = dataGame.nextReadyUserIdList || [];
                GameManager.selectRoleMapRoleToUser = dataGame.roleUserMap;
                GameManager.voteMap = dataGame.voteMap;
                WSManager.updateCluList(dataGame.clueMap);
                NetController.updateRoomInfo(data);
                GameManager.sceneMap = dataGame.sceneMap;
                GameManager.updateChatList();
                this.setLocalData();
                if (dataGame) {
                    if (LoadingManager.progress3d < 1 &&
                        dataGame.roomStatus != "GAME_READY" &&
                        dataGame.roomStatus != "IN_ADVANCE") {
                        Laya.Scene.open("scene/SceneLoading.scene", false, {
                            showPrg3d: true
                        });
                        return;
                    }
                    if (dataGame.endTimestamp) {
                        GameManager.endTime = +dataGame.endTimestamp;
                    }
                    this.step = dataGame.roomStatus;
                    GameManager.talkingUserId = dataGame.talkingUserId;
                    let signalMap = dataGame.signalMap || {};
                    let listAudioCheck = [];
                    for (let uid in signalMap) {
                        if (signalMap[uid] != null) {
                            listAudioCheck.push({
                                userId: uid,
                                valid: signalMap[uid]
                            });
                        }
                    }
                    GameManager.audioChecked = listAudioCheck;
                    GameManager.gameRound = dataGame.cycle || 1;
                    switch (dataGame.roomStatus) {
                        case "GAME_READY": {
                            UIManager.goScene("scene/SceneBeforeStart.scene").then(e => {
                                UIManager.checkFirstHint();
                            });
                            break;
                        }
                        case "IN_ADVANCE": {
                            yield UIManager.goScene("scene/SceneBeforeStart.scene");
                            UIManager.openModal("modal/AdStartGame.scene");
                            break;
                        }
                        case "ROLE_SELECT": {
                            UIManager.goScene("scene/SceneRole.scene");
                            break;
                        }
                        case "GAME_LOADING": {
                            UIManager.goScene("scene/SceneVideo.scene");
                            break;
                        }
                        case "PRE_TALKING": {
                            Agora.joinRoom();
                            GameManager.timeTitle = DataLang.getTxtByType('selfIntro');
                            yield UIManager.goScene("scene/SceneTalking.scene");
                            EventManager.pub("talking/changeCurrent", {
                                talkingUserId: dataGame.talkingUserId
                            });
                            break;
                        }
                        case "CLUE_FIND": {
                            GameManager.timeTitle = DataLang.getTxtByType("Searching");
                            GameManager.goSceneGame();
                            EventManager.pub("game/updateCluList");
                            break;
                        }
                        case "CLUE_SHARE": {
                            yield GameManager.goSceneGame();
                            UIManager.openModal("modal/ModalShareClu.scene");
                            break;
                        }
                        case "TALKING": {
                            Agora.joinRoom();
                            GameManager.timeTitle = DataLang.getTxtByType("talking");
                            yield GameManager.goSceneGame();
                            EventManager.pub("talking/changeCurrent", {
                                talkingUserId: dataGame.talkingUserId
                            });
                            break;
                        }
                        case "FREE_TALKING": {
                            Agora.joinRoom();
                            GameManager.timeTitle = DataLang.getTxtByType("freeTalking");
                            yield GameManager.goSceneGame();
                            EventManager.pub("talking/changeCurrent", {
                                talkingUserId: dataGame.talkingUserId
                            });
                            break;
                        }
                        case "VOTE": {
                            yield GameManager.goSceneGame();
                            EventManager.pub("game/updateStepRender");
                            break;
                        }
                        case "ANALYSE": {
                            yield GameManager.goSceneGame();
                            GameManager.step = "ANALYSE";
                            GameManager.timeTitle = "复盘";
                            UIManager.openModal("modal/ModalResult.scene");
                            break;
                        }
                    }
                }
                else {
                }
            });
        }
        static sortTimeLine() {
            let ffSort = (a, b) => {
                return a.hour * 60 + a.min - (b.hour * 60 + b.min);
            };
            this.dataTimeline = this.dataTimeline.sort(ffSort);
        }
        static addTimelineData(data) {
            if (!data.hour) {
                UIManager.showMessage("请输入正确的小时");
                return;
            }
            if (!data.min) {
                UIManager.showMessage("请输入正确的分钟");
                return;
            }
            if (!data.thing) {
                UIManager.showMessage("请输入做了什么");
                return;
            }
            if (!data.username) {
                UIManager.showMessage("请输入玩家名称");
                return;
            }
            let idxTimeLine = data.timeIdx;
            if (!idxTimeLine) {
                idxTimeLine =
                    this.dataTimeline.length > 0
                        ? Math.max(...this.dataTimeline.map(item => item.timeIdx))
                        : 0;
                idxTimeLine++;
            }
            data.timeIdx = idxTimeLine;
            let dataOld = GameManager.dataTimeline.find(item => item.timeIdx == data.timeIdx);
            if (dataOld) {
                Object.assign(dataOld, data);
            }
            else {
                GameManager.dataTimeline.push(data);
            }
            GameManager.sortTimeLine();
            EventManager.pub("timeline/updata");
            return true;
        }
        static removeTimeData(data) {
            let target = GameManager.dataTimeline.find(item => item.timeIdx == data.timeIdx);
            if (!target) {
                return;
            }
            let idx = GameManager.dataTimeline.indexOf(target);
            if (idx > -1) {
                GameManager.dataTimeline.splice(idx, 1);
            }
            GameManager.sortTimeLine();
            EventManager.pub("timeline/updata");
        }
        static toggleRead(id, flag = true) {
            return __awaiter(this, void 0, void 0, function* () {
                let list = this.evidentListGot.filter(ii => ii.id == id);
                list.forEach(ii => {
                    ii.flagRead = flag;
                });
                console.log(id, list, this.evidentListGot, flag);
            });
        }
        static toggleShare(selDetailData) {
            return __awaiter(this, void 0, void 0, function* () {
                if (selDetailData.fromUserId == GameManager.userInfo.userId) {
                    if (selDetailData.serverId) {
                        NetController.reqCancelShareDetail(selDetailData.serverId);
                    }
                    else {
                        selDetailData.shareTime = new Date().getTime();
                        yield NetController.reqShareDetail(JSON.stringify(selDetailData));
                    }
                }
            });
        }
        static setLocalData() {
            let gameDataStr = localStorage.getItem("gameData");
            if (!gameDataStr) {
                return;
            }
            let gameData = JSON.parse(gameDataStr);
            if (gameData.roomInfo.roomId == this.roomInfo.roomId &&
                gameData.userInfo.userId == this.userInfo.userId) {
                this.evidentListGot = gameData.evidentListGot;
                this.listNote = gameData.listNote;
                this.dataTimeline = gameData.dataTimeline;
                this.listAnswered = gameData.listAnswered;
            }
        }
        static saveLocalData() {
            let gameData = {
                roomInfo: this.roomInfo,
                userInfo: this.userInfo,
                evidentListGot: this.evidentListGot,
                listNote: this.listNote,
                dataTimeline: this.dataTimeline,
                listAnswered: GameManager.listAnswered
            };
            localStorage.setItem("gameData", JSON.stringify(gameData));
        }
        static getSelfRoomUserData() {
            return (this.roomUserList.find(item => item.id == this.userInfo.userId) || {});
        }
        static addOthersEvident(obj) {
            let targetData = this.evidentListGot.find(item => item.serverId == obj.serverId);
            if (!targetData) {
                this.evidentListGot.push(obj);
            }
            else {
                Object.assign(targetData, obj);
            }
            EventManager.pub("evident/update");
        }
        static addEvident(obj, updateList = true) {
            if (!obj.fromUserId) {
                obj.fromUserId = GameManager.userInfo.userId;
            }
            if (!obj.shareTime && !obj.createTime) {
                obj.createTime = new Date().getTime();
            }
            let targetData = this.evidentListGot.find(item => item.id == obj.id);
            if (!targetData) {
                this.evidentListGot.push(obj);
            }
            else {
                Object.assign(targetData, obj);
            }
            console.log(this.evidentListGot, "添加完了之后的证据列表");
            if (updateList) {
                EventManager.pub("game/updateCluList");
                EventManager.pub("evident/update");
            }
        }
        static removeEvident(id) {
            let targetData = this.evidentListGot.find(item => item.id == id);
            if (targetData) {
                let targetIdx = this.evidentListGot.indexOf(targetData);
                this.evidentListGot.splice(targetIdx, 1);
                EventManager.pub("evident/update");
                EventManager.pub("game/updateCluList");
            }
        }
        static getEviLastOrder() {
            let max = this.evidentListGot.length + 1;
            this.evidentListGot.forEach(element => {
                if (element.order >= max) {
                    max = element.order + 1;
                }
            });
            return max;
        }
        static getEvidentById(id) {
            let targetData = this.evidentListGot.find(item => item.id == id && item.fromUserId == GameManager.userInfo.userId);
            return targetData;
        }
        static checkGotEvident(id) {
            let targetData = this.evidentListGot.find(item => item.id == id);
            return !!targetData;
        }
        static sortEvidentByShareTime(list = []) {
            let listRes = list.concat();
            let listRes1 = listRes.sort((a, b) => {
                let shareTime1 = a.shareTime || 0;
                let shareTime2 = b.shareTime || 0;
                return shareTime1 - shareTime2;
            });
            return listRes1;
        }
        static checkRoleSelected(roleId) {
            let selectedData = GameManager.selectRoleMapRoleToUser[roleId];
            return !!selectedData;
        }
        static chooseRole(roleId) {
            return __awaiter(this, void 0, void 0, function* () {
                let selectedData = GameManager.selectRoleMapRoleToUser[roleId];
                yield NetController.reqChooseRole(roleId);
                EventManager.pub("game/updateRoleSelct");
            });
        }
        static getRoomUserById(id) {
            let data = this.roomUserList.find(item => item.userId == id) || {};
            return data;
        }
        static getSelectedRoleIdByUserId(userId) {
            for (let roleId in this.selectRoleMapRoleToUser) {
                if (this.selectRoleMapRoleToUser[roleId] == userId) {
                    return roleId;
                }
            }
            return -1;
        }
        static get selfSelectRoleId() {
            for (let roleId in this.selectRoleMapRoleToUser) {
                if (this.selectRoleMapRoleToUser[roleId] == GameManager.userInfo.userId) {
                    return roleId;
                }
            }
            return -1;
        }
        static get selectedRoleInfo() {
            return (Scene3dConfig.roleList.find(item => item.id == this.selfSelectRoleId) ||
                {});
        }
        static getRoleCount() {
            let count = 0;
            for (let key in this.selectRoleMapRoleToUser) {
                count++;
            }
            return count;
        }
        static goCreateGame() {
            Laya.Scene.open("scene/SceneBeforeStart.scene");
        }
        static goSceneGame() {
            return new Promise(rsv => {
                Laya.Scene.open("scene/SceneGame.scene", true, null, new Laya.Handler(this, e => {
                    rsv(null);
                }));
            });
        }
    }
    GameManager.hintedList = [];
    GameManager.jumpHint = null;
    GameManager.round = 0;
    GameManager.hintedMap = {};
    GameManager.ditectiveRoleId = 6;
    GameManager.iconChatNotRead = 0;
    GameManager.chatBoxOpened = true;
    GameManager.murderRoleId = 1;
    GameManager.chatList = [];
    GameManager.sceneMap = {};
    GameManager.listAnswered = {};
    GameManager.timeTitle = "";
    GameManager._step = "";
    GameManager.gameRound = 1;
    GameManager.flagCanMove = true;
    GameManager.globalUserNum = 0;
    GameManager.dataTimeline = [];
    GameManager.listNote = [];
    GameManager.audioChecked = [];
    GameManager.roomUserList = [];
    GameManager.roomUserList1 = [];
    GameManager.roomReadyList = [];
    GameManager.roomInfo = {
        roomPwd: "",
        masterUserId: 0,
        readyUserNum: 0,
        roomId: 0,
        userLimit: 6,
        roomName: "",
        roomNum: 0,
        publicFlag: 1,
        gsId: 2
    };
    GameManager.voteMap = {};
    GameManager.userInfo = {
        userId: 0,
        AP: 3,
        roleId: 1,
        username: ""
    };
    GameManager.characterList = [];
    GameManager.selectRoleMapRoleToUser = {};
    GameManager.downW = false;
    GameManager.downA = false;
    GameManager.downS = false;
    GameManager.downD = false;
    GameManager.modeAd = 1;
    GameManager.currentScene = "";
    GameManager.evidentListGot = [];
    window.onbeforeunload = () => {
        GameManager.saveLocalData();
    };

    class NetController {
        static kickPlayer(toUserId) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${toUserId}/${GameManager.roomInfo.roomId}/room/kick_out`,
                    method: "post",
                    data: {}
                });
                return data;
            });
        }
        static getInfo(toUserId) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/user/${toUserId}`,
                    method: "get",
                    data: {}
                });
                return data;
            });
        }
        static addFriend(toUserId) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/friend/${toUserId}`,
                    method: "put",
                    data: {}
                });
                return data;
            });
        }
        static changeRoomPwd(isPublic) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: "/api/room/change_pwd",
                    method: "post",
                    data: {
                        roomId: GameManager.roomInfo.roomId,
                        isPublic: isPublic ? 1 : 0,
                        password: "1111"
                    }
                });
                return data;
            });
        }
        static reqChechAudio(flag = false) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: "/api/user/check/signal",
                    method: "get",
                    data: {
                        valid: flag
                    }
                });
                return data;
            });
        }
        static getAgoraToken(channelName) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: "/api/talking_sdk/token",
                    method: "get",
                    data: {
                        channelName,
                        userAccount: +GameManager.userInfo.userId
                    }
                });
                return data;
            });
        }
        static set token(token) {
            this._token = token;
        }
        static get token() {
            return (this._token ||
                Utils.getQueryVariable("token") ||
                Laya.LocalStorage.getItem("token"));
        }
        static get visitorSign() {
            return (Utils.getQueryVariable("visitorSign") ||
                Laya.LocalStorage.getItem("visitorSign"));
        }
        static set visitorSign(visitorSign) {
            Laya.LocalStorage.setItem("visitorSign", visitorSign);
        }
        static doLogin() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!NetController.token) {
                    return;
                }
                let dataLoged = yield Utils.doAjax({
                    url: `/api/user/self`,
                    method: "get",
                    data: {}
                });
                if (!dataLoged.gaming) {
                    UIManager.goHall();
                    return;
                }
                Object.assign(GameManager.userInfo, dataLoged.user);
                GameManager.userInfo.userId = dataLoged.user.id;
                this.token = dataLoged.token;
                WSManager.connect(`${dataLoged.user.wsAddress}/tws/${GameManager.userInfo.userId}?token=${this.token}`);
            });
        }
        static getScenePlayer() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/query/scene_map`,
                    method: "post",
                    data: {}
                });
                return true;
            });
        }
        static leaveScene() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/exit/scene`,
                    method: "post",
                    data: {}
                });
                return true;
            });
        }
        static goScene(sceneId) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/enter/scene`,
                    method: "post",
                    data: {
                        sceneId
                    }
                });
                return true;
            });
        }
        static getInRoomData() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: "/api/room/game_detail",
                    method: "get",
                    data: {
                        userId: GameManager.userInfo.userId
                    }
                });
                return data;
            });
        }
        static getRoomAliveList(key, page = 1) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: "/api/room/list",
                    data: {
                        name: key,
                        pageNo: page,
                        pageSize: 8
                    }
                });
                return data;
            });
        }
        static createRoom() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: "/api/room/create",
                    method: "post",
                    data: {
                        roomName: GameManager.roomInfo.roomName,
                        roomPwd: GameManager.roomInfo.roomPwd,
                        gsId: GameManager.roomInfo.gsId,
                        publicFlag: GameManager.roomInfo.publicFlag
                    }
                });
                yield this.reqJoinRoom(data.room.id);
                return data;
            });
        }
        static reqJoinRoom(roomId) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${roomId}/room/join`,
                    method: "post",
                    data: {}
                });
                return data;
            });
        }
        static reqExitRoom(roomId) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${roomId}/room/exit`,
                    method: "post",
                    data: {}
                });
                return data;
            });
        }
        static reqUnready() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/unready`,
                    method: "post",
                    data: {}
                });
                return data;
            });
        }
        static reqSceneEnd() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/scene/end`,
                    method: "post",
                    data: {}
                });
                return data;
            });
        }
        static reqClueEnd(clues) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/clue/share_and_end`,
                    method: "post",
                    data: { clues }
                });
                return data;
            });
        }
        static reqEndConclusion() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/conclusion/end`,
                    method: "post",
                    data: {}
                });
                return data;
            });
        }
        static reqEndTalking() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/talking/end`,
                    method: "post",
                    data: {}
                });
                return data;
            });
        }
        static reqEndFreeTalking() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/free_talking/end`,
                    method: "post",
                    data: {}
                });
                return data;
            });
        }
        static reqStartGame() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/start`,
                    method: "post",
                    data: {}
                });
                return data;
            });
        }
        static reqChooseRole(roleId) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/role/select`,
                    method: "get",
                    data: {
                        roleId
                    }
                });
                return data;
            });
        }
        static reqClearDataAll() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/room/clear`,
                    method: "get",
                    data: {}
                });
                return data;
            });
        }
        static reqLoadingSceneEnd() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/load_success`,
                    method: "post",
                    data: {}
                });
                return data;
            });
        }
        static reqChangeScene(sceneId) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/enter/scene`,
                    method: "post",
                    data: {
                        sceneId
                    }
                });
                return data;
            });
        }
        static reqCancelShareDetail(clueId) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/clue/cancel`,
                    method: "post",
                    data: {
                        clueId
                    }
                });
                return data;
            });
        }
        static reqShareDetail(clue) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/clue/share`,
                    method: "post",
                    data: {
                        clue
                    }
                });
                return data;
            });
        }
        static reqReady() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/ready`,
                    method: "post",
                    data: {}
                });
                return data;
            });
        }
        static reqEndTalkingBeforeGame() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/pre_talking/end`,
                    method: "post",
                    data: {}
                });
                return data;
            });
        }
        static reqAdStartGameCancel() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/refuse_start`,
                    method: "post",
                    data: {}
                });
                return data;
            });
        }
        static reqAdStartGameSure() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/agree_start`,
                    method: "post",
                    data: {}
                });
                return data;
            });
        }
        static reqDismissRoom() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/room/dismiss`,
                    method: "post",
                    data: {}
                });
                return data;
            });
        }
        static reqEndRoleSelected() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/role/end`,
                    method: "post",
                    data: {}
                });
                return data;
            });
        }
        static reqEndFinishTalk() {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/analyse/end`,
                    method: "post",
                    data: {}
                });
                return data;
            });
        }
        static reqAskChange(roleId, exchangeRoleId, exchangeUserId) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/role/request_ask_exchange`,
                    method: "get",
                    data: { roleId, exchangeRoleId, exchangeUserId }
                });
                return data;
            });
        }
        static reqChangeRole(roleId, requestRoleId, requestUserId, answer) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/role/response_ask_exchange`,
                    method: "get",
                    data: { roleId, requestRoleId, requestUserId, answer }
                });
                return data;
            });
        }
        static reqVote(votedUserId, roleId, votedRoleId) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/game/flow/${GameManager.userInfo.userId}/${GameManager.roomInfo.roomId}/vote`,
                    method: "post",
                    data: { votedUserId, roleId, votedRoleId }
                });
                return data;
            });
        }
        static sendChatData(text, userId = 0) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/chat/send`,
                    method: "post",
                    data: {
                        content: JSON.stringify({
                            text: text,
                            toUserId: userId,
                            fromUserId: GameManager.userInfo.userId,
                            fromUserName: GameManager.userInfo.username
                        }),
                        roomId: GameManager.roomInfo.roomId
                    }
                });
                return data;
            });
        }
        static getChatList(page = 1) {
            return __awaiter(this, void 0, void 0, function* () {
                let data = yield Utils.doAjax({
                    url: `/api/chat/his`,
                    method: "get",
                    data: {
                        pageSize: 100,
                        pageNo: page,
                        roomId: GameManager.roomInfo.roomId,
                        sortType: "desc"
                    }
                });
                return data;
            });
        }
        static updateRoomInfo(data) {
            Object.assign(GameManager.roomInfo, data.room.room);
            GameManager.roomInfo.masterUserId = data.room.masterUserId;
            GameManager.roomInfo.roomId = data.room.room.id;
            GameManager.characterList = data.room.characterList;
            EventManager.pub("room/updateRoomInfo");
        }
    }
    NetController._token = "";

    class Utils {
        static getTxtByteLen(str) {
            var count = str.length;
            for (var i = 0; i < str.length; i++) {
                if (str.charCodeAt(i) > 255) {
                    count++;
                }
            }
            return count;
        }
        static toggle3dOpen(obj, type, changeVal, duration = 200, flagOpen) {
            return __awaiter(this, void 0, void 0, function* () {
                if (flagOpen == undefined) {
                    flagOpen = !obj["flagOpen"];
                }
                let targetObj = {
                    update: new Laya.Handler(obj, e => {
                        if (type <= 3) {
                            obj.transform.localPositionX = changeObj.x;
                            obj.transform.localPositionY = changeObj.y;
                            obj.transform.localPositionZ = changeObj.z;
                        }
                        else {
                            obj.transform.localRotationEulerZ = changeObj.z;
                            obj.transform.localRotationEulerY = changeObj.y;
                            obj.transform.localRotationEulerX = changeObj.x;
                        }
                    })
                };
                let changeObj = {};
                if (type == 1) {
                    changeObj = Object.assign({}, obj.transform.localPosition);
                    if (obj["oldVal"] == undefined) {
                        obj["oldVal"] = obj.transform.localPosition["x"];
                    }
                    targetObj["x"] = !flagOpen ? obj["oldVal"] : obj["oldVal"] + changeVal;
                }
                else if (type == 2) {
                    changeObj = Object.assign({}, obj.transform.localPosition);
                    if (obj["oldVal"] == undefined) {
                        obj["oldVal"] = obj.transform.localPosition["y"];
                    }
                    targetObj["y"] = !flagOpen ? obj["oldVal"] : obj["oldVal"] + changeVal;
                }
                else if (type == 3) {
                    changeObj = Object.assign({}, obj.transform.localPosition);
                    if (obj["oldVal"] == undefined) {
                        obj["oldVal"] = obj.transform.localPosition["z"];
                    }
                    targetObj["z"] = !flagOpen ? obj["oldVal"] : obj["oldVal"] + changeVal;
                }
                else if (type == 4) {
                    changeObj = Object.assign({}, obj.transform.localRotationEuler);
                    if (obj["oldVal"] == undefined) {
                        obj["oldVal"] = obj.transform.localRotationEuler["x"];
                    }
                    targetObj["x"] = !flagOpen ? obj["oldVal"] : obj["oldVal"] + changeVal;
                }
                else if (type == 5) {
                    changeObj = Object.assign({}, obj.transform.localRotationEuler);
                    if (obj["oldVal"] == undefined) {
                        obj["oldVal"] = obj.transform.localRotationEuler["y"];
                    }
                    targetObj["y"] = !flagOpen ? obj["oldVal"] : obj["oldVal"] + changeVal;
                }
                else if (type == 6) {
                    changeObj = Object.assign({}, obj.transform.localRotationEuler);
                    if (obj["oldVal"] == undefined) {
                        obj["oldVal"] = obj.transform.localRotationEuler["z"];
                    }
                    targetObj["z"] = !flagOpen ? obj["oldVal"] : obj["oldVal"] + changeVal;
                }
                obj["flagOpen"] = flagOpen;
                yield Utils.asyncTween(changeObj, targetObj, duration);
            });
        }
        static loopRotate(obj, duration, dir = 1) {
            return __awaiter(this, void 0, void 0, function* () {
                yield Utils.asyncTween(obj, { rotation: 360 * dir }, duration);
                obj.rotation = 0;
                yield this.loopRotate(obj, duration, dir);
            });
        }
        static doCopy(str) {
            new window["ClipboardJS"](".btn-copy", {
                text: function (trigger) {
                    return str;
                }
            });
            $(".btn-copy").trigger("click");
        }
        static debounce(func, wait) {
            let timer;
            return function () {
                let context = this;
                let args = arguments;
                if (timer)
                    clearTimeout(timer);
                timer = setTimeout(() => {
                    func.apply(this, args);
                }, wait);
            };
        }
        static findChildByName(scene, name) {
            let nameList = name.split(".");
            let parent = scene;
            for (let i = 0; i < nameList.length; i++) {
                let itemName = nameList[i];
                parent = parent.getChildByName(itemName);
                if (!parent) {
                    LogManager.warn(`${name}节点不存在,${itemName}错误`);
                    return null;
                }
            }
            return parent;
        }
        static shuffle(arr) {
            return arr.sort(() => Math.random() - 0.5);
        }
        static formatNumToKM(num) {
            if (num > 1000000) {
                return Math.floor(num / 1000000) + "m";
            }
            else if (num > 1000) {
                return Math.floor(num / 1000) + "k";
            }
            else {
                return num + "";
            }
        }
        static formatDiamond(num) {
            return num + "";
        }
        static createPrefab(url) {
            return new Promise(rsv => {
                Laya.loader.load(url, Laya.Handler.create(null, (data) => {
                    let prefab = data;
                    if (!data.json) {
                        prefab = new Laya.Prefab();
                        prefab.json = data;
                    }
                    rsv(prefab);
                }));
            });
        }
        static getQueryVariable(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] == variable) {
                    return pair[1];
                }
            }
            return false;
        }
        static randomByBase(base, num) {
            let res = num;
            if (num > base) {
                res = base + (num - base) * Math.random();
            }
            else {
                res = num * Math.random();
            }
            return res;
        }
        static assignData(data1, data2) {
            for (let key in data1) {
                data1[key] = data2[key];
            }
            for (let key in data2) {
                data1[key] = data2[key];
            }
        }
        static doAjax({ url = "", data = {}, method = "get" }) {
            method = method.toLowerCase();
            let host = "https://www.theclueonline.com/app";
            if (url.indexOf("http") == -1) {
                url = host + url;
            }
            if (method == "post") {
                data = JSON.stringify(data);
            }
            return new Promise((rsv, rej) => {
                $.ajax({
                    url: url,
                    type: method,
                    dataType: "json",
                    data,
                    headers: {
                        "Content-type": "application/json; charset=utf-8",
                        "Access-Control-Allow-Origin": "*",
                        "X-AUTH-TOKEN": NetController.token
                    }
                }).then(e => {
                    if (e.code == 0) {
                        console.log("请求结束", e);
                        rsv(e.data);
                    }
                    else if (!e.code || e.code == 1) {
                        rej(e);
                    }
                    else {
                        UIManager.showMessage(e.msg);
                        rej(e);
                    }
                });
            });
        }
        static timeFormat(fmt, surtime) {
            var d = Math.floor(surtime / (24 * 3600));
            var leave1 = surtime % (24 * 3600);
            var h = Math.floor(leave1 / 3600);
            var leave2 = leave1 % 3600;
            var m = Math.floor(leave2 / 60);
            var leave3 = leave2 % 60;
            var s = Math.round(leave3);
            let ret;
            let opt = {
                "d+": d.toString(),
                "H+": h.toString(),
                "M+": m.toString(),
                "S+": s.toString()
            };
            for (let k in opt) {
                ret = new RegExp("(" + k + ")").exec(fmt);
                if (ret) {
                    fmt = fmt.replace(ret[1], ret[1].length == 1
                        ? opt[k]
                        : ("0000000" + opt[k]).slice(-ret[1].length));
                }
            }
            return fmt;
        }
        static subString(str, len) {
            var newLength = 0;
            var newStr = "";
            var chineseRegex = /[^\x00-\xff]/g;
            var singleChar = "";
            var strLength = str.replace(chineseRegex, "**").length;
            if (strLength > len) {
                for (var i = 0; i < strLength; i++) {
                    singleChar = str.charAt(i).toString();
                    if (singleChar.match(chineseRegex) != null) {
                        newLength += 2;
                    }
                    else {
                        newLength++;
                    }
                    if (newLength > len) {
                        break;
                    }
                    newStr += singleChar;
                }
                if (strLength > len) {
                    newStr += "...";
                }
            }
            else {
                newStr = str;
            }
            return newStr;
        }
        static dateFormat(fmt, date) {
            let ret;
            let opt = {
                "Y+": date.getFullYear().toString(),
                "m+": (date.getMonth() + 1).toString(),
                "d+": date.getDate().toString(),
                "H+": date.getHours().toString(),
                "M+": date.getMinutes().toString(),
                "S+": date.getSeconds().toString()
            };
            for (let k in opt) {
                ret = new RegExp("(" + k + ")").exec(fmt);
                if (ret) {
                    fmt = fmt.replace(ret[1], ret[1].length == 1
                        ? opt[k]
                        : ("000000" + opt[k]).slice(-ret[1].length));
                }
            }
            return fmt;
        }
        static loadRes(url) {
            return new Promise(rsv => {
                Laya.loader.load(url, Laya.Handler.create(this, e => {
                    rsv(e);
                }));
            });
        }
        static throttle(fn, wait) {
            var timer = null;
            return function () {
                var context = this;
                var args = arguments;
                if (!timer) {
                    timer = setTimeout(function () {
                        fn.apply(context, args);
                        timer = null;
                    }, wait);
                }
            };
        }
        static asyncTween(target, to, duration = 1000, easeFunc = Laya.Ease.linearNone) {
            return new Promise((rsv, rej) => {
                Laya.Tween.to(target, to, duration, easeFunc, Laya.Handler.create(this, () => {
                    rsv(null);
                }));
            });
        }
        static asyncByTime(time, obj) {
            return new Promise(rsv => {
                Laya.timer.once(time, obj || this, () => {
                    rsv(null);
                });
            });
        }
        static createDashLines(node, startX, startY, endX, endY, each = 2, space = 1, color = "#000000", lineWidth = 2) {
            let distance = Math.sqrt(Math.pow(endY - startY, 2) + Math.pow(endX - startX, 2));
            let count = distance / (each + space);
            let eachX = (each * (endX - startX)) / distance;
            let eachY = (each * (endY - startY)) / distance;
            let spaceX = (space * (endX - startX)) / distance;
            let spaceY = (space * (endY - startY)) / distance;
            for (var i = 0; i <= count; i++) {
                let x = startX + i * (eachX + spaceX);
                let y = startY + i * (eachY + spaceY);
                node.graphics.drawLine(x, y, x + eachX, y + eachY, color, lineWidth);
            }
        }
        static toggleSkin(node, skin1, skin2, delay, maxCount = 5) {
            return __awaiter(this, void 0, void 0, function* () {
                let count = 0;
                let ffChange = () => __awaiter(this, void 0, void 0, function* () {
                    count++;
                    node.skin = node.skin == skin1 ? skin2 : skin1;
                    yield Utils.asyncByTime(delay);
                    if (!maxCount || count < maxCount) {
                        yield ffChange();
                    }
                });
                yield ffChange();
            });
        }
        static createDragonBone(url) {
            return new Promise(rsv => {
                var skeleton = new Laya.Skeleton();
                skeleton.load(url, Laya.Handler.create(this, () => {
                    rsv(skeleton);
                }));
            });
        }
        static showDashAni(wrap, pointsList, eachCall = idx => { }, eachLen = 40, color = "#000000", lineWidth = 2) {
            let lastPoint = new Laya.Point(0, 0);
            let count = 0;
            let idx = -1;
            let countTotal = -1;
            let linesCache = [];
            let distance;
            let posStart;
            let posEnd;
            let funcUpdate = () => __awaiter(this, void 0, void 0, function* () {
                if (count > countTotal) {
                    idx++;
                    yield eachCall(idx);
                    if (idx + 1 > pointsList.length - 1) {
                        return;
                    }
                    count = 0;
                    posStart = pointsList[idx];
                    posEnd = pointsList[idx + 1];
                    distance = Math.sqrt(Math.pow(posEnd.y - posStart.y, 2) +
                        Math.pow(posEnd.x - posStart.x, 2));
                    countTotal = Math.ceil(distance / eachLen);
                    if (linesCache.length == 0) {
                        linesCache.push(posStart);
                    }
                }
                let x = posStart.x + (count * eachLen * (posEnd.x - posStart.x)) / distance;
                let y = posStart.y + (count * eachLen * (posEnd.y - posStart.y)) / distance;
                if (countTotal == count) {
                    x = posEnd.x;
                    y = posEnd.y;
                }
                if (count == 1) {
                    linesCache.push(new Laya.Point(x, y));
                }
                else {
                    linesCache[linesCache.length - 1] = new Laya.Point(x, y);
                }
                linesCache.forEach((point, idx) => {
                    let pointNext = linesCache[idx + 1];
                    if (pointNext) {
                        this.createDashLines(wrap, point.x, point.y, pointNext.x, pointNext.y, 16, 8, color, lineWidth);
                    }
                });
                count++;
                Laya.timer.once(60, this, (e) => __awaiter(this, void 0, void 0, function* () {
                    yield funcUpdate();
                }));
            });
            funcUpdate();
        }
    }

    class UIManager {
        static playVideo(url = `video/result_book1_${DataLang.lang}.mp4`) {
            let video = new Laya.Video(Laya.stage.width, Laya.stage.height);
            video.load(url);
            Laya.stage.addChild(video);
            video.play();
        }
        static changePointer(type = "pointer") {
            if (type == "pointer") {
                Laya.Browser.document.body.className = "cursor-pointer";
                this.flagTargetIsClu = true;
            }
            else {
                Laya.Browser.document.body.className = "";
                this.flagTargetIsClu = false;
            }
        }
        static get flagDialogOpened() {
            return Laya.Dialog.manager.numChildren > 0;
        }
        static hideItemHintToast() {
            if (this.spToast) {
                this.spToast.removeSelf();
            }
        }
        static showItemHintToast(txtHint, pos) {
            return __awaiter(this, void 0, void 0, function* () {
                Laya.stage.addChild(this.spToast);
                let spTxt = this.spToast.getChildByName("label");
                spTxt.text = txtHint;
                this.spToast.width = spTxt.width + 50;
                this.spToast.pivot(this.spToast.width / 2, this.spToast.height / 2);
                this.spToast.pos(pos.x, pos.y);
            });
        }
        static init() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.spToast) {
                    let ToastItemName = (yield Utils.createPrefab("prefab/ToastItemName.json"));
                    this.spToast = Laya.Pool.getItemByCreateFun("ToastItemName", ToastItemName.create, ToastItemName);
                    this.spToast.zOrder = 100000;
                }
                UIConfig.popupBgColor = "#000000";
                UIConfig.popupBgAlpha = 0.85;
                Laya.Dialog.manager.closeEffectHandler = Laya.Handler.create(this, (dialog) => {
                    if (dialog.isShowEffect) {
                        let centerX = (Laya.stage.width - dialog.width) / 2;
                        let centerY = (Laya.stage.height - dialog.height) / 2;
                        dialog.y = centerY;
                        dialog.x = centerX;
                        Laya.Tween.to(dialog, {
                            x: centerX,
                            y: centerY + 200,
                            alpha: 0
                        }, 600, Laya.Ease.backInOut, Laya.Handler.create(Laya.Dialog.manager, Laya.Dialog.manager.doClose, [dialog]));
                    }
                }, null, false);
                Laya.Dialog.manager.popupEffectHandler = Laya.Handler.create(Laya.Dialog.manager, dialog => {
                    if (dialog.isShowEffect) {
                        let centerX = (Laya.stage.width - dialog.width) / 2;
                        let centerY = (Laya.stage.height - dialog.height) / 2;
                        dialog.y = centerY;
                        dialog.x = centerX;
                        let handler = Laya.Handler.create(Laya.Dialog.manager, Laya.Dialog.manager.doOpen, [dialog]);
                        handler.run();
                        Laya.Tween.from(dialog, {
                            x: centerX,
                            y: centerY + 200,
                            alpha: 0
                        }, 600, Laya.Ease.backInOut);
                    }
                }, null, false);
            });
        }
        static showDetail(dataList, withBtns = true) {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.flagShowDetail) {
                    return;
                }
                this.flagShowDetail = true;
                if (dataList.length > 1) {
                    yield this.openModal("modal/ModalDetailList.scene", false, {
                        list: dataList,
                        withBtns
                    }, true);
                }
                else {
                    yield this.openModal("modal/ModalDetail.scene", false, {
                        data: dataList[0],
                        withBtns
                    }, true);
                }
                this.flagShowDetail = false;
            });
        }
        static showWaiting() {
            Laya.Scene.open("scene/SceneWaiting.scene", false);
        }
        static hideWaiting() {
            Laya.Scene.close("scene/SceneWaiting.scene");
        }
        static checkFirstHint() {
            let isMaster = GameManager.roomInfo.masterUserId == GameManager.userInfo.userId;
            UIManager.showHint(["hintTestAudio", "hintShare"]);
        }
        static showHint(typeList) {
            let jumpHint = Laya.LocalStorage.getItem("jumpHint") || GameManager.jumpHint;
            if (jumpHint) {
                return;
            }
            else if (jumpHint == undefined) {
                UIManager.showConfirm({
                    content: DataLang.getTxtByType("jump"),
                    onCancel() {
                        GameManager.jumpHint = false;
                    },
                    onSure() {
                        Laya.LocalStorage.setItem("jumpHint", "1");
                        GameManager.jumpHint = true;
                        EventManager.pub("game/closeHint");
                    }
                });
            }
            let strType = typeList.join(",");
            if (GameManager.hintedList.indexOf(strType) > -1) {
                return;
            }
            GameManager.hintedList.push(strType);
            UIManager.goScene("component/WrapTip.scene", false, typeList);
        }
        static goHall() {
            console.log("返回大厅");
            if (window.parent) {
                window.parent.postMessage({
                    type: "goBackHall"
                }, "*");
            }
            else {
                location.href = "http://192.168.10.100:8080/theclueonline#/game";
            }
        }
        static goScene(url, closeOther = true, params = {}) {
            UIManager.hideItemHintToast();
            return new Promise(rsv => {
                Laya.Scene.open(url, closeOther, params, new Laya.Handler(this, e => {
                    rsv(null);
                }));
            });
        }
        static openFullModal(url, closeOther = false, params = {}) {
            UIManager.hideItemHintToast();
            Laya.View.open(url, closeOther, params);
        }
        static openModal(url, closeOther = false, params = {}, closeOnSide = false) {
            return new Promise((rsv, rej) => {
                this.closeOnSide.push(closeOnSide);
                UIConfig.closeDialogOnSide = closeOnSide;
                UIManager.hideItemHintToast();
                Laya.Dialog.open(url, closeOther, params, new Laya.Handler(this, e => {
                    rsv(null);
                }));
            });
        }
        static showMessage(content) {
            this.openModal("modal/ModalMessage.scene", false, { content });
        }
        static showConfirm({ content, onSure, onCancel }) {
            this.openModal("modal/ModalConfirm.scene", false, {
                content,
                onSure,
                onCancel
            });
        }
        static closeConfirm() {
            Laya.Dialog.close("modal/ModalConfirm.scene");
        }
        static closeModal(url) {
            Laya.Dialog.close(url);
        }
        static showToast(txt) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.toast) {
                    let prefab = (yield Utils.createPrefab("prefab/toast.json"));
                    this.toast = Laya.Pool.getItemByCreateFun("toast", prefab.create, prefab);
                    this.toast.alpha = 0;
                    Laya.stage.addChild(this.toast);
                }
                this.toast.centerY = -100;
                this.toast.alpha = 0;
                let spTxt = this.toast.getChildByName("txt");
                spTxt.text = txt;
                Laya.Tween.clearAll(this.toast);
                Laya.timer.clearAll(this.toast);
                Utils.asyncTween(this.toast, { centerY: -200, alpha: 1 }, 200);
                yield Utils.asyncByTime(1000, this.toast);
                Utils.asyncTween(this.toast, { centerY: -100, alpha: 0 }, 200);
            });
        }
    }
    UIManager.flagTargetIsClu = false;
    UIManager.changedHintItem = [];
    UIManager.flagShowDetail = false;
    UIManager.closeOnSide = [];

    var DetailItemIdConfig;
    (function (DetailItemIdConfig) {
        DetailItemIdConfig[DetailItemIdConfig["joeComputer"] = 0] = "joeComputer";
        DetailItemIdConfig[DetailItemIdConfig["xieyin"] = 1] = "xieyin";
        DetailItemIdConfig[DetailItemIdConfig["huochai"] = 2] = "huochai";
        DetailItemIdConfig[DetailItemIdConfig["joe_to_jane"] = 3] = "joe_to_jane";
        DetailItemIdConfig[DetailItemIdConfig["joe_to_annie"] = 4] = "joe_to_annie";
        DetailItemIdConfig[DetailItemIdConfig["xiaopiao"] = 5] = "xiaopiao";
        DetailItemIdConfig[DetailItemIdConfig["shuomingshu"] = 6] = "shuomingshu";
        DetailItemIdConfig[DetailItemIdConfig["myjdj"] = 7] = "myjdj";
        DetailItemIdConfig[DetailItemIdConfig["killerKnife"] = 8] = "killerKnife";
        DetailItemIdConfig[DetailItemIdConfig["jane_to_joe"] = 9] = "jane_to_joe";
        DetailItemIdConfig[DetailItemIdConfig["jane_to_annie"] = 10] = "jane_to_annie";
        DetailItemIdConfig[DetailItemIdConfig["pmt1"] = 11] = "pmt1";
        DetailItemIdConfig[DetailItemIdConfig["pmt2"] = 12] = "pmt2";
        DetailItemIdConfig[DetailItemIdConfig["knife"] = 13] = "knife";
        DetailItemIdConfig[DetailItemIdConfig["gun"] = 14] = "gun";
        DetailItemIdConfig[DetailItemIdConfig["phoneWilson"] = 15] = "phoneWilson";
        DetailItemIdConfig[DetailItemIdConfig["janeComputer"] = 16] = "janeComputer";
        DetailItemIdConfig[DetailItemIdConfig["miyao"] = 17] = "miyao";
        DetailItemIdConfig[DetailItemIdConfig["scene1PrinterPaper"] = 18] = "scene1PrinterPaper";
        DetailItemIdConfig[DetailItemIdConfig["scene1DeskKey"] = 19] = "scene1DeskKey";
        DetailItemIdConfig[DetailItemIdConfig["rubishPaper"] = 20] = "rubishPaper";
        DetailItemIdConfig[DetailItemIdConfig["scene1Computer"] = 21] = "scene1Computer";
        DetailItemIdConfig[DetailItemIdConfig["boxPaper"] = 22] = "boxPaper";
        DetailItemIdConfig[DetailItemIdConfig["paintPaper"] = 23] = "paintPaper";
        DetailItemIdConfig[DetailItemIdConfig["test11"] = 24] = "test11";
        DetailItemIdConfig[DetailItemIdConfig["scene1JYSMS"] = 25] = "scene1JYSMS";
        DetailItemIdConfig[DetailItemIdConfig["scene1DrivePaper"] = 26] = "scene1DrivePaper";
        DetailItemIdConfig[DetailItemIdConfig["harrisTicket"] = 27] = "harrisTicket";
        DetailItemIdConfig[DetailItemIdConfig["harrisBag"] = 28] = "harrisBag";
        DetailItemIdConfig[DetailItemIdConfig["harrisRubish"] = 29] = "harrisRubish";
        DetailItemIdConfig[DetailItemIdConfig["harrisLetter1"] = 30] = "harrisLetter1";
        DetailItemIdConfig[DetailItemIdConfig["harrisLetter2"] = 31] = "harrisLetter2";
        DetailItemIdConfig[DetailItemIdConfig["harrisPocket"] = 32] = "harrisPocket";
        DetailItemIdConfig[DetailItemIdConfig["harrisId"] = 33] = "harrisId";
        DetailItemIdConfig[DetailItemIdConfig["phoneHellen"] = 34] = "phoneHellen";
        DetailItemIdConfig[DetailItemIdConfig["phoneHarris"] = 35] = "phoneHarris";
        DetailItemIdConfig[DetailItemIdConfig["harrisRubish1"] = 36] = "harrisRubish1";
        DetailItemIdConfig[DetailItemIdConfig["harrisXingli"] = 37] = "harrisXingli";
        DetailItemIdConfig[DetailItemIdConfig["anfajsq"] = 38] = "anfajsq";
        DetailItemIdConfig[DetailItemIdConfig["anfalajitong"] = 39] = "anfalajitong";
        DetailItemIdConfig[DetailItemIdConfig["jiu"] = 40] = "jiu";
        DetailItemIdConfig[DetailItemIdConfig["dangao"] = 41] = "dangao";
        DetailItemIdConfig[DetailItemIdConfig["shoupa"] = 42] = "shoupa";
        DetailItemIdConfig[DetailItemIdConfig["kfjl"] = 43] = "kfjl";
        DetailItemIdConfig[DetailItemIdConfig["jianli"] = 44] = "jianli";
        DetailItemIdConfig[DetailItemIdConfig["riji"] = 45] = "riji";
        DetailItemIdConfig[DetailItemIdConfig["tonghuajilu"] = 46] = "tonghuajilu";
        DetailItemIdConfig[DetailItemIdConfig["zdj"] = 47] = "zdj";
        DetailItemIdConfig[DetailItemIdConfig["tzbg"] = 48] = "tzbg";
        DetailItemIdConfig[DetailItemIdConfig["kfbg"] = 49] = "kfbg";
        DetailItemIdConfig[DetailItemIdConfig["biji"] = 50] = "biji";
        DetailItemIdConfig[DetailItemIdConfig["baozhi"] = 51] = "baozhi";
        DetailItemIdConfig[DetailItemIdConfig["dgkfbd"] = 52] = "dgkfbd";
        DetailItemIdConfig[DetailItemIdConfig["gjx"] = 53] = "gjx";
        DetailItemIdConfig[DetailItemIdConfig["underSofa"] = 54] = "underSofa";
        DetailItemIdConfig[DetailItemIdConfig["jipiao"] = 55] = "jipiao";
        DetailItemIdConfig[DetailItemIdConfig["ljt3"] = 56] = "ljt3";
        DetailItemIdConfig[DetailItemIdConfig["ljt4"] = 57] = "ljt4";
        DetailItemIdConfig[DetailItemIdConfig["ztxs"] = 58] = "ztxs";
        DetailItemIdConfig[DetailItemIdConfig["biaokuang"] = 59] = "biaokuang";
        DetailItemIdConfig[DetailItemIdConfig["janePhone"] = 60] = "janePhone";
        DetailItemIdConfig[DetailItemIdConfig["joeTicket"] = 61] = "joeTicket";
        DetailItemIdConfig[DetailItemIdConfig["joePhone"] = 62] = "joePhone";
        DetailItemIdConfig[DetailItemIdConfig["joePaper"] = 63] = "joePaper";
        DetailItemIdConfig[DetailItemIdConfig["joeBook"] = 64] = "joeBook";
        DetailItemIdConfig[DetailItemIdConfig["joePen"] = 65] = "joePen";
        DetailItemIdConfig[DetailItemIdConfig["joePaint"] = 66] = "joePaint";
        DetailItemIdConfig[DetailItemIdConfig["joeXL"] = 67] = "joeXL";
        DetailItemIdConfig[DetailItemIdConfig["yaoshi"] = 68] = "yaoshi";
        DetailItemIdConfig[DetailItemIdConfig["pmt"] = 69] = "pmt";
        DetailItemIdConfig[DetailItemIdConfig["wilsonComputer"] = 70] = "wilsonComputer";
        DetailItemIdConfig[DetailItemIdConfig["phoneTC1"] = 71] = "phoneTC1";
        DetailItemIdConfig[DetailItemIdConfig["phoneTC2"] = 72] = "phoneTC2";
        DetailItemIdConfig[DetailItemIdConfig["ytp"] = 73] = "ytp";
        DetailItemIdConfig[DetailItemIdConfig["room2_PA001"] = 74] = "room2_PA001";
        DetailItemIdConfig[DetailItemIdConfig["room2_PA002"] = 75] = "room2_PA002";
        DetailItemIdConfig[DetailItemIdConfig["room2_PA003"] = 76] = "room2_PA003";
        DetailItemIdConfig[DetailItemIdConfig["room2_PA004"] = 77] = "room2_PA004";
        DetailItemIdConfig[DetailItemIdConfig["room2_PA005"] = 78] = "room2_PA005";
        DetailItemIdConfig[DetailItemIdConfig["room2_PA006"] = 79] = "room2_PA006";
        DetailItemIdConfig[DetailItemIdConfig["room2_PA007"] = 80] = "room2_PA007";
        DetailItemIdConfig[DetailItemIdConfig["room2_PA008"] = 81] = "room2_PA008";
        DetailItemIdConfig[DetailItemIdConfig["room2_PA009"] = 82] = "room2_PA009";
        DetailItemIdConfig[DetailItemIdConfig["room2_PA0010"] = 83] = "room2_PA0010";
        DetailItemIdConfig[DetailItemIdConfig["room2_AR001"] = 84] = "room2_AR001";
        DetailItemIdConfig[DetailItemIdConfig["room2_AR002"] = 85] = "room2_AR002";
        DetailItemIdConfig[DetailItemIdConfig["room2_AR003"] = 86] = "room2_AR003";
        DetailItemIdConfig[DetailItemIdConfig["room2_AR004"] = 87] = "room2_AR004";
        DetailItemIdConfig[DetailItemIdConfig["room2_AR005"] = 88] = "room2_AR005";
        DetailItemIdConfig[DetailItemIdConfig["room2_AR006"] = 89] = "room2_AR006";
        DetailItemIdConfig[DetailItemIdConfig["room2_AR007"] = 90] = "room2_AR007";
        DetailItemIdConfig[DetailItemIdConfig["room2_AR008"] = 91] = "room2_AR008";
        DetailItemIdConfig[DetailItemIdConfig["room2_AR009"] = 92] = "room2_AR009";
        DetailItemIdConfig[DetailItemIdConfig["room2_MR001"] = 93] = "room2_MR001";
        DetailItemIdConfig[DetailItemIdConfig["room2_MR002"] = 94] = "room2_MR002";
        DetailItemIdConfig[DetailItemIdConfig["room2_MR003"] = 95] = "room2_MR003";
        DetailItemIdConfig[DetailItemIdConfig["room2_MR004"] = 96] = "room2_MR004";
        DetailItemIdConfig[DetailItemIdConfig["room2_MR005"] = 97] = "room2_MR005";
        DetailItemIdConfig[DetailItemIdConfig["room2_MR006"] = 98] = "room2_MR006";
        DetailItemIdConfig[DetailItemIdConfig["room2_MR007"] = 99] = "room2_MR007";
        DetailItemIdConfig[DetailItemIdConfig["room2_MR008"] = 100] = "room2_MR008";
        DetailItemIdConfig[DetailItemIdConfig["room2_MR009"] = 101] = "room2_MR009";
        DetailItemIdConfig[DetailItemIdConfig["room2_OR001"] = 102] = "room2_OR001";
        DetailItemIdConfig[DetailItemIdConfig["room2_OR002"] = 103] = "room2_OR002";
        DetailItemIdConfig[DetailItemIdConfig["room2_OR003"] = 104] = "room2_OR003";
        DetailItemIdConfig[DetailItemIdConfig["room2_OR004"] = 105] = "room2_OR004";
        DetailItemIdConfig[DetailItemIdConfig["room2_OR005"] = 106] = "room2_OR005";
        DetailItemIdConfig[DetailItemIdConfig["room2_OR006"] = 107] = "room2_OR006";
        DetailItemIdConfig[DetailItemIdConfig["room2_OR007"] = 108] = "room2_OR007";
        DetailItemIdConfig[DetailItemIdConfig["room2_OR008"] = 109] = "room2_OR008";
        DetailItemIdConfig[DetailItemIdConfig["room2_OR009"] = 110] = "room2_OR009";
        DetailItemIdConfig[DetailItemIdConfig["room2_OR010"] = 111] = "room2_OR010";
        DetailItemIdConfig[DetailItemIdConfig["room2_JR001"] = 112] = "room2_JR001";
        DetailItemIdConfig[DetailItemIdConfig["room2_JR002"] = 113] = "room2_JR002";
        DetailItemIdConfig[DetailItemIdConfig["room2_JR003"] = 114] = "room2_JR003";
        DetailItemIdConfig[DetailItemIdConfig["room2_JR004"] = 115] = "room2_JR004";
        DetailItemIdConfig[DetailItemIdConfig["room2_JR005"] = 116] = "room2_JR005";
        DetailItemIdConfig[DetailItemIdConfig["room2_JR006"] = 117] = "room2_JR006";
        DetailItemIdConfig[DetailItemIdConfig["room2_JR007"] = 118] = "room2_JR007";
        DetailItemIdConfig[DetailItemIdConfig["room2_JR008"] = 119] = "room2_JR008";
        DetailItemIdConfig[DetailItemIdConfig["room2_JR009"] = 120] = "room2_JR009";
        DetailItemIdConfig[DetailItemIdConfig["room2_JR010"] = 121] = "room2_JR010";
        DetailItemIdConfig[DetailItemIdConfig["room2_CR001"] = 122] = "room2_CR001";
        DetailItemIdConfig[DetailItemIdConfig["room2_CR002"] = 123] = "room2_CR002";
        DetailItemIdConfig[DetailItemIdConfig["room2_CR003"] = 124] = "room2_CR003";
        DetailItemIdConfig[DetailItemIdConfig["room2_CR004"] = 125] = "room2_CR004";
        DetailItemIdConfig[DetailItemIdConfig["room2_CR005"] = 126] = "room2_CR005";
        DetailItemIdConfig[DetailItemIdConfig["room2_CR006"] = 127] = "room2_CR006";
        DetailItemIdConfig[DetailItemIdConfig["room2_CR007"] = 128] = "room2_CR007";
        DetailItemIdConfig[DetailItemIdConfig["room2_CR008"] = 129] = "room2_CR008";
        DetailItemIdConfig[DetailItemIdConfig["room2_CR009"] = 130] = "room2_CR009";
        DetailItemIdConfig[DetailItemIdConfig["room2_CR010"] = 131] = "room2_CR010";
        DetailItemIdConfig[DetailItemIdConfig["room2_HR001"] = 132] = "room2_HR001";
        DetailItemIdConfig[DetailItemIdConfig["room2_HR002"] = 133] = "room2_HR002";
        DetailItemIdConfig[DetailItemIdConfig["room2_HR003"] = 134] = "room2_HR003";
        DetailItemIdConfig[DetailItemIdConfig["room2_HR004"] = 135] = "room2_HR004";
        DetailItemIdConfig[DetailItemIdConfig["room2_HR005"] = 136] = "room2_HR005";
        DetailItemIdConfig[DetailItemIdConfig["room2_HR006"] = 137] = "room2_HR006";
        DetailItemIdConfig[DetailItemIdConfig["room2_HR007"] = 138] = "room2_HR007";
        DetailItemIdConfig[DetailItemIdConfig["room2_HR008"] = 139] = "room2_HR008";
        DetailItemIdConfig[DetailItemIdConfig["room2_HR009"] = 140] = "room2_HR009";
        DetailItemIdConfig[DetailItemIdConfig["room2_HR010"] = 141] = "room2_HR010";
        DetailItemIdConfig[DetailItemIdConfig["room2_HR011"] = 142] = "room2_HR011";
        DetailItemIdConfig[DetailItemIdConfig["room2_HR012"] = 143] = "room2_HR012";
        DetailItemIdConfig[DetailItemIdConfig["room2_HR013"] = 144] = "room2_HR013";
        DetailItemIdConfig[DetailItemIdConfig["room2_HR014"] = 145] = "room2_HR014";
        DetailItemIdConfig[DetailItemIdConfig["room2_HR015"] = 146] = "room2_HR015";
        DetailItemIdConfig[DetailItemIdConfig["room2_HR016"] = 147] = "room2_HR016";
    })(DetailItemIdConfig || (DetailItemIdConfig = {}));
    var DetailItemIdConfig$1 = DetailItemIdConfig;

    class SoundManager {
        static playEffect(url) {
            Laya.SoundManager.playSound(url);
        }
        static playBgm(url) {
            Laya.SoundManager.playMusic(url);
        }
        static stopBgm() {
            Laya.SoundManager.stopMusic();
        }
        static playPB(url) {
            this.soundPB = Laya.SoundManager.playSound(url);
            this.togglePB(this.flagPlayPB);
        }
        static togglePB(flag) {
            if (flag == undefined) {
                this.flagPlayPB = !this.flagPlayPB;
            }
            else {
                this.flagPlayPB = flag;
            }
            if (!this.soundPB) {
                return;
            }
            if (this.flagPlayPB) {
                this.soundPB.resume();
            }
            else {
                this.soundPB.pause();
            }
        }
    }
    SoundManager.flagPlayPB = true;

    class Oprate3dTool {
        static get events() {
            let config = Scene3dConfig.getConfigByName(this.sceneName);
            return config.events;
        }
        static init3d(scene3d, wrap3d, sceneName) {
            this.sceneName = sceneName;
            GameManager.currentScene = sceneName;
            this.scene3d = scene3d;
            this.wrap3d = wrap3d;
            Laya.stage.offAllCaller(this);
            EventManager.unSub(this);
            this.wrap3d.offAllCaller(this);
            Laya.timer.clearAll(this);
            console.log("off");
            EventManager.pub("game/updateScene");
            this.spBlank = new Laya.Sprite3D();
            this.scene3d.addChild(this.spBlank);
            this.peopleWrap = this.scene3d.getChildByName("people");
            this.people = this.peopleWrap.getComponent(Laya.CharacterController);
            if (GameManager.currentScene == "testMove") {
                if (this.people) {
                    this.people.destroy();
                }
            }
            else if (!this.people) {
                this.people = this.peopleWrap.addComponent(Laya.CharacterController);
                var sphereShape = new Laya.CapsuleColliderShape(0.1, 1.8, 1);
                this.people.ccdMotionThreshold = 0.00000001;
                sphereShape.localOffset = new Laya.Vector3(0, -0.9, 0);
                this.people.colliderShape = sphereShape;
            }
            this.peopleWrap.transform.position.y = 0.7;
            this.movePeople(0, 0, 0);
            this.camera3d = this.peopleWrap.getChildByName("Main Camera");
            this.camera3d.nearPlane = 0.01;
            if (!this.camera3d) {
                this.camera3d = this.scene3d.getChildByName("Main Camera");
            }
            this.camera3d.fieldOfView = +Utils.getQueryVariable("cameView") || 40;
            this.camera3d.enableHDR = false;
            EventManager.sub("d3/updateFrame", this, e => {
                if (UIManager.flagDialogOpened) {
                    return;
                }
                this.checkMouseAndKeyboardByFrame();
            });
            this.wrap3d.on(Laya.Event.MOUSE_MOVE, this, e => {
                if (this.flagTouchMoving) {
                    return;
                }
                let point = new Laya.Vector2();
                point.x = e.stageX;
                point.y = e.stageY;
                let ray = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3());
                let outHitResult = new Laya.HitResult();
                this.camera3d.viewportPointToRay(point, ray);
                this.scene3d.physicsSimulation.rayCast(ray, outHitResult, 999999, Laya.Physics3DUtils.COLLISIONFILTERGROUP_DEFAULTFILTER, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1);
                this.hightlightList.forEach(mat1 => {
                    if (mat1) {
                        mat1.albedoIntensity = 1;
                    }
                });
                this.hightlightList = [];
                if (outHitResult.succeeded) {
                    let owner = outHitResult.collider
                        .owner;
                    let nodeName = owner["nodeName"];
                    let handlerData = this.events[nodeName];
                    if (handlerData && handlerData.method) {
                        let mat = owner.meshRenderer.material;
                        if (handlerData.lightNode) {
                            let lightNode = Utils.findChildByName(Oprate3dTool.scene3d, handlerData.lightNode);
                            mat = lightNode.meshRenderer
                                .material;
                        }
                        UIManager.changePointer("pointer");
                        mat.albedoIntensity = 2;
                        this.hightlightList.push(mat);
                    }
                    else {
                        UIManager.changePointer("");
                    }
                }
                else {
                    UIManager.changePointer("");
                }
            });
            this.wrap3d.on(Laya.Event.MOUSE_UP, this, e => {
                if (this.flagTouchMoving) {
                    return;
                }
                let point = new Laya.Vector2();
                point.x = e.stageX;
                point.y = e.stageY;
                let ray = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3());
                let outHitResult = new Laya.HitResult();
                this.camera3d.viewportPointToRay(point, ray);
                this.scene3d.physicsSimulation.rayCast(ray, outHitResult, 999999, Laya.Physics3DUtils.COLLISIONFILTERGROUP_DEFAULTFILTER, Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1);
                let flagTrigerClu = false;
                if (outHitResult.succeeded) {
                    let nodeName = outHitResult.collider.owner["nodeName"];
                    console.log(nodeName, 'nodeNamenodeNamenodeName');
                    let handlerData = this.events[nodeName];
                    if (handlerData) {
                        let handler = new Laya.Handler(handlerData.caller, handlerData.method);
                        flagTrigerClu = true;
                        handler.runWith(outHitResult.collider.owner);
                    }
                }
                SoundManager.playEffect(`sound/${flagTrigerClu ? "find" : "err"}.mp3`);
            });
            this.wrap3d.on(Laya.Event.MOUSE_DOWN, this, e => {
                this.lastMousePos = new Laya.Point(Laya.MouseManager.instance.mouseX, Laya.MouseManager.instance.mouseY);
            });
            this.wrap3d.on(Laya.Event.MOUSE_OUT, this, e => {
                this.lastMousePos = null;
                Laya.timer.once(300, this, e => {
                    this.flagTouchMoving = false;
                });
            });
            this.wrap3d.on(Laya.Event.MOUSE_UP, this, e => {
                this.lastMousePos = null;
                Laya.timer.once(300, this, e => {
                    this.flagTouchMoving = false;
                });
            });
            let config = Scene3dConfig.getConfigByName(GameManager.currentScene);
            if (config.events) {
                for (let key in config.events) {
                    let nodePath = config.events[key].nodeName;
                    let item = Utils.findChildByName(this.scene3d, nodePath);
                    if (item) {
                        item["nodeName"] = key;
                        console.log(key);
                        let collider = item.getComponent(Laya.PhysicsCollider);
                        console.log('有碰撞体');
                        if (!collider) {
                            collider = item.addComponent(Laya.PhysicsCollider);
                            let physhape = new Laya.MeshColliderShape();
                            if (item.meshFilter) {
                                physhape.mesh = item.meshFilter.sharedMesh;
                            }
                            else {
                                console.log(item, name);
                            }
                            collider.colliderShape = physhape;
                        }
                        collider.collisionGroup =
                            Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1;
                    }
                }
            }
        }
        static checkMouseAndKeyboardByFrame() {
            if (!GameManager.flagCanMove) {
                return;
            }
            let mousePos = new Laya.Point(Laya.MouseManager.instance.mouseX, Laya.MouseManager.instance.mouseY);
            let moveRatio = +Utils.getQueryVariable("cameMoveStep") || 0.0006;
            let peopleWrapRotateY = 0;
            let cameraRotateX = 0;
            if (this.lastMousePos) {
                let offsetX = mousePos.x - this.lastMousePos.x;
                let offsetY = mousePos.y - this.lastMousePos.y;
                if (Math.abs(offsetX) > 4 || Math.abs(offsetY) > 4) {
                    this.flagTouchMoving = true;
                }
                cameraRotateX -= offsetY * moveRatio;
                peopleWrapRotateY -= offsetX * moveRatio;
                this.lastMousePos = new Laya.Point(Laya.MouseManager.instance.mouseX, Laya.MouseManager.instance.mouseY);
            }
            let moveData = new Laya.Vector3();
            let { x, y, z } = moveData;
            let stepLen = +Utils.getQueryVariable("stepLen") || 0.03;
            let downW = GameManager.downW || Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.W);
            let downA = GameManager.downA || Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.A);
            let downS = GameManager.downS || Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.S);
            let downD = GameManager.downD || Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.D);
            if (downW) {
                z += stepLen;
            }
            if (downS) {
                z -= stepLen;
            }
            if (downA) {
                if (GameManager.modeAd == 1) {
                    x += stepLen;
                }
                else {
                    peopleWrapRotateY += 14 * moveRatio;
                }
            }
            if (downD) {
                if (GameManager.modeAd == 1) {
                    x -= stepLen;
                }
                else {
                    peopleWrapRotateY -= 14 * moveRatio;
                }
            }
            this.camera3d.transform.rotate(new Laya.Vector3(cameraRotateX, 0, 0), true);
            this.peopleWrap.transform.rotate(new Laya.Vector3(0, peopleWrapRotateY, 0), false);
            if (x || y || z) {
                this.spBlank.transform.rotation = this.peopleWrap.transform.rotation;
                this.spBlank.transform.position = new Laya.Vector3(0, 0, 0);
                this.spBlank.transform.translate(new Laya.Vector3(x, y, z), true);
                let posRes = this.spBlank.transform.position;
                this.movePeople(posRes.x, posRes.y, posRes.z);
            }
            else {
                this.movePeople(0, 0, 0);
            }
            if (!this.peopleWrap.getChildByName("Main Camera")) {
                this.camera3d.transform.position = this.peopleWrap.transform.position;
                this.camera3d.transform.rotation = new Laya.Quaternion(0, this.peopleWrap.transform.rotation.y, 0);
            }
            this.camera3d.transform.localPositionY = Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.V)
                ? -0.7
                : 0;
        }
        static peopleToggleDown() {
            this.flagIsDown = !this.flagIsDown;
            console.log(this.flagIsDown, "蹲下");
            this.camera3d.transform.localPositionY = this.flagIsDown ? -0.7 : 0;
        }
        static movePeople(x, y, z) {
            if (GameManager.currentScene != "testMove") {
                this.movePos = new Laya.Vector3(x, y, z);
                this.people.move(this.movePos);
            }
            else {
                this.peopleWrap.transform.translate(new Laya.Vector3(x / 2, y / 2, z / 2), false);
            }
        }
    }
    Oprate3dTool.hightlightList = [];
    Oprate3dTool.flagTouchMoving = false;
    Oprate3dTool.sceneName = "";
    Oprate3dTool.flagIsDown = false;
    Oprate3dTool.movePos = new Laya.Vector3(0, 0, 0);

    class SceneKill {
        static clickLJTGaizi() {
            return __awaiter(this, void 0, void 0, function* () {
                this.flagGaiOpen = !this.flagGaiOpen;
                let obj = Utils.findChildByName(Oprate3dTool.scene3d, Scene3dConfig.getNodeNameBySceneAndType("RoomKill", "gaizi"));
                Utils.toggle3dOpen(obj, 4, -120);
            });
        }
        static clickJSQ() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.anfajsq,
                    key: "anfajsq",
                    title: "加湿器",
                    content: "",
                    img: "book1/KR001.png",
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig1.getDetail("jiashiqi")
                }
            ]);
        }
        static clickShouPa() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.shoupa,
                    key: "shoupa",
                    title: "手帕",
                    content: "",
                    img: "book1/KR006.png",
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig1.getDetail("shoupa")
                }
            ]);
        }
        static clickKnife() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.killerKnife,
                    key: "killerKnife",
                    title: "凶器",
                    content: "",
                    img: "book1/KR005.png",
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig1.getDetail("xiongqi")
                }
            ]);
        }
        static clickDanGao() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.dangao,
                    key: "dangao",
                    title: "蛋糕",
                    content: "",
                    img: "book1/KR004.png",
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig1.getDetail("dangao")
                }
            ]);
        }
        static clickJiu() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.jiu,
                    key: "jiu",
                    title: "餐桌上的酒瓶",
                    content: "",
                    img: "book1/KR003.png",
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig1.getDetail("hjp")
                }
            ]);
        }
        static clickLJT() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.anfalajitong,
                    key: "anfalajitong",
                    title: "走廊的垃圾桶",
                    content: "",
                    img: "book1/KR002.png",
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig1.getDetail("yaop1")
                }
            ]);
        }
    }
    SceneKill.flagGaiOpen = false;

    class Scene1 {
        static desktop() { }
        static clickGuizi1() {
            return __awaiter(this, void 0, void 0, function* () {
                let guizi1 = Utils.findChildByName(Oprate3dTool.scene3d, Scene3dConfig.getNodeNameBySceneAndType("RoomAnnie", "对象020"));
                Utils.toggle3dOpen(guizi1, 5, -90);
            });
        }
        static clickGuizi2() {
            return __awaiter(this, void 0, void 0, function* () {
                let guizi1 = Utils.findChildByName(Oprate3dTool.scene3d, Scene3dConfig.getNodeNameBySceneAndType("RoomAnnie", "对象021"));
                Utils.toggle3dOpen(guizi1, 5, 90);
            });
        }
        static clickYPT() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.ytp,
                    key: "ytp",
                    title: "药品台",
                    content: "",
                    img: "book1/yaowu.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickPaint() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.paintPaper,
                    key: "paintPaper",
                    title: "奇怪的画",
                    content: "看起来像是一串密码",
                    img: "book1/AR017.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static miyao() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.miyao,
                    key: "miyao",
                    title: "强效迷药",
                    content: "",
                    img: "book1/AR005.jpg",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickBox() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.boxPaper,
                    key: "boxPaper",
                    title: "购买的迷药盒子和说明书",
                    content: "收件人：Annie  说明书：強效迷药，不完全溶于水，会形成白色晶体 。 雾化吸入，食用或者引用会导致1小时的昏迷。体质不同会导致昏迷时间不同",
                    img: "book1/AR006.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static shuomingshu() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.shuomingshu,
                    key: "shuomingshu",
                    title: "强效迷药说明书",
                    content: "",
                    img: "book1/AR006.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static xiaopiao() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.xiaopiao,
                    key: "xiaopiao",
                    title: "强效迷药小票",
                    content: "",
                    img: "book1/AR007.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickComputer(target) {
            UIManager.openModal("modalOperate/scene1/Computer1.scene", false, {}, true);
        }
        static clickPrinterPaper(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.scene1PrinterPaper,
                    key: "scene1PrinterPaper",
                    title: "打印机里的请帖",
                    content: "请帖内容：”被盗的设计图是赝品，5月3日来研究所，让我们一起见证还原后的地宫设计图！“",
                    img: "book1/AR008.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickRubish(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.rubishPaper,
                    key: "rubishPaper",
                    title: "垃圾桶里丢弃的纸团",
                    content: "小纸条可以从纸团状态展开，内容：“我知道你是谁！也知道你要干什么，19：00来别墅小树林，我们说清楚！”",
                    img: "book1/AR016.jpg",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
    }
    Scene1.flagGuizi2Opened = false;

    class Scene1SafeBox {
        static toggleBox() {
            return __awaiter(this, void 0, void 0, function* () {
                this.banIsOpen = !this.banIsOpen;
                yield Utils.asyncTween(this.ban.transform.position, {
                    x: this.banIsOpen ? -1.932 : -2.470968,
                    update: new Laya.Handler(this.ban, e => {
                        this.ban.transform.position = this.ban.transform.position;
                    })
                }, 200);
            });
        }
        static moveBox(target) {
            return __awaiter(this, void 0, void 0, function* () {
                this.ban = target;
                let ban = Utils.findChildByName(Oprate3dTool.scene3d, Scene3dConfig.getNodeNameBySceneAndType("RoomAnnie", "Box023"));
                if (ban["flagOpen"]) {
                    let targetDoor = Utils.findChildByName(Oprate3dTool.scene3d, "Annie_Dark.11473");
                    Utils.toggle3dOpen(targetDoor, 6, 90, 200, false);
                }
                Utils.toggle3dOpen(ban, 1, -0.6);
            });
        }
        static clickSafeBox() {
            let target = Utils.findChildByName(Oprate3dTool.scene3d, "Annie_Dark.11473");
            if (this.countWrong >= 2) {
                UIManager.showMessage("错误两次，密码箱已锁死");
                return;
            }
            if (this.flagOpened) {
                Utils.toggle3dOpen(target, 6, 90, 200);
                return;
            }
            UIManager.openModal("modalOperate/scene1/SafeBox.scene", true, {
                onWrong: new Laya.Handler(this, e => {
                    this.countWrong++;
                    return this.countWrong;
                }),
                onSure: new Laya.Handler(this, (e) => __awaiter(this, void 0, void 0, function* () {
                    this.flagOpened = true;
                    Utils.toggle3dOpen(target, 6, 90, 200);
                }))
            }, true);
        }
    }
    Scene1SafeBox.banIsOpen = false;
    Scene1SafeBox.flagOpened = false;
    Scene1SafeBox.countWrong = 0;

    class RoomHarris {
        static chouti1(target) {
            Utils.toggle3dOpen(target, 3, -0.226);
        }
        static choutiLeft(target) {
            Utils.toggle3dOpen(target, 3, 0.3);
        }
        static choutiRight(target) {
            Utils.toggle3dOpen(target, 3, 0.3);
        }
        static choutiLeftInner() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.harrisLetter1,
                    key: "harrisLetter1",
                    title: "床头柜上",
                    content: "教授写的信",
                    img: "book1/HR004.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickPocket(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.harrisPocket,
                    key: "harrisPocket",
                    title: "床头柜上",
                    content: "Harris的钱包",
                    img: "book1/HR008.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickBag(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.harrisBag,
                    key: "harrisBag",
                    title: "公文包",
                    content: "博物馆关于新的地下宫殿的考古发现的展览计划",
                    img: "book1/HR002.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickTicket(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.harrisTicket,
                    key: "harrisTicket",
                    title: "一封邮件，寄件人是考古",
                    content: "一封邮件，寄件人是考古",
                    img: "book1/HR011.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static toggleXLX(target) {
            Utils.toggle3dOpen(target, 4, 90);
        }
        static clickUnderBed(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.harrisLetter2,
                    key: "harrisLetter2",
                    title: "床底下的信",
                    content: "",
                    img: "book1/HR001.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickBagBig(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.harrisXingli,
                    key: "harrisXingli",
                    title: "政府传真",
                    content: "政府传真",
                    img: "book1/HR002.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickRubish(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.harrisRubish1,
                    key: "harrisRubish1",
                    title: "政府对博物馆的传真",
                    content: "政府对博物馆的传真",
                    img: "book1/HR003.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickPhone1(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.phoneHarris,
                    key: "phoneHarris",
                    title: "被考古拒绝继续挖掘项目",
                    content: "被考古拒绝继续挖掘项目",
                    img: "book1/HR005.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickPhone2(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.phoneHellen,
                    key: "phoneHellen",
                    title: "Helen的手机",
                    content: "Helen的手机",
                    img: "book1/HR007.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickCard(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.harrisId,
                    key: "harrisId",
                    title: "Harris的ID",
                    content: "Harris的ID",
                    img: "book1/HR010.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
    }

    class Scene1Desk {
        static clickDrawer1Papaer(target) {
            target.active = false;
        }
        static clickDrawer2Papaer(target) {
            target.active = false;
        }
        static clickKey(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.scene1DeskKey,
                    key: "scene1DeskKey",
                    title: "钥匙",
                    content: "在书架的角落上 放着一枚钥匙",
                    img: "book1/AR003.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickMYJDJ(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.myjdj,
                    key: "myjdj",
                    title: "强效迷药解毒剂",
                    content: "强效迷药解毒剂",
                    img: "book1/AR001.png",
                    sceneFrom: GameManager.currentScene,
                }
            ]);
        }
        static toggleDrawer1() {
            return __awaiter(this, void 0, void 0, function* () {
                this.drawer1Opened = !this.drawer1Opened;
                yield Utils.asyncTween(this.drawer1.transform.localPosition, {
                    z: this.drawer1Opened ? -1.6 : -1.260977,
                    update: new Laya.Handler(this.drawer1, e => {
                        this.drawer1.transform.localPosition = this.drawer1.transform.localPosition;
                    })
                }, 200);
            });
        }
        static clickDrawer1() {
            return __awaiter(this, void 0, void 0, function* () {
                this.drawer1 = Utils.findChildByName(Oprate3dTool.scene3d, "Annie_Dark.组2143178433");
                if (this.flagLocked1) {
                    if (GameManager.selectedDetailItem &&
                        GameManager.selectedDetailItem.id == DetailItemIdConfig$1.scene1DeskKey) {
                        this.flagLocked1 = false;
                    }
                    else {
                        UIManager.showMessage("需要钥匙打开此抽屉");
                        return;
                    }
                }
                yield this.toggleDrawer1();
            });
        }
        static clickDrawer1Inner() {
            return __awaiter(this, void 0, void 0, function* () {
                UIManager.showDetail([
                    {
                        id: DetailItemIdConfig$1.scene1DrivePaper,
                        key: "scene1DrivePaper",
                        title: "驾照",
                        content: "annie的驾照",
                        img: "book1/AR009.png",
                        sceneFrom: GameManager.currentScene
                    }
                ]);
            });
        }
        static toggleDrawer2() {
            return __awaiter(this, void 0, void 0, function* () {
                this.drawer2Opened = !this.drawer2Opened;
                yield Utils.asyncTween(this.drawer2.transform.localPosition, {
                    y: this.drawer2Opened ? 0.456 : 0.11,
                    update: new Laya.Handler(this.drawer2, e => {
                        this.drawer2.transform.localPosition = this.drawer2.transform.localPosition;
                    })
                }, 200);
            });
        }
        static clickDrawer2() {
            return __awaiter(this, void 0, void 0, function* () {
                this.drawer2 = Utils.findChildByName(Oprate3dTool.scene3d, "333.组001.Box002");
                if (this.flagLocked2) {
                    UIManager.openFullModal("scene/SceneDrag.scene", false, {
                        onSuccess() {
                            Scene1Desk.toggleDrawer2();
                        }
                    });
                    return;
                }
                yield this.toggleDrawer2();
            });
        }
        static clickDrawer2Inner() {
            return __awaiter(this, void 0, void 0, function* () {
                UIManager.showDetail([
                    {
                        id: DetailItemIdConfig$1.scene1JYSMS,
                        key: "scene1JYSMS",
                        title: "强效迷药解毒剂说明书",
                        content: "一摞文件 在文件上方 放着两瓶喝过的解药和解药说明书 ",
                        img: "book1/AR002.png",
                        sceneFrom: GameManager.currentScene
                    }
                ]);
            });
        }
    }
    Scene1Desk.drawer1Opened = false;
    Scene1Desk.flagLocked1 = false;
    Scene1Desk.drawer2Opened = false;
    Scene1Desk.flagLocked2 = true;

    class RoomJane {
        static clickDianNao() {
            UIManager.openModal("modalOperate/scene1/JaneComputer1.scene", false, {}, true);
        }
        static clickPhone1(target) {
            UIManager.openModal("modalOperate/jane/PhoneJane.scene", false, {}, true);
        }
        static clickDrawer1(target) {
            let obj = Utils.findChildByName(Oprate3dTool.scene3d, "1.组001");
            Utils.toggle3dOpen(obj, 3, -0.28);
        }
        static clickKFJL(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.kfjl,
                    key: "kfjl",
                    title: "开房记录",
                    content: "",
                    img: "book1/JR101.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickTHJL(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.tonghuajilu,
                    key: "tonghuajilu",
                    title: "通话记录",
                    content: "",
                    img: "book1/JR105.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickJianLi(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.jianli,
                    key: "jianli",
                    title: "简历",
                    content: "",
                    img: "book1/JR106.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickRiJi(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.riji,
                    key: "riji",
                    title: "日记",
                    content: "",
                    img: "book1/JR108.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickZDJ(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.zdj,
                    key: "zdj",
                    title: "镇定剂",
                    content: "",
                    img: "book1/JR107.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static chouti1(target) {
            Utils.toggle3dOpen(target, 5, 90);
        }
        static clickDrawer2(target) {
            let obj = Utils.findChildByName(Oprate3dTool.scene3d, "1.组002");
            Utils.toggle3dOpen(obj, 3, -0.28);
        }
    }

    class RoomJoe {
        static clickDianNao() {
            UIManager.openModal("modalOperate/scene1/joeComputer1.scene", false, {}, true);
        }
        static paper3(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.joeXL,
                    key: "joeXL",
                    title: "joeXL",
                    content: "",
                    img: "book1/JR010.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static joeXL(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.joeXL,
                    key: "joeXL",
                    title: "joeXL",
                    content: "",
                    img: "book1/JR010.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static joePaint(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.joePaint,
                    key: "joePaint",
                    title: "joePaint",
                    content: "",
                    img: "book1/JR009.jpg",
                    reportDetail: BookConfig1.getDetail('beiy'),
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static pen(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.joePen,
                    key: "joePen",
                    title: "joePen",
                    content: "",
                    img: "book1/JR008.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static book(target) {
            UIManager.openModal("modalOperate/joe/BookJoe.scene", false, {}, true);
        }
        static chouti1(target) {
            Utils.toggle3dOpen(target, 1, -0.2);
        }
        static chouti2(target) {
            Utils.toggle3dOpen(target, 1, -0.2);
        }
        static gwb(target) {
            Utils.toggle3dOpen(target, 4, 60);
        }
        static paper(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.joePaper,
                    key: "joePaper",
                    title: "joePaper",
                    content: "",
                    img: "book1/JR002.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static phone1(target) {
            UIManager.openModal("modalOperate/joe/PhoneJoe.scene", false, {}, true);
        }
        static jipiao(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.joeTicket,
                    key: "joeTicket",
                    title: "joeTicket",
                    content: "",
                    img: "book1/JR001.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickPhone1(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.janePhone,
                    key: "janePhone",
                    title: "手机记录",
                    content: "",
                    img: "book1/JR011.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
    }

    class RoomLeo {
        static clickPhone2(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.phoneTC1,
                    key: "phoneTC1",
                    title: "phoneTC1",
                    content: "",
                    img: "book1/LR004.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickPhone1(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.phoneTC2,
                    key: "phoneTC2",
                    title: "phoneTC2",
                    content: "",
                    img: "book1/LR005.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static biaokuang(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.biaokuang,
                    key: "biaokuang",
                    title: "沙发边上的侦探小说",
                    content: "",
                    img: "book1/LR010.jpg",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static ztxs(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.ztxs,
                    key: "ztxs",
                    title: "沙发边上的侦探小说",
                    content: "",
                    img: "book1/LR006.jpg",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickLJT2(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.ljt4,
                    key: "ljt4",
                    title: "垃圾桶里的迷药盒子",
                    content: "",
                    img: "book1/LR008.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickLJT(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.ljt3,
                    key: "ljt3",
                    title: "垃圾桶里的迷药盒子说明书",
                    content: "",
                    img: "book1/LR009.jpg",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickTicket(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.jipiao,
                    key: "jipiao",
                    title: "抽屉里的机票",
                    content: "",
                    img: "book1/LR007.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static chouti1(target) {
            Utils.toggle3dOpen(target, 3, 0.2);
        }
        static underSofa(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.underSofa,
                    key: "underSofa",
                    title: "沙发下面的文件",
                    content: "",
                    img: "book1/LR003.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static guizi(target) {
            Utils.toggle3dOpen(target, 5, -90);
        }
        static gjx(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.gjx,
                    key: "gjx",
                    title: "工具箱",
                    content: "",
                    reportDetail: BookConfig1.getDetail("zhenguan"),
                    img: "book1/LR002.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickPaper(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.dgkfbd,
                    key: "dgkfbd",
                    title: "地宫开发报道",
                    content: "",
                    img: "book1/LR001.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
    }

    class RoomWilson {
        static xlx(target) {
            Utils.toggle3dOpen(target, 4, 90);
        }
        static drawerRightTop(target) {
            Utils.toggle3dOpen(target, 1, -0.2);
        }
        static computer() {
            UIManager.openModal("modalOperate/scene1/WilsonComputer1.scene", false, {}, true);
        }
        static phone1() {
            UIManager.openModal("modalOperate/wilson/PhoneWhilson.scene", false, {
                imgList: ["book1/WR009.png"],
                password: 2633,
                callBack: new Laya.Handler(this, e => {
                    UIManager.showDetail([
                        {
                            id: DetailItemIdConfig$1.phoneWilson,
                            key: "phoneWilson",
                            title: "phoneWilson",
                            content: "",
                            img: "book1/WR009.png",
                            sceneFrom: GameManager.currentScene
                        }
                    ]);
                })
            }, true);
        }
        static pmt(target) {
            UIManager.openFullModal("modalOperate/wilson/WilsonPMT.scene");
        }
        static yaoshi(target) {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.yaoshi,
                    key: "yaoshi",
                    title: "gun",
                    content: "",
                    img: "book1/WR005.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static guizi4(target) {
            Utils.toggle3dOpen(target, 5, 90);
            if (!target["flagOpen"]) {
                let bxgDoor = Utils.findChildByName(Oprate3dTool.scene3d, "model4.对象16666689");
                Utils.toggle3dOpen(bxgDoor, 5, 90, 200, false);
            }
        }
        static guizi5(target) {
            Utils.toggle3dOpen(target, 5, -90);
        }
        static baoxianguiDoor(target) {
            let guizi5 = Utils.findChildByName(Oprate3dTool.scene3d, "model4.对象16666692");
            let guizi4 = Utils.findChildByName(Oprate3dTool.scene3d, "model4.对象16666693");
            if (!guizi5["flagOpen"] || !guizi4["flagOpen"]) {
                return;
            }
            Utils.toggle3dOpen(target, 5, 90);
        }
        static drawer4(target) {
            let obj = Utils.findChildByName(Oprate3dTool.scene3d, "model4.组013");
            Utils.toggle3dOpen(obj, 3, 0.2);
        }
        static drawer3(target) {
            let obj = Utils.findChildByName(Oprate3dTool.scene3d, "model4.组013 (1)");
            Utils.toggle3dOpen(obj, 3, -0.2);
        }
        static clickDrawer1(target) {
            Utils.toggle3dOpen(target, 1, -0.2);
        }
        static gun() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.gun,
                    key: "gun",
                    title: "gun",
                    content: "",
                    img: "book1/WR011.jpg",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static knife() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.knife,
                    key: "knife",
                    title: "刀",
                    content: "",
                    img: "book1/WR012.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static baozhi() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.baozhi,
                    key: "baozhi",
                    title: "报纸",
                    content: "",
                    img: "book1/WR013.jpg",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static biji() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.biji,
                    key: "biji",
                    title: "笔记本",
                    content: "",
                    img: "book1/WR008.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static kfbg() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.kfbg,
                    key: "kfbg",
                    title: "开发报告",
                    content: "",
                    img: "book1/WR007.png",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static tzbg() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.tzbg,
                    key: "tzbg",
                    title: "投资报告",
                    content: "",
                    img: "book1/WR004.jpg",
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static jingzi(target) {
            Utils.toggle3dOpen(target, 1, 0.8);
        }
    }

    class BookConfig1 {
        static getDetail(type) {
            return this.detailList[type][DataLang.lang];
        }
    }
    BookConfig1.sceneList = [
        {
            sceneName: "RoomKill",
            sceneId: 3,
            label: "Crime scene",
            url: `room_book1/LayaScene_RoomKill/Conventional/RoomKill.ls`,
            events: {
                gaizi: {
                    caller: SceneKill,
                    method: SceneKill.clickLJTGaizi,
                    nodeName: "垃圾桶.model 1"
                },
                suipian3: {
                    caller: SceneKill,
                    method: SceneKill.clickLJT,
                    nodeName: "yaoping-xg.Circle001"
                },
                suipian2: {
                    caller: SceneKill,
                    method: SceneKill.clickLJT,
                    nodeName: "yaoping-xg.Erb_3_262_114"
                },
                suipian1: {
                    caller: SceneKill,
                    method: SceneKill.clickLJT,
                    nodeName: "yaoping-xg.Erb_3_262_145"
                },
                suipian: {
                    caller: SceneKill,
                    method: SceneKill.clickLJT,
                    nodeName: "yaoping (1).Erb_3_262_114"
                },
                suipian5: {
                    caller: SceneKill,
                    method: SceneKill.clickLJT,
                    nodeName: "yaoping (1).Erb_3_262_145"
                },
                jsq: {
                    caller: SceneKill,
                    method: SceneKill.clickJSQ,
                    nodeName: "anfaxianchang.object_137"
                },
                jiu: {
                    caller: SceneKill,
                    method: SceneKill.clickJiu,
                    nodeName: "jiu.eee330176"
                },
                shoupa: {
                    caller: SceneKill,
                    method: SceneKill.clickShouPa,
                    nodeName: "anfaxianchang.Arch30_025_00"
                },
                dangao: {
                    caller: SceneKill,
                    method: SceneKill.clickDanGao,
                    nodeName: "anfaxianchang.Line002"
                },
                knife: {
                    caller: SceneKill,
                    method: SceneKill.clickKnife,
                    nodeName: "anfaxianchang.noz"
                }
            }
        },
        {
            sceneName: "RoomAnnie",
            sceneId: 5,
            label: "Annies's office",
            url: `room_book1/LayaScene_RoomAnnie/Conventional/RoomAnnie.ls`,
            events: {
                desktop: {
                    caller: Scene1,
                    nodeName: "desktop"
                },
                archmodels101_007_006: {
                    caller: Scene1,
                    method: Scene1.clickYPT,
                    nodeName: "Annie_Dark.archmodels101_007_006"
                },
                QuadPatch002: {
                    caller: Scene1,
                    method: Scene1.clickPaint,
                    nodeName: "Annie_Dark.QuadPatch002"
                },
                对象020: {
                    caller: Scene1,
                    method: Scene1.clickGuizi1,
                    nodeName: "333.对象020"
                },
                对象021: {
                    caller: Scene1,
                    method: Scene1.clickGuizi2,
                    nodeName: "333.对象021"
                },
                ChamferBox002: {
                    caller: Scene1,
                    method: Scene1.miyao,
                    nodeName: "333.ChamferBox002"
                },
                Rectangle110: {
                    caller: Scene1,
                    method: Scene1.shuomingshu,
                    nodeName: "333.Rectangle110"
                },
                xiaopiao: {
                    caller: Scene1,
                    method: Scene1.xiaopiao,
                    nodeName: "333.Rectangle110 (1)"
                },
                AM156_09_17: {
                    caller: Scene1,
                    nodeName: "Annie_Dark.AM156_09_17",
                    method: Scene1.clickComputer
                },
                Box023: {
                    caller: Scene1SafeBox,
                    nodeName: "333.组001.Box023",
                    method: Scene1SafeBox.moveBox
                },
                cgaxis_models_65_22_04: {
                    caller: Scene1Desk,
                    nodeName: "Annie_Dark.cgaxis_models_65_22_04",
                    method: Scene1Desk.clickKey
                },
                Box020: {
                    caller: Scene1Desk,
                    nodeName: "Annie_Dark.组2143178433.Box020",
                    method: Scene1Desk.clickDrawer1
                },
                QuadPatch005: {
                    caller: Scene1Desk,
                    nodeName: "Annie_Dark.组2143178433.QuadPatch005",
                    method: Scene1Desk.clickDrawer1Inner
                },
                miyao2: {
                    caller: Scene1Desk,
                    nodeName: "333.组001.Box002.model 6",
                    method: Scene1Desk.clickMYJDJ
                },
                drawer2Inner: {
                    caller: Scene1Desk,
                    nodeName: "333.组001.Box002.对象025",
                    method: Scene1Desk.clickDrawer2Inner
                },
                Box002: {
                    caller: Scene1Desk,
                    nodeName: "333.组001.Box002",
                    method: Scene1Desk.clickDrawer2
                },
                QuadPatch004: {
                    caller: Scene1,
                    nodeName: "Annie_Dark.QuadPatch004",
                    method: Scene1.clickPrinterPaper
                },
                Circle002: {
                    caller: Scene1,
                    nodeName: "Annie_Dark.Circle002",
                    method: Scene1.clickRubish
                },
                "11473": {
                    caller: Scene1SafeBox,
                    nodeName: "Annie_Dark.11473",
                    method: Scene1SafeBox.clickSafeBox
                }
            }
        },
        {
            sceneName: "RoomHarris",
            sceneId: 1,
            label: "Harris's office",
            url: `room_book1/LayaScene_RoomHarris/Conventional/RoomHarris.ls`,
            events: {
                desk1: {
                    caller: RoomHarris,
                    nodeName: "test.SH设计660qq973390767"
                },
                desk2: {
                    caller: RoomHarris,
                    nodeName: "1.model"
                },
                desk3: {
                    caller: RoomHarris,
                    nodeName: "1.model (1)"
                },
                phone2: {
                    caller: RoomHarris,
                    method: RoomHarris.clickPhone2,
                    nodeName: "test.对象010"
                },
                phone1: {
                    caller: RoomHarris,
                    method: RoomHarris.clickPhone1,
                    nodeName: "1.model 1.对象009"
                },
                chouti1: {
                    caller: RoomHarris,
                    method: RoomHarris.chouti1,
                    nodeName: "1.model 1"
                },
                choutiLeft: {
                    caller: RoomHarris,
                    method: RoomHarris.choutiLeft,
                    nodeName: "1.model 2"
                },
                choutiRight: {
                    caller: RoomHarris,
                    method: RoomHarris.choutiRight,
                    nodeName: "1.model 2 (1)"
                },
                leftInner: {
                    caller: RoomHarris,
                    method: RoomHarris.choutiLeftInner,
                    nodeName: "1.model 2.QuadPatch001"
                },
                underBed: {
                    caller: RoomHarris,
                    method: RoomHarris.clickUnderBed,
                    nodeName: "test.QuadPatch001 (1)"
                },
                xlxInner: {
                    caller: RoomHarris,
                    method: RoomHarris.clickBagBig,
                    nodeName: "model.QuadPatch003"
                },
                xlx: {
                    caller: RoomHarris,
                    method: RoomHarris.toggleXLX,
                    nodeName: "model 1"
                },
                ticket: {
                    caller: RoomHarris,
                    method: RoomHarris.clickTicket,
                    nodeName: "1.model 2 (1).QuadPatch002"
                },
                QuadPatch003: {
                    caller: RoomHarris,
                    method: RoomHarris.clickCard,
                    nodeName: "1.model 2 (1).QuadPatch002 (1)"
                },
                Circle002: {
                    caller: RoomHarris,
                    method: RoomHarris.clickRubish,
                    nodeName: "test.Circle002"
                },
                m11137: {
                    caller: RoomHarris,
                    method: RoomHarris.clickBag,
                    nodeName: "test.m11137"
                }
            }
        },
        {
            sceneName: "RoomJane",
            sceneId: 6,
            label: "Jane's office",
            url: `room_book1/LayaScene_RoomJane/Conventional/RoomJane.ls`,
            events: {
                desk: {
                    caller: RoomJane,
                    nodeName: "desk"
                },
                drawer: {
                    caller: RoomJane,
                    method: RoomJane.clickDrawer1,
                    nodeName: "1.组001.model 12"
                },
                dfjl: {
                    caller: RoomJane,
                    method: RoomJane.clickKFJL,
                    nodeName: "1.组001.chemistry491"
                },
                phone1: {
                    caller: RoomJane,
                    method: RoomJane.clickPhone1,
                    nodeName: "1.组001.model 11"
                },
                chouti1: {
                    caller: RoomJane,
                    method: RoomJane.chouti1,
                    nodeName: "1.Box1578963179"
                },
                thjl: {
                    caller: RoomJane,
                    method: RoomJane.clickTHJL,
                    nodeName: "2.chemistry663"
                },
                jianli: {
                    caller: RoomJane,
                    method: RoomJane.clickJianLi,
                    nodeName: "1.chemistry491 (1)"
                },
                chouti2: {
                    caller: RoomJane,
                    method: RoomJane.clickDrawer2,
                    nodeName: "1.组002.model002"
                },
                riji: {
                    caller: RoomJane,
                    method: RoomJane.clickRiJi,
                    nodeName: "1.组002.3"
                },
                zhendingji: {
                    caller: RoomJane,
                    method: RoomJane.clickZDJ,
                    nodeName: "1.Box1578963264"
                },
                diannao: {
                    caller: RoomJane,
                    method: RoomJane.clickDianNao,
                    nodeName: "2.AI36_002_332"
                }
            }
        },
        {
            sceneName: "RoomJoe",
            sceneId: 4,
            label: "Joe's office",
            url: `room_book1/LayaScene_RoomJoe/Conventional/RoomJoe.ls`,
            events: {
                jipiao: {
                    caller: RoomJoe,
                    method: RoomJoe.jipiao,
                    nodeName: "huaxue.chemistry501.chemistry491"
                },
                chouti: {
                    caller: RoomJoe,
                    method: RoomJoe.chouti1,
                    nodeName: "huaxue.chemistry501"
                },
                chouti2: {
                    caller: RoomJoe,
                    method: RoomJoe.chouti2,
                    nodeName: "huaxue.chemistry661"
                },
                phone1: {
                    caller: RoomJoe,
                    method: RoomJoe.phone1,
                    nodeName: "huaxue.chemistry661.model 11"
                },
                paper: {
                    caller: RoomJoe,
                    method: RoomJoe.paper,
                    nodeName: "huaxue.chemistry505"
                },
                gwb: {
                    caller: RoomJoe,
                    method: RoomJoe.gwb,
                    nodeName: "chemistry506"
                },
                book: {
                    caller: RoomJoe,
                    method: RoomJoe.book,
                    nodeName: "huaxue.chemistry505"
                },
                paper3: {
                    caller: RoomJoe,
                    method: RoomJoe.paper,
                    nodeName: "huaxue.chemistry504"
                },
                diannao: {
                    caller: RoomJoe,
                    method: RoomJoe.clickDianNao,
                    nodeName: "huaxue.chemistry504 (1)"
                },
                pen: {
                    caller: RoomJoe,
                    method: RoomJoe.pen,
                    nodeName: "Obj3d66-824416-10-119"
                },
                joePaint: {
                    caller: RoomJoe,
                    method: RoomJoe.joePaint,
                    nodeName: "1.Фоторамка 2"
                },
                joeXL: {
                    caller: RoomJoe,
                    method: RoomJoe.joeXL,
                    nodeName: "1.QuadPatch004"
                }
            }
        },
        {
            sceneName: "RoomLeo",
            sceneId: 7,
            label: "Leo's office",
            url: `room_book1/LayaScene_RoomLeo/Conventional/RoomLeo.ls`,
            events: {
                paper1: {
                    caller: RoomLeo,
                    method: RoomLeo.clickPaper,
                    nodeName: "2.Box01"
                },
                gjx: {
                    caller: RoomLeo,
                    method: RoomLeo.gjx,
                    nodeName: "2.model 1"
                },
                guizi: {
                    caller: RoomLeo,
                    method: RoomLeo.guizi,
                    nodeName: "1.对象4860"
                },
                QuadPatch001: {
                    caller: RoomLeo,
                    method: RoomLeo.underSofa,
                    nodeName: "1.QuadPatch001"
                },
                chouti1: {
                    caller: RoomLeo,
                    method: RoomLeo.chouti1,
                    nodeName: "1.model002"
                },
                ticket: {
                    caller: RoomLeo,
                    method: RoomLeo.clickTicket,
                    nodeName: "1.model002.QuadPatch002"
                },
                ljt: {
                    caller: RoomLeo,
                    method: RoomLeo.clickLJT,
                    nodeName: "1.对象006"
                },
                ljt2: {
                    caller: RoomLeo,
                    method: RoomLeo.clickLJT2,
                    nodeName: "1.Box2131641903"
                },
                ztxs: {
                    caller: RoomLeo,
                    method: RoomLeo.ztxs,
                    nodeName: "1.R1000_SCULPTURAL_CHAISE_LONGUE_005"
                },
                biaokuang: {
                    caller: RoomLeo,
                    method: RoomLeo.biaokuang,
                    nodeName: "2.Фоторамка 2"
                },
                phone1: {
                    caller: RoomLeo,
                    method: RoomLeo.clickPhone1,
                    nodeName: "1.iPhone_Xs_MAX_all_colors_090"
                },
                phone2: {
                    caller: RoomLeo,
                    method: RoomLeo.clickPhone2,
                    nodeName: "1.iPhone_Xs_MAX_all_colors_091"
                }
            }
        },
        {
            sceneName: "RoomWilson",
            sceneId: 2,
            label: "Wilson's room",
            url: `room_book1/LayaScene_RoomWilson/Conventional/RoomWilson.ls`,
            events: {
                phone1: {
                    caller: RoomWilson,
                    method: RoomWilson.phone1,
                    nodeName: "2.model001.AM156_019_63.phone",
                    lightNode: "2.model001.AM156_019_63"
                },
                drawerRightTop: {
                    caller: RoomWilson,
                    method: RoomWilson.drawerRightTop,
                    nodeName: "2.model001"
                },
                drawer1: {
                    caller: RoomWilson,
                    method: RoomWilson.clickDrawer1,
                    nodeName: "2.model002"
                },
                tzbg: {
                    caller: RoomWilson,
                    method: RoomWilson.tzbg,
                    nodeName: "2.model002.QuadPatch003"
                },
                jingzi: {
                    caller: RoomWilson,
                    method: RoomWilson.jingzi,
                    nodeName: "model4.组013 (2).对象16666695"
                },
                kfbg: {
                    caller: RoomWilson,
                    method: RoomWilson.kfbg,
                    nodeName: "model4.arch20_075_10"
                },
                drawer3: {
                    caller: RoomWilson,
                    method: RoomWilson.drawer3,
                    nodeName: "model4.组013 (1).对象16666683"
                },
                biji: {
                    caller: RoomWilson,
                    method: RoomWilson.biji,
                    nodeName: "model4.组013 (1).arch20_069_17"
                },
                baozhi: {
                    caller: RoomWilson,
                    method: RoomWilson.baozhi,
                    nodeName: "model4.Box01"
                },
                drawer4: {
                    caller: RoomWilson,
                    method: RoomWilson.drawer4,
                    nodeName: "model4.组013.对象16666694"
                },
                knife: {
                    caller: RoomWilson,
                    method: RoomWilson.knife,
                    nodeName: "model4.组013.Line002"
                },
                computer: {
                    caller: RoomWilson,
                    method: RoomWilson.computer,
                    nodeName: "model4.对象16666697"
                },
                guizi5: {
                    caller: RoomWilson,
                    method: RoomWilson.guizi5,
                    nodeName: "model4.对象16666692"
                },
                guizi4: {
                    caller: RoomWilson,
                    method: RoomWilson.guizi4,
                    nodeName: "model4.对象16666693"
                },
                baoxianguiDoor: {
                    caller: RoomWilson,
                    method: RoomWilson.baoxianguiDoor,
                    nodeName: "model4.对象16666689"
                },
                yaoshi: {
                    caller: RoomWilson,
                    method: RoomWilson.yaoshi,
                    nodeName: "3.model 1"
                },
                pmt: {
                    caller: RoomWilson,
                    method: RoomWilson.pmt,
                    nodeName: "3.model"
                },
                gun: {
                    caller: RoomWilson,
                    method: RoomWilson.gun,
                    nodeName: "model4.组013.sq"
                },
                xinglixiang: {
                    caller: RoomWilson,
                    method: RoomWilson.xlx,
                    nodeName: "model 1"
                }
            }
        }
    ];
    BookConfig1.detailList = {
        zhenguan: {
            ch: "针管明显被使用过，针头剩余的液体中可以看到有少量晶体残留。晶体样本已经送去化验，但是可能要一周时间才有结果 (Leo’s office柜子里的针头)",
            en: "The syringe is used and there is still some liquid and crystals inside. The liquid has been sent to the lab which takes a week to analyze."
        },
        beiy: {
            ch: "背影无法分辨是谁，身材看起来照片上的人应该是死者Annie (Joe’s Office办公桌上照片)",
            en: "The photo is of a person’s back. It’s hard to tell who is in the photo, but it appears to be Annie."
        },
        yaop1: {
            ch: "发现的3个药瓶中有一瓶已经被使用，另外两瓶还未开封。证据被送往鉴定科化验，但是可能要一周时间才有结果",
            en: "One of the vials is opened and empty. Two of them were unopened. The contents were sent to the lab which takes a week to analyze."
        },
        hjp: {
            ch: "红酒瓶塞上有针头打的细孔，酒里的液体已经送去检验，可能要一周时间才有结果",
            en: "There is a small pinhole in the stopper that appears to be made by a needle. The liquid in the bottle was sent to the lab which takes a week to analyze."
        },
        shoupa: {
            ch: "手帕的血迹是死者Annie的，这看上去像是一块西装袋巾",
            en: "It seems to be a Pocket Square from a suit. The blood on the pocket square is from Annie."
        },
        jiashiqi: {
            ch: "加湿器内部的水中发现有透明的晶体，晶体样本已经送去化验，但是可能要一周时间才有结果",
            en: "There are translucent crystals in the water tap. The crystals have been sent to the lab which takes a week to analyze."
        },
        xiongqi: {
            ch: "凶器的血迹是死者Annie的，且凶器上没有发现任何指纹",
            en: "The blood on the knife is from Annie. There were no fingerprints found on the knife."
        },
        dangao: {
            en: "The cake is untouched, and no suspicious substances were found by the forensic kit. It seems safe.",
            ch: "蛋糕似乎没有被动过，初步检验没有发现任何可以物质。蛋糕已经送去检查，可能要一周时间才有结果"
        }
    };
    BookConfig1.roleList_en = [
        {
            roleName: "Joe",
            job: "chemist",
            sex: "Male",
            age: "30",
            relation: "",
            pangbaiUrl: "sound/Joe_en_en.mp3",
            detail: "30-year-old chemist. Worked with Professor Helen for 5 years after being hired right after graduation. Married to Jane, the historian.",
            id: 1,
            img: "book1/img_role2.png",
            content: `You and Annie have studied archaeology under Helen since you were a graduate student. After a few years, you are like childhood sweethearts in others’ eyes. She tells you that you are not the same and you won’t work out together. Later, you are now married to Jane, a historian. Helen always takes care of Annie who is slightly pedantic. They depend on your chemical knowledge to overcome the problems around the operation, but she is reluctant to give you core information. You despise how Helen and Annie treat you.<br/>
      March<br/>
      With the help of Leo and Jane, you break through the difficulties surrounding the archeological dig, drafted a blueprint of the underground palace, and soon you’ll be able to unlock this ancient underground palace!
      Flowers and applause are close at hand. But suddenly one day, Helen tells you that she plans to abandon the excavation of this archeological project. You pretend to be calm, but your inner world collapses. You seem to see your hard work going to waste. You secretly curse Helen for her ways.<br/>
      You try to persuade the professor with argumentative text messages, but it fails. A dangerous idea flashes through your mind: if the laboratory is destroyed, you can steal the archaeological materials and the palace blueprint then you can go to another team to finish the development.<br/>
      April 1st<br/>
      On March 30th, you and Jane take a 3-day vacation to travel. Before leaving, you add an active gas to the toxic gas in the laboratory. This makes the unstable gas sample even more dangerous. When you return from vacation, you hear that the laboratory exploded. However, Helen died in the explosion and the design of the underground palace also disappeared.
      A competing archaeological institution invites you to work with them. The only requirement is to bring your research report and blueprint of the underground palace. You try to send a text message to ask Annie for the archaeological materials you deserve, but Annie refuses with the professor's wish as an excuse.<br/>
      April 30th<br/>
      After the fire broke out, the laboratory is rebuilt, and you reject the investor's request to continue developing the project. You receive an invitation: "You're cordially invited to the reveal party on May 3rd at the research villa. In honor of the late professor Helen, we will be revealing the updated blueprint. Drinks and food will be provided. The party starts at 8:00 pm, please don't be late.”<br/>
      Apart from the surprise, you quickly realize this gathering could expose you for unintentionally killing Helen. The more you think about it, the more paranoid you become about the situation. So, you decide to go.<br/>
      May 1<br/>
      Although Jane is suspicious of your past relationship with Annie, you still take a flight to the laboratory. You find Annie in her office and she leaves at 2:00 p.m. that day to do errands. You make use of this gap to sneak into her office and find the answers. <br/>
      As you expect, she and a mysterious person are investigating Helen’s death, and they arranged this gathering and bought a humidifier, drugs, and an antidote. You know if you don’t act, it could ruin your career and you would be charged with Helen's death. <br/>
      It’s better to act first: get rid of her, take away the archaeological materials, and save your future. You copy the antidote recipe, and you find the research report in the safe box, quickly take the photos, and upload them to the Internet. Before Annie comes back at 2:30 p.m., you leave the laboratory. <br/>
      You buy all the ingredients at the pharmacy to formulate a bottle of antidote and two bottles of cold medicine to carry with you.<br/>
      May 3rd<br/>
      After you come to the laboratory at 2:00 p.m., you pretend to be busy in your office. You secretly block the cameras of the corridor at 6:30 p.m., and stuff a note into Annie’s office: "I know who you are! I also know what you are going to do. Come to the villa grove at 7:00, let's talk about it!" Annie, with a guilty conscience, is fooled. <br/>
      After she leaves, you sneak into the office again, replace the two bottles of antidote in her drawer with the cold medicine bottles then throw the antidote into the trash can in the corridor. You drink the antidote without telling Jane at 7:50 p.m., then take her to the meeting room. You find an opportunity to secretly throw the empty bottle of antidote into the trash can in the meeting room. <br/>
      At 8:00 p.m., the party starts on time. Under the suggestion of the investor, Wilson, everyone has a drink in honor of Helen. Unexpectedly, you fall into a coma with everyone else after a glass of wine. Fortunately, after 30 minutes, you wake up first. <br/>
      You look around and use the handkerchief on Harris's chest and the cake-cutting knife to stab Annie to death, then you pretend to be unconscious.<br/>
      Almost another 30 minutes later, you see Wilson wake up, and sneak away from the scene. Wilson comes back and pretends to be asleep. When everyone wakes up, you pretend to wake up last. Everyone sees Annie’s body in the corridor!`
        },
        {
            roleName: "Jane",
            job: "Historian",
            pangbaiUrl: "sound/Jane_en.mp3",
            age: "28",
            sex: "Female",
            relation: "",
            detail: "28-year-old historian. Married to Joe, the chemist, for 2 years and joined the archeological team.",
            id: 2,
            img: "book1/img_role3.png",
            content: `It has been two years since you joined the archaeological team under the recommendation of your husband, Joe. You use your historical knowledge to break many research bottlenecks. The research phase is about to be completed, and you’ve proven to be a valuable part of the team. 
      The only thing that makes you uncomfortable is the past relationship between the archaeologist Annie and your husband. This unknown past makes you uncomfortable. Although your husband always guarantees their innocence, you still cannot help but think otherwise.<br/>
      March<br/>
      One day, Joe asks if you want to leave the team together because Helen wanted to terminate the excavation plan. You don't care about the excavation plan. You just want to leave this terrible place with Joe. Every time you see Annie and Joe working together, the thoughts continue to nag at your nerves. You also hope that your worries are unnecessary. There’s no better solution than to leave the team. Before leaving, you send an anonymous letter threatening Helen and asking her to hand over the plan and the underground palace blueprints.<br/>
      April 1st<br/>
      Joe takes you on a rare trip for 3 days. After you come back, you hear that there is an explosion in the laboratory. Helen died in the explosion, and the underground palace blueprints are missing. While you are fortunate that you and your husband weren’t around for the explosion, you intuitively feel a little uneasy and the accident accelerates your departure from this place.<br/>
      You and Joe will submit your resumes and look for new jobs. Dealing with the aftermath and rebuilding the laboratory would give Joe and Annie more opportunities to meet. Your anxiety drives you to become more suspicious.
      April 30th<br/>
      After the explosion, the laboratory starts to get rebuilt. On the 30th, you receive an invitation: "You're cordially invited to the reveal party on May 3rd at the research villa. In honor of the late professor Helen, we will be revealing the updated blueprint. Drinks and food will be provided. The party starts at 8:00 pm, please don't be late.”
      It should be over, but now so many unexpected things are happening. You try to persuade Joe not to participate, but Joe's attitude disappoints you. You decide to go together and see what happens.<br/>
      At the same time, you find the call history between Joe and Annie. Sure enough, they have recently been in contact. Aside from taking tranquilizers, your diary is your only way to vent your gloomy mood. "Do I have to wait until Annie completely disappears before my nightmare ends?"<br/>
      May 1st<br/>
      Today, Joe sends you a text message saying that he would fly to the laboratory early which makes you very suspicious. With an uneasy mood, you send Annie a short message. As expected, she is also at the laboratory! Sooner or later, you will find an opportunity to give that bitch a lesson!<br/>
      May 3rd<br/>
      You arrive at the laboratory at noon. There is an interview which keeps you busy in the office until 7:50 p.m., and then you go to find Joe to attend the party.<br/>
      Seeing someone preparing a cake, you run to the kitchen to get a kitchen knife and a plate. At 8:00 p.m., the party starts on time. Under the suggestion of the investor, Wilson, everyone has a drink in honor of Helen. After a glass of wine, you drift into darkness as you go unconscious alongside everyone else.<br/>
      After an hour, everyone wakes up and finds Annie's body!`
        },
        {
            roleName: "Harris",
            job: "Deputy curator at the British Museum",
            pangbaiUrl: "sound/Harris_en.mp3",
            age: "27",
            sex: "Male",
            relation: "",
            detail: "27-year-old deputy curator at the British Museum. Invited to the gathering mysteriously and arrived early to stay in the guest room.",
            id: 3,
            img: "book1/img_role1.png",
            content: `You are the deputy curator of the British Museum and the youngest manager of the museum in the industry. You understand that all honors are not only from your diligences, but also information and academic backing from your mother, Prof. Helen. The jet lag and business from work give rise to little time to connect. The relationship between you and your mother is great. You love your mother more than everything in the world.<br/>
      March<br/>
      You know Helen is going to research an ancient underground palace and she’s about to enter the excavation stage. You are excited because your mother must share her achievements with you. This would be a huge accolade to your career because it would help bring up the museum’s poor financial performance. <br/>
      After you finish your business investment proposals, you are waiting for her excavation to be successful. Suddenly, Helen’s call makes you extremely disappointed. She tells you the limitations of the current technology, the excavation is not only dangerous but would also result in damaging the underground palace. Research is going to be stopped. You feel so disappointed and quarrel with her. Later, you receive a letter from your mother but refuse to write back.<br/>
      April 3rd<br/>
      One of the students of the professor, Annie, sends you a letter and tells you the laboratory had an explosion, the blueprint of the underground palace has been lost, and that your mother has died. You feel despair. She sends you the remains and Helen’s mobile phone.<br/>
      She tells you there are several threatening text messages on the phone. You both feel the accident is related to the lost blueprint. After thinking for a moment, to get revenge, you decide to come back to the villa and help the archaeologists solve the secret behind the accident. 
      During the process, you want to purchase the research reports, but the archaeologists refuse because it is confidential information. Although you are uneasy, you decide to wait for the opportunity. <br/>
      After discussing, you and Annie decide to invite all the suspects to the research laboratory where the explosion happened. You invite them with the excuse that there is a copy of the blueprint of the underground palace.<br/>
      You wait for the opportunity to put together the evidence and figure out who murdered your mother. You book the airline ticket to return to the villa on May 2nd. You nervously wait for the day.<br/>
      May 3rd<br/>
      You come to the laboratory at 11:30 a.m. on May 3rd and plan your actions for the night. To protect you, Annie tells you to take the antidotes from her office at 7:45 p.m., but she doesn’t allow you to participate in making the plans.<br/>
      After having lunch, you return to your room and sleep because of the jet lag at 2:00 in the afternoon. At 7:30 p.m., your clock wakens you, then you drink the antidote in the archaeological office at 7:45 at night. 
      You arrive at the reception room with Annie at 8:00 p.m. and meet a chemist, Joe, and his wife, Jane who is a historian, a talented scientist, Leo, and the project creator, Wilson, with Annie’s introduction for the first time. The party starts on time. Under Wilson’s suggestion, everyone raises a toast for Helen. After finishing the wine, you succumb to a coma along with the others. After an hour, everyone wakes up and finds Annie’s corpse.`
        },
        {
            roleName: "Leo",
            pangbaiUrl: "sound/Leo_en.mp3",
            job: "Scientist",
            sex: "Male",
            age: "28",
            relation: "",
            detail: "28-year-old world-famous scientist. Has a narcissistic personality. Helped the archeological team for 1 year and created the blueprint which progressed the team to the mining phase.",
            id: 4,
            img: "book1/img_role4.png",
            content: `You are regarded as the talent in others’ eyes because of your outstanding memory and amazing book knowledge. You publish high-standard articles in the field of biology, history, chemistry, and more. You’re a rising star in the academic world. Before your graduation, Professor Helen invites you to join her archeological team.<br/>
      You know under your comprehensive knowledge that you can yield brilliant results in the process. After two years, the team solves problems one by one and gets the complete research reports. What’s more important, you make use of the technology to restore the blueprint of the underground palace. With this blueprint, the archeological team can officially start excavating. You know when the project is successful, you will have your highlights. Soon, you’ll have the applause and rewards for such fine work. <br/>
      March<br/>
      "What? The excavation plan will be canceled! Are you kidding me? My interview is coming up!” You yell at Helen. You know the limitations of the current development technology. Excavating the underground palace is dangerous, and it may destroy the underground palace. Hellen’s decision to stop the development and forbid the publishing of the research reports is currently the best choice. <br/>
      You’re unhappy about the situation. Since that day, you become muddleheaded, and the first failure of your career nearly causes you to crack. You don’t know how to face the reporters and stress that it will negatively impact your career. It seems like a nightmare.<br/>
      April 1st<br/>
      The revealing of gas in the laboratory may have been caused by you, but you can’t remember the details. You return to the laboratory after your noon break and witness a terrible explosion. Among the smoke, you can’t tell whether you see someone in the lab or not. When you rush into the lab, you spot the underground palace blueprint on the table.<br/>
      You convince yourself that no one is in the lab and put the blueprint in your pocket and stagger out of the lab. You later learn that Helen died from the explosion. Facing doubts from the public and investors, you tell yourself that you’ll gather the rest of the information to solve the technical problems and complete the excavation.<br/>
      April 30th<br/>
      After the disaster, the laboratory starts being rebuilt. On April 30th, you receive an invitation: “You're cordially invited to the reveal party on May 3rd at the research villa. In honor of the late professor Helen, we will be revealing the updated blueprint. Drinks and food will be provided. The party starts at 8:00 pm, please don't be late.” <br/>
      You can’t believe your eyes, and you can’t verify the one you hold is the latest version. Helen never told you the details of the confidential documents. You want to gain the rest of the research reports and ensure that you have the proper blueprint, so you can continue the excavation by yourself. Your talent will shine through sooner or later.  <br/>
      May 1st<br/>
      You buy some Ezmaclopam, a bottle of expensive wine, and an air ticket for May 4th. You plan to dope people and steal the research reports, and then leave by the night of May 4th.<br/>
      May 3rd<br/>
      You arrive at the laboratory at 5:00 p.m. ahead of schedule and talk with the archeologist, Annie. It seems that your purpose hasn’t been exposed. So, you decide to act on your plan. You return to your office at 6:00 p.m., put the drugs into the wine with the injection syringe, and then read a detective novel to pass the time.<br/>
      You bring the wine to the party on time. Under the suggestion of Wilson, they decide to propose a toast for the professor. You don’t drink it, but you start to feel dizzy. Why? You fall unconscious.<br/>
      One hour later, everyone wakes up one by one and you find Annie’s corpse.`
        },
        {
            roleName: "Wilson",
            pangbaiUrl: "sound/Wilson_en.mp3",
            job: "Investor",
            sex: "Male",
            age: "40",
            relation: "",
            detail: "40-year-old investor. Has a passion for archeology and funded the team with his own money. Invested most of his money into the team and wants a return on his investment.",
            id: 5,
            img: "book1/img_role5.png",
            content: `You are a well-known venture capitalist. Behind the attractive appearance and rich clothing, only you and your accountant know how tight your money is. Recently, you focused on a potentially profitable archaeology project. The reputation and benefits after your success will bring you endless money. To monitor the archeological team, you invite them to the laboratory which was converted from a villa. Along with the development of the project, you realize the expenses of the project are seemingly endless. Gradually, your money dwindles, but you don’t see any rewards. After several years, Helen tells you that the research is finished. Although there are no substantial academic benefits, you know the ancient relics are profitable and your good luck is coming.<br/>
      March<br/>
      “What!?” When Helen tells you her plan to give up the excavation operation, you’re stunned. Panic sets in as you see all your money spent on the project reeling through your head. You send countless emails and messages trying to convince her otherwise. You reach the point of both threats and bribes, but she remains firm. You have nothing else to restore your investment. So, you hire Gangdom to threaten Helen and ask her students to steal the materials, both plans fail. <br/>
      April 1st<br/>
      You see no way out as your bank account nearly runs out. One night, you’re called and told about the explosion which makes matters worse but also igniting some hope. Helen was the only one who could stop the excavation project and she perished in the explosion. Now, no one will be an obstacle for you. <br/>
      You are so excited and invite other members of the archeological team together to continue the project. After the explosion, you are busy rebuilding the laboratory and persuading Annie to continue the project. Annie rejected your request to continue the excavation. You message your Gangdom friends to take out Annie, but their fee is more than what you have in the bank. You decide to be lowkey and seek your opportunity to find the blueprint and research reports to turn things around.<br/>
      April 30th<br/>
      On this day, you receive an invitation: “You're cordially invited to the reveal party on May 3rd at the research villa. In honor of the late professor Helen, we will be revealing the updated blueprint. Drinks and food will be provided. The party starts at 8:00 pm, please don't be late.” You can’t wait as this opportunity arises. You need to steal all the reports and the blueprint to recover from the loss of your investment!<br/>
      May 3rd<br/>
      You arrive at the laboratory and use your keys to search the rooms, except Annie’s office because she’s already there. You find nothing. You guess the research reports and blueprint must be in Annie’s possession because of her close relationship with Helen. Annie never seems to leave long enough for you to look through her stuff. At 6:55 p.m. you see Annie with the surveillance camera and she’s leaving the laboratory. You sneak into the office. You’re shocked when someone else enters the office and you run away.<br/>
      Annie returns and stays in her office. You blame everything on bad luck. 
      When it’s time for the party at 8:00 p.m., you advise everyone to raise their glass together. You plan to steal the reports and blueprint after everyone is drunk, but you start feeling the spins too.<br/>
      You wake up first and see Annie’s bloodied corpse. You’re horrified by the scene but out of greed, you run to the office and steal the reports, then put them in your safe box. You return and pretend to wake up with the others.`
        },
        {
            roleName: "Stanly",
            job: "Detective",
            age: "37",
            sex: "Male",
            detail: "37 years old, has worked as the detective for 15 years.",
            relation: "",
            id: 6,
            img: "book1/img_role7.png",
            content: "You are a detective, you come here to investigate a murder."
        }
    ];
    BookConfig1.roleList_ch = [
        {
            roleName: "Joe",
            job: "化学家",
            age: "30",
            sex: "男性",
            relation: "",
            pangbaiUrl: "sound/Joe_ch.mp3",
            detail: "30岁，化学家，和死者一样，是已故的原项目负责人May教授的弟子，从毕业就跟随教授一起参与到地宫的开发活动，已经有5年了。已婚，妻子是同样在考古队中的历史学家Jane",
            id: 1,
            img: "book1/img_role2.png",
            content: `你和考古学家<span style="color:#ff3232">Annie</span>从研究生就跟着教授<span style="color:#ff3232">Helen</span>进行考古学习，几年下来，是大家眼中的青梅竹马。虽然和小师妹有着各种说不清的暧昧，但是她却告诉你，彼此不是一路人，在一起没有结果。后来，你也有了自己的妻子<span style="color:#ff3232">Jane</span>，一个历史学家。<span style="color:#ff3232">Helen</span>总是更多的照顾着那个你看起来略显迂腐的师妹，在你眼中，她要依仗着你的化学知识，攻克各种难题，却总是不情愿把核心的信息交授给你。你渴望成功，总有一天，你要让教授和没有选择你的小师妹知道，看不上你，是她们的错！<br/>
      <span style="color:#ff3232">3月</span><br/>
      3月开始的非常顺利，在<span style="color:#ff3232">Leo</span>和<span style="color:#ff3232">Jane</span>的帮助下，你们突破了考古的瓶颈，找到并破译了地宫的设计图，马上就可以解开这个人类史上古老的地宫文明了！鲜花和掌声离你近在咫尺。可是突然有一天，Helen告诉你她计划放弃这考古项目的挖掘，你的表面假装平静，内心的世界已经几乎坍塌。你仿佛看到自己这几年来的努力前功尽弃。你不仅暗骂<span style="color:#ff3232">Helen</span>的迂腐，做大事怎么能没有牺牲，哪有人能成功却不用承担风险！你试着发短信说服教授，但失败了。这时你的脑海中闪过一个危险的想法：如果实验室被毁掉，那你就能偷走考古资料和地宫设计图，那么你就可以去其他的团队继续进行开发，那时候，成功的你，可以站在高处，用胜利者的口吻嘲笑她们的迂腐是多么的愚蠢。<br/>
      <span style="color:#ff3232">4月1日</span><br/>
      3月30日，你和<span style="color:#ff3232">Jane</span>请了3天假去旅游。临走前，你在收集用来分析的地宫毒性气体中加入了一些活性气体，使本来就非常不稳定的气体样本更加危险。果然，你休假回来后听说实验室如你所料的发生了爆炸，但令你意外的是，<span style="color:#ff3232">Helen</span>竟然死于爆炸之中，而地宫的设计图也不翼而飞。这样的变故让你非常痛苦，你决定要离开这个实验室，拿着简历跑遍几家公司，终于，这时有个竞争关系的考古机构向你发出了橄榄枝，唯一的要求是，带来你们已经完成的考古资料和地宫设计图。你试着发短信向Annie索要你应得的考古资料，却被<span style="color:#ff3232">Annie</span>以教授的心愿为借口拒绝。<br/>
      <span style="color:#ff3232">4月30日</span><br/>
      火灾发生后，实验室就开始了重建。期间，你拒绝了投资人继续开发项目的要求。30日这天，你收到一封情贴：“被盗的设计图是赝品，5月3日来研究所，让我们一起见证还原后的地宫设计图！” 惊喜之余，你很快意识到这个邀请并不简单，是不是你做的事情暴露了？虽然无意，但是你的所作所为还是导致了<span style="color:#ff3232">Helen</span>的死亡。你越想越怕，决定要提前过去一探究竟。<br/>
      <span style="color:#ff3232">5月1日</span><br/>
      虽然Jane一直在怀疑你和<span style="color:#ff3232">Helen</span>的暧昧关系，你还是订了5月1日的机票飞往考古实验室。你查到当天14:00 <span style="color:#ff3232">Helen</span>要离开的办公室去办事，利用这个间隙，你潜入在她的办公室里，在这里你找到了全部的答案，果然如你预想的，她和一个神秘人在调查<span style="color:#ff3232">Helen</span>的死因，安排了这次聚会，并买了加湿器，迷药和解药想要有所行动。你知道如果坐视她这样调查，你不仅有身败名裂的危险，甚至会威胁到你的生命安全。不如先下手为强，除掉她，拿走考古资料，自己以后的前途不可限量。这时你在自己的笔记本上抄下了迷药盒子上解药的做法，并将这一页撕掉拿去制作解药。你找到了保险箱里的考古资料，赶忙拍下照片上传到云端，并删除了手机里的照片。花了好多时间，也没用找到她藏起来的地宫的设计图，在14:30<span style="color:#ff3232">Helen</span>回来之前，你匆匆离开了实验室，随后你在药店买到了所有的原料，配制出了一瓶解药和两瓶没有药效的药剂，并带在了身上。<br/>
      <span style="color:#ff3232">5月3日</span> <br/>
      你在下午16:00来到研究所以后，就假装忙着工作，一头扎进了自己的办公室。你在18:30分偷偷挡住了走廊的监控，并在<span style="color:#ff3232">Helen</span>的办公室门缝塞入字条： “我知道你是谁！也知道你要干什么，19：00来别墅小树林，我们说清楚！” 心虚的<span style="color:#ff3232">Helen</span>果然上当了，她走后，你再次偷偷溜进办公室，把她抽屉里的两瓶解药偷按计划换成了没有药效的药剂，并顺手把解药扔进走廊的垃圾桶。你在19:50背着<span style="color:#ff3232">Jane</span>偷偷喝下解药，然后带她一起去会议室集合，并借机偷偷的把解药的空瓶扔进了会议室的垃圾桶。20:00，party准时开始，在投资人<span style="color:#ff3232">Wilson</span>的建议下，大家为教授<span style="color:#ff3232">Helen</span>喝一杯，一杯酒过后，你惊诧的和众人一起昏迷了过去。幸运的是，30分钟后，你率先醒来，原来还有别人也想要迷药大家！多亏了强力迷药和解药，你成为当时唯一一个清醒的人。你环视四周，你用<span style="color:#ff3232">Harris</span>胸前的手帕，垫着切蛋糕的刀捅死了<span style="color:#ff3232">Helen</span>。随后，你假装晕倒。差不多又过了30分钟，你看到Wilson醒来，偷偷离开了现场，你没有打草惊蛇，等到他回来以后摇醒大家，才假装最后一个醒来。大家先后醒了过来后，就在走廊上看到的了<span style="color:#ff3232">Helen</span>的尸体！`
        },
        {
            roleName: "Jane",
            job: "Historian",
            pangbaiUrl: "sound/Jane_ch.mp3",
            sex: "Female",
            age: "28",
            relation: "",
            detail: "28岁，历史学家，Joe的妻子，二人于两年前结婚，婚后陪同Joe加入了考古队，利用其丰富的历史知识为考古队打开了多项瓶颈。",
            id: 2,
            img: "book1/img_role3.png",
            content: `你在丈夫<span style="color:#ff3232">Joe</span>的推荐下加入这个考古团队已经两年了，在这段不长的时间里，你用你的历史知识给这个团队打破了很多研究的瓶颈，研究阶段工作即将完成，你也证明了自己对这个团队的贡献。唯一让你不舒服的，是这个团队里考古学家<span style="color:#ff3232">Annie</span>与你的丈夫那暧昧不清的关系，这一段未知的过去让你不舒服，虽然丈夫一直保证他们的清白，你还是无法控制的在疑神疑鬼。<br/>
      <span style="color:#ff3232">3月</span><br/>
      终于，有一天<span style="color:#ff3232">Joe</span>问你想不想一起离开这个团队，原因是教授<span style="color:#ff3232">Helen</span>想要终止之后的挖掘计划。你并不在乎这些，只想和<span style="color:#ff3232">Joe</span>早点离开这个鬼地方，每每看到<span style="color:#ff3232">Annie</span>和<span style="color:#ff3232">Joe</span>在一起工作，不断的刺激着你的神经，你也希望自己的担心是多余的。还有什么是比离开这个团队更好的解决方法呢。离开前，你给<span style="color:#ff3232">Helen</span>发了一封匿名威胁信，要让她把方案和地宫设计图交出来。<br/>
      <span style="color:#ff3232">4月1日</span><br/>
      <span style="color:#ff3232">Joe</span>难得的带你去旅游了3天，回来以后你听说实验室发生了爆炸，<span style="color:#ff3232">Helen</span>竟然死于爆炸之中，而辛苦复原的地宫的设计图也不翼而飞。你在庆幸自己和丈夫逃过一劫的同时，又直觉的感受到一点点的不安。但是这场火灾无疑加速了你们离开这个地方，不容自己多想，你就和<span style="color:#ff3232">Joe</span>一起投出简历，寻找新的工作。处理善后工作和研究所的重建让<span style="color:#ff3232">Joe</span>和<span style="color:#ff3232">Annie</span>有了更多的机会见面，你的不安刺激着你越来越疑神疑鬼。<br/>
      <span style="color:#ff3232">4月30日</span><br/>
      火灾发生后，实验室就开始了重建。30日这天，你收到一封情贴：“被盗的设计图是赝品，5月3日来研究所，让我们一起见证还原后的地宫设计图！” 本来都可以结束了，还搞这么多幺蛾子，到底是想怎样！你试图劝<span style="color:#ff3232">Joe</span>不要参加，<span style="color:#ff3232">Joe</span>的态度让你很失望。你决定一起去看看到底会发生什么。同时，你查到了<span style="color:#ff3232">Joe</span>和<span style="color:#ff3232">Annie</span>的通话记录，果然他们最近联系频繁。这一段时间，你除了服用镇定药剂以外，只能用日记来发泄自己的阴郁的心情： “是不是一定要等到这个考古团队彻底消失掉我的噩梦才会结束” 你是这样写道。<br/>
      <span style="color:#ff3232">5月1日</span><br/>
      今天的跟<span style="color:#ff3232">Joe</span>跟你发了一封短信，说要提前飞去研究所，这让你很怀疑。怀着不安的心情，你给<span style="color:#ff3232">Annie</span>发了短息，不出所料，她果然也在研究所！这个坏女人，早晚要找机会好好教训她！<br/>
      <span style="color:#ff3232">5月3日</span><br/>
      你中午就早早的来到了别墅，因为面试的关系，你在办公室里一直忙到了7：50，然后去找到<span style="color:#ff3232">Joe</span>参加party。看到有人准备了蛋糕，你好心的跑去厨房拿了菜刀和餐盘。20:00，party准时开始。在投资人<span style="color:#ff3232">Wilson</span>的建议下，大家为教授<span style="color:#ff3232">Helen</span>喝一杯，一杯酒过后，你惊诧的和众人一起昏迷了过去。一个小时后，大家先后醒了过来后，就看到的了<span style="color:#ff3232">Annie</span>的尸体！`
        },
        {
            roleName: "Harris",
            job: "大英博物馆副馆长",
            pangbaiUrl: "sound/Harris_ch.mp3",
            age: "27",
            sex: "男性",
            relation: "",
            detail: "27岁，大英博物馆的副馆长，神秘的被邀请人，于前几日来到研究所，先居住在研究所的客房中。",
            id: 3,
            img: "book1/img_role1.png",
            content: `你是大英博古馆的副馆长，也是这一行中最年轻的博古馆管理者。你明白，这一切，不仅仅来自于你的勤奋，还有你母亲<span style="color:#ff3232">Helen</span>教授给你的莫大的情报和学术支持。时差和工作的繁忙让你们没有很多时间联系，但母子之间的感情仍然很好。你爱你的母亲，升过世间一切。<br/>
      <span style="color:#ff3232">3月</span><br/>
      你知道<span style="color:#ff3232">Helen</span>最近马上要完成一个古代地宫的研究，之后就会进入到挖掘阶段，你很兴奋，因为母亲一定会跟你分享她的发掘成果，而你，马上也会因此作出更大的成绩，如果一切顺利，馆长的位置也不在话下。就在你完成了商业投资建议书，正准备等待教授的挖掘成功，自己可以青云直上的时候，教授突如其来的一通越洋电话，让你失望透顶。她告诉了你由于现今开发技术的局限，开采地宫不仅危险，而且会很大可能导致地宫受损甚至有可能被毁坏，所以挖掘和研究可能要从此终止。你听后大失所望，跟她电话上吵了起来，最终不欢而散。<br/>
      <span style="color:#ff3232">4月3日</span><br/>
      教授的学生<span style="color:#ff3232">Annie</span>这一天给你发来一封邮件，告诉你实验室烧毁，地宫的设计图遗失，教授遇难的消息。你仿佛五雷轰顶。她给你寄来了教授的遗物手机，并告诉你在手机上发现了多封威胁短信。你们都觉得这场事故非常可以，可能和遗失的设计图有关，一番思量后，你决定回国帮助考古一起，解开事故之谜，给教授报仇。期间，你想要高价收购考古手中的研究资料，但是被考古以机密为由拒绝，虽然心有不甘，但是你决定按兵不动，等待机会。经过讨论，你决定和<span style="color:#ff3232">Annie</span>以遗失的地宫设计图是假的为由，邀请所有的嫌疑人在原本<span style="color:#ff3232">Helen</span>生日的这天到之前发生火灾的研究所，找机会迷晕众人以后，找出证据和害死教授的凶手，将其绳之以法。之后，你定了5月2日回国的机票，忐忑的等待这一天的来临。<br/>
      <span style="color:#ff3232">5月3日</span><br/>
      你在5月3日的11:30来到了别墅，和Annie计划了晚上的行动，出于对你的保护，她没有让你过多的参与计划，只是告诉你在7:45来她办公室来拿解药。共进午饭后，你在14：00回到自己房间因为时差的关系睡了一觉。19:30被闹钟吵醒，19:45去到考古办公室喝下解药。8:00 准时和<span style="color:#ff3232">Annie</span>一起到会客室，并在Annie的引荐下第一次见到了化学家<span style="color:#ff3232">Joe</span>和他的妻子历史学家<span style="color:#ff3232">Jane</span>，天才科学家<span style="color:#ff3232">Leo</span>和项目投资人<span style="color:#ff3232">Wilson</span>. party准时开始，在投资人<span style="color:#ff3232">Wilson</span>的建议下，大家为教授<span style="color:#ff3232">Helen</span>喝一杯，一杯酒过后，你惊诧的和众人一起昏迷了过去。一个小时后，大家先后醒了过来后，就看到的了<span style="color:#ff3232">Annie</span>的尸体！`
        },
        {
            roleName: "Leo",
            pangbaiUrl: "sound/Leo_ch.mp3",
            age: "28",
            job: "科学家",
            sex: "男性",
            relation: "",
            detail: "28岁，著名的天才型科学家，于去年加入考古队，为人极为自恋，仅用一年时间便帮助考古团队还原了地宫设计图，从而使考古开发转为考古发掘。",
            id: 4,
            img: "book1/img_role4.png",
            content: `你从小凭借的出色的记忆力和惊人的学习能力，一直是大家眼中的天才。年级轻轻便在化学，历史，生物等领域发表过高水准的论文，是一个冉冉升起的学术界的新星。毕业前，教授Helen邀请你加入她的考古队。你知道凭借着你综合的知识，肯定能在这一过程大放异彩，于是你答应了下来。两年过去了，团队解开了一个又一个难题，终于拿到的齐全的考古资料，更重要的，你利用技术还原了地宫的设计图，考古队可以正式开启队地宫的挖掘。你知道，项目成功后，你会再次获得你的高光时刻，到时候，无数的鲜花，掌声…<br/>
      <span style="color:#ff3232">3月</span><br/>
      “什么？挖掘计划要取消！不要开这种玩笑，我最近的采访都播出去了！”你朝着Helen咆哮到。你也知道现今开发技术的局限，开采地宫不仅危险，而且会很大可能导致地宫受损甚至有可能被毁坏。Helen决定停止开发并禁止发表研究成果的决定是现在最好的结果。但是不甘心的情绪还是充斥着你的心，自从那天开始，你生活变得浑浑噩噩，第一次事业上的失败让你近乎崩溃，你不知道该如何面对铺天盖地的记者，大众和投资人的期待，这一切好像是一场噩梦。<br/>
      <span style="color:#ff3232">4月1日</span><br/>
      实验气体的泄露可能和你有关，你已经记不得细节了。你午休后回到实验室就看到了可怕的爆炸，在浓烟之后，你似乎看到一个模糊的倒下的身影。你正在纠结的想冲进火海救人的时候，桌子上的地宫复原图出现在你的视野中。自私的想法战胜了救人的冲动，你将复原图放进了口袋，踉跄的跑出了火海。没想到，Helen最终在爆炸中遇难。面对这大众的质疑，投资人的催促，你告诉自己，你一定会找到剩下的资料，突破技术上的难题，完成这一次挖掘来证明自己！<br/>
      <span style="color:#ff3232">4月30日</span><br/>
      火灾发生后，实验室就开始了重建。30日这天，30日这天，你收到一封情贴：“被盗的设计图是赝品，5月3日来研究所，让我们一起见证还原后的地宫设计图！”。你不敢相信自己的眼睛。你无法证明手中的设计图是不是最终的版本，Helen也从来不会和你透露这些机密的研究细节。不！绝不可以！你要想办法拿到其余的考古资料。确认手中的设计图，这样你可以选择自己继续研究，天才迟早可以为自己正名！<br/>
      <span style="color:#ff3232">5月1日</span><br/>
      这一天，你购买了轻度的迷药，一瓶名贵的好酒和5月4日的机票。计划在迷晕众人后，偷偷拿走考古资料，坐第二天的飞机离开这个地方。<br/>
      <span style="color:#ff3232">5月3日</span><br/>
      你提早5:00就来到了别墅，并和考古学家Annie谈了谈，言语中，好像你的目的并没有暴露。于是你决定执行自己的计划，6:00回到你的办公室后，用注射器将研磨好的迷药注入酒中，然后就看了会侦探小说消磨时间。8：00你准时带着酒参加了聚会，在投资人<span style="color:#ff3232">Wilson</span>的建议下，大家决定敬在九泉之下的教授一杯，你当然不会傻得喝下迷药，但很快你也被迷倒了，这是怎么回事？你惊诧的被迷晕了过去，一个小时后，大家先后醒了过来后，就看到的了<span style="color:#ff3232">Annie</span>的尸体！
      `
        },
        {
            roleName: "Wilson",
            pangbaiUrl: "sound/Wilson_ch.mp3",
            job: "项目投资人",
            age: "40",
            sex: "男性",
            relation: "",
            detail: "40岁，项目投资人，凭借着对考古的热爱，私人资助考古队。虽然现今投入巨大，但发掘后可以获得巨大巨额。",
            id: 5,
            img: "book1/img_role5.png",
            content: `你是一个名声在外的风险投资人，风光的表面下，只有你自己和你的会计知道你现在的资金有多紧张，最近你把目光放在了很有潜力的考古上，虽然成本不菲，但是成功后的名利会让你指数级的暴富，为了方便你监控考古团队，你邀请他们把实验室建立在你的别墅改造的研究所里，随着项目的进行，你才明白这就是一个无底洞，渐渐地，你的现金越来越少，可一分钱的回报都没看到。终于在几年后，教授Helen告诉你，考古的研究已经完成，虽然学术上的收入并不多，但是你知道，等到挖掘出古代遗迹，你的好运就要来了！<br/>
      <span style="color:#ff3232">3月</span><br/>
      “什么！”当Helen告诉你她计划放弃这考古项目的挖掘时，你简直不能相信自己的耳朵，仿佛看到自己这几年来的投资血本无归。你给教授发了无数封邮件和短信，好坏话说尽，可她好像铁了心一样。你不能眼睁睁的看着自己的钱就这么打了水漂。你雇黑社会恐吓Helen，你联系她的学生们窃取研究资料，可你的计划无一例外的失败了，“让教授消失，换一个听话的负责人，不管付出任何代价”你和你的黑帮朋友这样说<br/>
      <span style="color:#ff3232">4月1日</span><br/>
      不知道是不是否极泰来，就在你为了发掘项目被取消一筹莫展时，一场本应雪上加霜的爆炸却点燃了你的希望。Helen在事故中葬身火海，这个唯一能阻止挖掘项目的人终于不用再挡你的财路。你大喜过望，这一天过后，你赶忙邀请考古团队的其他成员继续挖掘项目，可出乎你的意外，除了天才Leo外，所有人用各种理由拒绝了你继续挖掘的要求。这是想怎么样？难道真的要把你往绝路上逼吗？火灾发生后，你就一边忙着重建实验室，一边游说考古队的成员，更重要的，寻找着考古的的研究成果，寻找着最后翻盘的机会。<br/>
      <span style="color:#ff3232">4月30日</span><br/>
      30日这天，你收到一封情贴： “被盗的设计图是赝品，5月3日来研究所，让我们一起见证还原后的地宫设计图！” 你坐不住了，是你最后的机会，你要找机会偷走所以的资料，挽回你的损失！<br/>
      <span style="color:#ff3232">5月3日</span><br/>
      你早早的来到了别墅，寻找机会，用自己手上的钥匙搜查了所有人的房间，然而并没有任何发现。你猜想研究资料一定是在和Helen教授关系最亲近的 Annie那里。可是苦于她一直在房间里，你没有任何机会。突然你通过监控看到Annie大约在6:55的时候出了别墅，你偷偷溜过去，不料却看到一个男人的身影溜进考古的办公室，很快的又跑出来。而不久后考古也很快的返回了办公室。你暗骂自己运气太差。好不容易等到8:00 party准时开始，你开始撺掇大家一起喝完酒以后，想趁把他们灌醉之际偷偷潜入房间偷走资料，但没想到你被迷昏了过去。大约一个小时后，你第一个醒来，在看到的了<span style="color:#ff3232">Annie</span>的尸体后，你吃一惊，但是利欲熏心的你还是拖着眩晕的身体，跑去Annie的办公室，偷走了Annie保险柜里的资料，放回了自己房间里的保险柜中。然后假装刚刚清醒，叫醒了众人。。。。。。<br/>
      信件<br/>
      <span style="color:#ff3232">短信</span><br/>
      你联系她的学生们<span style="color:#ff3232">窃取研究资料</span><br/>
      你赶忙邀请考古团队的其他成员继续挖掘项目
      `
        },
        {
            roleName: "Stanly",
            job: "Detective",
            sex: "Male",
            age: "37",
            detail: "37 years old, has worked as the detective for 15 years.",
            relation: "",
            id: 6,
            img: "book1/img_role7.png",
            content: "你是一个侦探，接到报警前来查案"
        }
    ];
    BookConfig1.quesConfig_ch = [
        {
            roleId: 6,
            quesList: [
                {
                    id: 1,
                    title: "你做这份工作多久了？",
                    content: "也就不到一年吧？我之前在罗姆尼老大手下看场子的，后来犯事儿，是Wilson老大给我了个机会，来这儿做保安。他希望我帮他看着这帮“聪明鬼”，不要浪费他的投资。",
                    answer: "1"
                },
                {
                    id: 2,
                    title: "案发时，案发现场的摄像头有拍到任何什么特别的事情吗？",
                    content: "今天我已经下班了，一楼的监控一直是坏掉的，我上个礼拜就群发email和大家说明过了，但是很奇怪，似乎没人有对此感兴趣。",
                    answer: "2"
                },
                {
                    id: 3,
                    title: "在研究所整修期间，有人回来过吗？",
                    content: "火灾后，这里就只有我和Annie每天都还有来上班，另外Wilson偶尔会过来看看。我记得Joe5月1号过来了，我以为他来找Annie呢，当时Annie不在，奇怪的是他没等Annie回来就走了。",
                    answer: "3"
                },
                {
                    id: 4,
                    title: "今天Annie有和各位嫌疑人有过互动吗？",
                    content: "我刚刚仔细看了监控，Leo在5:00pm去找了Annie。后来Harris在7:45pm的时候去见了Annie。",
                    answer: "4"
                },
                {
                    id: 5,
                    title: "今天有陌生人进出过现场吗？",
                    content: "今天一天都没有陌生人来过，连个送信的都没有。哦！对了，我看见Annie6:50pm出了研究所，但很快就回来了，我当时都有在做记录，大约是7:10pm吧",
                    answer: "5"
                },
                {
                    id: 6,
                    title: "你对这把凶器餐刀有印象吗？",
                    content: "啊！我下班之前看到Jane在找餐刀，还问我要不要一起吃个蛋糕再走，虽然我想吃蛋糕，但是老婆在家做了我最爱吃的晚饭，我就拒绝了。",
                    answer: "5"
                },
                {
                    id: 7,
                    title: "今天的监视设备有什么异常吗？",
                    content: "二楼走道的监视器被不知道被什么人在6:30pm的时候挡住了，我怀疑一定是有人故意这么做的，因为他一定是熟悉监控的位置的内部人员。",
                    answer: "5"
                },
                {
                    id: 8,
                    title: "这块带血的手帕你有印象吗？",
                    content: "哦，这不就是那新来的人西装里的手帕吗？我今天见到他就觉得很奇怪，穿着套装，装什么大尾巴狼！",
                    answer: "5"
                },
                {
                    id: 9,
                    title: "你觉得教授的死和今天的凶案有关系吗？",
                    content: "啊？这我可不敢乱说话，老大会打死我的！反正他们几个天天吵来吵去的，要说这聪明人也会杀人，以前我是不信的，现在嘛！啧啧。",
                    answer: "5"
                },
                {
                    id: 10,
                    title: "教授的意外细节你知道多少？",
                    content: "当天的研究所只有Annie，Leo，Helen和我在，当时我在午休，突然二楼的实验室发生爆炸，很快就烧起来了，我赶忙叫了消防队，但是很遗憾，当时Helen教授自己在做实验，她没能跑出来。",
                    answer: "5"
                },
                {
                    id: 11,
                    title: "你觉得研究所里大家的关系怎么样？",
                    content: "怎么说呢？天天听他们吵架，我要是说他们关系好你也不信是吧？偷偷告诉你，这里男女关系也挺混乱的，听说这Joe以前还和死者好过，现在还能带着老婆和她在一个公司工作，心也真的是大。不过我也都是道听途说。",
                    answer: "5"
                },
                {
                    id: 12,
                    title: "今天你有一直都关注监控里发生的事情吗？",
                    content: "啊，我当然不会一直坐在监控室里了。今天Wilson老大过来然我去做了几次小区内的巡查，虽然他平时很少这么做。后来我们就在监控室里喝酒聊天，快7：00pm他才离开。",
                    answer: "5"
                }
            ]
        }
    ];
    BookConfig1.quesConfig_en = [
        {
            roleId: 6,
            quesList: [
                {
                    id: 1,
                    title: "How long have you been in this job?",
                    content: `Less than a year, right? I used to watch the show under boss Romney, but later I did something wrong. Boss Wilson gave me a chance to be a security guard here. He wants me to help him watch these "smart guys" and not waste his investment.`,
                    answer: "1"
                },
                {
                    id: 2,
                    title: `Did the camera at the scene of the crime catch anything special at the time of the crime?`,
                    content: "Today, I'm off work. The monitor on the first floor is broken all the time. I sent a group of emails last week to explain it to you, but it's strange that no one seems to be interested in it.",
                    answer: "2"
                },
                {
                    id: 3,
                    title: "Did anyone come back during the renovation of the Institute?",
                    content: "After the fire, Annie and I were the only ones who came to work every day, and Wilson occasionally came to have a look. I remember Joe came here on May 1st. I thought he came to find Annie. Annie was not there at that time. It was strange that he left without waiting for Annie to come back.",
                    answer: "3"
                },
                {
                    id: 4,
                    title: "Did Annie interact with the suspects today?",
                    content: "I just looked at the surveillance. Leo went to see Annie at 5:00pm. Then Harris went to see Annie at 7:45pm.",
                    answer: "4"
                },
                {
                    id: 5,
                    title: "Did any strangers come in and out of the scene today?",
                    content: "No stranger has been here all day, not even a messenger. oh By the way, I saw Annie leave the Research Institute at 6:50pm, but she came back soon. I was making records at that time, about 7:10pm",
                    answer: "5"
                },
                {
                    id: 6,
                    title: "Do you have any impression of this knife?",
                    content: "Ah! Before I got off work, I saw Jane looking for a knife and asked me if I wanted to have a cake before I left. Although I wanted to have a cake, my wife made my favorite dinner at home, so I refused.",
                    answer: "5"
                },
                {
                    id: 7,
                    title: "Is there anything wrong with today's surveillance equipment?",
                    content: "The monitor in the aisle on the second floor was blocked at 6:30pm by someone I don't know. I suspect someone must have done it on purpose, because he must be an insider familiar with the location of the monitor.",
                    answer: "5"
                },
                {
                    id: 8,
                    title: "Do you remember this bloody handkerchief?",
                    content: "Oh, isn't this the handkerchief in the new comer's suit? I think it's very strange when I see him today. He's wearing a suit and a big tail wolf!",
                    answer: "5"
                },
                {
                    id: 9,
                    title: "Do you think the professor's death has anything to do with today's murder?",
                    content: "Ah? I dare not talk about it. The boss will kill me! Anyway, they quarrel every day. If you want to say that this smart man can kill people, I didn't believe it before, but now! Tut tut.",
                    answer: "5"
                },
                {
                    id: 10,
                    title: "What do you know about the details of the professor's accident?",
                    content: "On that day, only Annie, Leo, Helen and I were in the Research Institute. At that time, I was on a lunch break. Suddenly, an explosion occurred in the laboratory on the second floor, which soon burned up. I called the fire brigade. Unfortunately, Professor Helen was doing the experiment herself, and she couldn't run out.",
                    answer: "5"
                },
                {
                    id: 11,
                    title: "What do you think of the relationship in the Institute?",
                    content: "How to put it? I hear them quarrel every day. If I say they have a good relationship, you don't believe it, do you? I'll tell you secretly that the relationship between men and women here is also very chaotic. It's said that Joe used to have a good time with the dead, but now he can still work with his wife in the same company with her, and his heart is really big. But it's all hearsay.",
                    answer: "5"
                },
                {
                    id: 12,
                    title: "Have you been paying attention to what's going on in the surveillance today?",
                    content: "Ah, of course I won't be sitting in the monitoring room all the time. Today, boss Wilson came over, but I went to inspect the community several times, although he seldom did so. Later, we drank and chatted in the monitoring room, and he didn't leave until 7:00pm.",
                    answer: "5"
                }
            ]
        }
    ];
    BookConfig1.content = {
        ch: "剧本内容剧本内容剧本内容剧本内容剧本内容剧本内容剧本内容剧本内容剧本内容剧本内容",
        en: "bookbookbookbookbookbookbookbookbookbookbookbookbookbookbookbookbook"
    };

    class Room2 {
        static CT11(tar) {
            Utils.toggle3dOpen(tar, 1, 0.3);
        }
        static CT10(tar) {
            Utils.toggle3dOpen(tar, 1, 0.3);
        }
        static clickHR001() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_HR001,
                    key: "room2_HR001",
                    img: `book2/${DataLang.lang}/Hanson/HR001.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("HR001")
                }
            ]);
        }
        static clickHR002() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_HR002,
                    key: "room2_HR002",
                    img: `book2/${DataLang.lang}/Hanson/HR002.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("HR002")
                }
            ]);
        }
        static clickHR003() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_HR003,
                    key: "room2_HR003",
                    img: `book2/${DataLang.lang}/Hanson/HR003.jpg`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickHR004() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_HR004,
                    key: "room2_HR004",
                    img: `book2/${DataLang.lang}/Hanson/HR004.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("HR004")
                }
            ]);
        }
        static clickHR005() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_HR005,
                    key: "room2_HR005",
                    img: `book2/${DataLang.lang}/Hanson/HR005.jpg`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("HR005")
                }
            ]);
        }
        static clickHR006() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_HR006,
                    key: "room2_HR006",
                    img: `book2/${DataLang.lang}/Hanson/HR006.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("HR006")
                }
            ]);
        }
        static clickHR007() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_HR007,
                    key: "room2_HR007",
                    img: `book2/${DataLang.lang}/Hanson/HR007.jpeg`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("HR007")
                }
            ]);
        }
        static clickHR008() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_HR008,
                    key: "room2_HR008",
                    img: `book2/${DataLang.lang}/Hanson/HR008.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("HR008")
                }
            ]);
        }
        static clickHR016() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_HR016,
                    key: "room2_HR016",
                    img: `book2/${DataLang.lang}/Hanson/HR016.jpg`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("HR016")
                }
            ]);
        }
        static clickHR015() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_HR015,
                    key: "room2_HR015",
                    img: `book2/${DataLang.lang}/Hanson/HR015.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("HR015")
                }
            ]);
        }
        static clickHR014() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_HR014,
                    key: "room2_HR014",
                    img: `book2/${DataLang.lang}/Hanson/HR014.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("HR014")
                }
            ]);
        }
        static clickHR013() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_HR013,
                    key: "room2_HR013",
                    img: `book2/${DataLang.lang}/Hanson/HR013.png`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static openDoor() {
            let tar = Utils.findChildByName(Oprate3dTool.scene3d, "model.Box1748");
            Utils.toggle3dOpen(tar, 1, -1.5);
        }
        static clickHR009() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_HR009,
                    key: "room2_HR009",
                    img: `book2/${DataLang.lang}/Hanson/HR009.png`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickCR001() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_CR001,
                    key: "room2_CR001",
                    img: `book2/${DataLang.lang}/Caroline/CR001.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("CR001")
                }
            ]);
        }
        static clickCR002() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_CR002,
                    key: "room2_CR002",
                    img: `book2/${DataLang.lang}/Caroline/CR002.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("CR002")
                }
            ]);
        }
        static clickCR003() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_CR003,
                    key: "room2_CR003",
                    img: `book2/${DataLang.lang}/Caroline/CR003.jpg`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("CR003")
                }
            ]);
        }
        static clickCR004() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_CR004,
                    key: "room2_CR004",
                    img: `book2/${DataLang.lang}/Caroline/CR004.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("CR004")
                }
            ]);
        }
        static clickCR005() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_CR005,
                    key: "room2_CR005",
                    img: `book2/${DataLang.lang}/Caroline/CR005.jpg`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("CR005")
                }
            ]);
        }
        static clickCR006() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_CR006,
                    key: "room2_CR006",
                    img: `book2/${DataLang.lang}/Caroline/CR006.jpg`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("CR006")
                }
            ]);
        }
        static clickCR007() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_CR007,
                    key: "room2_CR007",
                    img: `book2/${DataLang.lang}/Caroline/CR007.jpg`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("CR007")
                }
            ]);
        }
        static clickCR008() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_CR008,
                    key: "room2_CR008",
                    img: `book2/${DataLang.lang}/Caroline/CR008.jpg`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("CR008")
                }
            ]);
        }
        static CT16(tar) {
            Utils.toggle3dOpen(tar, 1, 0.3);
        }
        static CT9(tar) {
            Utils.toggle3dOpen(tar, 1, 0.3);
        }
        static CT8(tar) {
            Utils.toggle3dOpen(tar, 1, 0.3);
        }
        static clickJR001() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_JR001,
                    key: "room2_JR001",
                    img: `book2/${DataLang.lang}/Johnathan/JR001.jpg`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("JR001")
                }
            ]);
        }
        static clickJR002() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_JR002,
                    key: "room2_JR002",
                    img: `book2/${DataLang.lang}/Johnathan/JR002.jpg`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickJR003() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_JR003,
                    key: "room2_JR003",
                    img: `book2/${DataLang.lang}/Johnathan/JR003.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("JR003")
                }
            ]);
        }
        static clickJR004() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_JR004,
                    key: "room2_JR004",
                    img: `book2/${DataLang.lang}/Johnathan/JR004.jpg`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickJR005() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_JR005,
                    key: "room2_JR005",
                    img: `book2/${DataLang.lang}/Johnathan/JR005.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("JR005")
                }
            ]);
        }
        static clickJR006() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_JR006,
                    key: "room2_JR006",
                    img: `book2/${DataLang.lang}/Johnathan/JR006.png`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickDX(tar) {
            Utils.toggle3dOpen(tar, 1, 0.15);
        }
        static CT7(tar) {
            Utils.toggle3dOpen(tar, 3, 0.3);
        }
        static CT6(tar) {
            Utils.toggle3dOpen(tar, 3, 0.3);
        }
        static clickOR001() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_OR001,
                    key: "room2_OR001",
                    img: `book2/${DataLang.lang}/Oliver/OR001.jpg`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickOR002() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_OR002,
                    key: "room2_OR002",
                    img: `book2/${DataLang.lang}/Oliver/OR002.jpg`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickOR003() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_OR003,
                    key: "room2_OR003",
                    img: `book2/${DataLang.lang}/Oliver/OR003.png`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickOR004() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_OR004,
                    key: "room2_OR004",
                    img: `book2/${DataLang.lang}/Oliver/OR004.jpg`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickOR005() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_OR005,
                    key: "room2_OR005",
                    img: `book2/${DataLang.lang}/Oliver/OR005.png`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickOR006() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_OR006,
                    key: "room2_OR006",
                    img: `book2/${DataLang.lang}/Oliver/OR006.jpg`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickOR007() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_OR007,
                    key: "room2_OR007",
                    img: `book2/${DataLang.lang}/Oliver/OR007.jpg`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickOR008() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_OR008,
                    key: "room2_OR008",
                    img: `book2/${DataLang.lang}/Oliver/OR008.jpg`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickOR009() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_OR009,
                    key: "room2_OR009",
                    img: `book2/${DataLang.lang}/Oliver/OR009.jpg`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickOR010() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_OR010,
                    key: "room2_OR010",
                    img: `book2/${DataLang.lang}/Oliver/OR010.png`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickKuang(target) {
            Utils.toggle3dOpen(target, 5, 100);
        }
        static toggleDrawer(target) {
            Utils.toggle3dOpen(target, 3, 0.3);
        }
        static clickMR001() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_MR001,
                    key: "room2_MR001",
                    img: `book2/${DataLang.lang}/Margaret/MR001.jpg`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickMR002() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_MR002,
                    key: "room2_MR002",
                    img: `book2/${DataLang.lang}/Margaret/MR002.jpg`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickMR003() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_MR003,
                    key: "room2_MR003",
                    img: `book2/${DataLang.lang}/Margaret/MR003.jpg`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("MR003")
                }
            ]);
        }
        static clickMR004() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_MR004,
                    key: "room2_MR004",
                    img: `book2/${DataLang.lang}/Margaret/MR004.jpg`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickMR005() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_MR005,
                    key: "room2_MR005",
                    img: `book2/${DataLang.lang}/Margaret/MR005.jpg`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickMR006() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_MR006,
                    key: "room2_MR006",
                    img: `book2/${DataLang.lang}/Margaret/MR006.jpg`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickMR007() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_MR007,
                    key: "room2_MR007",
                    img: `book2/${DataLang.lang}/Margaret/MR007.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("MR007")
                }
            ]);
        }
        static clickMR008() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_MR008,
                    key: "room2_MR008",
                    img: `book2/${DataLang.lang}/Margaret/MR008.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("MR008")
                }
            ]);
        }
        static clickMR009() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_MR009,
                    key: "room2_MR009",
                    img: `book2/${DataLang.lang}/Margaret/MR009.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("MR009")
                }
            ]);
        }
        static clickGui2(target) {
            Utils.toggle3dOpen(target, 5, 90);
        }
        static clickGui1(target) {
            Utils.toggle3dOpen(target, 5, -90);
        }
        static clickBan4(target) {
            Utils.toggle3dOpen(target, 5, -90);
        }
        static clickBan3(target) {
            Utils.toggle3dOpen(target, 5, 90);
        }
        static clickCT5(target) {
            Utils.toggle3dOpen(target, 3, 0.3);
        }
        static clickCT4(target) {
            Utils.toggle3dOpen(target, 1, -0.3);
        }
        static clickCT3(target) {
            Utils.toggle3dOpen(target, 1, -0.3);
        }
        static clickBan1(target) {
            Utils.toggle3dOpen(target, 4, 70);
        }
        static clickBan2(target) {
            Utils.toggle3dOpen(target, 4, 70);
        }
        static clickQian1() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_AR004,
                    key: "room2_AR004",
                    img: `book2/${DataLang.lang}/Abraham/AR004.jpg`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("AR004")
                }
            ]);
        }
        static clickAR009() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_AR009,
                    key: "room2_AR009",
                    img: `book2/${DataLang.lang}/Abraham/AR009.png`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickAR007() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_AR007,
                    key: "room2_AR007",
                    img: `book2/${DataLang.lang}/Abraham/AR007.jpg`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("AR007")
                }
            ]);
        }
        static clickAR008() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_AR008,
                    key: "room2_AR008",
                    img: `book2/${DataLang.lang}/Abraham/AR008.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("AR008")
                }
            ]);
        }
        static clickQ3() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_AR006,
                    key: "room2_AR006",
                    img: `book2/${DataLang.lang}/Abraham/AR006.jpg`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickQ2() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_AR005,
                    key: "room2_AR005",
                    img: `book2/${DataLang.lang}/Abraham/AR005.jpg`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("AR005")
                }
            ]);
        }
        static clickXinWu() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_AR003,
                    key: "room2_AR003",
                    img: `book2/${DataLang.lang}/Abraham/AR003.jpg`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("AR003")
                }
            ]);
        }
        static clickXin() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_AR002,
                    key: "room2_AR002",
                    img: `book2/${DataLang.lang}/Abraham/AR002.jpg`,
                    sceneFrom: GameManager.currentScene
                }
            ]);
        }
        static clickGan() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_AR001,
                    key: "room2_AR001",
                    img: `book2/${DataLang.lang}/Abraham/AR001.jpg`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("AR001")
                }
            ]);
        }
        static clickCT1(tar) {
            Utils.toggle3dOpen(tar, 3, -0.3);
        }
        static clickXLX() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_PA004,
                    key: "room2_PA004",
                    title: "床头柜上",
                    content: "教授写的信",
                    img: `book2/${DataLang.lang}/hall/PA004.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("PA004")
                }
            ]);
        }
        static clickBao() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_PA003,
                    key: "room2_PA003",
                    title: "床头柜上",
                    content: "教授写的信",
                    img: `book2/${DataLang.lang}/hall/PA003.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("PA003")
                }
            ]);
        }
        static clickJiuPin2() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_PA002,
                    key: "room2_PA002",
                    title: "床头柜上",
                    content: "教授写的信",
                    img: `book2/${DataLang.lang}/hall/PA002.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("PA002")
                }
            ]);
        }
        static clickJiuPin() {
            UIManager.showDetail([
                {
                    id: DetailItemIdConfig$1.room2_PA001,
                    key: "room2_PA001",
                    title: "床头柜上",
                    content: "教授写的信",
                    img: `book2/${DataLang.lang}/hall/PA001.png`,
                    sceneFrom: GameManager.currentScene,
                    reportDetail: BookConfig2.getDetail("PA001")
                }
            ]);
        }
    }

    class BookConfig2 {
        static getDetail(type) {
            return this.detailList[type][DataLang.lang];
        }
    }
    BookConfig2.detailList = {
        AR001: {
            ch: "鱼竿上的没有鱼线，鱼线被分开放在旁边。",
            en: "鱼竿上的没有鱼线，鱼线被分开放在旁边。"
        },
        AR003: {
            ch: "一摞现金，有400美金",
            en: "一摞现金，有400美金"
        },
        AR004: {
            ch: "工资单，每月固定有20美金收入",
            en: "工资单，每月固定有20美金收入"
        },
        AR005: {
            ch: "银行存款收据，日期是2个月前，存入金额为500美金",
            en: "银行存款收据，日期是2个月前，存入金额为500美金"
        },
        AR007: {
            ch: "相框中有各种款式的浮标，做的像是收藏品",
            en: "相框中有各种款式的浮标，做的像是收藏品"
        },
        AR008: {
            ch: "烧过的灰烬，已经无法辨认",
            en: "烧过的灰烬，已经无法辨认"
        },
        MR003: {
            ch: "框里有各式各样的编制用毛线和透明丝线",
            en: "框里有各式各样的编制用毛线和透明丝线"
        },
        MR007: {
            ch: "1000多美元的现金，这可不是一笔小数目",
            en: "1000多美元的现金，这可不是一笔小数目"
        },
        MR008: {
            ch: "精致的盒子里收藏着一堆红酒塞，下面放着一小瓶杀虫药",
            en: "精致的盒子里收藏着一堆红酒塞，下面放着一小瓶杀虫药"
        },
        MR009: {
            ch: "这里的礼服每一件都不便宜",
            en: "这里的礼服每一件都不便宜"
        },
        OR005: {
            ch: "一条右半边的心形项链，看起来价格不菲",
            en: "一条右半边的心形项链，看起来价格不菲"
        },
        JR001: {
            ch: "盆栽，有花茎上的花已经被摘走",
            en: "盆栽，有花茎上的花已经被摘走"
        },
        JR003: {
            ch: "各种的水手结的装饰品",
            en: "各种的水手结的装饰品"
        },
        JR005: {
            ch: "一瓶名贵的威士忌，经检验，酒里没有发现任何可疑物质",
            en: "一瓶名贵的威士忌，经检验，酒里没有发现任何可疑物质"
        },
        CR001: {
            ch: "一朵摘下的鲜花，还没有枯萎",
            en: "一朵摘下的鲜花，还没有枯萎"
        },
        CR002: {
            ch: "一部关于读心术的书籍",
            en: "一部关于读心术的书籍"
        },
        CR003: {
            ch: "看起来像是某种酒的配方",
            en: "看起来像是某种酒的配方"
        },
        CR004: {
            ch: "水桶里有各种草药和粉末",
            en: "水桶里有各种草药和粉末"
        },
        CR006: {
            ch: "瓶子上的标签贴着杀虫剂",
            en: "瓶子上的标签贴着杀虫剂"
        },
        CR007: {
            ch: "用于算命的塔罗牌",
            en: "用于算命的塔罗牌"
        },
        CR008: {
            ch: "织了一半的渔网",
            en: "织了一半的渔网"
        },
        HR001: {
            ch: "一瓶自制的酒，经检验，酒里有大量迷药残留",
            en: "一瓶自制的酒，经检验，酒里有大量迷药残留"
        },
        HR002: {
            ch: "手枪上有一枚血指纹，属于死者，把手上没有其他可疑指纹",
            en: "手枪上有一枚血指纹，属于死者，把手上没有其他可疑指纹"
        },
        HR004: {
            ch: "办公室的钥匙",
            en: "办公室的钥匙"
        },
        HR005: {
            ch: "增加一个案件负责人：戈登警长",
            en: "增加一个案件负责人：戈登警长"
        },
        HR006: {
            ch: "门锁上夹着一根透明的丝线",
            en: "门锁上夹着一根透明的丝线"
        },
        HR007: {
            ch: "一瓶名贵的威士忌，经检验，酒里发现有未知的粉末残留",
            en: "一瓶名贵的威士忌，经检验，酒里发现有未知的粉末残留"
        },
        HR008: {
            ch: "一尊价格不菲的雕像。底座下发现少量血迹，经鉴定，属于死者",
            en: "一尊价格不菲的雕像。底座下发现少量血迹，经鉴定，属于死者"
        },
        HR014: {
            ch: "窗台上发的鞋印非常模糊，无法提供更有效的调查结果",
            en: "窗台上发的鞋印非常模糊，无法提供更有效的调查结果"
        },
        HR015: {
            ch: "风筝有被使用过的痕迹，想必主人应该曾经使用过",
            en: "风筝有被使用过的痕迹，想必主人应该曾经使用过"
        },
        HR016: {
            ch: "一盒透明丝线，可用作钓鱼或风筝",
            en: "一盒透明丝线，可用作钓鱼或风筝"
        },
        PA001: {
            ch: "一瓶名贵的威士忌，经检验，酒里没有发现任何可疑物质",
            en: "一瓶名贵的威士忌，经检验，酒里没有发现任何可疑物质"
        },
        PA002: {
            ch: "一个小空瓶，里面有一些研磨的颗粒",
            en: "一个小空瓶，里面有一些研磨的颗粒"
        },
        PA003: {
            ch: "一个公文包，是一堆奥利佛的竞选材料和公司文件",
            en: "一个公文包，是一堆奥利佛的竞选材料和公司文件"
        },
        PA004: {
            ch: "里面装满了男性衣物和日用品",
            en: "里面装满了男性衣物和日用品"
        }
    };
    BookConfig2.roleList_en = [
        {
            roleName: "乔纳森",
            job: "海军水手",
            age: "35",
            sex: "男性",
            relation: "",
            pangbaiUrl: "sound/Joe_ch.mp3",
            detail: "海军水手，身材健壮，皮肤黝黑。刚刚退伍，回到小镇。",
            id: 1,
            img: "book1/img_role2.png",
            content: `你是<span style="color:#ff3232"><span style="color:#ff3232">汉森</span></span>镇长的弟弟。曾经的你，和哥哥关系亲密，互相扶持着在市井中一起长大。在贫苦的环境中，你们只能通过不法的手段赚钱养活自己。天性纯良的你，慢慢的开始厌恶打打杀杀的生活。离开了小镇，入伍成为一名海军。从海军退伍后，你又回到了小镇福克斯，探望自己的哥哥。<br/>
      15年前<br/>
      作为哥哥的左右手，你做了许多为人所不齿的事情，你对善恶的界限开始麻木。直到有一天，你的哥哥为了自己的利益，诬陷并烧死了一个外乡的女孩儿。终于在良知的责备下，你和哥哥大吵了一架，哥哥的冷漠让你感到绝望。你决定远离现在罪恶的生活和邪恶的哥哥。<br/>
      3个月前<br/>
      刚刚从海军退伍的你已经回到小镇几天，一切已经大不一样了，你的哥哥也从一个小流氓洗白成了一镇之长。这一天你在路上，碰到了新任警长正在找一个吉普赛女孩的麻烦。在众目睽睽下，只有你伸出援手，帮助了这个叫<span style="color:#ff3232">卡洛琳</span>的可怜女孩。而你，通过这个善举，秘密的收获了一个和<span style="color:#ff3232">卡洛琳</span>的美妙约会。<br/>
      1天前<br/>
      回到小镇之后，你有意的保持着和哥哥之间的接触，避免和他的“生意”扯上关系。同时因为小镇人的保守，你和<span style="color:#ff3232">卡洛琳</span>决定将你们的恋情对所有人保密。随着竞选的临近，<span style="color:#ff3232">汉森</span>的处境越来越不利，你还是不可避免的被哥哥叫去商量对策。几杯威士忌下肚，<span style="color:#ff3232">汉森</span>告诉你戈登警长在找自己麻烦，自己想要想15年前一样，利用一个最近出现的吉普赛女孩儿和警长的矛盾，除掉他，嫁祸给这帮外族人。<br/>
      你强忍着震惊，假装没事的附和着，草草的结束了对话。你找个借口，离开家，迅速的去找<span style="color:#ff3232">卡洛琳</span>。你向<span style="color:#ff3232">卡洛琳</span>解释了事情的来龙去脉，答应和她一起私奔，离开这个是非之地。为了确保你们的安全，你计划偷走<span style="color:#ff3232">汉森</span>的账本。账本里面记录的各种违法的证据，足以使他投鼠忌器。<span style="color:#ff3232">卡洛琳</span>帮你做了一瓶“女巫汤”（一种吉普赛酒），并在里面下了足以让一个成年人迅速昏迷的迷药。这时，<span style="color:#ff3232">卡洛琳</span>告诉你，镇长夫人明天下午邀请她过去算命，你们正好可以一起过去，到时候见机行事，偷走账本后一起私奔。<br/>
      当天<br/>
      一大清早，你悄悄地打包好自己的行李，准备和<span style="color:#ff3232">卡洛琳</span>一起离开这里。4:50，你把行李的藏到客厅一个不起眼的角落，准备完成计划后偷偷带走。为了计划的顺利，你遣散了在客厅打牌的保镖<span style="color:#ff3232">亚伯拉罕</span>和几个打手。然后便带着酒来到了哥哥的书房。<span style="color:#ff3232">汉森</span>很高兴的接待了你，并为倒了一杯他最爱的威士忌给你。你开门见山的劝说哥哥放弃计划，不要再伤害别人。然而，<span style="color:#ff3232">汉森</span>却将你的好意视为对他的背叛，而那个吉普赛女人就是魅惑了你的罪魁祸首。眼见不能说服他，你便倒了一杯 “女巫汤” 让他喝下。很快，<span style="color:#ff3232">汉森</span>便昏迷了过去。你找遍了房间，终于在密室里找到了他隐藏的账本。<br/>
      你看了一眼时间，已经是5:05，离你和<span style="color:#ff3232">卡洛琳</span>约定的见面时间已经很近了。你匆忙的下楼准备离开，却碰到了嫂子<span style="color:#ff3232">玛格丽特</span>。敷衍的寒暄了几句，在她疑惑的目光中，你甚至都没有机会拿走事先藏好的行李箱。到达了约定的车站，<span style="color:#ff3232">卡洛琳</span>并没有和预计的一样在在此等候，直到5:45的时候，才姗姗来迟。看到支支吾吾，又不肯解释的她，你知道这事情不那么简单。<br/>
      8点的时候，因为火车的迟到，你们还是被戈登警长找到，和其他嫌疑人一起被带到了镇长的自杀现场， “这到底是自杀还是他杀？你们几个是今天下午房子周围出现的嫌疑人，把你们知道的都给我老实交代出来，市长的死可是大事，你们要还原出今天下午这栋房子里到底发生了什么，给大众一个交代，不然，所有的人都吃不了兜着走！” 看到哥哥的死，你痛苦不已。你暗暗感到<span style="color:#ff3232">卡洛琳</span>可能与此有关。但是刚刚失去亲人的你不能再失去爱人。于是你决定保护她，消除警长对她的怀疑。`
        },
        {
            roleName: "卡洛琳",
            job: "吉普赛女郎",
            pangbaiUrl: "sound/Jane_ch.mp3",
            sex: "女性",
            age: "27",
            relation: "",
            detail: "美丽开朗。靠售卖吉普赛草药食品和算命生活。",
            id: 2,
            img: "book1/img_role3.png",
            content: `你叫<span style="color:#ff3232">卡洛琳</span>，是一个吉普赛后裔，从小便跟着家人颠沛流离。长大后，你厌倦了这一切，于是离开了家人，开始一个人流浪。你来到小镇福克斯已经3个多月了，靠着算命和流传的吉普赛手艺，过起了稳定的生活。<br/>
      15年前<br/>
      就像所有涉世未深的小女孩，你和家人们一起生活，从一个小镇流浪到另一个小镇。慢慢的，你们发现这现在的小镇对外乡人越来越不友好。听说最近镇上烧死了一个吉普赛女巫，恐惧的氛围笼罩了整座小镇，你的家人和大多数族人一样，选择搬离这个是非之地。<br/>
      3个月前<br/>
      因为偷窃未遂，你不得已逃离了居住了多年的小镇。机缘巧合下，你路过了福克斯。在路边短暂的停留之际，戈登警长出现在你的马车边，警告你早点离开，这个小镇并不欢迎吉普赛人。就在这个窘迫的时候，一个叫<span style="color:#ff3232">乔纳森</span>的男人出现，替你解了围。为了感谢他，你答应和他共进晚餐。你深深的被眼前这个帅气善良的男人所吸引。第二天，你搬进了一间废弃的守林人小屋，决定先留下来碰碰运气。<br/>
      1个月前<br/>
      慢慢的，你已经习惯了这座小镇的生活。你和情人<span style="color:#ff3232">乔纳森</span>如胶似漆，也靠着手艺赚了一些钱，足以养活自己。有一天，镇长夫人<span style="color:#ff3232">玛格丽特</span>来找到你，说她最近被害虫搞得头疼，要求你为她制作杀虫的毒药，在拿走了一个月剂量的毒药后匆匆离开了。<br/>
      1天前<br/>
      这一天，<span style="color:#ff3232">玛格丽特</span>又出现在你的小屋。希望你能为她再制作一些之前的毒药。你告诉她这可能需要一些时间，但是你明天可以给她送货上门。她同意了，并要求你假借算命为由上门，不要把毒药的事情告诉任何人。虽然这听起来很可疑，可谁又会跟钱过不去呢。<br/>
      <span style="color:#ff3232">玛格丽特</span>刚离开，<span style="color:#ff3232">乔纳森</span>就慌张的跑来找你。<span style="color:#ff3232">汉森</span>镇长，他的哥哥，计划杀死戈登警长并嫁祸给你。你说服他一起逃离这里，但是为了确保你们的安全，<span style="color:#ff3232">乔纳森</span>决定在临走前偷走<span style="color:#ff3232">汉森</span>的账本。那里记录着很多<span style="color:#ff3232">汉森</span>的不法交易，应该会让他的哥哥投鼠忌器。<br/>
      你记起明天要去镇长家送药，可以从旁协助。于是<span style="color:#ff3232">乔纳森</span>让你帮他做了一瓶“女巫汤”（一种吉普赛酒），并在酒里掺入了很快可以使人昏迷的药草。<br/>
      当天<br/>
      你在4:00的时候按计划来到<span style="color:#ff3232">汉森</span>镇长的庄园。回想起<span style="color:#ff3232">玛格丽特</span>的种种行为和今天的计划，借着解释塔罗牌，你告诉她的生活会有巨大的转变。你们相视一笑，体会着彼此眼神中的深意。放下了杀毒药，5:00的时候，镇长保镖<span style="color:#ff3232">亚伯拉罕</span>送你出了庄园。在走向约定的地点的路上，你突然发现<span style="color:#ff3232">乔纳森</span>送给自己的定情手镯落在了客厅，于是你冒险在5:20的时候再一次潜入了庄园。<br/>
      别墅的大门紧锁，无人应答。但是这难不倒你，凭借着多年在市井中练就的开锁技能，你轻松的打开了房门，悄悄溜进了楼上夫人的房间。在那里，你找到了自己的手镯。正准备离开，忽然楼下传来了脚步声。你慌不择路的躲进了<span style="color:#ff3232">汉森</span>的书房，看到镇长在迷药的作用下，倒在沙发上。脚步越来越近，你赶忙躲进一间打开的密室。在密室中，你听不清外面发生了什么。仿佛间，你听到一阵争吵，然后周围又迅速回归平静。你溜出来，发现<span style="color:#ff3232">汉森</span>倒在了血泊之中，地上丢弃这一尊沾血的塑像，旁边桌子上放着一把手枪。你刚想逃走，却被慢慢苏醒的镇长发现，“吉普赛女巫，我一定会抓到你，你们就只能用来烧火！” 愤怒和恐惧的支配下，你拿起了枪，抵住了他的太阳穴。这个恶魔终于意识到了危险，开始低三下四的求饶，但是已经太晚了。“到地狱里去忏悔吧！”说罢，你按下了扳机，子弹从他左边太阳穴的伤口打入，结果了这个魔鬼的生命。你留下了一封“我来复仇了-艾斯米拉达”的字条，匆忙离开了现场。见到<span style="color:#ff3232">乔纳森</span>后，你发现找回的手镯再一次不见了，可能是掉落在了密室之中。为避免节外生枝，你没有对<span style="color:#ff3232">乔纳森</span>坦白之后发生的事情。只希望和他快点离开这个可怕的地方，到下一站去继续你们的生活。<br/>
      8点的时候，因为火车的迟到，你们还是被戈登警长找到，和其他嫌疑人一起带到了镇长的死亡现场。 “这到底是自杀还是他杀？你们几个今天下午在别墅周围出现过，把你们知道的都给我老实交代出来，镇长的死可是大事！你们要还原出今天下午这栋房子里到底发生了什么，给所有人一个交代。不然，你们都要吃不了兜着走！”`
        },
        {
            roleName: "玛格丽特",
            job: "贵妇",
            pangbaiUrl: "sound/Harris_ch.mp3",
            age: "34",
            sex: "女性",
            relation: "",
            detail: "高贵大方。每天过着锦衣玉食的阔太太生活。",
            id: 3,
            img: "book1/img_role1.png",
            content: `你叫玛格丽特，是镇长<span style="color:#ff3232">汉森</span>的夫人。你很清楚丈夫的财富和权力来路不正，却贪恋于现在富足的生活，对他的犯罪行为选择了缄默。十年的婚姻里，你住的是小镇里最好的房子，穿的是最精致的衣服，喝着最贵的酒。但是这样的生活却始终无法满足你情感上的空虚，因为你的心，一直都属于那个在远方的初恋。<br/>
      10年前<br/>
      你在这个小镇上长大，父亲是个矿工，母亲在酒吧里调酒。你从小都没有体会过富人的生活，自视甚高的你一直在埋怨命运的不公。然而，不公的命运却赐予了你一份最美妙的爱情。你们如胶似漆，正准备谈婚论嫁的时候，你的初恋却因为强制兵役离开了你们居住的小镇，没过多久，你收到消息，服役中的他死于意外。就在你痛苦万分的时候，<span style="color:#ff3232">汉森</span>走进了你的生活，这个有权有势的男人对你展开追求，没多久，绝望中的你接受了他的求婚。<br/>
      一个月前<br/>
      这天，你偷听到丈夫和手下的爪牙们商量如何偷偷除掉<span style="color:#ff3232">戈登</span>警长，来阻止他调查自己的那些见不得人的买卖。你开始害怕，他会因此锒铛入狱，更会连累到你失去现在的生活。同时，一封来自初恋的信打破了你平静的生活，原来这场婚姻是一场<span style="color:#ff3232">汉森</span>安排下的阴谋，初恋的兵役，意外死亡都是假的。愤怒的你决定离开这个小镇，去和初恋一起开始新的生活。你咨询了理财顾问，得知想要继承<span style="color:#ff3232">汉森</span>的财产，最好的办法是通过遗嘱。你知道你剩余的时间不多了，因为如果<span style="color:#ff3232">汉森</span>被定罪，你很可能会一无所有，甚至会被他连累到锒铛入狱。一番筹谋，你决定用一种慢性毒药来制造<span style="color:#ff3232">汉森</span>的意外死亡。你找到新搬来小镇的吉普赛女郎，<span style="color:#ff3232">卡洛琳</span>，买到了一些虽然毒性不强，但是也可以致人慢性死亡的杀虫药。那时起，你开始把毒药偷偷的投放的<span style="color:#ff3232">汉森</span>的威士忌里。<br/>
      1天前<br/>
      一个月后，毒药已经用完了，<span style="color:#ff3232">汉森</span>的身体虽然出现了一些反应，但是还没有将他置于死地。于是你找到<span style="color:#ff3232">卡洛琳</span>，想购买之前的毒药。她答应会在第二天假借算命之名送货上门，并为你保密杀虫药的事情。<br/>
      当天<br/>
      这天中午，你去银行取了几百块的现金，这种大笔的取现让柜员很不耐烦。<span style="color:#ff3232">卡洛琳</span>在4:00的时候按计划来给你送药，算命过程中，她神秘的告诉你，你的生活会有巨大的转变。你们相视一笑，体会着彼此眼神中的深意。5:00的时候，你让保镖<span style="color:#ff3232">亚伯拉罕</span>送走了<span style="color:#ff3232">卡洛琳</span>，在上楼的时候遇到了神色慌张的<span style="color:#ff3232">乔纳森</span>，你的小叔子。你猜想这对兄弟应该是又吵架了。走到丈夫位于二楼尽头的书房，你看到房门大开，<span style="color:#ff3232">汉森</span>人歪坐在沙发上，桌上还摆着快喝完的酒。大白天的又喝多了！你一边厌恶的想着，一遍回到房休息。你约了太太们5:30打牌，可不想去收拾一个醉鬼，破坏了自己的雅兴。5:25分的时候，你远远的看见书房的门关上了，猜想<span style="color:#ff3232">汉森</span>应该是酒醒了正在工作，便自顾自的下楼离开了家。<br/>
      6:30，你回到家，发现家里空无一人，找到<span style="color:#ff3232">汉森</span>的书房，门是反锁的。你拿出备用钥匙打开门，发现<span style="color:#ff3232">汉森</span>倒在沙发上，一把手枪被丢在手边，他的太阳穴中弹，已经没有了呼吸。你急忙跑到小镇上，叫来了<span style="color:#ff3232">戈登</span>警长。8点的时候，你和其他嫌疑人一起被带到了镇长的自杀现场， “这到底是自杀还是他杀？你们几个是今天下午房子周围出现的嫌疑人，把你们知道的都给我老实交代出来，镇长的死可是大事，你们要还原出今天下午这栋房子里到底发生了什么，给大众一个交代，不然，所有的人都吃不了兜着走！”`
        },
        {
            roleName: "奥利佛",
            pangbaiUrl: "sound/Leo_ch.mp3",
            age: "37",
            job: "富商",
            sex: "男性",
            relation: "",
            detail: "身材瘦削，眼神坚毅。小镇政坛冉冉升起的新星。",
            id: 4,
            img: "book1/img_role4.png",
            content: `你的名字叫<span style="color:#ff3232">奥斯卡</span>。在几年的牢狱生活后，你回到了这座熟悉的小镇。这一切，始于你对现任镇长<span style="color:#ff3232">汉森</span>的仇恨。你要摧毁他那光鲜外表下，用罪恶支撑起的邪恶帝国。更要为当年，被他害死的爱人报仇。现在的你，早已将名字改为<span style="color:#ff3232">奥利佛</span>。经过了几年的努力，现在的你作为一名富商，正欲跻身政坛，与你的仇人<span style="color:#ff3232">汉森</span>一起，竞争下一届的镇长。<br/>
      15年前<br/>
      做为一个年轻的银行家，你凭借着对金融的天赋，很快便在同行中崭露头角。你不仅得到了可观的财富，同时还收获了一份宝贵的爱情。你于一位叫<span style="color:#ff3232">艾丝美拉达</span>的吉普赛女孩坠入爱河，虽然他们神秘的族人为小镇的人所忌惮，但这对你们的爱情没有丝毫影响。直到有一天，你发现镇上的人指责艾斯米拉达用巫术蛊惑了小镇的警长，并控制他自杀。排外的警长虽然和她有过节，但你确定，善良的<span style="color:#ff3232">艾丝美拉达</span>绝对不会做出这样的事情。在一个叫<span style="color:#ff3232">汉森</span>的流氓的怂恿下，愤怒的人群把艾斯米拉达当成女巫抓了起来，最终被烧死在十字架上。<br/>
      你想尽办法，没能改变爱人悲惨的命运，痛苦的终日买醉，逃离现实。却在无意间从一个醉酒的客户嘴里听说<span style="color:#ff3232">汉森</span>才是警长之死的真凶，而艾斯米拉达只是替罪羊。愤怒和酒精的作用下，你试图杀掉<span style="color:#ff3232">汉森</span>为她报仇，可终因寡不敌众，被他的爪牙制伏并扔进了监狱。<br/>
      10年前<br/>
      在监狱服刑的日子里，你时常握着她死前几天送你的半块心形项链，一遍一遍的计划着如何在出狱后为自己的爱人报仇，并找到她死后失散的私生子。在你的刑期快结束时，你得知<span style="color:#ff3232">汉森</span>凭借多年的经营，已经成为福克斯镇的镇长。你发誓要夺走<span style="color:#ff3232">汉森</span>所拥有的名利以后，让他在痛苦中死去，以祭奠艾斯米拉达的在天之灵。离开监狱后，你改名为<span style="color:#ff3232">奥利佛</span>，来隐藏自己的身份。或许是<span style="color:#ff3232">艾丝美拉达</span>在天上的庇佑，短短的几年时间里，你发了财，变成了远近闻名的富翁。你知道，你终于可以展开对<span style="color:#ff3232">汉森</span>的复仇了。<br/>
      5个月前<br/>
      你参加镇长的竞选已经有一段时间了。你慢慢拥有了自己的支持者，但是这并不足以扳倒<span style="color:#ff3232">汉森</span>镇长。这时，你找到了<span style="color:#ff3232">亚伯拉罕</span>，<span style="color:#ff3232">汉森</span>的保镖。从他那里，你买到了一些关于<span style="color:#ff3232">汉森</span>的黑料。你雇人添油加醋的散播这些黑料。正如你预期的，这引来了新任的警长<span style="color:#ff3232">戈登</span>对<span style="color:#ff3232">汉森</span>的调查，他的民意开始下滑。<br/>
      1天前
      今天，你收到一封来自<span style="color:#ff3232">汉森</span>的邀请函，让你到他的别墅会面。你很担心，天知道这个暴徒会拿你怎么样。万幸的是，很快你便收到了来自<span style="color:#ff3232">亚伯拉罕</span>的消息，让你在5:40在<span style="color:#ff3232">汉森</span>家旁边的老树旁与他见面，届时他会为你确认与<span style="color:#ff3232">汉森</span>的会面是否安全。<br/>
      当天<br/>
      这一天，你怀着忐忑的心情，提前来到了和<span style="color:#ff3232">亚伯拉罕</span>约定的地点。5分钟后，一向守时的他才姗姗来迟。你留意到<span style="color:#ff3232">亚伯拉罕</span>的脖子上好像有血迹，便不动声色的提醒了他。得知今天的会面不会要你性命后，你放心的径直去向<span style="color:#ff3232">汉森</span>的别墅。<br/>
      来到别墅，半天都没有人应答你的敲门。推开虚掩的大门，你发现家里空无一人。不安的你探索着找到了<span style="color:#ff3232">汉森</span>的书房。透过虚掩的房门，里面的一切让你大吃一惊。<span style="color:#ff3232">汉森</span>倒在自己的血泊之中，不远处扔着一把手枪。子弹正中<span style="color:#ff3232">汉森</span>左边的太阳穴。尸体旁边的桌子上放着一封信，上面写道，“我来复仇了-<span style="color:#ff3232">艾斯美拉达</span>” 。慌乱中，你的脚踢到一条项链，拿起后发现上面的心形坠饰竟然和<span style="color:#ff3232">艾丝美拉达</span>留下的项链是一对。你心里一震，再想到<span style="color:#ff3232">亚伯拉罕</span>刚刚的举动，你便明白了发生的一切。原来他就是艾斯米拉达失散了的私生子。刚刚<span style="color:#ff3232">亚伯拉罕</span>一定是找到了机会，杀掉了<span style="color:#ff3232">汉森</span>为母亲报仇。然而这样做，已然让他自己陷入了万劫不复的深渊。你决定要保护这个可怜的孩子。留意到桌子上的吉普赛酒，地上的手枪，太阳穴中弹的尸体，你突然想起当年警长被杀和艾斯米拉达被诬陷为女巫的案子。果然天道好轮回，你脑海里浮现出了一个计划。你把尸体抱到沙发上，用手绢把手枪放到<span style="color:#ff3232">汉森</span>手上，做出自杀的假象。收起了地上的项链和桌子上的字条，关上窗户，最后在桌子上剪了一段风筝用的丝线，把书房门从外面锁了起来，造成密室自杀的假象。伪装完现场，你看到四下无人，在大门口留下了一张字条：“前来赴约，无人在家。改日再来拜访”。关上了大门，扔掉了案发现场捡到的项链和字条。之后你回到了小镇上，找了间酒吧，强装镇定的坐了下来。<br/>
      8:00的时候，<span style="color:#ff3232">戈登</span>警长找到你，把你和其他嫌疑人一起带到了镇长的死亡现场。 “这到底是自杀还是他杀？你们几个今天下午在别墅周围出现过，把你们知道的都给我老实交代出来，镇长的死可是大事！你们要还原出今天下午这栋房子里到底发生了什么，给所有人一个交代。不然，你们都要吃不了兜着走！”`
        },
        {
            roleName: "亚伯拉罕",
            pangbaiUrl: "sound/Wilson_ch.mp3",
            job: "保镖",
            age: "18",
            sex: "男性",
            relation: "",
            detail: "身体强壮，精力充沛。操着一口外乡口音的年轻人。",
            id: 5,
            img: "book1/img_role5.png",
            content: `你叫亚伯拉罕。不久前，你回到了这座叫福克斯的小镇，寻找关于你生母死亡的真相。为了生活，你成了<span style="color:#ff3232">汉森</span>镇长的保镖。这份工作给你提供了稳定的收入。慢慢的，镇长一些可疑的行为引起了你的注意。 后来，你发现<span style="color:#ff3232">汉森</span>是用违法手段，靠暴力和贿赂，维持自己在小镇的身份与地位。但是作为一个外乡人，迫于生计，你不得不向现实低头，成为<span style="color:#ff3232">汉森</span>的爪牙之一。<br/>
      15年前<br/>
      母亲在你三岁的时候就去世了，你辗转被另一座小镇上的一家好心人收养。直到你成年那天，你的养父母在无意间透露了你的亲生母亲是被福克斯小镇上的居民当成女巫烧死的。悲伤和震惊之余，你决定搬回福克斯，寻求事情的真相。你临走之前，你的养父母把你母亲的遗物，半颗心形的吊坠交还到你的手里。<br/>
      5个月前<br/>
      你回到这里已经有几个月了，闲暇时候在河边钓鱼，打发时间和烦闷的心情。有一天，一个叫<span style="color:#ff3232">奥利佛</span>的男人在河边找到你。作为新一届镇长竞选的有力竞争者，他愿意从你手中购买有关<span style="color:#ff3232">汉森</span>镇长违法交易的黑料。难以抵挡巨额报酬的诱惑，你决定背叛<span style="color:#ff3232">汉森</span>，成为了<span style="color:#ff3232">奥利佛</span>的卧底。<br/>
      1个月前<br/>
      你在小镇的时间越来越久，虽然小镇的居民都对你母亲的事情讳莫如深，但是你还是打听到她的名字叫<span style="color:#ff3232">艾斯米拉达</span>，她的死和自杀身亡的前任警长有关。<br/>
      1天前<br/>
      这天，你照常和一众打手在镇长家的客厅里打牌。期间，你打听到，今天没有安排任何行动，你可以确定<span style="color:#ff3232">奥利佛</span>至少在今天的会面中是安全的。4：00的时候，镇长夫人<span style="color:#ff3232">玛格丽特</span>接待了一位叫<span style="color:#ff3232">卡洛琳</span>的吉普赛女孩儿，听说是来算命的神棍。镇长弟弟<span style="color:#ff3232">乔纳森</span>在4:50的时候来到别墅，说今天没什么事情，遣散了众打手。5:00的时候<span style="color:#ff3232">玛格丽特</span>让你送<span style="color:#ff3232">卡洛琳</span>出门，说自己身体不舒服，想回房间休息。5:05的时候你回到自己的房间，拿出了当天买好的鱼线摆弄了起来。<br/>
      5:25的时候，你上楼提醒<span style="color:#ff3232">汉森</span>他傍晚的行程，却发现他在办公室的沙发上睡着了。被你摇醒后，<span style="color:#ff3232">汉森</span>大发雷霆，大骂自己的弟弟为了吉普赛情人，竟然敢背叛自己。他叫嚣着让你马上把他们抓回来， “我要让<span style="color:#ff3232">乔纳森</span>知道背叛我的下场，他会像15年前的那个傻瓜银行家一样，看着心爱的女人在自己面前活活被烧死。” 你压下心中的震惊，试探的问<span style="color:#ff3232">汉森</span>，下一步要怎么做。这时的<span style="color:#ff3232">汉森</span>已经失去了理智，“还能怎么做？去杀了警长，布置成自杀，像15年前一样栽赃给这些肮脏的吉普赛人，她们唯一的作用就是当柴火烧。” 这时的你意识到，<span style="color:#ff3232">汉森</span>就是当年陷害你母亲，杀死前任警长的元凶。你被怒火所吞噬，你质问他为什么要害死你无辜的母亲。<span style="color:#ff3232">汉森</span>的眼神从惊诧变成了恐惧，随即看向了桌上放着的手枪。你不等他有任何动作，抄起手边的塑像砸中他左边的太阳穴。这个恶魔在恐惧的眼神里，结束了他罪恶的一生。慌乱中，你用袖子擦掉雕像上的血迹，为了避免被人发现，从窗户逃离了现场。<br/>
      你回到自己的房间，换下沾了血的衣服，赶忙跑去和<span style="color:#ff3232">奥利佛</span>碰面。5:45的时候，你看到他早早的就在约定地点等你了。你告诉他，这次的会面是安全的，可以按计划赴约。临走前，<span style="color:#ff3232">奥利佛</span>似有似无的提醒你脖子上有血迹，看着他奇妙的眼神，你很担心他可能会揭穿你。强装镇定的你回到了自己的房间，擦掉脖子上的血迹，并在垃圾桶里烧掉了带血的外衣。别人问起来，你大可以说是烧掉了没用的信件，无凭无据，没人能拿你怎么样。<br/>
      8:00的时候，<span style="color:#ff3232">戈登</span>警长找到你，把你和其他嫌疑人一起带到了镇长的死亡现场。你懵了，难道有人在暗中帮助你伪造了自杀现场？ “这到底是自杀还是他杀？你们几个今天下午在别墅周围出现过，把你们知道的都给我老实交代出来，镇长的死可是大事！你们要还原出今天下午这栋房子里到底发生了什么，给所有人一个交代。不然，你们都要吃不了兜着走！”`
        },
        {
            roleName: "戈登",
            job: "警长",
            sex: "男性",
            age: "40",
            detail: "小镇的警长，不拘言笑。刚调任不久，因一丝不苟的态度很快让小镇的人们信服，相传他为人公正却保守。",
            relation: "",
            id: 6,
            img: "book1/img_role7.png",
            content: `你数月前来到小镇福克斯，开始清理上一任警长留下的烂摊子。最近总有人匿名给你送来一些镇长汉森的黑料，经调查后，你发现这些竟然并非空穴来风。你获得了足够多的证据后，向检察官申请了搜查令，要求汉森镇长配合调查。<br/>
      今天晚上8：00的时候，镇长夫人玛格丽特来警局找到你，说她的丈夫在家自杀身亡。你检查了现场，并让警员带回了下午出现在镇长别墅的嫌疑人： “这到底是自杀还是他杀？你们几个今天下午在别墅周围出现过，把你们知道的都给我老实交代出来，镇长的死可是大事！你们要还原出今天下午这栋房子里到底发生了什么，给所有人一个交代。不然，你们都要吃不了兜着走！”<br/>`
        }
    ];
    BookConfig2.roleList_ch = [
        {
            roleName: "乔纳森",
            job: "海军水手",
            age: "35",
            sex: "男性",
            relation: "",
            pangbaiUrl: "sound/Joe_ch.mp3",
            detail: "海军水手，身材健壮，皮肤黝黑。刚刚退伍，回到小镇。",
            id: 1,
            img: "book1/img_role2.png",
            content: `你是<span style="color:#ff3232"><span style="color:#ff3232">汉森</span></span>镇长的弟弟。曾经的你，和哥哥关系亲密，互相扶持着在市井中一起长大。在贫苦的环境中，你们只能通过不法的手段赚钱养活自己。天性纯良的你，慢慢的开始厌恶打打杀杀的生活。离开了小镇，入伍成为一名海军。从海军退伍后，你又回到了小镇福克斯，探望自己的哥哥。<br/>
      15年前<br/>
      作为哥哥的左右手，你做了许多为人所不齿的事情，你对善恶的界限开始麻木。直到有一天，你的哥哥为了自己的利益，诬陷并烧死了一个外乡的女孩儿。终于在良知的责备下，你和哥哥大吵了一架，哥哥的冷漠让你感到绝望。你决定远离现在罪恶的生活和邪恶的哥哥。<br/>
      3个月前<br/>
      刚刚从海军退伍的你已经回到小镇几天，一切已经大不一样了，你的哥哥也从一个小流氓洗白成了一镇之长。这一天你在路上，碰到了新任警长正在找一个吉普赛女孩的麻烦。在众目睽睽下，只有你伸出援手，帮助了这个叫<span style="color:#ff3232">卡洛琳</span>的可怜女孩。而你，通过这个善举，秘密的收获了一个和<span style="color:#ff3232">卡洛琳</span>的美妙约会。<br/>
      1天前<br/>
      回到小镇之后，你有意的保持着和哥哥之间的接触，避免和他的“生意”扯上关系。同时因为小镇人的保守，你和<span style="color:#ff3232">卡洛琳</span>决定将你们的恋情对所有人保密。随着竞选的临近，<span style="color:#ff3232">汉森</span>的处境越来越不利，你还是不可避免的被哥哥叫去商量对策。几杯威士忌下肚，<span style="color:#ff3232">汉森</span>告诉你戈登警长在找自己麻烦，自己想要想15年前一样，利用一个最近出现的吉普赛女孩儿和警长的矛盾，除掉他，嫁祸给这帮外族人。<br/>
      你强忍着震惊，假装没事的附和着，草草的结束了对话。你找个借口，离开家，迅速的去找<span style="color:#ff3232">卡洛琳</span>。你向<span style="color:#ff3232">卡洛琳</span>解释了事情的来龙去脉，答应和她一起私奔，离开这个是非之地。为了确保你们的安全，你计划偷走<span style="color:#ff3232">汉森</span>的账本。账本里面记录的各种违法的证据，足以使他投鼠忌器。<span style="color:#ff3232">卡洛琳</span>帮你做了一瓶“女巫汤”（一种吉普赛酒），并在里面下了足以让一个成年人迅速昏迷的迷药。这时，<span style="color:#ff3232">卡洛琳</span>告诉你，镇长夫人明天下午邀请她过去算命，你们正好可以一起过去，到时候见机行事，偷走账本后一起私奔。<br/>
      当天<br/>
      一大清早，你悄悄地打包好自己的行李，准备和<span style="color:#ff3232">卡洛琳</span>一起离开这里。4:50，你把行李的藏到客厅一个不起眼的角落，准备完成计划后偷偷带走。为了计划的顺利，你遣散了在客厅打牌的保镖<span style="color:#ff3232">亚伯拉罕</span>和几个打手。然后便带着酒来到了哥哥的书房。<span style="color:#ff3232">汉森</span>很高兴的接待了你，并为倒了一杯他最爱的威士忌给你。你开门见山的劝说哥哥放弃计划，不要再伤害别人。然而，<span style="color:#ff3232">汉森</span>却将你的好意视为对他的背叛，而那个吉普赛女人就是魅惑了你的罪魁祸首。眼见不能说服他，你便倒了一杯 “女巫汤” 让他喝下。很快，<span style="color:#ff3232">汉森</span>便昏迷了过去。你找遍了房间，终于在密室里找到了他隐藏的账本。<br/>
      你看了一眼时间，已经是5:05，离你和<span style="color:#ff3232">卡洛琳</span>约定的见面时间已经很近了。你匆忙的下楼准备离开，却碰到了嫂子<span style="color:#ff3232">玛格丽特</span>。敷衍的寒暄了几句，在她疑惑的目光中，你甚至都没有机会拿走事先藏好的行李箱。到达了约定的车站，<span style="color:#ff3232">卡洛琳</span>并没有和预计的一样在在此等候，直到5:45的时候，才姗姗来迟。看到支支吾吾，又不肯解释的她，你知道这事情不那么简单。<br/>
      8点的时候，因为火车的迟到，你们还是被戈登警长找到，和其他嫌疑人一起被带到了镇长的自杀现场， “这到底是自杀还是他杀？你们几个是今天下午房子周围出现的嫌疑人，把你们知道的都给我老实交代出来，市长的死可是大事，你们要还原出今天下午这栋房子里到底发生了什么，给大众一个交代，不然，所有的人都吃不了兜着走！” 看到哥哥的死，你痛苦不已。你暗暗感到<span style="color:#ff3232">卡洛琳</span>可能与此有关。但是刚刚失去亲人的你不能再失去爱人。于是你决定保护她，消除警长对她的怀疑。`
        },
        {
            roleName: "卡洛琳",
            job: "吉普赛女郎",
            pangbaiUrl: "sound/Jane_ch.mp3",
            sex: "女性",
            age: "27",
            relation: "",
            detail: "美丽开朗。靠售卖吉普赛草药食品和算命生活。",
            id: 2,
            img: "book1/img_role3.png",
            content: `你叫<span style="color:#ff3232">卡洛琳</span>，是一个吉普赛后裔，从小便跟着家人颠沛流离。长大后，你厌倦了这一切，于是离开了家人，开始一个人流浪。你来到小镇福克斯已经3个多月了，靠着算命和流传的吉普赛手艺，过起了稳定的生活。<br/>
      15年前<br/>
      就像所有涉世未深的小女孩，你和家人们一起生活，从一个小镇流浪到另一个小镇。慢慢的，你们发现这现在的小镇对外乡人越来越不友好。听说最近镇上烧死了一个吉普赛女巫，恐惧的氛围笼罩了整座小镇，你的家人和大多数族人一样，选择搬离这个是非之地。<br/>
      3个月前<br/>
      因为偷窃未遂，你不得已逃离了居住了多年的小镇。机缘巧合下，你路过了福克斯。在路边短暂的停留之际，戈登警长出现在你的马车边，警告你早点离开，这个小镇并不欢迎吉普赛人。就在这个窘迫的时候，一个叫<span style="color:#ff3232">乔纳森</span>的男人出现，替你解了围。为了感谢他，你答应和他共进晚餐。你深深的被眼前这个帅气善良的男人所吸引。第二天，你搬进了一间废弃的守林人小屋，决定先留下来碰碰运气。<br/>
      1个月前<br/>
      慢慢的，你已经习惯了这座小镇的生活。你和情人<span style="color:#ff3232">乔纳森</span>如胶似漆，也靠着手艺赚了一些钱，足以养活自己。有一天，镇长夫人<span style="color:#ff3232">玛格丽特</span>来找到你，说她最近被害虫搞得头疼，要求你为她制作杀虫的毒药，在拿走了一个月剂量的毒药后匆匆离开了。<br/>
      1天前<br/>
      这一天，<span style="color:#ff3232">玛格丽特</span>又出现在你的小屋。希望你能为她再制作一些之前的毒药。你告诉她这可能需要一些时间，但是你明天可以给她送货上门。她同意了，并要求你假借算命为由上门，不要把毒药的事情告诉任何人。虽然这听起来很可疑，可谁又会跟钱过不去呢。<br/>
      <span style="color:#ff3232">玛格丽特</span>刚离开，<span style="color:#ff3232">乔纳森</span>就慌张的跑来找你。<span style="color:#ff3232">汉森</span>镇长，他的哥哥，计划杀死戈登警长并嫁祸给你。你说服他一起逃离这里，但是为了确保你们的安全，<span style="color:#ff3232">乔纳森</span>决定在临走前偷走<span style="color:#ff3232">汉森</span>的账本。那里记录着很多<span style="color:#ff3232">汉森</span>的不法交易，应该会让他的哥哥投鼠忌器。<br/>
      你记起明天要去镇长家送药，可以从旁协助。于是<span style="color:#ff3232">乔纳森</span>让你帮他做了一瓶“女巫汤”（一种吉普赛酒），并在酒里掺入了很快可以使人昏迷的药草。<br/>
      当天<br/>
      你在4:00的时候按计划来到<span style="color:#ff3232">汉森</span>镇长的庄园。回想起<span style="color:#ff3232">玛格丽特</span>的种种行为和今天的计划，借着解释塔罗牌，你告诉她的生活会有巨大的转变。你们相视一笑，体会着彼此眼神中的深意。放下了杀毒药，5:00的时候，镇长保镖<span style="color:#ff3232">亚伯拉罕</span>送你出了庄园。在走向约定的地点的路上，你突然发现<span style="color:#ff3232">乔纳森</span>送给自己的定情手镯落在了客厅，于是你冒险在5:20的时候再一次潜入了庄园。<br/>
      别墅的大门紧锁，无人应答。但是这难不倒你，凭借着多年在市井中练就的开锁技能，你轻松的打开了房门，悄悄溜进了楼上夫人的房间。在那里，你找到了自己的手镯。正准备离开，忽然楼下传来了脚步声。你慌不择路的躲进了<span style="color:#ff3232">汉森</span>的书房，看到镇长在迷药的作用下，倒在沙发上。脚步越来越近，你赶忙躲进一间打开的密室。在密室中，你听不清外面发生了什么。仿佛间，你听到一阵争吵，然后周围又迅速回归平静。你溜出来，发现<span style="color:#ff3232">汉森</span>倒在了血泊之中，地上丢弃这一尊沾血的塑像，旁边桌子上放着一把手枪。你刚想逃走，却被慢慢苏醒的镇长发现，“吉普赛女巫，我一定会抓到你，你们就只能用来烧火！” 愤怒和恐惧的支配下，你拿起了枪，抵住了他的太阳穴。这个恶魔终于意识到了危险，开始低三下四的求饶，但是已经太晚了。“到地狱里去忏悔吧！”说罢，你按下了扳机，子弹从他左边太阳穴的伤口打入，结果了这个魔鬼的生命。你留下了一封“我来复仇了-艾斯米拉达”的字条，匆忙离开了现场。见到<span style="color:#ff3232">乔纳森</span>后，你发现找回的手镯再一次不见了，可能是掉落在了密室之中。为避免节外生枝，你没有对<span style="color:#ff3232">乔纳森</span>坦白之后发生的事情。只希望和他快点离开这个可怕的地方，到下一站去继续你们的生活。<br/>
      8点的时候，因为火车的迟到，你们还是被戈登警长找到，和其他嫌疑人一起带到了镇长的死亡现场。 “这到底是自杀还是他杀？你们几个今天下午在别墅周围出现过，把你们知道的都给我老实交代出来，镇长的死可是大事！你们要还原出今天下午这栋房子里到底发生了什么，给所有人一个交代。不然，你们都要吃不了兜着走！”`
        },
        {
            roleName: "玛格丽特",
            job: "贵妇",
            pangbaiUrl: "sound/Harris_ch.mp3",
            age: "34",
            sex: "女性",
            relation: "",
            detail: "高贵大方。每天过着锦衣玉食的阔太太生活。",
            id: 3,
            img: "book1/img_role1.png",
            content: `你叫玛格丽特，是镇长<span style="color:#ff3232">汉森</span>的夫人。你很清楚丈夫的财富和权力来路不正，却贪恋于现在富足的生活，对他的犯罪行为选择了缄默。十年的婚姻里，你住的是小镇里最好的房子，穿的是最精致的衣服，喝着最贵的酒。但是这样的生活却始终无法满足你情感上的空虚，因为你的心，一直都属于那个在远方的初恋。<br/>
      10年前<br/>
      你在这个小镇上长大，父亲是个矿工，母亲在酒吧里调酒。你从小都没有体会过富人的生活，自视甚高的你一直在埋怨命运的不公。然而，不公的命运却赐予了你一份最美妙的爱情。你们如胶似漆，正准备谈婚论嫁的时候，你的初恋却因为强制兵役离开了你们居住的小镇，没过多久，你收到消息，服役中的他死于意外。就在你痛苦万分的时候，<span style="color:#ff3232">汉森</span>走进了你的生活，这个有权有势的男人对你展开追求，没多久，绝望中的你接受了他的求婚。<br/>
      一个月前<br/>
      这天，你偷听到丈夫和手下的爪牙们商量如何偷偷除掉<span style="color:#ff3232">戈登</span>警长，来阻止他调查自己的那些见不得人的买卖。你开始害怕，他会因此锒铛入狱，更会连累到你失去现在的生活。同时，一封来自初恋的信打破了你平静的生活，原来这场婚姻是一场<span style="color:#ff3232">汉森</span>安排下的阴谋，初恋的兵役，意外死亡都是假的。愤怒的你决定离开这个小镇，去和初恋一起开始新的生活。你咨询了理财顾问，得知想要继承<span style="color:#ff3232">汉森</span>的财产，最好的办法是通过遗嘱。你知道你剩余的时间不多了，因为如果<span style="color:#ff3232">汉森</span>被定罪，你很可能会一无所有，甚至会被他连累到锒铛入狱。一番筹谋，你决定用一种慢性毒药来制造<span style="color:#ff3232">汉森</span>的意外死亡。你找到新搬来小镇的吉普赛女郎，<span style="color:#ff3232">卡洛琳</span>，买到了一些虽然毒性不强，但是也可以致人慢性死亡的杀虫药。那时起，你开始把毒药偷偷的投放的<span style="color:#ff3232">汉森</span>的威士忌里。<br/>
      1天前<br/>
      一个月后，毒药已经用完了，<span style="color:#ff3232">汉森</span>的身体虽然出现了一些反应，但是还没有将他置于死地。于是你找到<span style="color:#ff3232">卡洛琳</span>，想购买之前的毒药。她答应会在第二天假借算命之名送货上门，并为你保密杀虫药的事情。<br/>
      当天<br/>
      这天中午，你去银行取了几百块的现金，这种大笔的取现让柜员很不耐烦。<span style="color:#ff3232">卡洛琳</span>在4:00的时候按计划来给你送药，算命过程中，她神秘的告诉你，你的生活会有巨大的转变。你们相视一笑，体会着彼此眼神中的深意。5:00的时候，你让保镖<span style="color:#ff3232">亚伯拉罕</span>送走了<span style="color:#ff3232">卡洛琳</span>，在上楼的时候遇到了神色慌张的<span style="color:#ff3232">乔纳森</span>，你的小叔子。你猜想这对兄弟应该是又吵架了。走到丈夫位于二楼尽头的书房，你看到房门大开，<span style="color:#ff3232">汉森</span>人歪坐在沙发上，桌上还摆着快喝完的酒。大白天的又喝多了！你一边厌恶的想着，一遍回到房休息。你约了太太们5:30打牌，可不想去收拾一个醉鬼，破坏了自己的雅兴。5:25分的时候，你远远的看见书房的门关上了，猜想<span style="color:#ff3232">汉森</span>应该是酒醒了正在工作，便自顾自的下楼离开了家。<br/>
      6:30，你回到家，发现家里空无一人，找到<span style="color:#ff3232">汉森</span>的书房，门是反锁的。你拿出备用钥匙打开门，发现<span style="color:#ff3232">汉森</span>倒在沙发上，一把手枪被丢在手边，他的太阳穴中弹，已经没有了呼吸。你急忙跑到小镇上，叫来了<span style="color:#ff3232">戈登</span>警长。8点的时候，你和其他嫌疑人一起被带到了镇长的自杀现场， “这到底是自杀还是他杀？你们几个是今天下午房子周围出现的嫌疑人，把你们知道的都给我老实交代出来，镇长的死可是大事，你们要还原出今天下午这栋房子里到底发生了什么，给大众一个交代，不然，所有的人都吃不了兜着走！”`
        },
        {
            roleName: "奥利佛",
            pangbaiUrl: "sound/Leo_ch.mp3",
            age: "37",
            job: "富商",
            sex: "男性",
            relation: "",
            detail: "身材瘦削，眼神坚毅。小镇政坛冉冉升起的新星。",
            id: 4,
            img: "book1/img_role4.png",
            content: `你的名字叫<span style="color:#ff3232">奥斯卡</span>。在几年的牢狱生活后，你回到了这座熟悉的小镇。这一切，始于你对现任镇长<span style="color:#ff3232">汉森</span>的仇恨。你要摧毁他那光鲜外表下，用罪恶支撑起的邪恶帝国。更要为当年，被他害死的爱人报仇。现在的你，早已将名字改为<span style="color:#ff3232">奥利佛</span>。经过了几年的努力，现在的你作为一名富商，正欲跻身政坛，与你的仇人<span style="color:#ff3232">汉森</span>一起，竞争下一届的镇长。<br/>
      15年前<br/>
      做为一个年轻的银行家，你凭借着对金融的天赋，很快便在同行中崭露头角。你不仅得到了可观的财富，同时还收获了一份宝贵的爱情。你于一位叫<span style="color:#ff3232">艾丝美拉达</span>的吉普赛女孩坠入爱河，虽然他们神秘的族人为小镇的人所忌惮，但这对你们的爱情没有丝毫影响。直到有一天，你发现镇上的人指责艾斯米拉达用巫术蛊惑了小镇的警长，并控制他自杀。排外的警长虽然和她有过节，但你确定，善良的<span style="color:#ff3232">艾丝美拉达</span>绝对不会做出这样的事情。在一个叫<span style="color:#ff3232">汉森</span>的流氓的怂恿下，愤怒的人群把艾斯米拉达当成女巫抓了起来，最终被烧死在十字架上。<br/>
      你想尽办法，没能改变爱人悲惨的命运，痛苦的终日买醉，逃离现实。却在无意间从一个醉酒的客户嘴里听说<span style="color:#ff3232">汉森</span>才是警长之死的真凶，而艾斯米拉达只是替罪羊。愤怒和酒精的作用下，你试图杀掉<span style="color:#ff3232">汉森</span>为她报仇，可终因寡不敌众，被他的爪牙制伏并扔进了监狱。<br/>
      10年前<br/>
      在监狱服刑的日子里，你时常握着她死前几天送你的半块心形项链，一遍一遍的计划着如何在出狱后为自己的爱人报仇，并找到她死后失散的私生子。在你的刑期快结束时，你得知<span style="color:#ff3232">汉森</span>凭借多年的经营，已经成为福克斯镇的镇长。你发誓要夺走<span style="color:#ff3232">汉森</span>所拥有的名利以后，让他在痛苦中死去，以祭奠艾斯米拉达的在天之灵。离开监狱后，你改名为<span style="color:#ff3232">奥利佛</span>，来隐藏自己的身份。或许是<span style="color:#ff3232">艾丝美拉达</span>在天上的庇佑，短短的几年时间里，你发了财，变成了远近闻名的富翁。你知道，你终于可以展开对<span style="color:#ff3232">汉森</span>的复仇了。<br/>
      5个月前<br/>
      你参加镇长的竞选已经有一段时间了。你慢慢拥有了自己的支持者，但是这并不足以扳倒<span style="color:#ff3232">汉森</span>镇长。这时，你找到了<span style="color:#ff3232">亚伯拉罕</span>，<span style="color:#ff3232">汉森</span>的保镖。从他那里，你买到了一些关于<span style="color:#ff3232">汉森</span>的黑料。你雇人添油加醋的散播这些黑料。正如你预期的，这引来了新任的警长<span style="color:#ff3232">戈登</span>对<span style="color:#ff3232">汉森</span>的调查，他的民意开始下滑。<br/>
      1天前
      今天，你收到一封来自<span style="color:#ff3232">汉森</span>的邀请函，让你到他的别墅会面。你很担心，天知道这个暴徒会拿你怎么样。万幸的是，很快你便收到了来自<span style="color:#ff3232">亚伯拉罕</span>的消息，让你在5:40在<span style="color:#ff3232">汉森</span>家旁边的老树旁与他见面，届时他会为你确认与<span style="color:#ff3232">汉森</span>的会面是否安全。<br/>
      当天<br/>
      这一天，你怀着忐忑的心情，提前来到了和<span style="color:#ff3232">亚伯拉罕</span>约定的地点。5分钟后，一向守时的他才姗姗来迟。你留意到<span style="color:#ff3232">亚伯拉罕</span>的脖子上好像有血迹，便不动声色的提醒了他。得知今天的会面不会要你性命后，你放心的径直去向<span style="color:#ff3232">汉森</span>的别墅。<br/>
      来到别墅，半天都没有人应答你的敲门。推开虚掩的大门，你发现家里空无一人。不安的你探索着找到了<span style="color:#ff3232">汉森</span>的书房。透过虚掩的房门，里面的一切让你大吃一惊。<span style="color:#ff3232">汉森</span>倒在自己的血泊之中，不远处扔着一把手枪。子弹正中<span style="color:#ff3232">汉森</span>左边的太阳穴。尸体旁边的桌子上放着一封信，上面写道，“我来复仇了-<span style="color:#ff3232">艾斯美拉达</span>” 。慌乱中，你的脚踢到一条项链，拿起后发现上面的心形坠饰竟然和<span style="color:#ff3232">艾丝美拉达</span>留下的项链是一对。你心里一震，再想到<span style="color:#ff3232">亚伯拉罕</span>刚刚的举动，你便明白了发生的一切。原来他就是艾斯米拉达失散了的私生子。刚刚<span style="color:#ff3232">亚伯拉罕</span>一定是找到了机会，杀掉了<span style="color:#ff3232">汉森</span>为母亲报仇。然而这样做，已然让他自己陷入了万劫不复的深渊。你决定要保护这个可怜的孩子。留意到桌子上的吉普赛酒，地上的手枪，太阳穴中弹的尸体，你突然想起当年警长被杀和艾斯米拉达被诬陷为女巫的案子。果然天道好轮回，你脑海里浮现出了一个计划。你把尸体抱到沙发上，用手绢把手枪放到<span style="color:#ff3232">汉森</span>手上，做出自杀的假象。收起了地上的项链和桌子上的字条，关上窗户，最后在桌子上剪了一段风筝用的丝线，把书房门从外面锁了起来，造成密室自杀的假象。伪装完现场，你看到四下无人，在大门口留下了一张字条：“前来赴约，无人在家。改日再来拜访”。关上了大门，扔掉了案发现场捡到的项链和字条。之后你回到了小镇上，找了间酒吧，强装镇定的坐了下来。<br/>
      8:00的时候，<span style="color:#ff3232">戈登</span>警长找到你，把你和其他嫌疑人一起带到了镇长的死亡现场。 “这到底是自杀还是他杀？你们几个今天下午在别墅周围出现过，把你们知道的都给我老实交代出来，镇长的死可是大事！你们要还原出今天下午这栋房子里到底发生了什么，给所有人一个交代。不然，你们都要吃不了兜着走！”`
        },
        {
            roleName: "亚伯拉罕",
            pangbaiUrl: "sound/Wilson_ch.mp3",
            job: "保镖",
            age: "18",
            sex: "男性",
            relation: "",
            detail: "身体强壮，精力充沛。操着一口外乡口音的年轻人。",
            id: 5,
            img: "book1/img_role5.png",
            content: `你叫亚伯拉罕。不久前，你回到了这座叫福克斯的小镇，寻找关于你生母死亡的真相。为了生活，你成了<span style="color:#ff3232">汉森</span>镇长的保镖。这份工作给你提供了稳定的收入。慢慢的，镇长一些可疑的行为引起了你的注意。 后来，你发现<span style="color:#ff3232">汉森</span>是用违法手段，靠暴力和贿赂，维持自己在小镇的身份与地位。但是作为一个外乡人，迫于生计，你不得不向现实低头，成为<span style="color:#ff3232">汉森</span>的爪牙之一。<br/>
      15年前<br/>
      母亲在你三岁的时候就去世了，你辗转被另一座小镇上的一家好心人收养。直到你成年那天，你的养父母在无意间透露了你的亲生母亲是被福克斯小镇上的居民当成女巫烧死的。悲伤和震惊之余，你决定搬回福克斯，寻求事情的真相。你临走之前，你的养父母把你母亲的遗物，半颗心形的吊坠交还到你的手里。<br/>
      5个月前<br/>
      你回到这里已经有几个月了，闲暇时候在河边钓鱼，打发时间和烦闷的心情。有一天，一个叫<span style="color:#ff3232">奥利佛</span>的男人在河边找到你。作为新一届镇长竞选的有力竞争者，他愿意从你手中购买有关<span style="color:#ff3232">汉森</span>镇长违法交易的黑料。难以抵挡巨额报酬的诱惑，你决定背叛<span style="color:#ff3232">汉森</span>，成为了<span style="color:#ff3232">奥利佛</span>的卧底。<br/>
      1个月前<br/>
      你在小镇的时间越来越久，虽然小镇的居民都对你母亲的事情讳莫如深，但是你还是打听到她的名字叫<span style="color:#ff3232">艾斯米拉达</span>，她的死和自杀身亡的前任警长有关。<br/>
      1天前<br/>
      这天，你照常和一众打手在镇长家的客厅里打牌。期间，你打听到，今天没有安排任何行动，你可以确定<span style="color:#ff3232">奥利佛</span>至少在今天的会面中是安全的。4：00的时候，镇长夫人<span style="color:#ff3232">玛格丽特</span>接待了一位叫<span style="color:#ff3232">卡洛琳</span>的吉普赛女孩儿，听说是来算命的神棍。镇长弟弟<span style="color:#ff3232">乔纳森</span>在4:50的时候来到别墅，说今天没什么事情，遣散了众打手。5:00的时候<span style="color:#ff3232">玛格丽特</span>让你送<span style="color:#ff3232">卡洛琳</span>出门，说自己身体不舒服，想回房间休息。5:05的时候你回到自己的房间，拿出了当天买好的鱼线摆弄了起来。<br/>
      5:25的时候，你上楼提醒<span style="color:#ff3232">汉森</span>他傍晚的行程，却发现他在办公室的沙发上睡着了。被你摇醒后，<span style="color:#ff3232">汉森</span>大发雷霆，大骂自己的弟弟为了吉普赛情人，竟然敢背叛自己。他叫嚣着让你马上把他们抓回来， “我要让<span style="color:#ff3232">乔纳森</span>知道背叛我的下场，他会像15年前的那个傻瓜银行家一样，看着心爱的女人在自己面前活活被烧死。” 你压下心中的震惊，试探的问<span style="color:#ff3232">汉森</span>，下一步要怎么做。这时的<span style="color:#ff3232">汉森</span>已经失去了理智，“还能怎么做？去杀了警长，布置成自杀，像15年前一样栽赃给这些肮脏的吉普赛人，她们唯一的作用就是当柴火烧。” 这时的你意识到，<span style="color:#ff3232">汉森</span>就是当年陷害你母亲，杀死前任警长的元凶。你被怒火所吞噬，你质问他为什么要害死你无辜的母亲。<span style="color:#ff3232">汉森</span>的眼神从惊诧变成了恐惧，随即看向了桌上放着的手枪。你不等他有任何动作，抄起手边的塑像砸中他左边的太阳穴。这个恶魔在恐惧的眼神里，结束了他罪恶的一生。慌乱中，你用袖子擦掉雕像上的血迹，为了避免被人发现，从窗户逃离了现场。<br/>
      你回到自己的房间，换下沾了血的衣服，赶忙跑去和<span style="color:#ff3232">奥利佛</span>碰面。5:45的时候，你看到他早早的就在约定地点等你了。你告诉他，这次的会面是安全的，可以按计划赴约。临走前，<span style="color:#ff3232">奥利佛</span>似有似无的提醒你脖子上有血迹，看着他奇妙的眼神，你很担心他可能会揭穿你。强装镇定的你回到了自己的房间，擦掉脖子上的血迹，并在垃圾桶里烧掉了带血的外衣。别人问起来，你大可以说是烧掉了没用的信件，无凭无据，没人能拿你怎么样。<br/>
      8:00的时候，<span style="color:#ff3232">戈登</span>警长找到你，把你和其他嫌疑人一起带到了镇长的死亡现场。你懵了，难道有人在暗中帮助你伪造了自杀现场？ “这到底是自杀还是他杀？你们几个今天下午在别墅周围出现过，把你们知道的都给我老实交代出来，镇长的死可是大事！你们要还原出今天下午这栋房子里到底发生了什么，给所有人一个交代。不然，你们都要吃不了兜着走！”`
        },
        {
            roleName: "戈登",
            job: "警长",
            sex: "男性",
            age: "40",
            detail: "小镇的警长，不拘言笑。刚调任不久，因一丝不苟的态度很快让小镇的人们信服，相传他为人公正却保守。",
            relation: "",
            id: 6,
            img: "book1/img_role7.png",
            content: `你数月前来到小镇福克斯，开始清理上一任警长留下的烂摊子。最近总有人匿名给你送来一些镇长汉森的黑料，经调查后，你发现这些竟然并非空穴来风。你获得了足够多的证据后，向检察官申请了搜查令，要求汉森镇长配合调查。<br/>
      今天晚上8：00的时候，镇长夫人玛格丽特来警局找到你，说她的丈夫在家自杀身亡。你检查了现场，并让警员带回了下午出现在镇长别墅的嫌疑人： “这到底是自杀还是他杀？你们几个今天下午在别墅周围出现过，把你们知道的都给我老实交代出来，镇长的死可是大事！你们要还原出今天下午这栋房子里到底发生了什么，给所有人一个交代。不然，你们都要吃不了兜着走！”<br/>`
        }
    ];
    BookConfig2.content = {
        ch: "今天8点，警局接到镇长夫人玛格丽特的报案，家中的书房发现了一具尸体，正是这个镇子里举足轻重的大人物，汉森镇长。本镇的新任警长戈登在接到报案后，调查了现场。尸体被发现在一间反锁的书房，汉森先生左边的额头中弹，手枪落在左手边。房间内有被翻找的迹象，初步怀疑是自杀。基于现场和流言的各种疑点，戈登警长召集了今天下午出现在别墅内的嫌疑人，“这到底是自杀还是他杀？你们几个今天下午在别墅周围出现过，把你们知道的都给我老实交代出来，镇长的死可是大事！你们要还原出今天下午这栋房子里到底发生了什么，给所有人一个交代。不然，你们都要吃不了兜着走！",
        en: "今天8点，警局接到镇长夫人玛格丽特的报案，家中的书房发现了一具尸体，正是这个镇子里举足轻重的大人物，汉森镇长。本镇的新任警长戈登在接到报案后，调查了现场。尸体被发现在一间反锁的书房，汉森先生左边的额头中弹，手枪落在左手边。房间内有被翻找的迹象，初步怀疑是自杀。基于现场和流言的各种疑点，戈登警长召集了今天下午出现在别墅内的嫌疑人，“这到底是自杀还是他杀？你们几个今天下午在别墅周围出现过，把你们知道的都给我老实交代出来，镇长的死可是大事！你们要还原出今天下午这栋房子里到底发生了什么，给所有人一个交代。不然，你们都要吃不了兜着走！"
    };
    BookConfig2.quesConfig_ch = [
        {
            roleId: 6,
            quesList: [
                {
                    id: 1,
                    title: "你听说了今天发生在镇长家的事情了吗？",
                    content: "听说了呀！他们说镇长的死状是15年前的老警长一模一样，大家都在传是当年被烧死的吉普赛女巫回来报仇啦。",
                    answer: "1"
                },
                {
                    id: 2,
                    title: "今天你见过任何一位嫌疑人了吗？",
                    content: "今天生意不忙，来喝酒的人很少。下午6点半之后我好像看到奥利佛在一个人喝闷酒。",
                    answer: "2"
                },
                {
                    id: 3,
                    title: "今天发生了任何奇怪的事情了吗？",
                    content: "今天我在垃圾桶里发现一张纸团，上面写着：”我来复仇了-艾斯米拉达“，结果就发现了这么可怕的事情，你说吓人不吓人。",
                    answer: "3"
                },
                {
                    id: 4,
                    title: "你听说过有关嫌疑人的八卦了吗？",
                    content: "听说镇长和夫人的关系挺紧张的，银行的乔治刚刚来喝酒的时候告诉我，玛格丽特早上取了好多现金，有钱人的生活真让人羡慕啊。",
                    answer: "4"
                },
                {
                    id: 5,
                    title: "你知道有人可能对镇长不利吗？",
                    content: "听说新任警长正在调查汉森镇长，他们关系紧张。风评他正直又古板，对人特别不友好。",
                    answer: "5"
                },
                {
                    id: 6,
                    title: "你听说过吉普赛酒吗？",
                    content: "镇上的人都管这种酒叫女巫汤，是吉普赛特制的美酒，听说人喝了以后会被迷惑心智。",
                    answer: "5"
                }
            ]
        },
        {
            roleId: 7,
            quesList: [
                {
                    id: 1,
                    title: "现场有什么奇怪的发现吗？",
                    content: "大门是从里面反锁的，窗户也是关着的。我们在窗户下面的地面上发现了几个模糊的脚印。",
                    answer: "1"
                },
                {
                    id: 2,
                    title: "尸体有什么奇怪的发现吗？",
                    content: "尸体是挺奇怪的，镇长的太阳穴上不止有枪伤，还有硬物导致的开放式伤口，很难说哪个是致命伤。",
                    answer: "2"
                },
                {
                    id: 3,
                    title: "嫌疑人有什么古怪的地方吗？",
                    content: "我们在火车站找到了准备出城的乔纳森和卡洛琳，他们像是要出远门的样子。",
                    answer: "3"
                },
                {
                    id: 4,
                    title: "别墅周围有什么奇怪的发现吗？",
                    content: "我们在路边无意间发现了一跳有半心形吊坠的项链，这样一个珍贵的项链被丢在别墅附近的草地里，还挺奇怪的。",
                    answer: "4"
                }
            ]
        }
    ];
    BookConfig2.quesConfig_en = [
        {
            roleId: 6,
            quesList: [
                {
                    id: 1,
                    title: "你听说了今天发生在镇长家的事情了吗？",
                    content: "听说了呀！他们说镇长的死状是15年前的老警长一模一样，大家都在传是当年被烧死的吉普赛女巫回来报仇啦。",
                    answer: "1"
                },
                {
                    id: 2,
                    title: "今天你见过任何一位嫌疑人了吗？",
                    content: "今天生意不忙，来喝酒的人很少。下午6点半之后我好像看到奥利佛在一个人喝闷酒。",
                    answer: "2"
                },
                {
                    id: 3,
                    title: "今天发生了任何奇怪的事情了吗？",
                    content: "今天我在垃圾桶里发现一张纸团，上面写着：”我来复仇了-艾斯米拉达“，结果就发现了这么可怕的事情，你说吓人不吓人。",
                    answer: "3"
                },
                {
                    id: 4,
                    title: "你听说过有关嫌疑人的八卦了吗？",
                    content: "听说镇长和夫人的关系挺紧张的，银行的乔治刚刚来喝酒的时候告诉我，玛格丽特早上取了好多现金，有钱人的生活真让人羡慕啊。",
                    answer: "4"
                },
                {
                    id: 5,
                    title: "你知道有人可能对镇长不利吗？",
                    content: "听说新任警长正在调查汉森镇长，他们关系紧张。风评他正直又古板，对人特别不友好。",
                    answer: "5"
                },
                {
                    id: 6,
                    title: "你听说过吉普赛酒吗？",
                    content: "镇上的人都管这种酒叫女巫汤，是吉普赛特制的美酒，听说人喝了以后会被迷惑心智。",
                    answer: "5"
                }
            ]
        },
        {
            roleId: 7,
            quesList: [
                {
                    id: 1,
                    title: "现场有什么奇怪的发现吗？",
                    content: "大门是从里面反锁的，窗户也是关着的。我们在窗户下面的地面上发现了几个模糊的脚印。",
                    answer: "1"
                },
                {
                    id: 2,
                    title: "尸体有什么奇怪的发现吗？",
                    content: "尸体是挺奇怪的，镇长的太阳穴上不止有枪伤，还有硬物导致的开放式伤口，很难说哪个是致命伤。",
                    answer: "2"
                },
                {
                    id: 3,
                    title: "嫌疑人有什么古怪的地方吗？",
                    content: "我们在火车站找到了准备出城的乔纳森和卡洛琳，他们像是要出远门的样子。",
                    answer: "3"
                },
                {
                    id: 4,
                    title: "别墅周围有什么奇怪的发现吗？",
                    content: "我们在路边无意间发现了一跳有半心形吊坠的项链，这样一个珍贵的项链被丢在别墅附近的草地里，还挺奇怪的。",
                    answer: "4"
                }
            ]
        }
    ];
    BookConfig2.sceneList = [
        {
            sceneName: "Abraham",
            sceneId: 3,
            label: "Abraham",
            url: `room_book2/LayaScene_Abraham/Conventional/Abraham.ls`,
            events: {
                ban1: {
                    caller: Room2,
                    method: Room2.clickBan1,
                    nodeName: "abraham.Obj3d66-1254365-90-603"
                },
                ban2: {
                    caller: Room2,
                    method: Room2.clickBan2,
                    nodeName: "abraham.Obj3d66-1254365-90-602"
                },
                gan: {
                    caller: Room2,
                    method: Room2.clickGan,
                    nodeName: "1.Obj3d66-711479-25-338"
                },
                xin: {
                    caller: Room2,
                    method: Room2.clickXin,
                    nodeName: "abraham.QuadPatch003"
                },
                xinwu1: {
                    caller: Room2,
                    method: Room2.clickXinWu,
                    nodeName: "abraham.组112.model002"
                },
                xinwu: {
                    caller: Room2,
                    method: Room2.clickXinWu,
                    nodeName: "abraham.组112.Loft001"
                },
                qian1: {
                    caller: Room2,
                    method: Room2.clickQian1,
                    nodeName: "abraham.Box1578958531"
                },
                chouti1: {
                    caller: Room2,
                    method: Room2.clickCT3,
                    nodeName: "abraham.model 2"
                },
                qian2: {
                    caller: Room2,
                    method: Room2.clickQ2,
                    nodeName: "abraham.model 2.QuadPatch001 (1)"
                },
                chouti2: {
                    caller: Room2,
                    method: Room2.clickCT4,
                    nodeName: "abraham.model003"
                },
                qian3: {
                    caller: Room2,
                    method: Room2.clickQ3,
                    nodeName: "abraham.model003.QuadPatch002"
                },
                shoucang: {
                    caller: Room2,
                    method: Room2.clickAR008,
                    nodeName: "abraham.组107.Obj3d66-1282599-15-749"
                },
                gui1: {
                    caller: Room2,
                    method: Room2.clickGui1,
                    nodeName: "abraham.对象002"
                },
                gui2: {
                    caller: Room2,
                    method: Room2.clickGui2,
                    nodeName: "abraham.对象001"
                },
                xin2: {
                    caller: Room2,
                    method: Room2.clickAR007,
                    nodeName: "abraham.QuadPatch001"
                },
                hui1: {
                    caller: Room2,
                    method: Room2.clickAR009,
                    nodeName: "Obj3d66-711884-2-125 (1).Obj3d66-711884-2-125"
                },
                hui2: {
                    caller: Room2,
                    method: Room2.clickAR009,
                    nodeName: "Obj3d66-711884-2-125 (1).Obj3d66-711884-2-126"
                },
                hui3: {
                    caller: Room2,
                    method: Room2.clickAR009,
                    nodeName: "Obj3d66-711884-2-125 (1).Obj3d66-711884-2-127"
                },
                hui4: {
                    caller: Room2,
                    method: Room2.clickAR009,
                    nodeName: "Obj3d66-711884-2-125 (1).Obj3d66-711884-2-128"
                },
                hui5: {
                    caller: Room2,
                    method: Room2.clickAR009,
                    nodeName: "Obj3d66-711884-2-125 (1).Obj3d66-711884-2-129"
                },
                hui6: {
                    caller: Room2,
                    method: Room2.clickAR009,
                    nodeName: "Obj3d66-711884-2-125 (1).Obj3d66-711884-2-130"
                },
                hui7: {
                    caller: Room2,
                    method: Room2.clickAR009,
                    nodeName: "Obj3d66-711884-2-125 (1).Obj3d66-711884-2-131"
                }
            }
        },
        {
            sceneName: "Hall",
            sceneId: 5,
            label: "Hall",
            url: `room_book2/LayaScene_hall/Conventional/hall.ls`,
            events: {
                jiupin: {
                    caller: Room2,
                    method: Room2.clickJiuPin,
                    nodeName: "1.Obj3d66-402998-5-224"
                },
                jiu2: {
                    caller: Room2,
                    method: Room2.clickJiuPin2,
                    nodeName: "1.组2136555812.Obj3d66-405792-9-449"
                },
                bao: {
                    caller: Room2,
                    method: Room2.clickBao,
                    nodeName: "2"
                },
                xingli: {
                    caller: Room2,
                    method: Room2.clickXLX,
                    nodeName: "1.Obj3d66-1290256-1-227"
                },
                chouti: {
                    caller: Room2,
                    method: Room2.clickCT1,
                    nodeName: "1.对象011"
                }
            }
        },
        {
            sceneName: "Margaret",
            sceneId: 1,
            label: "Margaret",
            url: `room_book2/LayaScene_Margaret/Conventional/Margaret.ls`,
            events: {
                item1: {
                    caller: Room2,
                    method: Room2.clickMR001,
                    nodeName: "1.QuadPatch004"
                },
                item2: {
                    caller: Room2,
                    method: Room2.toggleDrawer,
                    nodeName: "1.model004"
                },
                item3: {
                    caller: Room2,
                    method: Room2.clickMR002,
                    nodeName: "1.model004.QuadPatch003"
                },
                item4: {
                    caller: Room2,
                    method: Room2.clickKuang,
                    nodeName: "1.对象019"
                },
                item5: {
                    caller: Room2,
                    method: Room2.clickMR003,
                    nodeName: "1.Basket_A_grp.Basket_A_Wicker"
                },
                item6: {
                    caller: Room2,
                    method: Room2.clickMR004,
                    nodeName: "1.Box1578958527"
                },
                model006: {
                    caller: Room2,
                    method: Room2.clickCT5,
                    nodeName: "1.model006"
                },
                item7: {
                    caller: Room2,
                    method: Room2.clickMR005,
                    nodeName: "1.model006.QuadPatch001"
                },
                clickBan: {
                    caller: Room2,
                    method: Room2.clickBan3,
                    nodeName: "1.对象025"
                },
                clickBan4: {
                    caller: Room2,
                    method: Room2.clickBan4,
                    nodeName: "1.对象024"
                },
                item8: {
                    caller: Room2,
                    method: Room2.clickMR007,
                    nodeName: "1.Obj3d66-509460-11-208"
                },
                item9: {
                    caller: Room2,
                    method: Room2.clickMR006,
                    nodeName: "1.QuadPatch002"
                },
                item10: {
                    caller: Room2,
                    method: Room2.clickMR008,
                    nodeName: "1.ChamferCyl006"
                },
                item11: {
                    caller: Room2,
                    method: Room2.clickMR009,
                    nodeName: "1.Obj3d66-676910-90-278"
                }
            }
        },
        {
            sceneName: "Oliver",
            sceneId: 6,
            label: "Oliver",
            url: `room_book2/LayaScene_Oliver/Conventional/Oliver.ls`,
            events: {
                item1: {
                    caller: Room2,
                    method: Room2.CT6,
                    nodeName: "1.Box2131641766"
                },
                item2: {
                    caller: Room2,
                    method: Room2.clickOR001,
                    nodeName: "1.Box2131641766.QuadPatch006"
                },
                item3: {
                    caller: Room2,
                    method: Room2.clickOR002,
                    nodeName: "1.model 1"
                },
                item4: {
                    caller: Room2,
                    method: Room2.clickOR003,
                    nodeName: "1.QuadPatch002"
                },
                item5: {
                    caller: Room2,
                    method: Room2.clickOR004,
                    nodeName: "1.QuadPatch003"
                },
                对象024: {
                    caller: Room2,
                    method: Room2.clickDX,
                    nodeName: "1.对象024"
                },
                xianglian: {
                    caller: Room2,
                    method: Room2.clickOR005,
                    nodeName: "1.组112.model002"
                },
                CT7: {
                    caller: Room2,
                    method: Room2.CT7,
                    nodeName: "1.Box2131641769"
                },
                item6: {
                    caller: Room2,
                    method: Room2.clickOR006,
                    nodeName: "1.Box2131641769.QuadPatch001"
                },
                item7: {
                    caller: Room2,
                    method: Room2.clickOR007,
                    nodeName: "1.QuadPatch004"
                },
                item8: {
                    caller: Room2,
                    method: Room2.clickOR008,
                    nodeName: "1.QuadPatch005"
                },
                item9: {
                    caller: Room2,
                    method: Room2.clickOR009,
                    nodeName: "1.QuadPatch005 (1)"
                },
                item10: {
                    caller: Room2,
                    method: Room2.clickOR010,
                    nodeName: "1.Box2131637143"
                }
            }
        },
        {
            sceneName: "Johnathan",
            sceneId: 4,
            label: "Johnathan",
            url: `room_book2/LayaScene_Johnathan/Conventional/Johnathan.ls`,
            events: {
                item1: {
                    caller: Room2,
                    method: Room2.clickJR001,
                    nodeName: "model.对象001"
                },
                item2: {
                    caller: Room2,
                    method: Room2.CT8,
                    nodeName: "model.Rectangle073"
                },
                item3: {
                    caller: Room2,
                    method: Room2.clickJR002,
                    nodeName: "model.Rectangle073.QuadPatch003"
                },
                item4: {
                    caller: Room2,
                    method: Room2.clickJR003,
                    nodeName: "model.Obj3d66-1282599-17-592"
                },
                item5: {
                    caller: Room2,
                    method: Room2.clickJR004,
                    nodeName: "model.Obj3d66-711884-2-128"
                },
                item6: {
                    caller: Room2,
                    method: Room2.CT9,
                    nodeName: "model.Rectangle017"
                },
                item7: {
                    caller: Room2,
                    method: Room2.clickJR005,
                    nodeName: "model.Rectangle017.Obj3d66-1163439-4-215"
                },
                item8: {
                    caller: Room2,
                    method: Room2.clickJR006,
                    nodeName: "jiuoing.Obj3d66-402998-5-224"
                }
            }
        },
        {
            sceneName: "Caroline",
            sceneId: 7,
            label: "Caroline",
            url: `room_book2/LayaScene_Caroline/Conventional/Caroline.ls`,
            events: {
                drawerRightTop: {
                    caller: Room2,
                    method: Room2.clickCR001,
                    nodeName: "1.Line044"
                },
                item2: {
                    caller: Room2,
                    method: Room2.clickCR002,
                    nodeName: "1.Obj3d66-784515-3-729"
                },
                item3: {
                    caller: Room2,
                    method: Room2.clickCR003,
                    nodeName: "1.Obj3d66-784515-2-781"
                },
                item4: {
                    caller: Room2,
                    method: Room2.clickCR004,
                    nodeName: "1.对象014"
                },
                item5: {
                    caller: Room2,
                    method: Room2.clickCR005,
                    nodeName: "1.Obj3d66-711884-2-127"
                },
                item6: {
                    caller: Room2,
                    method: Room2.clickCR006,
                    nodeName: "1.Obj3d66-405792-9-449"
                },
                ka1: {
                    caller: Room2,
                    method: Room2.clickCR007,
                    nodeName: "1.QuadPatch001"
                },
                ka2: {
                    caller: Room2,
                    method: Room2.clickCR007,
                    nodeName: "1.QuadPatch002"
                },
                ka3: {
                    caller: Room2,
                    method: Room2.clickCR007,
                    nodeName: "1.QuadPatch003"
                },
                ka4: {
                    caller: Room2,
                    method: Room2.clickCR007,
                    nodeName: "1.QuadPatch004"
                },
                ka5: {
                    caller: Room2,
                    method: Room2.clickCR007,
                    nodeName: "1.QuadPatch005"
                },
                ka6: {
                    caller: Room2,
                    method: Room2.clickCR007,
                    nodeName: "1.QuadPatch006"
                },
                ka7: {
                    caller: Room2,
                    method: Room2.clickCR007,
                    nodeName: "1.QuadPatch007"
                },
                wang: {
                    caller: Room2,
                    method: Room2.clickCR008,
                    nodeName: "1.Obj3d66-806782-1-101"
                }
            }
        },
        {
            sceneName: "Hanson",
            sceneId: 2,
            label: "Hanson",
            url: `room_book2/LayaScene_Hanson/Conventional/Hanson.ls`,
            events: {
                item1: {
                    caller: Room2,
                    method: Room2.clickHR001,
                    nodeName: "model.组2136555823.Obj3d66-866777-119-712"
                },
                item2: {
                    caller: Room2,
                    method: Room2.clickHR002,
                    nodeName: "model.Obj3d66-1508352-12-993"
                },
                item3: {
                    caller: Room2,
                    method: Room2.clickHR003,
                    nodeName: "model.model016"
                },
                item4: {
                    caller: Room2,
                    method: Room2.clickHR004,
                    nodeName: "model.Group-391490-270.Obj3d66-391490-18-1000"
                },
                item44: {
                    caller: Room2,
                    method: Room2.clickHR005,
                    nodeName: "desk.对象027.QuadPatch001"
                },
                item5: {
                    caller: Room2,
                    method: Room2.CT10,
                    nodeName: "desk.对象027"
                },
                item6: {
                    caller: Room2,
                    method: Room2.CT11,
                    nodeName: "desk.对象022"
                },
                item7: {
                    caller: Room2,
                    method: Room2.clickHR006,
                    nodeName: "desk.对象022.Obj3d66-1163439-4-215"
                },
                item8: {
                    caller: Room2,
                    method: Room2.clickHR007,
                    nodeName: "model.Loft007"
                },
                item9: {
                    caller: Room2,
                    method: Room2.clickHR008,
                    nodeName: "model.Obj3d66-402998-5-224"
                },
                item10: {
                    caller: Room2,
                    method: Room2.clickHR009,
                    nodeName: "model.Obj3d66-1017952-9-519"
                },
                door: {
                    caller: Room2,
                    method: Room2.openDoor,
                    nodeName: "model.组2136555825.Box1752"
                },
                shouzhuo: {
                    caller: Room2,
                    method: Room2.clickHR013,
                    nodeName: "shouzhuo"
                },
                jiaoyin: {
                    caller: Room2,
                    method: Room2.clickHR014,
                    nodeName: "1.物件_1"
                },
                fengzheng: {
                    caller: Room2,
                    method: Room2.clickHR015,
                    nodeName: "fengzheng11.物件_5"
                },
                CT16: {
                    caller: Room2,
                    method: Room2.CT16,
                    nodeName: "desk.对象025"
                },
                fengzhengxian: {
                    caller: Room2,
                    method: Room2.clickHR016,
                    nodeName: "desk.对象025.fengzhengxian"
                }
            }
        }
    ];

    class DataLang {
        static set lang(lang) {
            this._lang = lang == "en-US" ? "en" : "ch";
        }
        static get lang() {
            return this._lang;
        }
        static changeLang() {
            EventManager.pub("changeLang");
        }
        static getImgByType(type = "") {
            let conf = this.imgConfig[type];
            if (!conf) {
                console.log(type, "遗漏语言包配置");
            }
            return conf ? conf[this.lang] : "";
        }
        static getTxtByType(type = "", params = {}) {
            let conf = this.txt[type] || {};
            let str = conf[this.lang] || "";
            for (let key in params) {
                str = str.replace(new RegExp(`{${key}}`, "gm"), params[key]);
            }
            return str;
        }
        static get content() {
            let gsId = GameManager.roomInfo.gsId;
            if (gsId == 1) {
                return BookConfig1.content;
            }
            else if (gsId == 2) {
                return BookConfig2.content;
            }
            else {
                return BookConfig2.content;
            }
        }
        static get roleList_en() {
            let gsId = GameManager.roomInfo.gsId;
            if (gsId == 1) {
                return BookConfig1.roleList_en;
            }
            else if (gsId == 2) {
                return BookConfig2.roleList_en;
            }
            else {
                return BookConfig2.roleList_en;
            }
        }
        static get roleList_ch() {
            let gsId = GameManager.roomInfo.gsId;
            if (gsId == 1) {
                return BookConfig1.roleList_ch;
            }
            else if (gsId == 2) {
                return BookConfig2.roleList_ch;
            }
            else {
                return BookConfig2.roleList_ch;
            }
        }
        static get quesConfig_ch() {
            let gsId = GameManager.roomInfo.gsId;
            if (gsId == 1) {
                return BookConfig1.quesConfig_ch;
            }
            else if (gsId == 2) {
                return BookConfig2.quesConfig_ch;
            }
            else {
                return BookConfig2.quesConfig_ch;
            }
        }
        static get quesConfig_en() {
            let gsId = GameManager.roomInfo.gsId;
            if (gsId == 1) {
                return BookConfig1.quesConfig_en;
            }
            else if (gsId == 2) {
                return BookConfig2.quesConfig_en;
            }
            else {
                return BookConfig2.quesConfig_en;
            }
        }
    }
    DataLang._lang = "ch";
    DataLang.imgConfig = {
        btnSuccess: {
            ch: "v2/ch/img_btn_success.png",
            en: "v2/en/img_btn_success.png"
        },
        btnFail: {
            ch: "v2/ch/img_btn_fail.png",
            en: "v2/en/img_btn_fail.png"
        },
        btn_voice: {
            ch: "v2/ch/img_btn_voice.png",
            en: "v2/en/img_btn_voice.png"
        },
        testAudio: {
            ch: "v2/ch/img_test_audio.png",
            en: "v2/en/img_test_audio.png"
        },
        btnAddFriend: {
            ch: "v2/ch/btn_add_friend.png",
            en: "v2/en/btn_add_friend.png"
        },
        btnKick: {
            ch: "v2/ch/btn_kick.png",
            en: "v2/en/btn_kick.png"
        },
        btnRefuse: {
            ch: "v2/ch/img_btnRefuse.png",
            en: "v2/en/img_btnRefuse.png"
        },
        voted: {
            ch: "v2/ch/img_ytp.png",
            en: "v2/en/img_ytp.png"
        },
        wuzheng: {
            ch: "v2/ch/img_wuzheng.png",
            en: "v2/en/img_wuzheng.png"
        },
        btnAny: {
            ch: "v2/ch/img_any.png",
            en: "v2/en/img_any.png"
        },
        btnConfirm: {
            ch: "v2/ch/img_confirm.png",
            en: "v2/en/img_confirm.png"
        },
        titleAdd: {
            ch: "v2/ch/img_add_timeline.png",
            en: "v2/en/img_add_timeline.png"
        },
        btnAdd: {
            ch: "v2/ch/img_btn_add.png",
            en: "v2/en/img_btn_add.png"
        },
        fengmian1: {
            ch: "v2/ch/img_fengmian.png",
            en: "v2/en/img_fengmian.png"
        },
        isPublic: {
            ch: "v2/ch/img_public1.png",
            en: "v2/en/img_public1.png"
        },
        notPublic: {
            ch: "v2/ch/img_public0.png",
            en: "v2/en/img_public0.png"
        },
        txtTip: {
            ch: "v2/ch/img_wxts.png",
            en: "v2/en/img_wxts.png"
        },
        btnTuichu: {
            ch: "v2/ch/img_tuichu.png",
            en: "v2/en/img_tuichu.png"
        },
        btnSwitch: {
            ch: "v2/ch/img_btn_switch.png",
            en: "v2/en/img_btn_switch.png"
        },
        btnSend: {
            ch: "v2/ch/img_send.png",
            en: "v2/en/img_send.png"
        },
        btnShare: {
            ch: "v2/ch/img_share.png",
            en: "v2/en/img_share.png"
        },
        fengmian: {
            ch: "v2/ch/img_fengmian.png",
            en: "v2/en/img_fengmian.png"
        },
        btnStart: {
            ch: "v2/ch/img_kaishi1.png",
            en: "v2/en/img_kaishi1.png"
        },
        btnDismiss: {
            ch: "v2/ch/img_jiesan.png",
            en: "v2/en/img_jiesan.png"
        },
        btnBack: {
            ch: "v2/ch/img_back.png",
            en: "v2/en/img_back.png"
        },
        btnNext: {
            ch: "v2/ch/img_next.png",
            en: "v2/en/img_next.png"
        },
        btnReady: {
            ch: "v2/ch/img_btn_ready.png",
            en: "v2/en/img_btn_ready.png"
        },
        xiongshou: {
            ch: "v2/ch/img_xiongshou.png",
            en: "v2/en/img_xiongshou.png"
        },
        result: {
            ch: "v2/ch/img_result.png",
            en: "v2/en/img_result.png"
        },
        btnVoted: {
            ch: "v2/ch/img_voted.png",
            en: "v2/en/img_voted.png"
        },
        btnBook: {
            ch: "v2/ch/img_book.png",
            en: "v2/en/img_book.png"
        },
        btnSure1: {
            ch: "v2/ch/img_queding_small.png",
            en: "v2/en/img_queding_small.png"
        },
        btnCancel1: {
            ch: "v2/ch/img_cancel_small.png",
            en: "v2/en/img_cancel_small.png"
        },
        btnCancel: {
            ch: "v2/ch/img_quxiao.png",
            en: "v2/en/img_quxiao.png"
        },
        btnCopy: {
            ch: "v2/ch/img_copy.png",
            en: "v2/en/img_copy.png"
        },
        btnCancelReady: {
            ch: "v2/ch/img_btn_ready0.png",
            en: "v2/en/img_btn_ready0.png"
        },
        btnCreate: {
            ch: "v2/ch/img_create.png",
            en: "v2/en/img_create.png"
        },
        txtLTS: {
            ch: "v2/ch/img_lts.png",
            en: "v2/en/img_lts.png"
        },
        testYY: {
            ch: "v2/ch/img_yycs.png",
            en: "v2/en/img_yycs.png"
        },
        tagReady: {
            ch: "v2/ch/img_ready.png",
            en: "v2/en/img_ready.png"
        },
        btnEnd: {
            ch: "v2/ch/img_btn_end.png",
            en: "v2/en/img_btn_end.png"
        },
        btnTCYX: {
            ch: "v2/ch/img_btn_tcyx.png",
            en: "v2/en/img_btn_tcyx.png"
        },
        img_ytp: {
            ch: "v2/ch/img_ytp.png",
            en: "v2/en/img_ytp.png"
        }
    };
    DataLang.txt = {
        selfIntro: {
            ch: "自我介绍",
            en: "Self Introduce"
        },
        sureExitGame: {
            ch: "是否确认退出游戏？",
            en: "Are you sure to exit the game?"
        },
        loadingScene: {
            en: "Loading, please hold on…",
            ch: "场景加载中...请稍候..."
        },
        loading: {
            en: "Loading game, please hold on…",
            ch: "加载中...请稍候..."
        },
        floor2: {
            en: "Second Floor",
            ch: "二楼"
        },
        floor1: {
            en: "First Floor",
            ch: "一楼"
        },
        speakingTurn: {
            en: "Your turn",
            ch: "您的回合"
        },
        endTalkng: {
            en: "Tea Party",
            ch: "茶话会"
        },
        hintVote: {
            ch: "请在2分钟内谨慎思考后投出你心目中的凶手。点击角色头像，并确认，一旦点击确认，投票将不可更改，得票最高的玩家将会作为嫌疑犯被逮捕。",
            en: `Please think carefully in 2 minutes and throw your killer in your mind. Click the avatar of the character and confirm. Once you click confirm, the vote will not be changed, and the player with the highest vote will be arrested as a suspect.`
        },
        hintFreeTalking: {
            ch: "因为投票环节中探员的投票算1.5票，所以博得探员的信任是很重要的哦。Good luck!",
            en: `Because the vote of the agent is 1.5 in the voting, it is important to win the trust of the agent. Good luck!`
        },
        hintConclusion: {
            ch: "最后的总结，告诉大家你为什么不是凶手，并告诉大家你会投出的凶手是谁，原因是什么。",
            en: `The final conclusion is to tell you why you are not the murderer, who you will throw the murderer and why.`
        },
        hintFind2: {
            ch: "这是最后一轮搜证，分享，讨论，开始行动吧！",
            en: `This is the last round of evidence search, sharing, discussion and action!`
        },
        hintTalkingEnd: {
            ch: "30分钟后环节自动结束，或者所有人在完成讨论后，点击“结束发言”",
            en: `After 30 minutes, the session will end automatically, or after everyone finishes the discussion, click "end speech"`
        },
        hintTalking: {
            ch: "第一轮自由讨论时间，尽情交流案情，找到藏在你们中间的关键人物。",
            en: `The first round of free discussion time, enjoy the exchange of the case, find the key people hidden in the middle of you.`
        },
        hintTalkingNext: {
            ch: "5分钟后环节自动结束，或者在完成发言后，点击“结束发言”",
            en: `After 5 minutes, the session will end automatically, or after finishing speaking, click "end speaking"`
        },
        hintDetailInTalking: {
            ch: "告诉大家你的发现，你可以通过分享让他们看到你搜集的证据",
            en: `Tell people what you found, and you can share with them the evidence you've collected`
        },
        hintSearch: {
            ch: "可收集的证据会有高亮提示。",
            en: `The evidence that can be collected will be highlighted.`
        },
        hintStep: {
            ch: "点击此处查看游戏进度。",
            en: `Click here to see the progress of the game.`
        },
        hintDetail: {
            ch: "点击证据列表，可以查看你找到证据，并可以在讨论环节中分享给大家。",
            en: `Click the evidence list to view the evidence you found and share it with you in the discussion session.`
        },
        hintTimeline: {
            ch: "点击记录线索或者角色时间线，在游戏的过程中随时编辑和复习。",
            en: `Click record clues or character timeline to edit and review at any time during the game.`
        },
        hintBookBack: {
            ch: "点击复习剧本。",
            en: `Click review script.`
        },
        hintNPC: {
            ch: "点击提问证人获取更多线索，请注意证言有时候并非全部真相",
            en: `Click question witness for more clues. Please note that sometimes testimony is not the whole truth`
        },
        hintSelectRoom: {
            ch: "双击点击“场景名”或“场景图标”进入搜证场景。",
            en: `Double click "Scene name" or "Scene icon" to enter the search scene.`
        },
        hintCluEnd: {
            ch: "第一轮搜证环节，30分钟后环节自动结束，或者所有玩家在点击下一步后，提前进入下一环节",
            en: "The first round of certificate search will automatically end in 30 minutes, or all players will enter the next link ahead of time after clicking next"
        },
        hintSelfTalkingEnd: {
            ch: "2分钟后环节自动结束，或者在完成发言后，点击“结束发言”",
            en: "Click to view the operation method"
        },
        hintSetting: {
            ch: "点击查看操作方法",
            en: "Click to view the operation method"
        },
        hintRule: {
            ch: "点击此处查看胜利条件",
            en: "Click here to see the winning conditions"
        },
        hintMine: {
            ch: "点击此处查看任务简介",
            en: "Click here to view the mission profile"
        },
        hintPreTalking: {
            ch: "告诉大家你的角色背景，以及与案情有关的信息，或者提出你的想法。",
            en: "Tell everyone about your role background and information about the case, or put forward your ideas."
        },
        hintBookNext: {
            ch: "点击下一步。或者计时完毕后自动进入下一环节。",
            en: "Click next. Or automatically enter the next link after timing."
        },
        hintBookVoice: {
            ch: "点击静音关闭旁白。",
            en: "Click mute to turn off the narration."
        },
        hintBook: {
            ch: "你有5分钟阅读你的剧本。",
            en: "You have 5 min to read your script."
        },
        hintRoleNext: {
            ch: "选定角色后，点击下一步",
            en: "After selecting the role, click next"
        },
        hintRole: {
            ch: "点击任意角色可以获取人物信息",
            en: "Click any character to get character information"
        },
        hintShare: {
            ch: "你可以通过分享链接，邀请你的好友加入本局游戏",
            en: "You can invite your friends to join the game by sharing links"
        },
        hintTestAudio: {
            ch: "请在全员准备后点击语音按钮,全员准备完毕后即可由房主开启游戏",
            en: "Please click the voice button after all the members are ready. After all the members are ready, the owner can start the game"
        },
        someonekicked: {
            ch: "{username}已被踢出",
            en: "{username} have been kicked"
        },
        kicked: {
            ch: "您已被踢出",
            en: "You have been kicked"
        },
        playerKicked: {
            ch: "玩家已踢出",
            en: "Player kicked"
        },
        txtCanceled: {
            ch: "临时取消的局数:{count}",
            en: "temporary cancellations:{count}"
        },
        txtLose: {
            ch: "输的局数:{count}",
            en: "Lose:{count}"
        },
        txtNoShow: {
            ch: "没有出现的局数:{count}",
            en: "Not shown:{count}"
        },
        txtTotal: {
            ch: "总局数:{count}",
            en: "Total:{count}"
        },
        txtWin: {
            ch: "赢的局数:{count}",
            en: "Win:{count}"
        },
        requestSend: {
            ch: "请求已发送",
            en: "request send"
        },
        Note: {
            ch: "笔记",
            en: "Note"
        },
        Searching: {
            ch: "搜证中",
            en: "Searching"
        },
        Talking: {
            ch: "发言",
            en: "Talking"
        },
        Vote: {
            ch: "投票",
            en: "Vote"
        },
        NPC: {
            ch: "证人",
            en: "Witness"
        },
        Timeline: {
            ch: "时间线",
            en: "Time Line"
        },
        Scene: {
            ch: "场景",
            en: "Scene"
        },
        Book: {
            ch: "剧本",
            en: "Script"
        },
        talking: {
            ch: "发言中",
            en: "Talking"
        },
        freeTalking: {
            ch: "自由发言中",
            en: "Free Talking"
        },
        pressToSpeak: {
            ch: "你的发言中...",
            en: "Your time to speak..."
        },
        askChange: {
            ch: "{username}请求交换",
            en: "{username} ask change"
        },
        sex: {
            ch: "性别",
            en: "sex"
        },
        age: {
            ch: "年龄",
            en: "age"
        },
        job: {
            ch: "职业",
            en: "job"
        },
        bookName: {
            ch: "剧本一",
            en: "book1"
        },
        jump: {
            ch: "是否跳过新手引导？",
            en: "Skip novice guidance?"
        },
        CLUE_FIND: {
            en: "Find",
            ch: "搜证"
        },
        TALKING: {
            en: "Talking",
            ch: "发言"
        },
        PRE_TALKING: {
            en: "PRE_TALKING",
            ch: "自我介绍"
        },
        FREE_TALKING: {
            en: "FREE_TALKING",
            ch: "自由发言"
        },
        CONCLUSION: {
            en: "Conclusion Talk",
            ch: "总结发言"
        },
        VOTING: {
            en: "Voting",
            ch: "投票中"
        },
        VOTE: {
            en: "VOTE",
            ch: "投票"
        },
        ANALYSE: {
            en: "ANALYSE",
            ch: "复盘"
        },
        progress: {
            en: "Game Progress",
            ch: "破案进度"
        },
        power: {
            en: "{num}",
            ch: "{num}票"
        },
        murderWin: {
            en: "The murderer escaped the law",
            ch: "凶手逃脱了法律的制裁"
        },
        murderWinBut: {
            en: "But,\nThe murderer escaped the law",
            ch: "但是\n凶手逃脱了法律的制裁"
        },
        murderLoseBut: {
            en: "But with the concerted efforts of all of us,\nThe murderer was punished",
            ch: "但是在大家的齐心协力下\n凶手受到了制裁"
        },
        murderLose: {
            en: "With the concerted efforts of all of us,\nThe murderer was punished",
            ch: "在大家的齐心协力下\n凶手受到了制裁"
        },
        selfTrue: {
            ch: "恭喜你选对了凶手",
            en: "Voted correct!"
        },
        selfFalse: {
            ch: "遗憾你选错了凶手",
            en: "Voted wrong!"
        },
        txtResultMaxVoted: {
            ch: "{username}得票最高",
            en: "The most gamer voted {username}"
        },
        talkingPeople: {
            ch: "{username}发言中...",
            en: "{username} speaking..."
        },
        setting: {
            ch: "设置",
            en: "Setting"
        },
        role1: {
            ch: "选择",
            en: "Choose a"
        },
        role2: {
            ch: "角色",
            en: "Character"
        },
        notFullButStart: {
            ch: "人数未满，房主发起提前开始游戏，\n是否同意？",
            en: "Not full,But the host want to start,\nDo you agree?"
        },
        roomNumberHtml: {
            ch: `<span>房间号:<span style="color:#ff6f48;">{roomNum}</span></span>`,
            en: `<span>Room Number:<span style="color:#ff6f48;">{roomNum}</span></span>`
        },
        roomNumber1: {
            ch: "房间号:{roomNum}",
            en: "Room Number:{roomNum}"
        },
        roomNumber: {
            ch: "房间号:",
            en: "Room Number:"
        },
        readyedPeople: {
            ch: "已准备玩家",
            en: "Ready"
        },
        SSSC: {
            ch: "属性/时长",
            en: "Attrbute/Duration"
        },
        timeSZ: {
            ch: "搜证时间",
            en: "Time Find"
        },
        timeFY: {
            ch: "发言时间",
            en: "Time Chat"
        },
        timeTP: {
            ch: "投票时间",
            en: "Time Vote"
        },
        QJ: {
            ch: "前进",
            en: "Forward"
        },
        HT: {
            ch: "后退",
            en: "Back"
        },
        ZY: {
            ch: "左移",
            en: "Left"
        },
        YY: {
            ch: "右移",
            en: "Right"
        },
        XD: {
            ch: "下蹲",
            en: "Down"
        }
    };
    window["DataLang"] = DataLang;

    class Scene3dConfig {
        static getConfigByName(name) {
            return this.sceneList.find(item => item.sceneName == name) || {};
        }
        static getSceneConfigByName(sceneName) {
            return this.sceneList.find(item => item.sceneName == sceneName) || {};
        }
        static getSceneConfigById(id) {
            return this.sceneList.find(item => item.sceneId == id) || {};
        }
        static getRoleInfoByRoleId(roleId) {
            let roleData = Scene3dConfig.roleList.find(item => item.id == roleId) || {};
            return roleData;
        }
        static get quesConfig() {
            return DataLang.lang == "en"
                ? DataLang.quesConfig_en
                : DataLang.quesConfig_ch;
        }
        static get bookName() {
            return DataLang.getTxtByType("bookName");
        }
        static get bookContent() {
            return DataLang.content[DataLang.lang];
        }
        static get roleList() {
            return DataLang.lang == "en" ? DataLang.roleList_en : DataLang.roleList_ch;
        }
        static getNodeNameBySceneAndType(sceneName, itemName) {
            let sceneItem = Scene3dConfig.sceneList.find(item => item.sceneName == sceneName);
            return sceneItem.events[itemName].nodeName;
        }
        static get sceneList() {
            let gsId = GameManager.roomInfo.gsId;
            if (gsId == 1) {
                return BookConfig1.sceneList;
            }
            else if (gsId == 2) {
                return BookConfig2.sceneList;
            }
            else {
                return BookConfig2.sceneList;
            }
        }
    }
    Scene3dConfig.maxAnswerTime = 3;
    Scene3dConfig.roleChangeCountDownSec = 30;

    var View = Laya.View;
    var Dialog = Laya.Dialog;
    var Scene = Laya.Scene;
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var component;
        (function (component) {
            class GamaCluDetailUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("component/GamaCluDetail");
                }
            }
            component.GamaCluDetailUI = GamaCluDetailUI;
            REG("ui.component.GamaCluDetailUI", GamaCluDetailUI);
            class GamaEndTalkUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("component/GamaEndTalk");
                }
            }
            component.GamaEndTalkUI = GamaEndTalkUI;
            REG("ui.component.GamaEndTalkUI", GamaEndTalkUI);
            class GamaTalkingUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("component/GamaTalking");
                }
            }
            component.GamaTalkingUI = GamaTalkingUI;
            REG("ui.component.GamaTalkingUI", GamaTalkingUI);
            class GamaTimelineUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("component/GamaTimeline");
                }
            }
            component.GamaTimelineUI = GamaTimelineUI;
            REG("ui.component.GamaTimelineUI", GamaTimelineUI);
            class GameChatBoxUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("component/GameChatBox");
                }
            }
            component.GameChatBoxUI = GameChatBoxUI;
            REG("ui.component.GameChatBoxUI", GameChatBoxUI);
            class GameChatBox2UI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("component/GameChatBox2");
                }
            }
            component.GameChatBox2UI = GameChatBox2UI;
            REG("ui.component.GameChatBox2UI", GameChatBox2UI);
            class GameHouseUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("component/GameHouse");
                }
            }
            component.GameHouseUI = GameHouseUI;
            REG("ui.component.GameHouseUI", GameHouseUI);
            class GameNPCUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("component/GameNPC");
                }
            }
            component.GameNPCUI = GameNPCUI;
            REG("ui.component.GameNPCUI", GameNPCUI);
            class GameSettingUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("component/GameSetting");
                }
            }
            component.GameSettingUI = GameSettingUI;
            REG("ui.component.GameSettingUI", GameSettingUI);
            class GameVoteUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("component/GameVote");
                }
            }
            component.GameVoteUI = GameVoteUI;
            REG("ui.component.GameVoteUI", GameVoteUI);
            class GameWrapBookUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("component/GameWrapBook");
                }
            }
            component.GameWrapBookUI = GameWrapBookUI;
            REG("ui.component.GameWrapBookUI", GameWrapBookUI);
            class GameWrapMineUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("component/GameWrapMine");
                }
            }
            component.GameWrapMineUI = GameWrapMineUI;
            REG("ui.component.GameWrapMineUI", GameWrapMineUI);
            class WrapTipUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("component/WrapTip");
                }
            }
            component.WrapTipUI = WrapTipUI;
            REG("ui.component.WrapTipUI", WrapTipUI);
        })(component = ui.component || (ui.component = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var modal;
        (function (modal) {
            class AdStartGameUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("modal/AdStartGame");
                }
            }
            modal.AdStartGameUI = AdStartGameUI;
            REG("ui.modal.AdStartGameUI", AdStartGameUI);
            class ModalAddTimelineUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("modal/ModalAddTimeline");
                }
            }
            modal.ModalAddTimelineUI = ModalAddTimelineUI;
            REG("ui.modal.ModalAddTimelineUI", ModalAddTimelineUI);
            class ModalAskChangeRoleUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("modal/ModalAskChangeRole");
                }
            }
            modal.ModalAskChangeRoleUI = ModalAskChangeRoleUI;
            REG("ui.modal.ModalAskChangeRoleUI", ModalAskChangeRoleUI);
            class ModalAudioTestUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("modal/ModalAudioTest");
                }
            }
            modal.ModalAudioTestUI = ModalAudioTestUI;
            REG("ui.modal.ModalAudioTestUI", ModalAudioTestUI);
            class ModalConfirmUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("modal/ModalConfirm");
                }
            }
            modal.ModalConfirmUI = ModalConfirmUI;
            REG("ui.modal.ModalConfirmUI", ModalConfirmUI);
            class ModalDetailUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("modal/ModalDetail");
                }
            }
            modal.ModalDetailUI = ModalDetailUI;
            REG("ui.modal.ModalDetailUI", ModalDetailUI);
            class ModalDetailListUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("modal/ModalDetailList");
                }
            }
            modal.ModalDetailListUI = ModalDetailListUI;
            REG("ui.modal.ModalDetailListUI", ModalDetailListUI);
            class ModalInfoUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("modal/ModalInfo");
                }
            }
            modal.ModalInfoUI = ModalInfoUI;
            REG("ui.modal.ModalInfoUI", ModalInfoUI);
            class ModalJoinRoomUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("modal/ModalJoinRoom");
                }
            }
            modal.ModalJoinRoomUI = ModalJoinRoomUI;
            REG("ui.modal.ModalJoinRoomUI", ModalJoinRoomUI);
            class ModalMessageUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("modal/ModalMessage");
                }
            }
            modal.ModalMessageUI = ModalMessageUI;
            REG("ui.modal.ModalMessageUI", ModalMessageUI);
            class ModalPicUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("modal/ModalPic");
                }
            }
            modal.ModalPicUI = ModalPicUI;
            REG("ui.modal.ModalPicUI", ModalPicUI);
            class ModalResetEndUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("modal/ModalResetEnd");
                }
            }
            modal.ModalResetEndUI = ModalResetEndUI;
            REG("ui.modal.ModalResetEndUI", ModalResetEndUI);
            class ModalResultUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("modal/ModalResult");
                }
            }
            modal.ModalResultUI = ModalResultUI;
            REG("ui.modal.ModalResultUI", ModalResultUI);
            class ModalRoleInfoUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("modal/ModalRoleInfo");
                }
            }
            modal.ModalRoleInfoUI = ModalRoleInfoUI;
            REG("ui.modal.ModalRoleInfoUI", ModalRoleInfoUI);
            class ModalShareUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("modal/ModalShare");
                }
            }
            modal.ModalShareUI = ModalShareUI;
            REG("ui.modal.ModalShareUI", ModalShareUI);
            class ModalShareCluUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("modal/ModalShareClu");
                }
            }
            modal.ModalShareCluUI = ModalShareCluUI;
            REG("ui.modal.ModalShareCluUI", ModalShareCluUI);
            class Scene1ComputerUI extends Dialog {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("modal/Scene1Computer");
                }
            }
            modal.Scene1ComputerUI = Scene1ComputerUI;
            REG("ui.modal.Scene1ComputerUI", Scene1ComputerUI);
        })(modal = ui.modal || (ui.modal = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var modalOperate;
        (function (modalOperate) {
            var harris;
            (function (harris) {
                class PhoneHelenUI extends Dialog {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("modalOperate/harris/PhoneHelen");
                    }
                }
                harris.PhoneHelenUI = PhoneHelenUI;
                REG("ui.modalOperate.harris.PhoneHelenUI", PhoneHelenUI);
            })(harris = modalOperate.harris || (modalOperate.harris = {}));
        })(modalOperate = ui.modalOperate || (ui.modalOperate = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var modalOperate;
        (function (modalOperate) {
            var jane;
            (function (jane) {
                class PhoneJaneUI extends Dialog {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("modalOperate/jane/PhoneJane");
                    }
                }
                jane.PhoneJaneUI = PhoneJaneUI;
                REG("ui.modalOperate.jane.PhoneJaneUI", PhoneJaneUI);
            })(jane = modalOperate.jane || (modalOperate.jane = {}));
        })(modalOperate = ui.modalOperate || (ui.modalOperate = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var modalOperate;
        (function (modalOperate) {
            var joe;
            (function (joe) {
                class BookJoeUI extends Dialog {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("modalOperate/joe/BookJoe");
                    }
                }
                joe.BookJoeUI = BookJoeUI;
                REG("ui.modalOperate.joe.BookJoeUI", BookJoeUI);
                class PhoneJoeUI extends Dialog {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("modalOperate/joe/PhoneJoe");
                    }
                }
                joe.PhoneJoeUI = PhoneJoeUI;
                REG("ui.modalOperate.joe.PhoneJoeUI", PhoneJoeUI);
            })(joe = modalOperate.joe || (modalOperate.joe = {}));
        })(modalOperate = ui.modalOperate || (ui.modalOperate = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var modalOperate;
        (function (modalOperate) {
            var scene1;
            (function (scene1) {
                class ComputerUI extends Dialog {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("modalOperate/scene1/Computer");
                    }
                }
                scene1.ComputerUI = ComputerUI;
                REG("ui.modalOperate.scene1.ComputerUI", ComputerUI);
                class DeskLockerUI extends Dialog {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("modalOperate/scene1/DeskLocker");
                    }
                }
                scene1.DeskLockerUI = DeskLockerUI;
                REG("ui.modalOperate.scene1.DeskLockerUI", DeskLockerUI);
                class JaneComputer1UI extends Dialog {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("modalOperate/scene1/JaneComputer1");
                    }
                }
                scene1.JaneComputer1UI = JaneComputer1UI;
                REG("ui.modalOperate.scene1.JaneComputer1UI", JaneComputer1UI);
                class ModalPhoneUI extends Dialog {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("modalOperate/scene1/ModalPhone");
                    }
                }
                scene1.ModalPhoneUI = ModalPhoneUI;
                REG("ui.modalOperate.scene1.ModalPhoneUI", ModalPhoneUI);
                class SafeBoxUI extends Dialog {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("modalOperate/scene1/SafeBox");
                    }
                }
                scene1.SafeBoxUI = SafeBoxUI;
                REG("ui.modalOperate.scene1.SafeBoxUI", SafeBoxUI);
                class WilsonComputer1UI extends Dialog {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("modalOperate/scene1/WilsonComputer1");
                    }
                }
                scene1.WilsonComputer1UI = WilsonComputer1UI;
                REG("ui.modalOperate.scene1.WilsonComputer1UI", WilsonComputer1UI);
                class joeComputer1UI extends Dialog {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("modalOperate/scene1/joeComputer1");
                    }
                }
                scene1.joeComputer1UI = joeComputer1UI;
                REG("ui.modalOperate.scene1.joeComputer1UI", joeComputer1UI);
            })(scene1 = modalOperate.scene1 || (modalOperate.scene1 = {}));
        })(modalOperate = ui.modalOperate || (ui.modalOperate = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var modalOperate;
        (function (modalOperate) {
            var wilson;
            (function (wilson) {
                class PhoneWhilsonUI extends Dialog {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("modalOperate/wilson/PhoneWhilson");
                    }
                }
                wilson.PhoneWhilsonUI = PhoneWhilsonUI;
                REG("ui.modalOperate.wilson.PhoneWhilsonUI", PhoneWhilsonUI);
                class WilsonPMTUI extends Dialog {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("modalOperate/wilson/WilsonPMT");
                    }
                }
                wilson.WilsonPMTUI = WilsonPMTUI;
                REG("ui.modalOperate.wilson.WilsonPMTUI", WilsonPMTUI);
            })(wilson = modalOperate.wilson || (modalOperate.wilson = {}));
        })(modalOperate = ui.modalOperate || (ui.modalOperate = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var scene;
        (function (scene) {
            class SceneBeforeStartUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("scene/SceneBeforeStart");
                }
            }
            scene.SceneBeforeStartUI = SceneBeforeStartUI;
            REG("ui.scene.SceneBeforeStartUI", SceneBeforeStartUI);
            class SceneBookUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("scene/SceneBook");
                }
            }
            scene.SceneBookUI = SceneBookUI;
            REG("ui.scene.SceneBookUI", SceneBookUI);
            class SceneDragUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("scene/SceneDrag");
                }
            }
            scene.SceneDragUI = SceneDragUI;
            REG("ui.scene.SceneDragUI", SceneDragUI);
            class SceneEndTalkUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("scene/SceneEndTalk");
                }
            }
            scene.SceneEndTalkUI = SceneEndTalkUI;
            REG("ui.scene.SceneEndTalkUI", SceneEndTalkUI);
            class SceneGameUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("scene/SceneGame");
                }
            }
            scene.SceneGameUI = SceneGameUI;
            REG("ui.scene.SceneGameUI", SceneGameUI);
            class SceneHallUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("scene/SceneHall");
                }
            }
            scene.SceneHallUI = SceneHallUI;
            REG("ui.scene.SceneHallUI", SceneHallUI);
            class SceneLoadingUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("scene/SceneLoading");
                }
            }
            scene.SceneLoadingUI = SceneLoadingUI;
            REG("ui.scene.SceneLoadingUI", SceneLoadingUI);
            class SceneNoteUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("scene/SceneNote");
                }
            }
            scene.SceneNoteUI = SceneNoteUI;
            REG("ui.scene.SceneNoteUI", SceneNoteUI);
            class SceneResultUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("scene/SceneResult");
                }
            }
            scene.SceneResultUI = SceneResultUI;
            REG("ui.scene.SceneResultUI", SceneResultUI);
            class SceneResult1UI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("scene/SceneResult1");
                }
            }
            scene.SceneResult1UI = SceneResult1UI;
            REG("ui.scene.SceneResult1UI", SceneResult1UI);
            class SceneRoleUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("scene/SceneRole");
                }
            }
            scene.SceneRoleUI = SceneRoleUI;
            REG("ui.scene.SceneRoleUI", SceneRoleUI);
            class SceneTalkingUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("scene/SceneTalking");
                }
            }
            scene.SceneTalkingUI = SceneTalkingUI;
            REG("ui.scene.SceneTalkingUI", SceneTalkingUI);
            class SceneTruthUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("scene/SceneTruth");
                }
            }
            scene.SceneTruthUI = SceneTruthUI;
            REG("ui.scene.SceneTruthUI", SceneTruthUI);
            class SceneVideoUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("scene/SceneVideo");
                }
            }
            scene.SceneVideoUI = SceneVideoUI;
            REG("ui.scene.SceneVideoUI", SceneVideoUI);
            class SceneWaitingUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("scene/SceneWaiting");
                }
            }
            scene.SceneWaitingUI = SceneWaitingUI;
            REG("ui.scene.SceneWaitingUI", SceneWaitingUI);
            class testOpenUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("scene/testOpen");
                }
            }
            scene.testOpenUI = testOpenUI;
            REG("ui.scene.testOpenUI", testOpenUI);
        })(scene = ui.scene || (ui.scene = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var test;
        (function (test) {
            class TestSceneUI extends Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("test/TestScene");
                }
            }
            test.TestSceneUI = TestSceneUI;
            REG("ui.test.TestSceneUI", TestSceneUI);
        })(test = ui.test || (ui.test = {}));
    })(ui || (ui = {}));

    class GameCluDetail extends ui.component.GamaCluDetailUI {
        constructor() {
            super();
            this.selectTag = 1;
            this.listByTagAll = [];
            this.dataDetailList = [];
        }
        onEnable() {
            this.init();
            EventManager.sub("game/updateCluList", this, this.changeCluList);
            this.img.on(Laya.Event.CLICK, this, e => {
                UIManager.showDetail([this.selDetailData], false);
            });
        }
        init() {
            this.listTag.array = [
                { label: "All", type1: 1, type2: 1, img: "all" },
                { label: "Marked", type1: 1, type2: 2, img: "tag" },
                { label: "Private", type1: 1, type2: 3, img: "private" }
            ];
            this.listTag.renderHandler = new Laya.Handler(this, (cell, idx) => {
                let data = cell.dataSource;
                let img = cell.getChildByName("img1");
                img.skin = `v2/${DataLang.lang}/img_btn_${data.img}${this.listTag.selectedIndex == idx ? 1 : 0}.png`;
            });
            this.listTag.selectHandler = new Laya.Handler(this, idx => {
                let data = this.listTag.array[idx];
                this.wrapDetailClu.visible = data.type1 == 1;
                this.wrapDetailNote.visible = data.type1 == 2;
                this.changeCluList();
            });
            this.initWrapClu();
            this.initNote();
        }
        initWrapClu() {
            let wrap = this.wrapDetailClu;
            let btnShare = wrap.getChildByName("btnShare");
            let btnSign = wrap.getChildByName("btnSign");
            this.detailList.renderHandler = new Laya.Handler(this, (cell, idx) => {
                let data = cell.dataSource;
                let selected = cell.getChildByName("selected");
                selected.visible = this.detailList.selectedIndex == idx;
                console.log(data.img, "img");
                let txtNew = cell.getChildByName("txtNew");
                txtNew.visible = !data.flagRead;
            });
            let arrRight = this.wrapDetailClu.getChildByName("arrRight");
            let arrLeft = this.wrapDetailClu.getChildByName("arrLeft");
            arrRight.on(Laya.Event.CLICK, this, e => {
                this.detailList.selectedIndex++;
                if (this.detailList.selectedIndex > this.detailList.length - 1) {
                    this.detailList.selectedIndex = this.detailList.length - 1;
                }
                let idx = this.detailList.scrollTo(this.detailList.selectedIndex);
            });
            arrLeft.on(Laya.Event.CLICK, this, e => {
                this.detailList.selectedIndex--;
                if (this.detailList.selectedIndex < 0) {
                    this.detailList.selectedIndex = 0;
                }
                this.detailList.scrollTo(this.detailList.selectedIndex);
            });
            this.roomList.array = Scene3dConfig.sceneList;
            this.roomList.selectHandler = new Laya.Handler(this, this.changeCluList);
            this.roomList.renderHandler = new Laya.Handler(this, (cell, idx) => {
                let label = cell.getChildByName("label");
                label.color = idx == this.roomList.selectedIndex ? "#ffd600" : "#fff";
                let listDetails = this.getDetailList(idx);
                let txtNew = cell.getChildByName("txtNew");
                txtNew.visible = listDetails.some(item => item.fromUserId != GameManager.userInfo.userId && !item.flagRead);
            });
            this.roomList.selectedIndex = 0;
            btnShare.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                let selDetailData = this.detailList.array[this.detailList.selectedIndex];
                GameManager.toggleShare(selDetailData);
            }));
            btnSign.on(Laya.Event.CLICK, this, e => {
                let selDetailData = this.detailList.array[this.detailList.selectedIndex];
                if (selDetailData.order > 0) {
                    selDetailData.order = 0;
                }
                else {
                    let lastOrder = GameManager.getEviLastOrder();
                    selDetailData.order = lastOrder;
                }
                GameManager.addEvident(selDetailData);
                this.changeCluList();
            });
            this.detailList.selectHandler = new Laya.Handler(this, this.updateCluDetail);
            this.changeCluList();
        }
        changeCluList() {
            let idOld = -1;
            if (this.detailList.array) {
                let targetOld = this.detailList.array[this.detailList.selectedIndex];
                if (targetOld) {
                    idOld = targetOld.id;
                }
            }
            this.updateDetailList();
            this.detailList.array = [];
            this.detailList.array = this.dataDetailList;
            this.detailList.refresh();
            if (idOld > -1) {
                let idx = this.detailList.array.findIndex(item => item.id == idOld);
                if (idx > -1) {
                    this.detailList.selectedIndex = idx;
                }
                else {
                    this.detailList.selectedIndex = 0;
                }
            }
            else {
                this.detailList.selectedIndex = 0;
            }
            this.updateCluDetail();
            this.roomList.refresh();
        }
        getDetailList(idx = this.roomList.selectedIndex) {
            let dataTag = this.listTag.array[this.listTag.selectedIndex];
            if (!dataTag) {
                return [];
            }
            let listRes = GameManager.evidentListGot.filter(item => {
                let selectSceneName = this.roomList.array[idx].sceneName;
                let cluTag = dataTag && dataTag.type2;
                if (dataTag.type1 == 1) {
                    if (cluTag == 1) {
                        return item.sceneFrom == selectSceneName;
                    }
                    else if (cluTag == 2) {
                        return (item.order && item.order > 0 && item.sceneFrom == selectSceneName);
                    }
                    else if (cluTag == 3) {
                        return (item.fromUserId == GameManager.userInfo.userId &&
                            item.sceneFrom == selectSceneName);
                    }
                }
            });
            let map = {};
            let res = [];
            listRes.forEach(item => {
                if (!map[item.id]) {
                    let ii = Object.assign({}, item);
                    ii.fromUserIdList = [item.fromUserId];
                    map[item.id] = item;
                    res.push(ii);
                }
                else {
                    let ii = res.find(ii => ii.id == item.id);
                    ii.fromUserIdList.push(item.fromUserId);
                    if (!item.flagRead) {
                        ii.flagRead = false;
                    }
                }
            });
            return res;
        }
        updateDetailList(idx = this.roomList.selectedIndex) {
            let dataTag = this.listTag.array[this.listTag.selectedIndex];
            if (!dataTag) {
                return [];
            }
            this.listByTagAll = GameManager.evidentListGot.filter(item => {
                let selectSceneName = this.roomList.array[idx].sceneName;
                let cluTag = dataTag && dataTag.type2;
                if (dataTag.type1 == 1) {
                    if (cluTag == 1) {
                        return item.sceneFrom == selectSceneName;
                    }
                    else if (cluTag == 2) {
                        return (item.order && item.order > 0 && item.sceneFrom == selectSceneName);
                    }
                    else if (cluTag == 3) {
                        return (item.fromUserId == GameManager.userInfo.userId &&
                            item.sceneFrom == selectSceneName);
                    }
                }
            });
            let map = {};
            this.dataDetailList = [];
            this.listByTagAll.forEach(item => {
                if (!map[item.id]) {
                    let ii = Object.assign({}, item);
                    ii.fromUserIdList = [item.fromUserId];
                    map[item.id] = item;
                    this.dataDetailList.push(ii);
                }
                else {
                    let ii = this.dataDetailList.find(ii => ii.id == item.id);
                    ii.fromUserIdList.push(item.fromUserId);
                    if (!item.flagRead) {
                        ii.flagRead = false;
                    }
                }
            });
            if (this.listTag.selectedIndex == 2) {
            }
            else {
                this.dataDetailList = GameManager.sortEvidentByShareTime(this.dataDetailList);
            }
        }
        updateCluDetail() {
            let img = this.wrapDetailClu.getChildByName("img");
            let btnShare = this.wrapDetailClu.getChildByName("btnShare");
            let btnSign = this.wrapDetailClu.getChildByName("btnSign");
            let labelFrom = this.wrapDetailClu.getChildByName("labelFrom");
            let selDetailData = this.detailList.array[this.detailList.selectedIndex];
            this.selDetailData = selDetailData;
            if (!selDetailData) {
                img.visible = false;
                btnSign.visible = false;
                btnShare.visible = false;
                labelFrom.visible = false;
                return;
            }
            let bgSign = btnSign.getChildByName("img");
            bgSign.skin = `v2/${DataLang.lang}/img_marked${selDetailData.order ? 1 : 0}.png`;
            img.visible = true;
            btnSign.visible = true;
            btnShare.visible = false;
            labelFrom.visible = !!selDetailData.fromUserIdList.find(ii => ii.fromUserId != GameManager.userInfo.userId);
            let nameList = [];
            selDetailData.fromUserIdList.forEach(fromUserId => {
                let roleId = GameManager.getSelectedRoleIdByUserId(fromUserId);
                let roleInfo = Scene3dConfig.getRoleInfoByRoleId(roleId);
                nameList.push(roleInfo.roleName);
            });
            labelFrom.text = `分享自:${nameList.join(",")}`;
            img.skin = selDetailData.img;
            let imgShare = btnShare.getChildByName("img");
            imgShare.skin = `v2/${DataLang.lang}/btn_show${selDetailData.serverId ? 0 : 1}.png`;
            let flagFromSelf = selDetailData.fromUserId == GameManager.userInfo.userId;
            let flagInCorrectStep = GameManager.step == "FREE_TALKING" || GameManager.step == "TALKING";
            btnShare.visible =
                flagFromSelf && flagInCorrectStep && this.listTag.selectedIndex == 2;
            selDetailData.flagRead = true;
            GameManager.addEvident(selDetailData, false);
            GameManager.toggleRead(selDetailData.id, true);
            this.detailList.refresh();
            this.roomList.refresh();
        }
        initNote() {
            this.listNote.array = GameManager.listNote.concat({ content: "" });
            this.listNote.renderHandler = new Laya.Handler(this, (cell, idx) => {
                let data = cell.dataSource;
                let content = cell.getChildByName("content");
                content.offAll(Laya.Event.BLUR);
                content.on(Laya.Event.BLUR, this, this.saveNote);
            });
        }
        saveNote() {
            let listData = [];
            this.listNote.cells.forEach((cell) => {
                if (cell.visible) {
                    let content = cell.getChildByName("content");
                    if (content.text) {
                        listData.push({
                            content: content.text
                        });
                    }
                }
            });
            GameManager.listNote = listData;
            GameManager.saveLocalData();
            this.initNote();
        }
    }

    class ImageAutoResize extends Laya.Image {
        constructor() {
            super();
            this.oldW = 0;
            this.oldH = 0;
        }
        onEnable() {
            this.oldH = this.height;
            this.oldW = this.width;
            this.doResize();
            this.on(Laya.Event.LOADED, this, this.doResize);
            this.on(Laya.Event.COMPLETE, this, this.doResize);
            this.on(Laya.Event.CHANGED, this, this.doResize);
        }
        doResize() {
            let sourceImg = this.source;
            if (!sourceImg) {
                return;
            }
            let ratioW = this.oldW / sourceImg.sourceWidth;
            let ratioH = this.oldH / sourceImg.sourceHeight;
            let ratio = Math.min(ratioW, ratioH);
            this.size(sourceImg.sourceWidth * ratio, sourceImg.sourceHeight * ratio);
            this.pivot(this.width / 2, this.height / 2);
            console.log(this.width / this.height, this.scaleX, this.scaleY);
        }
    }

    class Button extends Laya.Script {
        constructor() {
            super();
        }
        onEnable() {
            let oldScale = this.owner.scaleX;
            this.owner.on(Laya.Event.MOUSE_DOWN, this, e => {
                SoundManager.playEffect("sound/btn.mp3");
                Utils.asyncTween(this.owner, { scaleX: oldScale * 0.9, scaleY: oldScale * 0.9 }, 100);
            });
            Laya.stage.on(Laya.Event.MOUSE_UP, this, e => {
                Utils.asyncTween(this.owner, { scaleX: oldScale, scaleY: oldScale }, 100);
            });
        }
    }

    class GameTalking extends ui.component.GamaTalkingUI {
        constructor() {
            super(...arguments);
            this.isFreeTalking = false;
            this.totalTime = 60 * 5 * 1000;
        }
        getDetailList(userId) {
            let list = GameManager.evidentListGot.filter(item => {
                return item.fromUserId == userId && item.serverId;
            });
            list = GameManager.sortEvidentByShareTime(list);
            return list;
        }
        onEnable() {
            EventManager.sub("game/updateCluList", this, e => {
                this.listUserTalking.refresh();
            });
            this.isFreeTalking = GameManager.step == "FREE_TALKING";
            this.listUserTalking.renderHandler = new Laya.Handler(this, (cell) => {
                let data = cell.dataSource || {};
                let roleId = GameManager.getSelectedRoleIdByUserId(data.userId);
                let roleData = Scene3dConfig.getRoleInfoByRoleId(roleId);
                let imgRole = cell.getChildByName("img");
                let roleName = cell.getChildByName("roleName");
                let selfSelect = cell.getChildByName("selfSelect");
                let playerName = cell.getChildByName("playerName");
                roleName.text = roleData.roleName;
                imgRole.skin = roleData.img;
                playerName.text = data.username;
                if (this.isFreeTalking) {
                    selfSelect.visible = Agora.listTalking.indexOf(data.userId) > -1;
                }
                else {
                    selfSelect.visible = GameManager.talkingUserId == data.userId;
                }
                let detailBox = cell.getChildByName("detailBox");
                detailBox.setData(this.getDetailList(data.userId));
            });
            this.timer.loop(500, this, e => {
                Agora.checkVolumn();
                this.listUserTalking.refresh();
            });
            this.listUserTalking.array = GameManager.roomUserList;
            this.listUserTalking.width =
                this.listUserTalking.array.length * (238 + 50) - 50;
            EventManager.sub("talking/changeCurrent", this, this.changeCurrent);
            EventManager.sub("talking/changeFree", this, this.changeFree);
            EventManager.sub("talking/changeSpeaking", this, data => {
                this.listUserTalking.refresh();
            });
            EventManager.sub("game/updateTimeLeft", this, e => {
                this.totalTime =
                    GameManager.step == "CONCLUSION" ? 2 * 60 * 1000 : 5 * 60 * 1000;
            });
            this.btnEndSelfTalking.on(Laya.Event.CLICK, this, e => {
                if (GameManager.step == "CONCLUSION") {
                    this.totalTime = 2 * 60 * 1000;
                    NetController.reqEndConclusion();
                }
                else {
                    NetController.reqEndTalking();
                }
            });
            this.btnTalkingNext.readyHandler = new Laya.Handler(this, e => {
                NetController.reqEndFreeTalking();
            });
            if (GameManager.step == "FREE_TALKING") {
                this.changeFree();
            }
            else if (GameManager.step == "TALKING") {
                this.changeCurrent({
                    talkingUserId: GameManager.talkingUserId
                });
            }
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown);
            Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyUp);
        }
        onMouseUp() {
        }
        onKeyUp(e) {
        }
        onKeyDown(e) {
            if (e.keyCode == Laya.Keyboard.V) {
            }
        }
        onDisable() {
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            Laya.stage.off(Laya.Event.KEY_DOWN, this, this.onKeyDown);
            Laya.stage.off(Laya.Event.KEY_UP, this, this.onKeyUp);
            Laya.timer.clearAll(this);
        }
        toggleMicro(flag) {
            Agora.toggleMicro(flag);
        }
        changeCurrent({ talkingUserId }) {
            let isSelf = talkingUserId == GameManager.userInfo.userId;
            let talkingData = GameManager.getRoomUserById(talkingUserId);
            if (!isSelf) {
                if (talkingData.username) {
                    this.txtSpeaking.text = DataLang.getTxtByType("talkingPeople", {
                        username: talkingData.username
                    });
                }
                else {
                    this.txtSpeaking.text = "";
                }
            }
            this.toggleMicro(isSelf);
            this.txtSpeaking.visible = !isSelf;
            this.btnEndSelfTalking.visible = isSelf;
            this.btnTalkingNext.visible = false;
            this.listUserTalking.refresh();
        }
        changeFree() {
            this.toggleMicro(true);
            this.txtSpeaking.visible = false;
            this.isFreeTalking = true;
            this.btnEndSelfTalking.visible = false;
            this.btnTalkingNext.visible = true;
            this.listUserTalking.refresh();
        }
    }

    class GameExiter extends Laya.Box {
        onEnable() {
            this.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                UIManager.showConfirm({
                    content: DataLang.getTxtByType('sureExitGame'),
                    onSure(e) {
                        return __awaiter(this, void 0, void 0, function* () {
                            yield NetController.reqExitRoom(GameManager.roomInfo.id);
                            UIManager.goHall();
                        });
                    },
                    onCancel(e) { }
                });
            }));
        }
    }

    class WrapReady extends Laya.Box {
        constructor() {
            super();
        }
        onEnable() {
            this.txtReady = this.getChildByName("txtReady");
            this.btnReady = this.getChildByName("btnReady");
            this.btnReady.on(Laya.Event.CLICK, this, e => {
                this.readyHandler && this.readyHandler.run();
            });
            EventManager.sub("game/updateReadyBtn", this, this.updateRender);
            this.updateRender();
        }
        updateRender() {
            let listReady = GameManager.roomReadyList;
            this.btnReady.disabled =
                listReady.indexOf(GameManager.userInfo.userId) > -1;
            this.txtReady.text = `${listReady.length}/${GameManager.roomUserList.length}Confirmed`;
        }
    }

    class LangImg extends Laya.Script {
        constructor() {
            super(...arguments);
            this.type = "";
        }
        onEnable() {
            this.owner.skin = DataLang.getImgByType(this.type);
        }
    }

    class LangLabel extends Laya.Script {
        constructor() {
            super(...arguments);
            this.type = "";
        }
        onEnable() {
            this.owner.font = "FZZYJW";
            this.owner.text = DataLang.getTxtByType(this.type);
        }
    }

    class GameTalkingDetailBox extends Laya.Box {
        constructor() {
            super();
            this.list = [];
            this.startIdx = 0;
        }
        onEnable() {
            this.detailList = this.getChildByName("detailList");
            this.btnPre = this.getChildByName("btnPre");
            this.btnNext = this.getChildByName("btnNext");
            this.detailList.mouseHandler = new Laya.Handler(this, (e, i2) => {
                if (e.type == "click") {
                    let data = this.detailList.array[i2];
                    UIManager.showDetail([data], false);
                }
            });
            this.btnPre.on(Laya.Event.CLICK, this, e => {
                this.startIdx--;
                this.updateList();
            });
            this.btnNext.on(Laya.Event.CLICK, this, e => {
                this.startIdx++;
                this.updateList();
            });
        }
        onDisable() {
            this.btnPre.offAll(Laya.Event.CLICK);
            this.btnNext.offAll(Laya.Event.CLICK);
        }
        setData(list) {
            this.list = list;
            this.list.forEach((item, idx) => {
                item.num = idx + 1;
            });
            this.updateList();
        }
        updateList() {
            this.detailList.array = this.list.slice(this.startIdx, 9 + this.startIdx);
            this.btnPre.visible = this.startIdx > 0;
            this.btnNext.visible = 9 + this.startIdx < this.list.length;
        }
    }

    class GameTimeline extends ui.component.GamaTimelineUI {
        constructor() {
            super();
        }
        onEnable() {
            this.btnAddTimePoint.on(Laya.Event.CLICK, this, e => {
                UIManager.openModal("modal/ModalAddTimeline.scene");
            });
            EventManager.sub("timeline/updata", this, this.updateData);
            this.wrapTree.renderHandler = new Laya.Handler(this, (cell) => {
                let data = cell.dataSource;
                let btnDel = cell.getChildByName("btnDel");
                let btnEdit = cell.getChildByName("btnEdit");
                btnDel.offAll(Laya.Event.CLICK);
                btnDel.on(Laya.Event.CLICK, this, e => {
                    GameManager.removeTimeData(data);
                });
                btnEdit.offAll(Laya.Event.CLICK);
                btnEdit.on(Laya.Event.CLICK, this, e => {
                    UIManager.openModal("modal/ModalAddTimeline.scene", true, data);
                });
            });
            this.initTree();
            this.listUser.array = GameManager.roomUserList;
        }
        updateData() {
            this.initTree();
        }
        initTree() {
            this.wrapTree.array = GameManager.dataTimeline;
            this.wrapTree.height =
                GameManager.dataTimeline.length * 98 +
                    (GameManager.dataTimeline.length - 1) * 8;
            this.line.height = (GameManager.dataTimeline.length - 1) * 108;
        }
    }

    class GameChatBox extends ui.component.GameChatBoxUI {
        constructor() {
            super();
            this.page = 0;
            this.list = [];
        }
        toggleReadIcon(num) {
            GameManager.iconChatNotRead = num;
            this.iconInfo.visible = num > 0;
            this.num.text = "" + GameManager.iconChatNotRead;
        }
        onEnable() {
            this.wrap.visible = GameManager.chatBoxOpened;
            this.toggleReadIcon(GameManager.iconChatNotRead);
            this.btn.on(Laya.Event.CLICK, this, e => {
                GameManager.toggleChatBox();
                this.wrap.visible = GameManager.chatBoxOpened;
                if (!GameManager.chatBoxOpened) {
                    this.toggleReadIcon(0);
                }
                e.stopPropagation();
            });
            this.btnClose.on(Laya.Event.CLICK, this, e => {
                GameManager.chatBoxOpened = false;
                this.wrap.visible = GameManager.chatBoxOpened;
                this.toggleReadIcon(0);
            });
            this.areaInput.on(Laya.Event.KEY_PRESS, this, e => {
                if (e.keyCode == 13) {
                    this.sendMsg();
                }
            });
            this.btnSend.on(Laya.Event.CLICK, this, this.sendMsg);
            EventManager.sub("game/updateChat", this, this.updateChat);
            EventManager.sub("game/showChatNotSee", this, e => {
                GameManager.iconChatNotRead++;
                this.toggleReadIcon(GameManager.iconChatNotRead);
            });
            this.updateChat();
        }
        onDisable() {
            EventManager.unSub(this);
        }
        updateChat() {
            this.wrapInner.removeChildren();
            this.wrapInner.y = 0;
            this.wrapInner.height = 20;
            let dataList = GameManager.getChatListCommon();
            dataList.forEach((chatData, idx) => {
                let sp = new Laya.Sprite();
                let txtName = new Laya.Label();
                txtName.fontSize = 20;
                txtName.text = Utils.subString(chatData.fromUserName, 6) + ":";
                txtName.color = GameManager.getColorBySeat(idx % 2);
                sp.addChild(txtName);
                let txtCnt = new Laya.Label();
                txtCnt.x = 110;
                txtCnt.width = 220;
                txtCnt.wordWrap = true;
                txtCnt.fontSize = 20;
                txtCnt.color = "#fff";
                sp.addChild(txtCnt);
                txtCnt.text = chatData.text;
                txtCnt.leading = 6;
                sp.height = txtCnt.height;
                sp.y = this.wrapInner.height;
                this.wrapInner.addChild(sp);
                this.wrapInner.height += sp.height + 12;
            });
            this.wrapScroll.refresh();
            this.wrapScroll.scrollTo(0, this.wrapScroll.vScrollBar.max);
        }
        sendMsg() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.areaInput.text) {
                    return;
                }
                let txt = this.areaInput.text;
                this.areaInput.text = "";
                NetController.sendChatData(txt);
                Laya.timer.frameOnce(2, this, e => {
                    this.areaInput.text = "";
                });
            });
        }
    }

    class GameChatBox2 extends ui.component.GameChatBox2UI {
        constructor() {
            super();
            this.page = 0;
            this.list = [];
        }
        onEnable() {
            this.areaInput.on(Laya.Event.KEY_PRESS, this, e => {
                if (e.keyCode == 13) {
                    this.sendMsg();
                }
            });
            EventManager.sub("game/updateChat", this, this.updateChat);
            this.userList.selectHandler = new Laya.Handler(this, this.updateSelected);
            this.userList.renderHandler = new Laya.Handler(this, (cell, idx) => {
                let bg = cell.getChildByName("bg");
                let icon = cell.getChildByName("icon");
                let flagSelfSelected = this.userList.selectedIndex == idx;
                bg.visible = flagSelfSelected;
                icon.skin = `ui/img_chat${flagSelfSelected ? 4 : 3}.png`;
            });
            this.userList.array = GameManager.roomUserList.filter(item => item.userId != GameManager.userInfo.userId);
            this.btnClose.on(Laya.Event.CLICK, this, e => {
                this.visible = false;
            });
            this.updateSelected();
        }
        updateSelected() {
            let selectedData = this.userList.array[this.userList.selectedIndex];
            this.title2.text = `与${selectedData.username}聊天`;
            this.updateChat();
        }
        onDisable() {
            EventManager.unSub(this);
        }
        updateChat() {
            this.wrapInner.removeChildren();
            this.wrapInner.y = 0;
            this.wrapInner.height = 20;
            let selectedData = this.userList.array[this.userList.selectedIndex];
            let dataList = GameManager.getChatListWith(selectedData.userId);
            dataList.forEach(chatData => {
                let sp = new Laya.Sprite();
                let txtName = new Laya.Label();
                txtName.fontSize = 16;
                txtName.color = "#2ee9ff";
                txtName.text = chatData.fromUserName;
                sp.addChild(txtName);
                let txtCnt = new Laya.Label();
                txtCnt.x = 101;
                txtCnt.width = 270;
                txtCnt.wordWrap = true;
                txtCnt.fontSize = 16;
                txtCnt.color = "#fff";
                sp.addChild(txtCnt);
                txtCnt.text = chatData.text;
                sp.height = txtCnt.height;
                sp.y = this.wrapInner.height;
                this.wrapInner.addChild(sp);
                this.wrapInner.height += sp.height + 6;
            });
            this.wrapScroll.refresh();
        }
        sendMsg() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.areaInput.text) {
                    return;
                }
                let selectedData = this.userList.array[this.userList.selectedIndex];
                let txt = this.areaInput.text;
                this.areaInput.text = "";
                NetController.sendChatData(txt, selectedData.userId);
                Laya.timer.frameOnce(2, this, e => {
                    this.areaInput.text = "";
                });
            });
        }
    }

    class GameHouse extends ui.component.GameHouseUI {
        constructor() {
            super(...arguments);
            this.spAvatarList = {};
        }
        updateInScene() {
            let map = {};
            for (let userId in GameManager.sceneMap) {
                let sceneId = GameManager.sceneMap[userId];
                let sceneData = Scene3dConfig.getSceneConfigById(sceneId);
                if (!map[sceneData.sceneId]) {
                    map[sceneData.sceneId] = {
                        sceneName: sceneData.sceneName,
                        userList: [],
                        id: sceneData.sceneId
                    };
                }
                let userInfo = GameManager.getRoomUserById(userId);
                map[sceneData.sceneId].userList.push(userInfo);
            }
            for (let key in this.spAvatarList) {
                this.spAvatarList[key].visible = false;
            }
            for (let sceneId in map) {
                let sceneData = map[sceneId];
                let area = this.randomArea.getChildByName("randomArea" + sceneData.id);
                sceneData.userList.forEach((userInfo) => __awaiter(this, void 0, void 0, function* () {
                    let roleId = GameManager.getSelectedRoleIdByUserId(userInfo.userId);
                    let roleInfo = Scene3dConfig.getRoleInfoByRoleId(roleId);
                    let spAvatar = this.spAvatarList[roleId];
                    if (!spAvatar) {
                        spAvatar = Laya.Pool.getItemByCreateFun("MapAvatar", this.prefabAvatar.create, this.prefabAvatar);
                        spAvatar.size(140, 367);
                        spAvatar.pivot(spAvatar.width / 2, spAvatar.height);
                        spAvatar.scale(0.7, 0.7);
                        this.spAvatarList[roleId] = spAvatar;
                    }
                    area.addChild(spAvatar);
                    let avatar = spAvatar.getChildByName("avatar");
                    avatar.skin = roleInfo.img;
                    spAvatar.visible = true;
                    let pos = new Laya.Point(area.width * Math.random(), area.height * Math.random());
                    spAvatar.pos(pos.x, pos.y);
                    spAvatar.rotation = -area.rotation;
                }));
            }
        }
        updateRoom() {
            let sceneConfig = this.sceneList.array[this.sceneList.selectedIndex];
            for (let i = 0; i < 7; i++) {
                let roomId = i + 1;
                let room = this[`room${roomId}`];
                room.toggleUp(sceneConfig.sceneId == roomId);
            }
        }
        goScene(idx) {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.sceneList.selectedIndex == idx) {
                    let data = this.sceneList.array[idx];
                    if (Utils.getQueryVariable("test")) {
                        EventManager.pub("game/changeScene", data.sceneName);
                        return;
                    }
                    yield NetController.goScene(data.sceneId);
                    EventManager.pub("game/changeScene", data.sceneName);
                }
                else {
                    this.sceneList.selectedIndex = idx;
                    this.updateRoom();
                }
            });
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                for (let i = 0; i < 7; i++) {
                    let room = this[`clickArea${i + 1}`];
                    room.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                        let id = i + 1;
                        let selData = this.sceneList.array.find(sceneConfig => sceneConfig.sceneId == id);
                        if (selData) {
                            let idxTarget = this.sceneList.array.indexOf(selData);
                            this.goScene(idxTarget);
                        }
                    }));
                }
                this.wrapSceneList = this.getChildByName("wrapSceneList");
                this.sceneList = this.wrapSceneList.getChildByName("sceneList");
                this.sceneList.mouseHandler = new Laya.Handler(this, (e, idx) => {
                    if (e.type == "click") {
                        this.goScene(idx);
                    }
                });
                this.sceneList.renderHandler = new Laya.Handler(this, (cell, idx) => {
                    let spLabel = cell.getChildByName("label");
                    spLabel.color =
                        idx == this.sceneList.selectedIndex ? "#ffffff" : "#b3b0a6";
                    let selected = cell.getChildByName("selected");
                    selected.skin = `v2/common/img_tag${this.sceneList.selectedIndex == idx ? 1 : 0}.png`;
                });
                this.prefabAvatar = (yield Utils.createPrefab("prefab/MapAvatar.json"));
                this.sceneList.array = Scene3dConfig.sceneList;
                this.updateInScene();
                EventManager.sub("game/updateInScene", this, this.updateInScene);
            });
        }
    }

    class GameRoonEach extends Laya.Image {
        constructor() {
            super();
        }
        onEnable() {
            this.oldY = this.y;
        }
        toggleUp(flag) {
            this.y = flag ? this.oldY - 30 : this.oldY;
        }
    }

    class GameNPC extends ui.component.GameNPCUI {
        constructor() {
            super(...arguments);
            this.spList = [];
            this.selectIdx = -1;
            this.listQues = [];
        }
        get selectedRoleQuesList() {
            return [];
        }
        initRender(datList) {
            return __awaiter(this, void 0, void 0, function* () {
                this.wrapQues.removeChildren();
                let startY = 0;
                let prefab = (yield Utils.createPrefab("prefab/QuestionOption.json"));
                this.listQues = datList;
                datList.forEach((data, idx) => {
                    let cell = Laya.Pool.getItemByCreateFun("chatItem", prefab.create, prefab);
                    this.spList[idx] = cell;
                    let select = cell.getChildByName("select");
                    let num = cell.getChildByName("num");
                    let title = cell.getChildByName("title");
                    num.text = `问题 ${("00" + (idx + 1)).substr(-2)}`;
                    title.text = data.title;
                    cell.offAll(Laya.Event.CLICK);
                    cell.on(Laya.Event.CLICK, this, e => {
                        let selNpcConfig = this.listNPC.array[this.listNPC.selectedIndex];
                        let listAnswered = GameManager.listAnswered[selNpcConfig.roleId];
                        if (!listAnswered) {
                            listAnswered = [];
                            GameManager.listAnswered[selNpcConfig.roleId] = listAnswered;
                        }
                        if (listAnswered.indexOf(data.id) == -1) {
                            if (listAnswered.length >= Scene3dConfig.maxAnswerTime) {
                                UIManager.showMessage("超出上限，无法询问。");
                                return;
                            }
                            listAnswered.push(data.id);
                        }
                        this.selectIdx = idx;
                        this.updateRender();
                    });
                    cell.height = title.height + 28;
                    cell.y = startY;
                    this.wrapQues.addChild(cell);
                    startY += cell.height + 10;
                    this.wrapQues.content.height += cell.height + 10;
                });
                this.doUpdate();
            });
        }
        doUpdate() {
            let selNpcConfig = this.listNPC.array[this.listNPC.selectedIndex];
            let listAnswered = GameManager.listAnswered[selNpcConfig.roleId] || [];
            this.spList.forEach((cell, idx) => {
                let data = this.listQues[idx];
                let flagAnswered = listAnswered.indexOf(data.id) > -1;
                let select = cell.getChildByName("select");
                let num = cell.getChildByName("num");
                let title = cell.getChildByName("title");
                select.visible = idx == this.selectIdx;
                let bg = cell.getChildByName("bg");
                bg.skin = `v2/common/img_${flagAnswered ? "ques1" : "ques_di"}.png`;
            });
        }
        onEnable() {
            this.listNPC.renderHandler = new Laya.Handler(this, (cell) => {
                let data = cell.dataSource;
                let username = cell.getChildByName("username");
                let chance = cell.getChildByName("chance");
                let avatar = cell.getChildByName("avatar");
                let roleData = Scene3dConfig.getRoleInfoByRoleId(data.roleId);
                username.text = roleData.roleName;
                let listAnswered = GameManager.listAnswered[data.roleId];
                let answeredTime = listAnswered ? listAnswered.length : 0;
                chance.text = `${answeredTime}/${Scene3dConfig.maxAnswerTime}`;
                avatar.skin = roleData.img;
            });
            this.listNPC.array = Scene3dConfig.quesConfig;
            this.listNPC.selectedIndex = 0;
            let selNpcConfig = this.listNPC.array[this.listNPC.selectedIndex];
            this.initRender(selNpcConfig.quesList);
            this.updateRender();
        }
        updateRender() {
            let data = this.listQues[this.selectIdx];
            this.bubble.visible = true;
            let selNpcConfig = this.listNPC.array[this.listNPC.selectedIndex];
            let listAnswered = GameManager.listAnswered[selNpcConfig.roleId];
            let answeredTime = listAnswered ? listAnswered.length : 0;
            let lastTime = Scene3dConfig.maxAnswerTime - answeredTime;
            this.lastChance.text = `剩余机会:${lastTime}`;
            if (data) {
                this.content.text = data.content;
            }
            else {
                this.content.text = `我早就下班了，要赶时间回家吃饭呢，你有什么问题就快点问！（你现在有${lastTime}次提问机会）`;
            }
            this.bubble.height = this.content.height + 52;
            this.doUpdate();
        }
    }

    class GameSetting extends ui.component.GameSettingUI {
        onEnable() {
            Laya.stage.on(Laya.Event.CLICK, this, e => {
                this.wrap.visible = false;
            });
            this.btn.on(Laya.Event.CLICK, this, e => {
                EventManager.pub("modal/closeThree", this);
                this.wrap.visible = !this.wrap.visible;
                e.stopPropagation();
            });
            this.wrap.on(Laya.Event.CLICK, this, e => {
                EventManager.pub("modal/closeThree", this);
                e.stopPropagation();
            });
            EventManager.sub("modal/closeThree", this, e => {
                if (e != this) {
                    this.wrap.visible = false;
                }
            });
        }
    }

    class ListKey extends Laya.List {
        constructor() {
            super();
        }
        onEnable() {
            this.array = [
                {
                    keyName: DataLang.getTxtByType("QJ"),
                    keyValue: "W"
                },
                {
                    keyName: DataLang.getTxtByType("HT"),
                    keyValue: "S"
                },
                {
                    keyName: DataLang.getTxtByType("ZY"),
                    keyValue: "A"
                },
                {
                    keyName: DataLang.getTxtByType("YY"),
                    keyValue: "D"
                },
                {
                    keyName: DataLang.getTxtByType("XD"),
                    keyValue: "V"
                }
            ];
            this.mouseHandler = new Laya.Handler(this, (e, idx) => {
                let data = this.array[idx];
                if (e.type == "click") {
                    console.log(data);
                }
            });
        }
    }

    class GameVote extends ui.component.GameVoteUI {
        constructor() {
            super(...arguments);
            this.flagShowVoted = false;
        }
        onEnable() {
            let wrapRes3 = this.getChildByName("wrapRes3");
            this.btnCloseRes.on(Laya.Event.CLICK, this, e => {
                wrapRes3.visible = false;
            });
            this.listVote.renderHandler = new Laya.Handler(this, (cell, idx) => {
                let data = cell.dataSource || {};
                let roleId = data.id;
                let selfSelect = cell.getChildByName("selfSelect");
                selfSelect.visible = GameManager.selfSelectRoleId == roleId;
                let roleName = cell.getChildByName("roleName");
                let playerName = cell.getChildByName("playerName");
                let btnTrue = cell.getChildByName("btnTrue");
                btnTrue.offAll(Laya.Event.CLICK);
                btnTrue.on(Laya.Event.CLICK, this, e => {
                    this.doVote(roleId);
                });
                let btnFalse = cell.getChildByName("btnFalse");
                btnFalse.offAll(Laya.Event.CLICK);
                btnFalse.on(Laya.Event.CLICK, this, (e) => {
                    btnFalse.visible = false;
                    btnTrue.visible = false;
                    this.listVote.selectedIndex = -1;
                    e.stopPropagation();
                });
                let img = cell.getChildByName("img");
                let roleData = Scene3dConfig.getRoleInfoByRoleId(roleId);
                roleName.text = roleData.roleName;
                img.skin = roleData.img;
                let selectedUserId = GameManager.selectRoleMapRoleToUser[data.id];
                if (selectedUserId) {
                    let userData = GameManager.getRoomUserById(selectedUserId);
                    playerName.text = Utils.subString(userData.username, 14);
                }
                else {
                    playerName.text = "";
                }
                let userId = GameManager.selectRoleMapRoleToUser[roleId];
                let flagSelfVoted = !!GameManager.voteMap[GameManager.userInfo.userId];
                if (this.flagShowVoted) {
                    btnTrue.visible = false;
                    btnFalse.visible = false;
                    let list = GameManager.getVotedListByTargetRoleId(roleId);
                    let listRoleList = [];
                    list.forEach(item => {
                        let roleId2 = GameManager.getSelectedRoleIdByUserId(item);
                        let roleData2 = Scene3dConfig.getRoleInfoByRoleId(roleId2);
                        listRoleList.push({
                            avatar: roleData2.img
                        });
                    });
                }
                else {
                    let flagShowBtn = idx == this.listVote.selectedIndex && !flagSelfVoted;
                    btnTrue.visible = flagShowBtn;
                    btnFalse.visible = flagShowBtn;
                }
            });
            EventManager.sub("game/updateVoted", this, e => {
                let listVoted = [];
                for (let uid in GameManager.voteMap) {
                    let userInfo = GameManager.getRoomUserById(uid);
                    let roleId = GameManager.getSelectedRoleIdByUserId(userInfo.userId);
                    let roleConf = Scene3dConfig.getRoleInfoByRoleId(roleId);
                    listVoted.push({
                        img: roleConf.img
                    });
                }
                this.listVoted.array = listVoted;
                this.listVote.refresh();
            });
            EventManager.pub("game/updateVoted");
            this.btnSure.on(Laya.Event.CLICK, this, e => {
                UIManager.goScene("scene/SceneTruth.scene");
            });
            EventManager.sub("game/showResult", this, (e) => __awaiter(this, void 0, void 0, function* () {
                this.flagShowVoted = true;
                this.listVote.refresh();
                yield this.showResult();
            }));
            this.hideResult();
            this.listVote.array = Scene3dConfig.roleList;
        }
        hideResult() {
            return __awaiter(this, void 0, void 0, function* () {
                let wrapRes1 = this.getChildByName("wrapRes1");
                let wrapRes2 = this.getChildByName("wrapRes2");
                let wrapRes3 = this.getChildByName("wrapRes3");
                wrapRes1.visible = false;
                wrapRes2.visible = false;
                wrapRes3.visible = false;
            });
        }
        showModal(wrap, maxPowerRoleList, withAni) {
            return __awaiter(this, void 0, void 0, function* () {
                let people = wrap.getChildByName("people");
                let txt = wrap.getChildByName("txt");
                if (maxPowerRoleList.length > 1) {
                    people.visible = false;
                    txt.x = 419;
                    txt.align = "left";
                }
                else {
                    let roleId = maxPowerRoleList[0];
                    let roleConfig = Scene3dConfig.getRoleInfoByRoleId(roleId);
                    people.skin = roleConfig.img;
                    txt.x = 240;
                    txt.align = "center";
                }
                let nameList = [];
                maxPowerRoleList.forEach(roleId => {
                    let roleConfig = Scene3dConfig.getRoleInfoByRoleId(roleId);
                    nameList.push(roleConfig.roleName);
                });
                txt.text = `${nameList.join(",")}${maxPowerRoleList.indexOf(GameManager.murderRoleId) > -1 ? "是" : "不是"}凶手`;
                wrap.visible = true;
                wrap.pos((this.width - wrap.width) / 2, (this.height - wrap.height) / 2);
                if (withAni) {
                    this.showModalAnimate(wrap, maxPowerRoleList[0]);
                }
                yield Utils.asyncByTime(5000);
            });
        }
        showModalAnimate(wrap, targetRoleId) {
            return __awaiter(this, void 0, void 0, function* () {
                wrap.visible = true;
                wrap.alpha = 0;
                wrap.scale(0, 0);
                let idx = this.listVote.array.findIndex(roleConf => {
                    return roleConf.id == targetRoleId;
                });
                let listW = 1713;
                let startX = (this.width - listW) / 2;
                let eachW = listW / 6;
                wrap.pos(startX + eachW * idx, this.height / 2);
                yield Utils.asyncTween(wrap, {
                    x: (this.width - wrap.width) / 2,
                    y: (this.height - wrap.height) / 2,
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 2000);
            });
        }
        showResult() {
            return __awaiter(this, void 0, void 0, function* () {
                this.hideResult();
                let wrapRes1 = this.getChildByName("wrapRes1");
                let wrapRes2 = this.getChildByName("wrapRes2");
                let { maxPowerRoleList, flag } = GameManager.checkMurderOut();
                let murderRoleId = GameManager.murderRoleId;
                let murderRoleConfig = Scene3dConfig.getRoleInfoByRoleId(murderRoleId);
                let selfRoleId = GameManager.getSelectedRoleIdByUserId(GameManager.userInfo.userId);
                let selfIsMurder = GameManager.murderRoleId == selfRoleId;
                let txt = wrapRes1.getChildByName("txt");
                let nameList = [];
                let imgList = [];
                maxPowerRoleList.forEach(roleId => {
                    let roleConfig = Scene3dConfig.getRoleInfoByRoleId(roleId);
                    nameList.push(roleConfig.roleName);
                    imgList.push({
                        img: roleConfig.img
                    });
                });
                txt.text = `${nameList.join(",")}得票最高`;
                let peopleList = wrapRes1.getChildByName("peopleList");
                peopleList.width = imgList.length * 156;
                peopleList.x = (wrapRes1.width - peopleList.width) / 2;
                peopleList.array = imgList;
                yield this.showModalAnimate(wrapRes1, maxPowerRoleList[0]);
                yield Utils.asyncByTime(5000);
                let people2 = wrapRes2.getChildByName("people");
                let txt2 = wrapRes2.getChildByName("txt");
                people2.skin = murderRoleConfig.img;
                txt2.text = `${murderRoleConfig.roleName}是凶手`;
                wrapRes2.pos((this.width - wrapRes2.width) / 2, (this.height - wrapRes2.height) / 2);
                wrapRes2.visible = true;
                wrapRes1.visible = false;
                yield Utils.asyncByTime(5000);
                if (flag == 3 || flag == 1) {
                    this.showFinalRes(`你${selfIsMurder ? "赢" : "输"}了！\n凶手逃脱了法律的制裁`);
                }
                else {
                    this.showFinalRes(`你${!selfIsMurder ? "赢" : "输"}了！\n凶手受到了法律的制裁`);
                }
            });
        }
        showFinalRes(txt) {
            return __awaiter(this, void 0, void 0, function* () {
                this.btnSure.visible = true;
                let wrapRes1 = this.getChildByName("wrapRes1");
                let wrapRes2 = this.getChildByName("wrapRes2");
                let wrapRes3 = this.getChildByName("wrapRes3");
                wrapRes3.visible = true;
                wrapRes2.visible = false;
                wrapRes1.visible = false;
                wrapRes3.pos((this.width - wrapRes3.width) / 2, (this.height - wrapRes3.height) / 2);
                let txtRes = wrapRes3.getChildByName("txt");
                txtRes.text = txt;
            });
        }
        updateVoteRender() {
            this.listVote.refresh();
        }
        doVote(roleId) {
            return __awaiter(this, void 0, void 0, function* () {
                let selfRoleId = GameManager.getSelectedRoleIdByUserId(GameManager.userInfo.userId);
                let res = yield NetController.reqVote(GameManager.userInfo.userId, selfRoleId, roleId);
            });
        }
    }

    class GameWrapBook extends ui.component.GameWrapBookUI {
        constructor() {
            super();
        }
        onEnable() {
            Laya.stage.on(Laya.Event.CLICK, this, e => {
                this.wrap.visible = false;
            });
            this.btn.on(Laya.Event.CLICK, this, e => {
                EventManager.pub("modal/closeThree", this);
                this.wrap.visible = !this.wrap.visible;
                e.stopPropagation();
            });
            this.wrap.on(Laya.Event.CLICK, this, e => {
                EventManager.pub("modal/closeThree", this);
                e.stopPropagation();
            });
            EventManager.sub("modal/closeThree", this, e => {
                if (e != this) {
                    this.wrap.visible = false;
                }
            });
            this.updateModalBook();
        }
        updateModalBook() {
            this.modalBookTagList.array = [
                { label: "目标", type: "rule" },
                { label: "规则", type: "obj" }
            ];
            this.modalBookTagList.renderHandler = new Laya.Handler(this, (cell, idx) => {
                let img = cell.getChildByName("img");
                img.skin = `v2/${DataLang.lang == "en" ? "en" : "ch"}/img_${cell.dataSource.type}${this.modalBookTagList.selectedIndex == idx ? 1 : 0}.png`;
            });
            this.modalBookTagList.selectHandler = new Laya.Handler(this, this.updateModalBookContent);
            this.updateModalBookContent();
        }
        updateModalBookContent() {
            let flagIsMurder = GameManager.checkIsMurder(GameManager.userInfo.userId);
            let txt1 = flagIsMurder
                ? "Try to get away with the murder"
                : "1. Find out who is the killer\n\n2. Find evidence";
            this.modalBookContent.text =
                this.modalBookTagList.selectedIndex == 0 ? txt1 : "";
        }
    }

    class GameWrapMine extends ui.component.GameWrapMineUI {
        constructor() {
            super();
        }
        onEnable() {
            Laya.stage.on(Laya.Event.CLICK, this, e => {
                this.wrap.visible = false;
            });
            this.btn.on(Laya.Event.CLICK, this, e => {
                EventManager.pub("modal/closeThree", this);
                this.wrap.visible = !this.wrap.visible;
                e.stopPropagation();
            });
            this.wrap.on(Laya.Event.CLICK, this, e => {
                EventManager.pub("modal/closeThree", this);
                e.stopPropagation();
            });
            EventManager.sub("modal/closeThree", this, e => {
                if (e != this) {
                    this.wrap.visible = false;
                }
            });
            this.updateModalMine();
        }
        updateModalMine() {
            this.modalMineTitle.text = GameManager.selectedRoleInfo.roleName;
            this.modalMineContent.text = GameManager.selectedRoleInfo.detail;
        }
    }

    class WrapTip extends ui.component.WrapTipUI {
        constructor() {
            super(...arguments);
            this.step = 0;
            this.hintList = [];
        }
        onEnable() {
            this.bg.on(Laya.Event.CLICK, this, e => {
                console.log("click");
                this.doNextStep();
            });
            EventManager.sub("game/closeHint", this, e => {
                this.close();
            });
        }
        onOpened(typeList) {
            this.hintList = typeList;
            this.step = 0;
            this.updateStepRender();
        }
        updateStepRender() {
            this.inner["_children"].forEach((item) => {
                item.visible = item.name == this.hintList[this.step];
            });
        }
        doNextStep() {
            if (this.step >= this.hintList.length - 1) {
                this.close();
                return;
            }
            this.step++;
            this.updateStepRender();
        }
    }

    class AdStartGame extends ui.modal.AdStartGameUI {
        onEnable() {
            Laya.timer.once(60 * 1000, this, e => {
                this.close();
            });
            this.btnSure.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                yield NetController.reqAdStartGameSure();
                this.close();
            }));
            this.btnCancel.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                yield NetController.reqAdStartGameCancel();
                this.close();
            }));
            this.btnClose.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                this.close();
            }));
        }
        onDisable() {
            Laya.timer.clearAll(this);
        }
    }

    class ModalAddTimeline extends ui.modal.ModalAddTimelineUI {
        constructor() {
            super();
            this.optionHour = [];
            this.optionMin = [];
        }
        initOption() {
            for (let i = 0; i < 24; i++) {
                this.optionHour.push({
                    label: ("00" + (i + 1)).slice(-2),
                    value: i + 1
                });
            }
            for (let i = 0; i < 59; i++) {
                this.optionMin.push({
                    label: ("00" + (i + 1)).slice(-2),
                    value: i + 1
                });
            }
        }
        onEnable() {
            this.btnClose.on(Laya.Event.CLICK, this, e => {
                this.close();
            });
            this.btnCancel.on(Laya.Event.CLICK, this, e => {
                this.close();
            });
            this.initOption();
        }
        onOpened(data) {
            let roleList = [];
            GameManager.roomUserList.forEach(item => {
                let selectRoleId = GameManager.getSelectedRoleIdByUserId(item.userId);
                let roleData = Scene3dConfig.getRoleInfoByRoleId(selectRoleId);
                roleList.push(roleData);
            });
            this.selectPlayer.setOption(roleList, "roleName");
            this.selectHour.setOption(this.optionHour, "label");
            this.selectMin.setOption(this.optionMin, "label");
            if (data.username) {
                this.selectPlayer.value = data.username;
            }
            if (data.hour) {
                this.selectHour.value = data.hour;
            }
            if (data.min) {
                this.selectMin.value = data.min;
            }
            if (data.thing) {
                this.inputContent.text = data.thing;
            }
            this.btnSure.on(Laya.Event.CLICK, this, e => {
                let res = GameManager.addTimelineData({
                    hour: this.selectHour.value,
                    min: this.selectMin.value,
                    username: this.selectPlayer.value,
                    thing: this.inputContent.text,
                    timeIdx: data.timeIdx
                });
                if (res) {
                    this.close();
                }
            });
        }
    }

    class InputSelect extends Laya.Box {
        constructor() {
            super();
            this.keyLabel = "label";
        }
        get value() {
            return this.input.text;
        }
        set value(value) {
            this.input.text = value;
        }
        onEnable() {
            this.input = this.getChildByName("wrapInput");
            this.wrapSelect = this.getChildByName("wrapSelect");
            this.listOption = this.wrapSelect.getChildByName("listOption");
            this.listOption.renderHandler = new Laya.Handler(this, (cell) => {
                let label = cell.getChildByName("label");
                let data = cell.dataSource;
                label.text = data[this.keyLabel];
            });
            this.listOption.mouseHandler = new Laya.Handler(this, e => {
                if (e.type == "click") {
                    this.updateSelect();
                    this.triggerFocus(false);
                }
            });
            this.triggerFocus(false);
            this.input.on(Laya.Event.FOCUS, this, e => {
                this.triggerFocus(true);
            });
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, e => {
                let startPos = new Laya.Point(0, 0);
                this.localToGlobal(startPos);
                if (e.stageX < startPos.x ||
                    e.stageX > startPos.x + this.width ||
                    e.stageY < startPos.y ||
                    e.stageY > startPos.y + this.height) {
                    this.triggerFocus(false);
                }
            });
        }
        updateSelect() {
            let selData = this.listOption.array[this.listOption.selectedIndex];
            this.input.text = selData[this.keyLabel];
        }
        triggerFocus(flagFocus = false) {
            if (flagFocus) {
                this.input.skin = `ui/img_border1.png`;
                this.wrapSelect.visible = true;
                this.height = this.input.height + this.wrapSelect.height;
            }
            else {
                this.input.skin = `ui/img_border0.png`;
                this.wrapSelect.visible = false;
                this.height = this.input.height;
            }
        }
        setOption(arr, keyLabel = "label") {
            this.keyLabel = keyLabel;
            this.listOption.array = arr;
            this.listOption.refresh();
            console.log(arr);
        }
    }

    class ModalAskChangeRole extends ui.modal.ModalAskChangeRoleUI {
        constructor() {
            super();
        }
        onEnable() { }
        setRoleInfo(wrap, roleId) {
            let roleData = Scene3dConfig.getRoleInfoByRoleId(roleId);
            let roleName = wrap.getChildByName("roleName");
            let detail = wrap.getChildByName("detail");
            let job = wrap.getChildByName("job");
            let age = wrap.getChildByName("age");
            let sex = wrap.getChildByName("sex");
            roleName.text = roleData.roleName;
            detail.text = roleData.detail;
            sex.text = roleData.sex;
            job.text = roleData.job;
            age.text = roleData.age;
        }
        onOpened(data) {
            this.openTime = Laya.systemTimer.currTimer;
            this.setRoleInfo(this.wrapInfo, data.reqRoleId);
            let reqUserInfo = GameManager.getRoomUserById(data.reqUserId);
            this.title.text = DataLang.getTxtByType("askChange", {
                username: reqUserInfo.username
            });
            this.btnCancel.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                yield NetController.reqChangeRole(data.exchangeRoleId, data.reqRoleId, data.reqUserId, 0);
                this.close();
            }));
            this.btnSure.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                yield NetController.reqChangeRole(data.exchangeRoleId, data.reqRoleId, data.reqUserId, 1);
                this.close();
            }));
            Laya.timer.frameLoop(1, this, e => {
                let time = Laya.systemTimer.currTimer;
                let percent = (time - this.openTime) / 1000 / Scene3dConfig.roleChangeCountDownSec;
                if (percent >= 1) {
                    Laya.timer.clearAll(this);
                    this.close();
                    return;
                }
                this.prg.width = (1 - percent) * 695;
            });
        }
    }

    class ModalAudioTest extends ui.modal.ModalAudioTestUI {
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                this.btnSuccess.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                    yield NetController.reqChechAudio(true);
                    this.close();
                }));
                this.btnCancel.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                    yield NetController.reqChechAudio(false);
                    this.close();
                }));
                this.btnClose.on(Laya.Event.CLICK, this, e => {
                    this.close();
                });
                this.checkLocal();
            });
        }
        checkLocal() {
            return __awaiter(this, void 0, void 0, function* () {
                this.prg.mask.width = 0;
                this.localTrack = yield AgoraRTC.createMicrophoneAudioTrack({});
                this.timer.frameLoop(1, this, e => {
                    let level = this.localTrack.getVolumeLevel();
                    this.prg.mask.width = 307 * level;
                });
            });
        }
        onClosed() {
            this.timer.clearAll(this);
            this.localTrack && this.localTrack.close();
        }
    }

    class ModalConfirm extends ui.modal.ModalConfirmUI {
        constructor() {
            super();
        }
        onEnable() { }
        onOpened(data) {
            this.content.text = data.content;
            this.btnCancel.on(Laya.Event.CLICK, this, e => {
                data.onCancel && data.onCancel();
                this.close();
            });
            this.btnSure.on(Laya.Event.CLICK, this, e => {
                data.onSure && data.onSure();
                this.close();
            });
            this.btnClose.on(Laya.Event.CLICK, this, e => {
                data.onCancel && data.onCancel();
                this.close();
            });
        }
    }

    class ModalDetail extends ui.modal.ModalDetailUI {
        constructor() {
            super();
            this.flagCollect = false;
            this.addedOnOpen = false;
            this.withBtns = true;
            this.showBigger = false;
        }
        onDisable() {
            if (!this.withBtns) {
                return;
            }
            if (!this.addedOnOpen) {
                let pos = new Laya.Point(this.img.x, this.img.y);
                this.localToGlobal(pos);
                EventManager.pub("game/showAniInPocket", [this.img, pos]);
            }
        }
        onEnable() {
            this.btnClose.on(Laya.Event.CLICK, this, e => {
                this.close();
            });
            EventManager.sub("game/updateCluList", this, this.updateRender);
            this.btnSign.on(Laya.Event.CLICK, this, e => {
                if (this.data.order > 0) {
                    this.data.order = 0;
                }
                else {
                    let lastOrder = GameManager.getEviLastOrder();
                    this.data.order = lastOrder;
                }
                GameManager.addEvident(this.data);
                this.updateRender();
            });
            this.on(Laya.Event.MOUSE_MOVE, this, e => {
                let pos = new Laya.Point(e.stageX, e.stageY);
                let posLocal = this.globalToLocal(pos, true);
                if (Math.abs(posLocal.x - this.img.x) < this.img.width / 2 &&
                    Math.abs(posLocal.y - this.img.y) < this.img.height / 2 &&
                    this.showBigger) {
                    this.bigger.visible = true;
                    this.bigger.pos(posLocal.x, posLocal.y);
                    let img = this.bigger.getChildByName("img");
                    let ratio = 2;
                    if (ratio * this.img.width > 2040) {
                        ratio = 2040 / this.img.width;
                    }
                    if (ratio * this.img.height > 2040) {
                        ratio = 2040 / this.img.height;
                    }
                    img.width = ratio * this.img.width;
                    img.height = ratio * this.img.height;
                    img.pivot(img.width / 2, img.height / 2);
                    img.skin = this.img.skin;
                    let posInImg = new Laya.Point(posLocal.x - this.img.x, posLocal.y - this.img.y);
                    img.pos(150 - posInImg.x * ratio, 150 - posInImg.y * ratio);
                }
                else {
                    this.bigger.visible = false;
                }
            });
        }
        updateBtnSign() {
        }
        updateBtnCollect() {
        }
        onOpened({ data, withBtns }) {
            this.data = data;
            this.withBtns = withBtns;
            this.imgBigger.skin = `v2/${DataLang.lang}/img_bigger${this.showBigger ? 0 : 1}.png`;
            this.btnBigger.on(Laya.Event.CLICK, this, e => {
                this.showBigger = !this.showBigger;
                if (!this.showBigger) {
                    this.bigger.visible = false;
                }
                this.imgBigger.skin = `v2/${DataLang.lang}/img_bigger${this.showBigger ? 0 : 1}.png`;
            });
            if (!this.withBtns) {
                this.btnSign.visible = false;
            }
            this.wrapDetail.visible = false;
            this.wrapDetail.visible = !!data.reportDetail;
            this.txtDetail.text = data.reportDetail;
            this.addedOnOpen = !!GameManager.getEvidentById(data.id);
            GameManager.addEvident(this.data);
            let dataAdded = GameManager.getEvidentById(data.id);
            if (dataAdded) {
                Object.assign(data, dataAdded);
            }
            this.updateRender();
        }
        updateRender() {
            let dataTarget = GameManager.getEvidentById(this.data.id);
            if (dataTarget) {
                this.data = dataTarget;
            }
            let { title, content, img, order } = this.data;
            this.title.text = title;
            this.img.skin = img;
            this.flagCollect = GameManager.checkGotEvident(this.data.id);
            if (!this.flagCollect) {
                this.data.order = 0;
            }
            this.updateBtnCollect();
            this.updateBtnSign();
            this.star.skin = `ui/img_pin_${this.flagCollect && order > 0 ? "on" : "off"}.png`;
            let sceneConfig = Scene3dConfig.getSceneConfigByName(this.data.sceneFrom);
            this.from.text = `Found From：${sceneConfig.label}`;
        }
    }

    class ModalDetailList extends ui.modal.ModalDetailListUI {
        constructor() {
            super();
        }
        onEnable() {
            this.detailList.mouseHandler = new Laya.Handler(this, (e, idx) => {
                if (e.type == "click") {
                    let data = this.detailList.array[idx];
                    UIManager.showDetail([data], false);
                }
            });
            this.detailList.renderHandler = new Laya.Handler(this, (cell, idx) => {
                let data = cell.dataSource;
                let spStar = cell.getChildByName("star");
                let dataAdded = GameManager.getEvidentById(data.id);
                if (dataAdded) {
                    Object.assign(data, dataAdded);
                }
                spStar.visible = data.order > 0;
            });
            EventManager.sub("game/updateEvidentList", this, e => {
                this.detailList.refresh();
            });
        }
        onOpened({ list }) {
            this.detailList.array = list;
        }
    }

    class ModalCloser extends Laya.Button {
        constructor() {
            super();
        }
        onEnable() {
            this.on(Laya.Event.CLICK, this, e => {
                this.parent.close();
            });
        }
    }

    class ModalInfo extends ui.modal.ModalInfoUI {
        onOpened(userInfo) {
            return __awaiter(this, void 0, void 0, function* () {
                let userId = userInfo.userId;
                let isHost = GameManager.userInfo.userId == GameManager.roomInfo.masterUserId;
                if (userId == GameManager.userInfo.userId) {
                    this.btnKick.visible = false;
                    this.btnAdd.visible = false;
                }
                else {
                    if (isHost) {
                        this.btnKick.visible = true;
                        this.btnAdd.x = 217;
                        this.btnKick.x = 410;
                    }
                    else {
                        this.btnKick.visible = false;
                        this.btnAdd.x = 300;
                    }
                }
                this.btnClose.on(Laya.Event.CLICK, this, e => {
                    this.close();
                });
                this.btnKick.on(Laya.Event.CLICK, this, e => {
                    NetController.kickPlayer(userId).then(e => {
                        UIManager.showMessage(DataLang.getTxtByType("playerKicked"));
                    });
                });
                this.btnAdd.on(Laya.Event.CLICK, this, e => {
                    NetController.addFriend(userId).then(e => {
                        UIManager.showMessage(DataLang.getTxtByType("requestSend"));
                    });
                });
                let info = yield NetController.getInfo(userId);
                this.setInfo(info);
            });
        }
        setInfo(info) {
            let statistics = info.statistics;
            this.nickname.text = info.username;
            this.avatar.skin = info.avatar;
            this.userId.text = `ID:${info.id}`;
            this.win.text = DataLang.getTxtByType("txtWin", { count: statistics.won });
            this.lose.text = DataLang.getTxtByType("txtLose", {
                count: statistics.lost
            });
            this.total.text = DataLang.getTxtByType("txtTotal", {
                count: statistics.played
            });
            this.noShow.text = DataLang.getTxtByType("txtNoShow", {
                count: statistics.noShows
            });
            this.canceled.text = DataLang.getTxtByType("txtCanceled", {
                count: statistics.cancelled
            });
        }
    }

    class ModalJoinRoom extends ui.modal.ModalJoinRoomUI {
        constructor() {
            super();
        }
        onEnable() {
            let self = this;
            this.btnJoin.on(Laya.Event.CLICK, this, e => {
                UIManager.showConfirm({
                    content: `是否确认加入${this.inputRoomId.text}？`,
                    onSure(e) {
                        return __awaiter(this, void 0, void 0, function* () {
                            let data = yield NetController.reqJoinRoom(self.inputRoomId.text);
                            self.close();
                        });
                    },
                    onCancel(e) { }
                });
            });
        }
    }

    class ModalMessage extends ui.modal.ModalMessageUI {
        constructor() {
            super();
        }
        onEnable() { }
        onOpened(data) {
            let spContent = this.getChildByName("content");
            spContent.text = data.content;
            this.btnClose.on(Laya.Event.CLICK, this, e => {
                this.close();
            });
        }
        onClosed() {
            UIManager.closeOnSide.pop();
            if (UIManager.closeOnSide[UIManager.closeOnSide.length - 1]) {
                UIConfig.closeDialogOnSide =
                    UIManager.closeOnSide[UIManager.closeOnSide.length - 1];
            }
        }
    }

    class ModalPic extends ui.modal.ModalPicUI {
        constructor() {
            super();
        }
        onOpened({ img }) {
            this.img.skin = img;
        }
        doResize() {
            let sourceImg = this.img.source;
            let ratioW = Laya.stage.width / sourceImg.sourceWidth;
            let ratioH = Laya.stage.height / sourceImg.sourceHeight;
            let ratio = Math.min(ratioW, ratioH);
            this.img.size(sourceImg.sourceWidth * ratio, sourceImg.sourceHeight * ratio);
            this.img.pos((this.width - this.img.width) / 2, (this.height - this.img.height) / 2);
        }
        onEnable() {
            this.img.on(Laya.Event.COMPLETE, this, this.doResize);
            this.img.on(Laya.Event.LOADED, this, this.doResize);
            this.img.on(Laya.Event.CHANGED, this, this.doResize);
            this.on(Laya.Event.CLICK, this, e => {
                this.close();
            });
        }
    }

    class ModalResetEnd extends ui.modal.ModalResetEndUI {
        onOpened() {
            this.btnSure.on(Laya.Event.CLICK, this, e => {
                this.close();
            });
            let votedRoleId = GameManager.voteMap[GameManager.userInfo.userId];
            let selfIsRight = votedRoleId == GameManager.murderRoleId;
            let { maxPowerRoleList, flag } = GameManager.checkMurderOut();
            this.title.text = DataLang.getTxtByType(selfIsRight ? "selfTrue" : "selfFalse");
            if (flag == 2) {
                this.imgLose.visible = false;
                this.imgWin.visible = true;
                if (selfIsRight) {
                    this.content.text = DataLang.getTxtByType("murderLose");
                }
                else {
                    this.content.text = DataLang.getTxtByType("murderLoseBut");
                }
            }
            else {
                this.imgLose.visible = false;
                this.imgWin.visible = true;
                if (selfIsRight) {
                    this.content.text = DataLang.getTxtByType("murderWinBut");
                }
                else {
                    this.content.text = DataLang.getTxtByType("murderWin");
                }
            }
        }
    }

    class ModalResult extends ui.modal.ModalResultUI {
        constructor() {
            super(...arguments);
            this.flagCanClose = false;
        }
        onOpened() {
            let { maxPowerRoleList, flag } = GameManager.checkMurderOut();
            this.btnSure.on(Laya.Event.CLICK, this, e => {
                this.close();
                UIManager.goScene("scene/SceneTruth.scene");
            });
            this.btnSure.visible = false;
            this.imgMurder.alpha = 0;
            this.imgMurder.y = 562 + 30;
            let nameList = [];
            let imgList = [];
            maxPowerRoleList.forEach(roleId => {
                let roleConfig = Scene3dConfig.getRoleInfoByRoleId(roleId);
                nameList.push(roleConfig.roleName);
                imgList.push({
                    img: roleConfig.img
                });
            });
            this.title.text = DataLang.getTxtByType("txtResultMaxVoted", {
                username: nameList.join(",")
            });
            this.listMost.array = imgList;
            this.listMost.width = (303 - 170) * imgList.length;
            this.listMost.x = (this.width - this.listMost.width) / 2;
            let murderRoleId = GameManager.murderRoleId;
            let murderRoleConfig = Scene3dConfig.getRoleInfoByRoleId(murderRoleId);
            this.imgMurder.skin = murderRoleConfig.img;
            let votedList = [];
            for (let i = 0; i < Scene3dConfig.roleList.length; i++) {
                let roleConfig = Object.assign({ list: [] }, Scene3dConfig.roleList[i]);
                for (let uid in GameManager.voteMap) {
                    let votedRoleId = GameManager.voteMap[uid];
                    if (votedRoleId == roleConfig.id) {
                        let selfRoleId = GameManager.getSelectedRoleIdByUserId(uid);
                        let selfRoleConfig = Scene3dConfig.getRoleInfoByRoleId(selfRoleId);
                        roleConfig.list.push(selfRoleConfig);
                    }
                }
                votedList.push(roleConfig);
            }
            console.log(votedList, "复盘的votedList");
            this.list.array = votedList;
            this.showAnimate();
        }
        showAnimate() {
            return __awaiter(this, void 0, void 0, function* () {
                yield Utils.asyncByTime(2000);
                yield Utils.asyncTween(this.imgMurder, { alpha: 1, y: 562 }, 800);
                yield Utils.asyncByTime(3000);
                UIManager.openModal("modal/ModalResetEnd.scene", false);
                this.btnSure.visible = true;
            });
        }
    }

    class ModalRoleInfo extends ui.modal.ModalRoleInfoUI {
        constructor() {
            super();
            this.data = {};
        }
        onEnable() {
            this.btnClose.on(Laya.Event.CLICK, this, e => {
                this.close();
            });
            this.btnCancel.on(Laya.Event.CLICK, this, e => {
                this.close();
            });
            this.btnSure.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                let selfRoleId = GameManager.getSelectedRoleIdByUserId(GameManager.userInfo.userId);
                let exchangeRoleId = this.data.id;
                yield NetController.reqAskChange(selfRoleId, exchangeRoleId, GameManager.selectRoleMapRoleToUser[exchangeRoleId]);
                this.close();
            }));
        }
        setRoleInfo(wrap, roleId) {
            let roleData = Scene3dConfig.getRoleInfoByRoleId(roleId);
            this.img.skin = roleData.img;
            let roleName = wrap.getChildByName("roleName");
            let detail = wrap.getChildByName("detail");
            let job = wrap.getChildByName("job");
            let age = wrap.getChildByName("age");
            let sex = wrap.getChildByName("sex");
            roleName.text = roleData.roleName;
            detail.text = roleData.detail;
            sex.text = roleData.sex;
            job.text = roleData.job;
            age.text = roleData.age;
        }
        onOpened(data) {
            this.data = data;
            this.setRoleInfo(this.wrapInfo, data.id);
            let selfRoleId = GameManager.getSelectedRoleIdByUserId(GameManager.userInfo.userId);
            if (selfRoleId == data.id) {
                this.btnSure.visible = false;
                this.btnCancel.x = 200;
            }
            else {
                this.btnSure.visible = true;
                this.btnCancel.x = 125;
            }
        }
    }

    class ModalShare extends ui.modal.ModalShareUI {
        constructor() {
            super();
        }
        onEnable() { }
        onOpened(data) {
            this.content.text = DataLang.getTxtByType("roomNumber1", {
                roomNum: data.roomNum
            });
            this.btnClose.on(Laya.Event.CLICK, this, e => {
                this.close();
            });
            this.btnCancel.on(Laya.Event.CLICK, this, e => {
                this.close();
            });
            this.btnSure.on(Laya.Event.CLICK, this, e => {
                Utils.doCopy(`<a href="https://www.theclueonline.com/?type=10004&roomId=${data.roomId}&roomPwd=${data.roomPwd}">点击加入房间</a>`);
                this.close();
            });
        }
    }

    class ModalShareClu extends ui.modal.ModalShareCluUI {
        constructor() {
            super();
            this.selectedIdList = [];
        }
        onEnable() { }
        onOpened(data) {
            this.detailList.renderHandler = new Laya.Handler(this, (cell, idx) => {
                let data = cell.dataSource;
                let selected = cell.getChildByName("selected");
                selected.visible = this.selectedIdList.indexOf(data.id) > -1;
                let star = cell.getChildByName("star");
                star.visible = data.order > 0;
            });
            this.detailList.mouseHandler = new Laya.Handler(this, (e, idx) => {
                let data = this.detailList.array[idx];
                if (e.type == "click") {
                    let selectedIdx = this.selectedIdList.indexOf(data.id);
                    if (selectedIdx > -1) {
                        this.selectedIdList.splice(selectedIdx, 1);
                    }
                    else {
                        this.selectedIdList.push(data.id);
                    }
                    this.detailList.refresh();
                }
            });
            this.detailList.array = GameManager.evidentListGot.filter(item => item.fromUserId == GameManager.userInfo.userId);
            this.btnSure.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                let list = GameManager.evidentListGot.filter(item => {
                    return this.selectedIdList.indexOf(item.id) > -1;
                });
                let strList = [];
                list.forEach(data => {
                    strList.push(JSON.stringify(data));
                });
                NetController.reqClueEnd(strList);
                this.btnSure.label = "等待其他人确认";
                this.btnSure.disabled = true;
            }));
        }
        onClosed() {
            UIConfig.closeDialogOnSide = true;
            UIConfig.popupBgAlpha = 0;
        }
    }

    class SafeBox extends ui.modalOperate.scene1.SafeBoxUI {
        constructor() {
            super();
            this.answer = "5191";
            this.numList = [];
        }
        onOpened({ onSure, onWrong }) {
            this.onSure = onSure;
            this.onWrong = onWrong;
        }
        onEnable() {
            this.areaPwd.on(Laya.Event.CLICK, this, e => {
                this.wrapSafeBox.visible = false;
                this.wrapPwd.visible = true;
            });
            for (let i = 0; i < 10; i++) {
                this["num" + i].on(Laya.Event.CLICK, this, e => {
                    this.clickNum(i);
                });
            }
        }
        updateNum() {
            this.labelNum.text = this.numList.join("");
        }
        clickNum(num) {
            if (this.numList.length < 4) {
                this.numList.push(num);
                this.updateNum();
            }
            this.checkNumRight();
        }
        checkNumRight() {
            if (this.numList.length == 4) {
                if (this.numList.join("") == this.answer) {
                    this.close();
                    if (this.onSure) {
                        this.onSure.run();
                    }
                }
                else {
                    let countWrong = this.onWrong && this.onWrong.run();
                    UIManager.showMessage(`密码错误，剩余${2 - countWrong}次机会`);
                    this.numList = [];
                    this.updateNum();
                    if (countWrong >= 2) {
                        this.close();
                    }
                }
            }
        }
    }

    class PhoneJane extends ui.modalOperate.jane.PhoneJaneUI {
        onEnable() {
            this.btn1.on(Laya.Event.CLICK, this, e => {
                UIManager.showDetail([
                    {
                        id: DetailItemIdConfig$1.jane_to_annie,
                        key: "jane_to_annie",
                        title: "jane_to_annie",
                        content: "",
                        img: "book1/JR102.png",
                        sceneFrom: GameManager.currentScene
                    }
                ]);
            });
            this.btn2.on(Laya.Event.CLICK, this, e => {
                UIManager.showDetail([
                    {
                        id: DetailItemIdConfig$1.jane_to_joe,
                        key: "jane_to_joe",
                        title: "jane_to_joe",
                        content: "",
                        img: "book1/JR013.png",
                        sceneFrom: GameManager.currentScene
                    }
                ]);
            });
        }
    }

    class BookJoe extends ui.modalOperate.joe.BookJoeUI {
        constructor() {
            super(...arguments);
            this.flagUnlock = false;
        }
        onEnable() {
            this.bg.on(Laya.Event.CLICK, this, e => {
                this.close();
            });
            EventManager.sub("game/useItem", this, data => {
                if (data.key == "joePen") {
                    this.book.skin = "book1/JR003.png";
                    UIManager.showDetail([
                        {
                            id: DetailItemIdConfig$1.joeBook,
                            key: "joeBook",
                            title: "joeBook",
                            content: "",
                            img: "book1/JR003.png",
                            sceneFrom: GameManager.currentScene
                        }
                    ]);
                }
            });
        }
    }

    class ListItemToUse extends Laya.Box {
        onEnable() {
            this.list = this.getChildByName("list");
            this.list.renderHandler = new Laya.Handler(this, (cell) => {
                let data = cell.dataSource;
                let btnUse = cell.getChildByName("btnUse");
                let wrapItem = cell.getChildByName("wrapItem");
                let img = wrapItem.getChildByName("img");
                img.skin = data.img;
                btnUse.offAll(Laya.Event.CLICK);
                btnUse.on(Laya.Event.CLICK, this, e => {
                    EventManager.pub("game/useItem", data);
                });
            });
            this.updateListByScene();
        }
        updateListByScene() {
            this.list.array = GameManager.evidentListGot.filter(item => item.sceneFrom == GameManager.currentScene &&
                item.fromUserId == GameManager.userInfo.userId);
            this.list.refresh();
            this.list.selectedIndex = -1;
        }
    }

    class PhoneJoe extends ui.modalOperate.joe.PhoneJoeUI {
        onEnable() {
            this.btn2.on(Laya.Event.CLICK, this, e => {
                UIManager.showDetail([
                    {
                        id: DetailItemIdConfig$1.joe_to_annie,
                        key: "joe_to_annie",
                        title: "joe_to_annie",
                        content: "",
                        img: "book1/JR012.png",
                        sceneFrom: GameManager.currentScene
                    }
                ]);
            });
            this.btn1.on(Laya.Event.CLICK, this, e => {
                UIManager.showDetail([
                    {
                        id: DetailItemIdConfig$1.joe_to_jane,
                        key: "joe_to_jane",
                        title: "joe_to_jane",
                        content: "",
                        img: "book1/JR013.png",
                        sceneFrom: GameManager.currentScene
                    }
                ]);
            });
        }
    }

    class Computer extends ui.modalOperate.scene1.ComputerUI {
        constructor() {
            super();
            this.answer = "10201990";
        }
        onEnable() {
            this.scene2.visible = this.scene3.visible = this.scene4.visible = false;
            let flagTrigerInput = false;
            this.password.on(Laya.Event.FOCUS, this, e => {
                flagTrigerInput = true;
            });
            this.password.on(Laya.Event.BLUR, this, e => {
                flagTrigerInput = false;
            });
            this.on(Laya.Event.KEY_DOWN, this, e => {
                if (!flagTrigerInput) {
                    return;
                }
                if (e.keyCode == 13) {
                    this.confirmPsw();
                }
            });
            this.btnGo.on(Laya.Event.CLICK, this, e => {
                this.confirmPsw();
            });
            this.btnRubish.on(Laya.Event.DOUBLE_CLICK, this, e => {
                this.scene3.visible = true;
            });
            this.btnDetail.on(Laya.Event.DOUBLE_CLICK, this, e => {
                this.scene4.visible = true;
            });
            this.detail.on(Laya.Event.CLICK, this, e => {
                UIManager.showDetail([
                    {
                        id: DetailItemIdConfig$1.scene1Computer,
                        key: "scene1Computer",
                        title: "亚马逊电子收据",
                        content: "经过搜索，电脑没有内容，在回收站找到亚马逊电子收据",
                        img: "game/img_computer4.jpg",
                        sceneFrom: GameManager.currentScene
                    }
                ]);
            });
        }
        confirmPsw() {
            this.password.focus = false;
            if (this.password.text == this.answer) {
                this.scene1.visible = false;
                this.scene2.visible = true;
            }
            else {
                UIManager.showMessage("密码错误！");
                this.password.text = "";
            }
        }
    }

    class ComputerCommon extends Laya.Dialog {
        constructor() {
            super();
        }
        onEnable() {
            EventManager.sub("computer/showItem", this, itemName => {
                let item = this.getChildByName(itemName);
                item.visible = true;
            });
        }
    }

    class ComputerClicker extends Laya.Script {
        constructor() {
            super();
            this.type = "";
            this.clickType = 1;
        }
        onEnable() {
            if (this.clickType == 1) {
                this.owner.on(Laya.Event.DOUBLE_CLICK, this, e => {
                    EventManager.pub("computer/showItem", this.type);
                });
            }
            else if (this.clickType == 2) {
                this.owner.on(Laya.Event.CLICK, this, e => {
                    EventManager.pub("computer/showItem", this.type);
                });
            }
        }
        onDisable() { }
    }

    class ComputerClicker$1 extends Laya.Script {
        constructor() {
            super();
            this.type = "";
        }
        onEnable() {
            this.owner.on(Laya.Event.CLICK, this, e => {
                UIManager.showDetail([
                    {
                        id: DetailItemIdConfig$1.janeComputer,
                        key: "janeComputer",
                        title: "janeComputer",
                        content: "",
                        img: "book1/JR112.png",
                        sceneFrom: GameManager.currentScene
                    }
                ]);
            });
        }
        onDisable() { }
    }

    class Phone extends ui.modalOperate.scene1.ModalPhoneUI {
        constructor() {
            super(...arguments);
            this.password = "";
            this.answerList = [];
            this.imgList = [];
            this.imgIdx = 0;
            this.flagOpened = false;
        }
        onEnable() {
            this.listNum.array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            this.listNum.mouseHandler = new Laya.Handler(this, (e, idx) => {
                if (e.type == "click") {
                    let data = this.listNum.array[idx];
                    this.doAnswer(data);
                }
            });
            this.num0.on(Laya.Event.CLICK, this, e => {
                this.doAnswer(0);
            });
        }
        onOpened(data) {
            this.init(data.imgList, data.password, data.callBack);
        }
        init(imgList, password, callBack) {
            this.callBack = callBack;
            this.imgList = imgList;
            this.password = password;
            this.updateRender();
            this.img.visible = false;
            this.img.skin = this.imgList[0];
            this.img.on(Laya.Event.CLICK, this, e => {
                console.log(1111);
                this.doNext();
            });
            if (!this.password) {
                this.doRight();
            }
        }
        doAnswer(answer) {
            this.answerList.push(answer);
            if (this.answerList.length >= 4) {
                this.checkAnswer();
            }
            this.updateRender();
        }
        checkAnswer() {
            if (this.answerList.join("") == this.password) {
                this.doRight();
            }
            else {
                this.answerList = [];
            }
            this.updateRender();
        }
        doRight() {
            this.flagOpened = true;
            this.img.visible = true;
            console.log(this.img.skin);
        }
        doNext() {
            console.log(this.imgIdx);
            if (this.imgIdx < this.imgList.length - 1) {
                this.imgIdx++;
                this.img.visible = true;
                this.img.skin = this.imgList[this.imgIdx];
            }
            else {
                this.callBack && this.callBack.run();
            }
        }
        onDisable() {
            if (this.flagOpened) {
            }
        }
        updateRender() {
            this.listAnswer.array = this.answerList;
            this.listAnswer.refresh();
            console.log(this.listAnswer.array, "arr");
        }
    }

    class ComputerWilson extends ui.modalOperate.scene1
        .WilsonComputer1UI {
        constructor() {
            super();
            this.answer = "wb123";
        }
        confirmPwd() {
            this.password.focus = false;
            if (this.password.text == this.answer) {
                this.scene1.visible = false;
                this.scene2.visible = true;
            }
            else {
                UIManager.showMessage("密码错误！");
                this.password.text = "";
            }
        }
        onEnable() {
            let flagTrigerInput = false;
            this.password.on(Laya.Event.FOCUS, this, e => {
                flagTrigerInput = true;
            });
            this.password.on(Laya.Event.BLUR, this, e => {
                flagTrigerInput = false;
            });
            this.on(Laya.Event.KEY_DOWN, this, e => {
                if (!flagTrigerInput) {
                    return;
                }
                if (e.keyCode == 13) {
                    this.confirmPwd();
                }
            });
            this.scene2.visible = this.scene3.visible = false;
            this.password.on(Laya.Event.INPUT, this, e => {
                console.log(e);
            });
            this.btnGo.on(Laya.Event.CLICK, this, e => {
                this.confirmPwd();
            });
            this.btnEmail.on(Laya.Event.DOUBLE_CLICK, this, e => {
                this.scene3.visible = true;
            });
            this.scene3.on(Laya.Event.CLICK, this, e => {
                UIManager.showDetail([
                    {
                        id: DetailItemIdConfig$1.wilsonComputer,
                        key: "wilsonComputer",
                        title: "亚马逊电子收据",
                        content: "经过搜索，电脑没有内容，在回收站找到亚马逊电子收据",
                        img: "book1/WR003.jpg",
                        sceneFrom: GameManager.currentScene
                    }
                ]);
            });
        }
    }

    class ComputerCommon$1 extends ui.modalOperate.scene1
        .joeComputer1UI {
        onEnable() {
            EventManager.sub("computer/showItem", this, itemName => {
                let item = this.getChildByName(itemName);
                item.visible = true;
            });
            this.img.on(Laya.Event.CLICK, this, e => {
                UIManager.showDetail([
                    {
                        id: DetailItemIdConfig$1.joeComputer,
                        key: "joeComputer",
                        title: "joeComputer",
                        content: "joeComputer",
                        img: "book1/JR007.png",
                        sceneFrom: GameManager.currentScene
                    }
                ]);
            });
        }
    }

    class pmt extends ui.modalOperate.wilson.WilsonPMTUI {
        onEnable() {
            this.btn1.on(Laya.Event.CLICK, this, e => {
                UIManager.showDetail([
                    {
                        id: DetailItemIdConfig$1.pmt1,
                        key: "pmt1",
                        title: "pmt1",
                        content: "",
                        img: "book1/pmt1.jpg",
                        sceneFrom: GameManager.currentScene
                    }
                ]);
            });
            this.btn2.on(Laya.Event.CLICK, this, e => {
                UIManager.showDetail([
                    {
                        id: DetailItemIdConfig$1.pmt2,
                        key: "pmt2",
                        title: "pmt2",
                        content: "",
                        img: "book1/pmt2.jpg",
                        sceneFrom: GameManager.currentScene
                    }
                ]);
            });
        }
    }

    class SceneBeforeStart extends ui.scene.SceneBeforeStartUI {
        constructor() {
            super();
        }
        updateToggleBtn() {
            let dataSelf = GameManager.getSelfRoomUserData();
            if (GameManager.roomInfo.roomId) {
                this.btnShare.visible = true;
            }
            else {
                this.btnShare.visible = false;
            }
            let isMaster = GameManager.roomInfo.masterUserId == GameManager.userInfo.userId;
            this.btnDismiss.visible = isMaster;
            this.btnBack.visible = !isMaster;
        }
        onEnable() {
            let self = this;
            this.btnTestAudio.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                UIManager.openModal("modal/ModalAudioTest.scene");
            }));
            this.userList.mouseHandler = new Laya.Handler(this, (e, idx) => {
                let data = this.userList.array[idx];
                if (e.type == "click") {
                    if (data.userId) {
                        UIManager.openModal("modal/ModalInfo.scene", false, data);
                    }
                }
            });
            this.userList.renderHandler = new Laya.Handler(this, (cell) => {
                let data = cell.dataSource;
                let bg = cell.getChildByName("bg");
                let ready = cell.getChildByName("ready");
                let host = cell.getChildByName("host");
                let audioTested = cell.getChildByName("audioTested");
                let avatar = cell.getChildByName("avatar");
                avatar.skin = data.avatar;
                let username = cell.getChildByName("username");
                username.visible = !data.isBlank;
                let isHost = data.userId == GameManager.roomInfo.masterUserId;
                let isSelf = data.userId == GameManager.userInfo.userId;
                let isReady = GameManager.roomReadyList.indexOf(data.userId) > -1;
                ready.visible = isReady;
                host.visible = isHost;
                let audioConf = GameManager.audioChecked.find(item => item.userId == data.userId);
                if (audioConf) {
                    audioTested.visible = true;
                    audioTested.skin = `v2/${DataLang.lang}/img_test${audioConf.valid ? 1 : 0}.png`;
                }
                else {
                    audioTested.visible = false;
                }
                if (data.isBlank) {
                    username.text = "";
                    avatar.skin = "v2/common/img_8.png";
                }
                else {
                    username.color = isSelf ? "#feb853" : "#fff";
                    username.text = data.username;
                    avatar.skin = data.avatar;
                }
            });
            this.btnDismiss.on(Laya.Event.CLICK, this, e => {
                UIManager.showConfirm({
                    content: `是否确认解散房间${GameManager.roomInfo.roomName}？`,
                    onSure(e) {
                        return __awaiter(this, void 0, void 0, function* () {
                            yield NetController.reqDismissRoom();
                            self.close();
                        });
                    },
                    onCancel(e) { }
                });
            });
            this.btnShare.on(Laya.Event.CLICK, this, e => {
                UIManager.openModal("modal/ModalShare.scene", true, GameManager.roomInfo);
            });
            this.btnBack.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                yield NetController.reqExitRoom(GameManager.roomInfo.roomId);
                UIManager.goHall();
            }));
            this.btnStart.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                yield NetController.reqStartGame();
            }));
            this.btnNext.on(Laya.Event.CLICK, this, e => {
                let flagSelfReady = this.getSelfIsReady();
                if (!flagSelfReady) {
                    NetController.reqReady();
                }
                else {
                    NetController.reqUnready();
                }
            });
            EventManager.sub("room/updateRoomInfo", this, this.updateRoomInfo);
            this.checkPublic.on("selectedChange", this, this.updatePwdHide);
        }
        onOpened({}) {
            LoadingManager.loadScene3d();
            this.btnStart.visible = false;
            this.btnNext.visible = false;
            this.updateRoomInfo();
        }
        updatePwdHide(flag) {
            NetController.changeRoomPwd(flag).then(e => {
                this.checkPublic.selected = flag;
            });
        }
        updateRoomInfo() {
            let selfAudioTestedConf = GameManager.audioChecked.find(item => item.userId == GameManager.userInfo.userId);
            this.btnTestAudio.visible = true;
            let isHost = GameManager.userInfo.userId == GameManager.roomInfo.masterUserId;
            this.btnStart.visible = false;
            this.btnNext.visible = false;
            this.updateToggleBtn();
            if (!GameManager.roomInfo.roomPwd) {
                this.checkPublic.selected = true;
                this.checkPublic.mouseEnabled = false;
            }
            else {
                this.checkPublic.mouseEnabled = isHost;
                this.checkPublic.selected = GameManager.roomInfo.publicFlag == 1;
            }
            this.txtRoomId.text = "" + GameManager.roomInfo.roomNum;
            this.txtTitle.refresh();
            this.wrapUserList.visible = true;
            let readyList = GameManager.roomUserList.filter(item => GameManager.roomReadyList.indexOf(item.userId) > -1 ||
                item.userId == GameManager.roomInfo.masterUserId);
            let isAllReady = readyList.length >= 3;
            let flagSelfReady = this.getSelfIsReady();
            this.btnNextImg.skin = DataLang.getImgByType(!flagSelfReady ? "btnReady" : "btnCancelReady");
            this.btnNext.visible = !isHost;
            this.btnStart.visible = isHost;
            this.btnStart.disabled = !isAllReady;
            let listData = [];
            for (let i = 0; i < 6; i++) {
                let targetData = GameManager.roomUserList[i];
                listData.push(targetData || { isBlank: true });
            }
            this.userList.array = listData;
            this.userList.refresh();
            this.txtCountPeople.text = `${readyList.length}/${GameManager.roomInfo.userLimit}`;
        }
        getSelfIsReady() {
            return GameManager.roomReadyList.indexOf(GameManager.userInfo.userId) > -1;
        }
    }

    class TxtGroupCenter extends Laya.Sprite {
        refresh() {
            let _children = this["_children"];
            let total = 0;
            for (let i = 0; i < _children.length; i++) {
                let itemPre = _children[i - 1];
                let item = _children[i];
                if (itemPre) {
                    item.x = itemPre.x + itemPre.width + 4;
                }
                else {
                    item.x = 0;
                }
                total += item.width + 4;
            }
            this.width = total;
            let parent = this.parent;
            if (parent) {
                this.x = (parent.width - this.width) / 2;
            }
        }
    }

    class CheckBoxInStart extends Laya.Box {
        constructor() {
            super();
            this._selected = false;
        }
        get selected() {
            return this._selected;
        }
        set selected(val) {
            let inner = this.getChildByName("inner");
            if (inner) {
                inner.skin = DataLang.getImgByType(val ? "isPublic" : "notPublic");
            }
            this._selected = val;
        }
        onEnable() {
            this.on(Laya.Event.CLICK, this, e => {
                this.event("selectedChange", !this.selected);
            });
        }
    }

    class SceneBook extends ui.scene.SceneBookUI {
        constructor() {
            super(...arguments);
            this.time = 30;
            this.nextClicked = false;
        }
        onDisable() {
            SoundManager.togglePB(false);
        }
        onEnable() {
            UIManager.showHint(["hintBook", "hintBookVoice", "hintBookNext"]);
            this.wrapReady.visible = false;
            this.boxPrg.visible = true;
            Laya.timer.frameLoop(1, this, e => {
                this.prg.width = (this.boxPrg.width - 12) * LoadingManager.progress3d;
                if (LoadingManager.progress3d >= 1) {
                    this.wrapReady.visible = true;
                    this.boxPrg.visible = false;
                }
            });
            let selfRoleId = GameManager.getSelectedRoleIdByUserId(GameManager.userInfo.userId);
            let roleData = Scene3dConfig.roleList.find(item => item.id == selfRoleId);
            if (roleData.pangbaiUrl) {
                SoundManager.playPB(roleData.pangbaiUrl);
            }
            this.btnMute.on(Laya.Event.CLICK, this, e => {
                SoundManager.togglePB();
                let bg = this.btnMute.getChildByName("img");
                bg.skin = `v2/common/img_sound${SoundManager.flagPlayPB ? 1 : 0}.png`;
            });
            this.wrapReady.readyHandler = new Laya.Handler(this, (e) => __awaiter(this, void 0, void 0, function* () {
                yield NetController.reqLoadingSceneEnd();
            }));
            this.htmlText.innerHTML = `<div style="font-size:30px;color:#554841;width:${this
            .wrapScroll.width - 30}px;line-height:45px;">${roleData.content}</div>`;
            let countEachW = this.wrapScroll.width / 20;
            let stringLen = Utils.getTxtByteLen(roleData.content);
            let txtH = Math.ceil(stringLen / countEachW) * 45;
            this.inner.height = txtH + 70;
        }
    }

    class SceneDrag extends ui.scene.SceneDragUI {
        constructor() {
            super(...arguments);
            this.spMouse = new Laya.Image();
        }
        onEnable() {
            let btnClose = this.getChildByName("btnClose");
            btnClose.on(Laya.Event.CLICK, this, e => {
                this.close();
            });
            this.spMouse.zOrder = 999999;
            this.spMouse.visible = false;
            this.addChild(this.spMouse);
            this.img.on(Laya.Event.CLICK, this, e => {
                this.close();
            });
            this.bg.on(Laya.Event.CLICK, this, e => {
                this.close();
            });
            EventManager.sub("game/useItem", this, data => {
                if (data.key == "scene1DeskKey") {
                    Scene1Desk.flagLocked2 = false;
                    this.onSuccess && this.onSuccess();
                    this.close();
                }
                console.log(data, "道具使用");
            });
        }
        hideMouse() {
            GameManager.selectedDetailItem = undefined;
            this.spMouse.visible = false;
        }
        onOpened({ onSuccess }) {
            GameManager.selectedDetailItem = undefined;
            this.spMouse.visible = false;
            this.onSuccess = onSuccess;
            EventManager.pub("toggle/evidentList", false);
        }
        onClosed() {
            EventManager.pub("toggle/evidentList", true);
        }
    }

    class SceneEndTalk extends ui.scene.SceneEndTalkUI {
        onEnable() {
            this.btnEnd.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                NetController.reqExitRoom(GameManager.roomInfo.id);
                UIManager.goHall();
            }));
        }
        onOpened() {
            return __awaiter(this, void 0, void 0, function* () {
                GameManager.step = "ANALYSE";
                GameManager.timeTitle = DataLang.getTxtByType("endTalkng");
                for (let i = 1; i < 8; i++) {
                    let userName = this.wrap.getChildByName("role" + i);
                    if (userName) {
                        let userId = GameManager.selectRoleMapRoleToUser[i];
                        let userInfo = GameManager.getRoomUserById(userId);
                        if (userInfo && userInfo.username) {
                            userName.text = userInfo.username;
                        }
                        else {
                            userName.text = "";
                        }
                    }
                }
                yield Agora.joinRoom();
                Agora.toggleMicro(true);
            });
        }
        onClosed() {
            return __awaiter(this, void 0, void 0, function* () {
                Agora.quitRoom();
            });
        }
    }

    class TimeTitle extends Laya.Box {
        constructor() {
            super();
            this.sec = 0;
        }
        onEnable() {
            this.timeLeft = this.getChildByName("timeLeft");
            this.title = this.getChildByName("title");
            Laya.timer.frameLoop(1, this, e => {
                this.title.text = GameManager.timeTitle;
                if (!GameManager.endTime) {
                    return;
                }
                let timeNow = new Date().getTime();
                let timeLeft = Math.floor((GameManager.endTime - timeNow) / 1000);
                if (timeLeft < 0) {
                    timeLeft = 0;
                }
                if (timeLeft == this.sec) {
                    return;
                }
                this.sec = timeLeft;
                this.timeLeft.text = Utils.timeFormat("MM:SS", timeLeft);
            });
        }
        onDisable() {
            Laya.timer.clearAll(this);
        }
    }

    var ConfigGameTag;
    (function (ConfigGameTag) {
        ConfigGameTag[ConfigGameTag["RoomPicker"] = 1] = "RoomPicker";
        ConfigGameTag[ConfigGameTag["Timeline"] = 2] = "Timeline";
        ConfigGameTag[ConfigGameTag["Talking"] = 3] = "Talking";
        ConfigGameTag[ConfigGameTag["Scene"] = 4] = "Scene";
        ConfigGameTag[ConfigGameTag["Vote"] = 5] = "Vote";
        ConfigGameTag[ConfigGameTag["NPC"] = 6] = "NPC";
        ConfigGameTag[ConfigGameTag["Book"] = 7] = "Book";
        ConfigGameTag[ConfigGameTag["Note"] = 10] = "Note";
    })(ConfigGameTag || (ConfigGameTag = {}));

    class SceneGame extends ui.scene.SceneGameUI {
        constructor() {
            super();
            this.currentOpenSmallModal = "";
        }
        onEnable() {
            let self = this;
            this.listen();
            this.wrapTimeline.visible = false;
            GameManager.timeInRoom = new Date().getTime();
            this.updateRender();
            EventManager.sub("game/showAniInPocket", this, this.showAniDetailInPocket);
            if (!GameManager.isTest) {
                this.changeStep();
            }
            else {
                this.changeStep();
                this.wrap3d.visible = true;
            }
        }
        showAniDetailInPocket(obj, pos) {
            this.globalToLocal(pos);
            obj.x = pos.x;
            obj.y = pos.y;
            obj.zOrder = 10000;
            this.addChild(obj);
            let posEnd = new Laya.Point(this.btnDetail.x, this.btnDetail.y);
            Utils.asyncTween(obj, { x: posEnd.x, y: posEnd.y, rotation: 360, scaleX: 0, scaleY: 0 }, 900);
            Utils.asyncByTime(500).then((e) => __awaiter(this, void 0, void 0, function* () {
                yield Utils.asyncTween(this.btnDetail, { scaleX: 1.2, scaleY: 1.2 }, 200);
                yield Utils.asyncTween(this.btnDetail, { scaleX: 1, scaleY: 1 }, 200);
            }));
        }
        changeScene(sceneName) {
            GameManager.currentScene = sceneName;
            this.updateRender();
            let config = Scene3dConfig.getConfigByName(sceneName);
            this.wrapper3d.removeChildren();
            this.timer.once(300, this, e => {
                Laya.Scene3D.load(config.url, Laya.Handler.create(null, (scene) => {
                    this.wrapper3d.addChild(scene);
                    Oprate3dTool.init3d(scene, this.wrapper3d, sceneName);
                    if (config.script) {
                        scene.addComponent(config.script);
                    }
                    SoundManager.playBgm("sound/bgm.mp3");
                    UIManager.showHint(["hintSearch"]);
                }));
            });
        }
        updateRender() {
            if (GameManager.currentScene) {
                this.sceneChanger.visible = false;
                this.wrapTag.visible = false;
                this.btnExit.visible = true;
                this.wrap3d.visible = true;
            }
            else {
                this.sceneChanger.visible = true;
                this.btnExit.visible = false;
                this.wrap3d.visible = false;
                this.wrapTag.visible = true;
            }
        }
        changeMainWrap(type) {
            [
                "sceneChanger",
                "wrapTimeline",
                "wrapTalking",
                "wrapSuoLue",
                "wrapVote",
                "wrapNPC",
                "wrapBook",
                "sceneNote"
            ].forEach(type1 => {
                let wrap = this.getChildByName(type1);
                wrap.visible = type1 == type;
            });
        }
        changeStep() {
            let step = GameManager.step;
            GameManager.currentScene = "";
            this.updateRender();
            if (step == "CLUE_FIND") {
                this.listTag.array = [
                    {
                        label: DataLang.getTxtByType("Book"),
                        type: ConfigGameTag.Book
                    },
                    {
                        label: DataLang.getTxtByType("Scene"),
                        type: ConfigGameTag.RoomPicker
                    },
                    {
                        label: DataLang.getTxtByType("NPC"),
                        type: ConfigGameTag.NPC
                    },
                    {
                        label: DataLang.getTxtByType("Timeline"),
                        type: ConfigGameTag.Timeline
                    },
                    {
                        label: DataLang.getTxtByType("Note"),
                        type: ConfigGameTag.Note
                    }
                ];
                this.listTag.selectedIndex = 1;
                this.changeMainWrap("sceneChanger");
            }
            else if (step == "TALKING" || step == "FREE_TALKING") {
                this.listTag.array = [
                    {
                        label: DataLang.getTxtByType("Book"),
                        type: ConfigGameTag.Book
                    },
                    {
                        label: DataLang.getTxtByType("Scene"),
                        type: ConfigGameTag.Scene
                    },
                    {
                        label: DataLang.getTxtByType("Timeline"),
                        type: ConfigGameTag.Timeline
                    },
                    {
                        label: DataLang.getTxtByType("NPC"),
                        type: ConfigGameTag.NPC
                    },
                    {
                        label: DataLang.getTxtByType("Talking"),
                        type: ConfigGameTag.Talking
                    },
                    {
                        label: DataLang.getTxtByType("Note"),
                        type: ConfigGameTag.Note
                    }
                ];
                this.listTag.selectedIndex = 4;
                this.changeMainWrap("wrapTalking");
            }
            else if (step == "VOTE") {
                this.listTag.array = [
                    {
                        label: DataLang.getTxtByType("Book"),
                        type: ConfigGameTag.Book
                    },
                    {
                        label: DataLang.getTxtByType("Scene"),
                        type: ConfigGameTag.Scene
                    },
                    {
                        label: DataLang.getTxtByType("Timeline"),
                        type: ConfigGameTag.Timeline
                    },
                    {
                        label: DataLang.getTxtByType("NPC"),
                        type: ConfigGameTag.NPC
                    },
                    {
                        label: DataLang.getTxtByType("Vote"),
                        type: ConfigGameTag.Vote
                    },
                    {
                        label: DataLang.getTxtByType("Note"),
                        type: ConfigGameTag.Note
                    }
                ];
                this.listTag.selectedIndex = 4;
                this.changeMainWrap("wrapVote");
            }
            this.btnNext.visible = step == "CLUE_FIND";
        }
        onDisable() {
            Laya.stage.offAll(Laya.Event.MOUSE_UP);
        }
        listen() {
            let self = this;
            this.btnNext.readyHandler = new Laya.Handler(this, e => {
                this.btnNext.disabled = true;
                NetController.reqSceneEnd();
            });
            this.btnDetail.on(Laya.Event.CLICK, this, e => {
                this.openSmallModal("wrapDetail");
            });
            EventManager.sub("game/changeScene", this, e => {
                this.changeScene(e);
            });
            this.btnExit.on(Laya.Event.CLICK, this, (e) => __awaiter(this, void 0, void 0, function* () {
                yield NetController.leaveScene();
                GameManager.currentScene = "";
                SoundManager.stopBgm();
                self.updateRender();
                self.changeMainWrap("sceneChanger");
            }));
            this.listTag.renderHandler = new Laya.Handler(this, (cell, idx) => {
                let light = cell.getChildByName("light");
                light.visible = idx == this.listTag.selectedIndex;
            });
            this.listTag.selectHandler = new Laya.Handler(this, this.changeSelectedTag);
            EventManager.sub("game/updateStepRender", this, e => {
                this.changeStep();
            });
            EventManager.sub("game/showNPC", this, e => {
                this.changeMainWrap("wrapNPC");
            });
            EventManager.sub("game/showBook", this, e => {
                this.changeMainWrap("wrapBook");
            });
            this.smallModalCloser.on(Laya.Event.CLICK, this, this.closeAllSmallModal);
        }
        changeSelectedTag(idx) {
            if (!this.listTag.array) {
                return;
            }
            let data = this.listTag.array[idx] || {};
            console.log(data.type);
            switch (data.type) {
                case ConfigGameTag.RoomPicker: {
                    this.changeMainWrap("sceneChanger");
                    break;
                }
                case ConfigGameTag.Timeline: {
                    this.changeMainWrap("wrapTimeline");
                    break;
                }
                case ConfigGameTag.Talking: {
                    this.changeMainWrap("wrapTalking");
                    break;
                }
                case ConfigGameTag.Scene: {
                    this.changeMainWrap("wrapSuoLue");
                    break;
                }
                case ConfigGameTag.Vote: {
                    this.changeMainWrap("wrapVote");
                    break;
                }
                case ConfigGameTag.NPC: {
                    this.changeMainWrap("wrapNPC");
                    break;
                }
                case ConfigGameTag.Book: {
                    this.changeMainWrap("wrapBook");
                    break;
                }
                case ConfigGameTag.Note: {
                    this.changeMainWrap("sceneNote");
                    break;
                }
            }
        }
        openSmallModal(type) {
            this.smallModalCloser.visible = true;
            ["wrapDetail"].forEach(type1 => {
                let wrap = this.getChildByName(type1);
                wrap.visible = type == type1;
                wrap.zOrder = 100;
            });
            if (this.currentOpenSmallModal == type) {
                let wrap = this.getChildByName(type);
                wrap.visible = false;
                this.currentOpenSmallModal = "";
            }
            else {
                this.currentOpenSmallModal = type;
            }
            let wrapDetail = this.getChildByName("wrapDetail");
            GameManager.flagCanMove = !wrapDetail.visible;
        }
        closeAllSmallModal() {
            this.smallModalCloser.visible = false;
            this.currentOpenSmallModal = "";
            ["wrapDetail"].forEach(type1 => {
                let wrap = this.getChildByName(type1);
                if (wrap) {
                    wrap.visible = false;
                }
            });
            let wrapDetail = this.getChildByName("wrapDetail");
            GameManager.flagCanMove = !wrapDetail.visible;
        }
    }

    class SceneNote extends ui.scene.SceneNoteUI {
        onEnable() {
            this.listNote.renderHandler = new Laya.Handler(this, (cell, idx) => {
                let data = cell.dataSource;
                let content = cell.getChildByName("content");
                content.off(Laya.Event.BLUR, this, this.saveNote);
                content.on(Laya.Event.BLUR, this, this.saveNote);
            });
            this.initNote();
        }
        initNote() {
            this.listNote.array = GameManager.listNote.concat({ content: "" });
        }
        saveNote() {
            let listData = [];
            this.listNote.cells.forEach((cell) => {
                if (cell.visible) {
                    let content = cell.getChildByName("content");
                    if (content.text) {
                        listData.push({
                            content: content.text
                        });
                    }
                }
            });
            GameManager.listNote = listData;
            GameManager.saveLocalData();
            this.initNote();
        }
    }

    class GameBook extends Laya.Box {
        constructor() {
            super();
        }
        onEnable() {
            let wrapScroll = this.getChildByName("wrapScroll");
            let inner = wrapScroll.getChildByName("inner");
            let htmlText = inner.getChildByName("htmlText");
            let selfRoleId = GameManager.getSelectedRoleIdByUserId(GameManager.userInfo.userId);
            let roleData = Scene3dConfig.roleList.find(item => item.id == selfRoleId);
            if (roleData) {
                let w = wrapScroll.width - 20;
                htmlText.innerHTML = `<div style="font-size:30px;color:#554841;width:${w}px;line-height:45px;">${roleData.content}</div>`;
                let countEachW = w / 20;
                let stringLen = Utils.getTxtByteLen(roleData.content);
                let txtH = Math.ceil(stringLen / countEachW) * 45;
                inner.height = txtH + 70;
            }
        }
    }

    class GameSteper extends Laya.Box {
        constructor() {
            super(...arguments);
            this.currentIdx = -1;
        }
        onEnable() {
            this.list = this.getChildByName("list");
            this.list.renderHandler = new Laya.Handler(this, (cell, idx) => {
                let data = cell.dataSource;
                let point = cell.getChildByName("point");
                let current = cell.getChildByName("current");
                current.visible = idx == this.currentIdx;
                let wrapHover = cell.getChildByName("wrapHover");
                let label = wrapHover.getChildByName("label");
                wrapHover.visible = this.list.selectedIndex == idx;
                label.text = data[DataLang.lang];
            });
            this.list.mouseHandler = new Laya.Handler(this, (e, idx) => {
                if (e.type == "mouseover") {
                    this.list.selectedIndex = idx;
                }
                else if (e.type == "mouseout") {
                    this.list.selectedIndex = -1;
                }
            });
            this.list.array = [
                {
                    en: "Searching 30 min",
                    ch: "搜证 30 min",
                    type: "CLUE_FIND1"
                },
                {
                    en: "Self Talk 5 min",
                    ch: "个人发言 5 min",
                    type: "TALKING1"
                },
                {
                    en: "Group Talk 10 min",
                    ch: "群组讨论 10 min",
                    type: "FREE_TALKING1"
                },
                {
                    en: "Searching 30 min",
                    ch: "搜证 30 min",
                    type: "CLUE_FIND2"
                },
                {
                    en: "Self Talk 5 min",
                    ch: "个人发言 5 min",
                    type: "TALKING2"
                },
                {
                    en: "Group Talk 10 min",
                    ch: "群组讨论 10 min",
                    type: "FREE_TALKING2"
                },
                {
                    en: "Conclusion Talk 2min",
                    ch: "总结发言 Talk 2min",
                    type: "CONCLUSION"
                },
                {
                    en: "Vote 2 min",
                    ch: "投票 2 min",
                    type: "VOTE"
                }
            ];
            EventManager.sub("step/changeStep", this, this.updateData);
            this.updateData();
        }
        updateData() {
            let stepConf = this.list.array.find(conf => conf.type == GameManager.step ||
                conf.type == GameManager.step + GameManager.gameRound);
            if (stepConf) {
                let idx = this.list.array.indexOf(stepConf);
                this.currentIdx = idx;
                this.list.refresh();
            }
        }
    }

    class SceneHall extends ui.scene.SceneHallUI {
        constructor() {
            super();
            this.page = 1;
            this.totalPage = 10;
        }
        onEnable() {
            Laya.SoundManager.stopAllSound();
            GameManager.resetRoomData();
            this.listen();
            this.setData();
        }
        setData() {
            return __awaiter(this, void 0, void 0, function* () {
                this.avatar.skin =
                    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3023806798,280362912&fm=26&gp=0.jpg";
                this.nickName.text = GameManager.userInfo.username;
                this.updateGloableUserNum();
                yield this.updateRoomDataList();
            });
        }
        updateGloableUserNum() {
            this.globalUserNum.text = "在线人数:" + GameManager.globalUserNum;
        }
        onDisable() {
            this.timer.clearAll(this);
        }
        listen() {
            let debouceUpdateData = Utils.debounce(e => {
                this.updateRoomDataList(true);
            }, 500);
            this.timer.loop(5000, this, e => {
                this.updateRoomDataList(false);
            });
            this.searchInput.on(Laya.Event.INPUT, this, e => {
                debouceUpdateData();
            });
            let flagFocus = false;
            this.searchInput.on(Laya.Event.FOCUS, this, e => {
                flagFocus = true;
            });
            this.searchInput.on(Laya.Event.BLUR, this, e => {
                flagFocus = false;
            });
            this.on(Laya.Event.KEY_DOWN, this, e => {
                if (e.keyCode == 13) {
                    if (flagFocus) {
                        this.updateRoomDataList(true);
                    }
                }
            });
            this.btnTest.on(Laya.Event.CLICK, this, e => {
                UIManager.goScene("scene/SceneGame.scene");
            });
            EventManager.sub("hall/updateUserNumAll", this, this.updateGloableUserNum);
            this.btnSearch.on(Laya.Event.CLICK, this, e => {
                this.setData();
            });
            this.btnCreate.on(Laya.Event.CLICK, this, e => {
                UIManager.goScene("scene/SceneBeforeStart.scene", true, {
                    isCreate: true
                });
            });
            this.btnJoin.on(Laya.Event.CLICK, this, e => {
                UIManager.openModal("modal/ModalJoinRoom.scene");
            });
            this.roomList.array = [];
            this.roomList.mouseHandler = new Laya.Handler(this, (e, idx) => {
                if (e.type == "click") {
                    let data = this.roomList.array[idx];
                    UIManager.showConfirm({
                        content: `是否确认加入${data.roomName}？`,
                        onSure(e) {
                            return __awaiter(this, void 0, void 0, function* () {
                                console.log(data);
                                let res = yield NetController.reqJoinRoom(data.id);
                            });
                        },
                        onCancel(e) { }
                    });
                }
            });
            this.btnPre.on(Laya.Event.CLICK, this, e => {
                this.goPage(-1);
            });
            this.btnNext.on(Laya.Event.CLICK, this, e => {
                this.goPage(1);
            });
        }
        goPage(offset) {
            let pageNext = this.page + offset;
            if (pageNext < 1 || pageNext > this.totalPage) {
                return;
            }
            this.page = pageNext;
            this.txtPage.text = `${this.page}/${this.totalPage}`;
            this.setData();
        }
        updateRoomDataList(clearPage = false) {
            return __awaiter(this, void 0, void 0, function* () {
                if (clearPage) {
                    this.page = 1;
                }
                let data = yield NetController.getRoomAliveList(this.searchInput.text, this.page);
                console.log(data, "22222");
                this.totalPage = data.pageInfo.totalPage;
                this.txtPage.text = `${this.page}/${this.totalPage}`;
                let listData = [];
                data.list.forEach(item => {
                    listData.push({
                        img: "ui/img_bieshu.png",
                        roomTitle: `${item.roomName}(${item.userLive}/${item.userLimit})`,
                        roomName: item.roomName,
                        id: item.id
                    });
                });
                this.roomList.array = listData;
            });
        }
    }

    class ImageAutoResizeMax extends Laya.Image {
        constructor() {
            super();
            this.oldW = 0;
            this.oldH = 0;
        }
        onEnable() {
            this.oldH = this.height;
            this.oldW = this.width;
            this.doResize();
            this.on(Laya.Event.LOADED, this, this.doResize);
            this.on(Laya.Event.COMPLETE, this, this.doResize);
            this.on(Laya.Event.CHANGED, this, this.doResize);
        }
        doResize() {
            let sourceImg = this.source;
            if (!sourceImg) {
                return;
            }
            let ratioW = this.oldW / sourceImg.sourceWidth;
            let ratioH = this.oldH / sourceImg.sourceHeight;
            let ratio = Math.max(ratioW, ratioH);
            this.size(sourceImg.sourceWidth * ratio, sourceImg.sourceHeight * ratio);
            this.pivot(this.width / 2, this.height / 2);
            console.log(this.width / this.height, this.scaleX, this.scaleY);
        }
    }

    class SceneLoading extends ui.scene.SceneLoadingUI {
        constructor() {
            super();
            this.progress = 0;
            this.flagFinish = false;
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                let ratio = 1;
                Utils.loopRotate(this.lun1, 8000 * ratio, -1);
                Utils.loopRotate(this.lun2, 2000 * ratio, 1);
                Utils.loopRotate(this.lun3, 6000 * ratio, 1);
                Utils.loopRotate(this.lun4, 10000 * ratio, 1);
                Utils.loopRotate(this.lun5, 6000 * ratio, 1);
                Utils.loopRotate(this.lun6, 4000 * ratio, -1);
            });
        }
        onOpened({ showPrg3d }) {
            return __awaiter(this, void 0, void 0, function* () {
                Laya.timer.frameLoop(1, this, e => {
                    if (showPrg3d) {
                        this.progress =
                            (LoadingManager.progress + LoadingManager.progress3d) / 2;
                    }
                    else {
                        this.progress = LoadingManager.progress;
                    }
                    this.prg.width = 383 * this.progress;
                    if (this.progress >= 1 && !this.flagFinish) {
                        this.flagFinish = true;
                        GameManager.doReconnect();
                    }
                });
                LoadingManager.startLoad();
                if (showPrg3d) {
                    LoadingManager.loadScene3d();
                }
                this.tipLoading.text = DataLang.getTxtByType(showPrg3d ? "loadingScene" : "loading");
            });
        }
    }

    class SceneResult extends ui.scene.SceneResultUI {
        onEnable() {
            this.btnSure.on(Laya.Event.CLICK, this, e => {
                UIManager.goScene("scene/SceneTruth.scene");
            });
        }
        onOpened() {
            let votedId = GameManager.voteMap[GameManager.userInfo.userId];
            let votedRoleId = GameManager.getSelectedRoleIdByUserId(votedId);
            let murderUserId = GameManager.getMurderUserId();
            let isMurderer = GameManager.checkIsMurder(GameManager.userInfo.userId);
            let mapCount = {};
            for (let requestId in GameManager.voteMap) {
                let voteId = GameManager.voteMap[requestId];
                if (!mapCount[voteId]) {
                    mapCount[voteId] = 0;
                }
                mapCount[voteId]++;
            }
            let max = 0;
            let maxUserId = 0;
            for (let userId in mapCount) {
                if (mapCount[userId] > max) {
                    max = mapCount[userId];
                    maxUserId = +userId;
                }
            }
            let murderFail = mapCount[murderUserId] == max;
            this.wrapWin1.visible = false;
            this.wrapLose1.visible = false;
            this.wrapLose2.visible = false;
            this.wrapWin2.visible = false;
            let votedroleId = GameManager.getSelectedRoleIdByUserId(maxUserId);
            let votedRoleData = Scene3dConfig.getRoleInfoByRoleId(votedroleId);
            let roleId = GameManager.getSelectedRoleIdByUserId(GameManager.userInfo.userId);
            let roleData = Scene3dConfig.getRoleInfoByRoleId(roleId);
            let murderRoleId = GameManager.murderRoleId;
            let murderRoleData = Scene3dConfig.getRoleInfoByRoleId(murderRoleId);
            if (isMurderer) {
                this.resTitle.text = murderFail ? "失败" : "胜利";
                if (murderFail) {
                    this.wrapLose2.visible = true;
                    let img2 = this.wrapLose2.getChildByName("img2");
                    img2.skin = roleData.img;
                }
                else {
                    this.wrapWin2.visible = true;
                    let img2 = this.wrapWin2.getChildByName("img2");
                    img2.skin = roleData.img;
                }
            }
            else {
                this.wrapWin2.visible = false;
                this.wrapLose2.visible = false;
                if (murderFail) {
                    this.resTitle.text = "胜利";
                    this.wrapWin1.visible = true;
                    let roleName = this.wrapWin1.getChildByName("roleName");
                    roleName.text = murderRoleData.roleName;
                    let img = this.wrapWin1.getChildByName("img");
                    img.skin = murderRoleData.img;
                }
                else {
                    this.resTitle.text = "失败";
                    this.wrapLose1.visible = true;
                    let name1 = this.wrapLose1.getChildByName("name1");
                    name1.text = murderRoleData.roleName;
                    let img1 = this.wrapLose1.getChildByName("img1");
                    img1.skin = murderRoleData.img;
                    let name2 = this.wrapLose1.getChildByName("name2");
                    name2.text = votedRoleData.roleName;
                    let img2 = this.wrapLose1.getChildByName("img2");
                    img2.skin = votedRoleData.img;
                }
            }
        }
    }

    class SceneRole extends ui.scene.SceneRoleUI {
        constructor() {
            super();
        }
        onEnable() {
            UIManager.showHint(["hintRole", "hintRoleNext"]);
            this.title.refresh();
            this.frameOnce(1, this, e => {
                this.title.refresh();
            });
            this.list.renderHandler = new Laya.Handler(this, (cell, idx) => {
                let data = cell.dataSource;
                let selectedUserId = GameManager.selectRoleMapRoleToUser[data.id];
                let selfSelect = cell.getChildByName("selfSelect");
                let roleShape = cell.getChildByName("roleShape");
                let playerName = cell.getChildByName("playerName");
                let roleName = cell.getChildByName("roleName");
                let img = cell.getChildByName("img");
                roleShape.mask.skin = data.img;
                img.skin = data.img;
                roleName.text = data.roleName;
                selfSelect.visible = false;
                playerName.text = "";
                if (selectedUserId) {
                    img.visible = true;
                    roleShape.visible = false;
                    let userData = GameManager.getRoomUserById(selectedUserId);
                    playerName.text = Utils.subString(userData.username, 14);
                    if (GameManager.selfSelectRoleId == data.id) {
                        selfSelect.visible = true;
                    }
                }
                else {
                    roleShape.visible = true;
                    img.visible = false;
                }
            });
            this.list.mouseHandler = new Laya.Handler(this, (e, idx) => {
                let data = this.list.array[idx];
                if (e.type == "click") {
                    let selfRoleId = GameManager.getSelectedRoleIdByUserId(GameManager.userInfo.userId);
                    if (data.id != selfRoleId) {
                    }
                    UIManager.openModal("modal/ModalRoleInfo.scene", false, data);
                }
            });
            this.list.array = Scene3dConfig.roleList;
            this.updateAll();
            EventManager.sub("game/updateRoleSelct", this, e => {
                this.updateAll();
            });
            this.btnStart.readyHandler = new Laya.Handler(this, (e) => __awaiter(this, void 0, void 0, function* () {
                yield NetController.reqEndRoleSelected();
            }));
        }
        updateAll() {
            this.list.refresh();
        }
    }

    class SceneTalking extends ui.scene.SceneTalkingUI {
        onEnable() {
            this.listUserTalking.renderHandler = new Laya.Handler(this, (cell) => {
                let data = cell.dataSource || {};
                let roleId = GameManager.getSelectedRoleIdByUserId(data.userId);
                let roleData = Scene3dConfig.getRoleInfoByRoleId(roleId);
                let playerName = cell.getChildByName("playerName");
                let selfSelect = cell.getChildByName("selfSelect");
                let img = cell.getChildByName("img");
                img.skin = roleData.img;
                let roleName = cell.getChildByName("roleName");
                roleName.text = roleData.roleName;
                playerName.text = Utils.subString(data.username, 14);
                selfSelect.visible = GameManager.talkingUserId == data.userId;
            });
            this.btnNext.on(Laya.Event.CLICK, this, e => {
                NetController.reqEndTalkingBeforeGame();
            });
            this.listUserTalking.array = GameManager.roomUserList;
            this.listUserTalking.width =
                this.listUserTalking.array.length * (238 + 50) - 50;
            EventManager.sub("talking/changeCurrent", this, this.changeCurrent);
            Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown);
            Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyUp);
            this.changeCurrent({
                talkingUserId: GameManager.talkingUserId
            });
        }
        onMouseUp() {
        }
        onKeyUp(e) {
        }
        onKeyDown(e) {
            if (e.keyCode == Laya.Keyboard.V) {
            }
        }
        onDisable() {
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            Laya.stage.off(Laya.Event.KEY_DOWN, this, this.onKeyDown);
            Laya.stage.off(Laya.Event.KEY_UP, this, this.onKeyUp);
        }
        toggleMicro(flag) {
            Agora.toggleMicro(flag);
        }
        changeCurrent({ talkingUserId }) {
            let isSelf = talkingUserId == GameManager.userInfo.userId;
            let talkingData = GameManager.getRoomUserById(talkingUserId);
            this.txtSpeaking.visible = false;
            if (!isSelf) {
                if (talkingData.username) {
                    this.txtSpeaking.visible = true;
                    this.txtSpeaking.text = DataLang.getTxtByType("talkingPeople", {
                        username: talkingData.username
                    });
                }
            }
            this.listUserTalking.refresh();
            this.btnNext.visible = isSelf;
            this.toggleMicro(isSelf);
        }
        onOpened() { }
    }

    class SceneResult$1 extends ui.scene.SceneTruthUI {
        onEnable() {
            this.btnSure.on(Laya.Event.CLICK, this, e => {
                Laya.SoundManager.stopAllSound();
                UIManager.goScene("scene/SceneEndTalk.scene");
            });
        }
        onOpened() {
            return __awaiter(this, void 0, void 0, function* () {
                this.btnSure.visible = false;
                let ratioW = this.width / 654;
                let ratioH = this.width / 368;
                let ratio = Math.min(ratioH, ratioW);
                this.video = new Laya.Video(654 * ratio, 368 * ratio);
                this.video.x = (this.width - this.video.width) / 2;
                this.video.y = (this.height - this.video.height) / 2;
                this.video.load(`video/result_book1_${DataLang.lang}.mp4`);
                this.addChildAt(this.video, 0);
                this.video.play();
                this.btnSure.visible = true;
            });
        }
        onDisable() {
            this.video.destroy(true);
        }
    }

    class SceneVideo extends ui.scene.SceneVideoUI {
        constructor() {
            super(...arguments);
            this.nextClicked = false;
        }
        doLoad() {
            return __awaiter(this, void 0, void 0, function* () {
                let selfRoleId = GameManager.getSelectedRoleIdByUserId(GameManager.userInfo.userId);
                let roleData = Scene3dConfig.roleList.find(item => item.id == selfRoleId);
                if (roleData.pangbaiUrl) {
                    yield LoadingManager.loadSingle(roleData.pangbaiUrl);
                }
            });
        }
        onEnable() {
            return __awaiter(this, void 0, void 0, function* () {
                this.btnNext.disabled = true;
                this.video = new Laya.Video(this.wrapVideo.width, this.wrapVideo.height);
                this.video.load(`video/video1_${DataLang.lang}.mp4`);
                this.wrapVideo.addChild(this.video);
                this.video.play();
                this.timer.once(10000, this, e => {
                    this.btnNext.disabled = false;
                });
                this.doLoad();
                this.btnNext.on(Laya.Event.CLICK, this, e => {
                    this.btnNext.disabled = true;
                    this.nextClicked = true;
                    if (this.video) {
                        this.video.pause();
                    }
                    UIManager.goScene("scene/SceneBook.scene");
                });
            });
        }
    }

    var RenderState = Laya.RenderState;
    var VertexMesh = Laya.VertexMesh;
    var Shader3D = Laya.Shader3D;
    var SubShader = Laya.SubShader;
    class OutlineMaterial extends Laya.Material {
        constructor() {
            super();
            this.setShaderName("MultiplePassOutlineShader");
            this.renderQueue = Laya.Material.RENDERQUEUE_TRANSPARENT;
            this.alphaTest = false;
            this.depthWrite = false;
            this.cull = RenderState.CULL_BACK;
            this.blend = RenderState.BLEND_ENABLE_ALL;
            this.blendSrc = RenderState.BLENDPARAM_SRC_ALPHA;
            this.blendDst = RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA;
            this.depthTest = RenderState.DEPTHTEST_LESS;
        }
        static __init__() { }
        get diffuseTexture() {
            return this._shaderValues.getTexture(OutlineMaterial.DIFFUSETEXTURE);
        }
        set diffuseTexture(value) {
            this._shaderValues.setTexture(OutlineMaterial.DIFFUSETEXTURE, value);
        }
        set marginalColor(value) {
            this._shaderValues.setVector(OutlineMaterial.MARGINALCOLOR, value);
        }
        static initShader() {
            OutlineMaterial.__init__();
            let attributeMap = {
                a_Position: VertexMesh.MESH_POSITION0,
                a_Normal: Laya.VertexMesh.MESH_NORMAL0,
                a_Texcoord: Laya.VertexMesh.MESH_TEXTURECOORDINATE0,
                a_BoneWeights: Laya.VertexMesh.MESH_BLENDWEIGHT0,
                a_BoneIndices: Laya.VertexMesh.MESH_BLENDINDICES0
            };
            let uniformMap = {
                u_CameraPos: Laya.Shader3D.PERIOD_CAMERA,
                u_MvpMatrix: Laya.Shader3D.PERIOD_SPRITE,
                u_WorldMat: Laya.Shader3D.PERIOD_SPRITE,
                u_texture: Laya.Shader3D.PERIOD_MATERIAL,
                u_marginalColor: Laya.Shader3D.PERIOD_MATERIAL
            };
            let vs = `
        #include "Lighting.glsl";
        attribute vec4 a_Position;
        attribute vec2 a_Texcoord;
        attribute vec3 a_Normal;
        uniform mat4 u_MvpMatrix;
        uniform mat4 u_WorldMat;
        varying vec2 v_Texcoord;
        varying vec3 v_Normal;
        #if defined(DIRECTIONLIGHT)
            varying vec3 v_PositionWorld;
        #endif
        void main()
        {
            gl_Position=u_MvpMatrix * a_Position;
            mat3 worldMat=mat3(u_WorldMat);

            v_Texcoord=a_Texcoord;
            v_Normal=worldMat*a_Normal;

            #if defined(DIRECTIONLIGHT)
				v_PositionWorld=(u_WorldMat*a_Position).xyz;
            #endif
            gl_Position=remapGLPositionZ(gl_Position);
        }`;
            let ps = `
        #ifdef FSHIGHPRECISION
            precision highp float;
        #else
            precision mediump float;
        #endif
        #include "Lighting.glsl";
        varying vec2 v_Texcoord;
        uniform sampler2D u_texture;
        uniform vec3 u_marginalColor;
        varying vec3 v_Normal;

        #if defined(DIRECTIONLIGHT)
            uniform vec3 u_CameraPos;
            varying vec3 v_PositionWorld;
            uniform DirectionLight u_SunLight;
        #endif

     
        void main()
        {
            gl_FragColor=texture2D(u_texture,v_Texcoord);
            vec3 normal=normalize(v_Normal);
            vec3 toEyeDir = normalize(u_CameraPos-v_PositionWorld);
            //内发光
            float Rim = 1.0 - max(0.0,dot(toEyeDir, normal));
            vec3 Emissive = 2.0 * vec3(0.78,0.525,0.688) * pow(Rim,3.0);
            //叠加效果
			vec4 color = texture2D(u_texture, v_Texcoord) + vec4(Emissive,1.0);  
			gl_FragColor = color;
			
		}`;
            let vs1 = `
        #include "Lighting.glsl";
        attribute vec4 a_Position;
        attribute vec2 a_Texcoord;
        attribute vec3 a_Normal;
        uniform mat4 u_MvpMatrix;
        uniform mat4 u_WorldMat;
        varying vec2 v_Texcoord;
        varying vec3 v_Normal;
        #if defined(DIRECTIONLIGHT)
            varying vec3 v_PositionWorld;
        #endif
        void main()
        {
            //外扩0.15
			vec4 position = vec4(a_Position.xyz + a_Normal * 0.15, 1.0);
            gl_Position=u_MvpMatrix * position;
            mat3 worldMat=mat3(u_WorldMat);

            v_Texcoord=a_Texcoord;
            //法线向量
            v_Normal=worldMat*a_Normal;

            #if defined(DIRECTIONLIGHT)
                //世界坐标
				v_PositionWorld=(u_WorldMat*position).xyz;
            #endif
            gl_Position=remapGLPositionZ(gl_Position);
        }`;
            let ps1 = `
        #ifdef FSHIGHPRECISION
            precision highp float;
        #else
            precision mediump float;
        #endif
        #include "Lighting.glsl";
        varying vec2 v_Texcoord;
        uniform sampler2D u_texture;
        uniform vec3 u_marginalColor;
        varying vec3 v_Normal;

        #if defined(DIRECTIONLIGHT)
            uniform vec3 u_CameraPos;
            varying vec3 v_PositionWorld;
            uniform DirectionLight u_SunLight;
        #endif
        //光晕平方参数
        const float lightPow = 3.0;
        //光晕强度
        const float lightStrthgth = 10.0;
     
        void main()
        {
            //归一化
            vec3 normal=normalize(v_Normal);
            //视角法线
            vec3 toEyeDir = normalize(u_CameraPos-v_PositionWorld);
            //视角法线与模型法线点积形成中间指为1向四周逐渐衰减为0的点积值，赋给透明通道，形成光晕效果
            //
			float Rim = pow(clamp(dot(toEyeDir, normal), 0.0, 1.0), lightPow);
			Rim *= dot(toEyeDir, normal) * lightStrthgth;
 
			gl_FragColor = vec4(0.78,0.525,0.688, Rim);
			
        }`;
            let stateMap = {
                s_Cull: Shader3D.RENDER_STATE_CULL,
                s_Blend: Shader3D.RENDER_STATE_BLEND,
                s_BlendSrc: Shader3D.RENDER_STATE_BLEND_SRC,
                s_BlendDst: Shader3D.RENDER_STATE_BLEND_DST,
                s_DepthTest: Shader3D.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: Shader3D.RENDER_STATE_DEPTH_WRITE
            };
            var customShader = Shader3D.add("MultiplePassOutlineShader");
            var subShader = new SubShader(attributeMap, uniformMap);
            customShader.addSubShader(subShader);
            var pass1 = subShader.addShaderPass(vs1, ps1, stateMap);
            pass1.renderState.cull = RenderState.CULL_FRONT;
            var pass2 = subShader.addShaderPass(vs, ps, stateMap);
        }
        set depthWrite(value) {
            this._shaderValues.setBool(OutlineMaterial.DEPTH_WRITE, value);
        }
        get depthWrite() {
            return this._shaderValues.getBool(OutlineMaterial.DEPTH_WRITE);
        }
        set cull(value) {
            this._shaderValues.setInt(OutlineMaterial.CULL, value);
        }
        get cull() {
            return this._shaderValues.getInt(OutlineMaterial.CULL);
        }
        set blend(value) {
            this._shaderValues.setInt(OutlineMaterial.BLEND, value);
        }
        get blend() {
            return this._shaderValues.getInt(OutlineMaterial.BLEND);
        }
        set blendSrc(value) {
            this._shaderValues.setInt(OutlineMaterial.BLEND_SRC, value);
        }
        get blendSrc() {
            return this._shaderValues.getInt(OutlineMaterial.BLEND_SRC);
        }
        set blendDst(value) {
            this._shaderValues.setInt(OutlineMaterial.BLEND_DST, value);
        }
        get blendDst() {
            return this._shaderValues.getInt(OutlineMaterial.BLEND_DST);
        }
        set depthTest(value) {
            this._shaderValues.setInt(OutlineMaterial.DEPTH_TEST, value);
        }
        get depthTest() {
            return this._shaderValues.getInt(OutlineMaterial.DEPTH_TEST);
        }
    }
    OutlineMaterial.DIFFUSETEXTURE = Laya.Shader3D.propertyNameToID("u_texture");
    OutlineMaterial.MARGINALCOLOR = Laya.Shader3D.propertyNameToID("u_marginalColor");
    OutlineMaterial.CULL = Shader3D.propertyNameToID("s_Cull");
    OutlineMaterial.BLEND = Shader3D.propertyNameToID("s_Blend");
    OutlineMaterial.BLEND_SRC = Shader3D.propertyNameToID("s_BlendSrc");
    OutlineMaterial.BLEND_DST = Shader3D.propertyNameToID("s_BlendDst");
    OutlineMaterial.DEPTH_TEST = Shader3D.propertyNameToID("s_DepthTest");
    OutlineMaterial.DEPTH_WRITE = Shader3D.propertyNameToID("s_DepthWrite");

    class GameUI extends ui.test.TestSceneUI {
        constructor() {
            super();
            var scene = Laya.stage.addChild(new Laya.Scene3D());
            var camera = (scene.addChild(new Laya.Camera(0, 0.1, 100)));
            camera.transform.translate(new Laya.Vector3(0, 3, 3));
            camera.transform.rotate(new Laya.Vector3(-30, 0, 0), true, false);
            var directionLight = scene.addChild(new Laya.DirectionLight());
            directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
            directionLight.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0));
            var box = scene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createSphere(0.5, 128, 128)));
            box.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);
            var material = new OutlineMaterial();
            Laya.Texture2D.load("res/layabox.png", Laya.Handler.create(null, function (tex) {
                material.diffuseTexture = tex;
            }));
            box.meshRenderer.material = material;
        }
    }

    class CheckBox extends Laya.Box {
        constructor() {
            super();
            this._selected = false;
        }
        get selected() {
            return this._selected;
        }
        set selected(val) {
            this.inner = this.getChildByName("inner");
            this.inner.visible = val;
            this._selected = val;
        }
        onEnable() {
            this.on(Laya.Event.CLICK, this, e => {
                this.selected = !this.selected;
                console.log(234343);
            });
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("comp/GameCluDetail.ts", GameCluDetail);
            reg("common/ImageAutoResize.ts", ImageAutoResize);
            reg("common/Button.ts", Button);
            reg("comp/GameTalking.ts", GameTalking);
            reg("comp/GameExiter.ts", GameExiter);
            reg("comp/WrapReady.ts", WrapReady);
            reg("common/LangImg.ts", LangImg);
            reg("common/LangLabel.ts", LangLabel);
            reg("comp/GameTalkingDetailBox.ts", GameTalkingDetailBox);
            reg("comp/GameTimeline.ts", GameTimeline);
            reg("comp/GameChatBox.ts", GameChatBox);
            reg("comp/GameChatBox2.ts", GameChatBox2);
            reg("comp/GameHouse.ts", GameHouse);
            reg("comp/GameRoomEach.ts", GameRoonEach);
            reg("comp/GameNPC.ts", GameNPC);
            reg("comp/GameSetting.ts", GameSetting);
            reg("comp/ListKey.ts", ListKey);
            reg("comp/GameVote.ts", GameVote);
            reg("comp/GameWrapBook.ts", GameWrapBook);
            reg("comp/GameWrapMine.ts", GameWrapMine);
            reg("comp/WrapTip.ts", WrapTip);
            reg("modal/AdStartGame.ts", AdStartGame);
            reg("modal/ModalAddTimeline.ts", ModalAddTimeline);
            reg("comp/InputSelect.ts", InputSelect);
            reg("modal/ModalAskChangeRole.ts", ModalAskChangeRole);
            reg("modal/ModalAudioTest.ts", ModalAudioTest);
            reg("modal/ModalConfirm.ts", ModalConfirm);
            reg("modal/ModalDetail.ts", ModalDetail);
            reg("modal/ModalDetailList.ts", ModalDetailList);
            reg("common/ModalCloser.ts", ModalCloser);
            reg("modal/ModalInfo.ts", ModalInfo);
            reg("modal/ModalJoinRoom.ts", ModalJoinRoom);
            reg("modal/ModalMessage.ts", ModalMessage);
            reg("modal/ModalPic.ts", ModalPic);
            reg("modal/ModalResetEnd.ts", ModalResetEnd);
            reg("modal/ModalResult.ts", ModalResult);
            reg("modal/ModalRoleInfo.ts", ModalRoleInfo);
            reg("modal/ModalShare.ts", ModalShare);
            reg("modal/ModalShareClu.ts", ModalShareClu);
            reg("SceneComponents/scene1/ui/SafeBox.ts", SafeBox);
            reg("SceneComponents/scene1/jane/PhoneJane.ts", PhoneJane);
            reg("SceneComponents/scene1/joe/BookJoe.ts", BookJoe);
            reg("comp/ListItemToUse.ts", ListItemToUse);
            reg("SceneComponents/scene1/joe/PhoneJoe.ts", PhoneJoe);
            reg("SceneComponents/scene1/ui/Computer.ts", Computer);
            reg("SceneComponents/scene1/ComputerCommon.ts", ComputerCommon);
            reg("script/ComputerClicker.ts", ComputerClicker);
            reg("script/ComputerClicker2.ts", ComputerClicker$1);
            reg("SceneComponents/scene1/ui/Phone.ts", Phone);
            reg("SceneComponents/scene1/ui/ComputerWilson.ts", ComputerWilson);
            reg("SceneComponents/scene1/joe/ComputerJoe.ts", ComputerCommon$1);
            reg("SceneComponents/scene1/wilson/pmt.ts", pmt);
            reg("scene/SceneBeforeStart.ts", SceneBeforeStart);
            reg("comp/TxtGroupCenter.ts", TxtGroupCenter);
            reg("common/CheckBoxInStart.ts", CheckBoxInStart);
            reg("scene/SceneBook.ts", SceneBook);
            reg("modal/SceneDrag.ts", SceneDrag);
            reg("scene/SceneEndTalk.ts", SceneEndTalk);
            reg("comp/TimeTitle.ts", TimeTitle);
            reg("scene/SceneGame.ts", SceneGame);
            reg("scene/SceneNote.ts", SceneNote);
            reg("comp/GameBook.ts", GameBook);
            reg("comp/GameSteper.ts", GameSteper);
            reg("scene/SceneHall.ts", SceneHall);
            reg("common/ImageAutoResizeMax.ts", ImageAutoResizeMax);
            reg("scene/SceneLoading.ts", SceneLoading);
            reg("scene/SceneResult.ts", SceneResult);
            reg("scene/SceneRole.ts", SceneRole);
            reg("scene/SceneTalking.ts", SceneTalking);
            reg("scene/SceneTruth.ts", SceneResult$1);
            reg("scene/SceneVideo.ts", SceneVideo);
            reg("script/GameUI.ts", GameUI);
            reg("common/CheckBox.ts", CheckBox);
        }
    }
    GameConfig.width = 1920;
    GameConfig.height = 1080;
    GameConfig.scaleMode = "fixedauto";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "scene/SceneBook.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.WorkerLoader.workerPath = "./libs/workerloader.js";
            Laya.WorkerLoader.enable = true;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            return __awaiter(this, void 0, void 0, function* () {
                DataLang.lang = Utils.getQueryVariable("lang") || "zh-CN";
                new window["ClipboardJS"](".btn-copy");
                window["GameManager"] = GameManager;
                window["UIManager"] = UIManager;
                window["Scene3dConfig"] = Scene3dConfig;
                window["NetController"] = NetController;
                window["Agora"] = Agora;
                window["Utils"] = Utils;
                window["LoadingManager"] = LoadingManager;
                yield UIManager.init();
                yield NetController.doLogin();
                Laya.Scene.open("scene/SceneLoading.scene", false, { showPrg3d: false });
            });
        }
    }
    new Main();

}());
