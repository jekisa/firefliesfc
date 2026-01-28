'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

// Hardcoded credentials for demo
const VALID_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Check sessionStorage on mount
    useEffect(() => {
        const storedUser = sessionStorage.getItem('dashboardUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const login = (username, password) => {
        if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
            const userData = { username };
            setUser(userData);
            setIsAuthenticated(true);
            sessionStorage.setItem('dashboardUser', JSON.stringify(userData));
            return { success: true };
        }
        return { success: false, error: 'Invalid username or password' };
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        sessionStorage.removeItem('dashboardUser');
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
