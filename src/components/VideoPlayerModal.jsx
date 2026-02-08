import React from 'react';
import '../styles/VideoPlayerModal.css';

const VideoPlayerModal = ({ videoUrl, onClose }) => {
    if (!videoUrl) return null;

    // Ensure the URL is an embed URL (simple check/conversion could be added here if needed)
    // For now, we assume data has correct format or we fix it.

    return (
        <div className="video-modal-overlay" onClick={onClose}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal-btn" onClick={onClose}>&times;</button>
                <div className="video-wrapper">
                    <iframe
                        src={`${videoUrl}?autoplay=1`}
                        title="Movie Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayerModal;
