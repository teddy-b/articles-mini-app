import React from 'react';
import renderer from 'react-test-renderer';

import Article from './Article';
import { articlesMock } from '../../../../../mocks';

describe('Article', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Article {...articlesMock[0]} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
