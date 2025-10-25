'use client';
import { useEffect } from 'react';
import styles from '../styles/BePartOfUsModal.module.css';

export default function BePartOfUsModal({ isOpen, onClose }) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Close modal on Escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <div className={styles.modalContent}>
                    {/* Left Column - Text Content */}
                    <div className={styles.leftColumn}>
                        <div className={styles.header}>
                            <h2 className={styles.title}>Be Part of Us</h2>
                            <p className={styles.subtitle}>Partner with Fireflies FC and reach passionate football fans</p>
                        </div>

                        {/* Statistics Grid */}
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <div className={styles.statIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </div>
                                <div className={styles.statInfo}>
                                    <div className={styles.statValue}>25K+</div>
                                    <div className={styles.statLabel}>Instagram Reach</div>
                                </div>
                            </div>

                            <div className={styles.statCard}>
                                <div className={styles.statIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                        <path d="M13 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                        <path d="M9 6a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                        <path d="M5 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                        <path d="M5 6h4v4H5z" />
                                        <path d="M13 18v-6h4v6h-4z" />
                                    </svg>
                                </div>
                                <div className={styles.statInfo}>
                                    <div className={styles.statValue}>50K+</div>
                                    <div className={styles.statLabel}>TikTok Reach</div>
                                </div>
                            </div>

                            <div className={styles.statCard}>
                                <div className={styles.statIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M2 12h20" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>
                                <div className={styles.statInfo}>
                                    <div className={styles.statValue}>15K+</div>
                                    <div className={styles.statLabel}>Website Visitors</div>
                                </div>
                            </div>

                            <div className={styles.statCard}>
                                <div className={styles.statIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </div>
                                <div className={styles.statInfo}>
                                    <div className={styles.statValue}>500+</div>
                                    <div className={styles.statLabel}>Event Attendance</div>
                                </div>
                            </div>

                            <div className={styles.statCard}>
                                <div className={styles.statIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                    </svg>
                                </div>
                                <div className={styles.statInfo}>
                                    <div className={styles.statValue}>85%</div>
                                    <div className={styles.statLabel}>Engagement Rate</div>
                                </div>
                            </div>

                            <div className={styles.statCard}>
                                <div className={styles.statIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                    </svg>
                                </div>
                                <div className={styles.statInfo}>
                                    <div className={styles.statValue}>30K+</div>
                                    <div className={styles.statLabel}>Monthly Impressions</div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className={styles.description}>
                            <p>Your brand shines on and off the pitch — through jerseys, social media, and live events.</p>
                        </div>

                        {/* CTA Buttons */}
                        <div className={styles.ctaButtons}>
                            <a href="/sponsorship-proposal.pdf" download className={styles.primaryButton}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download Sponsorship Proposal
                            </a>
                            <a href="/contact" className={styles.secondaryButton}>
                                Schedule a Meeting
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Team Photo */}
                    <div className={styles.rightColumn}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.imageOverlay}>
                                <div className={styles.overlayBadge}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <span>Premium Partner</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
