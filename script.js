function myFunction1() {
    // Get the checkbox
    var checkBox1 = document.getElementById("checkBerlin");
    // Get the output text
    var text1 = document.getElementById("ckBerlin");
    // If the checkbox is checked, display the output text
    if (checkBox1.checked == true) {
        text1.style.display = "block";
    } else {
        text1.style.display = "none";
    }
}


function myFunction2() {
    // Get the checkbox
    var checkBox2 = document.getElementById("checkFrankfurt");
    // Get the output text
    var text2 = document.getElementById("ckFrankfurt");

    // If the checkbox is checked, display the output text
    if (checkBox2.checked == true) {
        text2.style.display = "block";
    } else {
        text2.style.display = "none";
    }
}


function myFunction3() {
    // Get the checkbox
    var checkBox3 = document.getElementById("checkBoth");
    // Get the output text
    var text3 = document.getElementById("ckBoth");

    // If the checkbox is checked, display the output text
    if (checkBox3.checked == true) {
        text3.style.display = "block";
        memberNumber.style.display = "block";
        okay.style.display = "block";
    } else {
        text3.style.display = "none";
        memberNumber.style.display = "none";
        okay.style.display = "none";
    }
}

// I used console.log instead of document.write because when I use document.write, the HTMl of invoice.html gets overwritten

var productOne = "Trip to Berlin";
var productTwo = "Trip to Frankfurt";
var gc = " as a GoldenCard member";
var priceOne = 1050;
var priceTwo = 950;
var priceSum = priceOne + priceTwo;
var priceDiscount = (priceOne + priceTwo) * 0.9;


console.log(productOne + ": " + priceOne + "€");
console.log(productTwo + ": " + priceTwo + "€");
console.log(productOne + " & " + productTwo + ": " + priceSum + "€");
console.log(productOne + " & " + productTwo + gc + ": " + priceDiscount + "€");