const Discord = require("discord.js");
const fs = require("fs");
const ytdl = require("ytdl-core");
const yousearch = require("youtube-search");
const config = require("./pb_data/config");

const client = new Discord.Client();

const Purple = (() => {
    function retrieveStorageObj() {
        fs.exists("./pb_data/storage.json", (exists) => {
            if (!exists) {
                // write inital data if storage.json doesn't exist
                fs.writeFile("./pb_data/storage.json", `{"questions":[],"quotes":[],"guilds":{}}`, {
                    flag: 'wx'
                }, (e) => {
                    if (e) throw err;
                    console.log("[STATUS] storage.json created!");
                    return require("./pb_data/storage.json");
                });
            } else{
                return require("./pb_data/storage.json")
            }
        });
    }

    class purpleBase {
        constructor() {
            // generate command list
            let commandList = fs.readdirSync("./pb_commands");
            this.commands = {};
            this.pb_storage = retrieveStorageObj();
            for (let key of commandList) {
                try {
                    let cmd = require(`./pb_commands/${key}`);
                    this.commands[cmd.name] = cmd;
                    console.log(`Loaded '${cmd.name}' command...`);
                } catch (e) {
                    console.log(`[ERROR] Error Detected while loading command: ${e.toString()}`)
                }
            }
        }
        processArgs(cmdString, cmdName) {
            let product = {};
            product.contentsaid = cmdString.replace(config.prefix + cmdName, "");
            product.args = product.contentsaid.split(" ");
            return product;
        }
        getPermissions(msg) {
            if (!msg.guild || !msg.member) {
                return false;
            }
            const perms = {
                dev: false,
                mod: false
            };
            if (msg.author.id == config.devid) {
                perms.dev = true;
                perms.mod = true;
            }
            if (msg.channel.permissionsFor(msg.member).has("ADMINISTRATOR")) {
                perms.mod = true;
            }
            return perms;
        }
        processCmd(msg) {
            let cmd = msg.content.split(" ")[0];
            cmd = cmd.replace(config.prefix, "");
            let command = this.commands[cmd];
            if (!command) {
                console.log(`[ERROR] Unknown command detected (${config.prefix+cmd}).`)
                return false;
            };
            const perms = this.getPermissions(msg);
            // permission checking
            if ((command.modonly && !perms.mod) || (command.devonly && !perms.dev)) {
                msg.reply("Sorry, you don't have permission to do that...");
                return false;
            }
            const cmdArgs = this.processArgs(msg.content, command.name);
            command.exec({
                m: msg,
                config: config,
                client: client,
                content_clean: cmdArgs.contentsaid,
                content_args: cmdArgs.args,
                cmd_list: this.commands
            }); // execute the function
        }
    };

    return new purpleBase();
})();

// bot has successfully logged into discord
client.on("ready", () => {
    console.log(`[LOGIN] ${client.user.username} is now online...\n`)
});

client.on("messageDelete", (msg) => {
    console.log(`[MESSAGE] Message '${msg.content}' by ${msg.author.username} deleted.`);
});

// base logging and core command detection
client.on("message", (msg) => {
    console.log(`[${msg.channel.name}/${msg.channel.id}] ${msg.author.username}: ${msg.content}`);
    if (msg.embeds) {
        msg.embeds.forEach((x) => {
            console.log(`[EMBED] ${x.title}`);
        });
    }
    if (msg.attachments) {
        msg.attachments.tap((a) => {
            console.log(`[ATTACHMENT/${msg.author.username}] ${a.url}`)
        });
    }
    // command processing
    if (msg.content.startsWith(config.prefix)) {
        Purple.processCmd(msg);
    }
});

client.login(config.ltoken)
    .then(() => {
        client.user.setActivity(`${config.prefix}help`);
    });