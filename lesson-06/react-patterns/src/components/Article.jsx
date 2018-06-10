import React from 'react';

const Article = ({ title, text, link }) => (
  <article>
    <h2>{title}</h2>
    <p>{text}</p>
    <a href={link}>Read more</a>
  </article>
);

export default Article;
