import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    category: 'Rules',

    data: new SlashCommandBuilder()
        .setName('rules')
        .setDescription('Show the official server rules'),

    async execute(interaction, config, client) {

        const embed = new EmbedBuilder()
            .setColor('#5865F2')
            .setTitle('🛡️ AMALITO PABLITO | SERVER RULES')
            .setDescription(
                'Welcome to the official Amalito Pablito Discord server!\n' +
                'Please read and follow all the rules below.'
            )
            .addFields(
                {
                    name: '📜 GENERAL RULES',
                    value:
                        '1. Respect all members.\n' +
                        '2. No racism, discrimination or hate speech.\n' +
                        '3. No spamming or flooding.\n' +
                        '4. No advertising without permission.\n' +
                        '5. No inappropriate content.\n' +
                        '6. Follow staff instructions.'
                },
                {
                    name: '⚠️ PUNISHMENTS',
                    value:
                        'Breaking the rules may result in:\n' +
                        '• Warning\n' +
                        '• Mute\n' +
                        '• Kick\n' +
                        '• Permanent ban'
                },
                {
                    name: '❤️ THANK YOU',
                    value:
                        'Thank you for being part of our community!\n' +
                        'Enjoy your stay!'
                }
            )
            .setFooter({
                text: 'Amalito Pablito • Official Server Rules'
            })
            .setTimestamp();

        await interaction.reply({
            embeds: [embed]
        });
    }
};
