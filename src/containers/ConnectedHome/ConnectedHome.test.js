import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';

import configureMockStore from 'redux-mock-store';
import ConnectedHome from './ConnectedHome';

describe('App', () => {
  const storeMock = configureMockStore([thunk]);
  const store = storeMock({
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
  const props = {
    articles: [],
    articlesCount: 0,
    comments: [],
    fetching: false,
    match: {
      params: {
      }
    },
    onAddComment: jest.fn(),
    onAddReply: jest.fn(),
    onLoadArticles: jest.fn(),
    onLoadComments: jest.fn(),
    onLoadReplies: jest.fn(),
    onNextPage: jest.fn(),
    onPrevPage: jest.fn(),
    onSelectArticle: jest.fn(),
    page: 0,
    selectedArticleId: null
  };

  it('renders correctly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <ConnectedHome
          {...props}
          store={store}
        />
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
