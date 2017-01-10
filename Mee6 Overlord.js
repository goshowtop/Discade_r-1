const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.login("MjY0Mjc1NzIxMTM4OTk1MjA1.C0h1qg.1XGscybUWwrr0KMlkhK5w5kz2UA");

let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));
const prefix = "-";

bot.on("message", message => {
  if(!message.content.startsWith(prefix)) return;
  if(message.author.bot) return;

  let userData = points[message.author.id];
  if(!userData) userData = {points: 0, level: 0};
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));  
  if(curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
    message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
  }

  if(message.content.startsWith(prefix + "level")) {
    message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
  }
  fs.writeFile('./points.json', JSON.stringify(points), (err) => {if(err) console.error(err)});
});