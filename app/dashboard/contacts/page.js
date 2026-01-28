'use client';
import { useState, useEffect } from 'react';
import { socialMedia as initialSocialMedia } from '../../../data/teamData';
import styles from '../../../styles/Dashboard.module.css';

export default function ContactsPage() {
    const [contacts, setContacts] = useState({
        instagram: '',
        tiktok: '',
        facebook: '',
        youtube: '',
        whatsapp: ''
    });
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('dashboardContacts');
        if (stored) {
            setContacts(JSON.parse(stored));
        } else {
            setContacts(initialSocialMedia);
            localStorage.setItem('dashboardContacts', JSON.stringify(initialSocialMedia));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContacts(prev => ({ ...prev, [name]: value }));
        setSaved(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('dashboardContacts', JSON.stringify(contacts));
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div>
            <div className={styles.pageHeader}>
                <p className={styles.pageDescription}>
                    Update social media links and contact information
                </p>
            </div>

            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>Social Media Links</h2>
                </div>
                <div className={styles.cardBody}>
                    {saved && (
                        <div className={styles.successMessage}>
                            Contact information saved successfully!
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className={`${styles.form} ${styles.contactForm}`}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                <span style={{ marginRight: '0.5rem' }}>📷</span>
                                Instagram
                            </label>
                            <input
                                type="url"
                                name="instagram"
                                value={contacts.instagram}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="https://instagram.com/username"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                <span style={{ marginRight: '0.5rem' }}>🎵</span>
                                TikTok
                            </label>
                            <input
                                type="url"
                                name="tiktok"
                                value={contacts.tiktok}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="https://tiktok.com/@username"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                <span style={{ marginRight: '0.5rem' }}>👤</span>
                                Facebook
                            </label>
                            <input
                                type="url"
                                name="facebook"
                                value={contacts.facebook}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="https://facebook.com/pagename"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                <span style={{ marginRight: '0.5rem' }}>▶️</span>
                                YouTube
                            </label>
                            <input
                                type="url"
                                name="youtube"
                                value={contacts.youtube}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="https://youtube.com/@channel"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                <span style={{ marginRight: '0.5rem' }}>💬</span>
                                WhatsApp
                            </label>
                            <input
                                type="url"
                                name="whatsapp"
                                value={contacts.whatsapp}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="https://wa.me/628xxxxxxxxxx"
                            />
                            <small style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                                Use format: https://wa.me/[country code][phone number] (e.g., https://wa.me/6281234567890)
                            </small>
                        </div>

                        <button type="submit" className={styles.saveButton}>
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
