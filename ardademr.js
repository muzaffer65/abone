const Discord = require("discord.js");
const client = new Discord.Client();
const express = require("express");
const app = express();
const {
    JsonDatabase
} = require("wio.db");
const db = new JsonDatabase("abonerolu");
const fs = require("fs");
                              //  ArdaDemr Youtube Kanalına ABONE ROL BOT ALTYAPISI
//Uptime için__________________________________________________________________
app.get("/", (req, res) => {
  res.send("ArdaDemr Discord Bot Altyapısı");
});
app.listen(process.env.PORT);

//KOMUT Algılayıcı______________________________________________________________
client.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./komutlar/${file}`);
    let cmdFileName = file.split(".")[0];
    console.log(`Komut Yükleme Çalışıyor: ${cmdFileName}`);
    client.commands.set(cmd.help.name, cmd);
  });
});
 //ArdaDemr Youtube Kanalına ABONE ROL BOT ALTYAPISI
//EVENTS Yükleyici_______________________________________________________________
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Etkinlik Yükleme Çalışıyor: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.on("ready", () => {
  console.log(`ArdaDemr Discord Bot Altyapısı BOT AKTİF`);
});

client.login(process.env.TOKEN);
// ArdaDemr Youtube Kanalına ABONE ROL BOT ALTYAPISI


client.on("message",message=>{
	  if(message.author.bot) return false;

  if(message.channel.id=="932263361310244894"){ 
  if(message.attachments.size < 1) return false;
  if(message.member.roles.cache.get("936204596815233124")) return false;
  let kod = "`" 
  
      message.react("934087701517467728"); // EMOJİ 1
      message.react("934087698757586975"); // EMOJİ 2
	    message.react("934087701785894933"); // EMOJİ 3
    
      message.reply(`attığın ss eğer **son video** değilse, **like**, **yorum**, **abone** yoksa ${kod}abone rolün verilmez.${kod}\nYetkililerimiz en kısa sürede ilgilenecektir. Lütfen bekleyin.`)
      const filter = (reaction, user) => {
        return message.guild.members.cache.get(user.id).roles.cache.has("936204596815233124")&&!user.bot;
      };
      const collector = message.createReactionCollector(filter, {});
  
      collector.on('collect', (reaction, user) => {

        if(reaction.emoji.name=="OnayPng"){ // EMOJİ 1
		if(message.member.roles.cache.get("933035986731028511")) return false;
          message.guild.member(message.author.id).roles.add("933035986731028511")
		  client.channels.cache.get("932263361310244894").send(`${message.author} isimli kullanıcıya ${kod}${user.tag}${kod} tarafından ${kod}ABONE${kod} rolü verildi.`); 
          
          
        }else if(reaction.emoji.name=="ReddetmekPng"){ // EMOJİ 2
          message.guild.member(message.author.id).roles.remove("933035986731028511")
		  client.channels.cache.get("932263361310244894").send(`${message.author} isimli kullanıcının ${kod}${user.tag}${kod} tarafından ${kod}ABONE${kod} rolü alındı.`); 
          
          
		}else if(reaction.emoji.name=="ListePng"){ // EMOJİ 3
		  client.channels.cache.get("932263361310244894").send(`${message.author} son video like yorum ve abone gerek.`);

      
        }
      });
    };
  });
