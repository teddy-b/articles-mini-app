import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import CommentsList from './CommentsList';
import { commentsMock } from '../../../../../mocks';

jest.mock('./Comment', () => 'Comment');

describe('CommentsList', () => {
  const onAddCommentMock = jest.fn();
  const props = {
    comments: [],
    onAddComment: onAddCommentMock,
    onAddReply: jest.fn(),
    onLoadReplies: jest.fn(),
    selectedArticleId: 1
  };

  it('renders correctly', () => {
    const component = renderer.create(
      <CommentsList
        {...props}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with comments', () => {
    const component = renderer.create(
      <CommentsList
        {...props}
        comments={commentsMock}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('add comment on Enter', () => {
    const component = mount(
      <CommentsList
        {...props}
      />
    );

    component.find('textarea').simulate('keypress');

    expect(onAddCommentMock).toHaveBeenCalled();
  });
});
