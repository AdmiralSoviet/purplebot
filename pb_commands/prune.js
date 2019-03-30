const Discord = require("discord.js");

const cmd = {
    name: "prune",
    category: "Moderation",
    desc: "Prunes a specified number of messages",
    usage: "prune <number>",
    hidden: false,
    modonly: true,
    devonly: false,
    exec: function (opts = {}) {
        const {
            m = m,
            client = client,
            content_args = content_args
        } = opts;
        // check if the user specified a number and it is less than or equal to 98
        let count = parseInt(content_args[1]);
        if (parseInt(content_args[1]) && count <= 100) {
            if (count > 99)
                count = 99;
            const numberDelete = count + 1;
            m.delete();
            m.channel.send(":white_check_mark: Deleting messages...");
            m.channel.fetchMessages({
                    limit: numberDelete
                }) // fetch messages in a channel
                .then(function (messages) {
                    console.log("Recieved " + messages.size + " messages");
                    // run on a delay of 2 seconds
                    setTimeout(function () {
                        m.channel.bulkDelete(messages, true); // delete those messages
                    }, 2000);
                })
        } else {
            m.channel.send(":warning: Argument invalid, use a number less than 100!");
        }
    }
}

module.exports = cmd;