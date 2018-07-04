import React from 'react';
import renderer from 'react-test-renderer';

import ArticlesList from './ArticlesList';
import { ARTICLES_PER_PAGE } from '../../../../constants/global';
import { articlesMock } from '../../../../mocks';

jest.mock('./ArticleItem', () => () => 'ArticleItem');

describe('ArticlesList', () => {
  const props = {
    articles: [],
    articlesCount: 0,
    onLoadComments: jest.fn(),
    onNextPage: jest.fn(),
    onPrevPage: jest.fn(),
    onSelectArticle: jest.fn(),
    page: 0,
    selectedArticleId: null
  };

  it('renders correctly', () => {
    const component = renderer.create(
      <ArticlesList
        {...props}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with articles', () => {
    const component = renderer.create(
      <ArticlesList
        {...props}
        articles={articlesMock}
        articlesCount={articlesMock.length}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly load next button', () => {
    const component = renderer.create(
      <ArticlesList
        {...props}
        articles={articlesMock}
        articlesCount={ARTICLES_PER_PAGE + 1}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly load next and load prev button', () => {
    const component = renderer.create(
      <ArticlesList
        {...props}
        articles={articlesMock}
        articlesCount={2 * ARTICLES_PER_PAGE + 1}
        page={1}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly last page', () => {
    const component = renderer.create(
      <ArticlesList
        {...props}
        articles={articlesMock}
        articlesCount={ARTICLES_PER_PAGE + 1}
        page={1}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
