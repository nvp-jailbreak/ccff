module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Binee",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinMp4");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinMp4");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}
module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Bot NVP" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`🔰𝙆𝙀𝙏 𝙉𝙊𝙄 𝙏𝙃𝘼𝙉𝙃 𝘾𝙊𝙉𝙂🔰\n\n◆━━━━━━━━━━━◆\n\n💓🍀𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 /𝐦𝐞𝐧𝐮 đ𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝗹𝗲̣̂𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗼𝘁. 𝗖𝗮̉𝗺 𝗼𝗻 𝗯𝗮̣𝗻 𝗱𝗮̃ 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘁 𝗰𝘂̉𝗮 𝑵𝑽𝑷💞\n\n------------------------------\n\n𝗖𝗵𝘂́𝗰 𝗖𝗮́𝗰 𝗕𝗮̣𝗻 𝗧𝗿𝗮̉𝗶 𝗡𝗴𝗵𝗶𝗲̣̂𝗺 𝗕𝗼𝘁 𝗩𝘂𝗶 𝗩𝗲̉🤩🍃 𝗩𝗮̀ 𝗞𝗵𝗼̂𝗻𝗴 𝗦𝗽𝗮𝗺 + 𝗔̉𝗻𝗵 𝟭𝟴+, 𝗖𝗵𝘂̛̉𝗶 𝗕𝗼𝘁,…𝗣𝗵𝗮́ 𝗕𝗼𝘁 𝗗𝘂̛𝗼̛́𝗶 𝗠𝗼̣𝗶 𝗛𝗶̀𝗻𝗵 𝗧𝗵𝘂̛́𝗰, 𝗠𝗮̃𝗶 𝗜𝘂 𝗢𝘄𝗢 💗`, attachment: fs.createReadStream(__dirname + "/cache/joinMp4/join.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `join.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "💗𝙃𝙚𝙡𝙡𝙤 𝙘𝙤𝙣 𝙫𝙤̛̣ {name}💗 \n🐳𝘾𝙝𝙖̀𝙤 𝙢𝙪̛̀𝙣𝙜 đ𝙖̃ đ𝙚̂́𝙣 𝙫𝙤̛́𝙞 {threadName}\n{type} 𝙡𝙖̀ 𝙩𝙝𝙖̀𝙣𝙝 𝙫𝙞𝙚̂𝙣 𝙩𝙝𝙪̛́ {soThanhVien} 𝙘𝙪̉𝙖 𝙣𝙝𝙤́𝙢. 𝙏𝙪̛𝙤̛𝙣𝙜 𝙩𝙖́𝙘 𝙣𝙝𝙞𝙚̂̀𝙪 𝙫𝙖̀𝙤 𝙣𝙝𝙖 𝙠𝙝𝙤̂𝙣𝙜 𝙡𝙖̀ 𝙖̆𝙣 𝙠𝙞𝙘𝙠 đ𝙖̂́𝙮 🍀" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}