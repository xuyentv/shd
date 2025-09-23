import React from 'react'

export default function SubMainSection() {
 return (
    <section className="sub-main-content">
      <div className="article-card">
        <div className="article-card-image">
          <img src={'https://i.pinimg.com/736x/88/73/cd/8873cd36fea428143e36e261b11bb57d.jpg'} alt="Man with VR headset" />
        </div>
        <div className="article-card-content">
          <span className="category-tag technology">Technology</span>
          <h3>14 Innovative Architectural Designs to Create a Vast Interior Space</h3>
          <div className="author-info">
            <span>By Adrio David</span>
            <span>&nbsp;•&nbsp;</span>
            <span>Sep 10, 2025</span>
          </div>
        </div>
      </div>
      <div className="article-card">
        <div className="article-card-image">
          <img src={'https://i.pinimg.com/736x/88/73/cd/8873cd36fea428143e36e261b11bb57d.jpg'} alt="Ice cave" />
        </div>
        <div className="article-card-content">
          <span className="category-tag travel">Travel</span>
          <h3>Traveller Visiting Ice Cave With Amazing Eye-catching view with nature</h3>
          <div className="author-info">
            <span>By Adrio David</span>
            <span>&nbsp;•&nbsp;</span>
            <span>Sep 10, 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
