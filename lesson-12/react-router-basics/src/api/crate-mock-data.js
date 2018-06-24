import faker from 'faker';

const capitalize = string => string.replace(/^\w/, c => c.toUpperCase());

export default function createArticles(num) {
  const articles = [];

  for (let i = 0; i < num; i += 1) {
    const article = {
      id: faker.random.uuid(),
      imageUrl: 'http://via.placeholder.com/250x150',
      title: capitalize(faker.lorem.words(4)),
      author: `${faker.name.firstName()} ${faker.name.lastName()}`,
      body: faker.lorem.paragraphs(2),
      category: faker.random.arrayElement(['health', 'sports', 'technology']),
    };

    articles.push(article);
  }

  return articles;
}
