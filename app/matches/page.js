'use client';
// ==================== /pages/matches.js ====================
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MatchCard from '../../components/MatchCard';
import { matches } from '../../data/teamData';
import styles from '../../styles/Matches.module.css';

export default function Matches() {
    const [filter, setFilter] = useState('all');

    const filteredMatches = matches.filter(match =>
        filter === 'all' ? true : match.type === filter
    );

    const upcomingMatches = filteredMatches.filter(m => m.status === 'upcoming');
    const completedMatches = filteredMatches.filter(m => m.status === 'completed');

    return (
        <>
            <Navbar />

            <main className={styles.main}>
                <div className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroIcon}>
                            {/* <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                <path d="M2 12h20" />
                            </svg> */}
                        </div>
                        <h1 className={styles.pageTitle}>Jadwal & Hasil Pertandingan</h1>
                        <p className={styles.subtitle}>Ikuti perkembangan tim kami di setiap pertandingan</p>

                        <div className={styles.statsBar}>
                            <div className={styles.statItem}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                                <div className={styles.statContent}>
                                    <span className={styles.statValue}>{matches.length}</span>
                                    <span className={styles.statLabel}>Total Pertandingan</span>
                                </div>
                            </div>
                            <div className={styles.statItem}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <div className={styles.statContent}>
                                    <span className={styles.statValue}>{upcomingMatches.length}</span>
                                    <span className={styles.statLabel}>Akan Datang</span>
                                </div>
                            </div>
                            <div className={styles.statItem}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <div className={styles.statContent}>
                                    <span className={styles.statValue}>{completedMatches.length}</span>
                                    <span className={styles.statLabel}>Selesai</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.container}>
                    <div className={styles.filterSection}>
                        <div className={styles.filterLabel}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                            </svg>
                            <span>Filter Kategori:</span>
                        </div>
                        <div className={styles.filterButtons}>
                            <button
                                className={filter === 'all' ? styles.filterActive : styles.filterButton}
                                onClick={() => setFilter('all')}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="8" y1="6" x2="21" y2="6" />
                                    <line x1="8" y1="12" x2="21" y2="12" />
                                    <line x1="8" y1="18" x2="21" y2="18" />
                                    <line x1="3" y1="6" x2="3.01" y2="6" />
                                    <line x1="3" y1="12" x2="3.01" y2="12" />
                                    <line x1="3" y1="18" x2="3.01" y2="18" />
                                </svg>
                                Semua
                            </button>
                            <button
                                className={filter === '11v11' ? styles.filterActive : styles.filterButton}
                                onClick={() => setFilter('11v11')}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="9" y1="21" x2="9" y2="9" />
                                </svg>
                                11v11
                            </button>
                            <button
                                className={filter === 'futsal' ? styles.filterActive : styles.filterButton}
                                onClick={() => setFilter('futsal')}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="7" width="20" height="14" rx="2" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                                Futsal
                            </button>
                            <button
                                className={filter === 'minisoccer' ? styles.filterActive : styles.filterButton}
                                onClick={() => setFilter('minisoccer')}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="12" r="6" />
                                    <circle cx="12" cy="12" r="2" />
                                </svg>
                                Mini Soccer
                            </button>
                        </div>
                    </div>

                    {upcomingMatches.length > 0 && (
                        <section className={styles.matchSection}>
                            <div className={styles.sectionHeader}>
                                <div className={styles.sectionIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <h2 className={styles.sectionTitle}>Pertandingan Mendatang</h2>
                            </div>
                            <div className={styles.matchesGrid}>
                                {upcomingMatches.map(match => (
                                    <MatchCard key={match.id} match={match} />
                                ))}
                            </div>
                        </section>
                    )}

                    {completedMatches.length > 0 && (
                        <section className={styles.matchSection}>
                            <div className={styles.sectionHeader}>
                                <div className={styles.sectionIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <h2 className={styles.sectionTitle}>Hasil Pertandingan</h2>
                            </div>
                            <div className={styles.matchesGrid}>
                                {completedMatches.map(match => (
                                    <MatchCard key={match.id} match={match} />
                                ))}
                            </div>
                        </section>
                    )}

                    {filteredMatches.length === 0 && (
                        <div className={styles.noMatches}>
                            <div className={styles.noMatchesIcon}>
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="15" y1="9" x2="9" y2="15" />
                                    <line x1="9" y1="9" x2="15" y2="15" />
                                </svg>
                            </div>
                            <p>Tidak ada pertandingan untuk kategori ini</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}