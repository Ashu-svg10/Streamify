import { createContext, useState, useEffect, useContext } from 'react';
import { useToast } from './ToastContext';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('myList');
        return saved ? JSON.parse(saved) : [];
    });
    const { showToast } = useToast();

    useEffect(() => {
        localStorage.setItem('myList', JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavorites((prev) => {
            if (!prev.find(m => m.id === movie.id)) {
                showToast(`Added "${movie.title}" to My List`, 'success');
                return [...prev, movie];
            }
            return prev;
        });
    };

    const removeFromFavorites = (movieId, movieTitle) => {
        setFavorites((prev) => prev.filter((m) => m.id !== movieId));
        if (movieTitle) {
            showToast(`Removed "${movieTitle}" from My List`, 'info');
        }
    };

    const isFavorite = (movieId) => {
        return favorites.some((m) => m.id === movieId);
    };

    const toggleFavorite = (movie) => {
        if (isFavorite(movie.id)) {
            removeFromFavorites(movie.id, movie.title);
        } else {
            addToFavorites(movie);
        }
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
