var fruitsString = "";

 function fruits (a, label =undefined){

    fruitsString = a;

    return function f(b) {
         if(b === undefined){
            if(label === undefined){
                return(fruitsString + ".");
            }else{
                return (label+ ": " + fruitsString+ ".");
            }
            }else if(b === "-"){
                let arr = fruitsString.split(",");
                arr.pop();
                fruitsString = arr.toLocaleString();
                return f;
            }else{
                fruitsString += ","+ b;
                return f;
        }
    }
 }

// Test 1
let f = fruits('Apple')('Apricot')('Avocado')('Banana');
console.log(f());

// Test 2
f('Bilberry')('Blackberry');
f('Blackcurrant');
console.log(f());

// Test 3
console.log(f('-')());

// Test 1
let f = fruits(3, 'Digits');
console.log(f());

// Test 2
f(8)(-9);
f(11)(0)(0);
console.log(f());

// Test 3
f('-')('-')('-');
console.log(f());