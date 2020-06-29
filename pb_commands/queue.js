const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const yousearch = require("youtube-search");

const cmd = {
    name: "queue",
    category: "Music",
    desc: "Command to list all songs in the current song queue.",
    usage: "queue",
    hidden: false,
    modonly: false,
    devonly: false,
    exec: function (opts = {}) {
        const {
            m = m,
            music = music,
            client = client,
            config = config,
            content_clean = content_clean,
            content_args = content_args,
            purple = purple,
            purplelog = purplelog
        } = opts;
        // make sure this isn't a DM
        if (!m.guild || !m.member) {
            return m.channel.send("This command must be sent in a guild!");
        }
        if (!music.queIsEmpty(m)) {

            let songQue = purple.getGuild(m.guild.id).songs;
            var embed = new Discord.MessageEmbed();
            embed.setTitle("Song Queue 🎺");
            embed.setColor("PURPLE");
            embed.setThumbnail(client.user.avatarURL);
            embed.setDescription("This is the current song queue for this guild.");
            for (var i = 0; i < songQue.length; i++) {
                embed.addField((i + 1) + ". " + songQue[i].title, `Uploaded By: ${songQue[i].author}\nLength: ${songQue[i].length_minutes} Minutes\nLink: ${songQue[i].link}`);
            }
            embed.setTimestamp();
            m.channel.send(embed);
        } else {
            m.channel.send("There are no items in the queue right now, try adding some!");
        }
    }
}

module.exports = cmd;
