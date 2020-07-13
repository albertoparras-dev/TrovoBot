module.exports = {
		name: 'say',
  	description: 'Says a message by the bot.',
    chat: true,
    event: false,
    type: 5004,
    command: 'say',
    permissions: ['moderator', 'creator'],
    alias: ['say'],
	settings: false,
    credits: "Made by Friext#6935",
	execute(bot, data, modules) {
        /**IF THE ARGS ARE MISSING TELL TO THE USER THAT HE HAS TO PUT THE ARGS **/
        if (data.args.length < 1) {
			bot.sendMessage("You have to put a message.");
            return;
        }

        /**IF THE USER IS MOD/CREATOR, SAYS THE THING HE SAYS **/
        if (data.args[0].charAt(0)) {
        bot.sendMessage(`${data.args.join(" ")}`);
        }
    },
};
