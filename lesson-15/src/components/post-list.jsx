import React from 'react';

export default ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </li>
    ))}
  </ul>
);
