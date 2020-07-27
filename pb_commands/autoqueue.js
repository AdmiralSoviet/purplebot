const Discord = require("discord.js");

const cmd = {
    name: "autoqueue",
    category: "Music",
    desc: "If this is enabled, I'll add new songs to the queue when the last song ends.",
    usage: "autoqueue (Mod only)",
    hidden: false,
    modonly: true,
    devonly: false,
    exec: function (opts = {}) {
        const {
            m = m,
                purple = purple,
                content_args = content_args
        } = opts;
        if (!m.guild || !m.member) {
            return m.channel.send(":no_entry: This command must be sent in a server!");
        }
        purple.getGuild(m.guild.id).autoQueue = purple.getGuild(m.guild.id).autoQueue ? false : true;
        purple.saveStorage();
        m.channel.send(`:white_check_mark: Toggled to **${new String(purple.getGuild(m.guild.id).autoQueue).toUpperCase()}**`);
    }
}

module.exports = cmd;