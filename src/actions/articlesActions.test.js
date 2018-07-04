import {
  loadArticlesStart,
  loadArticlesSuccess,
  loadArticlesFail,
  selectArticle,
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
  addReplyFail,
  nextPage,
  prevPage
} from './articlesActions';
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
import { articlesMock, commentsMock, repliesMock } from '../mocks';

describe('actions', () => {
  const error = new Error('Some error');

  it('should create an action to start load articles', () => {
    const expectedAction = {
      type: LOAD_ARTICLES_START
    };

    expect(loadArticlesStart()).toEqual(expectedAction);
  });

  it('should create an action to success load articles', () => {
    const expectedAction = {
      type: LOAD_ARTICLES_SUCCESS,
      payload: articlesMock
    };

    expect(loadArticlesSuccess(articlesMock)).toEqual(expectedAction);
  });

  it('should create an action to fail load articles', () => {
    const expectedAction = {
      type: LOAD_ARTICLES_FAIL,
      payload: error
    };

    expect(loadArticlesFail(error)).toEqual(expectedAction);
  });

  it('should create an action to start select article', () => {
    const articleId = 1;
    const expectedAction = {
      type: SELECT_ARTICLE,
      payload: articleId
    };

    expect(selectArticle(articleId)).toEqual(expectedAction);
  });

  it('should create an action to start load comments', () => {
    const expectedAction = {
      type: LOAD_COMMENTS_START
    };

    expect(loadCommentsStart()).toEqual(expectedAction);
  });

  it('should create an action to success load comments', () => {
    const expectedAction = {
      type: LOAD_COMMENTS_SUCCESS,
      payload: commentsMock
    };

    expect(loadCommentsSuccess(commentsMock)).toEqual(expectedAction);
  });

  it('should create an action to fail load comments', () => {
    const expectedAction = {
      type: LOAD_COMMENTS_FAIL,
      payload: error
    };

    expect(loadCommentsFail(error)).toEqual(expectedAction);
  });

  it('should create an action to start load replies', () => {
    const expectedAction = {
      type: LOAD_REPLIES_START
    };

    expect(loadRepliesStart()).toEqual(expectedAction);
  });

  it('should create an action to success load replies', () => {
    const expectedAction = {
      type: LOAD_REPLIES_SUCCESS,
      payload: repliesMock
    };

    expect(loadRepliesSuccess(repliesMock)).toEqual(expectedAction);
  });

  it('should create an action to fail load replies', () => {
    const expectedAction = {
      type: LOAD_REPLIES_FAIL,
      payload: error
    };

    expect(loadRepliesFail(error)).toEqual(expectedAction);
  });

  it('should create an action to start add comment', () => {
    const expectedAction = {
      type: ADD_COMMENT_START
    };

    expect(addCommentStart()).toEqual(expectedAction);
  });

  it('should create an action to success add comment', () => {
    const expectedAction = {
      type: ADD_COMMENT_SUCCESS,
      payload: commentsMock[0]
    };

    expect(addCommentSuccess(commentsMock[0])).toEqual(expectedAction);
  });

  it('should create an action to fail add comment', () => {
    const expectedAction = {
      type: ADD_COMMENT_FAIL,
      payload: error
    };

    expect(addCommentFail(error)).toEqual(expectedAction);
  });

  it('should create an action to start add reply', () => {
    const expectedAction = {
      type: ADD_REPLY_START
    };

    expect(addReplyStart()).toEqual(expectedAction);
  });

  it('should create an action to success add reply', () => {
    const expectedAction = {
      type: ADD_REPLY_SUCCESS,
      payload: repliesMock[0]
    };

    expect(addReplySuccess(repliesMock[0])).toEqual(expectedAction);
  });

  it('should create an action to fail add reply', () => {
    const expectedAction = {
      type: ADD_REPLY_FAIL,
      payload: error
    };

    expect(addReplyFail(error)).toEqual(expectedAction);
  });

  it('should create an action to next page', () => {
    const expectedAction = {
      type: NEXT_PAGE
    };

    expect(nextPage()).toEqual(expectedAction);
  });

  it('should create an action to prev page', () => {
    const expectedAction = {
      type: PREV_PAGE
    };

    expect(prevPage()).toEqual(expectedAction);
  });
});
