'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../../contexts/AuthContext';
import styles from '../../../styles/Login.module.css';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const { login, isAuthenticated, isLoading } = useAuth();

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            router.push('/dashboard');
        }
    }, [isAuthenticated, isLoading, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        const result = login(username, password);

        if (result.success) {
            router.push('/dashboard');
        } else {
            setError(result.error);
            setIsSubmitting(false);
        }
    };

    if (isLoading) {
        return (
            <div className={styles.loginPage}>
                <div className={styles.loginCard}>
                    <p style={{ textAlign: 'center', color: '#64748b' }}>Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <div className={styles.logo}>
                    <img src="/images/logo/logo.png" alt="Fireflies FC" />
                </div>
                <h1 className={styles.title}>Dashboard Login</h1>
                <p className={styles.subtitle}>Enter your credentials to access the admin panel</p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username" className={styles.label}>Username</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={styles.input}
                            placeholder="Enter username"
                            required
                            autoComplete="username"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.input}
                            placeholder="Enter password"
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    {error && <div className={styles.error}>{error}</div>}

                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <Link href="/" className={styles.backLink}>
                    Back to Website
                </Link>
            </div>
        </div>
    );
}
