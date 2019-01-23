const Discord = require("discord.js");

const cmd = {
    name: "info",
    category: "General",
    desc: "Prints a list of information about purplebot, including ways to contribute to purplebot's development.",
    usage: "info",
    hidden: false,
    modonly: false,
    devonly: false,
    exec: function (opts = {}) {
        const {
            m = m,
            client = client
        } = opts;
        const embed = new Discord.RichEmbed();
        embed.setColor("PURPLE");
        embed.setURL("https://github.com/AdmiralSoviet/purplebot");
        embed.setThumbnail(client.user.avatarURL);
        embed.setTitle("PurpleBot Information");
        embed.setDescription(`PurpleBot is a simple but diverse Discord Bot written in Node, built to run across multiple servers. If you like this bot, you can support further development of this bot by joining the community and recommending this bot to others.`);
        embed.addField("Source Code :computer:", "https://github.com/AdmiralSoviet/purplebot", true);
        embed.addField("Disclaimer :warning:", "Please be aware that this bot logs certain guild activity (mainly just command execution). If you want a copy of this guild's log-file, you can request it using the getlog command. (Mod Only)");
        embed.setTimestamp();
        m.channel.send(embed);
    }
}

module.exports = cmd;