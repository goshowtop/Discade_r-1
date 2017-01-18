const Discord = require("discord.js");

const client = new Discord.Client();

//edit the prefix here
const prefix = "-"

//edit the server here
const server = "Nights Of Valor"

//invite link
const invitelink = "https://discord.gg/4suNThV"

const n1 = "weareno1 "
var newUsers = new Discord.Collection();
const fs = require("fs");



/*
          Idea Area!
 = User Crates. (open a crate every minute and it has a random ammount of xp )
*/
let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));
client.on("ready", () => {
  console.log('Points Operational.')
});
client.on("message", message => {
  if(!message.content.startsWith(prefix)) return;
  if(message.author.bot) return;

  if(!points[message.author.id]) points[message.author.id] = {points: 0, level: 0};
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));  
  if(curLevel > userData.points) {
    // Level up!
    userData.level = curLevel;
    message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
  }

  if(message.content.startsWith(prefix + "points")) {
    message.reply(`You Currently Have ${userData.points} points.`);
  }
  fs.writeFile('./points.json', JSON.stringify(points), (err) => {if(err) console.error(err)});
});
//Magic 8 Ball thing


const answers = ["99%", "Maybe.", "Certainly not.", "I hope so.", "Not in your wildest dreams.", "There is a good chance.", "Quite likely.", "I think so.", "I hope not.", "I hope so.", "Never!", "Fuhgeddaboudit.", "Ahaha! Really?!?", "Pfft.", "Sorry, bucko.", "Hell, yes.", "Hell, to the na na.", "The future is bleak.", "The future is uncertain.", "I would rather not say.", "Who cares?", "Possibly.", "Never, ever, ever.", "There is a small chance.", "Yes!", "99%", "I Would bet on it.", "like\nmy\nstyle?"];
/*
exports.run = (client, msg) => {
  if (msg.content.endsWith("?")) {
    msg.reply(`🎱 ${answers[Math.floor(Math.random() * answers.length)]}`).catch(err => client.funcs.log(err.stack, "error"));
  } else {
    msg.reply("🎱 That doesn't look like a question, try again please.").catch(err => client.funcs.log(err.stack, "error"));
  }
};
exports.conf = {
  enabled: true,
  selfbot: false,
  guildOnly: false,
  aliases: ["8", "magic", "8ball", "mirror"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};
exports.help = {
  name: "magic8",
  description: "Magic 8-Ball, does exactly what the toy does. (Results may vary)",
  usage: "<query:str>",
  usageDelim: "",
};
*/







// lol
client.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Please welcome **${member.user.username}** to the **${msg.guild.name}**!`);
});
client.on('guildMemberRemove', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Aww.. Player **${member.user.username}** has __Left__ **${msg.guild.name}**!`);
});






// End of new things 
// Credit elsachance!


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

/*
Commands:
!ping 
test command
!help
recive help
!smiles
all the smiles
*/

/*
Update Log!
Game Display
Auto Changing
*/

// Client Intro

// Game Setter
//client.user.setAvatar('./avatar.png')


client.on('ready', () => {
  client.user.setGame('Say ' + prefix + 'help')
});



// Client Text


