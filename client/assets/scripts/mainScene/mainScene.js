import global from './../global'
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        global.socket.init();
    },
    buttonClick(event,customData){
        switch (customData) {
            case "login":
                global.socket.login(
                    global.tianba.playerData.uniqueID,
                    global.tianba.playerData.nickName,
                    global.tianba.playerData.avatarUrl,function (err,data) {
                        if(err){
                            console.log("login err" + err);
                        }else{
                            console.log("login data=" + JSON.stringify(data));
                        }
                    }
                )
                break;
        
            default:
                break;
        }
    }
});
