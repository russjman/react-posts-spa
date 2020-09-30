import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addPost} from './actions'
import './App.css';

import Posts from './components/Posts';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch();

  return (
    <div className="PostsSPA">
      <h1>Counter {counter}</h1>
      <h2>isLogged { isLogged ? 'yes' : 'no'}</h2>
      <h2>Posts: {posts.length}</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <button onClick={() => dispatch(addPost({title:'newPost'}))}>add post</button>

      <Posts />
    </div>
  );
}

export default App;
