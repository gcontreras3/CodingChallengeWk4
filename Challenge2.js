/* 1) Create 3 arrays, One with all String data types, one with all Numbers data types, and one with Boolean data types.  You will need to add sample data to each array (don't over think this). Each array should have at least 5 elements.. 

2) Next create a function that can take any of these arrays as a parameter and add an additional String, Number, or Boolean depending on which array was passed in. 

Hint: You will need an array method to add new items to the end of the array. You will also need conditionals set up to check the item at index 0 so you know what array was passed into the function.  You can use the typeof method to determine what type of data is in the array.  */




var strings = ["Jeffery", "Kevin", "Jerry", "Jennifer","Issa"];
var numbs = [0, 1, 2, 3, 4,];
var sampleBoo = [true, false, true, false, true];
var choice = prompt("Which array would you like to pass? These are your options: Strings, Numbers, Booleans. (Case-Sensitive)");
// addToStrings.apply(this,strings);
function add() {
    if (choice == "Strings"){
        strings.push('John');
        console.log(`You just added John to ${strings}`);
    } 
    else if (choice == "Numbers"){
        numbs.push(10);
        console.log(`You just added ${10} to ${numbs}`)
    } 
    else if (choice == "Booleans"){
        sampleBoo.push(true);
        console.log(`You just added True to ${sampleBoo}`)
    } 
    else {
        console.log('NO INPUT');
    }
}

console.log("Did I console.log?");
console.log(add());
