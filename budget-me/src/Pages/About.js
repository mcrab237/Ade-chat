import React from 'react';
import AboutUs from './AboutUs';
import img3 from '../Images/image18.jpeg'
import img4 from '../Images/image19.JPG'
import img5 from '../Images/image20.jpeg'

const creators = [
  { image: img3, name: 'John Doe', role: 'CEO & Founder' },
  { image: img4, name: 'Jane Smith', role: 'CTO' },
  { image: img5, name: 'David Brown', role: 'Designer' },
];

function About() {
  return (
    <div className="">
      <AboutUs creators={creators} />
    </div>
  );
}

export default About;
