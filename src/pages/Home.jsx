import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import VideoPlayerModal from '../components/VideoPlayerModal';
import '../styles/Dashboard.css';
import { universalMovies } from '../data/movies';

// (Old local MovieCard removed since we use the imported one for search, 
// but we might need to keep the old one for the carousel if it has specific styles not in the new component.
// The user asked to make the search workable. 
// For now, I'll keep the carousel components using standard HTML/CSS as they were, 
// OR I can just map the new MovieCard if compatible.
// Checking previous code: Local MovieCard had "new-movie-card" class. 
// New MovieCard has "might-like-card" class. 
// They look different. I will keep a local definition for the Carousel or inline it, 
// but for Search Results I will use the new reusable MovieCard.)

const CarouselCard = ({ movie }) => {
  return (
    <div className="new-movie-card">
      <div className="card-image-container">
        <img src={movie.image} alt={movie.title} />
        <div className="card-overlay">
          <button className="play-button">
            <i className="fas fa-play"></i>
          </button>
        </div>
      </div>
      <div className="card-info">
        <h3>{movie.title}</h3>
        <p className="rating">⭐ {movie.rating}</p>
      </div>
    </div>
  );
};

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const activeTab = 'movies';
  const [showAllMightLike, setShowAllMightLike] = useState(false);

  // Video Player State
  const [playingMovie, setPlayingMovie] = useState(null);

  // Rotating Featured Movie Logic
  const featuredPool = universalMovies.slice(0, 5);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const featuredMovie = featuredPool[featuredIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prevIndex) => (prevIndex + 1) % featuredPool.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [featuredPool.length]);

  const trailerRef = useRef(null);

  const scroll = (direction) => {
    if (trailerRef.current) {
      const { current } = trailerRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const navTabs = [
    { id: 'movies', label: 'Movies', path: '/' },
    { id: 'series', label: 'TV Series', path: '/series' },
    { id: 'animation', label: 'Animation', path: '/animation' },
    { id: 'history', label: 'History', path: '/history' },
    { id: 'more', label: 'More', path: '/more' },
  ];

  const [sortOption, setSortOption] = useState('default');

  // Search Filtering
  const searchResults = searchQuery
    ? universalMovies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const getSortedTrailers = () => {
    const baseList = universalMovies.slice(5, 15);
    switch (sortOption) {
      case 'rating':
        return [...baseList].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
      case 'year':
        return [...baseList].sort((a, b) => b.year - a.year);
      case 'alphabetical':
        return [...baseList].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return baseList;
    }
  };

  const newTrailerList = getSortedTrailers();
  const continueWatchingList = universalMovies.slice(15, 20);
  const youMightLikeList = universalMovies.slice(20, 28);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle playing a video
  const handlePlayVideo = (movie) => {
    setPlayingMovie(movie.trailerUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ'); // Fallback URL
  };

  return (
    <div className="new-dashboard">
      <Navbar />

      {/* Header with Search and Navigation */}
      <div className={`dashboard-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="search-container">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            placeholder="Search Movies"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="nav-tabs">
          {navTabs.map(tab => (
            <button
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => navigate(tab.path)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {searchQuery ? (
        // SEARCH RESULTS VIEW
        <div style={{ padding: '120px 50px 50px', minHeight: '100vh' }}>
          <h2 className="section-title">Search Results for "{searchQuery}"</h2>
          {searchResults.length === 0 ? (
            <p style={{ color: '#888', marginTop: '20px' }}>No movies found matching your search.</p>
          ) : (
            <div className="might-like-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
              {searchResults.map(movie => (
                <MovieCard key={movie.id} movie={movie} onPlay={handlePlayVideo} />
              ))}
            </div>
          )}
        </div>
      ) : (
        // STANDARD DASHBOARD VIEW
        <>
          {/* Featured/Hero Section */}
          <section className="featured-section">
            <div className="featured-container">
              <div className="featured-image">
                <img src={featuredMovie.image} alt={featuredMovie.title} />
                <div className="featured-overlay"></div>
              </div>

              <div className="featured-content">
                {featuredMovie.isTrending && (
                  <div className="trending-badge">
                    <span className="flame">🔥</span> New Trending
                  </div>
                )}

                <h1 className="featured-title">{featuredMovie.title}</h1>

                <div className="featured-tags">
                  {featuredMovie.genre.split(', ').map((genre, idx) => (
                    <span key={idx} className={`tag ${idx === 0 ? 'action' : 'adventure'}`}>{genre}</span>
                  ))}
                </div>

                <p className="featured-description">{featuredMovie.description}</p>

                <div className="featured-buttons">
                  <button className="btn-watch" onClick={() => handlePlayVideo(featuredMovie)}>
                    <i className="fas fa-play"></i> Watch
                  </button>
                  <button className="btn-download">
                    <i className="fas fa-download"></i> Download
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* New Trailers Section */}
          <section className="trailers-section">
            <div className="section-header">
              <h2 className="section-title">🔥 New Trailer</h2>
              <div className="header-actions">
                <div className="nav-arrows">
                  <button className="arrow-btn" onClick={() => scroll('left')}>&#8249;</button>
                  <button className="arrow-btn" onClick={() => scroll('right')}>&#8250;</button>
                </div>
                <select
                  className="sort-select"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#999',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <option value="default" style={{ background: '#1a1a1a' }}>Sort by: Today</option>
                  <option value="rating" style={{ background: '#1a1a1a' }}>Top Rated</option>
                  <option value="year" style={{ background: '#1a1a1a' }}>Newest</option>
                  <option value="alphabetical" style={{ background: '#1a1a1a' }}>A-Z</option>
                </select>
              </div>
            </div>

            <div className="trailers-grid" ref={trailerRef}>
              {newTrailerList.map((movie, idx) => (
                <div key={movie.id} className="trailer-card" onClick={() => handlePlayVideo(movie)}>
                  {movie.isTrending && <div className="new-badge">New Trailer</div>}
                  <img src={movie.image} alt={movie.title} />
                  <div className="trailer-content">
                    <h3>{movie.title}</h3>
                    <p className="trailer-rating">⭐ {movie.rating}</p>
                  </div>
                  <button className="trailer-play">
                    <i className="fas fa-play"></i>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Continue Watching Section */}
          <section className="continue-section">
            <div className="section-header">
              <h2 className="section-title">Continue watching</h2>
            </div>

            <div className="continue-grid">
              {continueWatchingList.map(movie => (
                <div key={movie.id} className="continue-card" onClick={() => handlePlayVideo(movie)}>
                  <div className="continue-image">
                    <img src={movie.image} alt={movie.title} />
                    <div className="progress-bar"></div>
                  </div>
                  <div className="continue-info">
                    <div>
                      <h3 className="continue-title">{movie.title}</h3>
                      <p className="duration">{movie.duration}</p>
                    </div>
                    <button className="play-btn">
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* You Might Like Section */}
          <section className="might-like-section">
            <div className="section-header">
              <h2 className="section-title">You Might Like</h2>
              <button
                className="see-all"
                onClick={() => setShowAllMightLike(!showAllMightLike)}
                style={{ background: 'none', border: 'none', fontFamily: 'inherit' }}
              >
                {showAllMightLike ? 'Show Less' : 'See All'}
              </button>
            </div>

            <div className="might-like-grid">
              {(showAllMightLike ? youMightLikeList : youMightLikeList.slice(0, 4)).map(movie => (
                <MovieCard key={movie.id} movie={movie} isLarge={true} onPlay={handlePlayVideo} />
              ))}
            </div>
          </section>

          <footer className="dashboard-footer">
            <div className="footer-content">
              © 2026 Streamify. All rights reserved. | Privacy Policy | Terms of Service | Help Center
            </div>
          </footer>
        </>
      )}
      {/* Video Player Modal */}
      <VideoPlayerModal
        videoUrl={playingMovie}
        onClose={() => setPlayingMovie(null)}
      />
    </div>
  );
}
