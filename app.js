console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log();
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
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

console.log("EXERCISE 1 With WHILE LOOP");

let number = 0;

while(number <= 100){

    if(number % 2 == 0){
        console.log();
        
    }
    else if(number % 2 != 0){
        console.log(number);
    }
    number += 1;
}

console.log("==========");

console.log("EXERCISE 2 With DO WHILE LOOP");

x = 1;

do{
    if(x % 3 == 0 && x % 5 == 0){
        console.log(`FIZZBUZZ ${x}`);
    }
    else if(x % 3 == 0){
        console.log(`FIZZ ${x}`);
    }
    else if(x % 5 == 0){
        console.log(`BUZZ ${x}`);
    }
    x += 1;
}while(x <= 100)
    




