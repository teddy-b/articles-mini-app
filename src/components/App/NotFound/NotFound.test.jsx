import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import renderer from 'react-test-renderer';

import NotFound from './NotFound';

describe('NotFound', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
