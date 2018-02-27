(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/data/socketController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1cfe5Ql4eNGu4OCvbgDIFjc', 'socketController', __filename);
// scripts/data/socketController.js

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defines = require("./../defines");

var _defines2 = _interopRequireDefault(_defines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SocketController = function () {
  function SocketController() {
    _classCallCheck(this, SocketController);

    this.socket = undefined;
  }

  _createClass(SocketController, [{
    key: "init",
    value: function init() {
      this.socket = io(_defines2.default.serverUrl);
    }
  }, {
    key: "login",
    value: function login(uniqueID, nickName, avatarUrl, callback) {
      this.socket.emit("login", {
        uniqueID: uniqueID,
        nickName: nickName,
        avatarUrl: avatarUrl
      });
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (SocketController.g_Instance === null) {
        SocketController.g_Instance = new SocketController();
      }
      return SocketController.g_Instance;
    }
  }]);

  return SocketController;
}();

SocketController.g_Instance = null;
module.exports = SocketController;

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
        //# sourceMappingURL=socketController.js.map
        