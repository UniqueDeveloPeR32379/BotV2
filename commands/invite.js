module.exports.run = async (bot, message, args) => {
  
  // !restart
  await message.channel.send('https://discordapp.com/oauth2/authorize?client_id=550238098617794570&permissions=8&scope=bot n\ Click Here To Invite Me')
  process.exit(1)
  
}

module.exports.help = {
  name: "invite"
}