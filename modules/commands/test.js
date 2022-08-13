/*
@credit ⚡️D-Jukie
@vui lòng không chỉnh sửa credit
*/
const fs = require("fs");
module.exports.config = {
    name: "test",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "⚡D-Jukie <sang với suhao mod lại xiu xíu :>", //Sang Nguyễn edit mod, Code working của diện,suhao chỉnh chữ thoai ko có rì đâu
    description: "💴𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 𝐅𝐚𝐤𝐞💎",
    commandCategory: "tài chính",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 0 
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "tx.png")) request("https://lh6.googleusercontent.com/mIDEo50EyyKiCVDuDDdf5vWVqCFrd91PA_YjE_ozGJkolJ2zqkSZMBP0f2-dWmAZHMukCppy_cFnTfYsYACtHqCtw43VtMEAwd4rS93opfJoQaIIgzwL4qhBKqdhv9xNcA1_dtpq").pipe(fs.createWriteStream(dirMaterial + "tx.png"));
}
module.exports.handleReply = async ({ 
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != e.senderID) 
return api.sendMessage("🎋𝐋𝐮̛𝐨̛̣𝐭 𝐜𝐡𝐨̛𝐢 𝐜𝐮̉𝐚 𝐚𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐚̂́𝐲 𝐜𝐡𝐨̛𝐢 𝐧𝐡𝐚́, 𝐛𝐚̣𝐧 𝐤𝐨 𝐧𝐞̂𝐧 𝐭𝐫𝐚𝐧𝐡 𝐥𝐮̛𝐨̛̣𝐭 𝐜𝐮̉𝐚 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐤𝐡𝐚́𝐜", e.threadID, e.messageID)

var a = Math.floor(Math.random() * 10000) + 80; 
var b = Math.floor(Math.random() * 18); 
var c = Math.floor(Math.random() * 100) + 80; 
var x = Math.floor(Math.random() * 100) + 80; 
var y = Math.floor(Math.random() * 100) + 80; 
var f = Math.floor(Math.random() * 100) + 50;
  var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            var t = Date.parse("February 1, 2022 00:00:00") - Date.parse(new Date()),
            m = Math.floor( (t/1000/60) % 60 ),
            h = Math.floor( (t/(1000*60*60)) % 24 ),
            d = Math.floor( t/(1000*60*60*24) ); 
           
            switch(e.body) {
                case "1": msg = `梁ADMIN BOT梁
  👀 Tên: Nguyễn Văn Phước 
  ❎ Tuổi: 15
  👤 Giới tính: Nam
  🙄 Sinh ngày: 18-02-2007
  💫 Chiều cao / cân nặng: Đã Quên :))
  💘 Mối quan hệ: Hẹn Hò
  😎 Quê quán:  Nam Định 
  🤔 Nơi ở: Nha Trang-Khánh Hòa 
  ♑ Cung: Bảo Bình \n \n👫 Gu: Dell Nói Đâu \n \n🌸 Tính cách: không có đâu đừng nhìn nhé <3 \n \n📱 Facebook: https://www.facebook.com/NVP.Vanphuoc  vô follow đi ko follow ko cho sài bot \n \n📢 Lưu ý cho các qtv và tv trong box: 
- Vui lòng không spam khi sử dụng để tránh die bot
- Không sử dụng lệnh nhiều của lệnh đó
- Đừng chửi bot vì nó được lập trình tự động rời box
- Đừng report bot vì nó văn minh lắm ><
- Nếu bot ko hoạt động hay bị lỗi hay liên hệ qua sdt hoặc nhắn tin mess để được liên hệ trực tiếp với mình
=> Yêu mọi người nhiều lắm <3 hãy đồng hành cùng với bot và mình nhé <3
------------

✔Donate:
💳MB: Đã bẻ thẻ :)
💳VIB: Đã bẻ thẻ :)
📲MoMo: 0867.518.145

------------

✔Số điện thoại:
📲Zalo: 0586284453 (spam gọi ban khỏi thệ thống vĩnh viễn nhé)
💌email: Contact.vanphuoc@gmail.com 

----NVP----`,
attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${100021446501428}/picture?height=720&wudth=720&access_token=443371487424505|cb7da2f464342f3e2e680301681ebfd7`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
                await Currencies.increaseMoney(e.senderID, parseInt(a)); 
                
                break; 
                case "2": msg = `💷Đ𝐚̃ 𝐥𝐚̆́𝐜 𝐫𝐚 𝐗𝐢̉𝐮 ${b} 𝐬𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐧𝐡𝐚̣̂𝐧 𝐝𝐜 𝐥𝐚̀ : ${a}𝐊 🎐\n🌸𝐍𝐠𝐚̀𝐲 𝐦𝐚̀ 𝐛𝐚̣𝐧 đ𝐨̂̉𝐢 𝐦𝐞̣̂𝐧𝐡 𝐜𝐨̀𝐧${d} 𝐧𝐠𝐚̀𝐲 ${h} 𝐠𝐢𝐨̛̀ ${m} 𝐩𝐡𝐮́𝐭🎋`;
                await Currencies.increaseMoney(e.senderID, parseInt(x));  
                break;
                default: break;
            };
            const choose = parseInt(e.body);
            if (isNaN(e.body)) 
            return api.sendMessage("💶𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐜𝐡𝐨̣𝐧 𝐓𝐚̀𝐢 𝐡𝐨𝐚̣̆𝐜 𝐗𝐢̉𝐮 🎀", e.threadID, e.messageID);
            if (choose > 6 || choose < 1) 
            return api.sendMessage("💶𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡🎀.", e.threadID, e.messageID); 
            api.unsendMessage(handleReply.messageID);
            if (msg == "🎋Chưa update...") {
                msg = "🎋Update soon...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}


module.exports.run = async ({  
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    var   t = Date.parse("February 1, 2022") - Date.parse(new Date()),
    d = Math.floor( t/(1000*60*60*24) ),
    h = Math.floor( (t/(1000*60*60)) % 24 ),
    m = Math.floor( (t/1000/60) % 60 );

    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            hours = Math.floor((time / (60000 * 60000 ))/24),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
        return api.sendMessage(`💎𝐁𝐚̣𝐧 đ𝐚̃ 𝐜𝐡𝐨̛𝐢 𝐫𝐨̂̀𝐢 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐪𝐮𝐚𝐲 𝐥𝐚̣𝐢 𝐬𝐚𝐮 𝐧𝐡𝐚́ <𝟑`, e.threadID, e.messageID); // Đoạn này ae có thể để quay lại sau ${housr}giờ ${minutes}phút ${seconds}giây
    }
    else {    
        var msg = {
            body: "🎋𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 𝐅𝐚𝐤𝐞🎋" +
                `\n🌸𝐍𝐠𝐚̀𝐲 𝐦𝐚̀ 𝐛𝐚̣𝐧 đ𝐨̂̉𝐢 𝐦𝐞̣̂𝐧𝐡 𝐜𝐨̀𝐧${d} 𝐧𝐠𝐚̀𝐲 ${h} 𝐠𝐢𝐨̛̀ ${m} 𝐩𝐡𝐮́𝐭` +
                "\n𝟏.   𝐓𝐚̀𝐢 💴 " +
                "\n𝟐.   𝐗𝐢̉𝐮 💶 " +
                `\n\n🧨𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐒𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣ đ𝐞̂̉ 𝐜𝐡𝐨̣𝐧 𝐓𝐚̀𝐢 𝐡𝐨𝐚̣̆𝐜 𝐗𝐢̉𝐮 .`,
                attachment: fs.createReadStream(__dirname + `/cache/tx.png`)}
                return api.sendMessage(msg,e.threadID,  (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: e.senderID,
            messageID: info.messageID
          })  
        })
    }
}
