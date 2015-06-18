Titanium.UI.setBackgroundColor('#000');

var petsImg = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "images");
var imgFile = petsImg.getDirectoryListing();

var win1 = Titanium.UI.createWindow({  
    title:'Rescue Pets',
    backgroundColor:'#c6e1e2'
});

var win0 = Titanium.UI.iOS.createNavigationWindow({
   window: win1
});

var Petslist = Titanium.UI.createTableView({
	style: Titanium.UI.iPhone.TableViewStyle.GROUPED
});



var PetSection= Ti.UI.createTableViewSection({
});

var PetListSection = [PetSection];

Petslist.setData(PetListSection);


// for(var a=0, b=imgFile.length ;a<b ; a++){
	// var PetRow = Ti.UI.createTableViewRow({
		// hasChild: true,
		// name: imgFile[a],
	// });
// 	
// 
// var infoImage = Titanium.UI.createImageView({
	// image:"images/" + imgFile[a],
	// borderRadius: 10,
	// width: 80,
	// height: 80,
	// left: 5,
	// top: 0,
	// });
// 
// var petLabel = Titanium.UI.createLabel({
	// text: imgFile[a],
	// right: 30,
// });
	// PetRow.addEventListener("click", Petdatail);
	// PetRow.add(infoImage, petLabel);
	// PetSection.add(PetRow);
// }

var Jdata = require("JsonD");

Petslist.add(PetSection);
win1.add(Petslist);
win0.open();