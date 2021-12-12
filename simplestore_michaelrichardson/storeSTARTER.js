"use strict;"
//your name here
//window.alert("conected")
//create array of objects 
//each product is an object with item and price 
//{item: "itemname": price: 10}

const inventory = [
//add objects here
    {item: "Card Pack ", price: 4.00},
	{item: "Starter Deck", price: 12.00},
	{item: "Collector Card Pack", price: 25.00},
	{item: "Card Pack Bunble", price: 40.00},
	{item: "Card Pack Box", price: 100.00},
	{item: "Collector Card Pack Box", price: 200.00}
];
console.log("langth is "+ inventory.length)
console.log(inventory[0])
let tableHTML = "<table>" + "<caption>SALE</caption>" + "<tr><th>Item</th><th>Price</th></tr>"

for (var i = 0; i < inventory.length; i++){
	// add the rowa for the each products[i]
	tableHTML += "<tr><td>" + inventory[i].item + "</td><td>" + inventory[i].price + "</td></tr>";
	
}


tableHTML +=  "</table>";
console.log(tableHTML);

//
//declare any global variables
let grandtotal = 0;



//display the inventory in a table on the webpage
document.getElementById("mytable").innerHTML = tableHTML;


//function to run when add is clicked
function addItem(){
	if (!isNaN(quantity)) {
			window.alert("Enter Quantinty")
	}
	else {
   			let useritem = document.getElementById("item1").value;
			console.log(useritem)
	
	
			let quantity = parseInt(document.getElementById("quantity").value);
			console.log(quantity)
	
	//get the item name from the textbox (make sure something is entered in item and quantity)
	
	
		
			let itemprice = findPrice(useritem);
			console.log(itemprice)
	//otherwise continue to process the order by getting the quantity from the textbox.  Calculate the item total (quantity times price) and add this to grandtotal
			if (itemprice == -1){
			
				window.alert("item not found");//If the itemprice returned is -1 do a window.alert with the message "item not found"
		}
			else{
				let finalPrice =(quantity * itemprice);
				console.log(finalPrice)
				grandtotal = grandtotal + finalPrice;
		console.log(grandtotal)
				
				document.getElementById("due1").innerHTML = "$" + grandtotal;
				document.getElementById("receipt").innerHTML = quantity + " - " + useritem + " at "+ itemprice + " " + finalPrice;
			}
		
		
		
		}
	
	//Display the grandtotal on the page (will change each time another product is added to order)
	

	

	
	
	

}
//function to run when clear is clicked
function newOrder(){
//window.alert("newOrder")
	document.getElementById("due1").innerHTML= "$0";
	document.getElementById("quantity").value = "";
	document.getElementById("item1").value = "";
	document.getElementById("receipt").innerHTML = "";
}


//this function searches for useritem in the inventory array
//it returns the price if found
//or -1 if the product is not found
//DO NOT CHANGE THIS CODE
function findPrice(useritem)
{
    //search the inventory, return price or -1
    for (let i = 0; i < inventory.length; i++)
    {
        if (inventory[i].item == useritem)
            return inventory[i].price;
    }
    //not found, return -1
    return -1;
}