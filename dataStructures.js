// console.log("this is the data structure page");

const maps = new Map([
  ["a", 7],
  ["b", 67],
  ["c", "open"],
]);

maps.set("e", 87);
maps.delete("c");
// console.log(maps.size);
maps.clear();

for (const [key, value] of maps) {
  // console.log(`${key}: ${value}`);
}

// stack data structure

const stack = {
  item: [],

  pop() {
    this.item.pop();
  },

  push(element) {
    this.item.push(element);
  },

  peek() {
    return this.item[this.item.length - 1];
  },

  size() {
    return this.item.length;
  },
  isEmpty() {
    return this.item.length === 0;
  },
  print() {
    console.log(this.item.toString());
  },
};
// stack.push(89);
// stack.push(45);
// stack.push(02);
// console.log(stack.size());
// stack.print();
// stack.pop();
// console.log(stack.isEmpty());
// console.log(stack.item);

// queue data structure

const queue = {
  item: [],
  enqueue(element) {
    return this.item.push(element);
  },
  deQueue() {
    return this.item.shift();
  },
  isEmpty() {
    return this.item.length === 0;
  },

  peek() {
    if (!this.isEmpty()) {
      return this.item[0];
    } else {
      return null;
    }
  },

  size() {
    return this.item.length;
  },

  print() {
    console.log(this.item.toString());
  },
};

// console.log(queue.size());
// console.log(queue.isEmpty());
// queue.enqueue(34);
// queue.enqueue(56);
// queue.enqueue(79);
// console.log(queue.deQueue());
// console.log(queue.isEmpty());
// console.log(queue.peek());
// console.log(queue.size());
// queue.print();

//optimized queue data sturcture method

const queueOptimized = {
  items: {},
  rear: 0,
  front: 0,

  enQueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  },

  deQueue() {
    delete this.items[this.front];
    this.front++;
  },

  isEmpty() {
    return this.rear - this.front === 0;
  },

  size() {
    return this.rear - this.front;
  },

  print() {
    console.log(this.items);
  },

  peek() {
    return this.items[this.front];
  },
};

// queueOptimized.enQueue(45);
// queueOptimized.enQueue(43);
// queueOptimized.enQueue(29);
// queueOptimized.enQueue(15);
// queueOptimized.deQueue();
// console.log(queueOptimized.items);
// console.log(queueOptimized.peek());
// console.log(queueOptimized.size());
// console.log(queueOptimized.isEmpty());
// console.log(queueOptimized.items);

// circular queue method
let capacity = 5;
const circularQueue = {
  items: new Array(capacity),
  rear: -1,
  front: -1,
  capacity,
  currentLength: 0,

  isFull() {
    return this.capacity === this.currentLength;
  },

  isEmpty() {
    return this.currentLength === 0;
  },

  enQueue(element) {
    if (!this.isFull) {
      this.rear = this.rear + 1;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front === this.rear;
      } else {
        this.front++;
      }
      return this.items;
    }
  },
};
// console.log(circularQueue.isEmpty());
// console.log(circularQueue.enQueue(45));
// console.log(circularQueue.enQueue(435));
// console.log(circularQueue.enQueue(429));
// console.log(circularQueue.rear, circularQueue.front);

// const double = [5, 3, 5];
// console.log(double.join(" " + "\n"));
let arrar = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
let brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];

function missingNumbers(arrInc) {
  // Write your code here
  const arrIncFr = new Array(arrInc.length);
  // console.log(arrFr);

  let visitedA = -1;
  for (i = 0; i < arrTest.length; i++) {
    let countA = 1;

    for (j = i + 1; j < arrInc.length; j++) {
      if (arrInc[i] === arrInc[j]) {
        countA++;
        arrIncFr[j] = visitedA;
      }
    }
    if (arrIncFr[i] !== visitedA) {
      arrIncFr[i] = countA;
    }
  }
  const newArrFr = arrIncFr.filter((item) => item > 0);
  return newArrFr;
}
// console.log(arrar);
// console.log(brr);
// console.log(missingNumbers(arrar));
// console.log(missingNumbers(brr));

const sortArray = (arr) => {
  const newArray = arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
  });
  return new Set(newArray);
};
// console.log(sortArray(arrar));
// console.log(sortArray(brr));

const obj = {
  name: "Ezzy",
  age: 29,
  sex: "male",
};

function checkObj(obj, checkProp) {
  // Only change code below this line
  console.log(obj.checkProp, checkProp);
  const value = obj.checkProp;
  console.log(value);
  return `${obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found"}`;
  // Only change code above this line
}
// console.log(checkObj(obj, "age"));

// You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

// You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

// Your function must always return the entire record collection object.
// If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// If value is an empty string, delete the given prop property from the album.
// Note: A copy of the recordCollection object is used for the tests.

