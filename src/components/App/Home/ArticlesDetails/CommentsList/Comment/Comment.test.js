import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { repliesMock } from '../../../../../../mocks';

import Comment from './Comment';

jest.mock('../RepliesList', () => () => 'RepliesList');

describe('Comment', () => {
  const onAddReplyMock = jest.fn();
  const onLoadReplieMock = jest.fn();
  const props = {
    ...repliesMock[0],
    createdAt: Date.now(),
    onAddReply: onAddReplyMock,
    onLoadReplies: onLoadReplieMock,
    replies: []
  };

  it('renders correctly', () => {
    const component = renderer.create(
      <Comment
        {...props}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('add reply on Enter', () => {
    const component = mount(
      <Comment
        {...props}
      />
    );

    component.find('.comment-reply-active-reply').simulate('click');

    component.find('textarea').simulate('keypress', {
      key: 'a'
    });

    expect(onAddReplyMock).not.toHaveBeenCalled();

    component.find('textarea').simulate('keypress', {
      key: 'Enter'
    });

    expect(onAddReplyMock).toHaveBeenCalled();
  });

  it('load replies on click', () => {
    const component = mount(
      <Comment
        {...props}
        replies={repliesMock}
        repliesCount={repliesMock.length}
      />
    );

    component.find('.comment-reply-active-count').simulate('click');

    expect(onLoadReplieMock).toHaveBeenCalled();
  });

  it('show input on click', () => {
    const component = mount(
      <Comment
        {...props}
        replies={repliesMock}
        repliesCount={repliesMock.length}
      />
    );

    component.find('.comment-reply-active-reply').simulate('click');

    expect(component.find('textarea').exists()).toBe(true);
  });

  it('hide input on click', () => {
    const component = mount(
      <Comment
        {...props}
        replies={repliesMock}
        repliesCount={repliesMock.length}
      />
    );

    component.find('.comment-reply-active-reply').simulate('click');

    expect(component.find('textarea').exists()).toBe(true);

    component.find('.comment-reply-active-discard').simulate('click');

    expect(component.find('textarea').exists()).toBe(false);
  });
});
