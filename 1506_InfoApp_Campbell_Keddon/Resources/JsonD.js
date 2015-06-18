var theRescues = {
	"Pets" : {
		"Abetha":{
			"age":"10 months",
			"gender":"Female",
			"breed":"Black labrador retriever",
			"height":"21 inches",
			"weight":"37 pounds",
			"location":"DC area boarding",
			"appearance":"Black labrador retriever pup, with bright brown eyes and big ears.",
			"rescue history":"Rescued from a fire in his old apartment building ."
		},
		"Baby":{
			"age":"2 years",
			"gender":"Female",
			"breed":"Rottweiler Mix",
			"height":"2 feet",
			"weight":"50 pounds",
			"location":"DC area boarding",
			"appearance":"A shiny black coat with brown spots and the face and body and has brown eyes.",
			"rescue history":"Rescued after a flood."
		},
		"Apricot":{
			"age":"3 years",
			"gender":"Female",
			"breed":"Maltese Mix",
			"height":"19 inches",
			"weight":"25 pounds",
			"location":"High Kill Shelter SC.",
			"appearance":"All white coat with black pearly eyes",
			"rescue history":"Found in an alleyway eating off Garbage and waste water."
		},
		"Barclaay":{
			"age":"7 weeks",
			"gender":"male",
			"breed":"Shepherd",
			"height":"13 inches",
			"weight":"8 pounds",
			"location":"SC Foster home",
			"appearance":"A fluffy brown coat with black spots on his face, ears and body",
			"rescue history":"Rescued after a fire."			
		},
		"Elizabeth":{
			"age":"4 years",
			"gender":"Female",
			"breed":"Pug Chi Mix",
			"height":"9 inches",
			"weight":"14 pounds",
			"location":"DC foster home",
			"appearance":"A white coat with pearly black eyes and brown ears. She also has an adorable overbite",
			"rescue history":"Rescued when she lost her owner to a heart attack."
		},
		"Faye":{
			"age":"8 months",
			"gender":"Female",
			"breed":"Cairn Terrier Mix",
			"height":"19 inches",
			"weight":"17 pounds",
			"location":"High Kill Shelter SC,",
			"appearance":"A fluffy light brown coat with black beady eyes.",
			"rescue history":"Rescued from an abandoned home."
		}
	}
	
};








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
		title: "About " + this.name,
		backgroundColor:'#f3f3f3',
		
	});
	
	var detailImage = Titanium.UI.createImageView({
	image:"images/" + this.name,
	borderRadius: 10,
	height: "50%",
	top: 0,
	});
	
	var detailPetview = Titanium.UI.createView({
		top: 260,
		borderRadius: 10,
		backgroundColor: "#a4ecf0",
		width: "90%"
	});
	
	var detailLabel = Titanium.UI.createLabel({
		text: "name"
	});

	console.log(this.name);
	detailPetview.add(detailLabel);
	detailWindow.add(detailImage, detailPetview);
	win0.openWindow(detailWindow);
	
};


//PetSection.addEventListener("click", Petdatail);
// {
	// console.log(event.source.name);
// });