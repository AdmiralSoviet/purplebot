const Discord = require("discord.js");

const cmd = {
    name: "stats",
    category: "General",
    desc: "Shows some useful stats such as the number of servers running and the current uptime.",
    usage: "stats",
    modonly: false,
    devonly: false,
    exec: function (opts = {}) {
        const {
            m = m,
            client = client,
        } = opts;

        const embed = new Discord.RichEmbed({});
        embed.setColor("PURPLE");
        embed.setTitle("PurpleBot Stats");
        embed.setThumbnail(client.user.avatarURL);
        embed.addField("Uptime: ", ((client.uptime / 1000) / 60).toFixed(2) + " minute(s)");
        embed.addField("Servers Running: ", client.guilds.array().length);
        embed.setTimestamp();
        console.log(`User '${m.author.username}' has requested stats.`);
        m.channel.send(embed);
    }
}

module.exports = cmd;