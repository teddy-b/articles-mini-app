import React from 'react';
import renderer from 'react-test-renderer';

import ArticlesDetails from './ArticlesDetails';

jest.mock('./Article', () => () => 'Article');
jest.mock('./CommentsList', () => 'CommentsList');

describe('ArticlesDetails', () => {
  const props = {
    comments: [],
    onAddComment: jest.fn(),
    onAddReply: jest.fn(),
    onLoadReplies: jest.fn(),
    selectedArticle: null
  };

  it('renders correctly', () => {
    const component = renderer.create(<ArticlesDetails {...props} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with selected article', () => {
    const component = renderer.create(
      <ArticlesDetails
        {...props}
        selectedArticle={1}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
