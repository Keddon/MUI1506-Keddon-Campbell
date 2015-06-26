//var Pload = require("FuncP");

var PrView = Titanium.UI.createView({
	borderRadius: 15,
	width: "85%",
	left: 10,
	top: 30,
	height: 70,
	backgroundColor: "#96efa5",
	viewShadowColor: "#9a9a9a",
	viewShadowOffset: (1,-3),
});

var TeView = Titanium.UI.createView({
	borderRadius: 15,
	width: "85%",
	left: 10,
	top: 130,
	height: 70,
	backgroundColor: "#ef9c96",
	viewShadowColor: "#9a9a9a",
	viewShadowOffset: (1,-3),
});

var LeView = Titanium.UI.createView({
	borderRadius: 15,
	width: "85%",
	left: 10,
	top: 250,
	height: 70,
	backgroundColor: "#e8ef96",	
	viewShadowColor: "#9a9a9a",
	viewShadowOffset: (1,-3),
});

var WeView = Titanium.UI.createView({
	borderRadius: 15,
	width: "85%",
	left: 10,
	top: 370,
	height: 70,
	backgroundColor: "#96eeef",
	viewShadowColor: "#9a9a9a",
	viewShadowOffset: (1,-3),	
});

var PressLabel = Titanium.UI.createLabel({
	text: "Pressure?",
	fontSize : 150,
	font:fontWeight = "bold",
	color: "#606060",
});

var LengthLabel = Titanium.UI.createLabel({
	text: "Length?",
	fontSize : 150,
	font:fontWeight = "bold",
	color: "#606060",
});

var WeightLabel = Titanium.UI.createLabel({
	text: "Weight?",
	fontSize : 150,
	font:fontWeight = "bold",
	color: "#606060",
});

var PressHint = Titanium.UI.createLabel({
	top: 50,
	text: "Used to calculate pressure conversions..",
	font: fontSize = 8,
});


WeView.add(WeightLabel);
LeView.add(LengthLabel);
PrView.add(PressLabel);
FormView.add(PrView,TeView,LeView,WeView);




//////////////////////////////////////////////////////////////////////////////////////////////////////





var pressureWindow = Titanium.UI.createWindow({
	backgroundColor: "#fff"
});

var pressureInFo = Titanium.UI.createView({
	top: 30,
	width: "85%",
	height: "80%",
	backgroundColor:"#96efa5",
	viewShadowColor:"#606060",
	viewShadowOffset: (2,-3),
});


var convertFrom = Titanium.UI.createView({
	top: 60,
	left: 20,
	width: "25%",
	height: "10%",
	borderReadius: 15,
	backgroundColor: "#fff",
});

var CFlabel = Titanium.UI.createLabel({
	text: "PSI",
});

convertFrom.add(CFlabel);

var convertTo = Titanium.UI.createView({
	top: 150,
	left: 20,
	borderReadius: 15,
	backgroundColor: "#fff",
	width: "25%",
	height: "10%",
});

var CTlabel = Titanium.UI.createLabel({
	text: "PSI",
});

convertTo.add(CTlabel);

var convetingValue = Titanium.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "Enter value here",
	left: 20,
	top: 200,
	width: "45%",
	height: "10%",
});

var ConfirmPrCalc = Titanium.UI.createView({
	backgroundColor: "#5ed1ee",
	top: 400,
	left: 20,
	borderRadius: 10,
	width: "45%",
	height: "10%",
});

var confLabel = Titanium.UI.createLabel({
	text: "Calculate!",
});
var hintLabel1 = Titanium.UI.createLabel({
	text: "From",
	left: 30,
	top: 40,
	font: fontSize = 2,
	color: "#606060",
});

var hintLabel2 = Titanium.UI.createLabel({
	text: "To",
	left: 30,
	top: 120,
	font: fontSize = 2,
	color: "#606060",
});

var resetLabel = Titanium.UI.createLabel({
	text: "reset values?",
	right: 20,
	top: 410,
	font: fontSize = 2,
	color: "#606060",
});

var hintLabel3 = Titanium.UI.createLabel({
	text: "tap to change units",
	right: 20,
	top: 80,
	font: fontSize = 2,
	color: "#606060",
});

var hintLabel4 = Titanium.UI.createLabel({
	text: "enter a value",
	right: 20,
	top: 220,
	font: fontSize = 2,
	color: "#606060",
});

ConfirmPrCalc.add(confLabel);
pressureInFo.add(convertFrom,convertTo,convetingValue,ConfirmPrCalc,resetLabel,hintLabel1,hintLabel2,hintLabel3,hintLabel4);
pressureWindow.add(pressureInFo);




