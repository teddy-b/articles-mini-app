import React from 'react';
import renderer from 'react-test-renderer';

import Home from './Home';

jest.mock('./ArticlesDetails', () => 'ArticlesDetails');
jest.mock('./ArticlesList', () => 'ArticlesList');
jest.mock('../../shared/ErrorBoundary', () => 'ErrorBoundary');
jest.mock('../../shared/Loading', () => 'Loading');

describe('Home', () => {
  const onLoadCommentsMock = jest.fn();
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
    onLoadComments: onLoadCommentsMock,
    onLoadReplies: jest.fn(),
    onNextPage: jest.fn(),
    onPrevPage: jest.fn(),
    onSelectArticle: jest.fn(),
    page: 0,
    selectedArticleId: null
  };

  it('renders correctly', () => {
    const component = renderer.create(<Home {...props} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with params', () => {
    const matchMock = {
      params: {
        id: '1'
      }
    };
    const component = renderer.create(
      <Home
        {...props}
        match={matchMock}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly while fetching', () => {
    const fetching = true;
    const component = renderer.create(
      <Home
        {...props}
        fetching={fetching}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
