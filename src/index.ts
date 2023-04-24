import { Sorter } from "./Sorter";
// import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([
//   10, 20, 2, -4, -98, 0, 22, 4, 15,
// ]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollestion = new CharactersCollection("Giorgi Eliozashvili");
const sorter = new Sorter(charactersCollestion);
sorter.sort();
console.log(charactersCollestion.data);
