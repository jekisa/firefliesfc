'use client';
import { useState, useEffect } from 'react';
import { sponsors as initialSponsors } from '../../../data/teamData';
import styles from '../../../styles/Dashboard.module.css';

export default function SponsorsPage() {
    const [sponsors, setSponsors] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingSponsor, setEditingSponsor] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        logo: ''
    });

    useEffect(() => {
        const stored = localStorage.getItem('dashboardSponsors');
        if (stored) {
            setSponsors(JSON.parse(stored));
        } else {
            setSponsors(initialSponsors);
            localStorage.setItem('dashboardSponsors', JSON.stringify(initialSponsors));
        }
    }, []);

    const saveSponsors = (newSponsors) => {
        setSponsors(newSponsors);
        localStorage.setItem('dashboardSponsors', JSON.stringify(newSponsors));
    };

    const openAddModal = () => {
        setEditingSponsor(null);
        setFormData({
            name: '',
            logo: ''
        });
        setIsModalOpen(true);
    };

    const openEditModal = (sponsor) => {
        setEditingSponsor(sponsor);
        setFormData({
            name: sponsor.name,
            logo: sponsor.logo
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingSponsor(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingSponsor) {
            const updated = sponsors.map(s =>
                s.id === editingSponsor.id ? { ...s, ...formData } : s
            );
            saveSponsors(updated);
        } else {
            const newSponsor = {
                ...formData,
                id: Math.max(...sponsors.map(s => s.id), 0) + 1
            };
            saveSponsors([...sponsors, newSponsor]);
        }

        closeModal();
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this sponsor?')) {
            saveSponsors(sponsors.filter(s => s.id !== id));
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
                    Manage team sponsors and their logos
                </p>
                <button onClick={openAddModal} className={styles.addButton}>
                    <span>+</span> Add Sponsor
                </button>
            </div>

            <div className={styles.card}>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Logo</th>
                                <th>Name</th>
                                <th>Logo URL</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sponsors.length === 0 ? (
                                <tr>
                                    <td colSpan="4">
                                        <div className={styles.emptyState}>
                                            <div className={styles.emptyIcon}>🤝</div>
                                            <p className={styles.emptyText}>No sponsors yet. Add your first sponsor!</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                sponsors.map((sponsor) => (
                                    <tr key={sponsor.id}>
                                        <td>
                                            {sponsor.logo ? (
                                                <img
                                                    src={sponsor.logo}
                                                    alt={sponsor.name}
                                                    className={styles.tableImage}
                                                    style={{ objectFit: 'contain', background: '#f8fafc' }}
                                                />
                                            ) : (
                                                <div className={styles.tableImage} style={{
                                                    background: '#e2e8f0',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#94a3b8'
                                                }}>
                                                    🏢
                                                </div>
                                            )}
                                        </td>
                                        <td><strong>{sponsor.name}</strong></td>
                                        <td style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {sponsor.logo}
                                        </td>
                                        <td>
                                            <div className={styles.actions}>
                                                <button onClick={() => openEditModal(sponsor)} className={styles.editBtn}>
                                                    Edit
                                                </button>
                                                <button onClick={() => handleDelete(sponsor.id)} className={styles.deleteBtn}>
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
                                {editingSponsor ? 'Edit Sponsor' : 'Add New Sponsor'}
                            </h3>
                            <button onClick={closeModal} className={styles.modalClose}>
                                &times;
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.modalBody}>
                                <div className={styles.form}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Sponsor Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="Enter sponsor name"
                                            required
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Logo URL</label>
                                        <input
                                            type="text"
                                            name="logo"
                                            value={formData.logo}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="/images/sponsors/logo.png"
                                            required
                                        />
                                        <small style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                                            Enter the path to the logo image file
                                        </small>
                                    </div>

                                    {formData.logo && (
                                        <div className={styles.formGroup}>
                                            <label className={styles.label}>Preview</label>
                                            <div style={{
                                                background: '#f8fafc',
                                                padding: '1rem',
                                                borderRadius: '8px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}>
                                                <img
                                                    src={formData.logo}
                                                    alt="Logo preview"
                                                    style={{ maxHeight: '80px', maxWidth: '100%', objectFit: 'contain' }}
                                                    onError={(e) => { e.target.style.display = 'none'; }}
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
                                    {editingSponsor ? 'Save Changes' : 'Add Sponsor'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
