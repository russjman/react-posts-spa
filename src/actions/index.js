export const increment = (nr) => {
  return {
    type: 'INCREMENT',
    payload: nr
  }
}

export const decrement = (nr) => {
  return {
    type: 'DECREMENT',
    payload: nr
  }
}

export const addPost = (newPost) => {
  return {
    type: 'ADD_POST',
    payload: newPost
  }
}

export const getPosts = () => {
  return {
    type: 'GET_POSTS'
  }
}
