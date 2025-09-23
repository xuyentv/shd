import React from 'react'
import './MainSection.css'

export default function MainSection() {
 return (
    <section className="main-hero">
      <div className="hero-image">
        <img src={'https://i.pinimg.com/736x/88/73/cd/8873cd36fea428143e36e261b11bb57d.jpg'} alt="Modern buildings" />
      </div>
      <div className="hero-content">
        <span className="category-tag">Lifestyle</span>
        <h2>Begin here to obtain a brief summary encompassing all the essential</h2>
        <p>This comprehensive post serves as your chief sheet to swiftly familiarize yourself with Ghost. Packed with crucial...</p>
        <div className="author-info">
          <span>By Adrio David</span>
          <span>&nbsp;•&nbsp;</span>
          <span>Sep 10, 2025</span>
        </div>
      </div>
    </section>
  );
}