function PressureListener () {
	win1.openWindow(pressureWindow);
};

function PressureCalc(){
	if(convetingValue.value == ""){
		alert("Try Adding a numbers to the required field");
	}else if(convetingValue.value != Number()){
		alert("Try Real numbers");
	}else if(CFlabel.text == CTlabel.text){
		alert("Try two different units");
	}else if (CFlabel.text == "PSI" && CTlabel.text == "BAR"){
		alert(convetingValue.value + " from " + CFlabel.text + " to " + CTlabel.text + " is " + (convetingValue.value*0.0689475729));
	}else if (CFlabel.text == "PSI" && CTlabel.text == "Kgcm"){
		alert(convetingValue.value + " from " + CFlabel.text + " to " + CTlabel.text + " is " + (convetingValue.value*0.0703069578296));
	}else if (CFlabel.text == "BAR" && CTlabel.text == "Kgcm"){
		alert(convetingValue.value + " from " + CFlabel.text + " to " + CTlabel.text + " is " + (convetingValue.value*1.01971621298));
	}else if (CFlabel.text == "BAR" && CTlabel.text == "PSI"){
		alert(convetingValue.value + " from " + CFlabel.text + " to " + CTlabel.text + " is " + (convetingValue.value*14.5037738007));
	}else if (CFlabel.text == "Kgcm" && CTlabel.text == "PSI"){
		alert(convetingValue.value + " from " + CFlabel.text + " to " + CTlabel.text + " is " + (convetingValue.value*14.223343334292142));
	}else if (CFlabel.text == "Kgcm" && CTlabel.text == "BAR"){
		alert(convetingValue.value + " from " + CFlabel.text + " to " + CTlabel.text + " is " + (convetingValue.value*0.9806649999980076));
	}
};

function changeUnits1(){
	if(CFlabel.text == "PSI"){
		CFlabel.text = "BAR";
	}else if(CFlabel.text == "BAR"){
		CFlabel.text = "Kgcm";
	}else if(CFlabel.text == "Kgcm"){
		CFlabel.text = "PSI";
	}
};

function changeUnits2(){
	if(CTlabel.text == "PSI"){
		CTlabel.text = "BAR";
	}else if(CTlabel.text == "BAR"){
		CTlabel.text = "Kgcm";
	}else if(CTlabel.text == "Kgcm"){
		CTlabel.text = "PSI";
	}
};

function Freset(){
	CFlabel.text = "PSI";
	CTlabel.text = "PSI";
	convetingValue.value = 0;
};






ConfirmPrCalc.addEventListener("click", PressureCalc);
convertFrom.addEventListener("click", changeUnits1);
convertTo.addEventListener("click", changeUnits2);
resetLabel.addEventListener("click", Freset);
PrView.addEventListener("click", PressureListener);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////



var lengthWindow = Titanium.UI.createWindow({
	backgroundColor: "#fff"
});

var lengthInFo = Titanium.UI.createView({
	top: 30,
	width: "85%",
	height: "80%",
	backgroundColor:"#dfee5e",
	viewShadowColor:"#606060",
	viewShadowOffset: (2,-3),
});


var LconvertFrom = Titanium.UI.createView({
	top: 60,
	left: 20,
	width: "25%",
	height: "10%",
	borderReadius: 15,
	backgroundColor: "#fff",
});

var LCFlabel = Titanium.UI.createLabel({
	text: "mm",
});

LconvertFrom.add(LCFlabel);

var LconvertTo = Titanium.UI.createView({
	top: 150,
	left: 20,
	borderReadius: 15,
	backgroundColor: "#fff",
	width: "25%",
	height: "10%",
});

var LCTlabel = Titanium.UI.createLabel({
	text: "mm",
});

LconvertTo.add(LCTlabel);

var LconvetingValue = Titanium.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "Enter value here",
	left: 20,
	top: 200,
	width: "45%",
	height: "10%",
});

var LConfirmPrCalc = Titanium.UI.createView({
	backgroundColor: "#79ee5e",
	top: 400,
	left: 20,
	borderRadius: 10,
	width: "45%",
	height: "10%",
});

var LconfLabel = Titanium.UI.createLabel({
	text: "Calculate!",
});
var LhintLabel1 = Titanium.UI.createLabel({
	text: "From",
	left: 30,
	top: 40,
	font: fontSize = 2,
	color: "#606060",
});

