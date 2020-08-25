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
        const embed = new Discord.MessageEmbed();
        embed.setColor("PURPLE");
        embed.setURL("https://github.com/AdmiralSoviet/purplebot");
        embed.setThumbnail(client.user.avatarURL());
        embed.setTitle("PurpleBot Information");
        embed.setDescription(`PurpleBot is a simple but diverse Discord Bot written in Node, built to run across multiple servers. If you like this bot, you can support further development of this bot by joining the community and recommending this bot to others.`);
        embed.addField("Offical Website :page_facing_up:", "https://nikgo.me/purple", true);
        embed.addField("Source Code :computer:", "https://github.com/AdmiralSoviet/purplebot", true);
        embed.addField("Logging :scroll:", "Purple makes sure to log all command execution, but nothing more than that. If you want a copy of your guild's log-file, you can request it using the getlog command. (Mod Only)");
        embed.setTimestamp();
        embed.setFooter("Contact Me at soviet#2508");
        m.channel.send(embed);
    }
}

module.exports = cmd;