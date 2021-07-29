// mouseout and mouseover events for clothing images
var athletic = document.querySelector("#athletic");
athletic.addEventListener("mouseout",athletic1);
athletic.addEventListener("mouseover",athletic2);
function athletic1(e)
{
  athletic.src="athletic1.jpeg";
}
function athletic2(e)
{
  athletic.src="athletic2.jpeg";
}

var dress = document.querySelector("#dress");
dress.addEventListener("mouseout",dress1);
dress.addEventListener("mouseover",dress2);
function dress1(e)
{
  dress.src="dress1.jpeg";
}
function dress2(e)
{
  dress.src="dress2.jpeg";
}

var blouse = document.querySelector("#blouse");
blouse.addEventListener("mouseout",top1);
blouse.addEventListener("mouseover",top2);
function top1(e)
{
  blouse.src="top1.jpeg";
}
function top2(e)
{
  blouse.src="top2.jpeg";
}

var jacket = document.querySelector("#jacket");
jacket.addEventListener("mouseout",jacket1);
jacket.addEventListener("mouseover",jacket2);
function jacket1(e)
{
  jacket.src="jacket1.jpeg";
}
function jacket2(e)
{
  jacket.src="jacket2.jpeg";
}

// add to bag array
var clothingItems = ["Tie Dye Twist Front Pullover", "Whisper Light Sheath Minidress", "Wrap Top", "Los Gatos Fleece Jacket"];
document.querySelector('#addAthletic').addEventListener('click', addAthleticItem);
document.querySelector('#addDress').addEventListener('click', addDressItem);
document.querySelector('#addBlouse').addEventListener('click', addBlouseItem);
document.querySelector('#addJacket').addEventListener('click', addJacketItem);
document.querySelector('#removeAthletic').addEventListener('click', removeAthleticItem);
document.querySelector('#removeDress').addEventListener('click', removeDressItem);
document.querySelector('#removeBlouse').addEventListener('click', removeBlouseItem);
document.querySelector('#removeJacket').addEventListener('click', removeJacketItem);

function addAthleticItem()
{
	var newElement = document.createElement("p");
	newElement.textContent = clothingItems[0]
	newElement.setAttribute("id1","myId1");
	document.querySelector("#bagItem1").appendChild(newElement);
	var br = document.createElement("br");
	document.querySelector("#bagItem1").appendChild(br);
}

function removeAthleticItem(id)
{
	var parent = document.querySelector("#bagItem1");
	if (parent.lastChild)
  {
		var child = parent.lastChild;
		parent.removeChild(child);
		child = parent.lastChild;
		parent.removeChild(child);
	}
}

function addDressItem(id)
{
	var newElement = document.createElement("p");
	newElement.textContent = clothingItems[1]
	newElement.setAttribute("id","myId");
	document.querySelector("#bagItem1").appendChild(newElement);
	var br = document.createElement("br");
	document.querySelector("#bagItem1").appendChild(br);
}

function removeDressItem(id)
{
	var parent = document.querySelector("#bagItem1");
	if (parent.lastChild)
	{
		var child = parent.lastChild;
		parent.removeChild(child);
		child = parent.lastChild;
		parent.removeChild(child);
	}
}

function addBlouseItem(id)
{
	var newElement = document.createElement("p");
	newElement.textContent = clothingItems[2]
	newElement.setAttribute("id","myId");
	document.querySelector("#bagItem1").appendChild(newElement);
	var br = document.createElement("br");
	document.querySelector("#bagItem1").appendChild(br);
}

function removeBlouseItem(id)
{
	var parent = document.querySelector("#bagItem1");
	if (parent.lastChild)
	{
		var child = parent.lastChild;
		parent.removeChild(child);
		child = parent.lastChild;
		parent.removeChild(child);
	}
}

function addJacketItem(id)
{
	var newElement = document.createElement("p");
	newElement.textContent = clothingItems[3]
	newElement.setAttribute("id","myId");
	document.querySelector("#bagItem1").appendChild(newElement);
	var br = document.createElement("br");
	document.querySelector("#bagItem1").appendChild(br);
}

function removeJacketItem(id)
{
	var parent = document.querySelector("#bagItem1");
	if (parent.lastChild)
	{
		var child = parent.lastChild;
		parent.removeChild(child);
		child = parent.lastChild;
		parent.removeChild(child);
	}
}

// form validation for name, do while loop
document.querySelector('#button1').addEventListener('click', validateName);
document.querySelector('#button1').addEventListener('click', addName);

function validateName()
{
var name = document.getElementById('enter_name').value;

if (name==null || name=="")
{
  var result = '';
  var i = 4;
  do {
     i--;
     result += ("Error! ");
  }
  while (i >= 2)
  alert(result + "Name cannot be blank!");
  return false;
}
}

function addName()
{
  var fullName = document.getElementById('enter_name').value;
  document.getElementById('cust_name').innerHTML = fullName;
}

// get name and address, string manipulation for state and for loop
document.querySelector('#button2').addEventListener('click', validateAddress);
document.querySelector('#button2').addEventListener('click', addAddress);

function validateAddress()
{
var street = document.getElementById('enter_street').value;
var city = document.getElementById('enter_city').value;
var state = document.getElementById('enter_state').value;

if (name==null || name=="" && city==null || city=="" && state==null || state=="")
{
  var result = '';
  for (var i = 4; i>=2; i--)
  {
     result += ("Error! ");
  }
  alert(result + "Address cannot be blank!");
  return false;
}
}

function addAddress()
{
  var fullAddress = document.getElementById('enter_street').value + " " + document.getElementById('enter_city').value + ", " + document.getElementById('enter_state').value.toUpperCase();
  document.getElementById('cust_address').innerHTML = fullAddress;
}

// shipping cost, switch statements
document.querySelector('#button3').addEventListener('click', validateShipping);

function validateShipping()
{
var text;
var answer = document.getElementById("yesno").value;

switch(answer) {
    case "Yes": text = "Free";
      break;
    case "yes": text = "Free";
      break;
    case "No": text = "$5.99";
      break;
    case "no": text = "$5.99";
      break;
    default: text = "Please verify if we will be shipping to the US";
      break;
  }
  document.getElementById("shipping").innerHTML = text;
}

// canvas
var c = document.getElementById('pane').getContext('2d');

c.beginPath();
c.fillStyle = "#d4a257";
c.lineWidth="5";
c.strokeStyle="#d4a257";
c.moveTo(0, 0);
c.lineTo(0, 100);
c.lineTo(100, 0);
c.stroke();
c.fill();

c.beginPath();
c.fillStyle = "#d4a257";
c.lineWidth="5";
c.strokeStyle="#d4a257";
c.moveTo(700, 600);
c.lineTo(600, 600);
c.lineTo(700, 500);
c.stroke();
c.fill();
