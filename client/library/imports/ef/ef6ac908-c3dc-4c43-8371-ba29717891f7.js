"use strict";
cc._RF.push(module, 'ef6ackIw9xMQ4NxuilxeJH3', 'global');
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