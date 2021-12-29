
let num = [23, 34, 12, 3, 5, 6, 45, 67, 35, 26];

let numMin = 0;
num.forEach(element => {
   if(numMin < element) {
       numMin = element;
   }
});
console.log(numMin);