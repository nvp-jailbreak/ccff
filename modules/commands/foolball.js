/*Credits NguyenQuocAnh vui lòng không chỉnh sửa
⚡Cảm ơn vì đã đọc*/
const chalk = require('chalk');
module.exports.config = {
    name: "football",
    version: "0.18.1",
    hasPermssion: 0,
    credits: "NguyenQuocAnh", 
    description: "",
    commandCategory: "football",
    usages: ["[Home] [Market] [VongQuay]"],
    cooldowns: 5,
    envConfig: {
    }
    };
  module.exports.onLoad = () => {
  console.log(chalk.bold.hex("# 473C8B").bold("--SUCCESFULLY LOADED THE FOOTBALL COMMAND--"));
  }
module.exports.run = async ({  event, api, handleReply, Currencies, getText }) => {
 const fs = require("fs-extra");
    const axios = require("axios");
  //ảnh
  const picture = (await axios.get(`https://i.imgur.com/M6oL1Za.jpg`, { responseType: "stream"})).data
    return api.sendMessage({body: "MIRAI @FOOTBALL GAME"
               + "\n[       Football Home       ]"+
                "\n(1) [ Market ]"+
                "\n(2) [ Tournament ]"+
                "\n(3) [ Rotation ]"+
                "\n(4) [ Ví MFG ]"
               +"\n(5) [ Setting ]"
                ,attachment: (picture)
     
    } , event.threadID, (error, info) => {
    global.client.handleReply.push({
            type: "choosee",
                        name:this.config.name,
                  author:event.senderID,
                messageID:info.messageID
                      })  
                   })
    
}
module.exports.handleReply = async function({
  args, event, Users, api, handleReply, Currencies
}) {
  const { threadID, messageID, senderID } = event;
  const axios = require("axios")
  const fs = require('fs-extra');
  const request = require('request')
  //data coin
  let data = (await Currencies.getData(senderID)).data;
  //coin
  const money = (await Currencies.getData(senderID)).money;
//KHAI BÁO RANDOM
//random coin ít nhất là 200 coin
var coins = Math.floor(Math.random() * 1000) + 200;
//coin cầu thủ ít nhất là 1000
var coinsplayer = Math.floor(Math.random() * 100000) + 1000;
//Quà VongQuay
var item = ['Quả Bóng Vàng', 'Chiếc Giày Vàng', 'Cúp C1'];
//Cầu thủ nhận được 
var player = ['Lionel Messi','Erling Haaland','Manuel Neuer', 'Karim Benzema','Neymar','Cristiano Ronaldo','Sergio Ramos','Kylian Mbappe','Joshua Kimmich','Robert Lewandowski'];
//random Quà VongQuay
var gift = item[Math.floor(Math.random() * item.length)];
//random cầu thủ
var giftplayer = player[Math.floor(Math.random() * player.length)];
//KHAI BÁO CÁC GIÁ TRỊ KHÁC
var msg = "";
//Ảnh
const market = (await axios.get(`https://i.imgur.com/0mBPSwA.jpg`, { responseType: "stream"})).data;
//
  //CHOOSE
  switch (handleReply.type) {
    case "choosee": {
      switch (event.body) {
        case "1": {
      return  api.sendMessage({body : "(1) [ 𝗚𝗼𝗶 𝟭𝟬𝟬𝟬𝟬𝟬𝟬$ 𝗠𝗶𝗿𝗮𝗶 𝗙𝗼𝗼𝘁𝗯𝗮𝗹𝗹 ]"+
        "\nGiá 196536$ bạn sẽ nhận được 1000000$ vào Ví MFG của bạn"
        },threadID , (error, info) => {global.client.handleReply.push({
					 type: "Market",
					 name: this.config.name,
					 author: senderID,
					 messageID: info.messageID
					})},messageID)
        }
        break;
case "2" : {
					return api.sendMessage({body :     "@Các Giải Đấu Hiện Có"+"\n(1) Mirai Champion League"+"\n(2) Mirai League"
					},threadID , (error, info) => {global.client.handleReply.push({
					 type: "Tournament",
					 name: this.config.name,
					 author: senderID,
					 messageID: info.messageID
					})},messageID)
}
break;
case "3" : {
					return api.sendMessage({body :     "⚡Các Vòng Quay Hiện Có"+"\n(1) [ Random Vòng Quay Vật Phẩm ]"+
					 "\n(2) [ Vòng Quay Cầu Thủ ]"
					},threadID , (error, info) => {global.client.handleReply.push({
					 type: "VongQuay",
					 name: this.config.name,
					 author: senderID,
					 messageID: info.messageID
					})},messageID)
} break;
case "4" : {
 return api.sendMessage({body: "⚡VÍ MFG"+
  "\n(1) Xem Coin Trong Tài Khoản"
  +"\n(Update...)"
 },threadID , (error, info) => {global.client.handleReply.push({
					 type: "ViMFG",
					 name: this.config.name,
					 author: senderID,
					 messageID: info.messageID
					})},messageID)
} break;
case "5" : {
 return api.sendMessage({body: "[1] [ Thông Tin Về Module ]"},threadID , (error, info) => {global.client.handleReply.push({
					 type: "Setting",
					 name: this.config.name,
					 author: senderID,
					 messageID: info.messageID
					})},messageID)
}
} 
}
}
//VONGQUAY CHOOSE
switch (handleReply.type) {
    case "VongQuay": {
      switch (event.body) {
        case "1": {
         msg = `⚡Bạn nhận được ${gift} Đổi Sang Tiền = ${coins}$`;
         await Currencies.decreaseMoney(senderID, parseInt(coins));
         return api.sendMessage({body: msg},threadID, messageID)
        } break;
        case "2" : {
         msg = `⚡Bạn Nhận Được Cầu Thủ [ ${giftplayer} ] Đổi Sang Tiền = ${coinsplayer}$`;
         await Currencies.decreaseMoney(senderID, parseInt(coinsplayer));
        return api.sendMessage({body : msg},threadID, messageID);
        } 
      }
    }
} 
//END VONGQUAY CHOOSE
//VÍ MFG
switch (handleReply.type) {
    case "ViMFG": {
      switch (event.body) {
       case "1" : {
        msg = `⚡Tài Khoản Của Bạn Có ${money}$`;
        api.sendMessage({body : msg},threadID,messageID)
       }
      }
    }
}
//setting
switch (handleReply.type) {
    case "Setting": {
      switch (event.body) {
       case "1" : {
        msg = `Tên module: [ ${this.config.name} ]\nPhiên bản: [ ${this.config.version} ]\nGiới hạn người dùng: [ ${this.config.hasPermssion} ] \nSáng tạo: [ ${this.config.credits} ]\nTiêu đề: [ ${this.config.description} ]\nThời gian chờ: [ ${this.config.cooldowns}s ]`;
        api.sendMessage({body : msg},threadID,messageID)
       }
      }
    }
}
//Market
switch (handleReply.type) {
    case "Market": {
      switch (event.body) {
       case "1" : {
      msg = `Giao dịch thành công tài khoản của bạn bị trừ [ 196536$ ]\nVí MFG của bạn được cộng [ 1000000$ ]`;await Currencies.decreaseMoney(event.senderID, 196536);
      await
Currencies.increaseMoney(event.senderID, 1000000);
        api.sendMessage({body : msg},threadID,messageID)
       }
      }
    }
}

    

}