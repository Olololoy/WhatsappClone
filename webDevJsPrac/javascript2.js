/* 
function OuterFunc () {

    const obj = {};
    obj.lmao = 'lmao';

    function InnerFunc() {      
        obj.lmao = 'gmao';
        return  obj;
    }

    function InnerFunc2() {
        obj.lmao = 'smao';
        return obj;
    }

    return {InnerFunc, InnerFunc2};

}

// console.log(obj);

const innerFuncRef = OuterFunc();
const objectRef = innerFuncRef.InnerFunc();

console.log(objectRef);

objectRef.lmao = 'kmao';

console.log(objectRef);

const objectRef2 = innerFuncRef.InnerFunc2();

console.log(objectRef);

const innerFuncRefAgain = OuterFunc();
const objectRefAgain = innerFuncRefAgain.InnerFunc();
console.log(objectRefAgain);  
*/

// setTimeout( () => {
//     var d = new Date();
//     const h = d.getHours();
//     const m = d.getMinutes(); 
//     const s = d.getSeconds(); 
//     console.log('0.001', s );
// }, 1);

// setTimeout( () => {
//     var d = new Date();
//     const h = d.getHours();
//     const m = d.getMinutes(); 
//     const s = d.getSeconds(); 
//     console.log('1', s );
// }, 1000);

// setTimeout( () => {
//     var d = new Date();
//     const s = d.getSeconds(); 
//     console.log('2', s );
// }, 2000);

// for ( let i = 0 ; i < 10000000000; i++ ) {
//     let j = 0 ;
//     j++;
// }


// for ( let i = 0 ; i < 4 ; i++ ){
//     var k = i;
//     setTimeout(() => {console.log(k)}, i*1000);
// }

// console.log(k+2);

// var k = 10;
// var k = 100;

// if(1) {
//     let i = 0 ;

//     while ( i < 4 ) {

//         setTimeout(() => {console.log(i)}, i*1000);
//         i++;
//     }

// }

// console.log(a);
// let a;




// let a;
// console.log(a);

