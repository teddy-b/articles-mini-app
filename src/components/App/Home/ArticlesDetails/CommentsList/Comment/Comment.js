import React, { Component } from 'react';
import moment from 'moment';

import RepliesList from '../RepliesList';

import './Comment.css';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replyVisible: false
    };
  }

  render() {
    const {
      author,
      createdAt,
      id,
      onAddReply,
      onLoadReplies,
      replies,
      repliesCount,
      text
    } = this.props;
    const { replyVisible } = this.state;
    return (
      <div className="comment">
        <div className="comment-heading">
          <span className="comment-author">{author}</span>
          <span className="comment-created-at">{moment(createdAt).fromNow()}</span>
          <span
            className={repliesCount && 'comment-reply-active comment-reply-active-count'}
            onClick={() => repliesCount && onLoadReplies(id)}
          >
            {repliesCount} replies
          </span>
          {!replyVisible && (
            <span
              className="comment-reply-active comment-reply-active-reply"
              onClick={() => this.setState({
                replyVisible: true
              })}
            >
              reply
            </span>
          )}
          {replyVisible && (
            <span
              className="comment-reply-active comment-reply-active-discard"
              onClick={() => this.setState({
                replyVisible: false
              })}
            >
              discard reply
            </span>
          )}
        </div>
        <p>{text}</p>
        {replyVisible && (
          <textarea
            rows="5"
            cols="40"
            placeholder="Add reply"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                onAddReply(id, e.target.value);
                e.target.value = '';
                e.target.blur();
                this.setState({
                  replyVisible: false
                });
              }
            }}
          />
        )}
        {replies && (
          <RepliesList
            onAddReply={onAddReply}
            onLoadReplies={onLoadReplies}
            replies={replies}
          />
        )}
      </div>
    );
  }
}

export default Comment;
