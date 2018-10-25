// Let's say we have a plant that we need to water once a week on Wednesdays. We could define a 
// function expression to help us check the day of the week and the plant needs to be watered:

// const plantNeedsWater = function(day) {
//   if(day === 'Wednesday'){
//     return true;
//   } else {
//     return false;
//   }
// };

const plantNeedsWater = day => day === 'Wednesday' ? true : false; //refactored version of above

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

//--

