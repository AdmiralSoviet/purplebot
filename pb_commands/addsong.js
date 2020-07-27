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
        const voiceChannel = m.member.voice.channel;
        // if user not in voice channel
        if (!voiceChannel) {
            return m.reply('Please be in a voice channel first!');
        }
        if (purple.getGuild(m.guild.id).songs[0]) {
            if ((voiceChannel != purple.getGuild(m.guild.id).songs[0].channel) && purple.getGuild(m.guild.id).songs[0].channel.members.size > 1) {
                return m.channel.send(`:musical_note: Sorry, still chillin' here in **${purple.getGuild(m.guild.id).songs[0].channel.name}**. Come join us!`);
            }
        }
        // if link is detected run this
        if (ytdl.validateURL(content_args[1])) {
            music.addToQue(new music.pbSong({
                link: content_clean,
                scrape_info: (purple.getGuild(m.guild.id).songs.length > 0) ? true : false,
                channel: voiceChannel
            }), m);
            if (content_clean == purple.getGuild(m.guild.id).songs[0].link && purple.getGuild(m.guild.id).songs.length == 1) {
                purple.getGuild(m.guild.id).songs[0].getInfo(() => {
                    music.play(purple.getGuild(m.guild.id).songs[0], m);
                });
            }
        } else {
            // search for the song on youtube
            yousearch(content_clean, config.youtube_options, function (err, results) {
                if (err) {
                    purplelog.log(new purplelog.Entry({
                        content: err.toString(),
                        guild: m.guild,
                        type: "MUSIC"
                    }));
                    if (err.toString() == `TypeError: Cannot read property 'link' of undefined`)
                        err = "Can you give me like a normal song name, thanks";
                    return m.channel.send(`:no_entry: Could not add song (${err}).`);
                }
                const link = results[0].link;
                music.addToQue(new music.pbSong({
                    link: link,
                    title: results[0].title,
                    channel: voiceChannel
                }), m);
                if (link == purple.getGuild(m.guild.id).songs[0].link && purple.getGuild(m.guild.id).songs.length == 1) {
                    music.play(purple.getGuild(m.guild.id).songs[0], m);
                }
            });
        }
    }
}

module.exports = cmd;