const Discord = require("discord.js");

const cmd = {
    name: "autoqueue",
    category: "Music",
    desc: "If this is enabled, I'll add new songs to the queue when the last song ends.",
    usage: "autoqueue",
    hidden: false,
    modonly: false,
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
        const voiceChannel = m.member.voice.channel;
        // if user not in voice channel
        if (!voiceChannel) {
            return m.reply('Please be in a voice channel first!');
        }
        if (purple.getGuildTemp(m.guild.id).songs[0]) {
            if ((voiceChannel != purple.getGuildTemp(m.guild.id).songs[0].channel) && purple.getGuildTemp(m.guild.id).songs[0].channel.members.size > 1) {
                return m.channel.send(`:musical_note: Sorry, still chillin' here in **${purple.getGuildTemp(m.guild.id).songs[0].channel.name}**. Come join us!`);
            }
        }
        const guild = purple.getGuild(m.guild.id);
        guild.autoQueue = guild.autoQueue ? false : true;
        purple.saveStorage();
        m.channel.send(`:white_check_mark: Auto-queue is now **${guild.autoQueue ? "ON" : "OFF"}**`);
    }
}

module.exports = cmd;