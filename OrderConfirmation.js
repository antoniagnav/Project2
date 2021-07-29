// while loop
var result = '';
var i = 4;
while (i >= 2)
 {
   i--;
   result += i + '...<br>';
}
document.getElementById('confirmed').innerHTML = result + "Thank you for shopping with us! Your order has been processed!";

// date
var date = new Date();
date.setDate(date.getDate() + 7);
console.log(date);

document.getElementById("date").innerHTML = date;
