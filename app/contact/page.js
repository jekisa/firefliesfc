'use client';
// ==================== /pages/contact.js ====================
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { socialMedia } from '../../data/teamData';
import styles from '../../styles/Contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Navbar />

            <main className={styles.main}>
                <div className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroIcon}>
                        </div>
                        <h1 className={styles.pageTitle}>Hubungi Kami</h1>
                        <p className={styles.subtitle}>Ada pertanyaan? Ingin bergabung? Kami siap membantu Anda!</p>

                        <div className={styles.statsBar}>
                            <div className={styles.statItem}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <div className={styles.statContent}>
                                    <span className={styles.statValue}>24/7</span>
                                    <span className={styles.statLabel}>Available</span>
                                </div>
                            </div>
                            <div className={styles.statItem}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <div className={styles.statContent}>
                                    <span className={styles.statValue}>Fast</span>
                                    <span className={styles.statLabel}>Response</span>
                                </div>
                            </div>
                            <div className={styles.statItem}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                <div className={styles.statContent}>
                                    <span className={styles.statValue}>100+</span>
                                    <span className={styles.statLabel}>Members</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.container}>

                    <div className={styles.contactGrid}>
                        <div className={styles.formSection}>
                            <div className={styles.sectionHeader}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <h2 className={styles.sectionTitle}>Kirim Pesan</h2>
                            </div>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        <span>Nama Lengkap</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Masukkan nama lengkap Anda"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                        <span>Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                        </svg>
                                        <span>Pesan</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        placeholder="Tulis pesan Anda di sini..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className={styles.textarea}
                                    ></textarea>
                                </div>
                                <button type="submit" className={styles.submitButton}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                    <span>Kirim Pesan</span>
                                </button>
                            </form>
                        </div>

                        <div className={styles.infoSection}>
                            <div className={styles.sectionHeader}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="16" x2="12" y2="12" />
                                    <line x1="12" y1="8" x2="12.01" y2="8" />
                                </svg>
                                <h2 className={styles.sectionTitle}>Info Kontak</h2>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div className={styles.infoContent}>
                                    <h3>Lokasi Latihan</h3>
                                    <p>Lapangan Senayan<br />Jakarta Pusat, DKI Jakarta</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div className={styles.infoContent}>
                                    <h3>Email</h3>
                                    <p>info@firefliesfc.com</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div className={styles.infoContent}>
                                    <h3>Telepon</h3>
                                    <p>+62 812-3456-7890</p>
                                </div>
                            </div>

                            <a href={socialMedia.whatsapp} target="_blank" rel="noopener noreferrer"
                                className={styles.whatsappButton}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                                <span>Join via WhatsApp</span>
                            </a>

                            <div className={styles.socialLinks}>
                                <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                                    className={styles.socialIcon} title="Instagram">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </a>
                                <a href={socialMedia.tiktok} target="_blank" rel="noopener noreferrer"
                                    className={styles.socialIcon} title="TikTok">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                    </svg>
                                </a>
                                <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer"
                                    className={styles.socialIcon} title="Facebook">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                                <a href={socialMedia.youtube} target="_blank" rel="noopener noreferrer"
                                    className={styles.socialIcon} title="YouTube">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mapSection}>
                        <div className={styles.sectionHeader}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                                <line x1="8" y1="2" x2="8" y2="18" />
                                <line x1="16" y1="6" x2="16" y2="22" />
                            </svg>
                            <h2 className={styles.sectionTitle}>Lokasi Kami</h2>
                        </div>
                        <div className={styles.map}
                            style={{ background: 'linear-gradient(135deg, rgba(0, 61, 165, 0.8) 0%, rgba(246, 166, 0, 0.8) 100%)' }}>
                            <div className={styles.mapPlaceholder}>
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <p className={styles.mapTitle}>Lapangan Senayan</p>
                                <p className={styles.mapSubtext}>Jakarta Pusat, DKI Jakarta</p>
                                <button className={styles.mapButton}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                    <span>Open in Maps</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
