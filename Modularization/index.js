// const coffee = require(`./lib/coffee`);
// const { firstName, lastName } = require("./lib/user");
// const http = require('http');



// console.log(coffee);
// console.log(firstName,lastName);

const Tiger = require('./lib/tiger');
const Wolf = require('./lib/wolf');

const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }

  if(wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }

  console.log(tiger.strength,wolf.strength);
  console.log('Tiger and Wolf have same strength');
}

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);
