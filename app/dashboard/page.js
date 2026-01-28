'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { matches as initialMatches, players as initialPlayers, sponsors as initialSponsors, gallery as initialGallery } from '../../data/teamData';
import styles from '../../styles/Dashboard.module.css';

export default function DashboardOverview() {
    const [stats, setStats] = useState({
        matches: 0,
        players: 0,
        sponsors: 0,
        photos: 0,
        videos: 0
    });

    useEffect(() => {
        // Get data from localStorage or use initial data
        const storedMatches = localStorage.getItem('dashboardMatches');
        const storedPlayers = localStorage.getItem('dashboardPlayers');
        const storedSponsors = localStorage.getItem('dashboardSponsors');
        const storedGallery = localStorage.getItem('dashboardGallery');

        const matchesData = storedMatches ? JSON.parse(storedMatches) : initialMatches;
        const playersData = storedPlayers ? JSON.parse(storedPlayers) : initialPlayers;
        const sponsorsData = storedSponsors ? JSON.parse(storedSponsors) : initialSponsors;
        const galleryData = storedGallery ? JSON.parse(storedGallery) : initialGallery;

        setStats({
            matches: matchesData.length,
            players: playersData.length,
            sponsors: sponsorsData.length,
            photos: galleryData.photos?.length || 0,
            videos: galleryData.videos?.length || 0
        });
    }, []);

    return (
        <div>
            <div className={styles.pageHeader}>
                <p className={styles.pageDescription}>
                    Welcome to the Fireflies FC Admin Dashboard. Manage your team data from here.
                </p>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={`${styles.statIcon} ${styles.statIconBlue}`}>
                        <span>⚽</span>
                    </div>
                    <div className={styles.statInfo}>
                        <h3>{stats.matches}</h3>
                        <p>Total Matches</p>
                    </div>
                </div>

                <div className={styles.statCard}>
                    <div className={`${styles.statIcon} ${styles.statIconGreen}`}>
                        <span>👥</span>
                    </div>
                    <div className={styles.statInfo}>
                        <h3>{stats.players}</h3>
                        <p>Total Players</p>
                    </div>
                </div>

                <div className={styles.statCard}>
                    <div className={`${styles.statIcon} ${styles.statIconOrange}`}>
                        <span>🤝</span>
                    </div>
                    <div className={styles.statInfo}>
                        <h3>{stats.sponsors}</h3>
                        <p>Sponsors</p>
                    </div>
                </div>

                <div className={styles.statCard}>
                    <div className={`${styles.statIcon} ${styles.statIconRed}`}>
                        <span>🖼️</span>
                    </div>
                    <div className={styles.statInfo}>
                        <h3>{stats.photos + stats.videos}</h3>
                        <p>Gallery Items</p>
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>Quick Actions</h2>
                </div>
                <div className={styles.cardBody}>
                    <div className={styles.quickActions}>
                        <Link href="/dashboard/matches" className={styles.quickAction}>
                            <div className={styles.quickActionIcon}>⚽</div>
                            <span className={styles.quickActionText}>Manage Matches</span>
                        </Link>
                        <Link href="/dashboard/players" className={styles.quickAction}>
                            <div className={styles.quickActionIcon}>👥</div>
                            <span className={styles.quickActionText}>Manage Players</span>
                        </Link>
                        <Link href="/dashboard/gallery" className={styles.quickAction}>
                            <div className={styles.quickActionIcon}>🖼️</div>
                            <span className={styles.quickActionText}>Manage Gallery</span>
                        </Link>
                        <Link href="/dashboard/sponsors" className={styles.quickAction}>
                            <div className={styles.quickActionIcon}>🤝</div>
                            <span className={styles.quickActionText}>Manage Sponsors</span>
                        </Link>
                        <Link href="/dashboard/contacts" className={styles.quickAction}>
                            <div className={styles.quickActionIcon}>📱</div>
                            <span className={styles.quickActionText}>Update Contacts</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
