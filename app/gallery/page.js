'use client';
// ==================== /pages/gallery.js ====================
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { gallery } from '../../data/teamData';
import styles from '../../styles/Gallery.module.css';

export default function Gallery() {
    const [activeTab, setActiveTab] = useState('photos');

    // Convert YouTube watch URL to embed URL
    const getEmbedUrl = (url) => {
        if (url.includes('youtube.com/watch?v=')) {
            const videoId = url.split('v=')[1].split('&')[0];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        if (url.includes('youtu.be/')) {
            const videoId = url.split('youtu.be/')[1].split('?')[0];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    };

    return (
        <>
            <Navbar />

            <main className={styles.main}>
                <div className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroIcon}>
                            {/* <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <polyline points="21 15 16 10 5 21"/>
                            </svg> */}
                        </div>
                        <h1 className={styles.pageTitle}>Galeri</h1>
                        <p className={styles.subtitle}>Momen terbaik kami di lapangan dan di luar lapangan</p>

                        <div className={styles.statsBar}>
                            <div className={styles.statItem}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <polyline points="21 15 16 10 5 21" />
                                </svg>
                                <div className={styles.statContent}>
                                    <span className={styles.statValue}>{gallery.photos.length}</span>
                                    <span className={styles.statLabel}>Photos</span>
                                </div>
                            </div>
                            <div className={styles.statItem}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="23 7 16 12 23 17 23 7" />
                                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                                </svg>
                                <div className={styles.statContent}>
                                    <span className={styles.statValue}>{gallery.videos.length}</span>
                                    <span className={styles.statLabel}>Videos</span>
                                </div>
                            </div>
                            <div className={styles.statItem}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                                <div className={styles.statContent}>
                                    <span className={styles.statValue}>{gallery.photos.length + gallery.videos.length}</span>
                                    <span className={styles.statLabel}>Total Media</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.container}>
                    <div className={styles.tabs}>
                        <button
                            className={activeTab === 'photos' ? styles.tabActive : styles.tab}
                            onClick={() => setActiveTab('photos')}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                            <span>Photos ({gallery.photos.length})</span>
                        </button>
                        <button
                            className={activeTab === 'videos' ? styles.tabActive : styles.tab}
                            onClick={() => setActiveTab('videos')}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="23 7 16 12 23 17 23 7" />
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                            </svg>
                            <span>Videos ({gallery.videos.length})</span>
                        </button>
                    </div>

                    {activeTab === 'photos' && (
                        <div className={styles.photosGrid}>
                            {gallery.photos.map((photo, idx) => (
                                <div key={idx} className={styles.photoCard}>
                                    <Image
                                        src={photo}
                                        alt={`Gallery photo ${idx + 1}`}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className={styles.photoOverlay}>
                                        <p className={styles.photoCaption}>Match Moment #{idx + 1}</p>
                                        <div className={styles.photoActions}>
                                            <button className={styles.actionButton}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                    <circle cx="12" cy="12" r="3" />
                                                </svg>
                                            </button>
                                            <button className={styles.actionButton}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                    <polyline points="7 10 12 15 17 10" />
                                                    <line x1="12" y1="15" x2="12" y2="3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'videos' && (
                        <div className={styles.videosGrid}>
                            {gallery.videos.map((video, idx) => (
                                <div key={idx} className={styles.videoCard}>
                                    <div className={styles.videoWrapper}>
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={getEmbedUrl(video)}
                                            title={`Video ${idx + 1}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className={styles.videoInfo}>
                                        <div className={styles.videoTitle}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="5 3 19 12 5 21 5 3" />
                                            </svg>
                                            <span>Match Highlights #{idx + 1}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}
