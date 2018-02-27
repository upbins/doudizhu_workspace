class PlayerData {
  constructor(){
    this.uid = undefined;
    this.uniqueID = '10000';
    this.nickName = "小明" + Math.floor(Math.random() * 10);
    this.avatarUrl = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=373849174,2079142017&fm=27&gp=0.jpg";
    this.houseCardCount = 0;
    for (let i = 0; i < 7; i++) {
      this.uniqueID += Math.floor(Math.random() * 10);
    }
  }
  static getInstance(){
    if (PlayerData.g_Instance === null){
      PlayerData.g_Instance = new PlayerData();
    }
    return PlayerData.g_Instance
  }
  wxLoginSuccess(data){
    this.uniqueID = data.uniqueID;
    this.nickName = data.nickName;
    this.avatarUrl = data.avatarUrl;
  }
  loginSuccess(data) {
    console.log("data=" + JSON.stringify(data))
  }
}
PlayerData.g_Instance = null
module.exports = PlayerData