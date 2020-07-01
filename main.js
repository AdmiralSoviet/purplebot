const Discord = require("discord.js");
const fs = require("fs");
const config = require("./pb_data/config");
const purplelog = require("./purplelog.js");

const client = new Discord.Client();

const Purple = (() => {
    function generateStorage() {
        if (!fs.existsSync("./pb_data/storage.json")) {
            // write inital data if storage.json doesn't exist
            fs.writeFile("./pb_data/storage.json", `{"questions":[],"quotes":[],"guilds":{}}`, {
                flag: 'wx'
            }, (e) => {
                if (e) throw e;
                console.log("[STATUS] storage.json created!");
            });
            return {
                questions: [],
                quotes: [],
                guilds: {}
            };
        } else {
            return JSON.parse(fs.readFileSync("./pb_data/storage.json", "utf-8"));
        }
    }

    class purpleBase {
        constructor() {
            // generate command list
            let commandList = fs.readdirSync("./pb_commands");
            this.pb_storage = generateStorage(); // get storage.json
            this.commands = {};
	    this.client = client;
            for (let key of commandList) {
                try {
                    let cmd = require(`./pb_commands/${key}`);
                    this.commands[cmd.name] = cmd;
                    purplelog.logBasic(`Loaded '${cmd.name}' command...`);
                } catch (e) {
                    purplelog.log(new purplelog.Entry({
                        content: `Error Detected while loading command: ${e.toString()}`,
                        type: "ERROR"
                    }));
                }
            }
        }
        saveStorage() {
            fs.writeFile("./pb_data/storage.json", JSON.stringify(this.pb_storage), (err) => {
                if (err) throw err;
                console.log("Content saved successfuly!");
            });
        }
        processArgs(cmdString, cmdName) {
            let product = {};
            product.contentsaid = cmdString.replace(cmdName, "");
            product.args = product.contentsaid.split(" ");
            return product;
        }
        getGuild(id) {
            if (!this.pb_storage.guilds[id]) {
                this.pb_storage.guilds[id] = {
                    users: {},
                    songs: []
                };
                this.saveStorage();
                purplelog.log(`Wrote new guild to storage.json (${id})`);
            }
            return this.pb_storage.guilds[id];
        }
        getPermissions(msg) {
            /* if (!msg.guild || !msg.member) {
                return false;
            } */
            const perms = {
                dev: false,
                mod: false
            };
            if (msg.author.id == config.devid) {
                perms.dev = true;
                perms.mod = true;
            }
            if (msg.guild) {
                if (msg.channel.permissionsFor(msg.member).has("ADMINISTRATOR")) {
                    perms.mod = true;
                }
            }
            return perms;
        }
        processCmd(msg) {
            msg.content = msg.content.replace(config.prefix, "");
            let cmd = msg.content.split(" ")[0];
            let command = this.commands[cmd];
            if (!command) {
                purplelog.log(new purplelog.Entry({
                    content: `Unknown command detected (${config.prefix+cmd})`,
                    guild: msg.guild,
                    type: "WARN"
                }));
                return false;
            };
            if (msg.author.id == client.user.id) {
                purplelog.log(new purplelog.Entry({
                    content: `bot almost self-executed a command!`,
                    guild: msg.guild,
                    type: "WARN"
                }));
                return false;
            }
            const perms = this.getPermissions(msg);
            // permission checking
            if ((command.modonly && !perms.mod) || (command.devonly && !perms.dev)) {
                msg.reply("sorry but no");
                return false;
            }
            const cmdArgs = this.processArgs(msg.content, command.name);
            command.exec({
                m: msg,
                config: config,
                client: client,
                content_clean: cmdArgs.contentsaid,
                content_args: cmdArgs.args,
                cmd_list: this.commands,
                purplelog: purplelog,
                music: PurpleMusic,
                purple: this
            }); // execute the function
        }
    };

    return new purpleBase();
})();
const PurpleMusic = require("./purple_music.js")(Purple); // load music

// bot has successfully logged into discord
client.on("ready", () => {
    //purplelog.log(`[INFO] ${new Date().toLocaleString('en-GB')}: ${client.user.username} is now online...`, undefined, false)
    purplelog.log(new purplelog.Entry({
        content: `${client.user.username} is now online...`
    }));
});

