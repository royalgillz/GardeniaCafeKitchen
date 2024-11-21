import React from 'react';
import PhotoGrid from './PhotoGrid';
import Slideshow from './Slideshow';
import SocialMediaFeed from './SocialMediaFeed';
import pastaimage from '../../assets/gallery/pasta.jpg';
import coffeeimage from '../../assets/gallery/coffee.jpg';
import cozyenvironmentimage from '../../assets/gallery/cozyenvironmentimage.png';
import livemusicimage from '../../assets/gallery/livemusicimage.png';
import bigbreakfastimage from '../../assets/the-big-breakfast.jpg';
import eggbenedictimage from '../../assets/egg-benedict.jpg';
import bruschettaimage from '../../assets/bruschetta.jpg';

const GalleryPage = () => {
    return (
        <div className="gallery-page">
            <h1 className="gallery-title">Our Gallery</h1>
            <Slideshow
                images={[
                    bigbreakfastimage,
                    eggbenedictimage,
                    bruschettaimage,
                ]}
            />
            <PhotoGrid
                photos={[
                    { src: cozyenvironmentimage, alt: 'Cozy seating area' },
                    // { src: coffeeimage, alt: 'Special coffee' },
                    { src: pastaimage, alt: 'Delicious pasta' },
                    // { src: '/images/exterior1.jpg', alt: 'Exterior view' },
                    { src: livemusicimage, alt: 'Live music night' },
                ]}
            />
            <SocialMediaFeed />
        </div>
    );
};

export default GalleryPage;
