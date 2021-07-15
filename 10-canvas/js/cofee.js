let cnvOne = document.getElementById("cnv1");
let ctx = cnvOne.getContext("2d");
	ctx.fillStyle = "green";
	ctx.fillRect(5,5,181,10);
	ctx.fillText("JavaScript 18.1%", 210,15);
	ctx.fillRect(5,20,147,10);	
	ctx.fillText("Java 14.7%", 210,30);
	ctx.fillRect(5,35,143,10);	
	ctx.fillText("C# 14.3%", 210,45);
	ctx.fillRect(5,50,121,10);	
	ctx.fillText("Python 12.1%", 210,60);
	ctx.fillRect(5,65,101,10);	
	ctx.fillText("PHP 10.1%", 210,75);
	ctx.fillRect(5,80,69,10);	
	ctx.fillText("TypeScript 6.9%", 210,90);
	ctx.fillRect(5,95,46,10);	
	ctx.fillText("C++ 4.6%", 210,105);
	ctx.fillRect(5,110,192,10);	
	ctx.fillText("Інші 19.2%", 210,120);

ctx.beginPath();
	ctx.moveTo(299,0);
	ctx.lineTo(299,300);
	ctx.fillStyle = "#000";
	ctx.fillText("Динаміка використання", 310,15);
	ctx.fillText("JavaScript та TypeScript", 360,30);
	ctx.fillText("2012 - 2021", 410,45);
	ctx.moveTo(350,270);
	ctx.fillText("2012", 340,280);
	ctx.lineTo(530,270);
	ctx.fillText("2021", 520,280);
	ctx.moveTo(370,270);
	ctx.lineTo(370,265); //2013
	ctx.moveTo(390,270);
	ctx.lineTo(390,265); //2014
	ctx.moveTo(410,270);
	ctx.lineTo(410,265); //2015
	ctx.moveTo(430,270);
	ctx.lineTo(430,265); //2016
	ctx.moveTo(450,270);
	ctx.lineTo(450,265); //2017
	ctx.moveTo(470,270);
	ctx.lineTo(470,265); //2018
	ctx.moveTo(490,270);
	ctx.lineTo(490,265); //2019
	ctx.moveTo(510,270);
	ctx.lineTo(510,265); //2020
	ctx.stroke();
ctx.beginPath();
	ctx.strokeStyle = "yellow"; //JS
	ctx.moveTo(350,233);
	ctx.lineTo(370,215); //2013
	ctx.moveTo(370,215);
	ctx.lineTo(390,195); //2014
	ctx.moveTo(370,215);
	ctx.lineTo(390,195); //2015
	ctx.moveTo(390,195);
	ctx.lineTo(410,159); //2015
	ctx.moveTo(410,159);
	ctx.lineTo(430,131); //2016
	ctx.moveTo(430,131);
	ctx.lineTo(450,108); //2017
	ctx.moveTo(450,108);
	ctx.lineTo(470,105); //2018
	ctx.moveTo(470,105);
	ctx.lineTo(490,93); //2019
	ctx.moveTo(490,93);
	ctx.lineTo(510,86); //2020
	ctx.moveTo(510,86);
	ctx.lineTo(530,89); //2021
	ctx.stroke();
	ctx.fillStyle = "yellow";
	ctx.fillText("JavaScript", 535,90);
	ctx.fillText("18.1%", 535,100);
ctx.beginPath();
	ctx.strokeStyle = "blue"; //TS	
	ctx.moveTo(430,270);
	ctx.lineTo(450,268); //2017
	ctx.moveTo(450,268);
	ctx.lineTo(470,250); //2018
	ctx.moveTo(470,250);
	ctx.lineTo(490,241); //2019
	ctx.moveTo(490,241);
	ctx.lineTo(510,223); //2020
	ctx.moveTo(510,223);
	ctx.lineTo(530,201); //2021
	ctx.stroke();
	ctx.fillStyle = "blue";
	ctx.fillText("TypeScript", 535,202);
	ctx.fillText("6.9%", 535,212);
ctx.beginPath();
	ctx.strokeStyle = "#000";
	ctx.moveTo(599,0);
	ctx.lineTo(599,300);
	ctx.stroke();    
	ctx.fillStyle = "#000";
	ctx.fillText("Використання у Front-end розробці", 610,15);
	ctx.fillText("JavaScript - 68.2%", 610,55);
	ctx.fillText("TypeScript - 26%", 610,65);
	ctx.fillText("Java - 1.4%", 610,75);
	ctx.fillText("C# - 1.2%", 610,85);
	ctx.fillText("PHP - 1.1%", 610,95);
	ctx.fillText("Інші - 2.1%", 610,105);
	ctx.moveTo(650,150);
	ctx.lineTo(750,150); 
	ctx.moveTo(750,150);
	ctx.lineTo(818,250); //JS 
	ctx.moveTo(750,150);
	ctx.lineTo(814,250); //Java 
	ctx.moveTo(750,150);
	ctx.lineTo(802,250); //C# 
	ctx.moveTo(750,150);
	ctx.lineTo(791,250); //PHP 
	ctx.moveTo(750,150);
	ctx.lineTo(771,250); //Other
	ctx.stroke();
