import React from 'react';
import { compose } from 'recompose';
import Article from './Article';
import Toggle from './Toggle';

const ArticlesList = ({ articles }) => (
  <ul>
    {articles.map(article => (
      <li key={article.id}>
        <Toggle>
          {({ on, toggle }) => (
            <div>
              <button onClick={toggle}>toggle</button>
              {on && <Article {...article} />}
            </div>
          )}
        </Toggle>
      </li>
    ))}
  </ul>
);

export default ArticlesList;
