const fs = require("fs");
module.exports.config = {
	name: "buồn",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "NVP", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "buồn",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("buồn")==0 || (event.body.indexOf("Buồn")==0)) {
		var msg = {
				body: "Cần Gì Phải Buồn 👍",
				attachment: fs.createReadStream(__dirname + `/noprefix/buon.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}