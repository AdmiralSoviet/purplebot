const Discord = require("discord.js");

// generate random alpha-numeric string
function genString(length) {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

const cmd = {
    name: "getlogall",
    category: "General",
    desc: "Retrieves the master log file for the bot. (Dev only)",
    usage: "getlog",
    hidden: true,
    modonly: true,
    devonly: true,
    exec: function (opts = {}) {
        const {
            m = m,
            content_args = content_args
        } = opts;
        let path = "purplelog.log";
        m.delete();
        if (content_args[1]) {
            var srvr = client.guilds.get(content_args[1]);
            if (srvr) {
                srvr.name = srvr.name.replace(":", " ");
                path = `pbot_${srvr.id}_${srvr.name}.log`;
            } else {
                m.channel.send("Unable to find requested server!")
                    .then(msg => {
                        msg.delete(60000);
                    });
                return false;
            }
        }
        m.author.send({
                files: [{
                    attachment: `${__dirname}/../pb_data/logs/${path}`,
                    name: `purplelog_${genString(16)}.log`
                }]
            })
            .then(msg => {
                msg.delete(30000);
            })
    }
}

module.exports = cmd;