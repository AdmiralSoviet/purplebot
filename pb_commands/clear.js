const Discord = require("discord.js");

const cmd = {
    name: "clear",
    category: "Music",
    desc: "Clears the music queue.",
    usage: "clear",
    hidden: false,
    modonly: false,
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
            return m.channel.send("This command must be sent in a server!");
        }
        const voiceChannel = m.member.voiceChannel;
        if (!voiceChannel) {
            return m.reply('Please be in a voice channel first!');
        }
        m.channel.send(":trumpet: Stopping stream...");
        purplelog.log("[MUSIC] Leaving channel.", m.guild, true);
        music.clearQue(m);
        voiceChannel.leave();
    }
}

module.exports = cmd;