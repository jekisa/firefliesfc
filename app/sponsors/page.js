'use client';
// ==================== /pages/sponsors.js ====================
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { sponsors } from '../../data/teamData';
import styles from '../../styles/Sponsors.module.css';

export default function Sponsors() {
    return (
        <>
            <Navbar />

            <main className={styles.main}>
                <div className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroIcon}>
                            {/* <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                <path d="M2 17l10 5 10-5"/>
                                <path d="M2 12l10 5 10-5"/>
                            </svg> */}
                        </div>
                        <h1 className={styles.pageTitle}>Our Sponsors</h1>
                        <p className={styles.subtitle}>Thank you to our partners who support our journey</p>

                        <div className={styles.statsBar}>
                            <div className={styles.statItem}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                <div className={styles.statContent}>
                                    <span className={styles.statValue}>{sponsors.length}</span>
                                    <span className={styles.statLabel}>Active Partners</span>
                                </div>
                            </div>
                            <div className={styles.statItem}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="1" x2="12" y2="23" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                                <div className={styles.statContent}>
                                    <span className={styles.statValue}>100%</span>
                                    <span className={styles.statLabel}>Support</span>
                                </div>
                            </div>
                            <div className={styles.statItem}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                                <div className={styles.statContent}>
                                    <span className={styles.statValue}>3+</span>
                                    <span className={styles.statLabel}>Years</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.sectionIcon}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            </svg>
                        </div>
                        <h2 className={styles.sectionTitle}>Our Valued Partners</h2>
                    </div>

                    <div className={styles.sponsorsGrid}>
                        {sponsors.map((sponsor, idx) => (
                            <div key={sponsor.id} className={styles.sponsorCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.sponsorBadge}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <span>Partner</span>
                                    </div>
                                </div>
                                <div className={styles.sponsorLogo}
                                    style={!sponsor.logo ? { background: `linear-gradient(${135 + idx * 30}deg, rgba(0, 61, 165, 0.1) ${idx * 10}%, rgba(246, 166, 0, 0.1) 100%)` } : {}}>
                                    {sponsor.logo ? (
                                        <Image
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            fill
                                            style={{ objectFit: 'contain', padding: '1rem' }}
                                        />
                                    ) : (
                                        <div className={styles.logoWrapper}>
                                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                                <path d="M2 17l10 5 10-5" />
                                                <path d="M2 12l10 5 10-5" />
                                            </svg>
                                            <span className={styles.logoText}>{sponsor.name.substring(0, 2).toUpperCase()}</span>
                                        </div>
                                    )}
                                </div>
                                <h3 className={styles.sponsorName}>{sponsor.name}</h3>
                                <div className={styles.sponsorCategory}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                        <line x1="7" y1="7" x2="7.01" y2="7" />
                                    </svg>
                                    <span>Official Sponsor</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <section className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <div className={styles.ctaIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="8.5" cy="7" r="4" />
                                    <polyline points="17 11 19 13 23 9" />
                                </svg>
                            </div>
                            <h2 className={styles.ctaTitle}>Want to Become Our Sponsor?</h2>
                            <p className={styles.ctaText}>
                                Join our community and increase your brand visibility.
                                Get maximum exposure on jerseys, social media, and our events.
                            </p>
                            <div className={styles.benefits}>
                                <div className={styles.benefit}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                    <span>Logo on Team Jersey</span>
                                </div>
                                <div className={styles.benefit}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                    <span>Social Media Promotion</span>
                                </div>
                                <div className={styles.benefit}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                    <span>Banner at Every Match</span>
                                </div>
                                <div className={styles.benefit}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                    <span>Exposure at Official Events</span>
                                </div>
                            </div>
                            <button className={styles.ctaButton}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="8.5" cy="7" r="4" />
                                    <polyline points="17 11 19 13 23 9" />
                                </svg>
                                <span>Become a Sponsor</span>
                            </button>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}
