import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within UserProvider');
    }
    return context;
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const saved = sessionStorage.getItem('userEmail');
        const userName = localStorage.getItem('userName') || saved?.split('@')[0] || 'User';
        return {
            email: saved || '',
            name: userName,
            avatar: localStorage.getItem('userAvatar') || 'https://ui-avatars.com/api/?name=' + userName + '&background=E50914&color=fff&size=200',
            joinDate: localStorage.getItem('userJoinDate') || new Date().toISOString().split('T')[0]
        };
    });

    const [preferences, setPreferences] = useState(() => {
        const saved = localStorage.getItem('userPreferences');
        return saved ? JSON.parse(saved) : {
            autoplay: true,
            quality: 'auto',
            notifications: true,
            language: 'English'
        };
    });

    const [watchHistory, setWatchHistory] = useState(() => {
        const saved = localStorage.getItem('watchHistory');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('userName', user.name);
        localStorage.setItem('userAvatar', user.avatar);
        localStorage.setItem('userJoinDate', user.joinDate);
    }, [user]);

    useEffect(() => {
        localStorage.setItem('userPreferences', JSON.stringify(preferences));
    }, [preferences]);

    useEffect(() => {
        localStorage.setItem('watchHistory', JSON.stringify(watchHistory));
    }, [watchHistory]);

    const updateUser = (updates) => {
        setUser(prev => ({ ...prev, ...updates }));
    };

    const updatePreferences = (updates) => {
        setPreferences(prev => ({ ...prev, ...updates }));
    };

    const addToWatchHistory = (movie) => {
        setWatchHistory(prev => {
            const filtered = prev.filter(item => item.id !== movie.id);
            return [{ ...movie, watchedAt: new Date().toISOString() }, ...filtered].slice(0, 50);
        });
    };

    const clearWatchHistory = () => {
        setWatchHistory([]);
    };

    const logout = () => {
        sessionStorage.removeItem('userEmail');
        localStorage.removeItem('myList');
        window.location.href = '/';
    };

    return (
        <UserContext.Provider value={{
            user,
            preferences,
            watchHistory,
            updateUser,
            updatePreferences,
            addToWatchHistory,
            clearWatchHistory,
            logout
        }}>
            {children}
        </UserContext.Provider>
    );
};
