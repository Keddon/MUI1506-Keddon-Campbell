var theRescue = 0;


for(var a=0, b=imgFile.length ;a<b ; a++){
	var PetRow = Ti.UI.createTableViewRow({
		hasChild: true,
		name: imgFile[a],
	});
	

var infoImage = Titanium.UI.createImageView({
	image:"images/" + imgFile[a],
	borderRadius: 10,
	width: 80,
	height: 80,
	left: 5,
	top: 0,
	});

var petLabel = Titanium.UI.createLabel({
	text: imgFile[a],
	right: 30,
});
	PetRow.addEventListener("click", Petdatail);
	PetRow.add(infoImage, petLabel);
	PetSection.add(PetRow);
}


function Petdatail(){
	var detailWindow = Titanium.UI.createWindow({
		title: "About ", //+ this.source.name
		backgroundColor:'#f3f3f3',
		
	});
	console.log(this.name);

	win0.openWindow(detailWindow);
	
};


//PetSection.addEventListener("click", Petdatail);
// {
	// console.log(event.source.name);
// });