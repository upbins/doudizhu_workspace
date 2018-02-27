import PlayerData from './playerData'
class TianBa{
  constructor(){
    this.playerData = null;
    this.init()
  }
  static getInstance(){
    if (TianBa.g_Instance === null){
      TianBa.g_Instance = new TianBa();
    }
    return TianBa.g_Instance
  }
  init()
  {
    this.playerData = PlayerData.getInstance()
  }
}
TianBa.g_Instance = null;
module.exports = TianBa