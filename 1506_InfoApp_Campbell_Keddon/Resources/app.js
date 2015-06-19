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



var Jdata = require("JsonD");

Petslist.add(PetSection);
win1.add(Petslist);
win0.open();
