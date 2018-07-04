import {
  LOAD_ARTICLES_START,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_FAIL,
  SELECT_ARTICLE,
  LOAD_COMMENTS_START,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAIL,
  LOAD_REPLIES_START,
  LOAD_REPLIES_SUCCESS,
  LOAD_REPLIES_FAIL,
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  ADD_REPLY_START,
  ADD_REPLY_SUCCESS,
  ADD_REPLY_FAIL,
  NEXT_PAGE,
  PREV_PAGE
} from '../constants/actionTypes';
import initialState from '../store/initialState';

export const articles = (state = initialState.articles, action) => {
  switch (action.type) {
    case LOAD_ARTICLES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const page = (state = initialState.page, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return state + 1;
    case PREV_PAGE:
      return state - 1;
    default:
      return state;
  }
};

export const comments = (state = initialState.comments, action) => {
  const loadReplies = (comment) => {
    if (comment.id === action.payload[0].parentCommentId) {
      comment.replies = action.payload;
    } else if (comment.replies) {
      comment.replies.forEach(loadReplies);
    }
  };

  switch (action.type) {
    case LOAD_COMMENTS_SUCCESS:
      return action.payload;
    case LOAD_REPLIES_SUCCESS:
      state.forEach(loadReplies);
      return [...state];
    default:
      return state;
  }
};

export const fetching = (state = initialState.fetching, action) => {
  switch (action.type) {
    case LOAD_ARTICLES_START:
    case LOAD_COMMENTS_START:
    case LOAD_REPLIES_START:
    case ADD_COMMENT_START:
    case ADD_REPLY_START:
      return true;
    case LOAD_ARTICLES_SUCCESS:
    case LOAD_ARTICLES_FAIL:
    case LOAD_COMMENTS_SUCCESS:
    case LOAD_COMMENTS_FAIL:
    case LOAD_REPLIES_SUCCESS:
    case LOAD_REPLIES_FAIL:
    case ADD_COMMENT_SUCCESS:
    case ADD_COMMENT_FAIL:
    case ADD_REPLY_SUCCESS:
    case ADD_REPLY_FAIL:
      return false;
    default:
      return state;
  }
};

export const selectedArticleId = (state = initialState.selectedArticleId, action) => {
  switch (action.type) {
    case SELECT_ARTICLE:
      return action.payload;
    default:
      return state;
  }
};

export const errors = (state = initialState.errors, action) => {
  switch (action.type) {
    case LOAD_ARTICLES_FAIL:
    case LOAD_COMMENTS_FAIL:
    case LOAD_REPLIES_FAIL:
    case ADD_COMMENT_FAIL:
    case ADD_REPLY_FAIL:
      return [
        ...state,
        action.payload
      ];
    case LOAD_ARTICLES_SUCCESS:
    case LOAD_COMMENTS_SUCCESS:
    case LOAD_REPLIES_SUCCESS:
    case ADD_COMMENT_SUCCESS:
    case ADD_REPLY_SUCCESS:
      return [];
    default:
      return state;
  }
};
