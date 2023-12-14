// for-1

// let A = 4;
// let B = 10;

// for (let i = A; i <= B; i++) {
// console.log(i);
// }
// console.log(A, B);


// for-2

// let A = 14;
// let B = 4;

// for (let i = A; i >= B; i--) {
// console.log(i);
// }
// console.log(A, B);

// for-3

// let kg = 10000;

// for (let i = 1; i <= 2; i ++) {
//   console.log(kg * i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log((kg * i + " so'm"));
// }

// for-4

// let kg = 10000;

// for (let i = 1; i <= 2; i += 0.1) {
//   console.log((kg * i) / 10);
// }

// for-5

// let A = 1;
// let B = 10;
// let sum = 0;

// for (let i = A; i <= B; i++) {
//     sum += i;
// console.log(i);
// console.log(sum);
// } 

// for-6

// let A = 1;
// let B = 5;
// let mul = 1;

// for (let i = A; i <= B; i++) {
//     mul *= i;
// } 
// console.log(mul);

// for-7

// let A = 2;
// let B = 3;
// let sum = 0;

// for (let i = A; i <= B; i++) {
//     sum += i ** 2;
// console.log(sum);
// } 

// for-8

// let n = 10; 

// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum += 1 / i;
// }

// console.log(sum);

// for-9
// let n = 5;

// let mul = 1;

// for (let i = 1.1; i <= n; i += 0.1) {
//     mul *= i;
// }

// console.log(`S = ${mul}`);

// for-10

// let n = 15; 

// let sum = 0;
// for (let i = 1; i <= 2 * n - 1; i += 2) {
//     sum += i;
//     console.log(`${i} ning kvadrati: ${sum}`);
// }

// for-15

let N = 5;
let K = 3;

let sum = 0;

for (let i = 1; i <= N; i++) {
    sum += Math.pow(i, K);
}

console.log(sum);

// for-20

// const N = 10;

// for (let i = 1; i <= N; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += j + " ";
//     }
//     console.log(row);
// }