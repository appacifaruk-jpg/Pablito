import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    category: 'Socials',

    data: new SlashCommandBuilder()
        .setName('socials')
        .setDescription('Show all our social media links'),

    async execute(interaction, config, client) {
        const embed = new EmbedBuilder()
            .setColor('#0057FF')
            .setTitle('🌐 My Social Media Links')
            .setDescription('Welcome to our official social media page!')
            .addFields(
                {
                    name: '🎵 TikTok',
                    value: '[Follow here](https://www.tiktok.com/@amalitopablito)',
                    inline: false,
                },
                {
                    name: '▶️ YouTube',
                    value: '[Subscribe here](https://www.youtube.com/@AmalitoPablito)',
                    inline: false,
                },
                {
                    name: '👻 Snapchat',
                    value: '[Add here](https://www.snapchat.com/@amalitopablito)',
                    inline: false,
                },
                {
                    name: '📸 Instagram',
                    value: '[Follow here](https://www.instagram.com/amalitopablito/)',
                    inline: false,
                },
                {
                    name: '🟣 Twitch',
                    value: '[Watch here](https://www.twitch.tv/amalitopablito)',
                    inline: false,
                },
                {
                    name: '𝕏 X',
                    value: '[Follow here](https://twitter.com/AmalitoPablito)',
                    inline: false,
                }
            )
            .setFooter({
                text: 'Thank you for supporting us ❤️'
            })
            .setTimestamp();

        await interaction.reply({
            embeds: [embed]
        });
    }
};
