module.exports.config = {
	name: "checkbot",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Phước(NVP)",
	description: "Checkbot Live",
	commandCategory: "Check Bot Sống",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`⚡️Bot Đang Chạy Rất OK⚡️`, event.threadID, event.messageID);