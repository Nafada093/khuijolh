const discord = require('discord.js');
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = "/"; 

client.login(token)

client.on('message', message =>{

    var muteRole = client.guilds.get(message.guild.id).roles.find("name", "Gagnant"); 

	if (message.content.toLocaleLowerCase() === `/help`) {
  
member.addRole(muteRole).then((member) => {
        
    client.channels.get('424991281458970645').send({embed: mutelogs})
    
            }).catch(() => {
        
                message.channel.send("Tu n'as pas la permission ! ");
          
            });
          }
