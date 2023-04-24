import { Sorter } from "./Sorter";
// import { NumbersCollection } from "./NumbersCollection";
// import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./Node";

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

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(0);
linkedList.add(3);
linkedList.add(-12);
linkedList.add(43);
linkedList.add(-1);
linkedList.add(69);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
