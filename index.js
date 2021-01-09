const readlỉne = require("readline-sync");

let arr = readlỉne.question("Nhap mang co 1 phan tu khong trung va tat ca phan con lai trung 3 lan: ");

try {
    if(JSON.parse(arr)) {
        arr = JSON.parse(arr)
    }
}
catch(err) {
    arr = `[${arr}]`;
    arr = JSON.parse(arr);
}

let one = 0;
let two = 0;
let not_three;

for(let x of arr) {
    two |= one & x;            // Step 1
    one ^= x;                   // Step 2
    not_three = ~(one & two) ; // Step 3
    one &= not_three ;          // Step 4
    two &= not_three ;
}

console.log(`So khong bi trung la: ${one}`);
