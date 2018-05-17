import React from 'react';
import PostsList from './PostsList';
import posts from '../posts.json';

const App = () => (
  <div>
    <header>
      <h1>
        <a href="">App Logo</a>
      </h1>
    </header>

    <PostsList posts={posts} />
  </div>
);

export default App;
