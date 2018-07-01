import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticle } from '../redux/actions';
import { getArticleById } from '../redux/selectors';

const getIdFromProps = props => props.match.params.articleId;

class Article extends Component {
  componentDidMount() {
    const id = getIdFromProps(this.props);

    this.props.getArticle(id);
  }

  async componentDidUpdate(prevProps, prevState) {
    const prevId = getIdFromProps(prevProps);
    const nextId = getIdFromProps(this.props);

    if (prevId !== nextId) {
      this.props.getArticle(nextId);
    }
  }

  onGoBack = () => {
    const { state } = this.props.location;
    const { category } = this.props;

    if (state) {
      this.props.history.push(state.from);
    } else {
      this.props.history.push({
        pathname: '/articles',
        search: `?category=${category}`,
      });
    }
  };

  render() {
    const { title, imageUrl, author, category, body } = this.props;

    return (
      <article>
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} />
        <p>
          <b>Author: {author}</b>
        </p>
        <p>
          <b>Category: {category}</b>
        </p>
        <p>{body}</p>
        <button onClick={this.onGoBack}>Back</button>
      </article>
    );
  }
}

const mapState = (state, ownProps) => {
  const id = getIdFromProps(ownProps);
  const article = getArticleById(state, id);

  return { ...article };
};

const mapDispatch = { getArticle };

export default connect(
  mapState,
  mapDispatch,
)(Article);
