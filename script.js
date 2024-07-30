document.addEventListener('DOMContentLoaded', (event) => {
    const discordLink = document.getElementById('discord');
    const youtubeLink = document.getElementById('youtube');
    const robloxLink = document.getElementById('roblox');
    const githubLink = document.getElementById('github');

    discordLink.addEventListener('click', () => {
        window.location.href = 'https://discord.gg/QTSJHP7s';
    });

    youtubeLink.addEventListener('click', () => {
        window.location.href = 'https://www.youtube.com/channel/UCZZnS7OXPIY_XwIcq5UFB2g';
    });

    robloxLink.addEventListener('click', () => {
        window.location.href = 'https://www.roblox.com/users/1897918863/profile';
    });

    githubLink.addEventListener('click', () => {
        window.location.href = 'https://github.com/nliodaxz65';
    });
});