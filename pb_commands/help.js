const Discord = require("discord.js");

const cmd = {
    name: "help",
    category: "General",
    desc: "Prints a list of commands!",
    usage: "help",
    hidden: false,
    modonly: false,
    devonly: false,
    exec: function (opts = {}) {
        const {
            m = m,
            client = client,
            config = config,
            cmd_list = cmd_list
        } = opts;

        let helplist = {};
        for (let property in cmd_list) {
            if (cmd_list.hasOwnProperty(property)) {
                if (!helplist[cmd_list[property].category]) {
                    helplist[cmd_list[property].category] = new Discord.MessageEmbed();
                    helplist[cmd_list[property].category].setTitle("List of " + cmd_list[property].category + " Commands");
                    helplist[cmd_list[property].category].setColor("RANDOM");
                    helplist[cmd_list[property].category].setThumbnail(client.user.avatarURL);
                    helplist[cmd_list[property].category].setTimestamp();
                }
                if (!cmd_list[property].hidden) {
                    helplist[cmd_list[property].category].addField(config.prefix + cmd_list[property].usage, cmd_list[property].desc);
                }
            }
        }
        for (let property in helplist) {
            if (helplist.hasOwnProperty(property)) {
                m.channel.send(helplist[property]);
            }
        }
    }
}

module.exports = cmd;