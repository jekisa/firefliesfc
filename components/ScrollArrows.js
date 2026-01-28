'use client';
import { useState, useEffect } from 'react';
import styles from '../styles/ScrollArrows.module.css';

export default function ScrollArrows() {
    const [showUpArrow, setShowUpArrow] = useState(false);
    const [showDownArrow, setShowDownArrow] = useState(true);
    const [isNearBottom, setIsNearBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Show up arrow after scrolling down 300px
            setShowUpArrow(scrollTop > 300);

            // Check if near bottom (within 100px)
            const nearBottom = scrollTop + windowHeight >= documentHeight - 100;
            setIsNearBottom(nearBottom);

            // Hide down arrow when at bottom
            setShowDownArrow(!nearBottom);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollDown = () => {
        window.scrollBy({
            top: window.innerHeight * 0.8,
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.scrollArrows}>
            {/* Up Arrow */}
            <button
                className={`${styles.arrowButton} ${styles.upArrow} ${showUpArrow ? styles.visible : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <div className={styles.arrowIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </div>
                <span className={styles.arrowLabel}>Top</span>
            </button>

            {/* Down Arrow */}
            <button
                className={`${styles.arrowButton} ${styles.downArrow} ${showDownArrow ? styles.visible : ''}`}
                onClick={scrollDown}
                aria-label="Scroll down"
            >
                <div className={styles.arrowIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
                <div className={styles.scrollIndicator}>
                    <span className={styles.scrollDot}></span>
                </div>
            </button>
        </div>
    );
}
