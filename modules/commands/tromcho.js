var _0xc1e8=["\x63\x6F\x6E\x66\x69\x67","\x65\x78\x70\x6F\x72\x74\x73","\x74\x72\x6F\x6D\x63\x68\x6F","\x32\x2E\x30\x2E\x30","\x4E\x56\x50","","\x67\x65\x6E\x65\x72\x61\x6C","\x5B\x74\x61\x67\x5D"];module[_0xc1e8[1]][_0xc1e8[0]]= {name:_0xc1e8[2],version:_0xc1e8[3],hasPermssion:0,credits:_0xc1e8[4],description:_0xc1e8[5],commandCategory:_0xc1e8[6],usages:_0xc1e8[7],cooldowns:5,dependencies:{"\x61\x78\x69\x6F\x73":_0xc1e8[5],"\x66\x73\x2D\x65\x78\x74\x72\x61":_0xc1e8[5],"\x70\x61\x74\x68":_0xc1e8[5],"\x6A\x69\x6D\x70":_0xc1e8[5]}}

var _0x22f8=["\x6F\x6E\x4C\x6F\x61\x64","\x65\x78\x70\x6F\x72\x74\x73","\x70\x61\x74\x68","\x6E\x6F\x64\x65\x6D\x6F\x64\x75\x6C\x65","\x66\x73\x2D\x65\x78\x74\x72\x61","\x75\x74\x69\x6C\x73","\x2F\x63\x61\x63\x68\x65\x2F\x63\x61\x6E\x76\x61\x73\x2F","\x63\x61\x63\x68\x65\x2F\x63\x61\x6E\x76\x61\x73","\x74\x72\x6F\x6D\x63\x68\x6F\x2E\x70\x6E\x67","\x63\x61\x6E\x76\x61\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x56\x46\x65\x58\x4F\x77\x4A\x2E\x70\x6E\x67"];module[_0x22f8[1]][_0x22f8[0]]= async ()=>{const {resolve}=global[_0x22f8[3]][_0x22f8[2]];const {existsSync,mkdirSync}=global[_0x22f8[3]][_0x22f8[4]];const {downloadFile}=global[_0x22f8[5]];const _0x842cx1=__dirname+ `${_0x22f8[6]}`;const _0x842cx2=resolve(__dirname,_0x22f8[7],_0x22f8[8]);if(!existsSync(_0x842cx1+ _0x22f8[9])){mkdirSync(_0x842cx1,{recursive:true})};if(!existsSync(_0x842cx2)){ await downloadFile(_0x22f8[10],_0x842cx2)}}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let tromcho_img = await jimp.read(__root + "/tromcho.png");
    let pathImg = __root + `/tromcho_${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=443371487424505|cb7da2f464342f3e2e680301681ebfd7`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=443371487424505|cb7da2f464342f3e2e680301681ebfd7`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    tromcho_img.resize(500, 333).composite(circleOne.resize(70, 70), 221,19).composite(circleTwo.resize(87, 87), 45, 225);
    
    let raw = await tromcho_img.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);
    
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args }) {
    const fs = global.nodemodule["fs-extra"];
    const { threadID, messageID, senderID } = event;
    var mention = Object.keys(event.mentions)[0]
    let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
    else {
        var one = senderID, two = mention;
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "𝓧𝓲𝓷 𝓬𝓱𝓾́𝓬 𝓶𝓾̛̀𝓷𝓰 𝓮𝓶 👏 " + tag + '\n𝓔𝓶 𝓭𝓪̃ 𝓫𝓲̣ 𝓪𝓷𝓱 𝓵𝓸̂𝓲 𝓬𝓸̂̉ 𝓿𝓪̀ 𝓫𝓸̉ 𝓵𝓮̂𝓷 𝔁𝓮  👜 :)))',
            mentions: [{
          tag: tag,
          id: mention
        }],
     attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}