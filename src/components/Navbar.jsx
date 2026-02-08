import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      sessionStorage.removeItem('userEmail');
      sessionStorage.removeItem('userName');
      window.location.href = '/';
    }
  };

  const handleMenuClick = (path) => {
    setIsDropdownOpen(false);
    navigate(path);
  };

  const userName = sessionStorage.getItem('userName') || 'User';
  const userInitial = userName.charAt(0).toUpperCase();

  const isActive = (path) => location.pathname === path ? 'active-link' : '';

  return (
    <nav className="dashboard-navbar">
      <Link to="/" className="logo-dashboard">Streamify</Link>

      <ul className="nav-links">
        <li><Link to="/" className={isActive('/')}>Home</Link></li>
        <li><Link to="/trending" className={isActive('/trending')}>Trending</Link></li>
        <li><Link to="/mylist" className={isActive('/mylist')}>My List</Link></li>
        <li><Link to="/browse" className={isActive('/browse')}>Browse</Link></li>
      </ul>

      <div className="user-profile">
        <span>Welcome, {userName}!</span>
        <div className="profile-avatar" onClick={handleProfileClick}>
          {userInitial}
        </div>

        {isDropdownOpen && (
          <div className="profile-dropdown">
            <div className="dropdown-item" onClick={() => handleMenuClick('/profile')}>
              <i className="fas fa-user"></i> Profile
            </div>
            <div className="dropdown-item" onClick={() => handleMenuClick('/profile')}>
              <i className="fas fa-cog"></i> Settings
            </div>
            <div className="dropdown-item" onClick={() => handleMenuClick('/mylist')}>
              <i className="fas fa-heart"></i> My List
            </div>
            <div className="dropdown-item" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
