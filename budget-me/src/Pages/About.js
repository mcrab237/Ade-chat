import React from 'react';
import AboutUs from './AboutUs';
import img3 from '../Images/image18.jpeg'
import img4 from '../Images/image19.JPG'
import img5 from '../Images/image20.jpeg'

const creators = [
  { image: img3, name: 'Tony-Bradley Ade Fru-Asoh', role: 'Developer' },
  { image: img4, name: 'Carine Tanka', role: 'Technical editor' },
  { image: img5, name: 'Ngulefac Agendia', role: 'Designer' },
];

function About() {
  return (
    <div className="">
      <AboutUs creators={creators} />
    </div>
  );
}

export default About;
