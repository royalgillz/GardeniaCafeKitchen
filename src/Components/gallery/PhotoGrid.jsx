import React from 'react';

const PhotoGrid = ({ photos }) => {
    return (
        <div className="photo-grid">
            {photos.map((photo, index) => (
                <div key={index} className="photo-grid-item">
                    <img src={photo.src} alt={photo.alt} className="photo" />
                </div>
            ))}
        </div>
    );
};

export default PhotoGrid;
