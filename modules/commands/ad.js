//Đĩ mẹ mày thằng ngu còn lắm mồm
module.exports.config = {
  name: "adm",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "dhp",
  description: "Xem thông tin admin bot",
  commandCategory: "Thông tin adminbot",
  usages: "adm",
  cooldowns: 10,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-1/s720x720/249151727_369135225002739_7871953261521330996_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=4wLPohPYdsUAX8V6zML&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-1.fna&oh=73a5db077afe480eee9b38e0a67701af&oe=619D44B5",
"https://media.giphy.com/media/AFdcYElkoNAUE/giphy.gif",
"https://media.giphy.com/media/YZX4FWwOJTK5W/giphy.gif",
"https://media.giphy.com/media/6SpbCkTjqmsKs/giphy.gif",
"https://media.giphy.com/media/3o85xkQFBFZGLecJry/giphy.gif",
"https://media.giphy.com/media/YZX4FWwOJTK5W/giphy.gif",
"https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-1/249205013_369125605003701_7083615349320287090_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=msNkAVz-iJQAX924Bfl&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-2.fna&oh=076274e39a0bc8c1a1cd5982bbb189a0&oe=619FA40A",
"https://i.pinimg.com/originals/5f/8f/35/5f8f35f1bbd00e354a0a071d06fcb2ce.gif",
"https://i.pinimg.com/originals/e8/10/c0/e810c0bb9b2b38e611b75426b733f9b5.gif",
"https://i.pinimg.com/originals/ca/3c/c9/ca3cc93647057e7ccce951ce0bd777f5.gif",
"https://media.giphy.com/media/mf4qECoTz8ZVK/giphy.gif",
    "https://media.giphy.com/media/AFdcYElkoNAUE/giphy.gif",
    "https://media.giphy.com/media/6U47YlEnJQNeb05Csh/giphy.gif",
    "https://media.giphy.com/media/YZX4FWwOJTK5W/giphy.gif",
    "https://media.giphy.com/media/TlDd1mxmPGQo/giphy.gif",
    "https://media.giphy.com/media/6SpbCkTjqmsKs/giphy.gif",
    "https://media.giphy.com/media/3o85xkQFBFZGLecJry/giphy.gif",
    "https://media.giphy.com/media/YZX4FWwOJTK5W/giphy.gif",
    "https://media.giphy.com/media/a6pzK009rlCak/giphy.gif",
    "https://i.pinimg.com/originals/1a/26/e5/1a26e51bfd0aa963e0a48618175a9836.gif",
    "https://i.pinimg.com/originals/5f/8f/35/5f8f35f1bbd00e354a0a071d06fcb2ce.gif",
    "https://i.pinimg.com/originals/e8/10/c0/e810c0bb9b2b38e611b75426b733f9b5.gif",
    "https://i.pinimg.com/originals/ca/3c/c9/ca3cc93647057e7ccce951ce0bd777f5.gif",
    "https://i.pinimg.com/originals/f8/ba/e3/f8bae313dbee24d67d29770508e8cedd.gif",
    "https://i.pinimg.com/originals/c4/3c/00/c43c005a8ad97b3a860a7464f3face97.gif",
    "https://i.pinimg.com/originals/88/21/b5/8821b5beb925737cecbf67b1e573fa2e.gif",
    "https://i.pinimg.com/originals/72/48/62/724862d06dfbb69beb0f21e4285d3575.gif",
    "https://i.pinimg.com/originals/fc/a6/1b/fca61b6693560a29210dd33dcd203f57.gif",
    "https://i.pinimg.com/originals/0f/2d/b8/0f2db86540afb15dd763a99b9a248baf.gif",
    "https://i.pinimg.com/originals/c6/9a/e2/c69ae2e4f239da4584b548b6dfe226ba.gif",
    "https://i.pinimg.com/originals/58/1f/c7/581fc7b69f373c3cc2be99f58a840cfd.gif",
    "https://i.pinimg.com/originals/be/e0/96/bee096e95d49eeb2e8539633388ca013.gif",
    "https://i.pinimg.com/originals/9e/91/fe/9e91feda4e8cf0c5ddad28ee53c07f50.gif",
    "https://i.pinimg.com/originals/f1/39/81/f13981f2dc628bbe208747caabdbddf3.gif",
    "https://i.pinimg.com/originals/42/3c/9a/423c9a21fc58034aae78b7ebc2b62673.gif",
    "https://media.giphy.com/media/1gOykJJoWktIkf2yuO/giphy.gif",
  ];
  var callback = () => api.sendMessage({body:`ABOUT ADMIN 
  👀 Tên: Nguyễn Văn Phước
  🙄 Sinh ngày: 13-01-2007
  💫 Chiều cao / cân nặng: Quên ròi
  💘 Mối quan hệ: Hẹn hò 
  🏠 Quê quán: Khánh hòa   
  🤔 Nơi ở : Nha TRang
  🌍 https://www.facebook.com/NVP.Vanphuoc/
  📲 Zalo: 058.6284.453`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
