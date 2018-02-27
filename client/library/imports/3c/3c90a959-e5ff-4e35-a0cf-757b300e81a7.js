"use strict";
cc._RF.push(module, '3c90alZ5f9ONaDPdXswDoGn', 'tianBa');
// scripts/data/tianBa.js

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _playerData = require('./playerData');

var _playerData2 = _interopRequireDefault(_playerData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TianBa = function () {
  function TianBa() {
    _classCallCheck(this, TianBa);

    this.playerData = null;
    this.init();
  }

  _createClass(TianBa, [{
    key: 'init',
    value: function init() {
      this.playerData = _playerData2.default.getInstance();
    }
  }], [{
    key: 'getInstance',
    value: function getInstance() {
      if (TianBa.g_Instance === null) {
        TianBa.g_Instance = new TianBa();
      }
      return TianBa.g_Instance;
    }
  }]);

  return TianBa;
}();

TianBa.g_Instance = null;
module.exports = TianBa;

cc._RF.pop();