class Vetores{
    constructor(array){
        this.array = array;
    }

    get getArray(){
        return this.array;
    }

    applyReduce(){
        return this.array.reduce((amount, value) => {
            return amount += value;
        });        
    }

    applyFilter(underNum){
        return this.array.filter(item => (item < underNum));
    }

    applyMapping(numToMultiply){
        return this.array.map((value, index) => {
            return value * numToMultiply;
        });
    }    
}

var vet = new Vetores([2,5,4,6,2]);
console.log(`Total Sum: ${vet.applyReduce()}`);
var numToFilter = 4;
console.log(`Number under ${numToFilter} in array ${[...vet.getArray]} : ${[...vet.applyFilter(numToFilter)]}`);
var numToMultiply = 2;
console.log(`Multiplied numbers ${[...vet.getArray]} by ${numToMultiply}: ${[...vet.applyMapping(numToMultiply)]}`);
