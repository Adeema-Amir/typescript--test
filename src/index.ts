                                                   //      /\ 
                                                   //     /  \
                                                   //    /    \
                                                   //   /------\
                                                   //  /        \
                                                   // /          \

import { boolean, number, string } from "yargs";

// Explicit

// let firstName:string = "Adeema"

// console.log(typeof firstName)

// Implicit

// let lastName = 1234

// console.log(typeof lastName)

// Json Parse

// const jsonString = '{"name": "Kitty", "age": 3, "color": "gray"}';
// const kittyObject = JSON.parse(jsonString);

// console.log(kittyObject.name);  // Output: Kitty
// console.log(kittyObject.age);   // Output: 3
// console.log(kittyObject.color); // Output: gray


// unknow

// let w: unknown = 1;
// w = true;

// console.log(w);


// array

// const dateSheet: string[] = ["Malahima Amir"];

// dateSheet.push( "Adeema Amir")

// console.log(dateSheet)

// array just readonly

// const dateSheet: readonly string[] = ["Malahima Amir"];

// dateSheet.push( "Adeema Amir")

// console.log(dateSheet)

// tuples

// let ourTuples : [number , boolean , string];

// ourTuples = [2 , true , "Hello World"]

// console.log(ourTuples)

// Object Types

// const adeemaCar : {nama:string , type:string , year:number} = {
//     nama : "adeema",
//     type : "tokoty",
//     year : 1234,
// }

// console.log(adeemaCar) 

// emuns

// enum emusAdeema {
//     North = 1,
//     South = 2,
//     East = 3,
//     West = 4
// }

// console.log(emusAdeema.North)
// console.log(emusAdeema.West)

// Type Aliases

// type CarYear = number;

// const carYear: CarYear = 2001

// console.log(carYear);

// Union Types

// function unionType(code : string|number){
//     console.log(`This status is ${code}`);
// }

// unionType(404)
// unionType("Error 404")

// function

// function getTime(): number {
//     return new Date().getHours()
// }

// console.log(getTime())

// TypeScript Casting

// let x: unknown = 'Hello';
// console.log((x as string).match("Hello"));\

// Casting with <>

// let x:unknown = "hello"
// console.log((<string>x).length);

// TypeScript Classes

// class Person {
//     name: string | undefined;
//   }
        
//   const person = new Person();
//   person.name = "Jane";
  
//   console.log(person);

