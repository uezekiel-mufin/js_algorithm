// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// const l1 = [2, 4, 3];

// const l2 = [5, 6, 4];
// // Output: [7,0,8]
// // Explanation: 342 + 465 = 807.

// const solution = (l1, l2) => {
//   const revL1 = l1.reverse();
//   const revL2 = l2.reverse();
//   console.log(revL1, revL2);

//   const reverseArr = revL1.map((item, index) => {
//     const num = item + revL2[index];
//     return num;
//   });
//   console.log(reverseArr);
// };
// solution(l1, l2);

// Guven a number 'n' , find the first 'n' elements of the fibonacci sequence

const fibonacciSequence = (n) => {
  const seq = [0, 1];

  for (i = 2; i <= n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
};

console.log(fibonacciSequence(9));

//Big-o O(n)=> linear time complexity

//using recursion to get the value of a number at a particular index (n) in the fibonacci series
const recursiveFib = (n) => {
  if (n < 0) return;
  if (n < 2) return n;
  return recursiveFib(n - 1) + recursiveFib(n - 2);
};
console.log(recursiveFib(2));

//the Big-O notation for recursiveFibonacci is 2^n. this is not a good performance

// Given an integer 'n', find the factorial of that integer

const factNumb = (n) => {
  const numb = [];
  let mult = 1;
  for (i = 1; i <= n; i++) {
    mult = mult * i;
  }
  return mult;
};
// console.log(factNumb(6));

//using recursion to solve the factorial of a number

const recursiveFactorial = (n) => {
  if (n === 1) return n;
  return n * recursiveFactorial(n - 1);
};
console.log(recursiveFactorial(5));

//the big-o of a recursive function for finding the factorial of a number is 0(n) : which means it is linear

//Prime number
// Given a natural number 'n', determine if the number is prime or not

const primeNumb = (n) => {
  if (n < 2) return;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    } else {
      return true;
    }
  }
};
// console.log(primeNumb(35));

//using bitwise operators to find if a number is a power of 2
const powerOf2 = (n) => {
  if (n <= 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};
// console.log(powerOf2(64));

//using linear search
const arr = [-5, 2, 4, 6, 10];
const findIndexOf = (n) => {
  return arr.indexOf(n);
};
// console.log(findIndexOf(10));

const indexSearch = (arr, k) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return i;
    }
  }
  return -1;
};
// console.log(indexSearch(arr, 4));

//using binary search
const binSearch = (arr, k) => {
  if (arr.length < 1) return -1;
  let mid;
  if (arr.length % 2 === 0) {
    mid = arr.length / 2 - 1;
  } else {
    mid = Math.floor(arr.length / 2);
  }
  if (arr[mid] - 1 === k) {
    return arr[mid] - 1;
  }
  if (arr[mid] - 1 < k) {
    console.log(arr.slice(mid));
    console.log(true);
  } else {
    console.log(arr.slice(mid));
    console.log(false);
  }
  console.log(arr[mid - 1] === k);

  console.log(mid);
};
console.log(binSearch(arr, 6));

console.log(Math.ceil(62 / 5) * 5);
const arrTest = [1, 2, 8, 3, 2, 2, 2, 5, 1];
const arrFr = new Array(arrTest.length);
console.log(arrFr);

let visited = -1;
for (i = 0; i < arrTest.length; i++) {
  let count = 1;

  for (j = i + 1; j < arrTest.length; j++) {
    if (arrTest[i] === arrTest[j]) {
      count++;
      arrFr[j] = visited;
    }
  }
  if (arrFr[i] !== visited) {
    arrFr[i] = count;
  }
}

const numbOfPairs = arrFr
  .map((item) => {
    if (item >= 2 && item % 2 === 0) {
      //number of item pairs in the array
      return item / 2;
    } else {
      //item is not a pair
      return 0;
    }
  })
  .reduce((acc, cur) => acc + cur, 0);
// console.log(arrTest);
// console.log(arrFr);
// console.log(numbOfPairs);

let currentPosition = 0;
let MountTop = 0;
let seaLevel = 0;
valleyPos = 0;
const arrMov = ["U", "D", "D", "D", "U", "D", "U", "U"];

if (arrMov[0] === "U") {
  MountTop = 1;
  valleyPos = MountTop - seaLevel;
} else if (arrMov[0] === "D") {
  MountTop = 0;
  valleyPos = 0;
}
// console.log(MountTop, seaLevel);
// console.log(valleyPos);

function countingValleys(steps, path) {
  let altitude = 0;
  let valleys = 0;
  for (let i = 0; i < steps; i++) {
    altitude = path[i] == "U" ? altitude + 1 : altitude - 1;
    if (altitude == 0 && path[i] == "U") {
      valleys++;
    }
  }
  return valleys;
}
// console.log(countingValleys(8, "UDDDUDUU"));

// console.log(Math.ceil(67 / 5) * 5);

//recursive binary search
const arrBin = [-5, 2, 4, 6, 10];
function recursiveBinarySearch(arrBin, target) {
  //helper function that is called recursively
  return search(arrBin, target, 0, arrBin.length - 1);
}

function search(arrBin, target, leftIndex, rightIndex) {
  //base case for the recursion
  if (leftIndex > rightIndex) {
    return -1;
  }

  const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (arrBin[middleIndex] === target) {
    return middleIndex;
  }

  if (arrBin[middleIndex] > target) {
    return search(arrBin, target, leftIndex, middleIndex - 1);
  }
  if (arrBin[middleIndex] < target) {
    return search(arrBin, target, middleIndex + 1, rightIndex);
  }
}

// console.log(recursiveBinarySearch(arrBin, -5));

//BUBBLE SOrt
const sortArr = [-6, 20, 8, 2, 4];

// sortArr.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(sortArr);

const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};
// console.log(bubbleSort(sortArr));

//big-o === O(n^2) --------------quadratic time complexity

// recursive quick sort method for ascending order

const recursiveQuickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  console.log(pivot);
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return [...recursiveQuickSort(left), pivot, ...recursiveQuickSort(right)];
};
// console.log(recursiveQuickSort(sortArr));

// recursive quick sort for descending order
const sortArrReverse = [-6, 20, 8, 2, 4, 9, 10];

const reverseRecursiveQuickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? rightArr.push(arr[i]) : leftArr.push(arr[i]);
  }
  return [
    ...reverseRecursiveQuickSort(leftArr),
    pivot,
    ...reverseRecursiveQuickSort(rightArr),
  ];
};
//big-O ------------ avgCase complexity of O-(nlogn)
// console.log(reverseRecursiveQuickSort(sortArrReverse));

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

// console.log(mergeSort(sortArrReverse));

// cartesian products
const arr1 = [1, 5, 6];
const arr2 = [9, 4, 3];

function cartesianProducts(arr1, arr2) {
  const cartesianResult = [];
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}
console.log(cartesianProducts(arr1, arr2));

//time complexity Big-O === O(mn) ----------------m and n are the length of the array

// climbing stairs case idea

function climbingStaircase(n) {
  const noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
}

console.log(climbingStaircase(3));
console.log(climbingStaircase(2));
console.log(climbingStaircase(9));

//Big-O == O(n) --------linear time complexity

//Tower of Hanoi
function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}
towerOfHanoi(3, "A", "C", "B");

//time complexity Big-O ==== 2^n -1
