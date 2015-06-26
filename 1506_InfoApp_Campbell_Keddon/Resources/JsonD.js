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
			"rescue_history":"Rescued from a fire in his old apartment building ."
		},
		"Baby":{
			"age":"2 years",
			"gender":"Female",
			"breed":"Rottweiler Mix",
			"height":"2 feet",
			"weight":"50 pounds",
			"location":"DC area boarding",
			"appearance":"A shiny black coat with brown spots and the face and body and has brown eyes.",
			"rescue_history":"Rescued after a flood."
		},
		"Apricot":{
			"age":"3 years",
			"gender":"Female",
			"breed":"Maltese Mix",
			"height":"19 inches",
			"weight":"25 pounds",
			"location":"High Kill Shelter SC.",
			"appearance":"All white coat with black pearly eyes",
			"rescue_history":"Found in an alleyway eating off Garbage and waste water."
		},
		"Barclay":{
			"age":"7 weeks",
			"gender":"male",
			"breed":"Shepherd",
			"height":"13 inches",
			"weight":"8 pounds",
			"location":"SC Foster home",
			"appearance":"A fluffy brown coat with black spots on his face, ears and body",
			"rescue_history":"Rescued after a fire."			
		},
		"Elizabeth":{
			"age":"4 years",
			"gender":"Female",
			"breed":"Pug Chi Mix",
			"height":"9 inches",
			"weight":"14 pounds",
			"location":"DC foster home",
			"appearance":"A white coat with pearly black eyes and brown ears. She also has an adorable overbite",
			"rescue_history":"Rescued when she lost her owner to a heart attack."
		},
		"Faye":{
			"age":"8 months",
			"gender":"Female",
			"breed":"Cairn Terrier Mix",
			"height":"19 inches",
			"weight":"17 pounds",
			"location":"High Kill Shelter SC,",
			"appearance":"A fluffy light brown coat with black beady eyes.",
			"rescue_history":"Rescued from an abandoned home."
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

	

if(this.name == "Abetha.jpg"){
		var detailViewL0 = Titanium.UI.createLabel({
		top: 3,
		left: 3,
		text: theRescues.Pets.Abetha.age
	});
		var detailViewL1 = Titanium.UI.createLabel({
		top: 20,
		left: 3,
		text: theRescues.Pets.Abetha.gender
	});
		var detailViewL2 = Titanium.UI.createLabel({
		top: 40,
		left: 3,
		text: theRescues.Pets.Abetha.breed
	});
		var detailViewL3 = Titanium.UI.createLabel({
		top: 60,
		left: 3,
		text: theRescues.Pets.Abetha.height
	});
		var detailViewL4 = Titanium.UI.createLabel({
		top: 80,
		left: 3,
		text: theRescues.Pets.Abetha.weight
	});
		var detailViewL5 = Titanium.UI.createLabel({
		top: 100,
		left: 3,
		text: theRescues.Pets.Abetha.appearance
	});
		var detailViewL6 = Titanium.UI.createLabel({
		top: 220,
		left: 3,
		text: theRescues.Pets.Abetha.location
	});
		var detailViewL7 = Titanium.UI.createLabel({
		top: 170,
		left: 3,
		text: theRescues.Pets.Abetha.rescue_history
	});
	
	detailPetview.add(detailViewL0,detailViewL1,detailViewL2,detailViewL3,detailViewL4,detailViewL5,detailViewL6,detailViewL7);
}else if(this.name == "Baby.jpg"){
		var detailViewL0 = Titanium.UI.createLabel({
		top: 3,
		left: 3,
		text: theRescues.Pets.Baby.age
	});
		var detailViewL1 = Titanium.UI.createLabel({
		top: 20,
		left: 3,
		text: theRescues.Pets.Baby.gender
	});
		var detailViewL2 = Titanium.UI.createLabel({
		top: 40,
		left: 3,
		text: theRescues.Pets.Baby.breed
	});
		var detailViewL3 = Titanium.UI.createLabel({
		top: 60,
		left: 3,
		text: theRescues.Pets.Baby.height
	});
		var detailViewL4 = Titanium.UI.createLabel({
		top: 80,
		left: 3,
		text: theRescues.Pets.Baby.weight
	});
		var detailViewL5 = Titanium.UI.createLabel({
		top: 100,
		left: 3,
		text: theRescues.Pets.Baby.appearance
	});
		var detailViewL6 = Titanium.UI.createLabel({
		top: 220,
		left: 3,
		text: theRescues.Pets.Baby.location
	});
		var detailViewL7 = Titanium.UI.createLabel({
		top: 170,
		left: 3,
		text: theRescues.Pets.Baby.rescue_history
	});
	
	detailPetview.add(detailViewL0,detailViewL1,detailViewL2,detailViewL3,detailViewL4,detailViewL5,detailViewL6,detailViewL7);
}else if(this.name == "Apricot.jpg"){
		var detailViewL0 = Titanium.UI.createLabel({
		top: 3,
		left: 3,
		text: theRescues.Pets.Apricot.age
	});
		var detailViewL1 = Titanium.UI.createLabel({
		top: 20,
		left: 3,
		text: theRescues.Pets.Apricot.gender
	});
		var detailViewL2 = Titanium.UI.createLabel({
		top: 40,
		left: 3,
		text: theRescues.Pets.Apricot.breed
	});
		var detailViewL3 = Titanium.UI.createLabel({
		top: 60,
		left: 3,
		text: theRescues.Pets.Apricot.height
	});
		var detailViewL4 = Titanium.UI.createLabel({
		top: 80,
		left: 3,
		text: theRescues.Pets.Apricot.weight
	});
		var detailViewL5 = Titanium.UI.createLabel({
		top: 100,
		left: 3,
		text: theRescues.Pets.Apricot.appearance
	});
		var detailViewL6 = Titanium.UI.createLabel({
		top: 220,
		left: 3,
		text: theRescues.Pets.Apricot.location
	});
		var detailViewL7 = Titanium.UI.createLabel({
		top: 170,
		left: 3,
		text: theRescues.Pets.Apricot.rescue_history
	});
	
	detailPetview.add(detailViewL0,detailViewL1,detailViewL2,detailViewL3,detailViewL4,detailViewL5,detailViewL6,detailViewL7);
}else if(this.name == "Barclay.jpg"){
		var detailViewL0 = Titanium.UI.createLabel({
		top: 3,
		left: 3,
		text: theRescues.Pets.Barclay.age
	});
		var detailViewL1 = Titanium.UI.createLabel({
		top: 20,
		left: 3,
		text: theRescues.Pets.Barclay.gender
	});
		var detailViewL2 = Titanium.UI.createLabel({
		top: 40,
		left: 3,
		text: theRescues.Pets.Barclay.breed
	});
		var detailViewL3 = Titanium.UI.createLabel({
		top: 60,
		left: 3,
		text: theRescues.Pets.Barclay.height
	});
		var detailViewL4 = Titanium.UI.createLabel({
		top: 80,
		left: 3,
		text: theRescues.Pets.Barclay.weight
	});
		var detailViewL5 = Titanium.UI.createLabel({
		top: 100,
		left: 3,
		text: theRescues.Pets.Barclay.appearance
	});
		var detailViewL6 = Titanium.UI.createLabel({
		top: 220,
		left: 3,
		text: theRescues.Pets.Barclay.location
	});
		var detailViewL7 = Titanium.UI.createLabel({
		top: 170,
		left: 3,
		text: theRescues.Pets.Barclay.rescue_history
	});
	
	detailPetview.add(detailViewL0,detailViewL1,detailViewL2,detailViewL3,detailViewL4,detailViewL5,detailViewL6,detailViewL7);
}else if(this.name == "Elizabeth.jpg"){
		var detailViewL0 = Titanium.UI.createLabel({
		top: 3,
		left: 3,
		text: theRescues.Pets.Elizabeth.age
	});
		var detailViewL1 = Titanium.UI.createLabel({
		top: 20,
		left: 3,
		text: theRescues.Pets.Elizabeth.gender
	});
		var detailViewL2 = Titanium.UI.createLabel({
		top: 40,
		left: 3,
		text: theRescues.Pets.Elizabeth.breed
	});
		var detailViewL3 = Titanium.UI.createLabel({
		top: 60,
		left: 3,
		text: theRescues.Pets.Elizabeth.height
	});
		var detailViewL4 = Titanium.UI.createLabel({
		top: 80,
		left: 3,
		text: theRescues.Pets.Elizabeth.weight
	});
		var detailViewL5 = Titanium.UI.createLabel({
		top: 100,
		left: 3,
		text: theRescues.Pets.Elizabeth.appearance
	});
		var detailViewL6 = Titanium.UI.createLabel({
		top: 220,
		left: 3,
		text: theRescues.Pets.Elizabeth.location
	});
		var detailViewL7 = Titanium.UI.createLabel({
		top: 170,
		left: 3,
		text: theRescues.Pets.Elizabeth.rescue_history
	});
	
	detailPetview.add(detailViewL0,detailViewL1,detailViewL2,detailViewL3,detailViewL4,detailViewL5,detailViewL6,detailViewL7);
}else if(this.name == "Faye.jpg"){
		var detailViewL0 = Titanium.UI.createLabel({
		top: 3,
		left: 3,
		text: theRescues.Pets.Faye.age
	});
		var detailViewL1 = Titanium.UI.createLabel({
		top: 20,
		left: 3,
		text: theRescues.Pets.Faye.gender
	});
		var detailViewL2 = Titanium.UI.createLabel({
		top: 40,
		left: 3,
		text: theRescues.Pets.Faye.breed
	});
		var detailViewL3 = Titanium.UI.createLabel({
		top: 60,
		left: 3,
		text: theRescues.Pets.Faye.height
	});
		var detailViewL4 = Titanium.UI.createLabel({
		top: 80,
		left: 3,
		text: theRescues.Pets.Faye.weight
	});
		var detailViewL5 = Titanium.UI.createLabel({
		top: 100,
		left: 3,
		text: theRescues.Pets.Faye.appearance
	});
		var detailViewL6 = Titanium.UI.createLabel({
		top: 220,
		left: 3,
		text: theRescues.Pets.Faye.location
	});
		var detailViewL7 = Titanium.UI.createLabel({
		top: 170,
		left: 3,
		text: theRescues.Pets.Faye.rescue_history
	});
	
	detailPetview.add(detailViewL0,detailViewL1,detailViewL2,detailViewL3,detailViewL4,detailViewL5,detailViewL6,detailViewL7);
}

	console.log(this.name);
	detailWindow.add(detailImage, detailPetview);
	win0.openWindow(detailWindow);
	
};
