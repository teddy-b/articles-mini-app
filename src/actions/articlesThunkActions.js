import api from '../fakeApi';
import {
  loadArticlesStart,
  loadArticlesSuccess,
  loadArticlesFail,
  loadCommentsStart,
  loadCommentsSuccess,
  loadCommentsFail,
  loadRepliesStart,
  loadRepliesSuccess,
  loadRepliesFail,
  addCommentStart,
  addCommentSuccess,
  addCommentFail,
  addReplyStart,
  addReplySuccess,
  addReplyFail
} from './articlesActions';

export const loadArticles = () => (dispatch) => {
  dispatch(loadArticlesStart());

  return api.loadArticles()
    .then(result => dispatch(loadArticlesSuccess(result)))
    .catch(error => dispatch(loadArticlesFail(error)));
};

export const loadComments = articleId => (dispatch) => {
  dispatch(loadCommentsStart());

  return api.loadComments({
    articleId
  }).then(result => dispatch(loadCommentsSuccess(result.data)))
    .catch(error => dispatch(loadCommentsFail(error)));
};

export const loadReplies = parentCommentId => (dispatch) => {
  dispatch(loadRepliesStart());

  return api.loadComments({
    parentCommentId
  }).then(result => dispatch(loadRepliesSuccess(result.data)))
    .catch(error => dispatch(loadRepliesFail(error)));
};

export const addComment = (articleId, text) => (dispatch) => {
  dispatch(addCommentStart());

  return api.addComment({
    articleId,
    text
  }).then((result) => {
    dispatch(addCommentSuccess(result));
    dispatch(loadComments(articleId));
  })
    .catch(error => dispatch(addCommentFail(error)));
};

export const addReply = (parentCommentId, text) => (dispatch) => {
  dispatch(addReplyStart());

  return api.addComment({
    parentCommentId,
    text
  }).then((result) => {
    dispatch(addReplySuccess(result));
    dispatch(loadReplies(parentCommentId));
  })
    .catch(error => dispatch(addReplyFail(error)));
};
