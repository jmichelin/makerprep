///////////
//each
//////////
function each(collection, callback) {
    // insert code here
    if(Array.isArray(collection)) {
        for (i=0; i < collection.length; i++){
            callback(collection[i]);
        }
    } else {
        for (key in collection) {
            callback(collection[key]);
        }
    }
}
//to test
var logger = function (input) {
    console.log("each test", input);
};
//each([1, 2, 3], logger); // output: 1, 2, 3

///////////
//map
//////////
function map(collection, callback) {
    // insert code here
    var results = [];
    each(collection, function(currentEl){
        results.push(callback(currentEl));
    });
    return results;
}
//to test
var incrementor = function(currentEl){
    return currentEl + 1;
};
//console.log("Map test", [1, 2, 3].map(incrementor)); // output: [2, 3, 4]

/////////////////
//filter
////////////////
function filter(collection, predicate) {
    var results = [];
    each(collection, function(currentEl) {
        if (predicate(currentEl)) {
            results.push(currentEl);
        }
    });
    return results;
}
//to test
function returnOdds(currentEl) {
    return currentEl % 2 !== 0;
}
//console.log("filter test ", filter([1, 2, 3], returnOdds)); // output: 1, 3

////////////////////
//reduce
///////////////////
function reduce(collection, callback, startValue) {
    // insert code here
    var accumVal, i;
    if(arguments.length >= 3) {
        accumVal = startValue;
        i = 0;
    } else {
        accumVal = collection[0];
        i = 1;
    }
    while (i < collection.length){
        accumVal = callback(accumVal, collection[i]);
        i++;
    }
    return accumVal;
}
//to test
function summer(previousValue, currentValue) {
    return previousValue + currentValue;
}
//console.log(reduce([1, 2, 3], summer, 0)); // output: 6

///////////////////////
//letters with holes HELP
//////////////////////
// function returnOdds(currentEl) {
//     return currentEl % 2 !== 0;
// }
// function hasHoles(phrase) {
//     var hasHolesArray = ["A","a","B","b","D","d","e","g","O","o","P","p","Q","q","R"];
//     var holesCount = 0;
//     for (i=0; i < phrase.length; i++ ) {
//         prompt("hasHole? ", hasHolesArray.indexOf(phrase[i]) !== -1);
//         return hasHolesArray.indexOf(phrase[i]) !== -1;
//     }
// }
function hasHoles(currentEl){
    var hasHolesArray = ["A","a","B","b","D","d","e","g","O","o","P","p","Q","q","R"];
    return hasHolesArray.indexOf(currentEl) !== -1;
}
//console.log(each(["brian has holes"], logger));
//console.log("filter test ", filter([1, 2, 3], returnOdds)); // output: 1, 3
//console.log("brian hole test 1 expecting[\"b\", \"d\"]", filter(["b", "c", "d"], hasHoles));
//need to loop over the array elements, then loop over array sub elements
//do this before or after
var sentence = "brian has holes";
var newSentence = sentence.split('');
newSentence = filter(newSentence, hasHoles);
//console.log("There are", newSentence.length, "hole(s) " , newSentence);

///////////////
//sidekicks 2
//////////////
var sidekicks = [
    {name: "Robin",           hero: "Batman"   },
    {name: "Supergirl",       hero: "Superman" },
    {name: "Fatman",          hero: "Mister America"},
    {name: "Oracle",          hero: "Batman"   },
    {name: "Doiby Dickles",   hero: "Green Lantern" },
    {name: "BatGirl",         hero: "Batman"},
    {name: "Pieface",         hero: "Green Lantern" }
];
//console.log("filter test ", filter([1, 2, 3], returnOdds)); // output: 1, 3
var hero;
var hero = "Batman";
function isHero(currentSideKick){
    return currentSideKick.hero === hero;
}
newVar = map(filter(sidekicks, isHero), function(currentEl){
    return currentEl;
});
//console.log(JSON.stringify(newVar, null, 4));

//////////////////////////
// exercise 3 contains
//Write a contains function that returns whether or not something is contained in a collection.
/////////////////////////
testArray = ["-1", "0", "2"];
function findItem(currentEl, itemToFind) {
    if (currentEl === itemToFind) {
        //console.log(currentEl + " === " + itemToFind);
        return currentEl;
    }
}
function contains(arrayToLookIn, itemToLookFor){
    //console.log("arrayToLookIn " + arrayToLookIn);
    //console.log("itemToLookfor " + itemToLookFor);
    var isInCollection = false;
    for (i=0; i < arrayToLookIn.length; i++){
        //console.log(typeof(arrayToLookIn[i]) +" === "+ typeof(itemToLookFor));
        if (arrayToLookIn[i] === itemToLookFor) {
            //console.log(arrayToLookIn[i] +" === "+ itemToLookFor);
            isInCollection = true;
            return isInCollection;
        }
    }
    //console.log(reduce(arrayToLookIn, findItem, isInCollection));
    return isInCollection;
}
//console.log(contains(testArray,"1"))
///////////////////////////
///exercise 4 MakerMoney//
/////////////////////////

