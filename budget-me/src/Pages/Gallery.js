import React from 'react';
import img1 from '../Images/image11.png'
import img2 from '../Images/image12.png'
import img3 from '../Images/image13.png'
import img4 from '../Images/image14.png'
import img5 from '../Images/image15.png'
import img6 from '../Images/image16.png'

import GallerySets from './GallerySets';


const images = [
  { src: img1, alt: 'Image 1' },
  { src: img2, alt: 'Image 2' },
  { src: img3, alt: 'Image 3' },
  { src: img4, alt: 'Image 4' },
  { src: img5, alt: 'Image 5' },
  { src: img6, alt: 'Image 5' },
];

function Gallery() {
  return (
    <div className="">
      <h1>Image Gallery</h1>
      <GallerySets images={images} />
    </div>
  );
}

export default Gallery;
