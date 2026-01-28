'use client';
import { useState, useEffect } from 'react';
import { players as initialPlayers } from '../../../data/teamData';
import styles from '../../../styles/Dashboard.module.css';

const POSITIONS = ['GK', 'CB', 'LB', 'RB', 'CDM', 'CM', 'CAM', 'LW', 'RW', 'ST'];

export default function PlayersPage() {
    const [players, setPlayers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPlayer, setEditingPlayer] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        position: 'CM',
        number: '',
        status: 'active',
        image: ''
    });

    useEffect(() => {
        const stored = localStorage.getItem('dashboardPlayers');
        if (stored) {
            setPlayers(JSON.parse(stored));
        } else {
            setPlayers(initialPlayers);
            localStorage.setItem('dashboardPlayers', JSON.stringify(initialPlayers));
        }
    }, []);

    const savePlayers = (newPlayers) => {
        setPlayers(newPlayers);
        localStorage.setItem('dashboardPlayers', JSON.stringify(newPlayers));
    };

    const openAddModal = () => {
        setEditingPlayer(null);
        setFormData({
            name: '',
            position: 'CM',
            number: '',
            status: 'active',
            image: ''
        });
        setIsModalOpen(true);
    };

    const openEditModal = (player) => {
        setEditingPlayer(player);
        setFormData({
            name: player.name,
            position: player.position,
            number: player.number.toString(),
            status: player.status,
            image: player.image || ''
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingPlayer(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const playerData = {
            ...formData,
            number: parseInt(formData.number)
        };

        if (editingPlayer) {
            const updated = players.map(p =>
                p.id === editingPlayer.id ? { ...p, ...playerData } : p
            );
            savePlayers(updated);
        } else {
            const newPlayer = {
                ...playerData,
                id: Math.max(...players.map(p => p.id), 0) + 1
            };
            savePlayers([...players, newPlayer]);
        }

        closeModal();
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this player?')) {
            savePlayers(players.filter(p => p.id !== id));
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
                    Manage team roster and player information
                </p>
                <button onClick={openAddModal} className={styles.addButton}>
                    <span>+</span> Add Player
                </button>
            </div>

            <div className={styles.card}>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Number</th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players.length === 0 ? (
                                <tr>
                                    <td colSpan="6">
                                        <div className={styles.emptyState}>
                                            <div className={styles.emptyIcon}>👥</div>
                                            <p className={styles.emptyText}>No players yet. Add your first player!</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                players.map((player) => (
                                    <tr key={player.id}>
                                        <td>
                                            {player.image ? (
                                                <img
                                                    src={player.image}
                                                    alt={player.name}
                                                    className={styles.tableImage}
                                                />
                                            ) : (
                                                <div className={styles.tableImage} style={{
                                                    background: '#e2e8f0',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#94a3b8'
                                                }}>
                                                    👤
                                                </div>
                                            )}
                                        </td>
                                        <td><strong>#{player.number}</strong></td>
                                        <td>{player.name}</td>
                                        <td>{player.position}</td>
                                        <td>
                                            <span className={`${styles.tableBadge} ${player.status === 'active' ? styles.badgeActive : styles.badgeInjured}`}>
                                                {player.status}
                                            </span>
                                        </td>
                                        <td>
                                            <div className={styles.actions}>
                                                <button onClick={() => openEditModal(player)} className={styles.editBtn}>
                                                    Edit
                                                </button>
                                                <button onClick={() => handleDelete(player.id)} className={styles.deleteBtn}>
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
                                {editingPlayer ? 'Edit Player' : 'Add New Player'}
                            </h3>
                            <button onClick={closeModal} className={styles.modalClose}>
                                &times;
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.modalBody}>
                                <div className={styles.form}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Player Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="Enter player name"
                                            required
                                        />
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Position</label>
                                            <select
                                                name="position"
                                                value={formData.position}
                                                onChange={handleChange}
                                                className={styles.select}
                                                required
                                            >
                                                {POSITIONS.map(pos => (
                                                    <option key={pos} value={pos}>{pos}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Number</label>
                                            <input
                                                type="number"
                                                name="number"
                                                value={formData.number}
                                                onChange={handleChange}
                                                className={styles.input}
                                                placeholder="Jersey number"
                                                min="1"
                                                max="99"
                                                required
                                            />
                                        </div>
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
                                            <option value="active">Active</option>
                                            <option value="injured">Injured</option>
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Image URL (optional)</label>
                                        <input
                                            type="text"
                                            name="image"
                                            value={formData.image}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="/images/gallery/players/player.jpg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.modalFooter}>
                                <button type="button" onClick={closeModal} className={styles.cancelBtn}>
                                    Cancel
                                </button>
                                <button type="submit" className={styles.submitBtn}>
                                    {editingPlayer ? 'Save Changes' : 'Add Player'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
