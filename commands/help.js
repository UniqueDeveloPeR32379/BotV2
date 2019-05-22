module.exports.run = async (bot, message, args) => {
  
  // !restart
  await message.member.send('**General Commands** ```p!support, p!invite, p!say, p!ping ``` \n **Info Commands** ```p!avatar, p!uptime, p!serverinfo, p!userinfo, p!creator -, p!storage,p!info, p!help``` \n **Fun Commands** ```p!love, p!dadjoke, p!coin, p!8ball, p!dice, p!idk, p!amigay, p!clyde - could not be delivered``` \n **Moderation Commands** ```p!kick, p!ban, p!warn``` \n **Music Commands**   ```p!join``` \n **Beta Commands** ```p!filteron, p!filteroff, p!level``` \n Bot Made With ♥️ By 𝘗𝘖𝘞𝘌𝘙乡GZ#8605 ,Vegansloth ')
  
  message.channel.send({embed: {
  color: 3447003,
  description: "Success, I have sent my list of commands to your **direct messages** :incoming_envelope:!"
}});
    
}

module.exports.help = {
  name: "help"
}