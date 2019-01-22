const Discord = require("discord.js");
const fs = require("fs");

const purplelog = (() => {
    // if log folder doesn't exist, make it.
    if (!fs.existsSync("./pb_data/logs/")) {
        console.log("[STATUS] Creating logs folder...");
        fs.mkdirSync("./pb_data/logs/");
    }

    function retrieveEvents() {
        fs.exists("./pb_data/events.json", (exists) => {
            if (!exists) {
                // write inital data if events.json doesn't exist
                fs.writeFile("./pb_data/events.json", `{"questions":[],"quotes":[],"guilds":{}}`, {
                    flag: 'wx'
                }, (e) => {
                    if (e) throw err;
                    console.log("[STATUS] events.json created!");
                    return require("./pb_data/events.json");
                });
            } else {
                return require("./pb_data/events.json")
            }
        });
    }

    class eventBlock {
        constructor(details = {}) {
            const {
                type = "Default",
                content = "",
                date = new Date().toDateString(),
                author = {},
                guild = {},
                channel = {}
            } = details;
            this.type = type;
            this.content = content;
            this.date = date;
            this.author = author;
            this.guild = guild;
            this.channel = channel;
        }
    }

    class prologue {
        constructor(){
            this.events = retrieveEvents();
        }
        // base log command. Basically just console.log() except it logs to a file.
        log(content, server) {
            if (server) {
                server.name = server.name.replace(":", " ");
                fs.appendFile(`${__dirname}/pb_data/logs/pbot_${server.id}_${server.name}.log`, content + "\n", (err) => {
                    if (err) throw err;
                });
            }
            fs.appendFile(__dirname + '/pb_data/logs/purplelog.log', content + "\n", (err) => {
                if (err) throw err;
            });
            console.log(content);
        }
        event(text, type, msg) {
            const eventObj = new eventBlock({
                type: type,
                content: text,
                author: {
                    name: msg.author.username,
                    id: msg.author.id
                },
                guild: {
                    name: msg.guild.name,
                    id: msg.guild.id
                },
                channel: {
                    name: msg.channel.name,
                    id: msg.channel.id
                }
            });
            this.events[+ new Date()] = eventObj;
            fs.writeFile("./pb_data/events.json", this.events, (err) => {
                if (err) throw err;
                return true;
            });
        }
    }
    return new prologue();
});

module.exports = purplelog;