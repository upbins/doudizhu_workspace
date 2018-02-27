(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/global.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ef6ackIw9xMQ4NxuilxeJH3', 'global', __filename);
// scripts/global.js

"use strict";

var _tianBa = require("./data/tianBa");

var _tianBa2 = _interopRequireDefault(_tianBa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocketController = require("./data/SocketController");

var global = {};
global.socket = SocketController.getInstance();
global.tianba = _tianBa2.default.getInstance();
module.exports = global;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=global.js.map
        