const Discord = require("discord.js");
const fs = require("fs");

const cmd = {
    name: "getcommands",
    category: "General",
    desc: "Retrieves the list of commands purplebot has access to in a JSON format. (Dev Only)",
    usage: "getcommands",
    hidden: true,
    modonly: false,
    devonly: true,
    exec: function (opts = {}) {
        const {
            m = m,
            cmd_list = cmd_list
        } = opts;
        m.delete();
        fs.writeFile("pb_data/commands.json", JSON.stringify(cmd_list, undefined, 4), (err)=>{
            if (err) throw err;
            m.author.send({
                files: [{
                    attachment: `pb_data/commands.json`,
                    name: `commands.json`
                }]
            })
            .then(msg => {
                msg.delete(60000);
                fs.unlink('pb_data/commands.json', (err) => {
                    if (err) throw err;
                    console.log('commands.json was deleted');
                });
            })
        });
    }
}

module.exports = cmd;