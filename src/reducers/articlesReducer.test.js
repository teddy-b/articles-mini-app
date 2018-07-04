import {
  articles,
  page,
  comments,
  fetching,
  selectedArticleId,
  errors
} from './articlesReducer';
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
import { articlesMock, commentsMock, repliesMock, repliesRepliesMock } from '../mocks';

describe('articles reducer', () => {
  const prevState = initialState.articles;
  let action;
  let nextState;

  it('should return the initial state', () => {
    action = {
    };
    expect(articles(undefined, action)).toEqual(prevState);
  });

  it('should handle LOAD_ARTICLES_SUCCESS', () => {
    action = {
      type: LOAD_ARTICLES_SUCCESS,
      payload: articlesMock
    };
    nextState = articlesMock;
    expect(articles(prevState, action)).toEqual(nextState);
  });
});

describe('page reducer', () => {
  let prevState = 0;
  let action;
  let nextState;

  it('should return the initial state', () => {
    action = {
    };
    expect(page(undefined, action)).toEqual(prevState);
  });

  it('should handle NEXT_PAGE', () => {
    prevState = 0;
    action = {
      type: NEXT_PAGE
    };
    nextState = 1;
    expect(page(prevState, action)).toEqual(nextState);
  });

  it('should handle PREV_PAGE', () => {
    prevState = 1;
    action = {
      type: PREV_PAGE
    };
    nextState = 0;
    expect(page(prevState, action)).toEqual(nextState);
  });
});

describe('comments reducer', () => {
  let prevState = initialState.comments;
  let action;
  let nextState;

  it('should return the initial state', () => {
    action = {
    };
    expect(comments(undefined, action)).toEqual(prevState);
  });

  it('should handle LOAD_COMMENTS_SUCCESS', () => {
    action = {
      type: LOAD_COMMENTS_SUCCESS,
      payload: commentsMock
    };
    nextState = commentsMock;
    expect(comments(prevState, action)).toEqual(nextState);
  });

  it('should handle LOAD_REPLIES_SUCCESS', () => {
    prevState = commentsMock;
    action = {
      type: LOAD_REPLIES_SUCCESS,
      payload: repliesMock
    };
    nextState = [
      commentsMock[0],
      {
        ...commentsMock[1],
        replies: repliesMock
      },
      commentsMock[2]
    ];
    expect(comments(prevState, action)).toEqual(nextState);
  });

  it('should handle LOAD_REPLIES_SUCCESS with replies to replies', () => {
    prevState = [
      commentsMock[0],
      {
        ...commentsMock[1],
        replies: repliesMock
      },
      commentsMock[2]
    ];
    action = {
      type: LOAD_REPLIES_SUCCESS,
      payload: repliesRepliesMock
    };
    nextState = [
      commentsMock[0],
      {
        ...commentsMock[1],
        replies: [
          repliesMock[0],
          {
            ...repliesMock[1],
            replies: repliesRepliesMock
          }
        ]
      },
      commentsMock[2]
    ];
    expect(comments(prevState, action)).toEqual(nextState);
  });
});

describe('fetching reducer', () => {
  const prevState = initialState.fetching;
  let action;
  let nextState;

  it('should return the initial state', () => {
    action = {
    };
    expect(fetching(undefined, action)).toEqual(prevState);
  });

  it('should handle LOAD_ARTICLES_START', () => {
    action = {
      type: LOAD_ARTICLES_START
    };
    nextState = true;
    expect(fetching(prevState, action)).toEqual(nextState);
  });

  it('should handle LOAD_COMMENTS_START', () => {
    action = {
      type: LOAD_COMMENTS_START
    };
    nextState = true;
    expect(fetching(prevState, action)).toEqual(nextState);
  });

  it('should handle LOAD_REPLIES_START', () => {
    action = {
      type: LOAD_REPLIES_START
    };
    nextState = true;
    expect(fetching(prevState, action)).toEqual(nextState);
  });

  it('should handle ADD_COMMENT_START', () => {
    action = {
      type: ADD_COMMENT_START
    };
    nextState = true;
    expect(fetching(prevState, action)).toEqual(nextState);
  });

  it('should handle ADD_REPLY_START', () => {
    action = {
      type: ADD_REPLY_START
    };
    nextState = true;
    expect(fetching(prevState, action)).toEqual(nextState);
  });

  it('should handle LOAD_ARTICLES_SUCCESS', () => {
    action = {
      type: LOAD_ARTICLES_SUCCESS
    };
    nextState = false;
    expect(fetching(prevState, action)).toEqual(nextState);
  });

  it('should handle LOAD_ARTICLES_FAIL', () => {
    action = {
      type: LOAD_ARTICLES_FAIL
    };
    nextState = false;
    expect(fetching(prevState, action)).toEqual(nextState);
  });

  it('should handle LOAD_COMMENTS_SUCCESS', () => {
    action = {
      type: LOAD_COMMENTS_SUCCESS
    };
    nextState = false;
    expect(fetching(prevState, action)).toEqual(nextState);
  });

  it('should handle LOAD_COMMENTS_FAIL', () => {
    action = {
      type: LOAD_COMMENTS_FAIL
    };
    nextState = false;
    expect(fetching(prevState, action)).toEqual(nextState);
  });

  it('should handle LOAD_REPLIES_SUCCESS', () => {
    action = {
      type: LOAD_REPLIES_SUCCESS
    };
    nextState = false;
    expect(fetching(prevState, action)).toEqual(nextState);
  });

  it('should handle LOAD_REPLIES_FAIL', () => {
    action = {
      type: LOAD_REPLIES_FAIL
    };
    nextState = false;
    expect(fetching(prevState, action)).toEqual(nextState);
  });

  it('should handle ADD_COMMENT_SUCCESS', () => {
    action = {
      type: ADD_COMMENT_SUCCESS
    };
    nextState = false;
    expect(fetching(prevState, action)).toEqual(nextState);
  });

  it('should handle ADD_COMMENT_FAIL', () => {
    action = {
      type: ADD_COMMENT_FAIL
    };
    nextState = false;
    expect(fetching(prevState, action)).toEqual(nextState);
  });

  it('should handle ADD_REPLY_SUCCESS', () => {
    action = {
      type: ADD_REPLY_SUCCESS
    };
    nextState = false;
    expect(fetching(prevState, action)).toEqual(nextState);
  });

  it('should handle ADD_REPLY_FAIL', () => {
    action = {
      type: ADD_REPLY_FAIL
    };
    nextState = false;
    expect(fetching(prevState, action)).toEqual(nextState);
  });
});

