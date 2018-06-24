import React, { Component } from 'react';
import { fetchArticleById } from '../api';

const getIdFromProps = props => props.match.params.articleId;

export default class Article extends Component {
  state = {
    id: null,
    title: null,
    imageUrl: null,
    author: null,
    category: null,
    body: null,
  };

  async componentDidMount() {
    const id = getIdFromProps(this.props);
    const article = await fetchArticleById(id);

    this.setState({ ...article });
  }

  async componentDidUpdate(prevProps, prevState) {
    const prevId = getIdFromProps(prevProps);
    const nextId = getIdFromProps(this.props);

    if (prevId !== nextId) {
      const article = await fetchArticleById(nextId);

      this.setState({ ...article });
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const prevId = getIdFromProps(this.props);
    const nextId = getIdFromProps(nextProps);

    return prevId !== nextId || this.state.id !== nextState.id;
  }

  onGoBack = () => {
    const { state } = this.props.location;
    const { category } = this.state;

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
    const { title, imageUrl, author, category, body } = this.state;

    console.log('[Article]: ', this.props);

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
