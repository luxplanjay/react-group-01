const faker = require('faker');

function generateNotes() {
  const notes = [];

  for (let i = 0; i < 10; i += 1) {
    notes.push({
      id: i,
      text: faker.lorem.sentences(2),
      priority: faker.random.arrayElement(['low', 'normal', 'high']),
    });
  }

  return { notes };
}

console.log(JSON.stringify(generateNotes(), null, 2));

module.exports = generateNotes;