describe('selectedArticleId reducer', () => {
  const prevState = initialState.selectedArticleId;
  let action;
  let nextState;

  it('should return the initial state', () => {
    action = {
    };
    expect(selectedArticleId(undefined, action)).toEqual(prevState);
  });

  it('should handle SELECT_ARTICLE', () => {
    action = {
      type: SELECT_ARTICLE,
      payload: 1
    };
    nextState = 1;
    expect(selectedArticleId(prevState, action)).toEqual(nextState);
  });
});

describe('errors reducer', () => {
  const error = new Error('Some error');
  const prevState = initialState.errors;
  let action;
  let nextState;

  it('should return the initial state', () => {
    action = {
    };
    expect(errors(undefined, action)).toEqual(prevState);
  });

  it('should handle LOAD_ARTICLES_FAIL', () => {
    action = {
      type: LOAD_ARTICLES_FAIL,
      payload: error
    };
    nextState = [error];
    expect(errors(prevState, action)).toEqual(nextState);
  });

  it('should handle LOAD_COMMENTS_FAIL', () => {
    action = {
      type: LOAD_COMMENTS_FAIL,
      payload: error
    };
    nextState = [error];
    expect(errors(prevState, action)).toEqual(nextState);
  });

  it('should handle LOAD_REPLIES_FAIL', () => {
    action = {
      type: LOAD_REPLIES_FAIL,
      payload: error
    };
    nextState = [error];
    expect(errors(prevState, action)).toEqual(nextState);
  });

  it('should handle ADD_COMMENT_FAIL', () => {
    action = {
      type: ADD_COMMENT_FAIL,
      payload: error
    };
    nextState = [error];
    expect(errors(prevState, action)).toEqual(nextState);
  });

  it('should handle ADD_REPLY_FAIL', () => {
    action = {
      type: ADD_REPLY_FAIL,
      payload: error
    };
    nextState = [error];
    expect(errors(prevState, action)).toEqual(nextState);
  });

  it('should handle LOAD_ARTICLES_SUCCESS', () => {
    action = {
      type: LOAD_ARTICLES_SUCCESS,
      payload: error
    };
    nextState = [];
    expect(errors(prevState, action)).toEqual(nextState);
  });

  it('should handle LOAD_COMMENTS_SUCCESS', () => {
    action = {
      type: LOAD_COMMENTS_SUCCESS,
      payload: error
    };
    nextState = [];
    expect(errors(prevState, action)).toEqual(nextState);
  });

  it('should handle LOAD_REPLIES_SUCCESS', () => {
    action = {
      type: LOAD_REPLIES_SUCCESS,
      payload: error
    };
    nextState = [];
    expect(errors(prevState, action)).toEqual(nextState);
  });

  it('should handle ADD_COMMENT_SUCCESS', () => {
    action = {
      type: ADD_COMMENT_SUCCESS,
      payload: error
    };
    nextState = [];
    expect(errors(prevState, action)).toEqual(nextState);
  });

  it('should handle ADD_REPLY_SUCCESS', () => {
    action = {
      type: ADD_REPLY_SUCCESS,
      payload: error
    };
    nextState = [];
    expect(errors(prevState, action)).toEqual(nextState);
  });
});
