import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostsList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        descr: PropTypes.string.isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PostsList;
