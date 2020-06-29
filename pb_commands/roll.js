const Discord = require("discord.js");

/* 
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
*/

const die = (() => {
    const dief = {
        cvt: function (diceRoll) {
            diceRoll = diceRoll.toLowerCase();
            let diceObj = {};
            if (diceRoll[0] == "-") {
                diceRoll = diceRoll.replace("-", "");
                diceObj.negative = true;
            }
            if (diceRoll.includes("*")) {
                diceObj.foreach_modifier = parseInt(diceRoll.split("*")[1]);
            }
            if (diceRoll.includes("+")) {
                diceObj.bonus = parseInt(diceRoll.split("+")[1]);
            }
            diceRoll = diceRoll.split("d");
            diceObj.iterator = (diceRoll[0] != "") ? parseInt(diceRoll[0]) : 1;
            diceObj.face = parseInt(diceRoll[1]);
            return diceObj;
        },
        r: function (arg, mute) {
            const rCvrt = this.cvt(arg);
            if (rCvrt.iterator == 0) {
                return 0;
            }
            let total = 0;
            let roll;
            let max = ((rCvrt.face + ((rCvrt.foreach_modifier) ? rCvrt.foreach_modifier : 0)) * rCvrt.iterator) + ((rCvrt.bonus) ? rCvrt.bonus : 0);
            let list = [];
            for (let i = 1; i <= rCvrt.iterator; i++) {
                roll = Math.floor(Math.random() * rCvrt.face) + 1;
                if (rCvrt.foreach_modifier)
                    roll += rCvrt.foreach_modifier;
                list.push(roll);
                if (!mute)
                    console.log("Roll " + i + ": " + roll);
                total += roll;
            }
            if (rCvrt.bonus) {
                if (!mute)
                    console.log(`Bonus Applied (+${rCvrt.bonus})`);
                total = total + rCvrt.bonus;
            }
            if (rCvrt.negative)
                total = total * -1;
            if (!mute) {
                console.log("Total roll: " + total);
            }
            return {
                total,
                list,
                max
            };
        },
        s: function (diceObj) {
            return `${(diceObj.negative) ? "-" : ""}${diceObj.iterator}d${diceObj.face}${(diceObj.foreach_modifier) ? "*" : ""}${(diceObj.bonus) ? "+"+diceObj.bonus : ""}`;
        }
    }
    return dief
})();

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
        const roll = die.r(content_args[1]);
        var embed = new Discord.MessageEmbed();
        embed.setTitle(":game_die: Result of Rolling " + content_args[1] + "! :game_die:");
        embed.setDescription("The maximum for this roll is " + roll.max + ", here's how you rolled.");
        embed.setColor("RANDOM");
        embed.setThumbnail("https://i1.wp.com/farthertogo.com/wp-content/uploads/2018/04/roll-the-dice-2.jpg");
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