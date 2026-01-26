// ==================== /data/teamData.js ====================
export const teamStats = {
    balance: "Rp 15.750.000",
    totalPlayers: 28,
    nextMatch: "Minggu, 3 Nov 2024",
    totalTrophies: 7
};

export const matches = [
    {
        id: 1,
        type: "11v11",
        date: "2024-11-03",
        time: "16:00",
        opponent: "FC Menteng Warriors",
        location: "Lapangan Senayan, Jakarta Pusat",
        status: "upcoming",
        homeScore: null,
        awayScore: null
    },
    {
        id: 2,
        type: "futsal",
        date: "2024-10-20",
        time: "19:00",
        opponent: "Kuningan FC",
        location: "Futsal Arena Kuningan",
        status: "completed",
        homeScore: 5,
        awayScore: 3
    },
    {
        id: 3,
        type: "minisoccer",
        date: "2024-10-06",
        time: "17:00",
        opponent: "BSD Galaxy",
        location: "Mini Soccer BSD",
        status: "completed",
        homeScore: 4,
        awayScore: 4
    },
    {
        id: 4,
        type: "11v11",
        date: "2024-09-22",
        time: "15:30",
        opponent: "Tangerang United",
        location: "Stadion Bintaro",
        status: "completed",
        homeScore: 2,
        awayScore: 1
    },
    {
        id: 5,
        type: "futsal",
        date: "2024-09-08",
        time: "20:00",
        opponent: "Jakarta Selatan FC",
        location: "Futsal Lebak Bulus",
        status: "completed",
        homeScore: 6,
        awayScore: 2
    }
];

export const players = [
    { id: 1, name: "Esa Nugroho", position: "GK", number: 1, status: "active", image: "/images/gallery/players/esa.jpg" },
    { id: 19, name: "Yohanes Desianto", position: "RB", number: 19, status: "active", image: "/images/gallery/players/yohan.jpg" },
    { id: 8, name: "Giian Franco", position: "ST", number: 8, status: "active", image: "/images/gallery/players/franco.jpg" },
    { id: 12, name: "Wahid", position: "CM", number: 12, status: "active", image: "/images/gallery/players/wahid.jpg" },
    { id: 4, name: "Noval", position: "CB", number: 4, status: "active", image: "/images/gallery/players/Noval.jpg" },
    { id: 5, name: "Udin", position: "CB", number: 5, status: "injured", image: "/images/gallery/players/udin.jpg" },
    
    // { id: 3, name: "Rizki Ramadhan", position: "CB", number: 5, status: "active" },
    // { id: 4, name: "Dani Pratama", position: "LB", number: 3, status: "active" },
    // { id: 5, name: "Farhan Hakim", position: "RB", number: 2, status: "active" },
    // { id: 6, name: "Yoga Aditya", position: "CDM", number: 6, status: "active" },
    // { id: 7, name: "Reza Pahlevi", position: "CM", number: 8, status: "active" },
    // { id: 8, name: "Iqbal Maulana", position: "CAM", number: 10, status: "active" },
    // { id: 9, name: "Hendra Gunawan", position: "LW", number: 7, status: "active" },
    // { id: 10, name: "Agus Setiawan", position: "RW", number: 11, status: "active" },
    // { id: 11, name: "Bayu Nugroho", position: "ST", number: 9, status: "active" },
    // { id: 12, name: "Dedi Kurniawan", position: "GK", number: 12, status: "active" },
    // { id: 13, name: "Erik Saputra", position: "CM", number: 14, status: "injured" },
    // { id: 14, name: "Faisal Rahman", position: "ST", number: 19, status: "active" },
    // { id: 15, name: "Gilang Pratama", position: "CB", number: 15, status: "active" },
    // { id: 16, name: "Haris Munandar", position: "CM", number: 16, status: "active" },
    // { id: 17, name: "Irfan Hakim", position: "RW", number: 17, status: "injured" },
    // { id: 18, name: "Joko Widodo", position: "CDM", number: 18, status: "active" }
];

export const sponsors = [
    { id: 1, name: "balladabola", logo: "/images/sponsors/balladabola.png" },
    
    // { id: 1, name: "balladabola", logo: "/images/sponsors/balladabola.png" },
    // { id: 2, name: "Toko Olahraga Prima", logo: "/images/sponsors/sponsor2.png" },
    // { id: 3, name: "Bengkel Motor Sentosa", logo: "/images/sponsors/sponsor3.png" },
    // { id: 4, name: "Restaurant Nusantara", logo: "/images/sponsors/sponsor4.png" },
    // { id: 5, name: "PT Digital Solutions", logo: "/images/sponsors/sponsor5.png" },
    // { id: 6, name: "Café Senayan", logo: "/images/sponsors/sponsor6.png" }
];

export const gallery = {
    photos: [
        "/images/gallery/photo1.jpg",
        "/images/gallery/photo2.jpg",
        "/images/gallery/photo3.jpg",
        "/images/gallery/photo4.jpg",
        "/images/gallery/photo5.jpg",
        "/images/gallery/photo6.jpg"
    ],
    videos: [
        "https://www.youtube.com/watch?v=6sy8KpCrYOQ",
        "https://www.youtube.com/watch?v=wANMg8opwjs",
        "https://www.youtube.com/watch?v=h08a56HwCp4"
    ]
};

export const socialMedia = {
    instagram: "https://instagram.com/jkt_fireflies",
    tiktok: "https://www.tiktok.com/@jkt.fireflies",
    facebook: "https://facebook.com/firefliesfc",
    youtube: "https://youtube.com/@firefliesfc",
    whatsapp: "https://wa.me/6282111006258"
};
