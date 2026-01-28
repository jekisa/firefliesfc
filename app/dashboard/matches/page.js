'use client';
import { useState, useEffect } from 'react';
import { matches as initialMatches } from '../../../data/teamData';
import styles from '../../../styles/Dashboard.module.css';

export default function MatchesPage() {
    const [matches, setMatches] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingMatch, setEditingMatch] = useState(null);
    const [formData, setFormData] = useState({
        type: '11v11',
        date: '',
        time: '',
        opponent: '',
        location: '',
        status: 'upcoming',
        homeScore: '',
        awayScore: ''
    });

    useEffect(() => {
        const stored = localStorage.getItem('dashboardMatches');
        if (stored) {
            setMatches(JSON.parse(stored));
        } else {
            setMatches(initialMatches);
            localStorage.setItem('dashboardMatches', JSON.stringify(initialMatches));
        }
    }, []);

    const saveMatches = (newMatches) => {
        setMatches(newMatches);
        localStorage.setItem('dashboardMatches', JSON.stringify(newMatches));
    };

    const openAddModal = () => {
        setEditingMatch(null);
        setFormData({
            type: '11v11',
            date: '',
            time: '',
            opponent: '',
            location: '',
            status: 'upcoming',
            homeScore: '',
            awayScore: ''
        });
        setIsModalOpen(true);
    };

    const openEditModal = (match) => {
        setEditingMatch(match);
        setFormData({
            type: match.type,
            date: match.date,
            time: match.time,
            opponent: match.opponent,
            location: match.location,
            status: match.status,
            homeScore: match.homeScore !== null ? match.homeScore.toString() : '',
            awayScore: match.awayScore !== null ? match.awayScore.toString() : ''
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingMatch(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const matchData = {
            ...formData,
            homeScore: formData.status === 'completed' ? parseInt(formData.homeScore) || 0 : null,
            awayScore: formData.status === 'completed' ? parseInt(formData.awayScore) || 0 : null
        };

        if (editingMatch) {
            const updated = matches.map(m =>
                m.id === editingMatch.id ? { ...m, ...matchData } : m
            );
            saveMatches(updated);
        } else {
            const newMatch = {
                ...matchData,
                id: Math.max(...matches.map(m => m.id), 0) + 1
            };
            saveMatches([...matches, newMatch]);
        }

        closeModal();
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this match?')) {
            saveMatches(matches.filter(m => m.id !== id));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <div className={styles.pageHeader}>
                <p className={styles.pageDescription}>
                    Manage match schedules and results
                </p>
                <button onClick={openAddModal} className={styles.addButton}>
                    <span>+</span> Add Match
                </button>
            </div>

            <div className={styles.card}>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Opponent</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Score</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {matches.length === 0 ? (
                                <tr>
                                    <td colSpan="8">
                                        <div className={styles.emptyState}>
                                            <div className={styles.emptyIcon}>⚽</div>
                                            <p className={styles.emptyText}>No matches yet. Add your first match!</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                matches.map((match) => (
                                    <tr key={match.id}>
                                        <td>{match.type}</td>
                                        <td>{match.date}</td>
                                        <td>{match.time}</td>
                                        <td>{match.opponent}</td>
                                        <td>{match.location}</td>
                                        <td>
                                            <span className={`${styles.tableBadge} ${match.status === 'completed' ? styles.badgeCompleted : styles.badgeUpcoming}`}>
                                                {match.status}
                                            </span>
                                        </td>
                                        <td>
                                            {match.status === 'completed'
                                                ? `${match.homeScore} - ${match.awayScore}`
                                                : '-'}
                                        </td>
                                        <td>
                                            <div className={styles.actions}>
                                                <button onClick={() => openEditModal(match)} className={styles.editBtn}>
                                                    Edit
                                                </button>
                                                <button onClick={() => handleDelete(match.id)} className={styles.deleteBtn}>
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>
                                {editingMatch ? 'Edit Match' : 'Add New Match'}
                            </h3>
                            <button onClick={closeModal} className={styles.modalClose}>
                                &times;
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.modalBody}>
                                <div className={styles.form}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Match Type</label>
                                            <select
                                                name="type"
                                                value={formData.type}
                                                onChange={handleChange}
                                                className={styles.select}
                                                required
                                            >
                                                <option value="11v11">11v11</option>
                                                <option value="futsal">Futsal</option>
                                                <option value="minisoccer">Mini Soccer</option>
                                            </select>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Status</label>
                                            <select
                                                name="status"
                                                value={formData.status}
                                                onChange={handleChange}
                                                className={styles.select}
                                                required
                                            >
                                                <option value="upcoming">Upcoming</option>
                                                <option value="completed">Completed</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Date</label>
                                            <input
                                                type="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleChange}
                                                className={styles.input}
                                                required
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Time</label>
                                            <input
                                                type="time"
                                                name="time"
                                                value={formData.time}
                                                onChange={handleChange}
                                                className={styles.input}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Opponent</label>
                                        <input
                                            type="text"
                                            name="opponent"
                                            value={formData.opponent}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="Enter opponent name"
                                            required
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Location</label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="Enter match location"
                                            required
                                        />
                                    </div>

                                    {formData.status === 'completed' && (
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label className={styles.label}>Home Score</label>
                                                <input
                                                    type="number"
                                                    name="homeScore"
                                                    value={formData.homeScore}
                                                    onChange={handleChange}
                                                    className={styles.input}
                                                    placeholder="0"
                                                    min="0"
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label className={styles.label}>Away Score</label>
                                                <input
                                                    type="number"
                                                    name="awayScore"
                                                    value={formData.awayScore}
                                                    onChange={handleChange}
                                                    className={styles.input}
                                                    placeholder="0"
                                                    min="0"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={styles.modalFooter}>
                                <button type="button" onClick={closeModal} className={styles.cancelBtn}>
                                    Cancel
                                </button>
                                <button type="submit" className={styles.submitBtn}>
                                    {editingMatch ? 'Save Changes' : 'Add Match'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
