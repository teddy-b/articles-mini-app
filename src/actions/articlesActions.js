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

export const loadArticlesStart = () => ({
  type: LOAD_ARTICLES_START
});

export const loadArticlesSuccess = articles => ({
  type: LOAD_ARTICLES_SUCCESS,
  payload: articles
});

export const loadArticlesFail = error => ({
  type: LOAD_ARTICLES_FAIL,
  payload: error
});

export const selectArticle = articleId => ({
  type: SELECT_ARTICLE,
  payload: articleId
});

export const loadCommentsStart = () => ({
  type: LOAD_COMMENTS_START
});

export const loadCommentsSuccess = comments => ({
  type: LOAD_COMMENTS_SUCCESS,
  payload: comments
});

export const loadCommentsFail = error => ({
  type: LOAD_COMMENTS_FAIL,
  payload: error
});

export const loadRepliesStart = () => ({
  type: LOAD_REPLIES_START
});

export const loadRepliesSuccess = replies => ({
  type: LOAD_REPLIES_SUCCESS,
  payload: replies
});

export const loadRepliesFail = error => ({
  type: LOAD_REPLIES_FAIL,
  payload: error
});

export const addCommentStart = comment => ({
  type: ADD_COMMENT_START,
  payload: comment
});

export const addCommentSuccess = comment => ({
  type: ADD_COMMENT_SUCCESS,
  payload: comment
});

export const addCommentFail = error => ({
  type: ADD_COMMENT_FAIL,
  payload: error
});

export const addReplyStart = reply => ({
  type: ADD_REPLY_START,
  payload: reply
});

export const addReplySuccess = reply => ({
  type: ADD_REPLY_SUCCESS,
  payload: reply
});

export const addReplyFail = error => ({
  type: ADD_REPLY_FAIL,
  payload: error
});

export const nextPage = () => ({
  type: NEXT_PAGE
});

export const prevPage = () => ({
  type: PREV_PAGE
});
