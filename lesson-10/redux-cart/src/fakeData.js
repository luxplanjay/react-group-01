const faker = require('faker');

export default function generateProducts(num) {
  const products = [];

  for (let i = 0; i < num; i += 1) {
    const product = {
      id: faker.random.uuid(),
      imageUrl: 'http://via.placeholder.com/250x150',
      name: `${faker.commerce.productMaterial()} ${faker.commerce.product()}`,
      price: Number.parseInt(faker.commerce.price(1, 100), 10),
    };

    products.push(product);
  }

  return products;
}
