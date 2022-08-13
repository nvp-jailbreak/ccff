module.exports.config = {
  name: "thính",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "RegKo vs NVP",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "ig",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const fetch = global.nodemodule["node-fetch"];
  const request = require('request');
  const res = await axios.get(`https://api-kanekidz.herokuapp.com/poem`);
  var poem = res.data.data;
  const fs = require("fs");
  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const timeStart = Date.now();
  axios.get('https://api-kanekidz.herokuapp.com/gai').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
      api.sendMessage({
        body: `💚𝐂𝐚̂𝐮 𝐓𝐡𝐢́𝐧𝐡💗\n\n🐋────🌺NVP────🦄\n\n💟 𝙏𝙝𝙞́𝙣𝙝 : ${poem}\n\n🎀───NVP───🎀\n\n[🍁NVP🦋]\n`,
        attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
    };
    request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
  })
}
