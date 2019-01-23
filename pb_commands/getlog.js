const Discord = require("discord.js");

// generate random alpha-numeric string
function genString(length) {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

const cmd = {
    name: "getlog",
    category: "General",
    desc: "Retrieves the guild's purplebot logs. (Mod only)",
    usage: "getlog",
    hidden: false,
    modonly: true,
    devonly: false,
    exec: function (opts = {}) {
        const {
            m = m
        } = opts;
        if(!m.guild){
            return m.channel.send("You cannot use this command in a DM Channel!");
        }
        m.author.send({
                files: [{
                    attachment: `${__dirname}/../pb_data/logs/pbot_${m.guild.id}_${m.guild.name}.log`,
                    name: `purplelog_${genString(16)}.log`
                }]
            })
            .then(msg => {
                msg.delete(60000);
            })
        m.delete();
    }
}

module.exports = cmd;