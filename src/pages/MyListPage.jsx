import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import VideoPlayerModal from '../components/VideoPlayerModal';
import { useFavorites } from '../context/FavoritesContext';
import '../styles/Dashboard.css';

const MyListPage = () => {
    const { favorites } = useFavorites();
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [playingMovie, setPlayingMovie] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handlePlayVideo = (movie) => {
        setPlayingMovie(movie.trailerUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ');
    };

    const displayedMovies = searchQuery
        ? favorites.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()))
        : favorites;

    return (
        <div className="new-dashboard">
            <Navbar />

            <div className={`dashboard-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="search-container">
                    <i className="fas fa-search search-icon"></i>
                    <input
                        type="text"
                        placeholder="Search My List"
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div style={{ padding: '120px 50px 50px' }}>
                <h1 className="section-title" style={{ fontSize: '32px', marginBottom: '30px' }}>My List</h1>

                {favorites.length === 0 ? (
                    <div style={{ textAlign: 'center', marginTop: '100px', color: '#888' }}>
                        <i className="fas fa-folder-open" style={{ fontSize: '48px', marginBottom: '20px' }}></i>
                        <p>Your list is empty. Add movies to watch later!</p>
                    </div>
                ) : displayedMovies.length === 0 ? (
                    <p style={{ textAlign: 'center', marginTop: '100px', color: '#888' }}>No movies matching "{searchQuery}" in your list.</p>
                ) : (
                    <div className="might-like-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
                        {displayedMovies.map(movie => (
                            <MovieCard key={movie.id} movie={movie} onPlay={handlePlayVideo} />
                        ))}
                    </div>
                )}
            </div>

            <footer className="dashboard-footer">
                © 2026 Streamify. All rights reserved.
            </footer>

            {/* Video Player Modal */}
            <VideoPlayerModal
                videoUrl={playingMovie}
                onClose={() => setPlayingMovie(null)}
            />
        </div>
    );
};

export default MyListPage;
