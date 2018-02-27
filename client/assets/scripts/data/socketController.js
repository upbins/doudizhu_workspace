import defines from './../defines'
class SocketController{
  constructor(){
    this.socket = undefined;
  }
  static getInstance(){
    if (SocketController.g_Instance === null){
        SocketController.g_Instance = new SocketController();
    }
    return SocketController.g_Instance
  }
  init() {
    this.socket = io(defines.serverUrl)
  }
  login(uniqueID,nickName,avatarUrl,callback){
    this.socket.emit("login",{
      uniqueID:uniqueID,
      nickName:nickName,
      avatarUrl:avatarUrl,
    });
  }
}
SocketController.g_Instance = null;
module.exports = SocketController;