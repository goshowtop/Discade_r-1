const Discord = require("discord.js");

const client = new Discord.Client();

//edit the prefix here
const prefix = "!"

//edit the server here
const server = "Nights Of Valor"

//invite link
const invitelink = "https://discord.gg/4suNThV"

/* ^^ constants
CaptainArc
ONLY RECOMEND CHANGES WHEN THEY ARE ISSUES
To Commit With Us, Contact BarredGalaxy on his Discord! [BarredGalaxy (Deprived Edition)]
________________________COMMITERS!_____________________________
(c) BarredGalaxy, NOV, Omanges, CapitanArc, Discade, DiscadeBOT
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
These people are the best.
lol
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

  console.log(`Thank You for using DISCADE For ` + server);

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
/* // Not needed
  if (!msg.content.indexOf('N', 0) && !msg.content.indexOf('O', 1) && !msg.content.indexOf('V', 2)) {
    client.channel.sendMessage(msg.channel, "Move To #offtopic Please");
  }
*/  

// ping

  if (msg.content.startsWith(prefix + "ping")) {

// pong 

    msg.reply('Pong!');

  }

  //invites.
  if (msg.content.startsWith(prefix + "invite") 
    msg.reply("Here is the invite link: " + invitelink);
  );
// Help Content

  if (msg.content.startsWith("help")) {

    // Replys with Intro Message

    msg.reply('**Welcome' + server + 's Discord!**');

// Individual Help.

    // markdown help

    msg.channel.sendMessage('To recive help with Discord Markdowns, Type `markdownhelp`.');

    // Voice help

    msg.channel.sendMessage('To recive help with Discord Voice Chat, Type `voicehelp`.');

    // Text Help

    msg.channel.sendMessage('To recive help with Discord Text Channels, Type `texthelp`.');

  }

// Markdown

  if (msg.content.startsWith("markdownhelp")) 
    client.sendMessage(message, "Test")

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

client.login('MjY0Mjc1NzIxMTM4OTk1MjA1.C0h1qg.1XGscybUWwrr0KMlkhK5w5kz2UA')
