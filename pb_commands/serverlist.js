const Discord = require("discord.js");

const cmd = {
    name: "serverlist",
    category: "General",
    desc: "Prints a list of guilds the bot is running on with some basic info. (Dev Only)",
    usage: "serverlist",
    hidden: true,
    modonly: false,
    devonly: true,
    exec: function (opts = {}) {
        const {
            m = m,
            client = client,
        } = opts;

        client.guilds.tap((v) => {
            const embed = new Discord.RichEmbed();
            embed.setTitle(v.name);
            embed.setThumbnail(v.iconURL);
            embed.setColor("RANDOM");
            embed.addField("Server ID:", v.id, true);
            embed.addField("Owner ID:", v.ownerID, true);
            embed.addField("Region:", v.region, true);
            embed.addField("Members:", v.memberCount, true);
            embed.addField("More Information:", `
            Created: ${v.createdAt}
            Roles: ${v.roles.array().length}
            Categories: ${v.channels.filter(x => x.type == "category").array().length}
            Text Channels: ${v.channels.filter(x => x.type == "text").array().length}
            Voice Channels: ${v.channels.filter(x => x.type == "voice").array().length}
            `);
            embed.setTimestamp();
            m.channel.send(embed)
                .then(message => message.delete(client.guilds.array().length * 20000));
        })
    }
}

module.exports = cmd;