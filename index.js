import Books from "./AvaliableBooks.js";
import TecnicalBook from "./TecnicalBook.js";

const hungerGames = new Books("Hunger Games","Suzanne Collins", 123919, 5);
console.log(hungerGames.avaliability);
hungerGames.AddNewCopies(12);
console.log(hungerGames.avaliability);
hungerGames.SellBooks(17);
console.log(hungerGames.avaliability);
hungerGames.AddNewCopies();
console.log(hungerGames.avaliability);


const mathForDummies = new TecnicalBook("math", "Pitagoras", 123322, 15, "4.3");
console.log(`Edition's Book: ${mathForDummies.getEdition} `);

var pessoa = {
    [nome]: Symbol("Lucas"),
    [idade]: Symbol("Lucas"),
    sexo: "Masculino"
}

console.log(...pessoa);