client.on('ready', () => {
/*
  client.user.setAvatar('./icons/avatar-normal.png')
*/
  // Logged In

  console.log('Logged in as ' + client.user.username);

  // Thank You

  console.log('Thank You for using DISCADE For ' + server);

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
  if (msg.content.startsWith(prefix + "invite")) {
    msg.reply(" https://discord.gg/4suNThV Use It Wisely on Your Travels!")
}
  if (msg.content.startsWith(prefix + "asl")) {
  let [age, sex, location] = msg.content.split(" ").slice(1);
  msg.reply(`Hello ${msg.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
}
  if (msg.content === prefix + 'skinstealer') {
    // send the user's avatar URL
    msg.channel.sendMessage("`" + prefix + "skinstealer` is currently in development. Please wait for this feature to arrive"/*client.??*/);
}
  if (msg.content.startsWith(prefix + "mc-user")) {
  let [username] = msg.content.split(" ").slice(1);
    msg.channel.sendMessage(" ", {embed: {
            color: 709360,
            author: {
                 name: "User Info For ${username}.",
                icon_url: "https://mcapi.ca/avatar/${username}"
            },
            description: "Bot Statistics... What do You Expect?",
        }});
}
/*
// Kick a single user in the mention
if (msg.content.startsWith(prefix + "skinstealer")) {
  // I'll make a code example on how to check if the user is allowed, one day!
    let userToKick = msg.mentions.users.first();
    //we need to get a *GuildMember* object, mentions are only users. Then, we kick!
    msg.guild.member.avatarURL((userToKick));
  // see I even catch the error!
}
*/
  if (msg.content.startsWith(prefix + "calc")) {
  let [what, pro, pro2] = msg.content.split(" ").slice(1);
  if (what === "m")
    msg.channel.sendMessage(Math.floor((pro) * (pro2)) + ", " + msg.author.username + "!");
  if (what === "d")
    msg.channel.sendMessage(Math.floor((pro) / (pro2)) + ", " + msg.author.username + "!");
  if (what === "a")
    msg.channel.sendMessage(Math.floor((pro) + (pro2)) + ", " + msg.author.username + "!");
  if (what === "s")
    msg.channel.sendMessage(Math.floor((pro) - (pro2)) + ", " + msg.author.username + "!");
  if (what === "")
    msg.channel.sendMessage("Please Enter Your Method. (Example: `-calculator m 1 1` `m` for multiplication, 1 1 for `1x1`.)");





}
  if (msg.content.startsWith(prefix + 'airhorn'))
    msg.member.voiceChannel.join()
     .then(connection => {
       msg.channel.sendMessage(':arrow_forward: Playing `Airhorn Sound`')
       connection.playFile('./Audio/airhorn.mp3')
       client.setTimeout(1)
     })
 .catch(console.error);



  if (msg.content.startsWith(prefix + "purge")) {
    msg.reply('???')
    msg.author.sweepMessages(100)
}
  if (msg.content.startsWith(prefix + 'botstats'))
    msg.channel.sendMessage(" ", {embed: {
            color: 7013413,
            author: {
                 name: "Bot Statistics",
                icon_url: ""
            },
            description: "Bot Statistics... What do You Expect?",
            fields: [
                {
                    inline: true,
                    name: "Ping!",
                    value: Math.round(msg.client.ping) + "ms"
                },
                {
                    inline: true,
                    name: "Uptime!",
                    value: [Math.floor((client.uptime / 1000) / 60)] + "m"
                }

            ]
        }});

// ping

  if (msg.content.startsWith(prefix + "ping")) {

// pong 
    msg.channel.sendMessage("My Current Ping Is " + Math.round(msg.client.ping) + "ms, " + msg.author.username + "!");
  }

// Markdown

  if (msg.content.startsWith(prefix + "markdownhelp")) 

  // message

    msg.author.sendMessage('Markdowns: ` *Italics* **Bold** ***Italic & Bold*** __Underline__ ~~Strikethrough~~ `');

// Text Chat

  if (msg.content.startsWith(prefix + "texthelp")) 

    // Replys With Help

    msg.author.sendMessage('Text Chat help at Discords Website: https://support.discordapp.com/hc/en-us/categories/200404368-Text-Chat');

// Voice Help

  if (msg.content.startsWith(prefix + "voicehelp")) 

    // Replys With Help

    msg.author.sendMessage('Voice Chat help at Discords Website: https://support.discordapp.com/hc/en-us/categories/200404367-Voice-Chat');

//emojis
  if (msg.content.startsWith(prefix + "2flip")) 
    // Replys With Msg
    msg.channel.sendMessage('┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻');
  if (msg.content.startsWith(prefix + "lenny")) 
    // Replys With Msg
    msg.channel.sendMessage('( ͡° ͜ʖ ͡°)');
  if (msg.content.startsWith(prefix + "fix")) 
    // Replys With Msg
    msg.channel.sendMessage('┬─┬﻿ ノ( ゜-゜ノ)');
  if (msg.content.startsWith(prefix + "madfix")) 
    // Replys With Msg
    msg.channel.sendMessage('┬─┬ノ(ಠ_ಠノ)');
  if (msg.content.startsWith(prefix + "cat")) 
    // Replys With Msg
    msg.channel.sendMessage('ʢ◉ᴥ◉ʡ');
  if (msg.content.startsWith(prefix + "happycat")) 
    // Replys With Msg
    msg.channel.sendMessage('( ✧ ᴥ ✧ )');
  if (msg.content.startsWith(prefix + "boi")) 
    // Replys With Msg
    msg.channel.sendMessage('ಠ_ಠ');
  if (msg.content.startsWith(prefix + "doh")) 
    // Replys With Msg
    msg.channel.sendMessage('ᗒ ͟ʖᗕ');
  if (msg.content.startsWith(prefix + "nerd")) 
    // Replys With Msg
    msg.channel.sendMessage('(⌐■_■)');
  if (msg.content.startsWith(prefix + "happy")) 
    // Replys With Msg
    msg.channel.sendMessage('^‿^');
  if (msg.content.startsWith(prefix + "fightmeweak")) 
    // Replys With Msg
    msg.channel.sendMessage('(ง^‸^)ง');
  if (msg.content.startsWith(prefix + "fightme")) 
    // Replys With Msg
    msg.channel.sendMessage('(ง • ⏠ • )ง');
  if (msg.content.startsWith(prefix + "gtfo")) 
    // Replys With Msg
    msg.channel.sendMessage('ᕕ( ಠ ⍘ ಠ )ᕗ');
  if (msg.content.startsWith(prefix + "smiles")) 
    // Replys With Msg
    msg.author.sendMessage('Here are the smiles: `2flip lenny fix madfix cat happycat boi doh nerd happy fightmeweak fightme gtfo` make sure to add a -');
  if (msg.content.startsWith(prefix + "askant")) 
    // Replys With Msg
    msg.reply(`:ant: ${answers[Math.floor(Math.random() * answers.length)]}`)

   // gifs

  if (msg.content.startsWith(prefix + "gif reported")) 
    // Replys With Msg
    msg.channel.sendMessage('https://giphy.com/gifs/valor-rengar-aqanybSxsr9cI ');
  if (msg.content.startsWith(prefix + "gif shotsfired")) 
    // Replys With Msg
    msg.channel.sendMessage('https://giphy.com/gifs/graphic-warning-kill-uTCAwWNtz7U2c ');
  if (msg.content.startsWith(prefix + "gif")) 
    // Replys With Msg
    msg.author.sendMessage('Gif List: `shotsfired` `reported` `shotsfired` `ban` `weareno1`');
  if (msg.content.startsWith(prefix + "gif vapor")) 
    // Replys With Msg
    msg.channel.sendMessage('https://giphy.com/gifs/cq8CpzBHucBeE');
  if (msg.content.startsWith(prefix + "gif ban")) 
    // Replys With Msg
    msg.channel.sendMessage('https://giphy.com/gifs/H99r2HtnYs492 ');
  if (msg.content.startsWith(prefix + "gif weareno1")) 
    // Replys With Msg
    msg.channel.sendMessage('https://giphy.com/gifs/mrw-remix-number-GAEl25uunNnHi ');

// We are Number One But 


  if (msg.content.startsWith(prefix + n1 + "but when someone takes a step, they turn into a trumpet mr. skeletal")) 
    // Replys With Msg
    msg.channel.sendMessage('https://www.youtube.com/watch?v=2GjYaZE9qn8');
  if (msg.content.startsWith(prefix + n1 + "but instead of making any kind of logical sense, it doesnt")) 
    // Replys With Msg
    msg.channel.sendMessage('https://www.youtube.com/watch?v=_oGEI31yfoc');
  if (msg.content.startsWith(prefix + n1 + "but each layer of audio plays at a different speed")) 
    // Replys With Msg
    msg.channel.sendMessage('https://www.youtube.com/watch?v=NBowZ22Je80');
  if (msg.content.startsWith(prefix + n1 + "but every one disables instruments until theyre all disabled, after which every one triggers an instrument to play on its own. At the last one, all instruments are brought back but the vocals are removed.")) 
    // Replys With Msg
    msg.channel.sendMessage('https://www.youtube.com/watch?v=NQLSiIU1eo8');
  if (msg.content.startsWith(prefix + n1 + "but every one is a different genre")) 
    // Replys With Msg
    msg.channel.sendMessage('https://www.youtube.com/watch?v=XxO5rAQGzjQ');
  if (msg.content.startsWith(prefix + n1 + "but when the song starts every instrument is off tempo")) 
    // Replys With Msg
    msg.channel.sendMessage('https://www.youtube.com/watch?v=68ESYJsxbC4');
  if (msg.content.startsWith(prefix + n1 + "but its idubbbz")) 
    // Replys With Msg
    msg.channel.sendMessage('https://www.youtube.com/watch?v=cVKQpr1pPjM');
  if (msg.content.startsWith(prefix + n1 + "but its borked by gabe the dog")) 
    // Replys With Msg
    msg.channel.sendMessage('https://www.youtube.com/watch?v=7dIetQFw-n4');
  if (msg.content.startsWith(prefix + n1 + "but this is sparta")) 
    // Replys With Msg
    msg.channel.sendMessage('https://www.youtube.com/watch?v=dJGCBNndLHc');
  if (msg.content.startsWith(prefix + n1 + "but its poorly recreated with 3d cgi")) 
    // Replys With Msg
    msg.channel.sendMessage('https://www.youtube.com/watch?v=LdrDLRmRlNk');
  if (msg.content.startsWith(prefix + n1 + "but its portal 2")) 
    // Replys With Msg
    msg.channel.sendMessage('https://www.youtube.com/watch?v=q2pQi5-x4dw');
  if (msg.content.startsWith(prefix + n1 + "but the word one triggers duplication and makes the video slow down + get louder")) 
    // Replys With Msg
    msg.channel.sendMessage('https://www.youtube.com/watch?v=txXQH978aug');
  if (msg.content.startsWith(prefix + "weareno1")) 
    //                                   list
    msg.author.sendMessage(n1 + ' List: `but when someone takes a step, they turn into a trumpet mr. skeletal` | `but each layer of audio plays at a different speed` | `We are number one but every one disables instruments until theyre all disabled, after which every one triggers an instrument to play on its own. At the last one, all instruments are brought back but the vocals are removed.` | `but every one is a different genre` | `but when the song starts every instrument is off tempo` | `but its idubbbz` | `but its borked by gabe the dog` | `but this is sparta` | `but its poorly recreated with 3d cgi` | `but its portal 2` | `but the word one triggers duplication and makes the video slow down + get louder` | `plays four times and every one speeds them up by 10%`');
  if (msg.content.startsWith(prefix + n1 + "easteregg")) 
    // Replys With Msg
    msg.channel.sendMessage('https://www.youtube.com/watch?v=IdzI3tmvrCc');
  if (msg.content.startsWith(prefix + n1 + "plays four times and every one speeds them up by 10%")) 
    msg.channel.sendMessage('https://www.youtube.com/watch?v=Odf-s7hlDqg')
    // Replys With Msg
  // Credits
  if (msg.content.startsWith(prefix + "credits")) 
    // Replys With Msg
    msg.channel.sendMessage('**Discade** `bot` is a bot by players <@241330918722109441> and <@232158121542418442>. The bot was originally made for server Nights of Valor. If you would like to help in the development of **Discade**, please PM us. (BarredGalaxy#6811 & CapitanArc#1973)');
  if (msg.content.startsWith("bee")) 
    // Replys With Msg
    msg.channel.sendMessage('You like jazz?');
  if (msg.content.startsWith("kys")) 
    // Replys With Msg
    msg.channel.sendMessage("Don't");
  if (msg.content.startsWith("omanges")) 
    // Replys With Msg
    msg.channel.sendMessage('Omanges is probably vaping RN soooo.....');
  if (msg.content.startsWith("owners")) 
    // Replys With Msg
    msg.channel.sendMessage('These people are Crazy!');
  if (msg.content.startsWith("2016")) 
    // Replys With Msg
    msg.channel.sendMessage('Watch your mouth, kid.');
  if (msg.content.startsWith("undertale")) 
    // Replys With Msg
    msg.channel.sendMessage("it's a beautiful day outside. birds are singing, flowers are blooming... on days like these, kids like you... \n`S h o u l d   b e   b u r n i n g   i n   h e l l . `");
  if (msg.content.startsWith("trump")) 
    // Replys With Msg
    msg.channel.sendMessage('Bing, Bing, Bong!');
  if (msg.content.startsWith("pet1")) 
    // Replys With Msg
    msg.channel.sendMessage('You barely lifted your hand and Lesser Dog got excited.');
  if (msg.content.startsWith("pet2")) 
    // Replys With Msg
    msg.channel.sendMessage("You lightly touched the Dog. It's already overexcited...");
  if (msg.content.startsWith("pet3")) 
    // Replys With Msg
    msg.channel.sendMessage('You pet the Dog. It raises its head up to meet your hand.');
  if (msg.content.startsWith("barredgalaxy")) 
    // Replys With Msg
    msg.channel.sendMessage('Beep Beep. Barred `bot` Booting up...');
  if (msg.content.startsWith("memes")) 
    // Replys With Msg
    msg.channel.sendMessage('two to the one to the one to the three');
  if (msg.content.startsWith("dj khaled")) 
    // Replys With Msg
    msg.channel.sendMessage('Anotha one.');
  if (msg.content.startsWith("4chan")) 
    // Replys With Msg
    msg.channel.sendMessage('https://4chan.org/');
  if (msg.content.startsWith("discade")) 
    // Replys With Msg
    msg.channel.sendMessage('http://discadebot.ml/');
  if (msg.content.startsWith("discord")) 
    // Replys With Msg
    msg.channel.sendMessage('http://discordapp.com/');
  if (msg.content.startsWith("krysllio")) 
    // Replys With Msg
    msg.channel.sendMessage('Tech Support, How could I help you?');
  if (msg.content.startsWith("jakes")) 
    // Replys With Msg
    msg.channel.sendMessage('A Developing Lizard Appears');
  if (msg.content.startsWith("<@199834939863072778>")) 
    // Replys With Msg
    msg.channel.sendMessage('Ｊ Ａ Ｋ Ｅ Ｓ    Ｔ Ｏ Ｒ Ｎ Ａ Ｄ Ｏ');
  if (msg.content.startsWith("<@265034938301022208>")) 
    // Replys With Msg
    msg.channel.sendMessage(":heart: The Best Developer! :heart: *that won't tell me how to color message.* (╯°□°）╯︵ ┻━┻");
  if (msg.content.startsWith("(╯°□°）╯︵ ┻━┻")) 
    // Replys With Msg
    msg.channel.sendMessage('┬─┬﻿ ノ( ゜-゜ノ)');
  if (msg.content.startsWith("Mmmm")) 
    // Replys With Msg
    msg.channel.sendMessage('Player HelloImJake Detected.');
  if (msg.content.startsWith("Mmm")) 
    // Replys With Msg
    msg.channel.sendMessage('Player HelloImJake Detected.');
  if (msg.content.startsWith("mmmm")) 
    // Replys With Msg
    msg.channel.sendMessage('Player HelloImJake Detected.');
  if (msg.content.startsWith("mmm")) 
    // Replys With Msg
    msg.channel.sendMessage('Player HelloImJake Detected.');
  if (msg.content.startsWith(prefix + 'help'))
    msg.channel.sendMessage("", {embed: {
            color: 3398526,
            author: {
                 name: "Help Menu for Discade!",
                icon_url: ""
            },
            description: "Need Help? i got you fam :wink:",
            fields: [
                {
                    inline: true,
                    name: "`-markdownhelp`",
                    value: "Recive Help with Markdowns."
                },
                {
                    inline: true,
                    name: "`-voicehelp`",
                    value: "Recive Help With Voice Channels."
                },
                {
                    inline: true,
                    name: "`-texthelp`",
                    value: "Recive Help With Text Channels."
                },
                {
                    inline: true,
                    name: "`-gif`",
                    value: "Just a Bunch of Random Gifs that I thought were Funny."
                },
                {
                    inline: true,
                    name: "`-smiles`",
                    value: "Just a Bunch of Smiles. (Lennys)"
                },
                {
                    inline: true,
                    name: "`-weareno1`",
                    value: "We Are Number Meme Selector.."
                },       
                {
                    inline: true,
                    name: "`-skinstealer`",
                    value: "Steal Your Friend's Cool Discord Icon!"
                },                           
                {
                    inline: true,
                    name: "`-askant`",
                    value: "Have Fun With Discade's Super Knowledgable ant!!"
                },     
                {
                    inline: true,
                    name: "**More Coming Soon!**",
                    value: "Watch For More Fun"
                }     

            ]
        }});
  if (msg.content.startsWith('embeded'))
    msg.channel.sendMessage("", {embed: {
            color: 2012323,
            author: {
                 name: "Like This!",
                icon_url: ""
            },
            description: "",
            fields: [
            ]
        }});
// OWNER COMMANDS
  if (msg.content.startsWith(prefix + 'ts3'))
    msg.channel.sendMessage("", {embed: {
            color: 2012323,
            author: {
                 name: "Team Speak 3 Server.",
                icon_url: "http://www.teamspeak.com/assets/logos/teamspeak_small.png"
            },
            description: "ts3.NightsOfValor.com",
            fields: [
            ]
        }});
  
  if (msg.content.startsWith(prefix + 'ip'))
    msg.channel.sendMessage("", {embed: {
            color: 2211545,
            author: {
                 name: "Minecraft Server IP.",
                icon_url: "http://img10.deviantart.net/9cc9/i/2011/008/6/1/minecraft_hd_icon___mac___pc_by_hunterkharon-d36qrs5.png"
            },
            description: "play.NightsOfValor.com",
            fields: [
            ]
        }});





/*
Add Command Format
  if (msg.content.startsWith(prefix + "command")) 
    // Replys With Msg
    msg.channel.sendMessage('Message');
*/
  
  
});

// TOKEN CLIENT ((The Bot's Soul (Password)))

client.login('no no no no')
/*
https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=setTimeout
setTimeout(() => do something, 1)
*/
