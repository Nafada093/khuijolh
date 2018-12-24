const discord = require('discord.js');
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = "/"; 

client.login(token)

client.on('message', message =>{
	
var TeamPirates = client.guilds.get(message.guild.id).roles.find("name", "Gagnant !");

	
if(message.content.toLocaleLowerCase() == ("test")){
 message.channel.send(`Bravo tu as gagné ! ${message.author} !`);
 message.guild.member(message.author).addRole(Gagnant);
 }
	
	
});
