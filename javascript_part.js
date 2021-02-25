
function area(l, w){
    
    
    return (l * w);
}




var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var result = document.getElementById("result");
var form = document.getElementById("form");


form.addEventListener("submit", function(event){
    event.preventDefault()
    console.log(typeof n1.value+" a " +typeof n2.value)
    var y = parseFloat(n2.value);
    var x = parseFloat(n1.value);
    
    var result = document.getElementById("result");
    if (isNaN(x)===false && isNaN(y) === false){

        
        result.innerText = "The sum of the two numbers is " + (x+y);
        
        
    } else{
        result.innerText = "Please enter numbers.";
    }

})
