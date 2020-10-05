import { editPostAction, addPost } from '../posts';

const MOCK_POST_ITEM = {
  id: 1,
  title: 'test title',
  body: 'test post',
};

describe('Post Actions', () => {
  it('editPost should update the post entry', () => {
    expect(editPostAction(MOCK_POST_ITEM.id,MOCK_POST_ITEM)).toEqual({
      type: 'EDIT_POST',
      id: MOCK_POST_ITEM.id,
      update: MOCK_POST_ITEM,
    });
  });
  it('addPost should add new post entry', () => {
    expect(addPost(MOCK_POST_ITEM)).toEqual({
      type: 'ADD_POST',
      payload: MOCK_POST_ITEM
    });
  });


});
