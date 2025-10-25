// /components/MatchCard.js
import styles from '../styles/MatchCard.module.css';

export default function MatchCard({ match, featured = false }) {
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getResult = () => {
        if (match.status !== 'completed') return null;
        if (match.homeScore > match.awayScore) return 'win';
        if (match.homeScore < match.awayScore) return 'lose';
        return 'draw';
    };

    const getMatchTypeIcon = () => {
        switch(match.type) {
            case '11v11':
                return (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <line x1="3" y1="9" x2="21" y2="9"/>
                        <line x1="9" y1="21" x2="9" y2="9"/>
                    </svg>
                );
            case 'futsal':
                return (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2"/>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                );
            case 'minisoccer':
                return (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="12" r="6"/>
                        <circle cx="12" cy="12" r="2"/>
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className={`${styles.card} ${featured ? styles.featured : ''} ${styles[getResult()]}`}>
            <div className={styles.cardHeader}>
                <div className={styles.matchType}>
                    {getMatchTypeIcon()}
                    <span>{match.type.toUpperCase()}</span>
                </div>
                {match.status === 'completed' && (
                    <div className={`${styles.resultBadge} ${styles[getResult()]}`}>
                        {getResult() === 'win' && (
                            <>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 9l6 6 6-6"/>
                                </svg>
                                <span>WIN</span>
                            </>
                        )}
                        {getResult() === 'lose' && (
                            <>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 15l-6-6-6 6"/>
                                </svg>
                                <span>LOSE</span>
                            </>
                        )}
                        {getResult() === 'draw' && (
                            <>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg>
                                <span>DRAW</span>
                            </>
                        )}
                    </div>
                )}
            </div>

            <div className={styles.matchInfo}>
                <div className={styles.dateTime}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>{formatDate(match.date)}</span>
                </div>
                <div className={styles.time}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>{match.time} WIB</span>
                </div>
            </div>

            <div className={styles.teams}>
                <div className={styles.team}>
                    <div className={styles.teamLogo}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                            <path d="M2 12h20"/>
                        </svg>
                    </div>
                    <div className={styles.teamName}>Fireflies FC</div>
                    {match.status === 'completed' && (
                        <div className={styles.score}>{match.homeScore}</div>
                    )}
                </div>

                <div className={styles.vs}>
                    <div className={styles.vsCircle}>VS</div>
                </div>

                <div className={styles.team}>
                    <div className={styles.teamLogo}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div className={styles.teamName}>{match.opponent}</div>
                    {match.status === 'completed' && (
                        <div className={styles.score}>{match.awayScore}</div>
                    )}
                </div>
            </div>

            <div className={styles.location}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>{match.location}</span>
            </div>

            <div className={`${styles.status} ${styles[match.status]}`}>
                {match.status === 'upcoming' ? (
                    <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span>Upcoming Match</span>
                    </>
                ) : (
                    <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                        <span>Match Completed</span>
                    </>
                )}
            </div>
        </div>
    );
}