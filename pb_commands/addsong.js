const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const yousearch = require("youtube-search");

const cmd = {
    name: "addsong",
    category: "Music",
    desc: "Adds the requested item to the song queue and plays it if the queue is already empty.",
    usage: "addsong <search term or link>",
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
            return m.channel.send(":no_entry: This command must be sent in a server!");
        }
        const voiceChannel = m.member.voiceChannel;
        // if user not in voice channel
        if (!voiceChannel) {
            return m.reply('Please be in a voice channel first!');
        }
        // if link is detected run this
        if (ytdl.validateURL(content_args[1])) {
            music.addToQue(new music.pbSong({link: content_clean}), m);
            if (content_clean == purple.getGuild(m.guild.id).songs[0].link && purple.getGuild(m.guild.id).songs.length == 1) {
                music.play(voiceChannel, purple.getGuild(m.guild.id).songs[0], m);
            }
        } else {
            // search for the song on youtube
            yousearch(content_clean, config.youtube_options, function (err, results) {
                if (err) {
                    purplelog.log(`[MUSIC] ${err}`, m.guild);
                    return m.channel.send(`:no_entry: Could not add song (${err}).`);
                }
                const link = results[0].link;
                music.addToQue(new music.pbSong({link: link, title: results[0].title}), m);
                if (link == purple.getGuild(m.guild.id).songs[0].link && purple.getGuild(m.guild.id).songs.length == 1) {
                    music.play(voiceChannel, purple.getGuild(m.guild.id).songs[0], m);
                }
            });
        }
    }
}

module.exports = cmd;