'use client';
import { useState, useEffect } from 'react';
import { gallery as initialGallery } from '../../../data/teamData';
import styles from '../../../styles/Dashboard.module.css';

export default function GalleryPage() {
    const [gallery, setGallery] = useState({ photos: [], videos: [] });
    const [activeTab, setActiveTab] = useState('photos');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newUrl, setNewUrl] = useState('');

    useEffect(() => {
        const stored = localStorage.getItem('dashboardGallery');
        if (stored) {
            setGallery(JSON.parse(stored));
        } else {
            setGallery(initialGallery);
            localStorage.setItem('dashboardGallery', JSON.stringify(initialGallery));
        }
    }, []);

    const saveGallery = (newGallery) => {
        setGallery(newGallery);
        localStorage.setItem('dashboardGallery', JSON.stringify(newGallery));
    };

    const openAddModal = () => {
        setNewUrl('');
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setNewUrl('');
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (!newUrl.trim()) return;

        const updated = {
            ...gallery,
            [activeTab]: [...gallery[activeTab], newUrl.trim()]
        };
        saveGallery(updated);
        closeModal();
    };

    const handleDelete = (index) => {
        if (confirm(`Are you sure you want to delete this ${activeTab === 'photos' ? 'photo' : 'video'}?`)) {
            const updated = {
                ...gallery,
                [activeTab]: gallery[activeTab].filter((_, i) => i !== index)
            };
            saveGallery(updated);
        }
    };

    // Extract YouTube video ID for thumbnail
    const getYouTubeThumbnail = (url) => {
        const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
        if (match) {
            return `https://img.youtube.com/vi/${match[1]}/mqdefault.jpg`;
        }
        return null;
    };

    return (
        <div>
            <div className={styles.pageHeader}>
                <p className={styles.pageDescription}>
                    Manage photos and videos for the gallery
                </p>
                <button onClick={openAddModal} className={styles.addButton}>
                    <span>+</span> Add {activeTab === 'photos' ? 'Photo' : 'Video'}
                </button>
            </div>

            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'photos' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('photos')}
                >
                    Photos ({gallery.photos?.length || 0})
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'videos' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('videos')}
                >
                    Videos ({gallery.videos?.length || 0})
                </button>
            </div>

            <div className={styles.card}>
                <div className={styles.cardBody}>
                    {activeTab === 'photos' ? (
                        gallery.photos?.length === 0 ? (
                            <div className={styles.emptyState}>
                                <div className={styles.emptyIcon}>🖼️</div>
                                <p className={styles.emptyText}>No photos yet. Add your first photo!</p>
                            </div>
                        ) : (
                            <div className={styles.galleryGrid}>
                                {gallery.photos?.map((photo, index) => (
                                    <div key={index} className={styles.galleryItem}>
                                        <img src={photo} alt={`Photo ${index + 1}`} />
                                        <div className={styles.galleryItemOverlay}>
                                            <button
                                                onClick={() => handleDelete(index)}
                                                className={styles.galleryDeleteBtn}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    ) : (
                        gallery.videos?.length === 0 ? (
                            <div className={styles.emptyState}>
                                <div className={styles.emptyIcon}>🎬</div>
                                <p className={styles.emptyText}>No videos yet. Add your first video!</p>
                            </div>
                        ) : (
                            <div className={styles.galleryGrid}>
                                {gallery.videos?.map((video, index) => {
                                    const thumbnail = getYouTubeThumbnail(video);
                                    return (
                                        <div key={index} className={`${styles.galleryItem} ${styles.videoThumbnail}`}>
                                            {thumbnail ? (
                                                <img src={thumbnail} alt={`Video ${index + 1}`} />
                                            ) : (
                                                <span className={styles.playIcon}>▶</span>
                                            )}
                                            <span className={styles.videoUrl}>{video}</span>
                                            <div className={styles.galleryItemOverlay}>
                                                <button
                                                    onClick={() => handleDelete(index)}
                                                    className={styles.galleryDeleteBtn}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )
                    )}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>
                                Add New {activeTab === 'photos' ? 'Photo' : 'Video'}
                            </h3>
                            <button onClick={closeModal} className={styles.modalClose}>
                                &times;
                            </button>
                        </div>
                        <form onSubmit={handleAdd}>
                            <div className={styles.modalBody}>
                                <div className={styles.form}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>
                                            {activeTab === 'photos' ? 'Image URL' : 'YouTube URL'}
                                        </label>
                                        <input
                                            type="text"
                                            value={newUrl}
                                            onChange={(e) => setNewUrl(e.target.value)}
                                            className={styles.input}
                                            placeholder={activeTab === 'photos'
                                                ? '/images/gallery/photo.jpg'
                                                : 'https://www.youtube.com/watch?v=...'
                                            }
                                            required
                                        />
                                        <small style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                                            {activeTab === 'photos'
                                                ? 'Enter the path to the image file (e.g., /images/gallery/photo.jpg)'
                                                : 'Enter a YouTube video URL'
                                            }
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.modalFooter}>
                                <button type="button" onClick={closeModal} className={styles.cancelBtn}>
                                    Cancel
                                </button>
                                <button type="submit" className={styles.submitBtn}>
                                    Add {activeTab === 'photos' ? 'Photo' : 'Video'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
