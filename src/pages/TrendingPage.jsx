import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import VideoPlayerModal from '../components/VideoPlayerModal';
import { universalMovies } from '../data/movies';
import '../styles/Dashboard.css';

const TrendingPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const trendingMovies = universalMovies.filter(m => m.isTrending);
    const [isScrolled, setIsScrolled] = useState(false);
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
        ? trendingMovies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()))
        : trendingMovies;

    return (
        <div className="new-dashboard">
            <Navbar />
            <div className={`dashboard-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="search-container">
                    <i className="fas fa-search search-icon"></i>
                    <input
                        type="text"
                        placeholder="Search Trending"
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            <div style={{ padding: '120px 50px 50px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                    <span className="flame" style={{ fontSize: '32px' }}>🔥</span>
                    <h1 className="section-title" style={{ fontSize: '32px', margin: 0 }}>Trending Now</h1>
                </div>
                <div className="might-like-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
                    {displayedMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} onPlay={handlePlayVideo} />
                    ))}
                </div>
            </div>

            {/* Video Player Modal */}
            <VideoPlayerModal
                videoUrl={playingMovie}
                onClose={() => setPlayingMovie(null)}
            />
        </div>
    );
};

export default TrendingPage;
