module.exports.config = { 
    name: "file",
    version: "1.0.1",
    hasPermssion: 2,
    credits: "JRT fix by Jukie~",
    description: "Xóa file hoặc folder trong thư mục commands",
    commandCategory: "Hệ thống admin-bot",
    usages: "Dùng file help để biết cách dùng",
    cooldowns: 5
};

module.exports.handleReply = ({ api, event, args, handleReply }) => {
    if(event.senderID != handleReply.author) return; 
    function _0xe6d5(){var _0x4d3624=['threadID','map','body','3975672rpqINx','[File📄]','messageID','362838XTIQSJ','statSync','fs-extra','rmdirSync','sendMessage','296ERvPAd','1392735lxEhpx','437080fVznIC','477011SsuNBa','split','files','1966564rXUVAF','unlinkSync','🍁Đã\x20xóa\x20các\x20file\x20sau\x20trong\x20thư\x20mục\x20commands:\x0a\x0a','10692KGayaV'];_0xe6d5=function(){return _0x4d3624;};return _0xe6d5();}var _0x2237a7=_0x2af3;(function(_0x124464,_0xbd3bd7){var _0x9c123a=_0x2af3,_0x3810a2=_0x124464();while(!![]){try{var _0x13b616=parseInt(_0x9c123a(0xd8))/0x1+-parseInt(_0x9c123a(0xd5))/0x2*(-parseInt(_0x9c123a(0xc9))/0x3)+-parseInt(_0x9c123a(0xdb))/0x4+parseInt(_0x9c123a(0xd6))/0x5+-parseInt(_0x9c123a(0xd0))/0x6+parseInt(_0x9c123a(0xd7))/0x7+-parseInt(_0x9c123a(0xcd))/0x8;if(_0x13b616===_0xbd3bd7)break;else _0x3810a2['push'](_0x3810a2['shift']());}catch(_0x2625ca){_0x3810a2['push'](_0x3810a2['shift']());}}}(_0xe6d5,0x485cd));var _0x915f=[_0x2237a7(0xd2),'\x20',_0x2237a7(0xd9),_0x2237a7(0xcc),'',_0x2237a7(0xcb),_0x2237a7(0xda),'/',_0x2237a7(0xd1),'isDirectory','[Folder🗂️]',_0x2237a7(0xd3),'isFile',_0x2237a7(0xce),_0x2237a7(0xdc),'\x0a',_0x2237a7(0xdd),_0x2237a7(0xca),_0x2237a7(0xcf),_0x2237a7(0xd4)];function _0x2af3(_0x3da80e,_0x394183){var _0xe6d5f2=_0xe6d5();return _0x2af3=function(_0x2af386,_0x4d9d71){_0x2af386=_0x2af386-0xc9;var _0x1a3e40=_0xe6d5f2[_0x2af386];return _0x1a3e40;},_0x2af3(_0x3da80e,_0x394183);}const fs=require(_0x915f[0x0]);var arrnum=event[_0x915f[0x3]][_0x915f[0x2]](_0x915f[0x1]),msg=_0x915f[0x4],nums=arrnum[_0x915f[0x5]](_0x333bd5=>{return parseInt(_0x333bd5);});for(let num of nums){var target=handleReply[_0x915f[0x6]][num-0x1],fileOrdir=fs[_0x915f[0x8]](__dirname+_0x915f[0x7]+target);if(fileOrdir[_0x915f[0x9]]()==!![]){var typef=_0x915f[0xa];fs[_0x915f[0xb]](__dirname+_0x915f[0x7]+target,{'recursive':!![]});}else{if(fileOrdir[_0x915f[0xc]]()==!![]){var typef=_0x915f[0xd];fs[_0x915f[0xe]](__dirname+_0x915f[0x7]+target);}};msg+=typef+_0x915f[0x1]+handleReply[_0x915f[0x6]][num-0x1]+_0x915f[0xf];};api[_0x915f[0x13]](_0x915f[0x10]+msg,event[_0x915f[0x11]],event[_0x915f[0x12]]);