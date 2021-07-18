const Discord = require("discord.js");

const cmd = {
    name: "gun",
    category: "General",
    desc: "Translates a Cyberpunk gun's Weapon Code into something more readable.",
    usage: "info",
    hidden: true,
    modonly: false,
    devonly: false,
    exec: function (opts = {}) {
        const {
            m = m,
                client = client,
                content_args = content_args,
                content_clean = content_clean
        } = opts;
        const embed = new Discord.MessageEmbed();
        embed.setDescription("This is a weapon code translation service provided at no cost by Militech™ - Keeping the population informed and safe. The American Way 🇺🇸");
        embed.setTitle(content_clean);
        embed.setAuthor(`Cyberpunk: Stagnation`, `https://cdn.discordapp.com/attachments/549789418135879681/827441908150173746/cyberpunk.png`);
        embed.setFooter("Militech™ - © All Rights Reserved 2083");

        if(content_args.length < 7){
            throw new Error("Format is invalid!");
        }

        // make everything lowercase for convinence
        content_args.forEach((x, i) => {
            content_args[i] = x.toLowerCase();
        });
        // Gun Type
        let gun;
        switch (content_args[1]) {
            case "p":
                gun = "Pistol";
                embed.setThumbnail(`https://cdn.shopify.com/s/files/1/1809/3169/products/untitled_7_of_43_1200x1200.jpg?v=1585167792`);
                break;
            case "smg":
                gun = "Submachine Gun";
                embed.setThumbnail(`https://cdnb.artstation.com/p/assets/images/images/028/299/387/large/charlie-rigden-3-min.jpg?1594071261`);
                break;
            case "shg":
                gun = "Shotgun";
                embed.setThumbnail(`https://cdnb.artstation.com/p/assets/images/images/011/573/169/large/malte-resenberger-loosmann-crusher-05.jpg?1530268695`);
                break;
            case "rif":
                gun = "Rifle";
                embed.setThumbnail(`https://i.ytimg.com/vi/m1xCn8PJToc/maxresdefault.jpg`);
                break;
            case "hvy":
                gun = "Heavy Weapon";
                embed.setThumbnail(`https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2020/12/cp2077-weapon-defender.jpg`);
                break;
            case "melee":
                gun = "Melee Weapon";
                embed.setThumbnail(`https://i.pinimg.com/originals/8d/50/e5/8d50e58794ab16be8db1512aefbf6a19.jpg`);
                break;
            case "ex":
                gun = "Exotic Weapon";
                embed.setThumbnail(`https://i.pinimg.com/originals/cd/38/5f/cd385f4126c87eacb7be3fc0f02d5704.jpg`);
                break;
            default:
                gun = "Unkown"
                embed.setThumbnail(`https://assets.codepen.io/1811205/internal/screenshots/pens/ZRyqNx.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1528915597&width=960`);
        }
        embed.addField(`Type`, `${content_args[1].toUpperCase()} = ${gun}`, true);

        // WA
        embed.addField(`Weapon Accuracy`, `WA = ${content_args[2].toUpperCase()}`, true);

        // Concealability
        let C;
        switch (content_args[3]) {
            case "p":
                C = "Pocket";
                break;
            case "j":
                C = "Jacket";
                break;
            case "l":
                C = "Longcoat";
                break;
            default:
                C = "Can't be hidden N/A";
        }
        embed.addField(`Concealability`, `${content_args[3].toUpperCase()} = ${C}`, true);

        // Availability
        let aval;
        switch (content_args[4]) {
            case "e":
                aval = "Excellent. Can be found almost anywhere.";
                embed.setColor("GREEN");
                break;
            case "c":
                aval = "Common. Can be found in most sports & gun stores or on the street.";
                embed.setColor("YELLOW");
                break;
            case "p":
                aval = "Poor. Speciality weapons, black market, stolen military.";
                embed.setColor("RED");
                break;
            case "r":
                aval = "Rare. Stolen, one of a kind, special military issue, may be highly illegal.";
                embed.setColor("BLACK");
                break;
            default:
                aval = "??";
        }
        embed.addField(`Availability`, `${content_args[4].toUpperCase()} = ${aval}`, false);

        // Damage
        embed.addField(`Damage/Ammo`, `${content_args[5]}`, true);

        // Shots
        embed.addField(`Number of Shots`, `${content_args[6]}`, true);

        // ROF
        embed.addField(`Rate of Fire`, `${content_args[7]}`, true);

        // Reliablity
        let rel;
        switch (content_args[8]) {
            case "vr":
                rel = "Very Reliable";
                break;
            case "st":
                rel = "Standard";
                break;
            case "ur":
                rel = "Unreliable";
                break;
            default:
                rel = "??";
        }
        embed.addField(`Reliablity`, `${content_args[8].toUpperCase()} = ${rel}`, false);

        m.channel.send(embed);
    }
}

module.exports = cmd;