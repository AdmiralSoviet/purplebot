const Discord = require("discord.js");

const cmd = {
    name: "invite",
    category: "General",
    desc: "Generates an invite code for the bot to use.",
    usage: "invite",
    hidden: false,
    modonly: false,
    devonly: false,
    exec: function (opts = {}) {
        const {
            m = m,
            client = client
        } = opts;
        m.delete();
        m.author.send(`Lemme just generate an invite code for you real quick: https://discordapp.com/oauth2/authorize?&client_id=${client.user.id}&scope=bot&permissions=3271814`);
    }
}

module.exports = cmd;