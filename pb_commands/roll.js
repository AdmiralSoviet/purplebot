const Discord = require("discord.js");

function rollf(arg) {
    arg = arg.split("d");
    const times = (arg[0] != "") ? parseInt(arg[0]) : 1;
    const die = parseInt(arg[1]);
    const result = {
        list: [],
        max: die * times,
        total: 0
    }
    for (var i = 1; i <= times; i++) {
        var roll = Math.floor(Math.random() * die) + 1;
        result.list.push(roll);
        result.total += roll;
    }
    return result;
}
const cmd = {
    name: "roll",
    category: "Entertainment",
    desc: "Rolls some dice in the standard D&D format!",
    usage: "roll <2d10>",
    hidden: false,
    modonly: false,
    devonly: false,
    exec: function (opts = {}) {
        const {
            m = m,
            client = client,
            content_args = content_args
        } = opts;
        m.channel.send("Rolling " + content_args[1] + "...");
        const roll = rollf(content_args[1]);
        var embed = new Discord.RichEmbed();
        embed.setTitle(":game_die: Result of Rolling " + content_args[1] + "! :game_die:");
        embed.setDescription("The maximum for this roll is " + roll.max + ", here's how you rolled.");
        embed.setColor("RANDOM");
        embed.setThumbnail("https://www.thediceplace.com/acatalog/opaque_d20_blue.jpg");
        let rollDur = roll.list.length;
        if (rollDur != 1) {
            if (rollDur > 24) {
                rollDur = 23;
                embed.addField("Too Many Rolls!", "Only the first 24 rolls will be shown below.");
            }
            for (var i = 0; i < rollDur; i++) {
                embed.addField("Roll #" + (i + 1), roll.list[i], true);
            }
        }
        embed.addField("Total Roll: ", roll.total);
        m.channel.send(embed);
    }
}

module.exports = cmd;