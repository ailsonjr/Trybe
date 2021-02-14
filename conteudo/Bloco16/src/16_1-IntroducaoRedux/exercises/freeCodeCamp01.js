// Códigos usados nos exercícios propostos na página freeCodeCamp

// 1 - Define a function named actionCreator() that returns the action object when called.

const action = {
  type: 'LOGIN'
}
// Define an action creator here:

function actionCreator(action) {
  switch(action.type) {
    case 'LOGIN':
      return action;
    default:
    return;
  }
}

function actionCreator2(task) {
  return task;
} // jeito mais simples pedido pelo exercicio

console.log(actionCreator(action));
console.log(actionCreator2(action));
