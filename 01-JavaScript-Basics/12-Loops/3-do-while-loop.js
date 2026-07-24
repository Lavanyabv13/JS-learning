// do...while control statement

/* Syntax
let initiliaztion;
do {
//code
update;
}
while (Condition);   */

// 1. Print Numbers from 1 to 10

console.log("Print Numbers from 1 to 10 using do...while loop");
let i=1;
do {
    console.log(i);
    i++;
}
while (i<=10);


// 2. Print Numbers from 10 to 1

console.log("Print Numbers from 10 to 1 using do...while loop");
let a=10;
do {
    console.log(a);
    a--;
}
while (a>=1);


// 3. Print Even Numbers

console.log("Print Even Numbers : Method 1");
let even=2;
do {
    console.log(even);
    even += 2;
}
while (even<=10);

console.log("Print Even Numbers : Method 2");
let evenM2=1;
do{
    if (evenM2 % 2 == 0)
       console.log(evenM2);
       evenM2++;
}
while (evenM2 <= 10);


/// 4. Print Odd Numbers

console.log("Print Odd Numbers : Method 1");
let oddM1=1;
do {
    console.log(oddM1);
    oddM1+=2;
}
while (oddM1<=10);

console.log("Print Odd Numbers : Method 2");
let oddM2=1;
do {
    if (oddM2 % 2 !== 0)
    console.log(oddM2);
    oddM2++;
}
while (oddM2<=10); 


//5. Multiplication Table of 2

console.log("5. Multiplication Table of 2");
let tableOf2=1;
do {
    console.log("2 X", tableOf2, "=", (tableOf2*2));
    tableOf2++;
}
while (tableOf2 <=10);

//6. Countdown 

console.log("Starts Countdown");
let count = 5;
do {
    console.log("Tik Tik :", count);
    count--;
}
while (count>=1);

//7. Execute at Least Once

console.log("Execute at Least Once");
let call = 1;
do {
    console.log("Calling no :", call);
    call++
}
while (call <= 1 );