const Discord = require("discord.js");

const cmd = {
    name: "forceskip",
    category: "Music",
    desc: "Skips the current song in the music queue, bypassing democracy.",
    usage: "forceskip",
    hidden: false,
    modonly: true,
    devonly: false,
    exec: function (opts = {}) {
        const {
            m = m,
            music = music,
            config = config,
            content_clean = content_clean,
            content_args = content_args,
            purple = purple,
            purplelog = purplelog
        } = opts;
        if (!m.guild || !m.member) {
            return m.channel.send(":no_entry: This command must be sent in a server!");
        }
        music.skip(m);
    }
}

module.exports = cmd;