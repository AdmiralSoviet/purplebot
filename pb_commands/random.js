const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const yousearch = require("youtube-search");

const cmd = {
    name: "random",
    category: "Music",
    desc: "Adds a song from a youtube search; picks a random result rather than the top.",
    usage: "random <search term>",
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
        // if user not in voice channel
        if (!voiceChannel) {
            return m.reply('Please be in a voice channel first!');
        }
        // search for the song on youtube
        yousearch(content_clean, config.youtube_options, function (err, results) {
            if (err) throw err;
            // pick a random video from results
            const randomLink = results[Math.floor(Math.random() * results.length)];
            const link = randomLink.link;
            music.addToQue(new music.pbSong({link: link, title: randomLink.title}), m);

            if (link == purple.getGuildTemp(m.guild.id).songs[0].link && purple.getGuildTemp(m.guild.id).songs.length == 1) {
                music.play(voiceChannel, purple.getGuildTemp(m.guild.id).songs[0], m);
            }
        });
    }
}

module.exports = cmd;