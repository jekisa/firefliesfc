'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { AuthProvider, useAuth } from '../../contexts/AuthContext';
import styles from '../../styles/DashboardLayout.module.css';

// Navigation items
const navItems = [
    { href: '/dashboard', label: 'Overview', icon: '📊' },
    { href: '/dashboard/matches', label: 'Matches', icon: '⚽' },
    { href: '/dashboard/players', label: 'Players', icon: '👥' },
    { href: '/dashboard/gallery', label: 'Gallery', icon: '🖼️' },
    { href: '/dashboard/sponsors', label: 'Sponsors', icon: '🤝' },
    { href: '/dashboard/contacts', label: 'Contacts', icon: '📱' },
];

// Get page title from pathname
function getPageTitle(pathname) {
    if (pathname === '/dashboard') return 'Overview';
    const item = navItems.find(item => item.href === pathname);
    return item ? item.label : 'Dashboard';
}

function DashboardContent({ children }) {
    const { user, isAuthenticated, isLoading, logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (!isLoading && !isAuthenticated && pathname !== '/dashboard/login') {
            router.push('/dashboard/login');
        }
    }, [isAuthenticated, isLoading, pathname, router]);

    // Close sidebar on route change
    useEffect(() => {
        setSidebarOpen(false);
    }, [pathname]);

    const handleLogout = () => {
        logout();
        router.push('/dashboard/login');
    };

    // Show loading while checking auth
    if (isLoading) {
        return (
            <div className={styles.loadingScreen}>
                <div className={styles.loadingSpinner}>
                    <div className={styles.spinner}></div>
                    <span className={styles.loadingText}>Loading...</span>
                </div>
            </div>
        );
    }

    // If on login page, just render children (login form)
    if (pathname === '/dashboard/login') {
        return children;
    }

    // If not authenticated, show loading (will redirect)
    if (!isAuthenticated) {
        return (
            <div className={styles.loadingScreen}>
                <div className={styles.loadingSpinner}>
                    <div className={styles.spinner}></div>
                    <span className={styles.loadingText}>Redirecting...</span>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.dashboardLayout}>
            {/* Sidebar */}
            <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
                <div className={styles.sidebarHeader}>
                    <Link href="/dashboard" className={styles.sidebarLogo}>
                        <img src="/images/logo/logo.png" alt="Fireflies FC" />
                        <span className={styles.sidebarTitle}>Admin Panel</span>
                    </Link>
                </div>

                <nav className={styles.sidebarNav}>
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.navLink} ${pathname === item.href ? styles.navLinkActive : ''}`}
                        >
                            <span className={styles.navIcon}>{item.icon}</span>
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className={styles.sidebarFooter}>
                    <Link href="/" className={styles.viewSiteLink} target="_blank">
                        <span>🌐</span>
                        View Website
                    </Link>
                </div>
            </aside>

            {/* Overlay for mobile */}
            <div
                className={`${styles.overlay} ${sidebarOpen ? styles.overlayVisible : ''}`}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Main content area */}
            <div className={styles.mainArea}>
                {/* Header */}
                <header className={styles.header}>
                    <div className={styles.headerLeft}>
                        <button
                            className={styles.menuToggle}
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            aria-label="Toggle menu"
                        >
                            ☰
                        </button>
                        <h1 className={styles.pageTitle}>{getPageTitle(pathname)}</h1>
                    </div>

                    <div className={styles.headerRight}>
                        <div className={styles.userInfo}>
                            <div className={styles.userAvatar}>
                                {user?.username?.charAt(0).toUpperCase() || 'A'}
                            </div>
                            <span className={styles.userName}>{user?.username || 'Admin'}</span>
                        </div>
                        <button onClick={handleLogout} className={styles.logoutBtn}>
                            Logout
                        </button>
                    </div>
                </header>

                {/* Page content */}
                <main className={styles.content}>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default function DashboardLayout({ children }) {
    return (
        <AuthProvider>
            <DashboardContent>{children}</DashboardContent>
        </AuthProvider>
    );
}