var LhintLabel2 = Titanium.UI.createLabel({
	text: "To",
	left: 30,
	top: 120,
	font: fontSize = 2,
	color: "#606060",
});

var LresetLabel = Titanium.UI.createLabel({
	text: "reset values?",
	right: 20,
	top: 410,
	font: fontSize = 2,
	color: "#606060",
});

var LhintLabel3 = Titanium.UI.createLabel({
	text: "tap to change units",
	right: 20,
	top: 80,
	font: fontSize = 2,
	color: "#606060",
});

var LhintLabel4 = Titanium.UI.createLabel({
	text: "enter a value",
	right: 20,
	top: 220,
	font: fontSize = 2,
	color: "#606060",
});

LConfirmPrCalc.add(LconfLabel);
lengthInFo.add(LconvertFrom,LconvertTo,LconvetingValue,LConfirmPrCalc,LresetLabel,LhintLabel1,LhintLabel2,LhintLabel3,LhintLabel4);
lengthWindow.add(lengthInFo);




function LengthListener () {
	win1.openWindow(lengthWindow);
};

function LengthCalc(){
	if(LconvetingValue.value != Number()){
		alert("Try Real numbers");
	}else if(LCFlabel.text == LCTlabel.text){
		alert("Try two different units");
	}else if (LCFlabel.text == "mm" && LCTlabel.text == "Me"){
		alert(LconvetingValue.value + " from " + LCFlabel.text + " to " + LCTlabel.text + " is " + (LconvetingValue.value*0.001));
	}else if (LCFlabel.text == "mm" && LCTlabel.text == "KM"){
		alert(LconvetingValue.value + " from " + LCFlabel.text + " to " + LCTlabel.text + " is " + (LconvetingValue.value*0.000001));
	}else if (LCFlabel.text == "Me" && LCTlabel.text == "KM"){
		alert(LconvetingValue.value + " from " + LCFlabel.text + " to " + LCTlabel.text + " is " + (LconvetingValue.value*0.001));
	}else if (LCFlabel.text == "Me" && LCTlabel.text == "mm"){
		alert(LconvetingValue.value + " from " + LCFlabel.text + " to " + LCTlabel.text + " is " + (LconvetingValue.value*1000));
	}else if (LCFlabel.text == "KM" && LCTlabel.text == "mm"){
		alert(LconvetingValue.value + " from " + LCFlabel.text + " to " + LCTlabel.text + " is " + (LconvetingValue.value*1000000));
	}else if (LCFlabel.text == "KM" && LCTlabel.text == "Me"){
		alert(LconvetingValue.value + " from " + LCFlabel.text + " to " + LCTlabel.text + " is " + (LconvetingValue.value*1000));
	}
};

function LchangeUnits1(){
	if(LCFlabel.text == "mm"){
		LCFlabel.text = "Me";
	}else if(LCFlabel.text == "Me"){
		LCFlabel.text = "KM";
	}else if(LCFlabel.text == "KM"){
		LCFlabel.text = "mm";
	}
};

function LchangeUnits2(){
	if(LCTlabel.text == "mm"){
		LCTlabel.text = "Me";
	}else if(LCTlabel.text == "Me"){
		LCTlabel.text = "KM";
	}else if(LCTlabel.text == "KM"){
		LCTlabel.text = "mm";
	}
};

function LFreset(){
	LCFlabel.text = "mm";
	LCTlabel.text = "mm";
	LconvetingValue.value = 0;
};






LConfirmPrCalc.addEventListener("click", LengthCalc);
LconvertFrom.addEventListener("click", LchangeUnits1);
LconvertTo.addEventListener("click", LchangeUnits2);
LresetLabel.addEventListener("click", LFreset);
LeView.addEventListener("click", LengthListener);


/////////////////////////////////////////////////////////////////////////////////////////////////////////



var weightWindow = Titanium.UI.createWindow({
	backgroundColor: "#fff"
});

var weightInFo = Titanium.UI.createView({
	top: 30,
	width: "85%",
	height: "80%",
	backgroundColor:"#dfee5e",
	viewShadowColor:"#606060",
	viewShadowOffset: (2,-3),
});


var WconvertFrom = Titanium.UI.createView({
	top: 60,
	left: 20,
	width: "25%",
	height: "10%",
	borderReadius: 15,
	backgroundColor: "#fff",
});

var WCFlabel = Titanium.UI.createLabel({
	text: "mg",
});

WconvertFrom.add(WCFlabel);

var WconvertTo = Titanium.UI.createView({
	top: 150,
	left: 20,
	borderReadius: 15,
	backgroundColor: "#fff",
	width: "25%",
	height: "10%",
});

