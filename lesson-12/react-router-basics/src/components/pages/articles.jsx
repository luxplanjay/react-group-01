import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import CategorySelector from '../category-selector';
import { fetchArticlesByCategory } from '../../api';

const getCategoryFromProps = props => {
  const { category } = queryString.parse(props.location.search);

  return category;
};

export default class ArticlesPage extends Component {
  state = {
    articles: [],
    categories: ['all', 'health', 'technology', 'sports'],
  };

  onCategoryChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `?category=${category}`,
    });
  };

  async componentDidMount() {
    const category = getCategoryFromProps(this.props);

    if (!category) {
      this.onCategoryChange('all');
    }

    const articles = await fetchArticlesByCategory(category);

    this.setState({ articles });
  }

  async componentDidUpdate(prevProps, prevState) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory !== nextCategory) {
      const articles = await fetchArticlesByCategory(nextCategory);

      this.setState({ articles });
    }
  }

  render() {
    const { articles, categories } = this.state;
    const { match } = this.props;

    const category = getCategoryFromProps(this.props);

    return (
      <div>
        <h2>Articles Page</h2>

        <CategorySelector
          options={categories}
          onChange={this.onCategoryChange}
          value={category}
        />

        <ul>
          {articles.map(article => (
            <li key={article.id}>
              <Link
                to={{
                  pathname: `${match.url}/${article.id}`,
                  state: { from: this.props.location },
                }}>
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
