const fs = require("fs");
module.exports.config = {
name: "Bạn là nhất",
	version: "1.0.1",
	description: "Bạn là nhất",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
	cooldowns: 5,
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "immom.mp4")) request("https://tinyurl.com/yesmty6e ").pipe(fs.createWriteStream(dirMaterial + "immom.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if ((event.body.indexOf("bot ngu")==0) || (event.body.indexOf("Bot ngu")==0) || (event.body.indexOf("Bot ngu vl")==0)) {
		var msg = {
				body: "Đã đéo biết dùng bot tao lại còn chửi :)?",
		attachment: fs.createReadStream(__dirname + `/noprefix/immom.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }