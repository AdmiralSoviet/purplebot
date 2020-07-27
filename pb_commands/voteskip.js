const Discord = require("discord.js");

const cmd = {
    name: "voteskip",
    category: "Music",
    desc: "Vote to skip the current song. 60% of the vote needed to win and skip the song.",
    usage: "voteskip",
    hidden: false,
    modonly: false,
    devonly: false,
    exec: function (opts = {}) {
        const {
            m = m,
                music = music,
                config = config,
                content_clean = content_clean,
                content_args = content_args,
                purple = purple,
                purplelog = purplelog
        } = opts;
        // make sure the command isn't sent inside of a DM
        if (!m.guild || !m.member) {
            return m.channel.send(":no_entry: This command must be sent in a server!");
        }
        const voiceChannel = m.member.voice.channel;
        // if user not in voice channel
        if (!voiceChannel) {
            return m.channel.send(':no_entry: Please be in a voice channel first!');
        }
        let countMembers = Array.from(voiceChannel.members.values()).length - 1; // subtract one to remove bot from vote
        // if the queue doesn't exist or queue is empty
        if (!purple.getGuildTemp(m.guild.id).songs || !purple.getGuildTemp(m.guild.id).songs[0]) {
            return m.channel.send(":trumpet: Nothing is playing!");
        }
        if (voiceChannel != purple.getGuildTemp(m.guild.id).songs[0].channel)
            return m.reply("you have no say from over there ;^)");
        if (!purple.getGuildTemp(m.guild.id).songs[0].checkVoted(m.author.id)) {
            const requiredVote = Math.round(countMembers * 0.6); // 60% of vote required
            purple.getGuildTemp(m.guild.id).songs[0].skipCount += 1;
            purplelog.log(new purplelog.Entry({
                content: `VOTES: ${purple.getGuildTemp(m.guild.id).songs[0].skipCount}/${requiredVote}`,
                guild: m.guild,
                type: "MUSIC"
            }));
            // if the vote succeeds
            if (purple.getGuildTemp(m.guild.id).songs[0].skipCount >= requiredVote) {
                m.channel.send(":ballot_box: Enough people have voted to skip the song. (" + purple.getGuildTemp(m.guild.id).songs[0].skipCount + "/" + requiredVote + ")");
                music.skip(m);
            } else {
                // if the vote count isn't enough to skip yet.
                purple.getGuildTemp(m.guild.id).songs[0].alreadyVoted.push(m.author.id);
                m.channel.send(":ballot_box: Your vote has been lodged! (" + purple.getGuildTemp(m.guild.id).songs[0].skipCount + "/" + requiredVote + ")")
            }
        } else {
            m.channel.send(":no_entry: You have already voted!");
        }
    }
}

module.exports = cmd;