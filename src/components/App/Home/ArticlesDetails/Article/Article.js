import React from 'react';

import './Article.css';

const Article = ({ imageUrl, title, text }) => (
  <div className="article">
    <h2 className="article-title">{title}</h2>
    <div className="article-img">
      <img src={imageUrl} alt={title} />
    </div>
    <p className="article-text">{text}</p>
  </div>
);

export default Article;
