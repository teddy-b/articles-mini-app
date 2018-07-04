import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

jest.mock('./NotFound', () => () => 'NotFound');
jest.mock('../shared/ErrorBoundary', () => 'ErrorBoundary');
jest.mock('../../containers/ConnectedHome', () => () => 'ConnectedHome');

describe('App', () => {
  it('renders correctly', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
