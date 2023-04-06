import React from 'react';
import './GallerySets.css';

const GallerySets = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div className="image-container" key={index}>
          <img style={{width:"400px"}} src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default GallerySets;
