import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import VideoPlayerModal from '../components/VideoPlayerModal';
import '../styles/Dashboard.css';
import { universalMovies } from '../data/movies';

const CategoryPage = ({ category, title }) => {
    const navigate = useNavigate();
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

    // Filter movies based on category AND search query
    const getCategoryMovies = () => {
        let movies = [];
        switch (category) {
            case 'series':
                movies = universalMovies.filter(m => m.genre.includes('Drama') || m.genre.includes('Crime'));
                break;
            case 'animation':
                movies = universalMovies.filter(m => m.genre.includes('Animation'));
                break;
            case 'history':
                movies = universalMovies.filter(m => m.genre.includes('Biography') || m.genre.includes('History') || m.genre.includes('War'));
                break;
            case 'more':
                movies = [...universalMovies].reverse(); // Just a mix
                break;
            default:
                movies = universalMovies;
        }

        if (searchQuery) {
            return movies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return movies;
    };

    const movies = getCategoryMovies();

    // Group by Genre (Taking the first genre if multiple)
    const moviesByGenre = movies.reduce((acc, movie) => {
        const mainGenre = movie.genre.split(', ')[0];
        if (!acc[mainGenre]) {
            acc[mainGenre] = [];
        }
        acc[mainGenre].push(movie);
        return acc;
    }, {});

    // Pick a featured movie (random or first high rated)
    const featured = movies.find(m => m.rating.startsWith('9')) || movies[0];

    const navTabs = [
        { id: 'movies', label: 'Movies', path: '/' },
        { id: 'series', label: 'TV Series', path: '/series' },
        { id: 'animation', label: 'Animation', path: '/animation' },
        { id: 'history', label: 'History', path: '/history' },
        { id: 'more', label: 'More', path: '/more' },
    ];

    return (
        <div className="new-dashboard">
            <Navbar />

            {/* Sticky Header */}
            <div className={`dashboard-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="search-container">
                    <i className="fas fa-search search-icon"></i>
                    <input
                        type="text"
                        placeholder={`Search ${title}`}
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="nav-tabs">
                    {navTabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`nav-tab ${category === tab.id ? 'active' : ''}`}
                            onClick={() => navigate(tab.path)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Featured Section (Smaller for Category Pages maybe? Or same?) -> Keeping same style */}
            {featured && (
                <section className="featured-section" style={{ height: '500px' }}>
                    <div className="featured-container">
                        <div className="featured-image">
                            <img src={featured.image} alt={featured.title} />
                            <div className="featured-overlay"></div>
                        </div>
                        <div className="featured-content">
                            <span className="trending-badge">{title}</span>
                            <h1 className="featured-title">{featured.title}</h1>
                            <p className="featured-description">{featured.description}</p>
                            <div className="featured-buttons">
                                <button className="btn-watch" onClick={() => handlePlayVideo(featured)}>
                                    <i className="fas fa-play"></i> Watch
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Genre Rows */}
            <div style={{ padding: '0 50px 50px', position: 'relative', zIndex: 10 }}>
                {Object.entries(moviesByGenre).map(([genre, genreMovies]) => (
                    <section key={genre} className="genre-section" style={{ marginBottom: '40px' }}>
                        <h2 className="section-title" style={{ marginBottom: '20px', fontSize: '24px' }}>{genre}</h2>
                        <div className="might-like-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
                            {genreMovies.map(movie => (
                                <div key={movie.id} className="might-like-card" onClick={() => handlePlayVideo(movie)}>
                                    <div className="might-like-image" style={{ height: '280px' }}>
                                        <img src={movie.image} alt={movie.title} />
                                        <div className="overlay-info">
                                            <button className="play-button-large"><i className="fas fa-play"></i></button>
                                        </div>
                                    </div>
                                    <div className="might-like-info">
                                        <h3>{movie.title}</h3>
                                        <p className="rating">⭐ {movie.rating}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <footer className="dashboard-footer">
                <div className="footer-content">
                    © 2026 Streamify. All rights reserved.
                </div>
            </footer>

            {/* Video Player Modal */}
            <VideoPlayerModal
                videoUrl={playingMovie}
                onClose={() => setPlayingMovie(null)}
            />
        </div>
    );
};

export default CategoryPage;
