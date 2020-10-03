export const postsReducerDefaultState = {
  items: [],
  error: ''
};

export default (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case 'EDIT_POST':
      console.log('EDIT_POST',action);
      return {
        ...state,
        items: state.items.map((post) => {
          if (post.id === action.id) {
            return {
              ...post,
              ...action.update,
            };
          }
          return post;
        })
      };
    case 'GET_POSTS':
      console.log('GET_POSTS',action);
      return {
        ...state,
      };
    case 'ADD_POST':
      console.log('ADD_POST',action);
      state.items.push(action.payload);
      return {
        ...state
      };
    case 'GET_POSTS_SUCCESS':
      console.log('GET_POSTS_SUCCESS',action);
      return {
        ...state,
        items: action.payload,
        error: '',
      };
    case 'GET_POSTS_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