function oddOrEven(number) {
  if (number === 0) {
    return "even";
  } else if (number === 1) {
    return "odd";
  } else {
    return oddOrEven(number - 2);
  }
}

// console.log(oddOrEven(20));

// Write a program that reverses a string using recursion. Given the string "freeCodeCamp" your program should return "pmaCedoCeerf".

function reverseStr(str, reversedStr = []) {
  if (str.length === 0) {
    return reversedStr.join("");
  }
  const lastElement = str.split("")[str.split("").length - 1];
  const lastIndex = str.split("").length - 1;
  reversedStr.push(lastElement);
  return reverseStr(str.split("").splice(0, lastIndex).join(""), reversedStr);
}
// console.log(reverseStr("freeCodeCamp"));

// Write a program that returns the number of times a character appears in string. Your program should receive a string and the character. It should then return number of times the character appears in the string.
// Given the string "JavaScript" and a character "a", your program should return 2.

// Hint: Try to figure out when you want the function to stop calling itself and how to return a smaller version of the problem every time the function calls itself.
function numOfOccurence(str, k, freq = 0) {
  if (str.length === 0) {
    return freq;
  }

  const firstElement = str.split("")[0];
  const lastIndex = str.split("").length - 1;
  if (firstElement === k) {
    freq++;
  }

  return numOfOccurence(
    str
      .split("")
      .splice(1, lastIndex + 1)
      .join(""),
    k,
    freq
  );
}
// console.log(numOfOccurence("hippopotamus", "p"));
function catAndMouse(x, y, z) {
  const catA = Math.abs(x - z);
  const catB = Math.abs(y - z);
  if (catA < catB) {
    // console.log("Cat A");
  } else if (catB < catA) {
    // console.log("Cat B");
  } else if (catA === catB) {
    // console.log("Mouse C");
  }
}
catAndMouse(1, 2, 3);

function intergerC() {
  const n = 1012;
  let counterA = 0;

  const input = n.toString().split("");
  console.log(input);
  console.log(Number(input[0]));

  for (let i = 0; i < input.length; i++) {
    if (n % Number(input[i]) === 0) {
      counterA++;
    }
  }
  return counterA;
}
// console.log(intergerC());

function processData(input) {
  //Enter your code here
  // if (typeof input === Number) return;
  let even = "";
  let odd = "";
  for (let i = 0; i <= input.split("").length - 1; i++) {
    if (i % 2 === 0) {
      even += input[i];
    } else if (i % 2 === 1) {
      odd += input[i];
    }
  }
  // console.log(`${even} ${odd}`);
}

processData("Hacker");
processData("Rank");
// processData(2);

//   --------------------------Linked List---------------------------

class NodeList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Big-O === O(1)
  prepend(value) {
    const node = new NodeList(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // Big-O ==== O(n)
  append(value) {
    const node = new NodeList(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next !== null) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let removedValue;
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removedValue = prev.next;
        prev.next = removedValue.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.size === 0) {
      return -1;
    } else {
      let index = 0;
      let curr = this.head;
      while (curr) {
        if (curr.value === value) {
          return index;
        } else {
          index++;
          curr = curr.next;
        }
      }
      return -1;
    }
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("The list is empty");
    } else {
      let curr = this.head;
      let nodes = [];
      while (curr) {
        nodes.push(curr.value);
        curr = curr.next;
      }
      console.log(nodes);
    }
  }
}

const lists = new LinkedList();
// console.log("is link empty:", lists.isEmpty());
lists.prepend(20);
lists.prepend(54);
lists.prepend(45);
lists.prepend(15);
lists.prepend(150);
lists.prepend(153);
lists.prepend(123);
// lists.append(152);
console.log(lists.search(230));
lists.print();
lists.reverse();
lists.print();
// console.log(lists.removeFrom(3));
// console.log(lists.removeValue(15));
// console.log("link size:", lists.getSize(), lists.head);

function bonAppetit(bill, k = 1, b = 7) {
  // Write your code here
  let sumOfBill = 0;
  for (let i = 0; i < bill.length; i++) {
    if (bill[i] !== k) {
      sumOfBill += bill[i];
    }
  }
  const result = sumOfBill / 2 === b ? "Bon Appetite" : sumOfBill / 2 - b;
  // console.log(result);
}
const bill = [3, 10, 2, 9];
bonAppetit(bill);

const height = [1, 6, 3, 5, 2];

function hurdleRace(k, height) {
  // Write your code here
  const max = height.reduce((cur, acc) => (cur > acc ? cur : acc), 0);
  if (max > k) {
    return max - k;
  } else {
    return 0;
  }
}
// console.log(hurdleRace(5, height));

