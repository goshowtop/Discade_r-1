const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.login("MjY5MjY1MzAzMTk4ODkyMDMz.C1xTgw.n3VasOVSZJGVwJh0sVVCz3qGSOE");

let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));
const prefix = "-";
bot.on("ready", () => {
  bot.user.setGame('Points DEV Build Running')
  console.log('Systems Operational.')
});
bot.on("message", message => {
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