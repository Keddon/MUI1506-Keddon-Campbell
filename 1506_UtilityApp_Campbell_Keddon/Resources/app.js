// main window of th app
Titanium.UI.setBackgroundColor('#000');

var win0 = Titanium.UI.createWindow({  
    title:'Metrics Conveter',
    backgroundColor:'#fff'
});

var win1 = Titanium.UI.iOS.createNavigationWindow({
   window: win0
});

var IntroView = Titanium.UI.createView({
	width: "90%",
	top: 30,
	height: 70,
	backgroundColor: "#c9ab7b",
	borderRadius: 15,
	viewShadowColor: "#9a9a9a",
	viewShadowOffset: (1,-3),
});

var IntroLabel = Titanium.UI.createLabel({
	text: "This app will be able to caculate your conversion inqueries. Select your conversion choice to start",
	color: "#000",
	font: fontSize = 8, 
	left: 10,
});

var FormView = Titanium.UI.createView({
	top: 120,
	width: "90%",
	backgroundColor: "#45b9c9",
	height: "75%",
	borderRadius: 15,
});

var Fload = require("FormDetail");


win0.add(FormView);
IntroView.add(IntroLabel);
win0.add(IntroView);
win1.open();