//
const listArrays = ["sam", "jerry", "tom"];
const input = new Map([
  ["sam", 99912222],
  ["tom", 11122222],
  ["harry", 12299933],
]);
// console.log(listArrays);

// console.log(input);
// function processData(input, listArrays) {
//   //Enter your code here
//   console.log(listArrays?.length);
//   for (let i = 0; i <= listArrays?.length - 1; i++) {
//     if (input.has(listArrays[i])) {
//       console.log("name found");
//       console.log(`${listArrays[i]} = ${input.get(listArrays[i])}`);
//     } else {
//       console.log("not found");
//     }
//   }
// }
// processData(input, listArrays);
const map = [];
map.push(5);
map.push(53);
map.push(50);
map.unshift();
console.log(map);

const myString = "Hello World. How are you doing?";
const splits = myString.split(" ");
console.log(splits);

// function processData(input) {
//   //Enter your code here

//   const arrInput = input.split("\n");
//   const hashTable = new Map();
//   const lengthOfArr = parseInt(arrInput[0] * 2);
//   const lengthOfQueries = arrInput.length - (parseInt(arrInput[0]) + 1);

//   for (let i = 1; i <= arrInput[0]; i++) {
//     const firstItem = arrInput[i].split(" ");
//     hashTable.set(firstItem[0], firstItem[1]);
//   }

//   for (let i = parseInt(arrInput[0]) + 1; i <= lengthOfArr; i++) {
//     let name = hashTable.get(arrInput[i]);
//     if (name) {
//       console.log(`${arrInput[i]}=${name}`);
//     } else {
//       console.log("Not found");
//     }
//   }
// }

// ----------------solution---------------------------
// function processData(input) {
//   //Enter your code here

//   const arrInput = input.split("\n");
//   const hashTable = new Map();
//   const lengthOfArr = arrInput[0] * 2;

//   for (let i = 1; i <= arrInput[0]; i++) {
//     const item = arrInput[i].split(" ");
//     hashTable.set(item[0], item[1]);
//   }

//   for (let i = parseInt(arrInput[0]) + 1; i < arrInput.length; i++) {
//     let name = hashTable.get(arrInput[i]);
//     if (!name) {
//       console.log("Not found");
//     } else {
//       console.log(`${arrInput[i]}=${name}`);
//     }
//   }
// }

// ----------------getting the highest number of consecutive times a number appears
// const number = 524275;
// console.log(parseInt(number.toString(2)));

// const base2Count = (n) => {
//   const base2 = n.toString(2);
//   let countArr = [];
//   let count = 0;
//   for (let i = 0; i <= base2.length; i++) {
//     if (base2[i] === "1") {
//       count++;
//     } else if (base2[i] !== "1") {
//       countArr.push(count);
//       count = 0;
//     }
//   }

//   return countArr.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
// };
// console.log(base2Count(number));

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  const exist = contacts.find((contact) => contact.firstName === name);
  if (exist && exist.hasOwnProperty(prop)) {
    console.log(exist[prop]);
  } else if (!exist) {
    console.log("not found");
  } else if (!exist[prop]) {
    console.log("No such property");
  }

  // Only change code above this line
}

// lookUpProfile("Akira", "likes");
// lookUpProfile("Kristian", "lastName");
// lookUpProfile("Sherlock", "likes");
// lookUpProfile("Harry", "likes");

console.log(parseInt("1011", 2));
const numb = 3456;
// console.log(numb.toString());

const arrs = [6, 89, 3, 45];
// const maximus = Math.max.apply(null, arrs);
const maximus = Math.max(...arrs);
console.log(maximus);

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = arr.map(
    (item) => `<li class='text-warning'>${item}</li>`
  );

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);

const newArr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

function main() {
  //create an empty array
  // let arr = Array(6);

  // for (let i = 0; i < 6; i++) {
  //   arr[i] = readLine()
  //     .replace(/\s+$/g, "")
  //     .split(" ")
  //     .map((arrTemp) => parseInt(arrTemp, 10));
  // }
  let countArr = [];
  let currentSum = 0;
  let count = 0;

  for (let i = 0; i <= newArr.length / 2; i++) {
    for (let j = 0; j <= newArr[i].length / 2; j++) {
      let firstLayer = newArr[i][j] + newArr[i][j + 1] + newArr[i][j + 2];
      let secondLayer = newArr[i + 1][j + 1];
      let thirdLayer =
        newArr[i + 2][j] + newArr[i + 2][j + 1] + newArr[i + 2][j + 2];
      currentSum = firstLayer + secondLayer + thirdLayer;
      countArr.push(currentSum);
      count++;
    }
  }
  const max = countArr.reduce(
    (acc, cur) => (acc > cur ? acc : cur),
    countArr[0]
  );
  // console.log(max);
}

main();
