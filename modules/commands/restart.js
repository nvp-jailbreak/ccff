module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "manhIT",
	description: "Khởi động lại Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`chờ tau đi ẻ 😏`, threadID, () => process.exit(1));
}