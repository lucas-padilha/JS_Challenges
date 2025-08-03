class Books {
    constructor(title, author, isbn, numberOfCopies){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numberOfCopies = numberOfCopies;
    }    
    get avaliability(){
        return this.GetAvaliability();
    }
    GetAvaliability() {
        if(this.numberOfCopies == 0)
            return "Empty Stock";
        else if (this.numberOfCopies < 10)
            return "Low number of books";
        else 
            return "Avaliable";
    }
    SellBooks(quantitySelled = 1){
        this.numberOfCopies -=quantitySelled;
    }
    AddNewCopies(quantityAdded = 5){
        this.numberOfCopies += quantityAdded;
    }
}
export default Books;