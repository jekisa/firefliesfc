'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/About.module.css';

export default function About() {
    return (
        <>
            <Navbar />

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.heroSection}>
                    <div className={styles.heroOverlay}></div>
                    <div className={styles.heroImage}>
                        <img src="/images/gallery/trophy-card.jpg" alt="Fireflies FC Team" />
                    </div>
                    <div className={styles.heroContainer}>
                        <div className={styles.heroContent}>
                            <h1 className={styles.pageTitle}>About Us</h1>
                            <p className={styles.subtitle}>The story behind Jakarta's premier football community</p>
                            <div className={styles.statsBar}>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>2018</div>
                                    <div className={styles.statLabel}>Founded</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>28+</div>
                                    <div className={styles.statLabel}>Active Members</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>7</div>
                                    <div className={styles.statLabel}>Trophies</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className={styles.container}>
                    {/* History Section */}
                    <section className={styles.historySection}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                            </div>
                            <h2 className={styles.sectionTitle}>Team History</h2>
                        </div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineCard}>
                                    <div className={styles.timelineYear}>2018</div>
                                    <h3 className={styles.timelineTitle}>Humble Beginnings</h3>
                                    <p className={styles.timelineText}>
                                        Fireflies FC was founded by a group of friends who shared a passion for football.
                                        We started with 10 players playing futsal every weekend in Kuningan.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineCard}>
                                    <div className={styles.timelineYear}>2019-2021</div>
                                    <h3 className={styles.timelineTitle}>Rapid Growth</h3>
                                    <p className={styles.timelineText}>
                                        Our team grew rapidly. From futsal, we began playing mini soccer and eventually
                                        11v11 football at various fields across Jakarta.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineCard}>
                                    <div className={styles.timelineYear}>2022-Present</div>
                                    <h3 className={styles.timelineTitle}>Community Champions</h3>
                                    <p className={styles.timelineText}>
                                        Now with 28+ active players and 7 trophies, we've built strong friendships and
                                        a supportive community. Football is about togetherness and passion.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Philosophy Section */}
                    <section className={styles.philosophySection}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                    <path d="M2 12h20" />
                                </svg>
                            </div>
                            <h2 className={styles.sectionTitle}>Team Philosophy</h2>
                        </div>
                        <div className={styles.philosophyGrid}>
                            <div className={styles.philosophyCard}>
                                <div className={styles.philosophyIcon}>
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                        <path d="M2 12h20" />
                                    </svg>
                                </div>
                                <h3 className={styles.philosophyTitle}>Play with Heart</h3>
                                <p className={styles.philosophyText}>
                                    We play not just to win, but for the joy and passion of football.
                                </p>
                            </div>
                            <div className={styles.philosophyCard}>
                                <div className={styles.philosophyIcon}>
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </div>
                                <h3 className={styles.philosophyTitle}>Team Solidarity</h3>
                                <p className={styles.philosophyText}>
                                    Brotherhood and mutual support between players is the foundation of our team's strength.
                                </p>
                            </div>
                            <div className={styles.philosophyCard}>
                                <div className={styles.philosophyIcon}>
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                    </svg>
                                </div>
                                <h3 className={styles.philosophyTitle}>Grow Together</h3>
                                <p className={styles.philosophyText}>
                                    Every training session and match is an opportunity to learn and become better.
                                </p>
                            </div>
                            <div className={styles.philosophyCard}>
                                <div className={styles.philosophyIcon}>
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <h3 className={styles.philosophyTitle}>Fair Play</h3>
                                <p className={styles.philosophyText}>
                                    Respecting opponents, referees, and the rules is part of our character.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Jersey Section */}
                    <section className={styles.jerseySection}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.sectionIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                    <line x1="7" y1="7" x2="7.01" y2="7" />
                                </svg>
                            </div>
                            <h2 className={styles.sectionTitle}>Our Jerseys</h2>
                        </div>
                        <div className={styles.jerseyGrid}>
                            <div className={styles.jerseyCard}>
                                <div className={styles.jerseyImage} style={{ background: 'linear-gradient(135deg, #A50034 0%, #7D0028 100%)' }}>
                                    <span className={styles.jerseyLabel}>HOME</span>
                                    <div className={styles.jerseyNumber}>10</div>
                                </div>
                                <div className={styles.jerseyContent}>
                                    <h3 className={styles.jerseyTitle}>Home Jersey</h3>
                                    <p className={styles.jerseyDescription}>Fiery Red - Fighting Spirit</p>
                                </div>
                            </div>
                            <div className={styles.jerseyCard}>
                                <div className={styles.jerseyImage} style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #E9ECEF 100%)' }}>
                                    <span className={styles.jerseyLabel} style={{ color: '#212529' }}>AWAY</span>
                                    <div className={styles.jerseyNumber} style={{ color: '#212529' }}>10</div>
                                </div>
                                <div className={styles.jerseyContent}>
                                    <h3 className={styles.jerseyTitle}>Away Jersey</h3>
                                    <p className={styles.jerseyDescription}>Elegant White - Simplicity</p>
                                </div>
                            </div>
                            <div className={styles.jerseyCard}>
                                <div className={styles.jerseyImage} style={{ background: 'linear-gradient(135deg, #003DA5 0%, #002B75 100%)' }}>
                                    <span className={styles.jerseyLabel}>3RD</span>
                                    <div className={styles.jerseyNumber}>10</div>
                                </div>
                                <div className={styles.jerseyContent}>
                                    <h3 className={styles.jerseyTitle}>Third Jersey</h3>
                                    <p className={styles.jerseyDescription}>Strong Blue - Loyalty</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Team Photo Section */}
                    <section className={styles.teamPhotoSection}>
                        <div className={styles.teamPhotoCard}>
                            <div className={styles.teamPhotoImage}>
                                <img src="/images/gallery/players-card.jpg" alt="Fireflies FC Team 2024" />
                                <div className={styles.teamPhotoOverlay}>
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                        <circle cx="12" cy="13" r="4" />
                                    </svg>
                                    <p className={styles.teamPhotoLabel}>Team Photo 2024</p>
                                    <p className={styles.teamPhotoSubtext}>Fireflies FC</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}
