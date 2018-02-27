var SocketController = require("./data/SocketController");
import TianBa from "./data/tianBa";
const global = {};
global.socket = SocketController.getInstance()
global.tianba = TianBa.getInstance()
module.exports = global;