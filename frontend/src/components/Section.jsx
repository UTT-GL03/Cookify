// components/Section.js
import React from 'react';
import './../section.css';

const Section = ({ title, description }) => {
    return (
        <div className="section">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Section;
