import { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } from 'discord.js';

export default {
    category: 'Socials',

    data: new SlashCommandBuilder()
        .setName('socials')
        .setDescription('Show all our social media links'),

    async execute(interaction, config, client) {
        const image = new AttachmentBuilder(
            './src/commands/Socials/amalito.png'
        );

        const embed = new EmbedBuilder()
            .setColor('#E53935')
            .setTitle('🌐 AMALITOPABLITO')
            .setDescription(
                '**OFFICIAL SOCIAL MEDIA LINKS**\n\n' +
                '🎵 **TikTok** — [Follow here](https://www.tiktok.com/@amalitopablito)\n\n' +
                '▶️ **YouTube** — [Subscribe here](https://www.youtube.com/@AmalitoPablito)\n\n' +
                '👻 **Snapchat** — [Add here](https://www.snapchat.com/@amalitopablito)\n\n' +
                '📸 **Instagram** — [Follow here](https://www.instagram.com/amalitopablito/)\n\n' +
                '🟣 **Twitch** — [Watch here](https://www.twitch.tv/amalitopablito)\n\n' +
                '𝕏 — [Follow here](https://x.com/AmalitoPablito)'
            )
            .setImage('attachment://amalito.png')
            .setFooter({
                text: 'THANK YOU FOR THE SUPPORT ❤️'
            })
            .setTimestamp();

        await interaction.reply({
            embeds: [embed],
            files: [image]
        });
    }
};
