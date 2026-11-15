import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export default {
    category: 'Rules',

    data: new SlashCommandBuilder()
        .setName('rules')
        .setDescription('Post the official server rules')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),

    async execute(interaction, config, client) {

        const embed = new EmbedBuilder()
            .setColor('#5865F2')
            .setTitle("🛡️  THE PABLITO'S")
            .setDescription(
                '# 📜 SERVER RULES\n' +
                'Welcome to the official Amalito Pablito community!\n\n' +
                'Please take a moment to read all the rules carefully.\n' +
                'By staying in this server, you agree to follow them.\n\n' +
                '━━━━━━━━━━━━━━━━━━━━'
            )
            .addFields(
                {
                    name: '📌  GENERAL RULES',
                    value:
                        '**01. Respect Everyone**\n' +
                        'Treat all members with respect.\n\n' +

                        '**02. No Discrimination**\n' +
                        'Racism, hate speech and discrimination are not allowed.\n\n' +

                        '**03. No Spamming**\n' +
                        'Avoid spam, flooding and unnecessary messages.\n\n' +

                        '**04. No Advertising**\n' +
                        'Advertising without permission is prohibited.\n\n' +

                        '**05. Appropriate Content**\n' +
                        'Keep all content appropriate for the community.\n\n' +

                        '**06. Listen to Staff**\n' +
                        'Always follow instructions from our staff team.'
                },
                {
                    name: '\u200B',
                    value: '━━━━━━━━━━━━━━━━━━━━'
                },
                {
                    name: '⚠️  RULE VIOLATIONS',
                    value:
                        'Breaking the rules can result in:\n\n' +
                        '• **Warning**\n' +
                        '• **Mute / Timeout**\n' +
                        '• **Kick**\n' +
                        '• **Permanent Ban**\n\n' +
                        'Our staff team decides the appropriate punishment.'
                },
                {
                    name: '\u200B',
                    value: '━━━━━━━━━━━━━━━━━━━━'
                },
                {
                    name: '❤️  THANK YOU',
                    value:
                        "Thank you for being part of **The Pablito's**!\n" +
                        'Enjoy your stay and have fun!'
                }
            )
            .setFooter({
                text: "THE PABLITO'S • OFFICIAL SERVER RULES"
            })
            .setTimestamp();

        await interaction.deferReply({ ephemeral: true });

        await interaction.channel.send({
            embeds: [embed]
        });

        await interaction.deleteReply();
    }
};
