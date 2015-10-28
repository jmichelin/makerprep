//each.js
////////////////
//click watchers
////////////////
$("#btn1").click(function(){
    setCondition(1);
});
$("#btn2").click(function(){
    setCondition(2);
});
$("#btn3").click(function(){
    setCondition(3);
});
$("#btn4").click(function(){
    setCondition(4);
});
$("#btn5").click(function(){
    setCondition(5);
});
$("#btn6").click(function(){
    setCondition(6);
});
$("#btn7").click(function(){
    setCondition(7);
});
$("#btn8").click(function(){
    setCondition(8);
});
$("#btn9").click(function(){
    setCondition(9);
});
$("#btn10").click(function(){
    setCondition(10);
});
$("#btn11").click(function(){
    setCondition(11);
});
$("#btn12").click(function(){
    setCondition(12);
});
$("#btn13").click(function(){
    setCondition(13);
});
$("#btn14").click(function(){
    setCondition(14);
});
$("#btn15").click(function(){
    setCondition(15);
});
$("#btn16").click(function(){
    setCondition(16);
});

///////////////
//set step
/*
classes
collection
callback
counter
collectionLength
callbackCollection
key
callbackCollectionObject
currentEl
currentFunctionAction
newArray
*/
//////////////
function setCondition(conditionStageNumber){
    switch (conditionStageNumber) {
        case 1:
        $(".collection").html('collection');
        $(".callback").html('callback');
        $(".counter").html('0');
        $(".collectionLength").html('collection.length');
        $(".callbackCollection").html('callback(collection[i])');
        $(".key").html('key');
        $(".callbackCollectionObject").html('callback(collection[key])');
        $(".newArray").html('[]');
        $(".currentEl").html('currentEl');
        break;
        case 2:
        $(".collection").html('exampleArray');
        $(".callback").html('function(currentEl){ newArray = ( currentEl * 2) }');
        $(".counter").html('0');
        $(".collectionLength").html('collection.length');
        $(".callbackCollection").html('callback(exampleArray[0])');
        $(".key").html('key');
        $(".callbackCollectionObject").html('callback(collection[key])');
        $(".newArray").html('[]');
        $(".currentEl").html('currentEl');
        break;
        case 3:
        $(".collection").html('[-1,0,1,2,3]');
        $(".callback").html('function(-1){ newArray = ( -1 * 2 )}');
        $(".counter").html('0');
        $(".collectionLength").html('5');
        $(".callbackCollection").html('function(-1){ newArray = ( -1 * 2 )}');
        $(".key").html('key');
        $(".callbackCollectionObject").html('callback(collection[key])');
        $(".newArray").html('[]');
        $(".currentEl").html('-1');
        break;
        case 4:
        $(".collection").html('[-1,0,1,2,3]');
        $(".callback").html('function(-1){ newArray = ( -2 ) }');
        $(".counter").html('0');
        $(".collectionLength").html('5');
        $(".callbackCollection").html('-2');
        $(".key").html('key');
        $(".callbackCollectionObject").html('callback(collection[key])');
        $(".newArray").html('[-2]');
        $(".currentEl").html('-1');
        break;
        case 5:
        $(".collection").html('exampleArray');
        $(".callback").html('function(currentEl){ newArray = ( currentEl * 2 ) }');
        $(".counter").html('1');
        $(".collectionLength").html('5');
        $(".callbackCollection").html('callback(exampleArray[1])');
        $(".key").html('key');
        $(".callbackCollectionObject").html('callback(collection[key])');
        $(".newArray").html('[-2]');
        $(".currentEl").html('currentEl');
        break;
        case 6:
        $(".collection").html('[-1,0,1,2,3]');
        $(".callback").html('function(currentEl){ newArray = ( 0 * 2 ) }');
        $(".counter").html('1');
        $(".collectionLength").html('5');
        $(".callbackCollection").html('function(0){ newArray = ( 0 * 2 ) }');
        $(".key").html('key');
        $(".callbackCollectionObject").html('callback(collection[key])');
        $(".newArray").html('[-2]');
        break;
        case 7:
        $(".collection").html('[-1,0,1,2,3]');
        $(".callback").html('function(currentEl){ newArray = ( 0 )}');
        $(".counter").html('1');
        $(".collectionLength").html('5');
        $(".callbackCollection").html('0');
        $(".key").html('key');
        $(".callbackCollectionObject").html('callback(collection[key])');
        $(".newArray").html('[-2,0]');
        break;
        case 8:
        $(".collection").html('exampleArray');
        $(".callback").html('function(currentEl){ newArray = ( currentEl * 2 )}');
        $(".counter").html('2');
        $(".collectionLength").html('5');
        $(".callbackCollection").html('callback(exampleArray[2])');
        $(".key").html('key');
        $(".callbackCollectionObject").html('callback(collection[key])');
        $(".newArray").html('[-2,0]');
        $(".currentEl").html('currentEl');
        break;
        case 9:
        $(".collection").html('[-1,0,1,2,3]');
        $(".callback").html('function(currentEl){ newArray = ( 1 * 2 )}');
        $(".counter").html('2');
        $(".collectionLength").html('5');
        $(".callbackCollection").html('function(1){ newArray = ( 1 * 2 )}');
        $(".key").html('key');
        $(".callbackCollectionObject").html('callback(collection[key])');
        $(".newArray").html('[-2,0]');
        break;
        case 10:
        $(".collection").html('[-1,0,1,2,3]');
        $(".callback").html('function(currentEl){ newArray = ( 2 )}');
        $(".counter").html('2');
        $(".collectionLength").html('5');
        $(".callbackCollection").html('2');
        $(".key").html('key');
        $(".callbackCollectionObject").html('callback(collection[key])');
        $(".newArray").html('[-2,0,2]');
        break;
        case 11:
        $(".collection").html('exampleArray');
        $(".callback").html('function(currentEl){ newArray = ( currentEl * 2) }');
        $(".counter").html('3');
        $(".collectionLength").html('5');
        $(".callbackCollection").html('callback(exampleArray[3])');
        $(".key").html('key');
        $(".callbackCollectionObject").html('callback(collection[key])');
        $(".newArray").html('[-2,0,2]');
        $(".currentEl").html('currentEl');
        break;
        case 12:
        $(".collection").html('[-1,0,1,2,3]');
        $(".callback").html('function(2){ newArray = ( 2 * 2 )}');
        $(".counter").html('3');
        $(".collectionLength").html('5');
        $(".callbackCollection").html('function(2){ newArray = ( 2 * 2 )}');
        $(".key").html('key');
        $(".callbackCollectionObject").html('callback(collection[key])');
        $(".newArray").html('[-2,0,2]');
        break;
        case 13:
        $(".collection").html('[-1,0,1,2,3]');
        $(".callback").html('function(2){ newArray = ( 4 ) }');
        $(".counter").html('3');
        $(".collectionLength").html('5');
        $(".callbackCollection").html('4');
        $(".key").html('key');
        $(".callbackCollectionObject").html('callback(collection[key])');
        $(".newArray").html('[-2,0,2,4]');
        break;
        case 14:
        $(".collection").html('exampleArray');
        $(".callback").html('function(currentEl){ newArray = ( currentEl * 2 )}');
        $(".counter").html('4');
        $(".collectionLength").html('5');
        $(".callbackCollection").html('callback(exampleArray[4])');
        $(".key").html('key');
        $(".callbackCollectionObject").html('callback(collection[key])');
        $(".newArray").html('[-2,0,2,4]');
        $(".currentEl").html('currentEl');
        break;
        case 15:
        $(".collection").html('[-1,0,1,2,3]');
        $(".callback").html('function(3){ newArray = ( 3 * 2 ) }');
        $(".counter").html('4');
        $(".collectionLength").html('5');
        $(".callbackCollection").html('function(3){ newArray = ( 3 * 2 )}');
        $(".key").html('key');
        $(".callbackCollectionObject").html('callback(collection[key])');
        $(".newArray").html('[-2,0,2,4]');
        break;
        case 16:
        $(".collection").html('[-1,0,1,2,3]');
        $(".callback").html('function(2){ newArray = ( 6 )}');
        $(".counter").html('4');
        $(".collectionLength").html('5');
        $(".callbackCollection").html('6');
        $(".key").html('key');
        $(".callbackCollectionObject").html('callback(collection[key])');
        $(".newArray").html('[-2,0,2,4,6]');
        break;
        default:
    }
}
