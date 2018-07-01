import * as api from '../../api/index';
import { schema, normalize } from 'normalizr';
import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
} from './types';

const articleSchema = new schema.Entity('articles');

export const getArticlesByCategory = category => dispatch => {
  dispatch({ type: FETCH_ARTICLES_REQUEST });

  api.fetchArticlesByCategory(category).then(
    articles => {
      dispatch({
        type: FETCH_ARTICLES_SUCCESS,
        payload: normalize(articles, [articleSchema]).entities.articles,
      });
    },
    error => dispatch({ type: FETCH_ARTICLES_FAILURE, payload: error }),
  );
};

export const getArticle = id => dispatch => {
  dispatch({ type: FETCH_ARTICLES_REQUEST });

  api.fetchArticleById(id).then(
    articles => {
      dispatch({
        type: FETCH_ARTICLES_SUCCESS,
        payload: normalize(articles, articleSchema).entities.articles,
      });
    },
    error => dispatch({ type: FETCH_ARTICLES_FAILURE, payload: error }),
  );
};
