console.log('helloWorld');
console.log('y',y);

// let b = 100;
// console.log('b',b);

var func = () => {
  console.log('funcCalled');
}
var y = 10;
console.log('y',y);
console.log(window);

class Clash {
  constructor(name){
    this.name = name;
  }

  change_name (new_name){
    this.name = new_name;
    console.log('changingName');
  }
}

const clash_obj = new Clash('hello');

console.log(clash_obj.name);

clash_obj.change_name('bellow');

console.log(clash_obj.name);

{
  var x = 10;
  console.log(101);
}

function func_lmao () {
  console.log('func_lmao');
}

func_lmao();

console.log(func_lmao);

if ( 1 ) {
  if(x === 10)
    {
    var z = 198;
    console.log(z);
    }
}

//let access to ho jaata hai ( weird js ki first def then access rule se ) but internal logic ke wajah se uska execution before declaration manually restrict kiya hai

// toh window object is also like a normal obejct with functions and variables/values bas uske liye import statement nahi likhni padti\
  // manually chosen based on logical arguments 

// prolly react bih kucch khaas mushkil nahi hai but uska intuitive logic and actual bts logic ko conenct karne me thodi mehnat hai

// well again object kya hota hai, bas stored variables/value ( js only storing function definitions ) and available methods to be operated on the function 

//function ka pura expression store hota hua kyu nah dikha rha hai, the way nmste js wale bhaiya told us?

// remember classes are nothing but just a blueprint for a function 
  // and the functionalities that they provide such as inheritance can be achieved by just copying everything, inheritance just saves repetition of code 
    // encapsulation may not be the same case, but definitely using certain keywords this may be achieved i suppose ( or by manipulating some already available logic structures like block scope for garbage collection -> closures for function returns -> variables only being accessible by certain functions but still stored in permanent memory even after the end of function execution)

// I had an argument that functions are not fundamentally really required in coding 
  //is this really correct, very basic base and fundamental case is valid , avoid repetition : so if you don't want to use functions just replace it with 
    // similar argument with loops, no need of loops 
      // but yes firstly fundamentally analysing the shift of execution and the function block and creation and the transfer of data to functions can probably be achieved
        //some far away edge case may not

// Probably what is happening is major stuff is declaration, expression ... function is just a separate block of expression and declarations ...... object is just a collection of declarations ....... classes are just and just a blueprint of what is supposed to be declared in the obejct + functions/methods ( can be treated as normal global functions but just a twist of locality that only its oject can call it )
    // EXCEPTION Cases pointers fundamentally just a declaration with inbuilt logic to access the address stored into it
  /* 
  Actual me kitni easy ho jaati hai cheeze aise imagine karne me 
    having mentioned the above stuff this is the scope of any language coz this is the scope of the processor and the computer as well 
  */
  //now 
