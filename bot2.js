var ServerID = "500591650507063296"; 
var ChannelID = "503653576216674307";
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));

function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);


client.on('message', message => {
	if(message.content === '1'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
	if(message.content === '2'){
        message.channel.send('#credit')
    }
});

client.on('message', message => {
	if(message.content === '3'){
        message.channel.send('#rep <@306464381775118336>')
    }
});

client.on('message', message => {
     if(message.content === '5'){
        message.member.voiceChannel.join();
    }
});



client.on('message', message => {
if(message.content.startsWith('2s')) {
if(message.author.id !== "420637382644072451") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});



client.login(process.env.BOT_TOKEN1);
