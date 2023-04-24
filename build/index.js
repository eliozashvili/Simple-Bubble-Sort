"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
// import { NumbersCollection } from "./NumbersCollection";
// import { CharactersCollection } from "./CharactersCollection";
const Node_1 = require("./Node");
// const numbersCollection = new NumbersCollection([
//   10, 20, 2, -4, -98, 0, 22, 4, 15,
// ]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// const charactersCollestion = new CharactersCollection("Giorgi Eliozashvili");
// const sorter = new Sorter(charactersCollestion);
// sorter.sort();
// console.log(charactersCollestion.data);
const linkedList = new Node_1.LinkedList();
linkedList.add(500);
linkedList.add(0);
linkedList.add(3);
linkedList.add(-12);
linkedList.add(43);
linkedList.add(-1);
linkedList.add(69);
const sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
