import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title, img, body }) => (
  <article>
    <h2>{title}</h2>
    <img src={img.url} alt={img.descr} />
    <p>{body}</p>
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    descr: PropTypes.string.isRequired,
  }).isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
