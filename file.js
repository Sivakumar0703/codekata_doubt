/* var num = 10;
let count = 0;
for(let i=1;i<=num;i++){
    if(num % i == 0){
        count++;
    }
}
if(count === 2){
    console.log(`The number you have entered ${num} is a prime`);
} else {
    console.log(`The number you have entered ${num} is not a prime`);
} */


/*let a = [1,1,1,2,2,2,3,3,3,3,1,1,1,2,23,4,4,];
let b = [];

for(let i=0;i<a.length;i++){
    let count=1;
    for(let j=0;j<a.length;j++){
        if(a[i] === a[j] && i != j ){
            count++;
        }
    }
    if(b.indexOf(a[i]) == -1) {
        console.log(`${a[i]} is repeated for ${count} times.`);
        b.push(a[i]);
    }
} 
console.log(b); */




// doubt-1

/* const str = [1,1,1,2,2,2,3,3,3,3,1,1,1,2,23,4,4];
const obj ={};
for(let i=0;i<str.length;i++){
    const ch = str[i];
    if( ! obj[ch]){
        obj[ch] = 0;
    }
    obj[ch]++;
} 
console.log(obj);  */




//let userInput = [3,'raja kili','pan quil','kili raja'];  // cannot read property 'split' of undefined // str-20

 // let userInput = [2, 'ab cD','cd ab']; //test-case 1

 // let userInput = [2, 'geek guvi','guvi geek']; // test-case 2

// let userInput = [4,'a b','b c','c d','b a'];

// let userInput = [3,'a b','b c','c d'];

/*let num = userInput[0];
let count = 0;
for(let i=1;i<num+1;i++){
    let rev = userInput[i].split(' ').reverse().join(' ');  guvi geek
    for(let j=1;j<num+1;j++){
    if(rev === userInput[j]){
        count++;
    }
}
}
if(count > 0){
    console.log('YES');
} else {
    console.log('NO');
} */




// doubt-2 

/* let str = 'amz'.split('');           // doubt str-27      //str-30 not understanding the question
const len = str.length;
let mid = (len + 1) / 2;

if ((str[0] === 'A' || str[0] === 'a') && (str[len - 1] === 'Z' || str[len - 1] === 'z') && (str[mid] === 'M' || str[mid] === 'm')) {
    console.log('1');
} else {
    console.log('0'); */
//} */  // expected answer => 1

//if((str[0] === 'A'|| 'a') && (str[len-1]=== 'Z'||'z') && (str[mid] === 'M'||'m')){



// how to pick the answer from it?  str-31
/* let userInput = ['john johnny jackie johnny john jackie jamie jamie john johnny jamie johnny john'];
let str = userInput[0].split(' ');
let arr = [];
let obj ={};
for(let i=0;i<str.length;i++){
    let count = 1;
    for(let j=0;j<str.length;j++){
        if(str[i] === str[j] && i != j){
            count++;
        }
        
    }
    if(arr.indexOf(str[i]) === -1 ){
            arr.push(str[i] , count);

    }

}
console.log(arr);*/


// how to delete all the repeating elements including the real value
[1,2,3,5,5]