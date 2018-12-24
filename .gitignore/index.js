const discord = require('discord.js');
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = "/"; 

client.login(token)

client.on('message', message =>{

    var muteRole = client.guilds.get(message.guild.id).roles.find("name", "Gagnant !"); 

	if (message.content.toLocaleLowerCase() === `test`) {
  
member.addRole(muteRole).then((member) => {
        
    message.channel.send("GG");
    
            }).catch(() => {
        
                message.channel.send("Bravo tu as gagné !");
          
            });
          }
	
});
