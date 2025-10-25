// /components/StatsCard.js
import styles from '../styles/StatsCard.module.css';

export default function StatsCard({ icon, value, label }) {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.value}>{value}</div>
            <div className={styles.label}>{label}</div>
        </div>
    );
}