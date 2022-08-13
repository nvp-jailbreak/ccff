const fs = require("fs");
module.exports.config = {
	name: "florentino",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "NVP", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Florentino",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("florentino")==0 || (event.body.indexOf("Florentino")==0)) {
		var msg = {
				body: "Tú Có Ny Trùm Buff Bẩn :))",
				attachment: fs.createReadStream(__dirname + `/noprefix/florentino.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}