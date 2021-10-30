class ind {

    /**
     * @param {String} prefix
    **/
    constructor(prefix) {
        if (!prefix) throw new Error("Unknown prefix : set prefix first")
        this.prefix = prefix
    }

    help(pushname) {
        return `[ADIIBOT]

Hi ${pushname} 👋

Im Whatsapp Bot With Simple Features
        `.trim()
    }

    menuList() {
        return [
            {title: "Downloader", rows: [
                {
                    title: "TikTok Downloader",
                    description: "Mengunduh audio/video dari tiktok tanpa watermark",
                    rowId: `${this.prefix}tiktok`
                },
                {
                    title: "YouTube Downloader",
                    description: "Mengunduh audio/video dari YouTube",
                    rowId: `${this.prefix}yt`
                },
                {
                    title: "Twitter Downloader",
                    description: "Mengunduh foto/video dari twitter",
                    rowId: `${this.prefix}tweet`
                },
                {
                    title: "XNXX Downloader",
                    description: "weh haram:v",
                    rowId: `${this.prefix}xnxx`
                }
            ]},
            {title: "Stalker", rows: [
                {
                    title: "Instagram Stalker",
                    description: "Menampilkan profile instagram seseorang berdasarkan nama pengguna",
                    rowId: `${this.prefix}igstalk`
                },
                {
                    title: "Twitter Stalker",
                    description: "Menampilkan profile twitter seseorang berdasarkan nama pengguna",
                    rowId: `${this.prefix}twstalk`
                },
                {
                    title: "TikTok Stalker",
                    description: "Menampilkan profile tiktok seseorang berdasarkan nama pengguna",
                    rowId: `${this.prefix}ttstalk`
                }
            ]},
            {title: "Sticker", rows: [
                {
                    title: "Image To Sticker",
                    description: "Mengubah foto menjadi stiker",
                    rowId: `${this.prefix}s`
                },
                {
                    title: "Sticker Fire",
                    description: "Mengubah foto menjadi stiker dengan efek terbakar api",
                    rowId: `${this.prefix}sburn`
                },
                {
                    title: "Sticker Lighting",
                    description: "Mengubah foto menjadi stiker dengan efek sambaran petir",
                    rowId: `${this.prefix}slight`
                },
                {
                    title: "Text To Sticker",
                    description: "Mengubah teks menjadi stiker",
                    rowId: `${this.prefix}ttp`
                },
                {
                    title: "Text To Sticker (animated)",
                    description: "Mengubah teks menjadi stiker animasi (bergerak)",
                    rowId: `${this.prefix}attp`
                }
            ]}
        ]
    }

    err(cmd) {
        return {
            sticker: [`Kirim gambar dengan caption *${this.prefix+cmd}*`, `Contoh : *${this.prefix+cmd} teks*`, "Terjadi kesalahan", `Kirim gambar atau video dengan caption *${this.prefix+cmd}*`],
            deel: `Contoh : *${this.prefix+cmd} url*`,
            invalid: "Url tidak valid"
        }
    }

    res(res, type) {
        if (type === "tiktok") {
            return `👍 Suka : ${res.likes}\n🗯️ Komentar : ${res.comments}\n↪️ Dibagikan : ${res.shares}\n👀 Ditonton : ${res.plays}\n🎶 ${res.music.title} (${res.music.author})\n👤 ${res.author.username} (${res.author.name})\n📃 ${res.description}`
        } else if (type === "youtube") {
            return `📍 Judul : ${res.title}\n👍 Suka: ${res.likes}\n👎 Tidak suka : ${res.dislikes}\n👀 Ditonton : ${res.views}`
        } else if (type === "xnxx") {
            return `📍 Judul : ${res.title}\n👀 Ditonton : ${res.views}\n⏳ Durasi : ${res.duration}\n📃 ${res.description}`
        }
    }

    large(url) {
        return `Ukuran file terlalu besar, whatsapp tidak bisa mengirim video jika ukurannya terlalu besar\nLink video : ${url}`
    }

    wait() {
        return "Tunggu sayang:v"
    }

    footer() {
        return `If Button Not Showed

${this.prefix}tiktok
${this.prefix}yt
${this.prefix}tweet
${this.prefix}xnxx
${this.prefix}igstalk
${this.prefix}twstalk
${this.prefix}ttstalk
${this.prefix}sticker
${this.prefix}sburn
${this.prefix}slight
${this.prefix}ttp
${this.prefix}attp

©by Adii
`
    }
}

module.exports = ind