//var coins = prompt("enter coins seperated by spaces");
coins = "12 12 12 12 32";
coins = coins.split(" ");
var dollars = map(coins, function(coin) {
    return Math.floor(coin/2) +Math.floor(coin/3) + Math.floor(coin/4);
});
//console.log(dollars);


///////////////////////////
///exercise 5 Next Palindrome//
/////////////////////////

numbers = "808 2133";
numbers = numbers.split(" "); // numbers = [808, 2133]
var palindromeNumbers = map(numbers, nextPalindrome);
function nextPalindrome(num){
    num++;
    while(!isPalindrome(num)){
        num++;
    }
    return num;
}
function isPalindrome(number) {
    return number === parseInt(number.toString().split("").reverse().join(""));
}
//console.log(numbers);
//console.log('');
//console.log(palindromeNumbers);

////////////////////////////
//exercise 6 open tweets
///////////////////////////
// Tweets: 1, 0, 0
// 1 tweet(s) are open
//
// Explanation:
// Let open[x] = 1 if the xth tweet is open and 0 if its closed.
// Initially open[1..3] = { 0 , 0 , 0 }. Here is the state of open[1..3] after each click and corresponding
//count of open tweets.
//
// CLICK 1 : { 1, 0, 0 }, open count = 1
// CLICK 2 : { 1, 1, 0 }, open count = 2
// CLICK 3 : { 1, 1, 1 }, open count = 3
// CLICK 2 : { 1, 0, 1 }, open count = 2
// CLOSEALL : { 0, 0, 0 }, open count = 0
// OPENALL : { 1, 1, 1 }, open count = 3

// Implementation:
// Prompt the user for the number of tweets there will be and store it in numberOfTweets.
var numberOfTweets = prompt("Enter the Number of Tweets");

// Prompt the user for the tweets they would like to click,
// or have them enter ‘o’ to open all of them or ‘c’ to close all of them (store these in an array called postClicks.
var postClicks = prompt("How many would you like to click? (ex. 1 1 0 1 to open 1st, 2nd and 4th but close 3rd, o to open all, c to close all)");
postClicks = postClicks.split(" ");
console.log("postClicks[0]" + postClicks[0]);
// Create a createEmptyArray function that takes a number as input and
// returns an array of that size and enters ‘0’ for each value of the array.
function createEmptyArray(number){
    var newArray = [];
    for (i=0; i < number; i++) {
        newArray.push(0);
    }
    return newArray;
}
console.log("createEmptyArray(5): " + createEmptyArray(5));
var tweetArray = createEmptyArray(numberOfTweets);
console.log("tweetArray: " + tweetArray);
// Create an allOpen function that takes an array as a parameter and
// using ‘map’ (the function you created earlier) returns that array filled with the number 1.
// This is for when the user enters an 'o'.
function setToOne(){
    return 1;
}
function allOpen(arrayToSet) {
    return map(arrayToSet, setToOne);
}

//console.log("allOpen[tweetArray]: " + allOpen(tweetArray));
// Create an allClosed function that takes an array as a parameter and
// using ‘map’ (the function you created earlier) returns that array filled with the number 0.
// This is for when the user enters a 'c'.
function setToZero(){
    return 0;
}
function allClosed(arrayToSet) {
    return map(arrayToSet, setToZero);
}
//console.log("allClosed[0,0,0,0]: " + allClosed(tweetArray));
// Use your ‘each’ function (the function you created earlier) to iterate over your
// postClicks array that either opens/closes all the tweets or toggles specific tweets.
var counter=0;
each(postClicks, function(currentEl){
        //alert("alert(postClicks[i]) " + currentEl);
        //alert("currentEl " + currentEl);

        if(currentEl === "o") {
            //alert("inside If o");
            tweetArray = allOpen(tweetArray);
        } else if(currentEl === "c") {
            //alert("inside If c");
            tweetArray = allClosed(tweetArray);
        } else {
            //alert("inside else");
            tweetArray[counter] = currentEl;
            counter++;
        }
        return tweetArray;
    });
console.log("Tweets: " + tweetArray);
// Create a function getCount that takes an array as a parameter and using reduce
// (the function you created earlier) returns the sum of the array. This is to find out how many tweets are open.
    function getMeSum(previousValue, currentValue){
        return parseInt(previousValue) + parseInt(currentValue);
    }
    function getCount(summedArray){
        return reduce(summedArray, getMeSum, 0);
    }
    console.log(getCount(tweetArray) + "tweet(s) are open");
// Log which tweets are open (in array format).
