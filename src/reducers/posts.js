export const initialState = {
  items: [],
  error: '',
  pageNumber: 1
}

const postsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_POST':
      console.log('ADDPOST', action, state);
      return state.push(action.payload);
    case 'REMOVE':
      return state.pop();
    default:
      return state;
  }
}

export default postsReducer;
