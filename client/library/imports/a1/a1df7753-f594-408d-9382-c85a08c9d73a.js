"use strict";
cc._RF.push(module, 'a1df7dT9ZRAjZOCyFoIydc6', 'mainScene');
// scripts/mainScene/mainScene.js

"use strict";

var _global = require("./../global");

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        _global2.default.socket.init();
    },
    buttonClick: function buttonClick(event, customData) {
        switch (customData) {
            case "login":
                _global2.default.socket.login(_global2.default.tianba.playerData.uniqueID, _global2.default.tianba.playerData.nickName, _global2.default.tianba.playerData.avatarUrl, function (err, data) {
                    if (err) {
                        console.log("login err" + err);
                    } else {
                        console.log("login data=" + JSON.stringify(data));
                    }
                });
                break;

            default:
                break;
        }
    }
});

cc._RF.pop();