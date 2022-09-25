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

// console.log(fibonacciSequence(9));

//Big-o O(n)=> linear time complexity

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
console.log(powerOf2(64));
