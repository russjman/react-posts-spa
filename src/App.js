import React from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from './actions/posts'
import './App.css';

import Posts from './components/Posts';

function App(props) {
  const posts = useSelector(state => state.posts)

  return (
    <div className="PostsSPA">
      <h1>Blog Posts SPA</h1>
      <h3>Posts: {posts.items.length}</h3>
      <Posts posts={posts} />
    </div>
  );
}

export default App;
