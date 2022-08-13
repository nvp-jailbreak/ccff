const fs = require("fs");
module.exports.config = {
	name: "Quẩy",
    version: "1.0.5",
	hasPermssion: 0,
	credits: "Module By NVP", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "QUẨY Cho Zui",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("quẩy")==0 || (event.body.indexOf("Quẩy")==0)) {
		var msg = {
				body: "Lênnnnnnnnnnn Đê AE 😹",
				attachment: fs.createReadStream(__dirname + `/noprefix/quẩy.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}