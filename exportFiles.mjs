export function sayHello(){
    console.log('Hello');       
};

export function sayGoodBye(){
    console.log('Good Bye');
};

// export function add(a,b){
//     return a + b;
// };

// export function subtract(x,y){
//     return x - y;
// };

function add(a,b){
    return a + b;
};

function sub(a,b){
    return a - b;
};

export {add, sub};