'use client';
// ==================== /pages/players.js ====================
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PlayerCard from '../../components/PlayerCard';
import { players } from '../../data/teamData';
import styles from '../../styles/Players.module.css';

export default function Players() {
    const activePlayers = players.filter(p => p.status === 'active');
    const injuredPlayers = players.filter(p => p.status === 'injured');

    const getPositionPlayers = (position) => activePlayers.filter(p => p.position === position);
    const goalkeepers = getPositionPlayers('GK');
    const defenders = activePlayers.filter(p => ['CB', 'LB', 'RB'].includes(p.position));
    const midfielders = activePlayers.filter(p => ['CDM', 'CM', 'CAM', 'LW', 'RW'].includes(p.position));
    const forwards = getPositionPlayers('ST');

    return (
        <>
            <Navbar />

            <main className={styles.main}>
                <div className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroIcon}>
                            {/* <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg> */}
                        </div>
                        <h1 className={styles.pageTitle}>Skuad Pemain</h1>
                        <p className={styles.subtitle}>Tim kami yang siap bertanding dengan dedikasi penuh</p>

                        <div className={styles.statsBar}>
                            <div className={styles.statItem}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                <div className={styles.statContent}>
                                    <span className={styles.statValue}>{activePlayers.length}</span>
                                    <span className={styles.statLabel}>Active Players</span>
                                </div>
                            </div>
                            <div className={styles.statItem}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                                <div className={styles.statContent}>
                                    <span className={styles.statValue}>{defenders.length + midfielders.length + forwards.length}</span>
                                    <span className={styles.statLabel}>Field Players</span>
                                </div>
                            </div>
                            <div className={styles.statItem}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 16v-4" />
                                    <path d="M12 8h.01" />
                                </svg>
                                <div className={styles.statContent}>
                                    <span className={styles.statValue}>{injuredPlayers.length}</span>
                                    <span className={styles.statLabel}>Injured</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.container}>
                    {goalkeepers.length > 0 && (
                        <section className={styles.playerSection}>
                            <div className={styles.sectionHeader}>
                                <div className={styles.sectionIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 10v12" />
                                        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                                    </svg>
                                </div>
                                <h2 className={styles.sectionTitle}>Goalkeepers ({goalkeepers.length})</h2>
                            </div>
                            <div className={styles.playersGrid}>
                                {goalkeepers.map(player => (
                                    <PlayerCard key={player.id} player={player} />
                                ))}
                            </div>
                        </section>
                    )}

                    {defenders.length > 0 && (
                        <section className={styles.playerSection}>
                            <div className={styles.sectionHeader}>
                                <div className={styles.sectionIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <h2 className={styles.sectionTitle}>Defenders ({defenders.length})</h2>
                            </div>
                            <div className={styles.playersGrid}>
                                {defenders.map(player => (
                                    <PlayerCard key={player.id} player={player} />
                                ))}
                            </div>
                        </section>
                    )}

                    {midfielders.length > 0 && (
                        <section className={styles.playerSection}>
                            <div className={styles.sectionHeader}>
                                <div className={styles.sectionIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                    </svg>
                                </div>
                                <h2 className={styles.sectionTitle}>Midfielders ({midfielders.length})</h2>
                            </div>
                            <div className={styles.playersGrid}>
                                {midfielders.map(player => (
                                    <PlayerCard key={player.id} player={player} />
                                ))}
                            </div>
                        </section>
                    )}

                    {forwards.length > 0 && (
                        <section className={styles.playerSection}>
                            <div className={styles.sectionHeader}>
                                <div className={styles.sectionIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                    </svg>
                                </div>
                                <h2 className={styles.sectionTitle}>Forwards ({forwards.length})</h2>
                            </div>
                            <div className={styles.playersGrid}>
                                {forwards.map(player => (
                                    <PlayerCard key={player.id} player={player} />
                                ))}
                            </div>
                        </section>
                    )}

                    {injuredPlayers.length > 0 && (
                        <section className={styles.playerSection}>
                            <div className={styles.sectionHeader}>
                                <div className={`${styles.sectionIcon} ${styles.injuredIcon}`}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>
                                </div>
                                <h2 className={styles.sectionTitle}>Injured Players ({injuredPlayers.length})</h2>
                            </div>
                            <div className={styles.playersGrid}>
                                {injuredPlayers.map(player => (
                                    <PlayerCard key={player.id} player={player} />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}
