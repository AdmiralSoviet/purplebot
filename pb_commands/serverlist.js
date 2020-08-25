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

        client.guilds.cache.each((v) => {
            if (v.available == true) {
                const embed = new Discord.MessageEmbed();
                embed.setTitle(v.name);
                embed.setThumbnail(v.iconURL());
                embed.setColor("RANDOM");
                embed.addField("Server ID:", v.id, true);
                embed.setAuthor(`${v.owner.user.username}#${v.owner.user.discriminator}`, v.owner.user.displayAvatarURL());
                embed.addField("Owner ID:", v.ownerID, true);
                embed.addField("Region:", v.region, true);
                embed.addField("Members:", v.memberCount, true);
                embed.addField("Member Status:", `
                Online         -> ${v.members.cache.filter(x => x.presence.status == "online").array().length}
                Idle           -> ${v.members.cache.filter(x => x.presence.status == "idle").array().length}
                Do Not Disturb -> ${v.members.cache.filter(x => x.presence.status == "dnd").array().length}
                Offline        -> ${v.members.cache.filter(x => x.presence.status == "offline").array().length}
            `);
                embed.addField("More Information:", `
            Roles: ${v.roles.cache.array().length}
            Text Channels: ${v.channels.cache.filter(x => x.type == "text").array().length}
            Voice Channels: ${v.channels.cache.filter(x => x.type == "voice").array().length}
            `);
                embed.setFooter(`Created on ${v.createdAt}`);
                m.channel.send(embed)
                    .then(message => message.delete({
                        timeout: client.guilds.cache.size * 40000
                    }));
            }
        })
    }
}

module.exports = cmd;