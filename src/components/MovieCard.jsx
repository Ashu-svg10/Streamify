import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

const MovieCard = ({ movie, onPlay, isLarge }) => {
    const { isFavorite, toggleFavorite } = useFavorites();
    const navigate = useNavigate();
    const liked = isFavorite(movie.id);

    const handleCardClick = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <div className="might-like-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <div className="might-like-image" style={{ height: '280px' }}>
                <img src={movie.image} alt={movie.title} />
                <div className="overlay-info">
                    <div className="tags">
                        {movie.genre && <span className="tag-badge">{movie.genre.split(',')[0]}</span>}
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <button
                            className="play-button-large"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleFavorite(movie);
                            }}
                            style={{
                                background: liked ? '#4caf50' : 'white', // Green if added
                                color: liked ? 'white' : '#e50914',
                                fontSize: '16px'
                            }}
                            title={liked ? "Remove from My List" : "Add to My List"}
                        >
                            <i className={`fas ${liked ? 'fa-check' : 'fa-plus'}`}></i>
                        </button>
                        <button
                            className="play-button-large"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                if (onPlay) onPlay(movie);
                            }}
                        >
                            <i className="fas fa-play"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="might-like-info">
                <h3>{movie.title}</h3>
                <div className="info-row">
                    <p className="genre">{movie.genre}</p>
                    <p className="rating">⭐ {movie.rating}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
