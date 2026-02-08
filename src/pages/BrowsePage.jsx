import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import { universalMovies } from '../data/movies';
import '../styles/Dashboard.css';

const BrowsePage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Extract unique genres
    const genres = ['All', ...new Set(universalMovies.flatMap(m => m.genre.split(', ')))].sort();

    const filteredMovies = universalMovies.filter(m => {
        const matchesGenre = filter === 'All' || m.genre.includes(filter);
        const matchesSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesGenre && matchesSearch;
    });

    return (
        <div className="new-dashboard">
            <Navbar />
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
            </div>
            <div style={{ padding: '120px 50px 50px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <h1 className="section-title" style={{ fontSize: '32px' }}>Browse All</h1>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        style={{
                            background: '#1a1a1a',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '4px',
                            border: '1px solid rgba(255,255,255,0.2)'
                        }}
                    >
                        {genres.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                </div>

                <div className="might-like-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
                    {filteredMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrowsePage;
