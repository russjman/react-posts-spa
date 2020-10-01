import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';

import TestProvider from '../../utils/TestProvider';
import Posts from '../Posts';

const MOCK_POSTS = {
  items: [
    {
      id: 1,
      userId: 1,
      title: 'test 1',
      body: 'post Body 1',
    },
    {
      id: 2,
      userId: 1,
      title: 'test 2',
      body: 'post Body 2',
    },
    {
      id: 3,
      userId: 1,
      title: 'test 3',
      body: 'post Body 3',
    },
  ]
};


describe('<Posts />', () => {
  it('Renders successfully without error', () => {
      const component = render(
        <TestProvider>
          <Posts posts={MOCK_POSTS} />
        </TestProvider>,
      );
      expect(component.container).toBeTruthy();
    });
  })
