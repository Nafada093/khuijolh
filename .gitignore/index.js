const discord = require('discord.js');
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = "/"; 

client.login(token)

client.on('message', message =>{
	
var Gagnant = client.guilds.get(message.guild.id).roles.find("name", "Gagnant !");

	
if(message.content.toLocaleLowerCase() == ("test")){
message.delete()
 message.channel.send(`Bravo tu as gagné ! ${message.author} !`);
 message.guild.member(message.author).addRole(Gagnant);
 }
	
if(message.content.toLocaleLowerCase() !== ("test")){
  if (message.channel.id !== '526725449485910036') return;
message.delete()
}
	

	
	
	
});
