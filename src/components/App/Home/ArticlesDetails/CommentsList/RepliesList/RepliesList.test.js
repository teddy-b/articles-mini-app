import React from 'react';
import renderer from 'react-test-renderer';

import RepliesList from './RepliesList';
import { repliesMock } from '../../../../../../mocks';

jest.mock('../Comment', () => 'Comment');

describe('RepliesList', () => {
  const props = {
    onAddReply: jest.fn(),
    onLoadReplies: jest.fn(),
    replies: []
  };

  it('renders correctly', () => {
    const component = renderer.create(
      <RepliesList
        {...props}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with replies', () => {
    const component = renderer.create(
      <RepliesList
        {...props}
        replies={repliesMock}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
