const Discord = require("discord.js");
const fs = require("fs");

const purplelog = (() => {
    // if log folder doesn't exist, make it.
    if (!fs.existsSync("./pb_data/logs/")) {
        console.log("[STATUS] Creating logs folder...");
        fs.mkdirSync("./pb_data/logs/");
    }

    class prologue {
        // base log command. Basically just console.log() except it logs to a file.
        log(content, server, mute = true) {
            if (server) {
                server.name = server.name.replace(":", " ");
                fs.appendFile(`${__dirname}/pb_data/logs/pbot_${server.id}_${server.name}.log`, content + "\n", (err) => {
                    if (err) throw err;
                });
            }
            fs.appendFile(__dirname + '/pb_data/logs/purplelog.log', content + "\n", (err) => {
                if (err) throw err;
            });
            if(!mute){
                console.log(content);
            }
        }
    }
    return new prologue();
})();

module.exports = purplelog;