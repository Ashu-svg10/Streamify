import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import VideoPlayerModal from '../components/VideoPlayerModal';
import { universalMovies } from '../data/movies';
import { useFavorites } from '../context/FavoritesContext';
import '../styles/MovieDetail.css';

const MovieDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = universalMovies.find(m => m.id === parseInt(id));
    const { isFavorite, toggleFavorite } = useFavorites();
    const [playingMovie, setPlayingMovie] = useState(null);

    if (!movie) {
        return (
            <div className="new-dashboard">
                <Navbar />
                <div style={{ padding: '120px 50px', textAlign: 'center', color: 'white' }}>
                    <h1>Movie Not Found</h1>
                    <button className="btn-watch" onClick={() => navigate('/')}>
                        Go Home
                    </button>
                </div>
            </div>
        );
    }

    const liked = isFavorite(movie.id);
    const similarMovies = universalMovies
        .filter(m => m.id !== movie.id && m.genre.split(',')[0].trim() === movie.genre.split(',')[0].trim())
        .slice(0, 6);

    const handlePlayVideo = (selectedMovie) => {
        setPlayingMovie(selectedMovie.trailerUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ');
    };

    return (
        <div className="new-dashboard movie-detail-page">
            <Navbar />

            {/* Hero Section with Movie Background */}
            <div className="detail-hero" style={{ backgroundImage: `url(${movie.image})` }}>
                <div className="detail-hero-overlay"></div>
                <div className="detail-hero-content">
                    <button className="back-button" onClick={() => navigate(-1)}>
                        <i className="fas fa-arrow-left"></i> Back
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="detail-content">
                {/* Movie Info */}
                <div className="detail-info">
                    <h1 className="detail-title">{movie.title}</h1>

                    <div className="detail-meta">
                        <span className="meta-item">
                            <i className="fas fa-star"></i> {movie.rating}
                        </span>
                        <span className="meta-item">{movie.year}</span>
                        <span className="meta-item">{movie.duration}</span>
                    </div>

                    <div className="detail-genres">
                        {movie.genre.split(', ').map((genre, idx) => (
                            <span key={idx} className="genre-tag">{genre}</span>
                        ))}
                    </div>

                    <p className="detail-description">{movie.description}</p>

                    <div className="detail-actions">
                        <button
                            className="btn-watch btn-large"
                            onClick={() => handlePlayVideo(movie)}
                        >
                            <i className="fas fa-play"></i> Play Trailer
                        </button>
                        <button
                            className={`btn-list ${liked ? 'btn-liked' : ''}`}
                            onClick={() => toggleFavorite(movie)}
                        >
                            <i className={`fas ${liked ? 'fa-check' : 'fa-plus'}`}></i>
                            {liked ? 'In My List' : 'Add to List'}
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="detail-extras">
                        <div className="extra-item">
                            <span className="extra-label">Director:</span>
                            <span className="extra-value">Various</span>
                        </div>
                        <div className="extra-item">
                            <span className="extra-label">Cast:</span>
                            <span className="extra-value">Top Actors</span>
                        </div>
                        <div className="extra-item">
                            <span className="extra-label">Language:</span>
                            <span className="extra-value">English</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Similar Movies */}
            {similarMovies.length > 0 && (
                <div className="similar-section">
                    <h2 className="section-title">More Like This</h2>
                    <div className="might-like-grid">
                        {similarMovies.map(similarMovie => (
                            <MovieCard
                                key={similarMovie.id}
                                movie={similarMovie}
                                onPlay={handlePlayVideo}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Video Player Modal */}
            <VideoPlayerModal
                videoUrl={playingMovie}
                onClose={() => setPlayingMovie(null)}
            />
        </div>
    );
};

export default MovieDetailPage;
