"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
// import { NumbersCollection } from "./NumbersCollection";
const CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([
//   10, 20, 2, -4, -98, 0, 22, 4, 15,
// ]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
const charactersCollestion = new CharactersCollection_1.CharactersCollection("Giorgi Eliozashvili");
const sorter = new Sorter_1.Sorter(charactersCollestion);
sorter.sort();
console.log(charactersCollestion.data);
