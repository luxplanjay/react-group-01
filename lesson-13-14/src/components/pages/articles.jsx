import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import qs from 'qs';
import CategorySelector from '../category-selector';
import { getArticlesByCategory } from 'redux/actions';
import { getAllArticles } from 'redux/selectors';

const getCategoryFromProps = props => {
  const { category } = qs.parse(props.location.search.slice(1));

  return category;
};

class ArticlesPage extends Component {
  state = {
    categories: ['all', 'health', 'technology', 'sports'],
  };

  onCategoryChange = category => {
    this.props.push({
      pathname: this.props.location.pathname,
      search: `?category=${category}`,
    });
  };

  componentDidMount() {
    const category = getCategoryFromProps(this.props);

    if (!category) {
      this.onCategoryChange('all');
      return;
    }

    this.props.getArticlesByCategory(category);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory !== nextCategory) {
      this.props.getArticlesByCategory(nextCategory);
    }
  }

  render() {
    const { categories } = this.state;
    const { match, articles } = this.props;

    const category = getCategoryFromProps(this.props);

    return (
      <div>
        <h2>Articles Page (private)</h2>

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

const mapState = state => ({
  articles: getAllArticles(state),
});

const mapDispatch = { getArticlesByCategory, push };

export default connect(
  mapState,
  mapDispatch,
)(ArticlesPage);
