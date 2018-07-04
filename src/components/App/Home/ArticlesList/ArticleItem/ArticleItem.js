import React from 'react';
import { Link } from 'react-router-dom';

import './ArticleItem.css';

const ArticleItem = ({
  commentsCount,
  id,
  imageUrl,
  text,
  title,
  onLoadComments,
  onSelectArticle,
  selected
}) => (
  <Link
    className="styled-link"
    to={`/article/${id}`}
    onClick={() => {
      onSelectArticle(id);
      onLoadComments(id);
    }}
  >
    <div className={`article-item ${selected ? 'selected' : ''}`}>
      <div className="article-item-img">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="article-item-content">
        <div className="article-item-title">{title}</div>
        <div className="article-item-text">{text}</div>
        <div className="article-item-comments">{commentsCount} comments</div>
      </div>
    </div>
  </Link>
);

export default ArticleItem;
