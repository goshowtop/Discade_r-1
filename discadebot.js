const Discord = require("discord.js");

const client = new Discord.Client();

// ^^ constants

/*

GITHUB! >>> 
https://github.com/DiscadeBOT
OUR OFFICIAL BOT ACCOUNT!

Discade! A Bot By BarredGalaxy!
®BarredGalaxy

ALL SCRIPTS INTENDED FOR THE NIGHTS OF VALOR SERVER ONLY

Omanges, Please Please Please Don't Take This

*/

// Client Intro

// Game Setter

client.on('ready', () => {
  client.user.setGame('on NOV')


  // setgame message
/*   FOR FUTURE MESSAGE (auto changing.) 
  do{
    client.user.setGame('on NOV')
    } while (true)
*/
});

// Client Text

client.on('ready', () => {

  // Logged In

  console.log(`Logged in as ${client.user.username}!`);

  // Thank You

  console.log(`Thank You for using DISCADE.!`);

  // end

});

// Start-up

client.on("ready", () => {

// Copyright

  console.log('Discade Bot is ®BarredGalaxy');

});

// Saying 'Ping' Will Respond 'Pong'

client.on('message', msg => {

// If Success

  if(msg.author.bot) return;

// ping

  if (msg.content.startsWith("ping")) {

// pong 

    msg.reply('Pong!');

  }
// Help Content

  if (msg.content.startsWith("help")) {

    // Replys with Intro Message

  	msg.reply('**Welcome to Nights of Valor Discord!**');

// Individual Help.

    // markdown help

    msg.channel.sendMessage('To recive help with Discord Markdowns, Type `markdownhelp`');

    // Voice help

    msg.channel.sendMessage('To recive help with Discord Voice Chat, Type `voicehelp`');

    // Text Help

    msg.channel.sendMessage('To recive help with Discord Text Channels, Type `texthelp`');

  }

// Markdown

  if (msg.content.startsWith("markdownhelp")) 

  // message

  	msg.reply('Markdowns: ` *Italics* **Bold** ***Italic & Bold*** __Underline__ ~~Strikethrough~~ `');

// Text Chat

  if (msg.content.startsWith("texthelp")) 

    // Replys With Help

  	msg.reply('Text Chat help at Discords Website: https://support.discordapp.com/hc/en-us/categories/200404368-Text-Chat');

// Voice Help

  if (msg.content.startsWith("voicehelp")) 

    // Replys With Help

  	msg.reply('Voice Chat help at Discords Website: https://support.discordapp.com/hc/en-us/categories/200404367-Voice-Chat');

});

// TOKEN CLIENT ((The Bot's Soul (Password)))

client.login('i see you tryna steal')
