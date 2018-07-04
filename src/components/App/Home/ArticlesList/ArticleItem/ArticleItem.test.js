import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import ArticleItem from './ArticleItem';
import { articlesMock } from '../../../../../mocks';

describe('ArticleItem', () => {
  const onLoadCommentsMock = jest.fn();
  const onSelectArticleMock = jest.fn();
  let selectedMock = false;

  const props = {
    ...articlesMock[0],
    onLoadComments: onLoadCommentsMock,
    onSelectArticle: onSelectArticleMock,
    selected: selectedMock
  };

  it('renders correctly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <ArticleItem
          {...props}
        />
      </MemoryRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly while selected', () => {
    selectedMock = true;
    const component = renderer.create(
      <MemoryRouter>
        <ArticleItem
          {...props}
          selected={selectedMock}
        />
      </MemoryRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('select article and load comments on click', () => {
    const component = mount(
      <MemoryRouter>
        <ArticleItem
          {...props}
        />
      </MemoryRouter>
    );

    component.find('Link').simulate('click');

    expect(onLoadCommentsMock).toHaveBeenCalled();
    expect(onSelectArticleMock).toHaveBeenCalled();
  });
});
