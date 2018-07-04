import thunk from 'redux-thunk';

import configureMockStore from 'redux-mock-store';

import api from '../fakeApi';

import {
  loadArticles,
  loadComments,
  // loadReplies,
  addComment
  // addReply
} from './articlesThunkActions';
import {
  LOAD_ARTICLES_START,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_FAIL,
  LOAD_COMMENTS_START,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAIL,
  // LOAD_REPLIES_START,
  // LOAD_REPLIES_SUCCESS,
  // LOAD_REPLIES_FAIL,
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL
  // ADD_REPLY_START,
  // ADD_REPLY_SUCCESS,
  // ADD_REPLY_FAIL
} from '../constants/actionTypes';
import {
  articlesMock,
  commentsMock
  // repliesMock
} from '../mocks';

describe('articles thunk actions', () => {
  const middlewares = [thunk];
  const storeMock = configureMockStore(middlewares);
  const error = new Error('Some error');
  let store;

  beforeEach(() => {
    store = storeMock({
      articles: {
        data: [],
        totalCount: 0
      },
      page: 0,
      comments: [],
      fetching: false,
      selectedArticleId: null,
      errors: []
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('load articles thunk action', () => {
    let expectedActions;

    it('creates LOAD_ARTICLES_SUCCESS when loading articles has been done', () => {
      api.loadArticles = jest.fn().mockReturnValueOnce(Promise.resolve(articlesMock));

      expectedActions = [
        {
          type: LOAD_ARTICLES_START
        },
        {
          type: LOAD_ARTICLES_SUCCESS,
          payload: articlesMock
        }
      ];

      return store.dispatch(loadArticles())
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('creates LOAD_ARTICLES_FAIL when loading articles throws an error', () => {
      api.loadArticles = jest.fn().mockReturnValueOnce(Promise.reject(error));

      expectedActions = [
        {
          type: LOAD_ARTICLES_START
        },
        {
          type: LOAD_ARTICLES_FAIL,
          payload: error
        }
      ];

      return store.dispatch(loadArticles())
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });
  });

  describe('load comments thunk action', () => {
    const articleId = 1;
    let expectedActions;

    it('creates LOAD_COMMENTS_SUCCESS when loading comments has been done', () => {
      api.loadComments = jest.fn().mockReturnValueOnce(Promise.resolve({
        data: commentsMock
      }));

      expectedActions = [
        {
          type: LOAD_COMMENTS_START
        },
        {
          type: LOAD_COMMENTS_SUCCESS,
          payload: commentsMock
        }
      ];

      return store.dispatch(loadComments(articleId))
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('creates LOAD_COMMENTS_FAIL when loading comments throws an error', () => {
      api.loadComments = jest.fn().mockReturnValueOnce(Promise.reject(error));

      expectedActions = [
        {
          type: LOAD_COMMENTS_START
        },
        {
          type: LOAD_COMMENTS_FAIL,
          payload: error
        }
      ];

      return store.dispatch(loadComments(articleId))
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });
  });

  // describe('load replies thunk action', () => {
  //   const parentCommentId = 1;
  //   let expectedActions;

  //   it('creates LOAD_REPLIES_SUCCESS when loading replies has been done', () => {
  //     api.loadReplies = jest.fn().mockReturnValueOnce(Promise.resolve({
  //       data: [...repliesMock]
  //     }));

  //     expectedActions = [
  //       {
  //         type: LOAD_REPLIES_START
  //       },
  //       {
  //         type: LOAD_REPLIES_SUCCESS,
  //         payload: repliesMock
  //       }
  //     ];

  //     return store.dispatch(loadReplies(parentCommentId))
  //       .then(() => expect(store.getActions()).toEqual(expectedActions));
  //   });

  //   it('creates LOAD_REPLIES_FAIL when loading replies throws an error', () => {
  //     api.loadReplies = jest.fn().mockReturnValueOnce(Promise.reject(error));

  //     expectedActions = [
  //       {
  //         type: LOAD_REPLIES_START
  //       },
  //       {
  //         type: LOAD_REPLIES_FAIL,
  //         payload: error
  //       }
  //     ];

  //     return store.dispatch(loadReplies(parentCommentId))
  //       .then(() => expect(store.getActions()).toEqual(expectedActions));
  //   });
  // });

  describe('add comment thunk action', () => {
    let expectedActions;

    it('creates ADD_COMMENT_SUCCESS when adding comment has been done', () => {
      api.addComment = jest.fn().mockReturnValueOnce(Promise.resolve(commentsMock[0]));
      api.loadComments = jest.fn().mockReturnValueOnce(Promise.resolve({
        data: commentsMock
      }));

      expectedActions = [
        {
          type: ADD_COMMENT_START
        },
        {
          type: ADD_COMMENT_SUCCESS,
          payload: commentsMock[0]
        },
        {
          type: LOAD_COMMENTS_START
        },
        {
          type: LOAD_COMMENTS_SUCCESS,
          payload: commentsMock
        }
      ];

      return store.dispatch(addComment(commentsMock[0].articleId, commentsMock[0].text))
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('creates ADD_COMMENT_FAIL when adding comment throws an error', () => {
      api.addComment = jest.fn().mockReturnValueOnce(Promise.reject(error));
      api.loadComments = jest.fn().mockReturnValueOnce(Promise.resolve({
        data: commentsMock
      }));

      expectedActions = [
        {
          type: ADD_COMMENT_START
        },
        {
          type: ADD_COMMENT_FAIL,
          payload: error
        }
      ];

      return store.dispatch(addComment(commentsMock[0].articleId, commentsMock[0].text))
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });
  });

  // describe('add reply thunk action', () => {
  //   let expectedActions;

  //   it('creates ADD_REPLY_SUCCESS when adding reply has been done', () => {
  //     api.addReply = jest.fn().mockReturnValueOnce(Promise.resolve(repliesMock[0]));
  //     api.loadReplies = jest.fn().mockReturnValueOnce(Promise.resolve({
  //       data: repliesMock
  //     }));

  //     expectedActions = [
  //       {
  //         type: ADD_REPLY_START
  //       },
  //       {
  //         type: ADD_REPLY_SUCCESS,
  //         payload: repliesMock[0]
  //       },
  //       {
  //         type: LOAD_REPLIES_START
  //       },
  //       {
  //         type: LOAD_REPLIES_SUCCESS,
  //         payload: repliesMock
  //       }
  //     ];

  //     return store.dispatch(addReply(repliesMock[0].parentCommentId, repliesMock[0].text))
  //       .then(() => expect(store.getActions()).toEqual(expectedActions));
  //   });

  //   it('creates ADD_REPLY_FAIL when adding reply throws an error', () => {
  //     api.addReply = jest.fn().mockReturnValueOnce(Promise.reject(error));
  //     api.loadReplies = jest.fn().mockReturnValueOnce(Promise.resolve({
  //       data: repliesMock
  //     }));

  //     expectedActions = [
  //       {
  //         type: ADD_REPLY_START
  //       },
  //       {
  //         type: ADD_REPLY_FAIL,
  //         payload: error
  //       }
  //     ];

  //     return store.dispatch(addReply(repliesMock[0].parentCommentId, repliesMock[0].text))
  //       .then(() => expect(store.getActions()).toEqual(expectedActions));
  //   });
  // });
});
