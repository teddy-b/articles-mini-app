import React from 'react';

import Comment from '../Comment';

import './RepliesList.css';

const RepliesList = ({ onAddReply, onLoadReplies, replies }) => (
  <div className="replies-list">
    {replies && replies.map(reply => (
      <Comment
        key={reply.id}
        {...reply}
        onAddReply={onAddReply}
        onLoadReplies={onLoadReplies}
        replies={reply.replies}
      />
    ))}
  </div>
);

export default RepliesList;
