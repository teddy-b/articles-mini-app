import React from 'react';

import Article from './Article';
import CommentsList from './CommentsList';
import './ArticlesDetails.css';

const ArticlesDetails = ({
  comments,
  onAddComment,
  onAddReply,
  onLoadReplies,
  selectedArticle
}) => (
  selectedArticle
    ? (
      <div className="articles-details">
        <Article {...selectedArticle} />
        <CommentsList
          comments={comments}
          onAddComment={onAddComment}
          onAddReply={onAddReply}
          onLoadReplies={onLoadReplies}
          selectedArticleId={selectedArticle.id}
        />
      </div>
    )
    : (
      <div className="articles-details-empty">
        <h2>Nothing to show</h2>
        <div>Select article from the list to see details</div>
      </div>
    )
);

export default ArticlesDetails;
