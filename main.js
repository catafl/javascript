console.log("hello world");
function increment(x){
    // console.log(x); //definitie
    x = x + 1;
    // console.log(x);
    return x;

}
var result;
console.log(result);
result = increment(3);

console.log(result);

function showIncrementedValue(){
    console.log("show");
    var userNumber = document.getElementById("number");
    // console.dir(userNumber);
    // console.log(userNumber.value);
    var userNumberAsInteger = parseInt(userNumber.value);
    console.log(increment(userNumberAsInteger));
    var incrementedValueElement = document.getElementById("incrementedValue");
    // console.log(incrementedValueElement);
    console.dir(incrementedValueElement);
    incrementedValueElement.innerHTML = increment(userNumberAsInteger);
}   


// increment(0);
// console.log(x);
// console.log(increment(0)); //apel