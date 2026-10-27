class Challenge {
    constructor()
    {}

  countFrequencies(numbers) {
    const output = new Map();
    for (let num of numbers){
      if(!output.has(num))
      {
        output.set(num, 1)
      }
      else {
        let aux = output.get(num);        
        output.set(num, aux +1);
      }
    }
    return output;
  }
  // Retorne o índice do primeiro caractere que aparece uma única vez, ou -1.
  firstUniqueCharacter(text) {
    const array = [...text];

    for (let char of array)
    {
      let aux = array.filter(x=>x==char).length;
      if( aux == 1)
      {        
        return array.indexOf(char);        
      }      
    }
    return -1;
  }
//Retorne os índices de dois elementos distintos cuja soma seja target. Se não existir par, retorne null. Qualquer par válido serve.
  twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++)
    {
      for(let j = i + 1; j < numbers.length; j++)
      {
        if(numbers[i] + numbers[j] == target)
        {
          return [i, j];
        }
      }      
    }
    return null;
  }

  removeDuplicates(numbers) {
    const set = new Set();
    
    for (let num of numbers){
      set.add(num);
    }    
    return set;
  }

  maxWindowSum(numbers, k) {
    let maxSum = null;
    let currentSum = null;

    for (let i = 0; i <= numbers.length-k; i++)
    {
      if(i+k <= numbers.length){
        currentSum = numbers.slice(i,i+k).reduce((sum,num) => sum + num,0);

        if (maxSum < currentSum || maxSum == null)
          maxSum = currentSum;  
      }
    }
    return maxSum;
  }

  longestUniqueSubstring(text) {
    let array = [...text];
    let biggetsSequence = 0;

    for(let i = 0; i < array.length; i++)
    {
      let currentSequence = [];
      currentSequence.push(array[i]);

      for(let j = i + 1; j < array.length; j++)
      {        
        if (!currentSequence.some(x=> x==array[j])){
          currentSequence.push(array[j]);
        }
        else {
          break;
        }
      }
      if (currentSequence.length > biggetsSequence){
        biggetsSequence = currentSequence.length;
      }
    }
    return biggetsSequence;
  }
// Verifique se uma string formada apenas por ()[]{} está corretamente balanceada.
  isValidBrackets(text) {
    
    const openers = ["(","[","{"];
    const closers = [")","]","}"];

    const stackBrackets = [];
    const arrayText = [...text];

    for(let item of arrayText){
      if (openers.indexOf(item) > -1)
      {
          stackBrackets.push(openers.indexOf(item));
      }
      else if (closers.indexOf(item) > -1){
          let removedIndexStack = stackBrackets.pop();
          if(removedIndexStack != closers.indexOf(item))
          {
            return false;
          }
      }      
    }
    return true;
  }

}

const numbers = [1,2,2,3,5,6,7,5,3,2,6,7,10]
const challenge = new Challenge();
//console.log("countFrequencies: ", challenge.countFrequencies(numbers));

//const text = "aabbccyf";
//console.log(challenge.firstUniqueCharacter(text));

//console.log(challenge.twoSum([1,3,4,2,7], 9));

//console.log(challenge.removeDuplicates([1,1,2,2,3]));

// console.log(challenge.maxWindowSum([-2,-1,-5,-1,-3,-2],3));

//console.log(challenge.longestUniqueSubstring("afdetgrheqrbvsdfwetghqwterurtyi"));

console.log(challenge.isValidBrackets("")); 
// "()[]{}" → true / "([{}])" → true / "(]" → false / "([)]" → false "" → true 

