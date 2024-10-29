// next
function date (){
d = new Date();
document.write(d);
}
date();

// next
var ask1 = prompt("Whats your name?");
var ask2 = prompt("Whats your last name?");
function greet (first,last){
alert("Hello" + " " +  first + " " + last);
}
greet(ask1,ask2);

// next
function add (a,b) {
  return a+b;
}
document.write('<br>' + "The add number is:" + add(3,5));

// next
var ask3 = parseFloat(prompt("Enter your first number")); // Convert input to a number
var ask4 = parseFloat(prompt("Enter your second number")); // Convert input to a number
var ask5 = prompt("What's operation you want to perform \n + \n - \n * \n /");

function calculate(a, b, operation) {
    var result;
    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            result = "Invalid operation";
    }
    document.write('<br>' + result);
}

calculate(ask3, ask4, ask5);

// next
function square(num) {
    return num * num; 
}

var number = parseInt(prompt("Enter a positive number"));

if (number > 0) {
    var result = square(number);
    document.write('<br>' + "The square of " + number + " is: " + result);
} else {
    document.write('<br>' + "Please enter a valid positive number.");
}
// next

function countFrom(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + '<br>');
    }
}
var startInput = prompt("Enter the starting point:");
var endInput = prompt("Enter the ending point:");

var start = parseInt(startInput);
var end = parseInt(endInput);

if (start <= end) {
    countFrom(start, end);
} else {
    document.write("Please enter valid integers.");
}


// next
function calculateHypotenuse(base, perpendicular) {
    function sum(a, b) {
        return a + b;
    }

    var hypotenuse = sum(base, perpendicular);
    return hypotenuse;
}

var base = parseFloat(prompt("Enter the base of the triangle:"));
var perpendicular = parseFloat(prompt("Enter the perpendicular of the triangle:"));

if (base > 0 && perpendicular > 0) {
    var result = calculateHypotenuse(base, perpendicular);
    document.write('<br>' + "The hypotenuse is: " + result);
} else {
    document.write('<br>' + "Please enter valid positive numbers for base and perpendicular.");
}
// next
function checkPalindrome(str) {
    var  lowerCaseStr = str.toLowerCase();
    var cleanStr = lowerCaseStr.replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  
  // Example usage
  console.log(checkPalindrome("madAm")); // true
  console.log(checkPalindrome("hello")); // false
// next
function area (width,height) {
return width*height;
}
var askWidth  = parseFloat(prompt("Enter the value of width to find area"));
var askHeight = parseFloat(prompt("Enter the value of height to find area"));

document.write('<br>' + "The area of your triangle is" + " " + area(askWidth,askHeight));

// next
function upper() {
    var userInputNew = prompt("Enter a string:");

    if (userInput.length > 0) {
        1
        var newUpper = userInputNew[0].toUpperCase() + userInputNew.slice(1);
        document.write("After upper case: " + newUpper);
    } else {
        document.write("Please enter a valid string.");
    }
}

upper();

// next

function calcCircumference(radius) {
    var PI = 3.14159;
    var circumference = 2 * PI * radius;
    return "The circumference is " + circumference;
    }
    
    // Function to calculate area
    function calcArea(radius) {
    var PI = 3.14159;
    var area = PI * radius * radius;
    return "The area is " + area;
    }
    
    
    console.log(calcCircumference(5));
    console.log(calcArea(5));