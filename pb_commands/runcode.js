const Discord = require("discord.js");

const cmd = {
    name: "runcode",
    category: "General",
    desc: "Runs the specified code. (Dev Only - dangerous)",
    usage: "runcode <arg>",
    hidden: true,
    modonly: false,
    devonly: true,
    exec: function (opts = {}) {
        const {
            m = m,
            client = client,
            content_clean = content_clean
        } = opts;
        m.delete();
        console.log("[WARN] Running runcode command, super dangerous...");
        m.author.send(`Result of running function: ${eval(content_clean)}`);
    }
}

module.exports = cmd; 