client.on("messageDelete", (msg) => {
    //purplelog.log(`[WARN] ${new Date().toLocaleString('en-GB')}: Message '${msg.content}' by ${msg.author.username} deleted.`, msg.guild, false);
    purplelog.log(new purplelog.Entry({
        type: "WARN",
        content: `Message '${msg.content}' by ${msg.author.username} deleted.`,
        guild: msg.guild
    }));
});

client.on("error", (err) => {
    purplelog.log(err.toString());
});

// base logging and core command detection
client.on("message", (msg) => {
    // make a new section if a message is sent in a new channel/guild
    if (msg.guild) {
        if (purplelog.lastSection != `Server:${msg.guild.name} - Channel:${msg.channel.name}`) {
            purplelog.lastSection = `Server:${msg.guild.name} - Channel:${msg.channel.name}`;
            purplelog.newSection(`Server:${msg.guild.name} - Channel:${msg.channel.name}`, `pbot_${msg.guild.id}_${msg.guild.name}.log`);
        }
    }
    if (msg.author.id == client.user.id) // if purplebot sends a message, log it seperatly
        purplelog.log(new purplelog.Entry({
            content: `[BOT]${msg.author.username}: ${msg.content}`,
            type: "MESSAGE",
            guild: msg.guild
        }));
    if (msg.embeds) {
        msg.embeds.forEach((x) => {
            if (msg.author.id == client.user.id) // if purplebot sends a message, log it seperatly
                purplelog.log(new purplelog.Entry({
                    content: x.title,
                    type: "EMBED",
                    guild: msg.guild
                }));
        });
    }
    if (msg.attachments) {
        msg.attachments.tap((a) => {
            if (msg.author.id == client.user.id) // if purplebot sends a message, log it seperatly
                purplelog.log(new purplelog.Entry({
                    content: a.url,
                    type: "ATTACHMENT",
                    guild: msg.guild
                }));
        });
    }
    // if bot is mentioned
    if (msg.mentions.has(client.user, {ignoreEveryone: true})) {
        purplelog.log(new purplelog.Entry({
            content: `${msg.author.username}: ${msg.content}`,
            type: "MENTION",
            guild: msg.guild
        })); // if a user runs a bot command, log that.
        if (msg.content.toLowerCase().includes("chance")) {
            msg.channel.send(`I'd give it a ${Math.floor(Math.random() * 100)+1}% chance tbh`);
        } else if (msg.content.includes("?")) {
            const yes = ["Yes", "Yep", "Yeah", "Yup", "Ye"];
            const no = ["No", "Nope", "Nah", "Nup", "lol no"];
            const idk = ["I have no clue, my dude", "idk", "Dunno", "¯\\_(ツ)_/¯"];
            const chosen = [yes, no, idk][Math.floor(Math.random() * 3)];
            msg.channel.send(chosen[Math.floor(Math.random() * chosen.length)]);
        } else if (msg.content.toLowerCase().includes("thank") && !msg.content.toLowerCase().includes("thanksgiving")) {
            const thanks = ["No problem", "Happy to help ;^)", ":heart:", "Not like I have any choice :robot:"];
            msg.channel.send(thanks[Math.floor(Math.random() * thanks.length)]);
        } else {
            const rep = [":eggplant:", ":eyes:", ":robot:", ":heart:", "wow", "no u", ":thinking:"];
            msg.guild.emojis.cache.random(rep.length).forEach((v) => {
                if (v.animated)
                    return false;
                purplelog.log(new purplelog.Entry({
                    content: `Added ${v.toString()} to possible responses.`,
                    guild: msg.guild
                }));
                rep.push(v.toString());
            });
            msg.channel.send(rep[Math.floor(Math.random() * rep.length)]);
        }
        return true;
    }
    // command processing
    if (msg.content.startsWith(config.prefix)) {
        purplelog.log(new purplelog.Entry({
            content: `${msg.author.username}: ${msg.content}`,
            type: "MESSAGE",
            guild: msg.guild
        }));
        Purple.processCmd(msg);
    }
});

client.login(config.ltoken)
    .then(() => {
        client.user.setActivity(`${config.prefix}help`);
    });
