
// map() requirement.

var arr = [
	{key: 1, value: 10}, 
	{key: 2, value: 20}, 
   	{key: 3, value: 30}
];

var newArr = arr.map(function(obj) { 
   var newObj = {};
   newObj[obj.key] = obj.value;
   return newObj;
});

console.log(newArr);
 

var variable = [5,2,3,4];
var now = [];
var newVar = variable.map(function(now){
	return now*2;
});
console.log(newVar)



// filter() requirement.
var kicks = [
    { name: "Lawal",     hero: "Batman"   },
    { name: "Vera", hero: "Superman" },
    { name: "Dean",    hero: "Batman"   },
    { name: "De-Paul",    hero: "Superman" }
];
var batKicks = kicks.filter(function (el) {
    return (el.hero === "Batman");
});
console.log(batKicks);

var superKicks = kicks.filter(function(sup){
	return (sup.hero === 'Superman');
});
console.log(superKicks);

var nullKick = kicks.filter(function(nul){
	return (nul.hero === 'batman')
});
console.log(nullKick);


//Combining map() and filter().
var name = kicks.filter(function(el){
	return (el.hero === 'Batman');
}).map(function(eh){
	return eh.name;
});
console.log(name);


//reduce() requirement
var rockets = [
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];

var sum = rockets.reduce(function(prevVal, elem) {
    return prevVal + elem.launches;
},0);

console.log(sum);

