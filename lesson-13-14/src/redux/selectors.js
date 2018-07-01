const getArticlesIds = state => state.articles.allIds;

const getArticlesById = state => state.articles.byId;

export const getAllArticles = state => {
  const articlesById = getArticlesById(state);
  const ids = getArticlesIds(state);

  return ids.map(id => articlesById[id]);
};

export const getArticleById = (state, id) => {
  const articles = getArticlesById(state);

  return articles[id];
};
