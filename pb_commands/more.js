const Discord = require("discord.js");
const ytdl = require("ytdl-core");

const cmd = {
    name: "more",
    category: "Music",
    desc: "Makes a list of recommended songs based on the last or current song in queue.",
    usage: "queue",
    hidden: false,
    modonly: false,
    devonly: false,
    exec: function (opts = {}) {
        const {
            m = m,
                music = music,
                config = config,
                purple = purple
        } = opts;
        // make sure this isn't a DM
        if (!m.guild || !m.member) {
            return m.channel.send("This command must be sent in a guild!");
        }
        try {
            let song;
            if (!music.queIsEmpty(m)) {
                song = purple.getGuildTemp(m.guild.id).songs[0]; // target song should be current song
            } else if (purple.getGuildTemp(m.guild.id).lastSong) {
                song = purple.getGuildTemp(m.guild.id).lastSong;
            } else {
                return m.channel.send("Can't think of anything right now, try running some songs first?");
            }
            let list = new Discord.MessageEmbed();
            list.setTitle(`More like: ${song.title}`);
            list.setColor("COLOR_PURPLE");
            list.setDescription(`This is a list of videos related to the last/current played song. You can use the '${config.prefix}autoqueue' command to play suggested songs automatically.`);
            ytdl.getBasicInfo(song.link)
                .then((x) => {
                    list.setThumbnail(x.thumbnail_url);
                    x.related_videos.forEach((v) => {
                        list.addField(v.title, `By ${v.author}`);
                    });
                    list.setTimestamp();
                    m.channel.send(list);
                });
        } catch (err) {
            m.channel.send(`:no_entry_sign: ${err} :(`);
        }
    }
}

module.exports = cmd;