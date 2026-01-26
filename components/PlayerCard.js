'use client';
// /components/PlayerCard.js
import Image from 'next/image';
import styles from '../styles/PlayerCard.module.css';

export default function PlayerCard({ player }) {
    const getPositionIcon = () => {
        if (player.position === 'GK') {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 10v12"/>
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
                </svg>
            );
        } else if (['CB', 'LB', 'RB'].includes(player.position)) {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
            );
        } else if (['CDM', 'CM', 'CAM', 'LW', 'RW'].includes(player.position)) {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
            );
        } else {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
            );
        }
    };

    return (
        <div className={`${styles.card} ${styles[player.status]}`}>
            <div className={styles.cardHeader}>
                <div className={styles.numberBadge}>
                    <span>{player.number}</span>
                </div>
                <div className={`${styles.statusBadge} ${styles[player.status]}`}>
                    {player.status === 'active' ? (
                        <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                            <span>Active</span>
                        </>
                    ) : (
                        <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"/>
                                <line x1="12" y1="8" x2="12" y2="12"/>
                                <line x1="12" y1="16" x2="12.01" y2="16"/>
                            </svg>
                            <span>Injured</span>
                        </>
                    )}
                </div>
            </div>

            <div className={styles.playerImage}
                style={!player.image ? { background: `linear-gradient(${135 + player.number * 5}deg, rgba(0, 61, 165, 0.8) ${player.number * 2}%, rgba(246, 166, 0, 0.8) 100%)` } : {}}>
                {player.image ? (
                    <Image
                        src={player.image}
                        alt={player.name}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                ) : (
                    <div className={styles.imageOverlay}>
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                        </svg>
                    </div>
                )}
            </div>

            <div className={styles.playerInfo}>
                <h3 className={styles.name}>{player.name}</h3>
                <div className={styles.positionRow}>
                    <div className={styles.positionIcon}>
                        {getPositionIcon()}
                    </div>
                    <div className={styles.position}>{player.position}</div>
                </div>
            </div>
        </div>
    );
}