var WCTlabel = Titanium.UI.createLabel({
	text: "mg",
});

WconvertTo.add(WCTlabel);

var WconvetingValue = Titanium.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "Enter value here",
	left: 20,
	top: 200,
	width: "45%",
	height: "10%",
});

var WConfirmPrCalc = Titanium.UI.createView({
	backgroundColor: "#79ee5e",
	top: 400,
	left: 20,
	borderRadius: 10,
	width: "45%",
	height: "10%",
});

var WconfLabel = Titanium.UI.createLabel({
	text: "Calculate!",
});
var WhintLabel1 = Titanium.UI.createLabel({
	text: "From",
	left: 30,
	top: 40,
	font: fontSize = 2,
	color: "#606060",
});

var WhintLabel2 = Titanium.UI.createLabel({
	text: "To",
	left: 30,
	top: 120,
	font: fontSize = 2,
	color: "#606060",
});

var WresetLabel = Titanium.UI.createLabel({
	text: "reset values?",
	right: 20,
	top: 410,
	font: fontSize = 2,
	color: "#606060",
});

var WhintLabel3 = Titanium.UI.createLabel({
	text: "tap to change units",
	right: 20,
	top: 80,
	font: fontSize = 2,
	color: "#606060",
});

var WhintLabel4 = Titanium.UI.createLabel({
	text: "enter a value",
	right: 20,
	top: 220,
	font: fontSize = 2,
	color: "#606060",
});

WConfirmPrCalc.add(WconfLabel);
weightInFo.add(WconvertFrom,WconvertTo,WconvetingValue,WConfirmPrCalc,WresetLabel,WhintLabel1,WhintLabel2,WhintLabel3,WhintLabel4);
weightWindow.add(weightInFo);




function WeightListener () {
	win1.openWindow(weightWindow);
};

function WeightCalc(){
	if(WconvetingValue.value != Number()){
		alert("Try Real numbers");
	}else if(WCFlabel.text == WCTlabel.text){
		alert("Try two different units");
	}else if (WCFlabel.text == "mg" && WCTlabel.text == "Gr"){
		alert(WconvetingValue.value + " from " + WCFlabel.text + " to " + WCTlabel.text + " is " + (WconvetingValue.value*0.001));
	}else if (WCFlabel.text == "mg" && WCTlabel.text == "KG"){
		alert(WconvetingValue.value + " from " + WCFlabel.text + " to " + WCTlabel.text + " is " + (WconvetingValue.value*0.000001));
	}else if (WCFlabel.text == "Gr" && WCTlabel.text == "KG"){
		alert(WconvetingValue.value + " from " + WCFlabel.text + " to " + WCTlabel.text + " is " + (WconvetingValue.value*0.001));
	}else if (WCFlabel.text == "Gr" && WCTlabel.text == "mg"){
		alert(WconvetingValue.value + " from " + WCFlabel.text + " to " + WCTlabel.text + " is " + (WconvetingValue.value*1000));
	}else if (WCFlabel.text == "KG" && WCTlabel.text == "mg"){
		alert(WconvetingValue.value + " from " + WCFlabel.text + " to " + WCTlabel.text + " is " + (WconvetingValue.value*1000000));
	}else if (WCFlabel.text == "KG" && WCTlabel.text == "Gr"){
		alert(WconvetingValue.value + " from " + WCFlabel.text + " to " + WCTlabel.text + " is " + (WconvetingValue.value*1000));
	}
};

function WchangeUnits1(){
	if(WCFlabel.text == "mg"){
		WCFlabel.text = "Gr";
	}else if(WCFlabel.text == "Gr"){
		WCFlabel.text = "KG";
	}else if(WCFlabel.text == "KG"){
		WCFlabel.text = "mg";
	}
};

function WchangeUnits2(){
	if(WCTlabel.text == "mg"){
		WCTlabel.text = "Gr";
	}else if(WCTlabel.text == "Gr"){
		WCTlabel.text = "KG";
	}else if(WCTlabel.text == "KG"){
		WCTlabel.text = "mg";
	}
};

function WFreset(){
	WCFlabel.text = "mm";
	WCTlabel.text = "mm";
	WconvetingValue.value = 0;
};






WConfirmPrCalc.addEventListener("click", WeightCalc);
WconvertFrom.addEventListener("click", WchangeUnits1);
WconvertTo.addEventListener("click", WchangeUnits2);
WresetLabel.addEventListener("click", WFreset);
WeView.addEventListener("click", WeightListener);


