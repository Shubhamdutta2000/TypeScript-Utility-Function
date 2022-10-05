import { CharacterCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numbersSorter = new Sorter(numbersCollection);

const charactersCollection = new CharacterCollection("Xaayb");
const charactersSorter = new Sorter(charactersCollection);

numbersSorter.sort();
console.log(numbersCollection.data);

charactersSorter.sort();
console.log(charactersCollection.data);

const linkedListCollection = new LinkedList();
linkedListCollection.add(10);
linkedListCollection.add(3);
linkedListCollection.add(-5);
linkedListCollection.add(0);

const linkedListSorter = new Sorter(linkedListCollection);
linkedListSorter.sort();

linkedListCollection.print();
