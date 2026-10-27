class FunctionBehaviers {
    constructor()
    {}

  mapping(){
    let name = "Lucas";

    //name[0] = "M"; // Não transforma a string em "Mucas".
    //name = "M" + name.slice(1);

    console.log(name);

    const counts = new Map();

    for (const number of [2, 3, 2]) {
      counts.set(number, (counts.get(number) ?? 0) + 1);
    }
  }

// Map: 2 → 2, 3 → 1
  binarySearch(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
      const middle = left + Math.floor((right - left) / 2);
      console.log("target: ", target);
      console.log("middle: ", middle);
      if (numbers[middle] === target) return middle;

      if (numbers[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
    return -1;
  }

  stacks()
  {
    const stack = [];

    stack.push("a");
    stack.push("b");
    stack.pop(); // "b"
  }

  queues()
  {
    const queue = ["start"];
    let head = 0;

    while (head < queue.length) {
      const current = queue[head++];
      // Processa current e adiciona novos itens com queue.push(...).
    }
  }

  loops()
  {
    var array = [1,2,3];

    for (const item in array){

    }
    for (const item of [1,2,3])
    {

    }
    for (var i = 0; i < array.length; i++ )
    {

    }

  }

}

var fun = new FunctionBehaviers();
//fun.binarySearch([1,3,5,6,7,8,12,16,17,19,20], 17 );
fun.queues();