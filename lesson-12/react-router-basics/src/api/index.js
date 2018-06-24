import articles from './mock-data';

export const fetchAllArticles = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve([...articles]);
    }, 200);
  });

export const fetchArticleById = id =>
  new Promise(resolve => {
    setTimeout(() => {
      const article = articles.find(a => a.id === id);
      resolve(article);
    }, 200);
  });

export const fetchArticlesByCategory = category =>
  new Promise(resolve => {
    setTimeout(() => {
      if (category === 'all') resolve(articles);

      const data = articles.filter(a => a.category === category);
      resolve(data);
    }, 200);
  });
