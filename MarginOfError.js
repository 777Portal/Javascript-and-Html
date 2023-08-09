//simple maths for an assingment is boring :P
function math(){
    var avrg = prompt("Input avarage")
    var theoretical = prompt("Input theoretical", "2363")
    console.log(avrg);
    var subtracted = avrg - theoretical
    alert("subtracted amount: "+subtracted)
    var divided = subtracted / theoretical
    alert("divided amount: "+divided)
    if (divided >= 0){
        console.log("greater then zero, doesn't need to be converted")
        var final = divided * 100
        alert("Final: "+final)
    } else {
        var finalPos = Math.abs(divided) * 100;
        alert("Final: "+finalPos)
    }
}
math();
