const Discord = require("discord.js");

const cmd = {
    name: "die",
    category: "General",
    desc: "Kills the process. (Dev Only)",
    usage: "die",
    hidden: true,
    modonly: false,
    devonly: true,
    exec: function (opts = {}) {
        const {
            m = m
        } = opts;
        process.exit();
    }
}

module.exports = cmd;