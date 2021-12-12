// JavaScript Document
"using strict"
//window.alert("conect")



function calcBMI(){
	if (isNaN(ft) || isNaN(in1) || isNaN(ib) || isNaN(tft) || isNaN(totalHieght) || isNaN(p1) || isNaN(p2) || isNaN(bti)){
		
	
		if (document.getElementById("ft").value == "" || document.getElementById("in1").value == "" || document.getElementById("ib").value == ""  ){
			window.alert("Please enter your Height and Weight")// if no data is enter
			document.getElementById("bti").innerHTML = "Please enter your Height and Weight";
		}


		else{
				var ft = parseInt(document.getElementById("ft").value);// to get you hieght in feet need to covert to inches
				console.log("Height in feet " + ft )
				var in1 = parseInt(document.getElementById("in1").value);// inches will be add after 
				console.log("Height in inches " + in1)
				var ib = parseInt(document.getElementById("ib").value);// your wieght in ib 
				console.log("weight " + ib)

				var tft = (ft * 12)// convert feet into inches
				console.log("covert feet to inches" + tft)
				var totalHieght = (tft + in1);// total hieght in iches
				console.log("your total height in inches " + totalHieght)
				var p1 = (ib * 703); // to find pt1 of BMI
				console.log("part 1 for bti formula " + p1)
				var p2 = (totalHieght ** 2 ); // to find pt2 of bti
				console.log ("part 2 for bti formula " + p2)
				var bti = (p1/p2);/// your BTI 
				console.log("your bti " + bti)
				document.getElementById('bti').innerHTML= bti.toFixed(10);// toFixed is for layout only over laps border if not there
				}
		}
		else { // if NaN 
			window.alert("Please enter your Height and Weight")
			document.getElementById("bti").innerHTML = "Please enter your Height and Weight";
		}
}// end of bti


function reset(){// clear textbox
	document.getElementById("ft").value = "";
	document.getElementById("in1").value = "";
	document.getElementById("ib").value = "";
	document.getElementById("bti").innerHTML = "Unknown";
}  
