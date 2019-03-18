var Sequelize = require('sequelize');
const faker = require('faker');
const db = require("../models");


const SEED_AMOUNT = 50;
let exampleSeed = [];

for(let i = 0; i < SEED_AMOUNT; i++) {
  exampleSeed.push({
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraphs(3),
    data: new Date(Date.now())
  });
}

db.Example.sync({ force: true })
.then(() => Sequelize.Promise.map(exampleSeed, example => 
    {return db.Example.create(example)}
    ))
  .then(data => {
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
