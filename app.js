console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
    }
    else if(i % 2  != 0 ){
        console.log(i);
    }

}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`FIZZBUZZ ${i}`);
    }
    else if(i % 3 == 0){
        console.log(`FIZZ ${i}`);
    }
    else if(i % 5 == 0){
        console.log(`BUZZ ${i}`);
    }
    else{
        console.log(i);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

console.log("EXERCISE 1 With WHILE LOOP");

let number = 0;

while(number <= 100){

    if(number % 2 == 0){
        
    }
    else if(number % 2 != 0){
        console.log(number);
    }
    number += 1;
}

console.log("EXERCISE 1 With DO WHILE LOOP");

let i = 0;

do{
    if(i % 2 == 0){        
    }
    else if(i % 2 != 0){
        console.log(i);
    }
    i += 1;
}while(i <= 100);




console.log("==========");

console.log("EXERCISE 2 With WHILE LOOP");

let x = 1;

while(x <= 100){
    if(x % 3 == 0 && x % 5 == 0){
        console.log(`FIZZBUZZ ${x}`);
    }
    else if(x % 3 == 0){
        console.log(`FIZZ ${x}`);
    }
    else if(x % 5 == 0){
        console.log(`BUZZ ${x}`);
    }else{
        console.log(x);
    }
    x += 1;
}


console.log("EXERCISE 2 With DO WHILE LOOP");

let integer = 1;

do{
    if(integer % 3 == 0 && integer % 5 == 0){
        console.log(`FIZZBUZZ ${integer}`);
    }
    else if(integer % 3 == 0){
        console.log(`FIZZ ${integer}`);
    }
    else if(integer % 5 == 0){
        console.log(`BUZZ ${integer}`);
    }else{
        console.log(integer);
    }
    integer += 1;
}while(integer <= 100);


console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

for(let i = 1; i <= n; i++){
    if(i == value){
    console.log(`Found ${value}!`);
    break;
    }

    if(i == n){
console.log(`Did not find ${value} within 1 - ${n}.`);
    }
}