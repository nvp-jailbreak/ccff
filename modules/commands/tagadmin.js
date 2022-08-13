const fs = require('fs');
const moment = require('moment-timezone');
module.exports.config = {
    name: "tagadmin", // Tên lệnh, được sử dụng trong việc gọi lệnh
    version: "1.0.0", // phiên bản của module này
    hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
    credits: "hi<@shibaSama>", // TruongMini
    description: "Tag!!", // Thông tin chi tiết về lệnh
    commandCategory: "Tag!!", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
    usages: "[msg]", // Cách sử dụng lệnh
    cooldowns: 5 // Thời gian một người có thể lặp lại lệnh
};

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads, args }) {
    const { threadID, messageID, body } = event;
    switch (handleReply.type) {
        case "tagadmin": {
            let name = await Users.getNameUser(handleReply.author);
            api.sendMessage(`${body}\n\nTừ Admin ${name}`, handleReply.threadID, (err, info) => {
                if(err) console.log(err)
                else {
                    global.client.handleReply.push({
                        name: this.config.name,
                        type: "reply",
                        messageID: info.messageID,
                        messID: messageID,
                        threadID
                    })
                }
            }, handleReply.messID);
            break;
        }
        case "reply": {
            let name = await Users.getNameUser(event.senderID);
            api.sendMessage(`${body}\n\nTừ ${name || "Người dùng facebook"} ở nhóm ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`, handleReply.threadID, (err, info) => {
                if(err) console.log(err)
                else {
                    global.client.handleReply.push({
                        name: this.config.name,
                        type: "tagadmin",
                        messageID: info.messageID,
                        messID: messageID,
                        threadID
                    })
                }
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.handleEvent = async ({ api, event, Users, Threads, args }) => {
    const { threadID, messageID, body, mentions, senderID } = event;
    let path = __dirname + "/cache/tagadmin.json";
    if(!fs.existsSync(path)) fs.writeFileSync(path, "{}");
    let data = JSON.parse(fs.readFileSync(path));
    if(!data[threadID]) data[threadID] = true;
    if(!mentions || !data[threadID]) return;
    let mentionsKey = Object.keys(mentions);
    let allAdmin = global.config.ADMINBOT;
    mentionsKey.forEach(async (each) => {
        if(each == api.getCurrentUserID()) return;
        if(allAdmin.includes(each)) {
            let userName = await Users.getNameUser(senderID);
            let threadName = await Threads.getInfo(threadID).threadName;
            api.sendMessage(`==[ Tag Admin ]==\nTên: ${userName}\nTừ nhóm: ${threadName}\nNội dung: ${body}\nThời gian: ${moment().tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY-HH:mm:ss")}`,each, (err, info) => {
                if(err) console.log(err)
                else {
                    global.client.handleReply.push({
                        name: this.config.name,
                        type: "tagadmin",
                        messageID: info.messageID,
                        messID: messageID,
                        author: each,
                        threadID
                    })
                }
            })
        }
    })
    fs.writeFileSync(path, JSON.stringify(data, null, 4));
}

module.exports.run = async ({ api, event, args }) => {
    const { threadID } = event;
    let path = __dirname + "/cache/tagadmin.json";
    if(!fs.existsSync(path)) fs.writeFileSync(path, "{}");
    let data = JSON.parse(fs.readFileSync(path));
    if(!data[threadID]) data[threadID] = true;
    if(args[0] == "off") data[threadID] = false;
    else if(args[0] == "on") data[threadID] = true;
    else return api.sendMessage("SECHHHHH", event.threadID);
    fs.writeFileSync(path, JSON.stringify(data, null, 4));
    return api.sendMessage(`Tag Admin đã được ${data[threadID] ? "bật" : "tắt"}`, threadID);
}