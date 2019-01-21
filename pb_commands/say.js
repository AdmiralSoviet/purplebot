const Discord = require("discord.js");

const cmd = {
    name: "say",
    category: "General",
    desc: "Makes the bot echo what the user says.",
    usage: "say <arg>",
    modonly: true,
    devonly: false,
    exec: function (opts = {}) {
        const {
            m = m,
            content_clean = content_clean
        } = opts;
        m.delete();
        m.channel.send(content_clean);
    }
}

module.exports = cmd;