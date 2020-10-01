import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, startSetPosts } from './actions/posts'
import './App.css';

import Posts from './components/Posts';

function App() {
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch();

console.log('posts', posts);
  return (
    <div className="PostsSPA">
      <h1>Posts: {posts.length}</h1>
      <button onClick={() => dispatch(getPosts())}>getPosts</button>
      <button onClick={() => dispatch(startSetPosts())}>startSetPosts</button>


      <Posts />
    </div>
  );
}

export default App;
