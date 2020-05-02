const { Op } = require('sequelize');
let Instruction;
let moduleError;

try {
  const db = require('../models');
  ({ Instruction } = db);
  if (Instruction === undefined) {
    moduleError = 'It looks like you need to generate the Instruction model.';
  }
} catch (e) {
  console.error(e);
  if (e.message.includes('Cannot find module')) {
    moduleError = 'It looks like you need initialize your project.';
  } else {
    moduleError = `An error was raised "${e.message}". Check the console for details.`;
  }
}
/* Don't change code above this line ******************************************/



async function createNewInstruction(specification, recipeId) {

  const instruction = await Instruction.findAll( {
    where: {
      recipeId
    }
  });

  const listOrders = [];

  instruction.forEach( ele => {
    listOrders.push(ele.listOrder);
  });

  const maxOrderNum = Math.max(...listOrders);
  const listOrder = maxOrderNum + 1;
  return await Instruction.create({specification, listOrder, recipeId});

}



/* Don't change code below this line ******************************************/
module.exports = {
  createNewInstruction,
  loadingDbError: moduleError,
};
