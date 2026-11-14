import {
    SlashCommandBuilder,
    EmbedBuilder,
    AttachmentBuilder
} from 'discord.js';

import path from 'path';

export default {
    category: 'Socials',

    data: new SlashCommandBuilder()
        .setName('socials')
        .setDescription('Show all our social media links'),

    async execute(interaction, config, client) {

        const photoPath = path.resolve(
            process.cwd(),
            'assets',
            'socials-photo.jpeg'
        );

        const photo = new AttachmentBuilder(photoPath, {
            name: 'socials-photo.jpeg'
        });

        const embed = new EmbedBuilder()
            .setColor('#0057FF')
            .setTitle('🌐 AMALITO PABLITO | SOCIALS')
            .setDescription(
                'Welcome to the official social media page of **Amalito Pablito**!\n' +
                'Follow me on all platforms and stay connected! ❤️\n\n' +

                '<:tiktok:1571254703898239197> **TikTok**\n' +
                '[Follow here](https://www.tiktok.com/@amalitopablito)\n\n' +

                '<:Youtube_logo:1571254669551079494> **YouTube**\n' +
                '[Subscribe here](https://www.youtube.com/@AmalitoPablito)\n\n' +

                '<:snapchat:1571254629218517213> **Snapchat**\n' +
                '[Add here](https://www.snapchat.com/@amalitopablito)\n\n' +

                '<:InstagramIcon:1571253438325588070> **Instagram**\n' +
                '[Follow here](https://www.instagram.com/amalitopablito/)\n\n' +

                '<:twitchlogotwitchlogotransparentt:1571254599631904778> **Twitch**\n' +
                '[Watch here](https://www.twitch.tv/amalitopablito)\n\n' +

                '**𝕏 X**\n' +
                '[Follow here](https://twitter.com/AmalitoPablito)'
            )
            .setImage('attachment://socials-photo.jpeg')
            .setFooter({
                text: 'Thank you for supporting Amalito Pablito ❤️'
            })
            .setTimestamp();

        await interaction.reply({
            embeds: [embed],
            files: [photo]
        });
    }
};
