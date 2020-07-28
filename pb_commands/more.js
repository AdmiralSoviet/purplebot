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
                client = client,
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
            list.setTitle(song.title);
            list.setURL(song.link);
            list.setAuthor(`More videos like:`, client.user.displayAvatarURL());
            list.setColor("PURPLE");
            list.setDescription(`This is a list of videos related to the last/current played song. You can use the **'${config.prefix}autoqueue'** command to play suggested songs automatically.`);
            ytdl.getBasicInfo(song.link)
                .then((x) => {
                    list.setThumbnail(x.playerResponse.videoDetails.thumbnail.thumbnails[x.playerResponse.videoDetails.thumbnail.thumbnails.length - 1].url);
                    if (x.related_videos.length <= 0) {
                        list.addField("Nothing found!");
                    }
                    x.related_videos.slice(0, 5).forEach((v, i) => {
                        list.addField(`${i+1}. ${v.title}`, `By *${v.author}*`);
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