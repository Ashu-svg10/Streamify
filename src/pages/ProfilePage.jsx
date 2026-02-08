import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useUser } from '../context/UserContext';
import { useToast } from '../context/ToastContext';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
    const navigate = useNavigate();
    const { user, preferences, watchHistory, updateUser, updatePreferences, clearWatchHistory, logout } = useUser();
    const { showToast } = useToast();
    const [activeTab, setActiveTab] = useState('account');

    // Form states
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSaveProfile = () => {
        if (formData.name !== user.name) {
            updateUser({ name: formData.name });
            showToast('Profile updated successfully', 'success');
        }
        setEditMode(false);
    };

    const handlePasswordChange = () => {
        if (formData.newPassword !== formData.confirmPassword) {
            showToast('Passwords do not match', 'error');
            return;
        }
        if (formData.newPassword.length < 6) {
            showToast('Password must be at least 6 characters', 'error');
            return;
        }
        showToast('Password updated successfully', 'success');
        setFormData({ ...formData, currentPassword: '', newPassword: '', confirmPassword: '' });
    };

    const handlePreferenceChange = (key, value) => {
        updatePreferences({ [key]: value });
        showToast('Preferences updated', 'success');
    };

    const handleClearHistory = () => {
        if (window.confirm('Are you sure you want to clear your watch history?')) {
            clearWatchHistory();
            showToast('Watch history cleared', 'info');
        }
    };

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            logout();
        }
    };

    return (
        <div className="new-dashboard profile-page">
            <Navbar />

            <div className="profile-container">
                <div className="profile-header">
                    <div className="profile-avatar-section">
                        <img src={user.avatar} alt={user.name} className="profile-avatar-large" />
                        <div className="profile-header-info">
                            <h1>{user.name}</h1>
                            <p className="profile-email">{user.email}</p>
                            <p className="profile-join-date">Member since {new Date(user.joinDate).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="profile-tabs">
                    <button
                        className={`profile-tab ${activeTab === 'account' ? 'active' : ''}`}
                        onClick={() => setActiveTab('account')}
                    >
                        <i className="fas fa-user"></i> Account
                    </button>
                    <button
                        className={`profile-tab ${activeTab === 'preferences' ? 'active' : ''}`}
                        onClick={() => setActiveTab('preferences')}
                    >
                        <i className="fas fa-cog"></i> Preferences
                    </button>
                    <button
                        className={`profile-tab ${activeTab === 'history' ? 'active' : ''}`}
                        onClick={() => setActiveTab('history')}
                    >
                        <i className="fas fa-history"></i> Watch History
                    </button>
                </div>

                {/* Tab Content */}
                <div className="profile-content">
                    {/* Account Tab */}
                    {activeTab === 'account' && (
                        <div className="account-section">
                            <div className="section-card">
                                <div className="card-header">
                                    <h2>Account Information</h2>
                                    {!editMode && (
                                        <button className="btn-edit" onClick={() => setEditMode(true)}>
                                            <i className="fas fa-edit"></i> Edit
                                        </button>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        disabled={!editMode}
                                        className="profile-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        disabled
                                        className="profile-input"
                                    />
                                    <small>Email cannot be changed</small>
                                </div>
                                {editMode && (
                                    <div className="form-actions">
                                        <button className="btn-save" onClick={handleSaveProfile}>
                                            <i className="fas fa-check"></i> Save Changes
                                        </button>
                                        <button className="btn-cancel" onClick={() => {
                                            setEditMode(false);
                                            setFormData({ ...formData, name: user.name });
                                        }}>
                                            Cancel
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="section-card">
                                <h2>Change Password</h2>
                                <div className="form-group">
                                    <label>Current Password</label>
                                    <input
                                        type="password"
                                        name="currentPassword"
                                        value={formData.currentPassword}
                                        onChange={handleInputChange}
                                        className="profile-input"
                                        placeholder="Enter current password"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>New Password</label>
                                    <input
                                        type="password"
                                        name="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleInputChange}
                                        className="profile-input"
                                        placeholder="Enter new password"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Confirm New Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className="profile-input"
                                        placeholder="Confirm new password"
                                    />
                                </div>
                                <button className="btn-save" onClick={handlePasswordChange}>
                                    <i className="fas fa-key"></i> Update Password
                                </button>
                            </div>

                            <div className="section-card danger-zone">
                                <h2>Danger Zone</h2>
                                <button className="btn-logout" onClick={handleLogout}>
                                    <i className="fas fa-sign-out-alt"></i> Logout
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Preferences Tab */}
                    {activeTab === 'preferences' && (
                        <div className="preferences-section">
                            <div className="section-card">
                                <h2>Viewing Preferences</h2>

                                <div className="preference-item">
                                    <div className="preference-info">
                                        <h3>Autoplay Next Episode</h3>
                                        <p>Automatically play the next episode</p>
                                    </div>
                                    <label className="toggle-switch">
                                        <input
                                            type="checkbox"
                                            checked={preferences.autoplay}
                                            onChange={(e) => handlePreferenceChange('autoplay', e.target.checked)}
                                        />
                                        <span className="toggle-slider"></span>
                                    </label>
                                </div>

                                <div className="preference-item">
                                    <div className="preference-info">
                                        <h3>Video Quality</h3>
                                        <p>Default playback quality</p>
                                    </div>
                                    <select
                                        className="preference-select"
                                        value={preferences.quality}
                                        onChange={(e) => handlePreferenceChange('quality', e.target.value)}
                                    >
                                        <option value="auto">Auto</option>
                                        <option value="1080p">1080p (HD)</option>
                                        <option value="720p">720p</option>
                                        <option value="480p">480p</option>
                                    </select>
                                </div>

                                <div className="preference-item">
                                    <div className="preference-info">
                                        <h3>Notifications</h3>
                                        <p>Receive updates about new content</p>
                                    </div>
                                    <label className="toggle-switch">
                                        <input
                                            type="checkbox"
                                            checked={preferences.notifications}
                                            onChange={(e) => handlePreferenceChange('notifications', e.target.checked)}
                                        />
                                        <span className="toggle-slider"></span>
                                    </label>
                                </div>

                                <div className="preference-item">
                                    <div className="preference-info">
                                        <h3>Language</h3>
                                        <p>Preferred language for content</p>
                                    </div>
                                    <select
                                        className="preference-select"
                                        value={preferences.language}
                                        onChange={(e) => handlePreferenceChange('language', e.target.value)}
                                    >
                                        <option value="English">English</option>
                                        <option value="Spanish">Spanish</option>
                                        <option value="French">French</option>
                                        <option value="German">German</option>
                                        <option value="Hindi">Hindi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Watch History Tab */}
                    {activeTab === 'history' && (
                        <div className="history-section">
                            <div className="section-card">
                                <div className="card-header">
                                    <h2>Watch History</h2>
                                    {watchHistory.length > 0 && (
                                        <button className="btn-clear" onClick={handleClearHistory}>
                                            <i className="fas fa-trash"></i> Clear History
                                        </button>
                                    )}
                                </div>
                                {watchHistory.length === 0 ? (
                                    <div className="empty-state">
                                        <i className="fas fa-film"></i>
                                        <p>No watch history yet</p>
                                        <button className="btn-browse" onClick={() => navigate('/')}>
                                            Start Watching
                                        </button>
                                    </div>
                                ) : (
                                    <div className="history-list">
                                        {watchHistory.map(movie => (
                                            <div key={movie.id} className="history-item" onClick={() => navigate(`/movie/${movie.id}`)}>
                                                <img src={movie.image} alt={movie.title} />
                                                <div className="history-info">
                                                    <h3>{movie.title}</h3>
                                                    <p className="history-meta">
                                                        <span>{movie.genre}</span>
                                                        <span>⭐ {movie.rating}</span>
                                                    </p>
                                                    <p className="history-date">
                                                        Watched {new Date(movie.watchedAt).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
