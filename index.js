/* eslint-disable no-console */

//Don't touch from here down unless you know partially what you're doing
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");


client.login(config.BOT_TOKEN).catch(console.error);
client.on('ready', () => {
  console.log('Now Online, ready to filter!');
});


client.on('message', message => {
  if(config.FILTER_LIST.some(word => message.content.toLowerCase().includes(word))){
    message.delete()
  }})
