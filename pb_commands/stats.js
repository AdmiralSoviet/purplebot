const Discord = require("discord.js");

const cmd = {
    name: "stats",
    category: "General",
    desc: "Shows some useful stats such as the number of servers running and the current uptime.",
    usage: "stats",
    hidden: false,
    modonly: false,
    devonly: false,
    exec: function (opts = {}) {
        const {
            m = m,
            client = client,
        } = opts;

        const embed = new Discord.MessageEmbed({});
        embed.setColor("PURPLE");
        embed.setTitle("PurpleBot Stats");
        embed.setThumbnail(client.user.displayAvatarURL());
        embed.addField("Uptime: ", ((client.uptime / 1000) / 60).toFixed(2) + " minute(s)");
        embed.addField("Voice Connections: ", client.voice.connections.size);
        embed.addField("Servers Running: ", client.guilds.cache.array().length);
        embed.setTimestamp();
        console.log(`User '${m.author.username}' has requested stats.`);
        m.channel.send(embed);
    }
}

module.exports = cmd;