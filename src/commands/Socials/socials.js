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
            .setTitle('🌐 MY SOCIAL MEDIA')
            .setDescription(
                'Welcome to the official social media page of **Amalito Pablito**!\n\n' +
                '❤️ Follow me on all platforms and stay connected!'
            )
            .setThumbnail('attachment://socials-photo.jpeg')
            .addFields(
                {
                    name: '<:tiktok:1571250810757849178> TikTok',
                    value: '[Follow here](https://www.tiktok.com/@amalitopablito)',
                    inline: true
                },
                {
                    name: '<:YoutubeLogo:1503442251827646574> YouTube',
                    value: '[Subscribe here](https://www.youtube.com/@AmalitoPablito)',
                    inline: true
                },
                {
                    name: '<:snapchat:1571250658995343572> Snapchat',
                    value: '[Add here](https://www.snapchat.com/@amalitopablito)',
                    inline: true
                },
                {
                    name: '<:InstagramLogo:1503442280219148349> Instagram',
                    value: '[Follow here](https://www.instagram.com/amalitopablito/)',
                    inline: true
                },
                {
                    name: '<:TwitchLogo:1503442210488586431> Twitch',
                    value: '[Watch here](https://www.twitch.tv/amalitopablito)',
                    inline: true
                },
                {
                    name: '𝕏 X',
                    value: '[Follow here](https://twitter.com/AmalitoPablito)',
                    inline: true
                }
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
