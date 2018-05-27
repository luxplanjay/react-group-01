const faker = require('faker');

function generateNotes() {
  const notes = [];

  for (let i = 0; i < 5; i += 1) {
    notes.push({
      id: i,
      text: faker.lorem.sentences(1),
      completed: faker.random.boolean(),
    });
  }

  return { notes };
}

console.log(JSON.stringify(generateNotes(), null, 2))

module.exports = generateNotes;
