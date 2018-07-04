import React from 'react';

import ArticleItem from './ArticleItem';
import { ARTICLES_PER_PAGE } from '../../../../constants/global';

import './ArticlesList.css';

const ArticlesList = ({
  articles,
  articlesCount,
  onLoadComments,
  onNextPage,
  onPrevPage,
  onSelectArticle,
  page,
  selectedArticleId
}) => {
  const start = page * ARTICLES_PER_PAGE;
  const end = start + ARTICLES_PER_PAGE;
  const articlesToShow = articles.slice(start, end);
  return (
    <div className="articles-list">
      <h2>Articles list</h2>
      {articlesToShow.map(article => (
        <ArticleItem
          key={article.id}
          {...article}
          onLoadComments={onLoadComments}
          onSelectArticle={onSelectArticle}
          selected={article.id === selectedArticleId}
        />
      ))}
      <div className="pagination">
        {page !== 0 && (
          <button type="button" onClick={onPrevPage}>Load Prev</button>
        )}
        {end < articlesCount && (
          <button type="button" onClick={onNextPage}>Load Next</button>
        )}
      </div>
    </div>
  );
};

export default ArticlesList;
