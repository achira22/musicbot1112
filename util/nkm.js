 exports.canModifyQueue = (member) => {
  const { channelID } = member.voice;
  const botChannel = member.guild.voice.channelID;

  if (channelID !== botChannel) {
    
    member.send("> **❗️ | You must be in the Same Voice Channel**");
    return;
  }

  return true;
  
};

let config;

try {
  config = require("../config.json");
} catch (error) {
  config = null;
}
