const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const yousearch = require("youtube-search");
const config = require("./pb_data/config");
const purplelog = require("./purplelog.js");

const youtube_opts = config.youtube_options;

module.exports = ((purple) => {
    // Song object
    class pbSong {
        constructor(props = {}) {
            const {
                link = null,
                    title = "Untitled Song",
                    author = "Unkown",
                    length_seconds = 0,
                    length_minutes = (length_seconds / 60).toFixed(2),
                    skipCount = 0,
                    alreadyVoted = []
            } = props;
            this.link = link;
            this.title = title;
            this.skipCount = skipCount;
            this.author = author;
            this.alreadyVoted = alreadyVoted;
            this.length_seconds = length_seconds;
            this.length_minutes = length_minutes;

            const egOut = this;
            ytdl.getInfo(link, (__, info) => {
                if (!info) {
                    return false;
                }
                egOut.title = info.title;
                egOut.author = info.author.name;
                egOut.length_minutes = (info.length_seconds / 60).toFixed(2);
            });
        }
        // function to check if the user has already voted
        checkVoted(userID) {
            for (var i = 0; i < this.alreadyVoted.length; i++) {
                if (this.alreadyVoted[i] == userID) {
                    return true
                }
            }
            return false;
        }
    };


    music_obj = {}; // define base object
    music_obj.pbSong = pbSong;

    // play next song
    function stoppedPlaying(voiceChannel, message) {
        purple.getGuild(message.guild.id).songs.splice(0, 1); // delete from queue
        if (!music_obj.queIsEmpty(message)) {
            purplelog.log("[MUSIC] Playing next song in queue...", message.guild, false)
            music_obj.play(voiceChannel, purple.getGuild(message.guild.id).songs[0], message); // play next song
        } else {
            purplelog.log("[MUSIC] Finished playing all songs in the queue!", message.guild, false);
            message.channel.send(":musical_note: Finished playing all songs in the queue."); // we're done here.
            voiceChannel.leave(); // leave channel
        }
    }

    music_obj.addToQue = (song, message) => {
        // make sure the queue exists in songue.json
        if (purple.getGuild(message.guild.id).songs) {
            // make sure que doesn't have too many items for the !eg_queue command
            if (purple.getGuild(message.guild.id).songs.length < 15) {
                purple.getGuild(message.guild.id).songs.push(song); // add the song to the que
                if (purple.getGuild(message.guild.id).songs.length != 1) {
                    message.channel.send(":white_check_mark: **'" + song.title + "'** has been added to the queue!");
                }
            } else {
                return message.reply(":no_entry_sign: The queue is full! Wait for the queue to clear or use the **clear** command");
            }
        }
    }
    music_obj.queIsEmpty = (message) => {
        if (purple.getGuild(message.guild.id).songs.length == 0) {
            return true // songque is empty
        } else {
            return false // it isn't empty
        }
    };
    music_obj.clearQue = (message) => {
        purple.getGuild(message.guild.id).songs = [];
        message.channel.send(":recycle: Queue cleared!");
    };
    music_obj.play = (voiceChannel, pbSong, message) => {
        const streamOptions = {
            seek: 0,
            volume: 0.5
        };
        voiceChannel.join()
            .then(connection => {
                let stream = ytdl(pbSong.link, {
                    filter: 'audioonly'
                });
                const dispatcher = connection.playStream(stream, streamOptions);
                dispatcher.on('end', () => {
                    // play next video
                    stoppedPlaying(voiceChannel, message);
                });
                purplelog.log("[MUSIC] Joining channel", message.guild, false);
                message.channel.send(`:musical_note: Now playing **${pbSong.title}**`);
            });
    };
    music_obj.skip = (message) => {
        if (purple.getGuild(message.guild.id).songs[0]) {
            const voiceChannel = message.member.voiceChannel;
            // if user not in voice channel
            if (!voiceChannel) {
                return message.reply(':no_entry_sign: Please be in a voice channel first!');
            }
            voiceChannel.connection.dispatcher.end();
        } else {
            return message.reply(":no_entry_sign: Nothing to skip!");
        }
    }
    return music_obj;
});