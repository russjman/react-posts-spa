import postReducer, { initialState } from '../postsReducer';

describe('Posts Reducer', () => {
  const MOCK_POST_LIST = [
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
  ];

  const MOCK_POST_ITEM = {
    id: 3,
    title: 'test title',
    body: 'test post',
  };


  it('Should handle GET_POSTS_SUCCESS', () => {
    expect(postReducer(initialState, {
      type: 'GET_POSTS_SUCCESS',
      payload: MOCK_POST_LIST,
    })).toEqual({
      items: MOCK_POST_LIST,
      error: '',
    });
  });

  it('Should handle EDIT_POST', () => {
    expect(postReducer({
      ...initialState,
      items: MOCK_POST_LIST,
    }, {
      type: 'EDIT_POST',
      update: MOCK_POST_ITEM,
    })).toEqual({
      ...initialState,
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
          title: 'test title',
          body: 'test post',
        },
      ],
    });
  });
});
