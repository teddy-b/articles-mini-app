import React from 'react';

import Comment from './Comment';

const CommentsList = ({ comments, onAddComment, onAddReply, onLoadReplies, selectedArticleId }) => (
  <div className="comments-list">
    <h3>Comments</h3>
    <textarea
      rows="5"
      cols="40"
      placeholder="Add comment"
      onKeyPress={e => onAddComment(selectedArticleId, e)}
    />
    {comments.length
      ? comments.map(comment => (
        <Comment
          key={comment.id}
          {...comment}
          onLoadReplies={onLoadReplies}
          onAddReply={onAddReply}
          replies={comment.replies}
        />
      ))
      : (
        <div className="comments-list-empty">
          <h4>No comments yet</h4>
          <div>Be the first to comment</div>
        </div>
      )
    }
  </div>
);

export default CommentsList;
