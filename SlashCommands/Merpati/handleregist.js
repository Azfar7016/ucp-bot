const { Client, CommandInteraction, MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "handleregist",
    description: "Menampilkan Panel Register Kota Bersama:Rp",
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const msgEmbed = new MessageEmbed()
        .setAuthor({ name:"Kota Bersama Roleplay", iconURL:client.config.ICON_URL })
        .setColor("GOLD")
        .setTitle("User Control Panel Kota Bersama Roleplay")
        .setDescription("Halo Player!!, Selamat datang di Kota Bersama Roleplay, disini adalah tempat untuk mengatur User Control Panel anda Seperti Mendaftar, dll")
        .addField("Kegunaan Tombol", "• `Tombol Register:` Membuat/Mendaftar Akun User Control Panel Anda\n• `Tombol ResendCode:` Mengirim kode/pin Verifikasi Akun User Control Panel Anda\n• `Tombol Generate Code:` Untuk mengubah kode/pin akun UCP anda", true)
        .addField("Requirements Discord Account", "Akun Discord Harus Berumur 7 hari Paling Lambat, jika akun discord anda kurang dari 7 hari tidak akan bisa menggunakan register")
        .setFooter({ text:"Bot Kota Bersama Official" })
        .setTimestamp()

        const Buttons = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId("button-register")
            .setLabel("Register")
            .setStyle("SUCCESS")
            .setEmoji("📃"),

            new MessageButton()
            .setCustomId("button-resendcode")
            .setLabel("ResendCode")
            .setStyle("SUCCESS")
            .setEmoji("🔐"),

            new MessageButton()
            .setCustomId("button-gencode")
            .setLabel("Generate Code")
            .setStyle("PRIMARY")
            .setEmoji("🔑")
        )

        interaction.reply({  embeds: [msgEmbed], components: [Buttons] })
    },
};
