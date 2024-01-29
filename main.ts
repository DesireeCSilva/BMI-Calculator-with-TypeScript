let texto = "hola mundo";

texto.math(1);

let cadenadatexto = "hola mundo";

cadenadatexto = 2; //error  de tipos

// inferencia de tipos: sin necesidad de decirle el tipo es capaz de inferirlo y saber que tipo se.

const PI = 3.14;
const a = 3;
let b = a + PI;

b = "hello"; //gracias a la inferencia nos da error de tipos, no se puede asignar un string a un number.

// functions

function saludar(name) {
  //tipo any de forma implicita.
  console.log("hola " + name);
}

saludar("pepe");

saludar(2); //error de tipos

// objetos

function saludar4({ name: string, age: number }) {
  // {name, age}: {name: string, age: number}

  console.log(`hola ${name} tienes ${age} años`);
}

// opc 2

function saludar2(persona: { name: string; age: number }) {
  const { name, age } = persona;
  console.log(`hola ${name} tienes ${age} años`);
}
saludar2({ name: "pepe", age: "pepe" });

// function return

function saludar5(persona: { name: string; age: number }): string {
  //cambiar string por number, error en el retunr.
  const { name, age } = persona;
  console.log(`hola ${name} tienes ${age} años`);
  return age;
}

// Arrow functions

const sumar = (a: number, b: number): number => {
  return a + b;
};

const restar: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

//ejemplo de función

const sayHello = (fn: (name: string) => string) => {
  //Error con el void.    OP. 2 (fn: Function)
  fn("miguel");
};

const sayHi = (name: string) => {
  console.log(`hola ${name}`);
};

sayHello(sayHi);

// Inferencia en objetos

let hero = {
  //let hero: Hero
  name: "Batman",
  age: 45,
  powers: ["Rich", "Intelligent"],
};

hero.adress = "Gotham"; //Error, no se puede añadir una propiedad que no está en el objeto.

// type Hero = {
//   name: string;
//   age: number;
//   powers: string[];
//   adress: string;    //OP. 2                                               //???????
// };

// arrays

const lenguages = []; //si está vacio, no se puede inferir el tipo.
// const lenguages:string[] = [];                   //1º opcion
// const lenguages:Array<string> = [];
// const lenguages: (string | number | boolean)[] = [];  //2º opcion

lenguages.push("Java");

// matrices y tuplas.

const gameBoard1: string[][] = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "O", "X"],
];

type CellValue = "X" | "O" | " ";
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];

const gameBoard: GameBoard = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "O", "X"],
];

// Extensión Pretty TypeScript Errors

// **** Investigación: Type Alias, object freeze, mutabilidad, template union types, intersection types,
// **** type indexing, type from function return.
