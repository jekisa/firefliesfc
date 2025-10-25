'use client';
// /components/SponsorCarousel.js
import { useState, useEffect } from 'react';
import styles from '../styles/SponsorCarousel.module.css';

export default function SponsorCarousel({ sponsors }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sponsorsPerView = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex >= sponsors.length - sponsorsPerView ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [sponsors.length]);

    return (
        <div className={styles.carousel}>
            <div className={styles.carouselTrack}
                style={{ transform: `translateX(-${currentIndex * (100 / sponsorsPerView)}%)` }}>
                {sponsors.map((sponsor) => (
                    <div key={sponsor.id} className={styles.sponsorSlide}>
                        <div className={styles.sponsorLogo}
                            style={{ background: 'linear-gradient(135deg, #EDF2F4 0%, #8D99AE 100%)' }}>
                            <span className={styles.logoText}>{sponsor.name.substring(0, 2).toUpperCase()}</span>
                        </div>
                        <p className={styles.sponsorName}>{sponsor.name}</p>
                    </div>
                ))}
            </div>

            <div className={styles.indicators}>
                {Array.from({ length: sponsors.length - sponsorsPerView + 1 }).map((_, idx) => (
                    <button
                        key={idx}
                        className={`${styles.indicator} ${idx === currentIndex ? styles.active : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
