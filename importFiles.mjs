//First way to import
// import { sayHello } from "./exportFiles.mjs";
// import { sayGoodBye } from "./exportFiles.mjs";
// import { add, sub } from "./exportFiles.mjs";

// sayHello();
// sayGoodBye();
//console.log('Addition of 3 and 7 : '+add(3,7));
//console.log('Subtraction of 3 and 7 : '+sub(3,7));

//Second way to import

//Renaming the imports to avoid naming conflicts
//import { add as sum, sub as minus } from "./exportFiles.mjs";

// console.log('Addition of 3 and 7 : '+sum(3,7));
// console.log('Subtraction of 3 and 7 : '+minus(3,7));

//Third way to import all named exports as an object
import * as math from './exportFiles.mjs';
console.log('Subtraction of 7 and 4: '+math.sub(7,4));
math.sayHello();
