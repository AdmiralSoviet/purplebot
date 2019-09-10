const Discord = require("discord.js");
const fs = require("fs");

const purplelog = (() => {
    // if log folder doesn't exist, make it.
    if (!fs.existsSync("./pb_data/logs/")) {
        console.log("[STATUS] Creating logs folder...");
        fs.mkdirSync("./pb_data/logs/");
    }
    class Entry {
        constructor(props = {}) {
            const {
                type = "INFO",
                    date = new Date().toLocaleString('en-GB'),
                    content = "Default message",
                    mute = false,
                    guild = false,
                    dontSaveToFile = false
            } = props;
            this.type = type;
            this.guild = guild;
            this.mute = mute;
            this.dontSaveToFile = dontSaveToFile;
            this.date = date;
            this.content = content;
        }
        get x() {
            return `${this.date} - ${this.type} - ${this.content}`;
        }
    }

    class Prologue {
        constructor(props = {}) {
            const {
                lastSection = ""
            } = props;
            this.lastSection = lastSection;
        }
        newSection(title, path) {
            const content = `   ${title}    `;
            if (path) {
                fs.appendFile(`${__dirname}/pb_data/logs/${path}`, content+"\n", (err) => {
                    if (err) throw err;
                });
            }
            this.logBasic(content);
        }
        // base log command. Basically just console.log() except it logs to a file.
        log(entry) {
            if (!(entry instanceof Entry)) {
                entry = new Entry({
                    content: entry
                });
            }
            if (!entry.dontSaveToFile) {
                if (entry.guild) {
                    entry.guild.name = entry.guild.name.replace(":", " ");
                    fs.appendFile(`${__dirname}/pb_data/logs/pbot_${entry.guild.id}_${entry.guild.name}.log`, entry.x + "\n", (err) => {
                        if (err) throw err;
                    });
                }
                fs.appendFile(__dirname + '/pb_data/logs/purplelog.log', entry.x + "\n", (err) => {
                    if (err) throw err;
                });
            }
            if (!entry.mute) {
                console.log(entry.x);
            }
        }
        logBasic(content) {
            fs.appendFile(__dirname + '/pb_data/logs/purplelog.log', content + "\n", (err) => {
                if (err) throw err;
            });
            console.log(content)
        }
        get Entry() {
            return Entry;
        }
    }
    return new Prologue();
})();

module.exports = purplelog;