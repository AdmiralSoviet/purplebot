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
        console.log("[WARN] Running runcode command");
        try {
            m.author.send(`Result of running function: ${eval(content_clean)}`);
        } catch (err) {
            m.author.send(`${err}`);
        }
    }
}

module.exports = cmd;