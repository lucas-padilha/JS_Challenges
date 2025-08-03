import Books  from "./AvaliableBooks.js";

class TecnicalBook extends Books{
    constructor(title, author, isbn, numberOfCopies, edition){
        super(title, author, isbn, numberOfCopies);
        this.edition = edition;
    }

    get getEdition(){
        return this.edition;
    }
}
export default TecnicalBook;