(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/data/playerData.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8e94f8omYxE15zpl+NMKQCD', 'playerData', __filename);
// scripts/data/playerData.js

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayerData = function () {
  function PlayerData() {
    _classCallCheck(this, PlayerData);

    this.uid = undefined;
    this.uniqueID = '10000';
    this.nickName = "小明" + Math.floor(Math.random() * 10);
    this.avatarUrl = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=373849174,2079142017&fm=27&gp=0.jpg";
    this.houseCardCount = 0;
    for (var i = 0; i < 7; i++) {
      this.uniqueID += Math.floor(Math.random() * 10);
    }
  }

  _createClass(PlayerData, [{
    key: "wxLoginSuccess",
    value: function wxLoginSuccess(data) {
      this.uniqueID = data.uniqueID;
      this.nickName = data.nickName;
      this.avatarUrl = data.avatarUrl;
    }
  }, {
    key: "loginSuccess",
    value: function loginSuccess(data) {
      console.log("data=" + JSON.stringify(data));
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (PlayerData.g_Instance === null) {
        PlayerData.g_Instance = new PlayerData();
      }
      return PlayerData.g_Instance;
    }
  }]);

  return PlayerData;
}();

PlayerData.g_Instance = null;
module.exports = PlayerData;

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
        //# sourceMappingURL=playerData.js.map
        