import React from 'react';
import './About.css';

const AboutUs = ({ creators }) => {
  return (
    <div className="about-us">
      <h2>Meet the Creators</h2>
      <div className="creator-list">
        {creators.map((creator, index) => (
          <div className="creator" key={index}>
            <img src={creator.image} alt={creator.name} />
            <h3>{creator.name}</h3>
            <p>{creator.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
